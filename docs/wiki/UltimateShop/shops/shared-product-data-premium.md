# 🔗 共享商品数据 - 仅付费版

## 概述

`shared-use-times` 现在有两个作用：

* 它可以让多个商品共享同一份使用次数数据。共享的数据包括：
    * 玩家购买次数
    * 玩家出售次数
    * 玩家购买冷却/重置时间
    * 玩家出售冷却/重置时间
    * 全局购买次数
    * 全局出售次数
    * 持久化存储和跨服同步数据
* 它还会让共享组的使用次数配置从以下路径加载：

```yaml
plugins/UltimateShop/shared_use_times/<group>.yml
```

如果同一个打开的 GUI 中有多个商品使用了同一个共享组，那么点击其中一个商品时，会刷新该 GUI 中所有使用相同共享 use-times 缓存的商品按钮。

## 基本用法

给所有需要共享同一组数据的商品设置相同的 `shared-use-times` 值：

```yml
items:
  diamond_pack_a:
    shared-use-times: daily_bundle
    buy-prices:
    # 购买价格设置
    sell-prices:
    # 出售价格设置

  diamond_pack_b:
    shared-use-times: daily_bundle
    buy-prices:
    # 购买价格设置
    sell-prices:
    # 出售价格设置
```

同一个共享组中的商品，也会共享以下选项的值：

**购买次数**

* `buy-times-reset-mode`
* `buy-times-reset-time`
* `buy-times-reset-time-format`
* `buy-times-reset-value`
* `buy-times-max-value`

旧版别名仍然支持：

* `buy-limits-reset-mode`
* `buy-limits-reset-time`

**出售次数**

* `sell-times-reset-mode`
* `sell-times-reset-time`
* `sell-times-reset-time-format`
* `sell-times-reset-value`
* `sell-times-max-value`

你也可以使用同一个共享组来共享以下选项的值：

* `buy-limits`
* `sell-limits`

你需要把共享组的配置放到 `shared_use_times/<group>.yml` 中，并在商品配置里只保留 `shared-use-times`。

下面是一个放在 `shared_use_times` 文件夹中的共享 use-times 配置文件示例：

```yaml
buy-limits:
  global: '{sell-times-server}'
buy-times-reset-mode: COOLDOWN_TIMED
buy-times-reset-time: 00:00:00
```