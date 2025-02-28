# 认领

WorldGuard 中存在着一套面向玩家的基础认领系统。通过命令 `/rg define` 可以创建区域，但玩家必须使用分别的权限才可使用指定的命令。WorldEdit 仍然需要安装，因为圈定选区少不了它，且在此之前需要为玩家分配好 `worldguard.selection` 权限。

玩家可以使用 `/rg claim` 命令认领指定的区域：
```
/rg claim 区域名称
```

输入命令的玩家即会自动成为该区域的拥有者。使用该命令的权限为 `worldguard.region.claim`。

## 规则

* **最大区域数量：**除非玩家拥有权限 `worldguard.region.unlimited`，否则玩家认领的区域就不能超过在配置文本中所设置的数量；
* **最大区域容量：**除非玩家拥有权限 ` worldguard.region.unlimited`，否则玩家认领区域的大小就不能超过配置文本中 `regions.max-claim-volume` 所设置的值；
* **覆盖保护：**已认领区域不可替换已有的同名区域；
* **重叠保护：**玩家所认领的区域不可与自己不拥有的区域重叠；
* **认领重叠：**如果配置文本中启用了 `regions.claim-only-inside-existing-regions` 项，那么该区域必须完全处于玩家所拥有的区域内。需要注意的是认领区域*不*需要完全和上述玩家所拥有的区域重叠（见[漏洞报告 #753](https://github.com/EngineHub/WorldGuard/issues/753)）

::: tip
目前为止，插件尚未支持非矩形选区。见[漏洞报告 #1537](https://github.com/EngineHub/WorldGuard/issues/1537)。
:::

## 其他命令

你可以让玩家通过分配正确的权限使用其他的命令（例如设置标签和添加成员）。
