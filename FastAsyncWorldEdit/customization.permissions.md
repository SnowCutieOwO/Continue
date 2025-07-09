# 权限

::: info

命令相关的权限请[见此](features.command-overview.md)。

:::

## 管理员权限

* `fawe.admin`（允许通过 `/wea` 命令绕过限制）
* `fawe.bypass`（自动绕过 WorldEdit 的限制）
* `worldedit.anyblock`（绕过 `worldedit-config.yml` 中的 `disallowed-blocks` 选项）
* `worldedit.inventory.unrestricted`（若启用背包限制，则该权限可绕过该限制）

## 玩家权限

* `fawe.limit.<限制组>`（为玩家分配指定组的限制。若填入 `unlimited` 表示不作限制。）
* [`fawe.permpack.basic`](https://github.com/IntellectualSites/FastAsyncWorldEdit/blob/main/worldedit-bukkit/src/main/resources/plugin.yml#L31)（一系列创造服务器允许使用的 WorldEdit 权限）
* `worldedit.navigation.jumpto.tool`（允许使用“折跃魔杖”）
* `worldedit.navigation.thru.tool`（允许使用“穿墙魔杖”）

## 区域权限

FAWE 默认限制在区域内，对那些需要给予普通玩家使用该插件权限的服务器很有帮助。若要启用区域限制，只需将配置文本中的 `region-restrictions` 设置为 true，并给予玩家对应的区域权限即可。若你想让管理员能通过 `//wea` 在任何地方使用 WorldEdit 的功能，只需给予 `fawe.admin` 权限。

### WorldGuard

安装 [WorldGuard](https://dev.bukkit.org/projects/worldguard) 的情况下使用的限制权限。

* `fawe.worldguard` - 允许 WorldGuard 区域的拥有者（通过命令 `/rg addowner ...` 添加）使用 WorldEdit 的功能。
* `fawe.worldguard.member` - 允许 WorldGuard 区域的成员（通过命令 `/rg addmember ...` 添加）使用 WorldEdit 的功能。
* `fawe.worldguardextraflags` - 若安装了 [WorldGuard 标志拓展](https://www.spigotmc.org/resources/4823)，则同样需要给予该权限。

### PlotSquared

安装 [PlotSquared](https://www.spigotmc.org/resources/77506) 的情况下使用的限制权限。

* `fawe.plotsquared` - 允许 PlotSquared 地皮的拥有者（通过 `/plot setowner` 添加）及受信任玩家（通过 `/plot trust ...` 添加）使用 WorldEdit 的功能。
* `fawe.plotsquared.member` - 允许 PlotSquared 地皮的成员（通过命令 `/plot add ...`）使用 WorldEdit 的功能。
* `fawe.plotsquared.admin` - 允许在任意 PlotSquared 地皮内使用 WorldEdit 的功能（道路内仍然不可使用）。

::: info

`fawe.plotsquared` 权限默认在 [plugin.yml](https://github.com/IntellectualSites/FastAsyncWorldEdit/blob/e40a657faf993536133b2e1bbe771a5c96619bd7/worldedit-bukkit/src/main/resources/plugin.yml#L14-L17) 中为激活状态！若要覆盖权限，建议调整优先级更高的该权限设置，而非 `fawe.plotsquared.trusted` 子权限的设置。

:::