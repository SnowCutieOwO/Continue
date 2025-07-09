MyWorlds 的权限节点如下。此插件支持 Permissions 3 和 Bukkit 内置权限。要使用Permissions 3，请在配置中启用。
# 命令权限
命令权限节点默认值：
| 命令 | 节点 |默认|
|----|----|--|
| /world create   | myworlds.world.create   | OP |
| /world load   | myworlds.world.load   | OP |
| /world unload   | 	myworlds.world.unload   | OP |
| /world list   | 	myworlds.world.list   | OP |
| /world info   | myworlds.world.info   | OP |
| /world portals   | 	myworlds.world.portals   | OP |
| /world listgenerators   | 	myworlds.world.listgenerators   | OP |
| /world setdefaultportal   | 	myworlds.world.setportal   | OP |
| /world spawn   | 	myworlds.world.spawn   | OP |
| /world evacuate   | myworlds.world.evacuate   | OP |
| /world repair   | 	myworlds.world.repair   |OP  |
| /world save   | myworlds.world.save   | OP |
| /world saving   | 	myworlds.world.setsaving   | OP |
| /world delete   | myworlds.world.delete   | NO |
| /world copy   | myworlds.world.copy   | NO |
| /world difficulty   | myworlds.world.difficulty   | OP |
| /world togglepvp   | myworlds.world.togglepvp   | OP |
| /world op  | myworlds.world.op   | OP |
| /world deop   | myworlds.world.deop   | OP |
| /world togglespawnloaded   | myworlds.world.togglespawnloaded	   |OP  |
| /world allowspawn   | myworlds.world.allowspawn   | OP |
| /world denyspawn   | myworlds.world.denyspawn   | OP |
| /world weather   | myworlds.world.weather   | OP |
| /world time   | myworlds.world.time   | OP |
| /world gamemode   | myworlds.world.gamemode   | OP |
| /world setspawn	   | myworlds.world.setspawn   | OP |
| /world config   | myworlds.world.config   | OP |
| /tpp   | myworlds.tpp   | OP |

# 聊天权限
以下权限设置了玩家在特定或任意世界时可以与哪些世界聊天。首先需要在 "配置 "中启用聊天权限。
| 情况 |权限|
|----|--|
| world1的玩家可以与world2的玩家聊天   | `myworlds.world.chat.world1.world2` |
| world1的玩家可以与任何世界的玩家聊天   | `myworlds.world.chat.world1.*` |
| 任何世界的玩家都可以与world2的玩家聊天   | `myworlds.world.chat.*.world2 `|
| 玩家可以在任何世界与任何其他世界聊天   | `myworlds.world.chat.*.*` |
| 玩家可以在每个世界内聊天，但不能跨世界聊天（默认值：true）   | myworlds.world.chat.* |
| 玩家可以在world1内聊天（从world1同别的世界聊天也需要该权限）   |`myworlds.world.chat.world1`  |

**重要**：对于所有其他权限，都需要拥有在某个世界使用聊天的权限：
**myworlds.world.chat.world1.world2**
玩家同样需要有在world1内聊天的权限，因此他需要以下权限中的一个或两个都要拥有：
**myworlds.world.chat.world1**
**myworlds.world.chat.***

# 一般权限：
| 类型          | 节点 | 额外信息 | 默认 |
|-------------|----|------|----|
| 设置玩家是否能进入某个世界 |myworlds.world.enter.[name]|[name]是世界名      | NO*   |
| 设置玩家是否能进入任意世界     | myworlds.world.enter.*   |      | 	OP*   |
| 设置玩家能否进入某个传送门            | myworlds.portal.enter.[name]   | [name]为传送门名     | NO*   |
| 设置玩家是否能进入任意传送门            |myworlds.portal.enter.*    |      | OP*   |
| 设置玩家是否能传送到某个世界            | myworlds.world.teleport.[name]   | [name]为世界名     | NO*   |
| 设置玩家是否能传送到任意世界            | myworlds.world.teleport.*   |      | OP*   |
| 设置玩家能否传送到某个传送门            | myworlds.portal.teleport.[name]   | [name]为传送门名     | NO*   |
| 设置玩家能否传送到任意传送门            | myworlds.portal.teleport.*   |      | OP*   |
| 设置玩家能否创建传送门            | myworlds.portal.create   |      | OP   |
| 设置玩家能否替换传送门            | myworlds.portal.override   |      | OP*   |
| 设置玩家是否能使用（进入）传送门            | myworlds.portal.use   |      | YES   |
| 设置玩家能否在某个世界建造            | myworlds.world.build.[name]   | [name]为世界名     | NO*   |
| 设置玩家是否能在任意世界建造            | myworlds.world.build.*   |      | OP*   |
| 设置玩家是否能在某个世界使用方块            | myworlds.world.use.[name]   | [name]为世界名     |  NO*   |
| 设置玩家是否能在任意世界使用方块            | myworlds.world.use.*   |      | 	OP*   |
| 设置改变游戏模式时玩家是否被忽略            | myworlds.world.ignoregamemode   |      | FALSE   |
| 设置每个世界改变背包时玩家是否被忽略            | myworlds.world.keepinventory   |      | OP   |
| 设置玩家在使用已连接的下界传送门时能否创建下界传送门            | myworlds.world.linknether   |      |  TRUE  |

`*` = 需要在主要配置文件中启用；
- 传送门进入权限用于玩家进入物理传送门。使用的是传送门名称（标志上的第二行），而不是目的地名称（第三行）；
- 使用聊天命令进行传送时不会使用传送门输入权限，这时需要使用传送权限；
- 进入传送门时，以及使用聊天命令传送到传送门和世界时，进入世界的权限处于激活状态；
- 传送门和世界传送权限仅在使用聊天命令进行传送时使用，在进入物理传送门时不会激活；（进入物理传送门时不检测是否有此权限）

当满足这两个条件时，玩家可以通过进入传送门传送到另一个传送门：
- 传送门进入权限已禁用，玩家拥有 "进入任何传送门 "权限，或玩家拥有所进入传送门的特定权限；
- 世界进入权限已禁用，玩家拥有 "进入任何世界 "的权限，或者玩家拥有即将进入的世界的特定权限；

当满足这三个条件时，玩家可以使用聊天命令传送到另一个世界：
- 玩家可以使用 "传送到传送门 "或 "世界生成 "命令；
- 世界进入权限已禁用，玩家拥有 "进入任何世界 "的权限，或者玩家拥有即将传送到的世界的特定权限；
- 世界传送权限已禁用，玩家拥有 "传送到任何世界 "权限或拥有传送到世界的特定权限。
