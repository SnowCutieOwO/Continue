# 出售命令

本插件能够在玩家完成交易时执行命令而非单纯给予物品。

## 创建在交易后执行命令的物品

你可以使用命令 [`/shopkeeper setTradedCommand <命令|'-'|'?'>`](commands.md) 为手中持有的物品设置交易后命令。

示例：

* `/shopkeeper settradedcommand tellraw {player_name} "已收到物品。感谢交易。"`
* `/shopkeeper settradedcommand eco give {player_name} 100`

在物品交易后（无论收购或出售），它会被清除，并执行物品中包含的命令。

命令内容会存储在 `PublicBukkitValues` 部分中的 `shopkeepers:traded_command` 物品数据下。    
你也可以使用其他工具、命令或插件按你的喜好修改物品的外观和其他属性：只要物品包含这个值的键，那么它就会在交易后触发其中的命令。

## 变量

这些变量可以用在命令中：

* `{player_name}`：会被替换为触发本次交易的玩家名称。
* `{player_uuid}`：会被替换为触发本次交易的玩家 UUID。
* `{player_displayname}`：会被替换为触发本次交易的玩家展示名称。
* `{shop_uuid}`：会被替换为参与本次交易的商店 UUID。

## 执行多条命令

每个物品只能附加一条简单命令（见[局限性](#局限性)章节）。但是，你可以通过 Bukkit 自带的 [commands.yml](https://bukkit.fandom.com/wiki/Commands.yml) 定义更多命令的简写并使用它们。

## 以交易玩家身份执行命令

默认情况下交易命令以控制台身份执行。    
你可以使用 Minecraft 原版的 [`/execute`](https://zh.minecraft.wiki/w/%E5%91%BD%E4%BB%A4/execute) 命令来以玩家身份执行命令。

## 无偿交易

这个功能可以用于设置不获得任何物品的交易。例如你作为管理员，想要通过玩家商店收集物品：只需设置执行无实际功能命令（如 `tellraw`）的物品。

## 局限性

这个功能不意味着第三方插件或脚本完全没有机会实现更复杂的自定义交易行为。为了减少实现与维护的工作量，且为了防止功能随时间畸形，物品只能分配一个命令，且只能支持（上文提及的）少数变量。

更高级的功能，如命令随机选中、条件执行命令、间隔执行命令等都可通过第三方插件实现，之后被命令触发。

例如，你可以着手研究那些脚本插件，如 [DenizenScript](https://denizenscript.com/)：这个插件允许你编写自定义脚本，并通过命令 [`/ex`](https://meta.denizenscript.com/Docs/Languages#/ex%20command) 触发。

如果需要额外的内容，如商店的位置或拥有者，或许一个监听 `ShopkeeperTradeEvent` 事件的插件能更好满足要求。
