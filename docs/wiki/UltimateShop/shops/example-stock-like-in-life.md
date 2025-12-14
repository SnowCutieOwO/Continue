# 🌱 示例：真实库存

::: info

这里讲述的是贴近现实生活的库存机制。对于购买/出售次数限制的功能，请浏览“[商品](products.md)”章节。

:::

## 在物品配置中设置动态值

插件本身不会存储界面数据，但我们可以通过购买限制巧妙实现。请在开始阅读本章之前先了解“[动态定价](../dynamic-prices/dynamic-price.md)”章节。与动态定价相似，如果你想要制作库存机制，请编辑 `buy-limits` 选项，并在其中加入 `{server-times-server}` 变量，如下所示：

- 在该示例中，全服将会通用一个库存，只要另一个玩家出售了这个商品，其他玩家才能购买这个商品。保证服务器商店的货品来源不是无中生有。

``` YAML
  A:
    price-mode: ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: echo_shard
        amount: 1
    buy-prices:
      1:
        economy-plugin: EcoBits
        economy-type: quest_points
        amount: 5
        placeholder: '&b{amount} 任务点数'
        start-apply: 0
    sell-prices:
      1:
        economy-plugin: EcoBits
        economy-type: quest_points
        amount: 5
        placeholder: '&b{amount} 任务点数'
        start-apply: 0
    buy-limits:
      global: '{sell-times-server}' 
    buy-times-reset-mode: 'NEVER'
    buy-times-reset-time: '00:00:00' 
    buy-times-max-value: 640 # 最大库存量
```

我们需要修改：
- `price-mode` 项设置为 `ANY` 或 `ALL`；
- `buy-limits` 项设置为 `{sell-times-server}`。对于出售限制，你需要在此填入 `{buy-times-server}`。若替换为 `{buy-times-player}` 与 `{sell-times-player}` 则表示余量对玩家分别计算。
- `buy-limits-reset-mode` 项设置为 `'NEVER'`。
- 你可以通过 `buy-times-max-value` 选项设置最大库存量。

## 常见问题：补货

问出这个问题的人显然不了解插件究竟在干什么。你的库存是通过增加限购实现的。如果需要补货，只需要重置玩家的购买次数。这部分内容会在[这里](product-config-buy-sell-times-reset.md)详细讲述。