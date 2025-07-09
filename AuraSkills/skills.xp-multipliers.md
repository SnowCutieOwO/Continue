# 经验修饰符

经验修饰符相关教程

**修饰符（Multipliers）** 是一种无需修改来源配置即可影响玩家获取经验数量的方式。

修饰符可通过权限生效，即你可以分别控制（诸如指定等级的）权限组或单个玩家。如果你的权限插件支持临时权限，则你甚至可以制作临时的经验倍率活动。

## 添加修饰符

若要添加修饰符，通过你的权限插件按如下格式给予权限：

> auraskills.multilpier.[百分比]

将 [百分比] 替换为你希望修饰符所给予的额外经验比率。如，权限 `auraskills.multiplier.100` 会给予玩家 100% 额外经验，即双倍经验。百分比支持通过 `.` 设置小数（如：`auraskills.multiplier.10.5`）。

## 指定技能修饰符

修饰符也可以只对某个技能生效。格式为 `auraskills.multiplier.[技能名称].[百分比]`，将 [技能名称] 替换为小写的默认技能名称即可。

1.5 倍耕作经验示例：`auraskills.multiplier.farming.50`

## 多个修饰符

若玩家拥有多个权限，则修饰符会叠加计算。如，100（2 倍）和 50（1.5 倍）会叠加为 150（2.5 倍）。

因为权限插件所给予的权限不可重复，所以在设置多个拥有相同值的权限时会遇到问题。其中一个解决办法是，你可以添加小数点后带零的权限，它们代表的值相同，且在技术层面上不重复。

例如，`auraskills.multiplier.100` 与 `auraskills.multiplier.100.0` 效果相同。你可以在末尾加上更多零添加更多的相同数值权限。

## LuckPerms 示例

如下为通过 LuckPerms 添加多个修饰符的教程。LuckPerms 是一款流行的权限插件。如果你正在使用其他权限插件，只需使用对应命令为玩家添加权限即可。

为玩家添加双倍修饰符：

``` txt
/lp user [玩家名称] permission set auraskills.multiplier.100
```

为 vip 组玩家添加 1.5 倍修饰符：

``` txt
/lp group vip permission set auraskills.multiplier.50
```

为所有玩家添加持续 12 小时的临时三倍修饰符：

``` txt
/lp group default permission settemp auraskills.multiplier.200 true 12h
```

移除指定玩家的双倍修饰符：

``` txt
/lp user [player] permission unset auraskills.multiplier.100
```

::: warning

移除权限时，所指定的权限必须与添加时输入的完全相同。

:::

## 物品与装备修饰符

与属性修饰符相似，经验修饰符也可以添加在物品或盔甲上。物品修饰符会在持有物品时生效，装备修饰符则会在穿戴时生效。附加在物品和盔甲上的修饰符既可全局生效，又可只对一个技能生效。

用于物品/盔甲修饰符的相关命令：

* `/sk item/armor multiplier add <目标> <值> [lore]`
* `/sk item/armor multiplier remove <目标>`
* `/sk item/armor multiplier list`
* `/sk item/armor multiplier removeall`

在命令中使用 `item` 还是 `armor` 取决于你需要修饰符在什么情况下生效。“目标”参数可为 `global` 或技能名称。修饰符的值则为奖励经验的百分比（与权限修饰符相同）。

这些修饰符会在 `/sk multiplier` 中显示，除此之外若指定技能的修饰符与全局修饰符不同，则也会将其显示于此。