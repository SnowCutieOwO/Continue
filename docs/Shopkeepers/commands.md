# 命令

通常情况下，命令不可以用于创建或设置商店。下文列出的多数命令只能给管理员使用。每个命令对应的权限节点可以在[权限列表](installtion-updating.permissions.md)找到。

## 命令参数：

* `[可选参数]`：不一定要填入的参数。但是，部分情况下某些参数只会是可选的，例如以玩家身份执行或是看向目标商店实体时。
* `<必选参数>`：必须填入的参数。
* `<参数1|参数2>`：可替代参数。可以输入`参数1` 或者`参数2`。
* `<'文本'>`：字面意义的参数，需要将引号内的字当做参数填入。
* `[商店名称]`：除非额外标注，否则需要看向商店实体、指定商店名称、ID 或唯一 ID。
* `[玩家名称]`：除非额外标注，如果不指定玩家名称，则受影响目标为执行命令的玩家。
* `[页码]`：若不填则默认为第 `1` 页。

## 命令列表

### `/shopkeeper help`

显示可用命令。玩家没有权限执行的命令会被隐藏。

### `/shopkeeper [商店类型] [物体类型]`

在指定方块的位置创建管理员商店。

如果配置文本中启用了允许命令创建玩家商店，且未指定商店类型，同时玩家执行命令时看向容器（如箱子），则执行命令后会创建玩家商店村民实体。

### `/shopkeeper reload`

重载插件。这会保存任何尚未保存的变动，之后再重载配置文件、

### `/shopkeeper notify <'trades'>`

切换本次游戏登录期间交易提醒的开关。

### `/shopkeeper lisy [玩家名称|'admin'（管理员）|'all'（全部）] [页码]`

查询玩家拥有的商店（若未指定玩家或 `'admin'` 以表示管理员商店），指定玩家的商店或所有管理员商店。列出的内容会分页显示。

### `/shopkeeper remove [商店名称]`

移除指定的商店实体。你需要看向商店、指定 ID 、唯一 ID 或其名称才可移除。

### `/shopkeeper removeAll [玩家名称|'player'（所有玩家）|'admin'（所有管理员）]`

移除指定玩家拥有的所有商店（若未指定参数），或者其他玩家的商店、所有玩家的商店、或者所有管理员商店。该命令需要通过 `/shopkeeper confirm` 确认操作。

### `/shopkeeper give [玩家名称] [数量]`

给予指定玩家特定数量的商店创建物品。

### `/shopkeeper giveCurrency [玩家名称] ['base'|'high'] [数量]`

给予指定玩家特定数量在配置文本中预先设置好的货币物品。

### `/shopkeeper setCurrency ['base'|'high']`

将手中的物品设置为指定的货币物品。

### `/shopkeeper remote [商店名称] [玩家名称]`

远程打开制定商店。商店可以通过名称、ID、唯一 ID 或看向实体选中。另外，如果命令执行者拥有 `shopkeeper.remote.otherplayer` 权限，则商店可以为其他玩家打开。

### `/shopkeeper edit [商店名称]`

允许通过看向商店、指定 ID 或唯一 ID 的方式远程编辑它们。

### `/shopkeeper transfer <新拥有者>`

将商店所有权转让给其他玩家。

### `/shopkeeper setTradePerm [商店名称] <权限节点|'-'|'?'>`

设置、移除（`-`）或显示（`?`）管理员交易商店的权限。玩家尝试与指定商店交易时，除了插件本身的权限之外，还会额外要求通过该命令设置的权限。    
你可以使用任何文本当做交易权限。例如 `/shopkeeper setTradePerm Bob my.custom.permission` 将会在玩家试图与名为 `Bob` 的商店交易时要求拥有 `my.custom.permission` 权限。

### `/shopkeeper setTradedCommand <命令|'-'|'?'>`

设置设置、移除（`-`）或显示（`?`）商店内交易手中物品后执行的命令。    
示例：`/shopkeeper setTradedCommand say Hello world!`

另见[出售命令](other-features.selling-commands.md)章节。

