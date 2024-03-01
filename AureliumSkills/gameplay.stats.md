# 属性

属性相关的信息及其计算方式

本插件包含了六种随等级提升而增强的属性：

## 生命（Health）
生命属性决定了玩家的最大生命值

* 会向 Attribute.GENERIC_MAX_HEATLH 添加 AttributeModifier
* 会在玩家加入（PlayerJoinEvent 事件触发）、生命属性变动和配置文件重载时刷新
* 基于等级计算的生命值公式：
  * `Attribute.GENERIC_MAX_HEALTH = 20.0 + (Stat.HEALTH * Setting.HEALTH_MODIFIER)`
  * Stat.HEALTH 即 /stats 界面内所展示的生命属性，而 Setting.HEALTH_MODIFIER 则为配置文件中“health.modifier”的值（默认值为 0.5）
  * “health.modifier”值为 1 时表示每点生命属性能为玩家提供 1 点生命值上限。
* **血量压缩：**
  * 若“health.health-scaling”项设置为 true 时，显示在玩家屏幕上的心数量会受血量上限的影响，可以防止血条挡住屏幕。
    这意味着若玩家的生命值大于 20，则他们所见的生命值将不再是一颗心等于 2 点生命值。
  * 血量压缩至多允许玩家屏幕上出现两排心。
* **伤害显示比例**
  * 随“health.hp-indicator-scaling”设置项的改变而改变
  * 伤害显示比例即玩家原伤害显示在 ActionBar 前的所需翻倍的数值。
  * 默认值为 5 则表示 20.0 的血量在 ActionBar 上会显示为 100 点生命值
* 更多信息详见本章节的“生命属性”一文。

## 力量
力量属性会提升玩家所造成的伤害值。

* 力量属性会应用在 EntityDamageByEntityEvent 事件上。
* 受力量属性影响的伤害计算公式：
  * `Damage = InitialDamage + (Stat.STRENGTH * Setting.STRENGTH_MODIFIER)`
  * Stat.Strength 即 /stats 界面内所展示的力量属性，而 Setting.STRENGTH_MODIFIER 则为配置文件中“strength.modifier”的值（默认值为 0.1）
* 若 use-percent 项被设置为 true，则计算公式为：
  * `Damage = InitialDamage * (1 + (Stat.STRENGTH * Setting.STRENGTH_MODIFIER) / 100)`
 
## 韧性
韧性属性会降低玩家所受到的伤害。

* 韧性属性会应用在 EntityDamageEvent 事件上。
* 受韧性属性影响的（玩家所受）伤害计算公式：
  * `Damage = OriginalDamage * (1 - (-1 * (1.01)^(-1 * Stat.TOUGHNESS * Setting.TOUGHNESS_MODIFIER) + 1))`
  * Stat.Toughness 即 /stats 界面内所展示的韧性属性，而 Setting.Toughness_MODIFIER 则为配置文件中“toughness.new-modifier”的值（默认值为 1）
 
## 再生
再生属性会增加玩家的自然回血速度。

* 可使用两种模式：*原版（Vanilla）*或*自定义（Custom）*
* **原版**
  * 在“regeneration.custom-regen-mechanics”项为 false 时使用
  * 会在血量恢复原因为 RegainReason.SATIATED（玩家吃饱）时修改 EntityRegainHealthEvent 事件为玩家恢复的生命值
  * 若玩家的饱和度大于 0：
    * 计算公式为 `AmountRegenerated = VanillaAmount + (Stat.REGENRATION * Setting.SATURATED_MODIFIER)`
    * Stat.REGENERATION 即 /stats 界面内所展示的再生属性，而 Setting.SATURATED_MODIFIER 则为配置文件中“regeneration.saturated-modifier”的值（默认值为 0.5）
  * 若玩家的饱食度满而饱和度为 0：
    * 计算公式为 `AmountRegenerated = VanillaAmount + (Stat.REGENRATION * Setting.HUNGER_FULL_MODIFIER)`
    * Stat.REGENERATION 即 /stats 界面内所展示的再生属性，而 Setting.HUNGER_FULL_MODIFIER 则为配置文件中“regeneration.hunger-full-modifier”的值（默认值为 0.025）
  * 若玩家的饱食度未满但大于 14：
    * 计算公式为 `AmountRegenerated = VanillaAmount + (Stat.REGENRATION * Setting.HUNGER_ALMOST_FULL_MODIFIER)`
    * Stat.REGENERATION 即 /stats 界面内所展示的再生属性，而 Setting.HUNGER_ALMOST_FULL_MODIFIER 则为配置文件中“regeneration.hunger-almost-full-modifier”的值（默认值为 0.025）
