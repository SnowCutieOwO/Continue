# API v2

HuskSync v2.0 提供了一个 API 用于获取和返回 `UserData` 对象；这是一个用户同步数据的快照。

::: warning 
API v2 已不再受支持且不与 HuskSync v3.0 兼容。见[数据快照 API](api-v3/data-snapshot-api.md) 获取 v3 API 的相关信息。 🚨
:::

该页面默认你已阅读 [API](api-v3/index.md) 介绍章节，并将 HuskSync（v2.x）的 API 导入了你的仓库。

🚨 HuskSync API v2 仅针对 v2.0 - v2.2.8 的 HuskSync。它不与 v3.0+ 的 HuskSync 兼容。HuskSync v3 的等价 API 可以在[数据快照 API](api-v3/data-snapshot-api.md)找到。

## 目录

1. [通过 UUID 获取玩家](#1-通过-uuid-获取玩家)
2. [获取玩家数据](#2-获取玩家数据)
3. [获取玩家的背包内容](#3-获取玩家的背包内容)
4. [更新玩家数据](#4-更新玩家数据)

## 1. 通过 UUID 获取玩家

* HuskSync 有一个 `User` 对象，代表着特定玩家在数据库中保存的数据。你可以通过方法 `HuskSyncAPI#getUser(uuid)` 请求玩家数据。
* 若你有一个在线的 `org.bukkit.Player` 对象，你可以使用方法 `BukkitPlayer#adapt(player)` 来获取一个 `OnlineUser` 对象（继承 `User`），以此代表一个已登入的玩家。

``` Java
public class HuskSyncAPIHook {

    private final HuskSyncAPI huskSyncAPI;

    public HuskSyncAPIHook() {
        this.huskSyncAPI = HuskSyncAPI.getInstance();
    }
    
    public void logUserName(UUID uuid) {
        // getUser() returns a CompletableFuture supplying an Optional<User>
        huskSyncAPI.getUser(uuid).thenAccept(optionalUser -> {
            // Check if we found a user by that UUID either online or on the database
            if (optionalUser.isEmpty()) {
                // If we didn't, we'll log that they don't exist
                System.out.println("User does not exist!");
                return;
            }
            // The User object has two fields; uuid and username.
            System.out.println("User name is: " + optionalUser.get().username);
        });
    }

}
```

## 2. 获取玩家数据

* 通过一个 `User` 对象，我们现在可以调用方法 `HuskSyncAPI#getUserData()` 来获取他们最新的数据。
* `UserData` 对象包含八个数据“模块”，每个模块都包含特定的信息。
* UserData 对象不会包含全部的数据“模块”；在被插件保存的 UserData 中所包含的模块内容由配置文本决定。
* 你可以单独或获取每一个模块的内容，返回值会包装为一个 Optional（若未指定则返回为空），见下：
    * `UserData#getStatus();` - 玩家的基本属性（生命值、饱食度、饱和度、经验值和游戏模式等）
    * `UserData#getInventory();` - 玩家的背包内容。包含一个 base64 序列化的 `ItemStack` 数组。
    * `UserData#getEnderChest();` - 玩家的末影箱内容。包含一个 base64 序列化的 `ItemStack` 数组。
    * `UserData#getPotionEffects();` - 玩家当前的药水效果。包含一个 base64 序列化的 `PotionEffect` 数组。
    * `UserData#getAdvancements();` - 返回玩家当前获取的进度和成就
    * `UserData#getStatistics();` - 玩家的四大类统计数据（未分类、物品、方块和实体）
    * `UserData#getLocation();` - 玩家的位置数据，用于启用了同步位置数据的服务器
    * `UserData#getPersistentDataContainer();` - 玩家的持久化数据容器，包含了一个有键值的映射表

``` Java
public class HuskSyncAPIHook {

    // ... //

    public void logUserData(UUID uuid) {
        huskSyncAPI.getUser(uuid).thenAccept(optionalUser -> {
            // Optional#isPresent() is the opposite of #isEmpty()
            if (optionalUser.isPresent()) {
                logHealth(optionalUser.get());
            }
        });
    }

    private void logHealth(User user) {
        // A user might not have data, if it's deleted by an admin or they're brand new
        huskSyncAPI.getUserData(user).thenAccept(optionalUserData -> {
            if (optionalUserData.isPresent()) {
                // Get the StatusData from the UserData object
                Optional<StatusData> statusData = optionalUserData.get().getStatus();
                // Print the health from the fields, if the user has a status object
                statusData.ifPresent(status -> {
                    System.out.println("%s's health: %d/%d", user.username, status.health, status.maxHealth);
                });
            }
        });
    }

}
```

## 3. 获取玩家的背包内容

* API 提供了反序列化 `ItemData` 的方法来处理 base64 序列化的背包和末影箱 `ItemStack` 数组，将它们转化为实际的 `ItemStack` 数组数据。
* 若要反序列化背包物品，使用方法 `HuskSyncAPI#deserializeInventory(serializedItems)`。
* 若要翻序列化末影箱物品，使用方法 `HuskSyncAPI#deserializeItemStackArray(serializedItems)`。
* 相似地，`HuskSyncAPI#getPlayerInventory(user)` 和 `HuskSyncAPI#getPlayerEnderChest(user)` 方法可以更优雅地达到目的。请注意如果最后的 UserData 不包含 ItemData（译者注：原文似乎笔误，写成了 UserData），那么这里返回的 ItemData 将会是对应的空 ItemStack 数组。
* 序列化和反序列化对药水效果同样可用。

``` Java
public class HuskSyncAPIHook {

    // ... //

    private void printInventoryItems(User user) {
        huskSyncAPI.getUserData(user).thenAccept(optionalUserData -> {
            if (optionalUserData.isPresent()) {
                // Get the ItemData and make sure it's present
                Optional<ItemData> inventoryDataOptional = optionalUserData.get().getInventory();
                if (inventoryDataOptional.isEmpty) {
                    return;
                }
                ItemData inventoryData = inventoryDataOptional.get();

                // Get the ItemStack[] array as a BukkitInventoryMap.
                // This returns a future, but we're using #join() to block the thread until it's done
                BukkitInventoryMap inventory = huskSyncAPI.deserializeInventory(inventoryData.serializedItems).join();
                
                // A BukkitInventoryMap is simply a wrapper for an ItemStack array.
                // It provides a few handy methods for getting the player's armor, their offhand item, etc.
                // To get the ItemStack array from it, just call BukkitInventoryMap#getContents();
                for (ItemStack item : inventory.getContents()) {
                    // Print out the item material types of every item in the player's inventory
                    System.out.println(item.getType().name());
                }
            }
        });
    }

}

```
### HuskSyncAPI#getPlayerInventory()

``` Java
private void printInventoryItems(User user) {
    huskSyncAPI.getPlayerInventory(user).thenAccept(inventory -> {
        if (inventory.isPresent()) {
            for (ItemStack item : inventory.get().getContents()) {
                System.out.println(item.getType().name());
            }
        }
    });
}
```

### HuskSyncAPI#getPlayerInventory()

``` Java
private void printEnderChestItems(User user) {
    huskSyncAPI.getPlayerEnderChest(user).thenAccept(enderChest -> {
        if (enderChest.isPresent()) {
            for (ItemStack item : enderChest.get()) {
                System.out.println(item.getType().name());
            }
        }
    });
}
```
## 4. 更新玩家数据

* 你可以使用 `HuskSyncAPI#setUserData(user, userData)` 来将一个玩家的数据修改并提交至数据库。
* 若你需要在每次更新后修改玩家数据，你可能需要监听 HuskSync 所提供的事件。
* 你可以使用 `HuskSyncAPI#serializeItemStackArray(itemStack[])` 来将任何 ItemStack 序列化为 base64 值。
* 相似地，你可以使用 `HuskSyncAPI#setInventoryData(user, bukkitInventoryMap)` 来设置玩家背包内容，或使用 `HuskSyncAPI#setEnderChestData(user, itemStack[])` 来设置玩家的末影箱内容。
* 更新 UserData 将会完全覆盖玩家当前的“活跃”数据。HuskSync 设计之初就不会追踪玩家的“活跃”数据，仅会在保存时产生数据的“快照”。换句话说，获取并更新用户数据有可能造成回档。

``` Java
public class HuskSyncAPIHook {

    // Set a user's health to 20
    private void updateUserHealth(User user) {
        huskSyncAPI.getUserData(user).thenAccept(optionalUserData -> {
            if (optionalUserData.isPresent()) {
                UserData data = optionalUserData.get();
                Optional<StatusData> statusDataOptional = data.getStatus();
                StatusData statusData = statusDataOptional.get();            
                statusData.health = 20;
    
                // This returns a CompletableFuture<Void> that will invoke #thenRun() when it has completed
                huskSyncAPI.setUserData(user, data).thenRun(() -> {
                    System.out.println("Healed " + user.username + "!");
                });
            }
        });
    }

}
```