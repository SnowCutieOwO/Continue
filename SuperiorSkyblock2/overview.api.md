# API

SuperiorSkyBlock 提供了一个强大的 API，这样你可以为插件自行编写模块，修改插件行为，注册自定义命令！

你可以在[这里](https://bg-software.com/superiorskyblock/api/)找到插件 API 的 javadoc。

## 基本用法

所有的 API 方法都可通过 [SuperiorSkyblockAPI](https://github.com/BG-Software-LLC/SuperiorSkyblock2/blob/master/API/src/main/java/com/bgsoftware/superiorskyblock/api/SuperiorSkyblockAPI.java) 类调用。

API 包含大量可以用于参数字段的对象，在这里我会简单介绍其中的一些：

* [SuperiorPlayer](https://github.com/OmerBenGera/SuperiorSkyblockAPI/blob/3cd75af980c19061aa0d6fb1120ea8560c26017a/src/main/java/com/bgsoftware/superiorskyblock/api/wrappers/SuperiorPlayer.java#L20)

该对象用于将 Bukkit API 提供的玩家对象包装为本插件的玩家对象。它包含玩家数据、状态及模式（例如飞行）等内容。

你可以通过 `SuperiorSkyblockAPI.getPlayer(<UUID>)` 获取该对象。

* [Island](https://github.com/BG-Software-LLC/SuperiorSkyblock2/blob/master/API/src/main/java/com/bgsoftware/superiorskyblock/api/island/Island.java)

该对象用于缓存服务器上的岛屿数据。成员、封禁玩家列表、翻倍卡、升级及其他数据都存储在该对象中。

你可以通过 `SuperiorPlayer#getIsland()` 方法获取玩家列表。若你需要获取指定位置上存在的岛屿，你可以使用 `SuperiorSkyblockAPI.getGrid().getIslandAt(<Location>)`。

* [GridManager](https://github.com/BG-Software-LLC/SuperiorSkyblock2/blob/master/API/src/main/java/com/bgsoftware/superiorskyblock/api/handlers/GridManager.java)

网格管理器对象处理服务器上所有的岛屿。若你想与之交互，或从排行榜等与其有关的内容进行获取，则需使用该对象。

::: info

不要使用岛屿对象拥有的方法（如 `deleteIsland` 方法），它只应被用于岛屿对象自身。

:::