* **自定义**
  * 在“regeneration.custom-regen-mechanics”项为 true 时使用
  * 无饱和度的情况下：
    * 每 Setting.HUNGER_DELAY 刻恢复生命值（配置文本“regeneration.custom-regen-options.hunger-delay”项，默认为 60）
    * 若玩家饱食度满：
      * 计算公式为 `AmountRegenerated = Setting.BASE_REGEN + (Stat.REGENERATION * Setting.HUNGER_FULL_MODIFIER`
      * Setting.BASE_REGEN 为配置文件中“regeneration.base-regen”的值（默认值为 1）
    * 若玩家饱食度未满但大于 14：
      * 计算公式为 `AmountRegenerated = Setting.BASE_REGEN + (Stat.REGENERATION * Setting.HUNGER_ALMOST_FULL_MODIFIER`
  * 有饱和度的情况下：
    * 每 Setting.SATURATED_DELAY 刻恢复生命值（配置文本“regeneration.custom-regen-options.hunger-delay”项，默认为 20）
    * 计算公式为 `AmountRegenerated = Setting.BASE_REGEN + (Stat.REGENERATION * Setting.SATURATED_MODIFIER`
    * Setting.SATURATED_MODIFIER 为配置文件中“regeneration.saturated-modifier”的值（默认值为 0.5）
  * 对 Setting.SATURATED_DELAY 和 Setting.HUNGER_DELAY 项的改动只会在服务器重启时生效

## 幸运
幸运属性会提升玩家战利品（箱子和渔获物）的质量，并提升双倍掉落的几率

* 会影响 Attribute.GENERIC_LUCK 的值
* 计算公式为 `Luck = Stat.LUCK * Setting.LUCK_MODIFIER`
* 会在玩家加入（PlayerJoinEvent 事件触发）、幸运属性变动和配置文件重载时刷新
* 会在挖掘特定方块时概率触发双倍掉落
  * 默认包括了石头、圆石、沙子、泥土、砂砾、草方块、安山岩、花岗岩和闪长岩
  * 几率的计算公式为 `% Chance = Stat.LUCK * Setting.DOUBLE_DROP_MODIFIER * 100`
  * Setting.DOUBLE_DROP_MODIFIER 为配置文件中“luck.double-drop-modifier”的值（默认为 0.005）
  * 概率的上限为 Setting.DOUBLE_DROP_PERCENT_MAX 的值 （配置文件中“luck.double-drop-percent-max”的值，默认为 100）

## 智慧
智慧属性会提升各方面所获经验的值，同时降低玩家的铁砧经验消耗
* 获取经验的计算公式为 `ExperienceGained = InitialExperience * (1 + (Stat.WISDOM * Setting.EXPERIENCE_MODIFIER))`
* Setting.EXPERIENCE_MODIFIER 为配置文件中“wisdom.experience-modifier”的值（默认为 0.01）
* 减免后铁砧费用的计算公式为 `NewCost = OriginalCost * (1 - (-1 * 1.025^(-1 * Stat.WISDOM * Setting.ANVIL_COST_MODIFIER) + 1))`
* Setting.ANVIL_COST_MODIFIER 为配置文件中“wisdom.anvil-cost-modifier”的值（默认为 0.25）
