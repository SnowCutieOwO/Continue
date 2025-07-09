# 常见问题

常被问到的问题

## 如何移除快捷栏上显示的生命值与魔力值显示？

将 config.yml 中的 `action_bar.idle` 设置为 false 即可。

## 我如何防止重复放置破坏方块刷取经验与物品？

一般情况下这不该发生，但还请再次确保配置中的如下设置正确：

1. 在 `sources` 文件夹中，确保 `mining.yml`、`excavation.yml` 与 `foraging.yml` 文件的 `default.check_replace` 选项为 true。
2. 在 `config.yml` 中，确保 `check_block_replace.enabled` 为 true。另外还请确保你的世界名称没有在 blocked_worlds 列表中。
3. 在 `config.yml` 中，确保 `hooks.WorldGuard.blocked_check_replace_regions` **不**包含你的世界名称。

## 我如何使用或禁用魔力？

见“[魔法能力](mana-abilities.md)”与“[禁用魔力](mana-abilities.md)”。

## 尝试打开技能菜单时为什么会显示“玩家没有技能数据！”？/为什么技能菜单中有物品缺失？

重启服务器。你可能热重载了服务器，这不受支持且会搞坏一大堆东西。

## 你会支持 1.8 吗？

不。要重构的代码太多，且有些特性会被去除。

## 有开发者 API 吗？

是的，见[对应章节](api.md)。

## 我如何删除插件并移除多余血量？

若要卸载，请将插件放回并请出所有玩家，之后在控制台中输入命令 `/skills resethealth`。然后立即移除插件并重启服务器。

## 为什么我没有在血量足够高时显示正确数量的生命值？

客户端的生命值显示经过压缩，因此若要获得额外生命值就需要更多血量。你的实际生命显示在 ActionBar 上。你可以在 config.yml 中将 `health.health-scaling` 设置为 false 以禁用此功能。

## 我如何将数据从 YAML 迁移至 MySQL？

见[SQL](main-config.sql.md)章节了解数据迁移。

## 我如何添加技能经验修饰符？

你只需为玩家或权限组赋予 `auraskills.multiplier.[百分比]` 权限即可，百分比即为额外获取的经验值百分比。例如，通过 LcukPerms 为所有玩家给予双倍经验的命令为 `/lp group default permission set auraskills.multiplier.100`。

见“[经验修饰符](skills.xp-multipliers.md)”章节了解更多。

## 插件支持什么种类的服务器核心？

插件仅官方支持 Spigot 与 Paper 核心，但诸如 Purpur 等的 Paper 分支同样有效。CraftBukkit 与模组混合端（Arclight、Mohist 等）不受支持。