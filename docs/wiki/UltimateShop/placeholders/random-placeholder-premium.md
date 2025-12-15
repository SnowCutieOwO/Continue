
# 🔀 随机变量 - 仅付费版

我们在付费版中加入了新的 `{random}` 内建变量。

## 配置

所有随机变量配置都存储在 `random_placeholders` 文件夹下。文件名称就是它的 ID，例如：`rotate.yml` 表示它的 ID 是 `rotate`。示例配置如下：

``` YAML
reset-mode: TIMED
reset-time: '00:00:00'
per-player-element: true
element-sort: true
element-amount: 5
elements:
  A:
    rate: 1
    conditions:
      1:
        type: permission
        permission: 'test.permission'
  B:
    rate: 5
  C:
    rate: 2
  D:
    rate: 5
  E:
    rate: 2
  F:
    rate: 15
  G:
    rate: 7
```

- `per-player-elemennt`：设置为 `false` 时，所有玩家使用同一个随机出的结果。例如，玩家 1 和 2 都会得到 **A**，不论玩家数量，他们只会得到这一个值。设置为 `true` 时，每个玩家获取的随机值都是不一样的。如果玩家没有满足返回元素的条件，那么玩家就无法使用它。

::: info

<font color="red">**不推荐**</font>在启用对应变量之后再次修改这个设置的值，这可能会导致插件检测出错误（如玩家随机变量数据溢出到全局数据库），且无法屏蔽。

每个玩家的随机变量无法应用到全服，反之亦然。不启用分玩家返回的随机变量也不能分配到单独的玩家身上。例如，使用 `/resetrandomplaceholder` 命令时，分玩家的随机变量必须在命令中输入玩家的名称，否则会导致插件报错。

:::

- `element-sort`：若设置为 `false`，随机变量的结果会乱序输出。例如，若 `elements` 中包含 `A, B, C, D, E`，随机生成的结果为 `B, D`，那么随机变量的实际顺序可能是 `B, D` 或 `D, B`。如果设置为 `true`，随机结果将会自动排序，即只能返回 `B, D`。**（3.12.2 新增）**
- `reset-mode`/`reset-time`：见下。
- `element-amount`：在此变量中选择元素的数量。**（3.1.0 新增）**
- `elements`：可随机的元素列表。
    * **支持使用 `~` 符号选择随机数。例如，`5~100` 表示从 5 到 100 之间选择一个随机数。**

``` YAML
elements:
  - 'A'
  - 'B'
  - 'C'
```

```yaml
elements:
# 从 5 到 100 的随机整数。
  - '5~100'
```

第二种配置用到了子区的形式，每个元素都可以设置 `rate` 与 `conditions`。`conditions` 是可选设置，且只在 `per-player-element` 为 `true` 时有效。**（3.12.0 新增）**

## 使用变量

通过内置变量 `{random_<ID>;;<数字>}` 来显示其值，如 `{random_daily;;2}` 会查询 `daily` 随机变量选出的**第二个**随机元素。更多信息可浏览“[变量](../placeholders/built-in-placeholder.md)”。有关此变量的用法，请浏览“[每日商店](../shops/example-daily-shop-rotating-shop.md)”章节。

## 重置变量

你可以通过 `reset-mode` 与 `reset-time` 选项重置变量。

支持如下重置模式：

* `ONCE`：每次被使用后都会重置且无法修改，玩家打开商店及参与交易时会被计算两次，因此无法实现价格同步。
* `TIMER`/`TIMED`/`NEVER`：浏览[此页](../shops/products.md#交易次数重置选项)了解详情。我们会在随机变量被使用一次后生成重置时间。重置时间不会随配置更新而更新。若你设置了不正确的时间，你需要删除对应的数据。

更多信息请见[此页](../shops/product-config-buy-sell-times-reset.md)。

## 示例：随机价格

### 创建新的随机变量

在这个实例中，我们在 `random_placeholder` 文件夹下创建了一个新的随机变量文件 `price.yml`。

``` YAML
reset-mode: TIMED
reset-time: '00:00:00'
element-sort: true
element-amount: 50 
elements:
# 生成 5 至 100 的随机数.
  - '5~100'
  - '4~40'
  - '53~530'
  - '32~140'
  - '55~140'
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
        amount: '{random_price;;1}' # <--- 修改的内容
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