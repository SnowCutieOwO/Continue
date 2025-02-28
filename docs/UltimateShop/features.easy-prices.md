# 💴 简单定价

你可以在 `config.yml` 中的  `prices` 部分创建新的简单定价！

例如：

``` YAML
prices:
  example:
    economy-plugin: Vault
    placeholder: '200 金币'
  mmoitems-example:
    hook-plugin: MMOItems
    hook-item: AXE;;TEST_AXE
    amount: 1
    placeholder: '1 神秘斧'
```

这设置了两个简单定价，一个是 `example`，而另一个则是 `mmoitems-example`。你可以在商店物品的 `buy-prices` 和 `sell-prices` 下与类型选项一同使用。如：

``` YAML
products:
  A:
    give-item: true
    price-mode: ALL
    product-mode: ALL
    products:
      1:
        material: APPLE
        amount: 1
    buy-prices:
      1:
        custom-type: example # <--- 新选项!
        amount: 20
        start-apply: 0
      2:
        custom-type: mmoitems-example # <--- 新选项!
        placeholder: '{amount} 斧头'
        start-apply: 0
```