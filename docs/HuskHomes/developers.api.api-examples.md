# API 示例

::: info 请注意：
HuskHomes API 本身仅支持 Bukkit，但是 Fabric 和 Sponge 支持 [API 事件](developers.api.api-events.md)。
:::

HuskHomes API 为下列内容提供了方法与类：

* 获取、创建和更新多个家（`Home`）和地标（`Warp`）传送点；
* 获取 `SavedUser` 的有关信息；
* 构建和执行（延时）的传送（`Teleport`），用于拓展 `/rtp` 命令的功能；
* 提供自定义的 `RandomTeleportEngine`，用于拓展 `/rtp` 命令的功能。

额外地，API 事件还可以修改正在执行的事件。

本章节将会为你大致介绍一些内容。请注意这份文档是*不完整的*；如果你想要帮助改进，请联系我们的 Discord 群组。

## 建立项目

### 创建一个类用于对接 API

* 除非你的插件以 HuskHomes 为硬依赖，否则你不应该将 HuskHomes API 调用至你的主类中，否则在本插件未安装时，你的插件将会弹出 `ClassNotFoundException` 报错。

::: details 创建对接类
```Java
public class HuskHomesAPIHook {

    public HuskHomesAPIHook() {
        // Ready to do stuff with the API
    }

}
```
:::

### 确认 HuskHomes 插件存在并实例化对接

* 这段代码用来确保你的 HuskHomes 插件在你制作的插件读取 API 之前已经载入。

::: details 实例化对接
```Java
public class MyPlugin extends JavaPlugin {

    public HuskHomesAPIHook huskHomesHook;

    @Override
    public void onEnable() {
        if (Bukkit.getPluginManager().getPlugin("HuskHomes") != null) {
            this.huskHomesHook = new HuskHomesAPIHook();
        }
    }
}
```
:::

### 获取 API 的示例

* 你现在可以通过调用 `HuskHomesAPI#getInstance` 来获取 API。

::: details 获取 API 实例

```Java
import net.william278.huskhomes.api.HuskHomesAPI;

public class HuskHomesAPIHook {

    private final HuskHomesAPI huskHomesAPI;

    public HuskHomesAPIHook() {
        this.huskHomesAPI = HuskHomesAPI.getInstance();
    }

}
```

:::

