# 命令列表

你可以通过 `/co` 使用这些命令。

## 概览

|命令|描述|
|---|---|
|/co help|显示命令列表|
|/co inspect|切换查询模式|
|/co lookup|查询方块数据|
|/co rollback|回滚方块数据|
|/co restore|存储方块数据|
|/co purge|删除旧方块数据|
|/co reload|重载配置文件|
|/co status|显示插件状态|
|/co consumer|切换消耗处理|

### 快捷命令

|命令|描述|
|---|---|
|/co near|查询 5 格方块内的记录|
|/co undo|撤销上一个操作|

## 命令列表

*详细的命令内容会在下文讲述。*

### /co help

显示游戏内的命令帮助列表。

### /co inspect

启用查询模式。再次输入命令可禁用。也可输入其简化形式“/co i”。

### /co lookup

执行查询操作。大部分参数为可选。

参数：`u:<玩家名称> t:<时间> r:<半径> a:<操作> i:<包含> e:<不含>`  
别称：`/co l`

#### 参数

|参数|描述|
|---|---|
|`u:<玩家名称>`|指定被查询的玩家。|
|`t:<时间>`|指定查询的时间范围。|
|`a:<操作>`|指定查询的操作类型。|
|`i:<包含>`|指定涉及的方块或实体。|
|`e:<排除>`|指定排除的方块或实体。|
|`#<内容>`|在命令末尾加上该参数可执行额外操作。|

#### 分页

若返回多页，可使用命令 `/co lookup <页码>` 翻页。  
若要调整每页显示条目数，请使用命令 `/co lookup <页码>:<显示条目数>`。

> 例如，`/co l 1:10` 会以一页十条的格式显示第一页的查询条目。

### /co rollback

