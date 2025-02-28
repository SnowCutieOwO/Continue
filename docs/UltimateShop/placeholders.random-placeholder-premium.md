
# 🔀 随机变量 - 仅付费版

我们在付费版中加入了新的 `{random}` 内建变量。

## 配置

所有随机变量配置都存储在 `random_placeholder` 文件夹下。文件名称就是它的 ID，例如：`rotate.yml` 表示它的 ID 是 `rotate`。示例配置如下：

``` YAML
reset-mode: TIMED
reset-time: '00:00:00'
elements:
  - 'A'
  - 'B'
  - 'C'
```

- `reset-mode`/`reset-time`：见下。
- `element-amount`：选择元素的数量。**（在 3.1.0 被加入）**
- `elements`：可随机的元素列表。
    * **支持使用 `~` 符号选择随机数。例如，`5~100` 表示从 5 到 100 之间选择一个随机数。**

``` YAML
reset-mode: TIMED
reset-time: '00:00:00'
element-amount: 2
elements:
  - 'A'
  - 'B'
  - 'C'
```

## 使用变量

通过内置变量 `{random_<ID>;;<数字>}` 来显示其值，如 `{random_daily;;2}` 会查询 `daily` 随机变量选出的**第二个**随机元素。更多信息可浏览“[变量](placeholders.built-in-placeholder.md)”。有关此变量的用法，请浏览“[每日商店](shops.example-daily-shops.md)”章节。

## 重置变量

你可以通过 `reset-mode` 与 `reset-time` 选项重置变量。

支持如下重置模式：

* `ONCE`：每次被使用后都会重置且无法修改，玩家打开商店及参与交易时会被计算两次，因此无法实现价格同步。
* `TIMER`/`TIMED`/`NEVER`：浏览[此页](shops.products.md#交易次数重置选项)了解详情。我们会在随机变量被使用一次后生成重置时间。重置时间不会随配置更新而更新。若你设置了不正确的时间，你需要删除对应的数据。

更多信息请见[此页](shops.product-config-buy-sell-times-reset.md)。

## 示例：随机价格

### 创建新的随机变量

在这个实例中，我们在 `random_placeholder` 文件夹下创建了一个新的随机变量文件 `price.yml`。

``` YAML
reset-mode: TIMED
reset-time: '00:00:00'
elements:
# 生成 5 至 100 的随机数.
  - '5~100'
```

### 在物品配置中设置动态值

在物品的价格配置部分使用 `{random_price}` 变量。在本示例中，我将它添加至了如下配置：

``` YAML
items:
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: coal
        amount: 1
    buy-prices:
      1:
        economy-plugin: Vault
        amount: '{random_price}' # <--- 修改的内容
        placeholder: '&6{amount} 硬币'
        start-apply: 0
    buy-limits:
      global: 320
      default: 240
      vip: 320
    buy-limits-conditions:
      vip:
        - 'permission: group.vip'
    buy-limits-reset-mode: 'TIMED'
    buy-limits-reset-time: '00:00:00'
```