### CompletableFuture
HuskHomesAPI 的许多方法都返回浏览异步执行的 [CompletableFutures](https://www.baeldung.com/java-completablefuture)，以此确保它们依赖的数据库请求不会堵塞服务器的主线程。当一个计划任务（future）完成执行后，你可以通过 `#thenAccept()` 方法来接受返回内容。

::: warning 
你不应该在 HuskHomesAPI 中返回的计划任务（future）上使用 `#join()` 方法，因为计划任务（future）是基于服务器的异步任务运行的，如果你尝试通过锁定主线程来操作它们的话，很有可能导致线程死锁并使你的服务器崩溃。
:::

## 获取玩家

你可以通过 `HuskHomesAPI#adaptUser` 获取 OnlineUser 对象，这代表着连接至服务器的玩家。

相似地（若你通过通用模块编译），你可以使用 `HuskHomesAPI#getOnlineUser(UUID)` 通过 UUID 获取 `Optional` 的在线用户；如果玩家存在并在线，该 optional 会包含该玩家的数据。

::: details 获取 OnlineUser
``` Java
public class HuskHomesAPIHook {

    private final HuskHomesAPI huskHomesAPI;

    // This method prints out a player's homes into console using stdout
    public void getAnOnlineUser(UUID uuid) {
        OnlineUser user = huskHomesAPI.adaptUser(Bukkit.getPlayer(uuid));
        System.out.println("Found " + user.getUsername() + "!");
        Optional<OnlineUser> otherMethod = huskHomesAPI.getOnlineUser(uuid);
    }

}
```
:::

## 获取玩家的家传送点

若要获取玩家的设置的家传送点列表，你可以调用 API 实例中的 `#getUserHomes(user)` 方法。这个方法需要一个 `User` 对象，这个对象可从 UUID 或玩家名称构建，或从在线玩家上使用方法 `#adaptUser(player)`。这个方法将返回一个 `CompletableFuture<List<Home>>`，可使用 `#thenAccept()` 来接受。

请注意所有有关家传送点（`Home`）的内容也对地标传送点（`Warp`）有效（例如，使用 `HuskHomesAPI#getWarps` 来获取所有的地标传送点）。因为地标是公有的，所以获取地标并不需要 `User` 对象。 

::: details 将一个玩家设置的家传送点输出在后台上

```Java
public class HuskHomesAPIHook {

    private final HuskHomesAPI huskHomesAPI;

    // This method prints out a player's homes into console using stdout
    public void printPlayerHomes(UUID uuid) {
        // Use this to adapt an online player to an OnlineUser, which extends User (accepted by getUserHomes).
        // To get the homes of an offline user, use: User.of(uuid, username);
        OnlineUser user = huskHomesAPI.adaptUser(Bukkit.getPlayer(uuid));
        
        // A lot of HuskHomes' API methods return as futures which execute asynchronously.
        huskHomesAPI.getUserHomes(user).thenAccept(homeList -> { // Use #thenAccept(data) to run after the future has executed with data
            for (Home home : homeList) {
                // The home and warp object both extend SavedPosition, which maps a position object to a name and description
                System.out.println(home.meta.name); // It's best to use your plugin logger, but this is just an example.
            }
        });
        
        // You can also get a specific home by name using #getUserHome(user, name)
        huskHomesAPI.getUserHome(user, "example").thenAccept(optionalHome -> {
            // #getUserHome returns an Optional wrapper, so we need to run #ifPresent() first and call #get() to retrieve it if it exists
            if (optionalHome.isPresent()) {
                System.out.println("Found " + user.getUsername() + "'s home: " optionalHome.get().getName());
            } else {
                System.out.println("Home not found");
            }
        });
    }

}
```
:::

## 创建家传送点

若要创建一个家传送点，你可以在 API 实例上调用 `#createHome(owner, name, position)`。这个方法需要拥有家传送点、名称有效且位置可获取的玩家才可使用。

::: details 创建家传送点

```Java
public class HuskHomesAPIHook {

    private final HuskHomesAPI huskHomesAPI;

    // This method creates a home with the name "example" at the player's current location
    public void createHome(Player owner) {
        // Use this to adapt an online player to an OnlineUser, which extends User (accepted by createHome).
        OnlineUser onlineUser = huskHomesAPI.adaptUser(player);
        
        // We can get an OnlineUser's Position with #getPosition, which we can pass here to createHome
        try {
            huskHomesAPI.createHome(onlineUser, "example", onlineUser.getPosition());
        } catch (ValidationException e) {
            // Homes will be validated, and if validation fails a ValidationException will be thrown.
            // This can happen if the user has too many homes, or if its metadata is invalid (name, description, etc)
            // You should catch ValidationExceptions, determine what caused it (#getType) and handle it appropriately.
            owner.sendMessage(ChatColor.RED + "Failed to create example home: " + e.getType());
        }
    }
}
```

:::

## 构建传送

API 提供了一种方法来获取 `TeleportBuilder`，可以用于构建 `Teleport`（携带 `#toTeleport`）或 `TimedTeleport`（携带 `TimedTeleport`；一种要求玩家在原地停留一段时间才可进行传送的方法）。传送可以是跨服的。

::: details 构建传送

```Java
public class HuskHomesAPIHook {

    private final HuskHomesAPI huskHomesAPI;

    // This teleports a player to 128, 64, 128 on the server "server"
    public void teleportPlayer(Player player) {
        OnlineUser onlineUser = huskHomesAPI.adaptUser(player);

        // The TeleportBuilder accepts a class that extends Target. This can be a Username or a Position (or a Home/Warp, which extends Position)
        // * Note that the World object needs the name and UID of the world.
        // * The UID will be used if the world can't be found by name. You can just pass it a random UUID if you don't have it.
        Position position = Position.at(
            128, 64, 128,
            World.from("world", UUID.randomUUID()), "server"
        );

        // To construct a teleport, get a TeleportBuilder with #teleportBuilder
        huskHomesAPI.teleportBuilder()
            .teleporter(onlineUser) // The person being teleported
            .target(position) // The target position
            .buildAndComplete(false); // This builds and executes the teleport instantly.
        
        // The `true` flag we passed above indicates we want an instant teleport (as opposed to a timed teleport)
    }

}
```

:::

### 延时传送

延时传送是需要玩家原地停留一段时间才可进行的传送，所以玩家不会立即在战斗或在危险的时候传送。可通过在 `TeleportBuilder` 调用 `#toTimedTeleport()` 方法来取消。玩家所需要停留的预热时间是在配置文本中预先设置的。

::: details 构建一个延时传送

```Java
public class HuskHomesAPIHook {

    private final HuskHomesAPI huskHomesAPI;

    // This performs a timed teleport to tp a player to another online player with the username "William278"
    public void teleportPlayer(Player player) {
        OnlineUser onlineUser = huskHomesAPI.adaptUser(player);
        Target targetUsername = Target.username("William278"); // Get a target by a username, who can be online on this server/a server on the network (cross-server teleport).

        try {
            huskHomesAPI.teleportBuilder()
                .teleporter(onlineUser)
                .target(targetUsername)
                .toTimedTeleport() // Instead of running buildAndComplete, we can get the Teleport object itself this way.
                .execute(); // A timed teleport will throw a TeleportationException if the player moves/takes damage during the warmup, or if the target is not found.
        } catch(TeleportationException e) { // Since this doesn't catch the TeleportException (buildAndComplete does!), we need to do this.
            // Use TeleportException#displayMessage() to display why the teleport failed to the user.
            e.displayMessage(onlineUser);
        }
    }

}
```

:::