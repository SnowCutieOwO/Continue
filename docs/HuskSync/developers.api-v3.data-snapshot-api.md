# 数据快照 API

HuskSync 3.0 提供了获取、创建、编辑与删除指定玩家一段时间内 `DataSnapshot` 的 API。本章节将会带你浏览如何通过 HuskSync API 删除快照。

在阅读本章节时，默认你已阅读了 [API](developers.api-v3.md) 介绍页，并已向你的项目中导入了 HuskSync（v3.x）依赖。

## 目录

1. [获取玩家](#1-获取玩家)
2. [获取玩家的数据快照](#2-获取玩家的数据快照)
    1. [获取玩家的当前数据](#21-获取玩家的当前数据)
    2. [获取玩家最后保存的数据快照](#22-获取用户最后保存的数据快照)
    3. [获取玩家已保存的数据快照](#23-获取玩家已保存的数据快照)
3. [数据快照的打包与解包](#3-数据快照的打包与解包)
4. [获取和设置数据快照中的数据](#4-获取和设置数据快照内的数据)
    1. [数据类型](#41-数据类型)
    2. [编辑生命值、饱食度、经验值和游戏模式数据](#42-编辑生命值饥饿度经验值和游戏模式数据)
    3. [编辑背包和末影箱数据](#43-编辑背包和末影箱数据)
    4. [编辑位置数据](#44-编辑位置数据)
5. [创建新的数据快照](#5-创建新的数据快照)
    1. [从玩家当前数据中创建新的快照](#51-从玩家当前数据中创建新快照)
    2. [从零创建新的快照](#52-从零创建新快照)
6. [删除数据快照](#6-删除数据快照)

## 1. 获取玩家

* HuskSync 有一个 `User` 对象，代表储存在数据库中的玩家对象。你可以通过方法 `HuskSyncAPI#getUser(uuid)` 来获取玩家对象。

### 代码示例——通过 UUID 获取玩家对象

```Java
// getUser() returns a CompletableFuture supplying an Optional<User>
huskSyncAPI.getUser(uuid).thenAccept(optionalUser -> {
    // Check if we found a user by that UUID either online or on the database
    if (optionalUser.isEmpty()) {
        // If we didn't, we'll log that they don't exist
        System.out.println("User does not exist!");
        return;
    }
    
    // The User object provides methods for getting a user's UUID and username
    System.out.println("Found %s", optionalUser.get().getUsername());
});

```

* 若你有一个 `org.bukkit.Player` 对象，你可以使用 `BukkitPlayer#adapt(player)` 来获取 `OnlineUser`（继承 `User`），代表一个已登入的玩家。

### 代码示例——获取在线玩家

```Java
// Get an online user
OnlineUser user = huskSyncAPI.getUser(player);
System.out.println("Hello, %s!", user.getUsername());
```

## 2. 获取玩家的数据快照

### 2.1 获取玩家的当前数据

* HuskSync 提供了一种用于获取玩家当前数据的方法 `HuskSyncAPI#getCurrentData(User)`，会返回一个提供了 `Optional<DataSnapshot.Unpacked>` 的 `CompletableFuture`。
* 该方法会获取在线用户当前的数据，若不在线则会获取最后保存的数据（如果未曾出现在此服务器中，则会返回一个空的 optional 对象）

#### 代码示例——获取玩家当前数据快照

```Java
// Get a user's current data
huskSyncAPI.getCurrentData(user).thenAccept(optionalSnapshot -> {
    if (optionalSnapshot.isEmpty()) {
        System.out.println("Couldn't get data for %s", user.getUsername());
        return;
    }
    
    // Get the snapshot, which you can then do stuff with
    DataSnapshot.Unpacked snapshot = optionalSnapshot.get();
});
```

### 2.2 获取用户最后保存的数据快照

* 需要注意的是前一个方法获取的快照*不一定会保存在数据库中*
* 若想要获取用户最后保存的快照，则需要使用 `HuskSyncAPI#getLatestSnapshot(User)`

#### 代码示例——获取用户最后保存的数据快照

```Java
// Get a user's current data
huskSyncAPI.getCurrentData(user).thenAccept(optionalSnapshot -> {
    if (optionalSnapshot.isEmpty()) {
        System.out.println("Couldn't get data for %s", user.getUsername());
        return;
    }
    
    // Get the snapshot, which you can then do stuff with
    DataSnapshot.Unpacked snapshot = optionalSnapshot.get();
});
```

### 2.3 获取玩家已保存的数据快照

* 若你想要获取指定玩家保存的所有快照，你可以使用方法 `HuskSyncAPI#getSnapshots(User)`。该方法会返回一个提供了 `Optional<List<DataSnapshot.Unpacked>>` 的 `CompletableFuture`。

#### 代码示例——获取玩家已保存的数据快照

```Java
// Get a user's saved snapshots
huskSyncAPI.getSnapshots(user).thenAccept(optionalSnapshots -> {
    if (optionalSnapshots.isEmpty()) {
        System.out.println("%s has no saved snapshots!", user.getUsername());
        return;
    }
    
    // Get the list of snapshots, which you can then do stuff with
    List<DataSnapshot.Unpacked> snapshots = optionalSnapshots.get();
});
```

## 3. 数据快照的打包与解包

* HuskSync 提供了两种类型的 `DataSnapshot` 对象：`DataSnapshot.Packed` 和 `DataSnapshot.Unpacked`。
    * `DataSnapshot.Packed` 是一个数据被序列化为 byte map 的快照。该快照可以被存入数据库或 Redis。
    * `DataSnapshot.Unpacked` 是一个从 `DataSnapshot.Packed` 解包得到的对象。你可以获取、设置并控制快照中的数据。
* 大多数情况下，你无需担心这些内容，因为 HuskSync 会自动处理 `Unpacked` 快照。但是，如果你需要在这两种类型的数据之间转化（例如复制快照），你可以使用 `HuskSyncAPI#packSnapshot(DataSnapshot.Unpacked)` 和 `HuskSyncAPI#unpackSnapshot(DataSnapshot.Packed)` 方法。
* 编辑方法 `HuskSyncAPI#editPackedSnapshot(DataSnapshot.Packed`、`Consumer<DataSnapshot.Unpacked>)` 提供了额外的解包、编辑操作，并能将 `DataSnapshot` 对象重新打包。

#### 代码示例——数据的打包与解包
```Java
// Get a user's current data
huskSyncAPI.getCurrentData(user).thenAccept(optionalSnapshot -> {
    if (optionalSnapshot.isEmpty()) {
        System.out.println("User does not exist!");
        return;
    }
    
    // Get the snapshot
    DataSnapshot.Unpacked snapshot = optionalSnapshot.get();
    
    // Pack the snapshot
    DataSnapshot.Packed packedSnapshot = huskSyncAPI.packSnapshot(snapshot);
    // You can call #copy() on a packed snapshot to make a copy of it, which you can then edit
    
    // Unpack the snapshot again
    DataSnapshot.Unpacked unpackedSnapshot = huskSyncAPI.unpackSnapshot(packedSnapshot);
});
```

## 4. 获取和设置数据快照内的数据

* 在 `DataSnapshot` 内的数据会以不同类型的 `Data` 表示；`Data.Item.Inventory` 表示背包数据，而 `Data.Health` 表示玩家当前的生命值及生命值上限，`Data.Hunger` 表示玩家当前的饱食度及饱食度上限，诸如此类。
* 在 Bukkit 系服务端中，`BukkitData` 继承了 `Data` 类并提供了在 `Bukkit` 和 `HuskSync` 数据类型间转化的方法。
* `DataSnapshot.Unpacked` 提供了在对象内获取和设置 `Data` 的方法，例如 `DataSnapshot.Unpacked#getInventory()`（会返回一个 `Optional` 对象）和 `DataSnapshot.Unpacked#setHealth(Data.Health)`。

### 4.1 数据类型

|识别名称|描述|获取方法|设置方法|
|---|---|---|---|
|`husksync:inventory`|玩家背包与快捷栏|`#getInventory`|`#setInventory`|
|`husksync:ender_chest`|玩家末影箱|`#getEnderChest`|`#setEnderChest`|
|`husksync:potion_effects`|玩家的药水效果|`#getPotionEffects`|`#setPotionEffects`|
|`husksync:advancements`|玩家获得的成就|`#getAdvancements`|`#setAdvancements`|
|`husksync:location`|玩家所处的位置|`#getLocation`|`#setLocation`|
|`husksync:statistics`|玩家的统计数据|`#getStatistics`|`#setStatistics`|
|`husksync:health`|玩家的生命值|`#getHealth`|`#setHealth`|
|`husksync:hunger`|玩家的饥饿度、饱和度和消耗度|`#getHunger`|`#setHunger`|
|`husksync:attributes`|玩家的属性|`#getAttributes`|`#setAttributes`|
|`husksync:experience`|玩家的等级、经验值和得分|`#getExperience`|`#setExperience`|
|`husksync:game_mode`|玩家的游戏模式|`#getGameMode`|`#setGameMode`|
|`husksync:flight_status`|玩家是否能够飞行/当前飞行状态|`#getFlightStatus`|`#setFlightStatus`|
|`husksync:persistent_data`|玩家的持久化数据容器|`#getPersistentData`|`#setPersistentData`|
|自定义类型; `plugin:foo`|任意自定义类型|`#getData(Identifer)`|`#setData(Identifier)`|

* 开发者可以提供自己的 `Data` 类来实现 `Data` 示例的同步与保存，并将他们类的 `Serializer<>` 注册为 `Identifier`。见[自定义数据 API](developers.api-v3.custom-data-api.md)章节获取更多信息。
* 你只能在服务器上注册了序列化的快照或[配置文件](setup.config-file.md)启用的内置数据类型中获取数据。若你尝试从快照中获取不支持类型的数据，你会得到一个空的 `Optional`。

### 4.2 编辑生命值、饥饿度、经验值和游戏模式数据

* `DataSnapshot.Unpacked#getHealth()` 会返回一个 `Optional<Data.Health>` 对象，你可以以此修改玩家的当前生命值和上限。
* `DataSnapshot.Unpacked#setHealth(Data.Health)` 会设置玩家当前的生命值与上限。你可以创建一个 `Health` 示例来在 `BukkitData.Health.from(double, double, double)` 之间传递。
* 对饥饿值、经验值和游戏模式数据类型的修改方式与此相同。
* 在更新快照中的数据后，你可以使用 `DataSnapshot.Unpacked#setHealth(Data.Health)` 方法将其保存至数据库。

#### 代码示例——获取并设置玩家的生命值

```Java
// Get a user's current data
huskSyncAPI.getCurrentData(user).thenAccept(optionalSnapshot -> {
    if (optionalSnapshot.isEmpty()) {
        System.out.println("User does not exist!");
        return;
    }
    
    // Get the player's health and game mode from the snapshot
    DataSnapshot.Unpacked snapshot = optionalSnapshot.get();
    Optional<Data.Health> healthOptional = snapshot.getHealth();
    if (healthOptional.isEmpty()) {
        System.out.println("User has no health data!");
        return;
    }
    Optional<Data.GameMode> gameModeOptional = snapshot.getGameMode();
    if (gameModeOptional.isEmpty()) {
        System.out.println("User has no game mode data!");
        return;
    }
    Optional<Data.FlightStatus> flightStatusOptional = snapshot.getFlightStatus();
    if (flightStatusOptional.isEmpty()) {
        System.out.println("User has no flight status data!");
        return;
    }
    // getExperience() and getHunger() work similarly
        
    // Get the health data
    Data.Health health = healthOptional.get();
    double currentHealth = health.getCurrentHealth(); // Current health
    double healthScale = health.getHealthScale(); // Health scale (e.g., 20 for 20 hearts)
    snapshot.setHealth(BukkitData.Health.from(20, 20));
    // Need max health? Look at the Attributes data type.
    
    // Get the game mode data
    Data.GameMode gameMode = gameModeOptional.get();
    String gameModeName = gameMode.getGameModeName(); // Game mode name (e.g., "SURVIVAL")
    snapshot.setGameMode(BukkitData.GameMode.from("SURVIVAL"));

    // Get flight data
    Data.FlightStatus flightStatus = flightStatusOptional.get(); // Whether the player is flying
    boolean isFlying = flightStatus.isFlying(); // Whether the player is *currently* flying
    boolean canFly = flightStatus.isAllowFlight(); // Whether the player *can* fly
    snapshot.setFlightStatus(BukkitData.FlightStatus.from(false, false));
});
```
* 若要让代码更加简洁，我们可以使用 `HuskSyncAPI#editCurrentData()` 方法来获取玩家当前数据并在 `Consumer` 类中进行操作。
* 在 `Consumer` 中编辑 `DataSnapshot` 对象的结果会自动传递给 `HuskSyncAPI#setCurrentData()`，将快照保存至数据库并在玩家在线时更新。

#### 代码示例——编辑玩家的生命值

```Java
// Edit a user's current data
huskSyncAPI.editCurrentData(user, snapshot -> {
    // Get the player's health
    Optional<Data.Health> healthOptional = snapshot.getHealth();
    if (healthOptional.isEmpty()) {
        System.out.println("User has no health data!");
        return;
    }
    
    // Get the health data
    Data.Health health = healthOptional.get();
    
    // Get the player's current health
    double currentHealth = health.getCurrentHealth();
    
    // Get the player's max health
    double maxHealth = health.getMaxHealth();
    
    // Set the player's health
    snapshot.setHealth(BukkitData.Health.from(20, 20, 20));
});
```

### 4.3 编辑背包和末影箱数据

* 我们可以通过 `DataSnapshot.Unpacked#getInventory()` 方法获取玩家背包数据，它会返回一个 `Optional<Data.Items.Inventory>`。你也可以通过 `DataSnapshot.Unpacked#getEnderChest()` 获取玩家末影箱数据。
* `Data.Items.Inventory` 为玩家背包、装备、副手和末影箱物品提供了不依赖平台的 `Stack` 对象，可以让你查看物品的基本信息而无需浏览完整的 NBT 数据。
* 在 Bukkit 中，简单地将 `Data.Items.(Inventory/EnderChest)` 转为 `BukkitData.Items.(Inventory/EnderChest)` 来访问 Bukkit 的 `ItemStack[]` 玩家物品内容，并允许你编辑之。

#### 代码示例——获取并编辑玩家的末影箱内容

```Java
// Get a user's current data
huskSyncAPI.getCurrentData(user).thenAccept(optionalSnapshot -> {
    if (optionalSnapshot.isEmpty()) {
        System.out.println("User does not exist!");
        return;
    }
    
    // Get the snapshot
    DataSnapshot.Unpacked snapshot = optionalSnapshot.get();
    
    // Get the player's inventory
    Optional<Data.Items.Inventory> inventoryOptional = snapshot.getInventory();
    if (inventoryOptional.isEmpty()) {
        System.out.println("User has no inventory data!");
        return;
    }
    
    // Get the inventory data
    Data.Items.Inventory inventory = inventoryOptional.get();
    
    // Get the player's inventory contents
    ItemStack[] inventoryContents = ((BukkitData.Items.Inventory) inventory).getContents();
    
    // Set the player's inventory contents
    ((BukkitData.Items.Inventory) inventory).setContents(inventoryContents);
    
    // Save the snapshot - This will update the player if online and save the snapshot to the database
    huskSyncAPI.setCurrentData(user, snapshot);
});
```

* 如果你只需要实时更新玩家背包或末影箱的话，这里也存在着方法类允许你编辑或获取玩家的当前背包或末影箱内容。
* 背包方法为 `#getCurrentInventory`、`#setCurrentInventory` 和 `#editCurrentInventory`。对于末影箱，这些是 `#getCurrentEnderChest`、`#setCurrentEnderChest` 和 `#editCurrentEnderChest`。如果你喜欢的话，这里也有处理 ItemStacks 的 `Contents` 方法。

#### 代码示例——编辑玩家背包

```Java
// Edit a user's current inventory
huskSyncAPI.editCurrentInventory(user, inventory -> {
    // Get the player's inventory contents
    ItemStack[] inventoryContents = ((BukkitData.Items.Inventory) inventory).getContents();
    
    // The array of ItemStacks is a copy of the player's inventory contents (Typically an array of length 42)
    inventoryContents[0] = new ItemStack(Material.DIAMOND_SWORD);
    inventoryContents[1] = null; // null = an empty slot
    
    // Set the player's inventory contents
    ((BukkitData.Items.Inventory) inventory).setContents(inventoryContents);
});
```

### 4.4 编辑位置数据

* HuskSync 对玩家位置的支持一般用于镜像世界的实例（如 RPG 服务器），且在插件配置中是默认禁用的。
* 我们可以通过方法 `DataSnapshot.Unpacked#getLocation()` 获取玩家位置，这个方法会返回一个 `Optional<Data.Location>`。
* `Data.Location` 提供了获取和设置玩家位置、仰角和视角的方法。我们也可以用上述提及的 `BukkitData` 类来用 `org.bukkit.Location` 设置这个，并通过 `HuskSyncAPI#editCurrentData` 方法提升执行速度。

#### 代码示例——编辑玩家的位置

```Java
// Edit a user's current data
huskSyncAPI.editCurrentData(user, snapshot -> {
    // Get the player's location
    Optional<Data.Location> locationOptional = snapshot.getLocation();
    if (locationOptional.isEmpty()) {
        System.out.println("User has no location data!");
        return;
    }
    
    // Get the location data
    Data.Location location = locationOptional.get();
    
    // Get the player's location
    org.bukkit.Location bukkitLocation = ((BukkitData.Location) location).getLocation();
    
    // Set the player's location
    ((BukkitData.Location) location).setLocation(bukkitLocation);
});
```

#### 4.5 编辑成就数据

* 成就数据可通过 `DataSnapshot.Unpacked#getAdvancements()` 获取，它会返回一个 `Optional<Data.Advancements>`。
* `Data.Advancements` 提供了一个包装器，可对列表 `Data.Advancements.Advancement` 的对象使用，表示玩家完成成就进度的线路图。
* 你可以通过 `Data.Advancements#setAdvancements(List<Data.Advancements.Advancement>)` 方法对玩家的成就列表进行添加或删除。

#### 代码示例——编辑玩家成就

```Java
// Edit a user's current data
huskSyncAPI.editCurrentData(user, snapshot -> {
    // Get the player's advancements
    Optional<Data.Advancements> advancementsOptional = snapshot.getAdvancements();
    if (advancementsOptional.isEmpty()) {
        System.out.println("User has no advancements data!");
        return;
    }
    
    // Get the advancements data
    Data.Advancements advancements = advancementsOptional.get();
    
    // Get the player's advancements
    List<Data.Advancements.Advancement> playerAdvancements = new ArrayList<>(advancements.getAdvancements());
    
    // Advancement progress is represented by completed critera entries, mapped to when said criteria was completed
    Map<String, Date> criteria = Map.of("criteria_item_1", new Date());
    
    // Add an advancement to the player's advancements
    playerAdvancements.add(Data.Advancements.Advancement.adapt("foo:bar/baz", criteria));
    
    // Remove all "recipe" advancements from the player's advancements
    playerAdvancements.removeIf(advancement -> advancement.getIdentifier().startsWith("minecraft:recipes/"));
    
    // Set the player's advancements
    advancements.setAdvancements(playerAdvancements);
});
```

## 5. 创建新的数据快照

* HuskSync 提供了创建新快照的方法；可以通过捕捉玩家当前的数据或使用 `DataSnapshot.Builder` 从零构建。

### 5.1 从玩家当前数据中创建新快照

* 你可以通过 `HuskSyncAPI#createSnapshot(OnlineUser)` 创建一个新快照，这会返回一个以 `SaveCause.API` 为理由创建的 `DataSnapshot.Packed`。

#### 代码示例——将玩家当前数据捕获并创建新快照
```Java
// Create a new snapshot from a player's current data
final DataSnapshot.Packed data = huskSyncAPI.createSnapshot(user);

// editPackedSnapshot() provides a utility for unpacking, editing, then repacking a DataSnapshot object
final DataSnapshot.Packed edited = huskSyncAPI.editPackedSnapshot(data, (unpacked) -> {
    unpacked.setHealth(BukkitData.Health.from(10, 20, 20)); // Example - sets the user's health to 10 (5 hearts)
});

// Save the snapshot - This will save the snapshot to the database
huskSyncAPI.addSnapshot(edited);
```

### 5.2 从零创建新快照

* 你可以使用 `DataSnapshot.Builder` 创建一个新快照。如果想要创建一个包含指定数据并应用于玩家的自定义快照，这会相当有用。
* 可通过 `HuskSyncAPI#snapshotBuilder()` 获取一个新的 `DataSnapshot.Builder`。

#### 代码示例——从零创建新快照

```Java
// Create a new snapshot from scratch
final DataSnapshot.Builder builder = huskSyncAPI.snapshotBuilder();

// Create an empty inventory with a diamond sword in the first slot
final BukkitData.Items.Inventory inventory = BukkitData.Items.Inventory.empty();
inventory.setContents(new ItemStack[] { new ItemStack(Material.DIAMOND_SWORD) });
inventory.setHeldItemSlot(0); // Set the player's held item slot to the first slot

// Use the builder to create, then pack, a new snapshot
final DataSnapshot.Packed packed = builder
        .saveCause(SaveCause.API) // This is the default save cause, but you can change it if you want
        .setTimestamp(OffsetDateTime.now().minusDays(3)) // Set the timestamp to 3 days ago
        .setInventory(inventory) // Set the player's inventory
        .setHealth(BukkitData.Health.from(10, 20, 20)) // Set the player to having 5 hearts
        .buildAndPack(); // You can also call just #build() to get a DataSnapshot.Unpacked

// Save the snapshot - This will save the snapshot to the database for a User
huskSyncAPI.addSnapshot(user, packed);
```

## 6. 删除数据快照

* 你可以通过 `HuskSyncAPI#deleteSnapshot(User, UUID)` 按 UUID 删除玩家的快照。
* 该方法会返回一个 CompletableFuture 异步任务，若存在 UUID 对应的快照可删除则返回 `true`，若不存在则返回 `false`。

### 代码示例——删除快照

```Java
// Delete a snapshot
huskSyncAPI.deleteSnapshot(user, uuid).thenAccept(success -> {
    if (success) {
        System.out.println("Deleted snapshot with UUID %s", uuid);
    } else {
        System.out.println("No snapshot with UUID %s to delete", uuid);
    }
});
```