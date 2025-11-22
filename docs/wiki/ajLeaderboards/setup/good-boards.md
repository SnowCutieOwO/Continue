# 变量参考

这里是一些你可以使用的排行榜名称。

需要注意的是这个列表并不详尽，任何满足[安装步骤一](../setup/setup.md#1必需找到使用的变量)的变量都可以成为排行榜。

在使用这些变量之前别忘了输入命令 `/ajlb add <变量名称>`！

如果你有想提交的变量，随时可以联系作者添加！

* 击杀排行榜
  * [`statistic_player_kills`](../../PlaceholderAPI/user-guides/placeholder-list.md#statistic) —— 击杀玩家
  * [`statistic_mob_kills`](../../PlaceholderAPI/user-guides/placeholder-list.md#statistic) —— 击杀实体
* 死亡排行榜
  * [`statistic_deaths`](../../PlaceholderAPI/user-guides/placeholder-list.md#statistic)
* 经济排行榜
  * [`vault_eco_balance`](../../PlaceholderAPI/user-guides/placeholder-list.md#vault)
  * [`vault_eco_balance_fixed`](../../PlaceholderAPI/user-guides/placeholder-list.md#vault) —— 如果上一个变量有格式，那么就用这个（通常不会，但部分服务器有这个情况）
* 游玩时间
  * [`statistic_time_played`](../../PlaceholderAPI/user-guides/placeholder-list.md#statistic)**（推荐）** —— 会显示周、天、时、分、秒单位的游玩时间
    * 显示秒级单位可以在 ajLeaderboards 配置（`time-format-display-seconds`）下关闭。
  * [`statistic_hours_played`](../../PlaceholderAPI/user-guides/placeholder-list.md#statistic) —— 游玩总时长，单位为时
* 投票数量
  * [`VotingPlugin_Total_AllTime`](../../PlaceholderAPI/user-guides/placeholder-list.md#votingplugin)
    * 尽管这个变量标注的是全时，你仍然应该在 ajLeaderboards 中制作月度/周度等排行榜时使用 `VotingPlugin_Total_AllTime` 变量。之后你可以通过[修改 ajLeaderboards 的 `<type>` 达到刷新效果](../setup/setup.md#8可选设置时间排行榜)。