执行回滚操作。[参数](#参数详解)与 /co lookup 相同。  
*回滚操作可以撤销玩家的行为，如回滚玩家的恶意破坏。*

参数：`u:<玩家名称> t:<时间> r:<半径> a:<操作> i:<包含> e:<不含>`  
别称：`/co rb`

### /co restore

执行存储操作。[参数](#参数详解)与 /co lookup 相同。 
*存储功能可用于撤销回滚，或保存玩家行为。*

参数：`u:<玩家名称> t:<时间> r:<半径> a:<操作> i:<包含> e:<不含>`  
别称：`/co rs`

### /co purge

清除旧方块数据。适用于清理存档中不需要的旧数据。

参数：`t:<时间> r:<世界名称> i:<包含>`

例如，`/co purge t:30d` 会删除超过一个月的旧数据，只保留最近 30 天的数据。

> 若在游戏内使用，只有超过 30 天的数据可被清除。  
> 若在控制台使用，只有超过 24 小时的数据可被清除。

#### 清理世界

在 CoreProtect v19 之后，你可以指定世界。  
例如，`/co purge t:30d r:#world_nether` 会删除默认下界内超过一个月的数据，而不会清理其他世界中的数据。

#### 清理方块

在 CoreProtect v23 之后，你可以指定方块类型。  
例如，`/co purge t:30d i:stone,dirt` 会删除所有与石头和泥土有关且超过一个月的数据，而不会清理其他世界中的数据。

#### MySQL 优化

在 CoreProtect v2.15 之后，在命令末尾添加“#optimize”标签（如 `/co purge t:30d #optimize`）将会优化数据库表，以释放硬盘空间。该选项只在使用 MySQL 时可用，因为 SQLite 默认会在合并时优化数据。

*需要注意的是，加入 #optimize 参数会显著拖慢清理进程，一般情况下不需要用到这个参数。*

## /co reload

重载配置文件。

## /co status

显示插件状态与版本信息。

## /co consumer

控制台命令，用于暂停或开始消耗者队列处理。

## 参数详解

### `u:<玩家名称>`

*可指定一或多名玩家。*

* 示例：`u:Notch`
* 示例：`u:Notch,Intelli`
* 示例：`u:#fire,#tnt,#creeper,#explosion`

### `t:<时间>`

*可指定周、日、时、分与秒作为范围。*  
*时间单位可组合使用，也可指定小数单位的时间。*

* 示例：`t:2w,5d,7h,2m,10s`
* 示例：`t:5d2h`
* 示例：`t:1h-2h`*（1-2 小时）*
* 示例：`t:2.5h`*（2.5 小时）*

### `r:<半径>`

*以命令执行者当前位置为中心一定半径的范围。*

* 示例：`r:10`*（中心内 10 格半径的方块）*
* 示例：`r:#world_the_end`*（指定世界）*
* 示例：`e:#global`*（全服）*
* 示例：`r:#worldedit` 或 `r:#we`*（指定 WE 选区）*

### `a:<操作>`

*限制查询至指定操作。*

* 示例：`a:+block`*（只包含放置方块操作）*

#### 操作列表

|行为格式|描述|
|---|---|
|`a:block`|方块放置/破坏|
|`a:+block`|方块放置|
|`a:-block`|方块破坏|
|`a:chat`|发送聊天消息|
|`a:click`|玩家点击交互|
|`a:command`|玩家输入命令|
|`a:container`|物品取出/放入箱子|
|`a:+container`|物品放入箱子|
|`a:-container`|物品取出箱子|
|`a:inventory`|物品取出/放入玩家背包|
|`a:+inventory`|物品放入玩家背包|
|`a:-inventory`|物品取出玩家背包|
|`a:item`|物品由玩家掉落、丢弃、拾起、放入或取出|
|`a:+item`|物品拾起或被玩家取出|
|`a:-item`|物品掉落、丢弃或被玩家放入|
|`a:kill`|击杀实体|
|`a:session`|玩家上线/下线|
|`a:+session`|玩家登录|
|`a:-session`|玩家登出|
|`a:sign`|在告示牌上写字|
|`a:username`|玩家名称改变（仅正版）|


### `i:<包含>`

*可用于指定某些方块、物品、实体。*

* 示例：`i:stone`*（仅包含石头）*
* 示例：`o:stone,oak_wood,bedrock`*（包含多个方块）*

> 你可以在 https://coreprotect.net/wiki-blocks 找到方块名称列表。  
> 也可以在 https://coreprotect.net/wiki-entities 找到实体名称列表。

### `e:<排除>`

*可用于排除某些方块、物品、玩家。*

* 示例：`e:tnt`*（包括 TNT）*

### `#<标签>`

在命令后添加井号标签来执行某些额外的操作。

* 示例：`#preview`*（执行回滚预览）*

#### 标签列表

|标签|效果|
|---|---|
|`#preview`|进行一次回滚/存储|
|`#count`|返回查找队列里找到的行数|
|`#verbose`|在回滚/存储过程中显示额外信息|
|`#silent`|在回滚/存储过程中显示尽可能少的信息|

## 示例命令

### 示例回滚命令

默认情况下，若未指定半径，则为 10 格，即将操作限制在以你为中心的 10 格方块内。使用 `r:#global` 可进行全局回滚。

* `/co rollback Notch t:1h`
    *（将玩家 Notch 回滚一小时（默认半径 10））*
* `/co rollback u:Notch,Intelli t:1h #preview`
    *（预览回滚玩家 Notch 和 Intelli 一小时（默认半径 10））*
* `/co rollback u:Notch t:23h17m`
    *（将玩家 Notch 回滚 23 小时 17 分钟（默认半径 10））*
* `/co rollback u:Notch t:1h i:stone`
    *（回滚 Notch 在一小时前放置/破坏的所有石头方块（默认半径 10））*
* `/co rollback u:Notch t:1h i:stone a:-block`
    *（回滚 Notch 在一小时前破坏的所有石头方块（默认半径 10））*
* `/co rollback u:Notch t:1h r:#global e:stone,dirt`
    *（回滚 Notch 一小时前除放置/破坏石头与泥土方块的所有操作）*
* `/co rollback u:Notch t:1h r:20`
    *（回滚 20 格半径内 Notch 做出的所有破坏动作）*
* `/co rollback u:Notch t:1h r:#nether`
    *（回滚 Notch 一小时前在地狱中做出的所有破坏动作）*
* `/co rollback u:Notch t:5m a:inventory`
    *（回滚 Notch 五分钟前的所有物品栏交互）*
* `/co rollback t:15m r:30`
    *（回滚周围 30 格半径内 15 分钟前发生的所有事）*
* `/co rollback t:15m r:#worldedit`
    *（回滚 WorldEdit 选区内 15 分钟前发生的所有事）*

### 示例查询命令

查询命令与回滚命令大致相似。区别在于，查询命令没有默认半径，即每次搜索都是针对全局而言的。

* `/co lookup i:diamond_ore t:1h a:-block`
    *（查询过去一小时中被挖掘的所有钻石矿）*
* `/co lookup u:Notch t:30m a:chat`
    *（查询过去 30 分钟 Notch 发出的所有聊天消息）*
* `/co lookup u:Notch t:3d a:inventory`
    *（查询过去 3 天 Notch 所有的物品栏移动操作）*
* `/co lookup u:Notch a:login`
    *（查询 Notch 自进服以来的所有登录历史）*
* `/co lookup u:Notch a:username`
    *（查询 Notch 此前使用过的名称）*