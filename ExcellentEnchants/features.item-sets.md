# 物品集

在 ExcellentEnchants 中，你可以创建自定义附魔的物品集。这些套装会用在附魔配置中，用于设置附魔可用的[初级物品](https://zh.minecraft.wiki/w/%E9%AD%94%E5%92%92%E5%AE%9A%E4%B9%89%E6%A0%BC%E5%BC%8F)和[次级物品](https://zh.minecraft.wiki/w/%E9%AD%94%E5%92%92%E5%AE%9A%E4%B9%89%E6%A0%BC%E5%BC%8F)。

你可以在 **item_types.yml** 中自定义物品集。默认情况下它包含了所有附魔适用的盔甲、工具及武器。

## 格子

物品集配置中的 `Slots` 决定了附魔生效的[槽位](https://jd.papermc.io/paper/1.21.5/org/bukkit/inventory/EquipmentSlot.html)。

例如，默认的 `helmet` 物品集分配了 `HEAD` 格子。这表示头盔附魔只会在玩家将其装备至这个格子（头盔栏）时生效。但是，你可以将其他格子加入配置中，让附魔物品支持在更多格子上生效。