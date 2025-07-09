# 🌱 示例：真实库存

## 在物品配置中设置动态值

请在开始阅读本章之前先了解“动态定价”章节。与动态定价相似，如果你想要制作库存机制，请编辑 `buy-limits` 选项，如下所示：

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
    buy-limits-reset-mode: 'NEVER'
    buy-limits-reset-time: '00:00:00' 
```

我们需要修改：
- `price-mode` 项设置为 `ANY` 或 `ALL`；
- `buy-limits` 项设置为 `{sell-times-server}`。对于出售限制，你需要在此填入 `{buy-times-server}`。若替换为 `{buy-times-player}` 与 `{sell-times-player}` 则表示余量对玩家分别计算。
- `buy-limits-reset-mode` 项设置为 `'NEVER'`。