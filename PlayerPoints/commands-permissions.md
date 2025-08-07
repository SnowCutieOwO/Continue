# 命令与权限

## 介绍
本页包含了 PlayerPoints 的所有命令与权限。

|命令|描述|权限节点|
|---|---|---|
|`/points`|显示当前插件版本与插件作者。|N/A|
|`/points help`|显示插件可用的所有命令。|N/A|
|`/points reload`|重载插件并保存任何改动。|`playerpoints.reload`|
|`/points pay <玩家名称> <数量>`|将指定数量的点券转账给其他玩家。|`playerpoints.pay`|
|`/points give <玩家名称> <数量>`|给予指定玩家点券。|`playerpoints.give`|
|`/points giveall <数量>`|向在线所有玩家发送点券。|`playerpoints.giveall`|
|`/points take <玩家名称>`|从指定玩家账户中扣除一定数量的点券。|`playerpoints.take`|
|`/points set <玩家名称> <数量>`|将指定玩家的点券数量设置为命令所给的数目。|`playerpoints.set`|
|`/points reset <玩家名称>`|重置指定玩家持有的点券数量。|`playerpoints.reset`|
|`/points look <玩家名称>`|查询指定玩家持有的点券数量。|`playerpoints.look`|
|`/points me`|查询自己持有的点券数量。|`playerpoints.me`|
|`/points lead [next(下一页)/prev(上一页)/#(页码)]`|查询点券持有量排行榜或进行排行榜翻页操作。|`playerpoints.lead`|
|`/points broadcast <名称>`|公告玩家的点券数量。|`playerpoints.broadcast`|
|`/points export`|将点券数据导出至 storage.yml|`playerpoints.export`|
|`/points import`|从 storage.yml 导入点券数据|`playerpoints.import`|

## 如何使用？

### 权限用法

若要使用这些命令，你需要给予玩家执行命令对应的权限。如果你是服务器的管理员，你会默认拥有所有权限，所以无需手动给予。

若你不想要给予所有玩家 OP（没谁这么干！），你需要通过任意一个权限插件来为玩家分配这些权限。我们推荐你使用 [LuckPerms](https://www.spigotmc.org/resources/luckperms.28140/) 设置权限。它还有一个详细的文档来帮助你快速上手插件。

### 命令用法

本插件的等效命令有 `/points`、`/playerpoints` 和 `/p`。你可以使用其中一个命令来代替上述列表中出现的 `/points`。

对于这些命令，被包括在尖角括号 `<>` 中的参数是必须输入的。参数是你执行命令所需要的一种数据。输入的时候不必带着尖角括号一同塞入命令，但是会检查你输入的对应内容。

### 额外帮助

若你遇到了问题，请[加入我们的 Discord 聊天群组](https://discord.gg/MgUsTBK)来获取帮助。我们不能提供关于你所使用的权限插件的任何帮助，但可以帮助你在使用本插件时遇到的所有问题。