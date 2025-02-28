# 跨服

本章讲解了在多个服务器上使用连接至同一 MySQL 服务器的 CoinsEngine。

平衡分享与同步的方式取决于 `Column_Name` 与 `Synchronized` 货币的设置。

::: warning

同步经济的**所有**子服必须在 `config.yml` 中设置 `Sync_Interval` 为**不小于 1** 的值！

:::

## 场景 \#1

货币：`money.yml`

所有服务器上同步经济。

* 服务器 A：`Column_Name: money`、`Synchronized: true`、`Sync_Interval: 1`
* 服务器 B：`Column_Name: money`、`Synchronized: true`、`Sync_Interval: 1`
* 服务器 C：`Column_Name: money`、`Synchronized: true`、`Sync_Interval: 1`

## 场景 \#2

货币：`money.yml`

所有服务器上使用不同的经济。

* 服务器 A：`Column_Name: money_a`、`Synchronized: false`、`Sync_Interval: -1`
* 服务器 B：`Column_Name: money_b`、`Synchronized: false`、`Sync_Interval: -1`
* 服务器 C：`Column_Name: money_c`、`Synchronized: false`、`Sync_Interval: -1`

## 场景 \#3

货币：`gems.yml`

在服务器 B 和 C 上同步，在服务器 A 上使用独立货币。

* 服务器 A：`Column_Name: gems_a`、 `Synchronized: false`、`Sync_Interval: -1`
* 服务器 B：`Column_Name: gems_shared`、`Synchronized: true`、`Sync_Interval: 1`
* 服务器 C：`Column_Name: gems_shared`、`Synchronized: true`、`Sync_Interval: 1`