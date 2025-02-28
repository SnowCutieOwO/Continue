# 命令
插件的主命令可以在 `config.yml` 中修改。默认情况下为 `excellentenchants` 或者 `eenchants`。

<font color="green">[]</font> - 可选参数，<font color="red"><></font> - 必选参数。

标志 -s 会将命令标记为静默执行（玩家不会收到命令执行的提醒）。

`/eenchants [help]` - 显示插件命令列表。

`/eenchants reload` - 重载插件与附魔配置。

`/eenchants book <玩家名称> <附魔名称> <附魔等级>` - 将指定等级的附魔给予玩家。附魔等级为 -1 时表示随机等级。

`/eenchants getfuel <附魔名称> [数量]` - 获取用于为附魔充能的物品。

`/eenchants raritybook <玩家名称> <附魔品质> <附魔等级>` - 将随机制定品质的附魔书给予玩家。附魔等级为 -1 时表示随机等级。

`/eenchants enchant <附魔名称> <附魔等级> [玩家名称] [格子]` - 为[指定位置]的物品（去除）添加附魔。附魔等级为 -1 时表示随机等级。附魔等级为 0 时表示去除该附魔。

`/eenchants list [玩家名称]` - 打开自定义附魔列表。