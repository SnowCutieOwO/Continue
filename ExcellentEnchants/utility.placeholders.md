# 变量

## PlaceholderAPI

`%excellent_enchants_charges_remaining_[格子]_[附魔]%` - 物品中剩余的充能数。[格子] 为 [EquipmentSlot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)，[附魔]则是附魔名称

`%excellent_enchants_charges_maximum_[附魔]_[等级]%` - 物品的指定附魔最大充能数。[附魔]为附魔名称，[等级]附魔等级。

## 内部变量

::: info 提示
此为插件配置内部使用的变量。若要使用 PlaceholderAPI，请浏览上文。
:::

附魔变量：
* `%enchantment_id%` - 附魔的 ID。
* `%enchantment_name%` - 附魔的显示名称。
* `%enchantment_name_formatted%` - 带等级的附魔显示名称。
* `%enchantment_description%` - 附魔描述。
* `%enchantment_level%` - 附魔等级。
* `%enchantment_level_min%` - 附魔最小等级。
* `%enchantment_level_max%` - 附魔最大等级。
* `%enchantment_rarity%` - 附魔稀有度名称。
* `%enchantment_trigger_chance%` - 触发（使用）附魔效果的几率。
* `%enchantment_trigger_interval%` - 附魔被动效果的时间间隔。
* `%enchantment_fit_item_types%` - 附魔能够施加的物品类型。
* `%enchantment_obtain_chance_enchanting%` - 生成在附魔台内的几率。
* `%enchantment_obtain_chance_villager%` - 生成在村民交易中的几率。
* `%enchantment_obtain_chance_loot_generation%` - 生成在战利品宝箱中的几率。
* `%enchantment_obtain_chance_fishing%` - 生成在渔获物品中的几率。
* `%enchantment_obtain_chance_mob_spawning%` - 生成在实体装备上的几率。
* `%enchantment_charges_max_amount%` - 附魔的最大充能数量。
* `%enchantment_charges_consume_amount%` - 单次使用消耗的充能数量。
* `%enchantment_charges_recharge_amount%` - 单个充能物品所回复的充能数量。
* `%enchantment_charges_fuel_item%` - 充能物品的显示名称。