### `/shopkeeper setForHire [商店名称]`

将指定商店出租。将用作租赁价格的物品放在手中并看向商店或对应商店的容器。这会允许玩家通过支付租赁费用来租借商店并管理该商店。

### `/shopkeeper editVillager [村民类型]`

打开指定村民或流浪商人的编辑器。村民/流浪商人可以通过 UUID 或看向它选中。

## Shopkeeper 快照命令

### `/shopkeeper snapshot list [商店名称] [页码]`

列出商店的快照备份。

### `/shopkeeper snapshot create [商店名称] <快照名称>`

创建指定名称的商店快照。名称不允许包含彩色代码或空格。

### `/shopkeeper snapshot remove [商店名称] <快照名称|快照 ID>`

通过名称或 ID 移除指定的商店快照。

## 调试与辅助命令

### `/shopkeeper confirm`

执行某些危险的操作时，插件会要求执行一次这个命令（如通过命令删除所有商店）

### `/shopkeeper replaceAllWithVanillaVillagers`

删除所有村民商店，并将其替换为原版的无 AI 村民，几乎与插件相同。将存档转化为原版 Minecraft 时会很有用。例如在服务器关闭时，想要玩家能够下载存档并使用地图内的商店。

尚不支持实体装备，因为原版村民会在某些情况下扔掉它们的装备，且无法控制。

这个命令需要如下权限：`shopkeeper.debug`、`shopkeeper.remove-all.player` 以及 `shopkeeper.remove-all.admin`

### `/shopkeeper cleanupCitizensShopkeepers`

移除所有无效的 Citizens 商店。一般用于清理不存在对应 NPC 的商店。

### `/shopkeeper convertItems [玩家名称] ['all']`

这个命令可以用于转化手持物品至 Spigot 的内部物品格式。该命令会将手中的物品经过 Spigot 物品序列化与解序列化，与在商店中交易或插件重载时发生的情况相同。

它可以用于手动修复那些不能用于交易（或不再）符合 Spigot 内部物品数据格式。见配置文件中 `convert-player-items` 设置项的注释。

在更新版的 Spigot 中，这个命令可能会失去其原有的效果，因为 Spigot 现在坚持使用最初的文本数据格式物品（物品显示名称、物品描述等）

### `/shopkeeper debug [选项]`

切换指定调试选项或调试模式的开关。调试模式与调试选项可以在配置文本中设置。

开启调试模式后，插件会在多个情况下向控制台中输出额外信息，这可能有助于排查问题。

### `/shopkeeper check`

显示有关载入区块、实体数量、载入商店与 AI 和重力处理时间的统计数据。


### `/shopkeeper debugCreateShops [商店数量|'testEqiupment'（测试装备）]`

以调试目的创建商店。

* 参数 `testEquipment` 是固定的：为每种实体类型创建其可显示的固定装备。可用于测试哪些格子在对应实体上可见。商店实体会按列生成，从玩家当前位置开始，向玩家面朝的位置排列，间距 2 格。此时会忽略 `shopCount` 参数。
* 其他情况下：创建指定数量的管理员商店（默认为 `10`）。适合用于性能测试。商店实体会按列生成，从何玩家当前位置开始，向玩家面朝的位置排列，间距 1 格。

### `/shopkeeper checkitem`

显示手持物品的调试信息，或者将主副手的物品进行比较。

### `/shopkeeper yaml`

显示手中物品 Bukkit YAML 的格式序列化数据，及其在配置文件中应当使用的样式。输出会在控制台记录，便于复制（也因为其在游戏内过大而难以完整显示）

注意：物品的原 Minecraft NBT 数据可以通过 Minecraft 自带的 [`/data get entity @s` 命令](https://zh.minecraft.wiki/w/%E5%91%BD%E4%BB%A4/data)查看。

### `/shopkeeper testDamage [伤害值] [每刻攻击次数] [攻击持续刻数]`

可用于调试大量攻击事件的性能。

### `/shopkeeper testSpawn [重复次数]`

用于测量当前区块内重生成激活的商店实体所用时间。