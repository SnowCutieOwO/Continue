# 货币兑换

CoinsEngine 内置的交换系统允许玩家在不同类型的货币之间转换。

## 安装

在本教程中，我们设置了 `gems.yml` 和 `coins.yml` 之间的兑换，并规定 1 宝石 = 5 硬币。

在 `gems.yml` 货币配置下添加 `coins` 的汇率：

``` YAML
Exchange:
  Allowed: true # 必须启用.
  Rates:
    coins: 5.0
```

这会允许 `gems` 货币与 `coins` 货币的转换，汇率为 1 宝石 = 5 硬币。

在 `coins.yml` 货币配置下添加 `gems` 的汇率：

``` YAML
Exchange:
  Allowed: true # 必须启用.
  Rates:
    gems: 0.2
```

这会允许 `gems` 货币与 `coins` 货币的转换，汇率为 1 硬币 = 0.2 宝石，因此你需要至少 5 硬币才可将其兑换为 1 宝石。

::: info 

若货币的 `Demical` 设置为 `false`，则玩家只能交换整数数量的货币。