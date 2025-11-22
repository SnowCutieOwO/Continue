# 🏆 示例：每日奖励

奖励与商店相似，但无需任何价格，且通常会显示在菜单中。

## 每日奖励的示例

在 `/shops/` 文件夹下创建新商店配置，然后创建一个像这样的物品：

``` YAML
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: DIAMOND
        amount: 16
      2:
        material: IRON_INGOT
        amount: 64
      3:
        economy-plugin: Vault
        amount: 1500
    buy-prices:
      1:
        economy-type: exp
        amount: 0
        placeholder: 'Free'
    buy-limits:
      default: '1'
    buy-times-reset-mode: 'TIMED'
    buy-times-reset-time: '00:00:00' 
```

在本示例中，玩家可以每日购买这个“物品”一次，因其免费，所以我们将其当做“奖励”。

若你想要 VIP 额外获得一组面包，那么就需要用到我们的条件功能，如下所示：

``` YAML
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: DIAMOND
        amount: 16
      2:
        material: IRON_INGOT
        amount: 64
      3:
        economy-plugin: Vault
        amount: 1500
      4:
        material: BREAD
        amount: 64
        conditions:
          1:
            type: permission
            permission: 'group.vip'
    buy-prices:
      1:
        economy-type: exp
        amount: 0
        placeholder: 'Free'
    buy-limits:
      default: '1'
    buy-times-reset-mode: 'TIMED'
    buy-times-reset-time: '00:00:00' 
```

如果你想要 VIP 有 **50%** 的几率获得一把额外的钻石剑，那么我们需要在 `config.yml` 下创建一个新的随机变量：

``` YAML
  random:
    chance:
      reset-mode: ONCE
      reset-time: '00:00:00'
      elements:
        - '1~100'
```

然后再次用到我们的条件功能：

``` YAML
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: DIAMOND
        amount: 16
      2:
        material: IRON_INGOT
        amount: 64
      3:
        economy-plugin: Vault
        amount: 1500
      4:
        material: BREAD
        amount: 64
        conditions:
          1:
            type: permission
            permission: 'group.vip'
      5:
        material: BREAD
        amount: 64
        conditions:
          1:
            type: permission
            permission: 'group.vip'
          2:
            type: placeholder: 
            placeholder: '{random_chance}'
            rule: '>'
            value: '50'
    buy-prices:
      1:
        economy-type: exp
        amount: 0
        placeholder: '免费'
    buy-limits:
      default: '1'
    buy-times-reset-mode: 'TIMED'
    buy-times-reset-time: '00:00:00' 
```