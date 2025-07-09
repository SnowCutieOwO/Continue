# 1.前言
几乎所有命令都是在执行命令的玩家当前所在的世界中运行的。要在另一个世界中操作，请在命令末尾加上要更改的世界名称。

如果参数（如世界名称）中有空格，请在参数周围加上引号。例如 `/world load "my big world with spaces"` 下面所有使用 `/world` 的命令都有 `/myworlds` 和 `/mw` 的别名，如果与其他插件冲突，请使用这些别名。

许多命令都是简单的 `yes/no`。其他单词如 `enable/disable`、`true/false` 同样可以。

所有权限的概览可在 `plugins/My_Worlds/PermissionDefaults.yml` 中找到。

# 2.创建世界
**`/world create [worldname]:[generator]:[arguments] [seed]`**
> [世界名]:[生成器]:[参数] [种子］

**`/world create [worldname] [seed]`**
> [世界名] [种子］

**`/world create [worldname]/[environment] [seed]`**
> [世界名]/[环境] [种子]

以下为例子：
==/world create world1:BananaSpace:12,grass,wood,dirt -1856378464==
> 该例中，`world1`为`[worldname]`，`BananaSpace`为`[generator]`，`12,grass,wood,dirt`为`[arguments]`，`-1856378464`为`[seed]`

==/world create mynether/nether==
> 该例中，`mynether`为`[worldname]`，`nether`为`[environment]`，意味创建一个名为 “mynether” ，环境为下界的世界
> 详情见 **2.2 不含名称的后缀**

创建新世界的方法很简单，只需指定世界名称即可，如果相关的话，还可以指定世界的环境。世界的后缀会改变创建的环境。

## 2.1后缀
worldname
> 主世界

worldname_nether
> 下界

worldname_the_end
> 末地

worldname_flat
> 超平坦。
 改变`server.properties`中的超平坦世界的层数（`generator-settings`）


worldname_largebiomes: Large biomes world.
> 大型生物群落

## 2.2不含名称的后缀
worldname/nether
> 下界，但命名为 "worldname"

worldname/largebiomes
> 大型生物群落世界

## 2.3传送门
在 `worldname` 和 `worldname_nether` 之间会自动创建一个下界传送门，其中 `worldname` 可以是任何世界名称。在 `worldname` 和 `worldname_the_end` 之间会自动创建末地传送门。

## 2.4生成器插件
也可以指定一个插件作为世界要使用的区块生成器，然后指定该块生成器插件的配置。在下面的例子中使用了 BananaSpace 插件：

**`/world create world1:BananaSpace:12,grass,wood,dirt -1856378464`**

[在 Spigot 上搜索自定义世界生成器插件](https://www.spigotmc.org/search/202239295/?q=World+Generator&t=resource_update&o=relevance)

使用以下命令列出服务器上提供世界生成器的插件： 
**`/world listgenerators`**

## 2.5平坦世界选项
在原版Minecraft 中，可通过选项字符串配置超平坦世界的层数。也可以使用以下语法指定：

```yml
/world create the_world_name/flat::[options]
```
例如：
```yml
/world create the_world_name/flat::3;1*minecraft:bedrock,7*minecraft:dirt,1*minecraft:stone,1*minecraft:sandstone;2;village
```
> 意味：
> 生成一个名为`the_world_name`；
> 底层为1层基岩（`1*minecraft:bedrock`）；
> 中间层为7层泥土（`7*minecraft:dirt`）；
> 顶层为1层砂石（`1*minecraft:sandstone`）；
> 生物群系为沙漠（即desert，`2`）
> 生成默认配置的村庄（`village`）的超平坦世界。


[这里](https://www.minecraft101.net/superflat/)有一个生成此选项字符串的有用网站。

MyWorlds 添加了一个额外的选项：**nostructures** 和 **structures**，用于覆盖是否生成村庄、矿井等结构。如果省略，则默认使用 server.properties 中的设置。

## 2.5虚空世界
1.13+:
```yml
/world create my_void_world/flat::minecraft:air;minecraft:the_void;nostructures
```
1.12.2 及之前版本：
```yml
**`/world create my_void_world/flat::3;minecraft:air;127;nostructures;`**
```

## 2.7权限
以上命令所需权限：
**myworlds.world.create
myworlds.world.listgenerators**

# 3.世界列表

`/world list` 显示服务器上加载了哪些世界，以及服务器目录下有哪些世界可以加载。从其他地方导入世界时，可以使用 `/world list `检查世界是否存在，然后继续加载世界。
命令所需权限: myworlds.world.list


# 4.装载和卸载世界
```yml
/world load [worldname]
/world unload [worldname]
/world load [worldname]:[generator]:[arguments]
```
加载或卸载一个世界。加载世界后，服务器下次（重新）启动时将加载相同的世界。卸载世界时，同一世界将不再在启动时加载。

要加载一个使用指定区块生成器的世界，请使用上面的第三个命令示例，指定插件名称和参数，类似于创建命令。

## 权限：
**myworlds.world.unload**
**myworlds.world.load**
**myworlds.world.loadspecial**（用于指定自定义生成器）
# 5.世界复制、修复和删除
```yml
/world copy [worldname] [newworldname]
/world repair [worldname] [seed]
/world delete [worldname]
```

永久删除一个未加载的世界或将现有世界复制到一个新名称。可以通过`repair`命令重新生成一个世界的 `level.dat`，使该世界可以重新加载，并清理损坏的区块。请注意，这些命令在游戏中默认是不允许的（甚至连操作都不允许），必须给玩家提供权限节点才行。

## 权限：
myworlds.world.copy
myworlds.world.delete
myworlds.world.repair

# 6.世界信息

```yml
/world info [worldname]
/world info
/world info world1
```
显示一个世界的信息，如种子、时间、天气和其他设置属性。

### 权限：
**myworlds.world.info**


# 7.世界自动保存和保存
```yml
/world autosave [enabled/disabled]
```

`/world save`: 打开或关闭世界的自动保存功能，或手动将世界保存到硬盘。禁用自动保存的世界不会卸载区块，这可能会影响性能。因此，它只适用于边界明确的小世界。

要保存服务器上的所有世界，请使用 `/world save *`

## 权限： 
**myworlds.world.setsaving
myworlds.world.save**

# 8.保持世界出生点常加载
```yml
/world keepspawnloaded [yes/no]
```

切换是否常加载出生点。

## 权限:
**myworlds.world.togglespawnloaded**


# 9.设置出生点
```yml
/world setspawn [worldname]
/world setspawn
```

将一个世界的出生点设置到你所在位置。可以将一个世界的出生（复活）点设置为另一个世界。玩家视角调整也会被启用，因此可以让玩家朝向某个方向出生。

## 权限:
**myworlds.world.setspawn**



# 10.传送门列表
```yml
/world portals [worldname]
```

**`/world portals`**

列出（一个世界的）所有传送门，并将其格式化为色彩丰富的信息发送给命令执行者。您可以在彩色输出中看到距传送门的距离。

## 权限: 
**myworlds.world.portals**


# 11.设置默认的下界传送门或末地传送门行为
```yml
/world endportal [property] [value]
/world netherportal [property] [value]
/world netherportal destination [world name/portal name]
/world netherportal autodetect
/world netherportal info
```


配置（玩家创建的）下界传送门和自然生成的末地传送门的行为。一个世界的原版行为将会通过自动检测功能检测到。通过这种方式，下界传送门可以传送到主世界并返回。使用 `info` 命令可以列出当前设置的属性。

所有可能的属性组合都是可行的。例如，你可以在进入末地传送门时创建一个下界传送门。

## 11.1属性（[property]内可选项）
- destination: 玩家进入传送门后被传送到的世界名称或传送门名称；
- mode: 世界目的地的传送门行为模式。可以是以下值之一：
	- default: 玩家会被传送到世界出生点，或确切的传送门坐标；
	- respawn: 玩家在自己的床/世界锚点或世界出生点重生；
	- rejoin: 玩家会被传送到他们在另一个世界的最后位置；
	- nether_link: 玩家被传送到另一个世界将会创建传送门框架的相同坐标（如果目标世界是下界，则x轴坐标乘8）；
	- end_platform: 玩家会被传送到末地平台(100/50/0)并为他们创建一个黑曜石平台；
- showcredits: 是否在进入传送门后显示游戏结束字幕。这是你在通关后看到的内容，但你可以在这里关闭，或者让它在其他世界显示这些字幕；
- displayname: 设置玩家通过传送门传送时显示的文本；
- playeronly: 设置是否只有玩家（而非怪物、道具）可以通过此门传送；
- lastposition: 使传送门将玩家传送到他们在目标世界的最后已知位置； 
- nonplayerscreateportals: 非玩家实体是否在穿过下界传送门后，在目的地世界创建传送门（nether_link模式下）。 如果玩家造成了延迟，或者这影响了黑曜石农场，则可以关闭此功能。

## 11.2权限
### 使用命令的权限：
**myworlds.world.setportal**
### 在其他世界创建传送门的权限：
**myworlds.world.linknether**
> 当玩家在一个默认传送模式为 `nether_link` 或 `end_platform` 的世界进入一个（由他自己激活的）传送门，而另一端尚未存在传送门时，系统会创建一个传送门。玩家需要有上述权限才能这样做，否则就会看到 "你无法创建它 "的提示。默认情况下，每个人都拥有此权限。 
# 12.床重生与下界重生锚
```yml
/world bedrespawn [enabled/disabled]
```

启用或禁用一个世界的床铺和世界锚重生功能。禁用时，玩家死亡后不会在自己的床上重生，而是在世界重生点重生。

## 权限: 
**myworlds.world.changebedrespawn**


# 13.给与传送门道具
```yml
/world giveportal [end/nether]
```
Gives the player a special MyWorlds item which can be used to create nether portals or end gateway portals in the real world. The placed blocks do not cause physics, which allows any shape to be built.
给予玩家一个用于在现实世界中创建下界传送门或末地传送门的特殊 MyWorlds 物品。放置此方块不会造成物理影响，因此可以建造任何形状的传送门。

## 权限:
**myworlds.world.giveportal**


# 14.设置世界管理员
```yml
/world op [playername] [worldname]
/world deop [playername] [worldname]
/world op [playername]
/world deop [playername]
```
例如：
```yml
/world op * World1
/world op player1 *
/world deop * *
/world op
```

为一个世界设置OP。列入世界名单的玩家将获得 OP 权限，没有获得 OP 权限的玩家在进入世界时将失去 OP 权限。使用  `*` 关键字可以针对所有玩家或所有世界。只有在 配置中启用该功能后，玩家才会获得或失去 OP 权限。

## 权限: 
**myworlds.world.opping**


# 15.玩家限制
```yml
/world playerlimit 12
/world playerlimit unlimited
```

设置一个世界允许的最大玩家人数。如果玩家人数已满，则不能再传送到该世界；如果玩家人数已满，则重新加入该世界的玩家会被传送回主世界（大厅）。

## 权限: 
**myworlds.world.playerlimit**

## 15.1绕过限制
拥有 `myworlds.world.bypassplayerlimit` 权限的玩家可以加入该世界，不受玩家人数限制。

## 15.2疏散玩家
如果降低限制会导致世界中的玩家数量超过限制，可以使用疏散命令提前清除所有玩家。当玩家过多时，无法加入。


# 16.疏散
```yml
/world evacuate [worldname] [message...]
/world evacuate [worldname]
/world evacuate World1 Your world has been closed!
```

疏散一个世界的玩家。如果您想卸载一个世界，但该世界中满是玩家，您可以使用此功能来疏散玩家。疏散世界的传送门用于将玩家传送走。如果玩家拥有世界传送和进入权限，他们会被传送到一个随机世界。如果全部失败，玩家将被踢出，并注明原因。没有被踢的玩家也会看到这条信息。

## 权限:
**myworlds.world.evacuate**


# 17.允许和拒绝怪物生成
```yml
/world allowspawn [mobname] [worldname]
/world allowspawn [mobname]
/world denyspawn [mobname] [worldname]
/world denyspawn [mobname]
```
例子：
```yml
/world denyspawn creeper
/world denyspawn animal world1
```

允许或拒绝某些怪物在世界中生成。忽略自定义生成的怪物（比如通过命令生成的怪物）。你可以使用所有怪物类型作为怪物名称，也可以使用 `animal`,`monster`,`all`或 `mob` 来允许或拒绝怪物生成。

## 权限: 
**myworlds.world.spawning**


# 18.Time时间
```yml
/world time [time] [worldname]
/world time [time]
/world time always 12:00
/world time day
/world time night world1
/world time 24:00 locked
```

设置一个世界的时间。您可以使用 `lock`、`always` 和 `forever` 等关键字来表示时间是否应被锁定。您可以使用 `day`、`night` 、`dawn` 、`morning` 等关键字来表示某个时间。您还可以使用 `hours:minutes` 来设置时间。

## 权限: 
**myworlds.world.time**


# 19.Weather天气
```yml
/world weather [weather] [worldname]
/world weather [weather]
/world weather always rain
/world weather rainy
/world weather endless storm
/world weather always sunny World1
```

设置世界的天气状态。您可以使用 `lock`、`always` 和 `forever` 等关键字来表示天气状态是否应该锁定。您可以使用 `sun` 表示天气晴朗，`rain` 表示下雨，`storm` 表示下雨并伴有闪电。

## 权限:
**myworlds.world.weather**


# 20.游戏模式
```yml
/world gamemode [mode] [worldname]
/world gamemode [mode]
/world gamemode survival
/world gamemode creative world1
/world gamemode none
```

Sets the game mode for a specific world. All players in this world will automatically get this game mode when (re)joining the world. Valid game modes are 'survival' and 'creative'. If another name is used, it is cleared, and players remain the game mode they had previously.
设置特定世界的游戏模式。该世界的所有玩家在（重新）加入该世界时都将自动获得该游戏模式。有效的游戏模式为 `survival` 和 `creative` 。如果使用了其他名称，则该名称将被清除，玩家仍将保持之前的游戏模式。

## 权限：
**myworlds.world.gamemode myworlds.world.ignoregamemode**
（拥有此权限的玩家不受世界游戏模式的影响）


# 21.难度
```yml
/world difficulty [difficulty] [worldname]
/world difficulty [difficulty]
/world difficulty peaceful
```

设置世界的难度。难度会影响对玩家造成的伤害以及是否会出现怪物。有效的难度包括 `easy`、`normal`、hard 和 `peacefu`l 。

## 权限:
**myworlds.world.difficulty**

# 22.别名
```yml
/world alias "The Nether"
```

设置世界别名以使用 PlaceholderAPI

## 权限：
**myworlds.world.alias**

# 23.成就
```yml
/world advancements [enabled/disabled/silent]
```

设置玩家是否可以在世界中获得成就。通过禁用创造模式世界的成就，可以防止玩家在同一服务器的生存世界中作弊。当设置为 `silent` 时，玩家解锁成就时不会发送聊天信息。

## 权限: 
**myworlds.world.advancements**


# 24.PVP
```yml
/world pvp [enable/disabled]
```

打开或关闭一个世界的 PVP。

## 权限：
**myworlds.world.togglepvp**


# 25.传送到世界出生点
```yml
/world spawn [worldname]
/world spawn
```

将您传送到一个世界的出生点。除了该命令的权限外，您还可以设置特定世界的传送权限。世界进入权限也是激活状态。

## 权限:
**myworlds.world.spawn**


# 26.传送到一组世界的最后一个位置
```yml
/world rejoin [worldname]
```

Checks world last-position sharing rules for any worlds the player was last on, and teleports the player to that world at the last coordinates. If the player never played on any of these worlds before, the player is teleported to the world spawn of worldname.
检查玩家最后所在世界的[27.最后位置]共享规则，并将玩家传送到最后坐标处的世界。如果玩家之前从未在这些世界中的任何一个上玩过游戏，则会被传送到 `worldname` 的出生点。

另请参阅：重新加入传送门
## 权限: 
**myworlds.world.rejoin.*** 
- 允许重新加入任何世界 
**myworlds.world.rejoin.[worldname]** 
- 允许重新加入此名称的世界

# 27.最后位置
```yml
/world lastposition list
/world lastposition tp <worldname>
/world lastposition merge <world1> <world2>
/world lastposition split <worldname>
```

`List` 显示运行该命令的玩家或指定玩家的最后位置。每一个已知信息的世界都会显示坐标。点击项目可将玩家传送至该世界。

## 27.1合并
合并和拆分命令用于合并共享重新加入操作的世界。如果合并，重新加入其中一个合并的世界就意味着玩家会被传送到任何一个世界的最后一个位置。

## 27.2权限
**myworlds.world.lastposition**

# 28.加载或保存世界配置
```yml
/world config load
/world config save
```

从/向 `worlds.yml` 文件加载或保存世界配置。

## 权限: 
**myworlds.world.config**


# 29.传送到传送门或世界出生点
```yml
/tpp [worldname]
/tpp [portalname]
/tpp World2 bergerkiller max mogers
/tpp Home alfa beta
/tpp [world/portalname] [player1] [player2] [player3]
/tpp [world/portalname] @p
/world teleport [worldname]
/world tp [worldname]
```

将您或指定的玩家传送到某个世界的传送门或出生点。除了该命令的权限外，您还可以设置特定世界和特定传送门的传送权限。世界和传送门的进入权限也是需要的。当找不到传送门时，传送门也会像世界传送门命令一样被列出。

您还可以在命令方块中指定玩家名称"@p"，以传送最近的玩家。

## 29.1权限
myworlds.tpp 
- 允许玩家传送自己或其他玩家到任意世界或传送门
myworlds.portal.teleport.[portalname] 
- 允许玩家使用 `/tpp` 命令传送到名为 [name] 的传送门，不可传送其他玩家
myworlds.world.teleport.[worldname] 
- 允许玩家使用 `/tpp` 命令传送到名为 [name] 的世界，不可传送其他玩家
myworlds.world.enter.[worldname] 
- 允许玩家进入名为 [worldname] 的世界。该节点对于使用该命令以及进入世界中的传送门都很关键。默认情况下仅OP可用
