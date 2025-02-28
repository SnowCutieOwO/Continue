# 变量

**ExcellentCrates** 内置了对 [PlaceholderAPI](https://spigotmc.org/resources/6245/) 的支持。无需安装变量拓展！

::: tip

你可以在这些地方使用所有 PlaceholderAPI 的变量：

* 奖励命令（需在奖励编辑器中启用“应用变量（Apply Placeholders）”）
* 奖励物品（需在奖励编辑器中启用“应用变量（Apply Placeholders）”）

:::

::: danger 奖励变量

在奖励物品里使用 PlaceholderAPI 变量可能会导致物品名称与描述混乱。

:::

## 变量

::: info 用法

将 `[宝箱 ID]` 替换为宝箱的 ID（即宝箱的配置文件名）。

:::

* `%excellentcrates_keys_[宝箱 ID]%` - 显示玩家拥有指定宝箱的剩余钥匙数量。
* `%excellentcrates_openings_[宝箱 ID]%` - 显示玩家开启宝箱的次数。
* `%excellentcrates_cooldown_[宝箱 ID]%` - 显示玩家距下次开启宝箱的冷却时间。
* `%excellentcrates_next_milestone_openings_[宝箱 ID]%` - 显示玩家距下次累抽奖励所需的抽奖次数。
* `%excellentcrates_next_milestone_reward_[宝箱 ID]%` - 显示玩家下次累抽奖励的名称。
* `%excellentcrates_latest_opener_[宝箱 ID]%` - 显示上一位开启了该宝箱的玩家。
* `%excellentcrates_latest_rolled_reward_[宝箱 ID]%` - 显示上一个抽取出的奖励。