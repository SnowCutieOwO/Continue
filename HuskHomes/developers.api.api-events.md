# API 事件
HuskHomes 提供了一系列的 API 事件供你的插件监听，用于检测玩家执行了本插件的哪些操作。大多数的事件都可取消，允许你阻止这些事件的进行，如果你想的话。

## API 事件列表

|Bukkit 事件名称|添加版本|是否可取消|描述|
|---|---|:---:|---|
|`HomeCreateEvent`|4.0|✅|当玩家创建一个家传送点时调用|
|`HomeListEvent`|3.0|✅|当玩家请求浏览家/公开家传送点时调用|
|`HomeEditEvent`|4.0|✅|当玩家编辑家传送点（切换公开状态、修改位置、修改描述、修改名称）时调用|
|`HomeDeleteEvent`|3.0|✅|当玩家删除家传送点时调用†|
|`DeleteAllHomesEvent`|3.2.1|✅|当玩家使用命令 `/delhome all` 来删除他们所有的家传送点时调用|
|`WarpCreateEvent`|4.0|✅|当玩家设置地标传送点时调用|
|`WarpListEvent`|3.0|✅|当玩家列出地标传送点时调用|
|`WarpEditEvent`|4.0|✅|当玩家编辑地标传送点（修改位置、修改描述、修改名称）时调用|
|`WarpDeleteEvent`|3.0|✅|当玩家删除地标传送点时调用†|
|`DeleteAllWarpsEvent`|3.2.1|✅|当玩家使用命令 `/delwarp all` 来删除所有的地标传送点时调用|
|`SendTeleportRequestEvent`|4.1|✅|当玩家发送传送请求（`/tpa`）时调用|
|`ReceiveTeleportRequestEvent`|4.1|✅|当玩家收到传送请求时调用|
|`ReplyTeleportRequestEvent`|4.1|✅|当玩家接受或拒绝传送请求时调用|
|`TeleportWarmupEvent`|3.0|✅|当玩家开始传送预热时调用|
|`TeleportWarmupCancelledEvent`|4.6.3|❌|当玩家的传送预热被打断时调用|
|`TeleportEventEvent`|3.0|✅|当玩家被传送后调用‡|
|`TeleportBackEventEvent`|4.1|✅|当玩家被传送回他们的上一个位置（`/back`）时调用‡|
|`RandomTeleportEvent`|4.8|✅|当玩家被随机传送时调用|

† 当玩家输入命令 `/delhome all` 或 `/delwarp all` 来删除他们所有的家或地标传送点时，只会调用一个 `DeleteAllHomesEvent` 或 `DeleteAllWarpsEvent` 事件。
‡ 仅在玩家传送的出发服务器上调用；传送的执行方在此处不重要。

## Sponge 和 Fabric 上的事件

::: info 提示
浏览 [API 介绍页](developers.api.md)来获取目标平台上的相关内容。
:::

Sponge，有着和 Bukkit 相似的事件 API，拥有与上述相同的事件，前缀为 `Sponge`（所以在 Bukkit 上的 HomeCreateEvent 在 Sponge 上为 SpongeHomeCreateEvent。）

Fabric 使用回调来处理事件。HuskHomes 提供了与上述事件相同的回调。例如，为处理玩家创建家传送点的事件，你需要注册一个如下图代码所示的回调：

### HuskHomes 和 Fabric 回调

```Java
HomeCreateCallback.EVENT.register((player, home) -> {
    // Do something with the player and home
    return ActionResult.SUCCESS; // Return an appropriate ActionResult
});.
```