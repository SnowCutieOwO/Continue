# 🔄 动态定价

## 启用数学功能

修改 `config.yml`：

* 将：

``` YAML
math:
  # 是否启用基本数学运算检测?
  # 仅对 + - * / 四种运算符进行识别.
  enabld: false
```

修改为

``` YAML
math:
  # 是否启用基本数学运算检测?
  # 仅对 + - * / 四种运算符进行识别.
  enabled: true
```

即可。

* 将：

``` YAML
placeholder:
  data:
    can-used-in-amount: false
```

修改为

``` YAML
placeholder:
  data:
    can-used-in-amount: true
```

即可。

## 在物品配置中设置动态值

打开你的商店配置，找到你需要启用动态定价的商品。

例如，我想为该商品启用：

``` YAML
  A:
    display-name: '自定义名称!'
    price-mode: ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: sea_lantern
    buy-prices:
      1:
        economy-type: exp
        amount: '5+({buy-times-server}-{sell-times-server})*0.2'
        max-amount: 15
        min-amount: 1
        start-apply: 0
        placeholder: '{amount} 经验值'
    sell-prices:
      1:
        economy-type: exp
        amount: '5+({buy-times-server}-{sell-times-server})*0.2'
        max-amount: 15
        min-amount: 1
        start-apply: 0
        placeholder: '{amount} 经验值'
```

首先，你需要将 `price-mode` 设置为 `ALL` 或 `ANY`。

我在这里写的部分数量设置是数学表达式，如果你数学不好的话就让我给你解释：

- 5 为价格基数，即起始价格；
- 0.2 表示玩家每次交易后的加价，价格会随之变动。
- 我们也添加了诸如 `max-amount` 和 `min-amount` 选项，以防止价格变动幅度过大的情况出现。

这里设置的公式不作限制，但你需要谨慎设置，否则玩家有可能会出现借此刷取货币的情况。因此，`max-amount` 和 `min-amount` 是非常重要的。例如，你可以设置：

* 买价公式：`2.8+{buy-times-server}*0.1-{sell-times-server}*0.06`
* 卖价公式：`2.38+{buy-times-server}*0.1-{sell-times-server}*0.06`

因此，你的 `max-amount` 选项应当小于第 <font color="red">**n**</font> 次交易的价格。

那么，如何获得这个数字？很简单，它必须满足：

$\frac { 购买基础价 - 出售基础价 }  { 购买最高价 - 出售最低价 } \ge \sum_{i=1}^{n}i$ （即 $1+2+3+4+...+n$）

<!-- `(购买基础价 - 出售基础价) / (购买最高价 - 出售最低价) >= 1+2+...+n` -->

<!-- (2.8-2.38)/(0.1-0.06) >= 1+2+3+4 -->

在这个实例中，即：$\frac {2.8-2.38} {0.1-0.06} \ge \sum_{i=1}^{n}$，解得 $n=4$，即本示例中的 $\textcolor{red}{n}$ 为 4。

需要注意的是：<font color="red">不同的计算公式需要设置不同的 `max-amount` 和 `min-amount`。最安全的方法就是将交易价格修改为相同值。</font>

![](_images/image5.png)

另一个普通的动态定价公式即为基于百分比修改价格，如：`100 * (1.5 ^ ({buy-times-server}-{sell-times-server}))`。在本示例中：

* **100** 为基础价格。
* **1.5** 为交易后价格倍率。
* 在本示例中，第一次只买不卖为 **100**，之后是 **150（+50%）**，之后是 **225（150+150*50%）**。
* 不要忘了设置 `min-amount` 为接近 **100** 的数，以防止价格过低！

## 可用变量

你可以在 `buy-prices`、`sell-prices` 的 `amount` 部分，以及 `buy-limits`、`sell-limits` 的 `value` 部分设置变量（包括 PlaceholderAPI 变量）和[数学计算格式](../format/math-calculate-format.md)。

可用的内建变量如下。更多信息请浏览“[内建变量](../placeholders/built-in-placeholder.md)”章节。

* `{buy-times-player}`
* `{buy-times-server}`
* `{buy-total-player}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>
* `{buy-total-server}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>

::: info **times** 变量与 **total** 变量之间的区别：

* **times** 变量会在每次重置后变为你设定的值。
* **total** 变量会在重置后保持不变，且会与先前的值叠加。通过命令或其他方式设置的购买/出售次数仍然会影响到总数变量。这个变量会在到达 int 极限值时自动重置。

:::

* `{sell-times-player}`
* `{sell-times-server}`
* `{sell-total-player}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>
* `{sell-total-server}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>
* `{last-buy-player}` <font color="red">**- 仅付费版**</font>
* `{last-buy-server}` <font color="red">**- 仅付费版**</font>
* `{last-sell-player}` <font color="red">**- 仅付费版**</font>
* `{last-sell-server}` <font color="red">**- 仅付费版**</font>
* `{last-buy-reset-player}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>
* `{last-buy-reset-server}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>
* `{last-sell-reset-player}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>
* `{last-sell-reset-server}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>

另外在 `buy-prices` 与 `sell-prices` 部分下，你还可以设置两个新的选项：

* `max-amount`：最高价格。用于动态定价。**可选。**
* `min-amount`：最低价格。用于动态定价。**可选。**

需要注意的是，如果你需要使用 PlaceholderAPI 拓展的变量，则你需要使用新格式。如下所示：

``` YAML
    buy-prices:
      1:
        economy-plugin: Vault
        amount: '15 - {sell-times-player} * 0.1 + %ultimateshop_farming_B_sell-times-player% * 0.1'
        # 我们使用不带花括号“{}”的新格式.
        placeholder: '{amount}$'
        start-apply: 0
```

另外，如果你的物品位于打开的菜单中，你还需要将 `menu.shop.click-update` 选项设置为 `true`。否则出售物品 B 之后不会自动更新价格。

## 单玩家动态定价

只要你可以确保在公式中使用的变量随玩家变化而变化，计算的价格自然也会如此。在上文的示例中，我们使用了诸如 `{buy-times-server}`，你只需要将 `server` 替换为 `player` 即可显示玩家自己的购买价格。相关内容也在“[变量](../placeholders/built-in-placeholder.md)”中有所解释。

## 为物品设置交易限制

见“[物品](../shops/products.md)”章节获取信息及示例。

## 重置动态定价

许多人都问了这个问题，问这些问题的人肯定没有了解 UltimateShop 的基础。动态定价是由公式决定的，所以你不能直接重置定价。若要这么做，你需要先重置你在公式中使用的变量。如果你使用了诸如上文提到的 `{buy-times-server}`，那么它们就可以被重置。

你可以通过“自动重置”功能重置交易次数，可以在“[交易次数重置](../shops/product-config-buy-sell-times-reset.md)”章节中了解更多。