# 能力

能力与 abilities.yml 文件的相关教程

> 请勿将其与[魔法能力](mana-abilities.md)混淆。

**能力（Abilities）** 是随技能升级解锁的被动效果。默认情况下，每个技能会在一至五级分别解锁五个能力（如果在 config.yml 下 `start_level` 为 1，则为二至六级），且会每隔五级获得一次强化。能力与默认技能不绑定，切换能力至其他技能或禁用能力只需将其从 `skills.yml` 下的 `abilities` 中移除即可。

## 配置

所有除分配技能外的能力相关配置均在 `abilities.yml` 下完成。每个能力都有多个通用选项，也有各自的专属选项。

### 通用选项

* `enabled` - 是否启用该能力。禁用后能力将失效且不会显示在菜单中。这与将能力从 `skills.yml` 下的 `abilities` 中移除等效，但 `enabled` 选项更适合临时移除。
* `base_value` - 技能在一级时的基础值（此时刚解锁）。能力的值决定了其强度/效果并直接显示在菜单中。有指定几率触发的能力也由该选项控制。例如，若“收获满满”的 `base_value` 为 5.0，则它在一级时有 5% 的概率触发。
* `value_per_level` - 每级技能增加的能力值。有效值的公式为 $value = base\_value + (value\_per\_level \times (level - 1))$，`level` 为能力而非技能等级。关于能力等级计算相关公式，请见下文 `level_up` 部分。
* `unlock` - 解锁能力所需的技能等级。可以为固定证书，也可以为利用值为`config.yml` 下 `start_level` 的内建变量 `{start}` 的计算公式。使用该方法的默认配置可以让获得五个技能时首个解锁该技能。
* `level_up` - 能力升级间隔的技能等级。玩家能力等级计算公式为 $level = \frac{skill\_level - unlock}{level\_up + 1}$，不包含 `max_level` 设定的任何上限。
* `max_level` - 能力（非技能）的最大等级。将该值设置为 `0` 表示不设置最大等级，使得最大能力等级由技能最大等级与上述公式决定。
* `secondary_base_value` - 部分能力有一个次级基础值用于控制其他变量。使用方法与 `base_value` 相同。
* `sceondary_value_per_level` - 部分能力有一个次级等级值用于控制其他变量。使用方法与 `value_per_level` 相同。

### 专属选项

|选项键|适用技能|描述|
|---|---|---|
|`scale_base_value_chance`|treasure_hunter、epic_catch, metal_detector、lucky_spades|若为 true，能力的值会按比例调整战利品表的 `base_chance` 而非只是简单叠加。几率的计算公式为 $1 + \frac{value}{100}$。|
|`enable_message`|first_strike、revival|玩家是否在能力激活时收到 ActionBar 消息。|
|`cooldown_ticks`|fisrt_strike|“先出之刃”技能刷新的间隔，单位为刻。默认为 6000（5 分钟）。|
|`enable_enemy_message`|bleed|玩家对敌怪造成流血效果时是否发送 ActionBar 消息。|
|`enable_self_message`|bleed|玩家是否在自身获得流血效果时收到 ActionBar 消息。|
|`enable_stop_message`|bleed|玩家是否在自身流血效果停止时收到 ActionBar 消息。|
|`base_ticks`|bleed|玩家未处于流血状态时增加的时间长度，单位为刻。|
|`added_ticks`|bleed|玩家已处于流血状态时叠加的时间长度，单位为刻。|
|`tick_period`|bleed|流血刻生效的 Minecraft 刻间隔。|
|`show_particles`|bleed|在玩家因流血损失生命值时是否显示粒子效果。|
|`health_percent_required`|fleeting|玩家触发“残血飞奔”技能时生命值的最低百分比。|
|`add_item_lore`|alchemist|是否对酿造药水增加额外时长的效果描述。|
|`speed_reduction`|stun|受眩晕打击效果实体的减速程度。0.2 = 减速 20%。|

## 菜单

能力菜单显示技能对应的所有能力及魔法能力，以及其描述和等级。它可通过技能升级菜单中的能力按钮（默认为淡蓝色染料）打开。

能力描述也会显示在代表升级进度的玻璃板描述中。简化版本的描述也会在技能菜单中的对应物品上显示。

## 消息

能力的名称、描述与信息都可以在消息文本中的 `abilities` 部分配置。