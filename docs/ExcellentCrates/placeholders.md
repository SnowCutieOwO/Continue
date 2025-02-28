# 变量

如下变量只可以用在插件的文件中、

::: info

如果你正在寻找全局可用的变量，请参阅 [PlaceholderAPI](intergrations.placeholderapi.md) 集成章节。

:::

## 宝箱变量

* `%crate_id%` - 宝箱 ID（文件名称）
* `%crate_name%` - 宝箱显示名称
* `%crate_description%` - 宝箱描述。
* `%crate_permission%` - 宝箱的权限节点。
* `%crate_open_cooldown%` - 格式化的宝箱开启冷却时间。
* `%crate_open_cost%` - 格式化的宝箱开箱收费价格。
* `%crate_last_opener%` - 显示最后一个开启该宝箱的玩家。
* `%crate_last_reward%` - 显示最后一个获取的宝箱奖励。

## 钥匙变量

* `%key_id%` - 钥匙 ID（文件名称）。
* `%key_name%` - 钥匙显示名称。
* `%key_virtual%` - 是否为虚拟钥匙。

### 奖励变量

* `%reward_id%` - 奖励 ID。
* `%reward_name%` - 奖励显示名称。
* `%reward_description%` - 奖励描述。
* `%reward_weight%` - 奖励的权重。
* `%reward_roll_chance%` - 奖励的随机几率。
* `%reward_rarity_name%` - 奖励的稀有度名称。
* `%reward_rarity_weight%` - 奖励的稀有度权重。
* `%reward_rarity_roll_chance%` - 奖励的稀有度抽取几率。