# 🔖 示例：折扣

## 创建条件变量

通过条件变量的 `MAX` 或 `MIN` 模式可以轻松实现折扣功能。

在本示例中，我们创建了两个名为 `buy` 和 `sell` 的条件变量。

``` YAML
mode: MAX

value:
  default: 1
  vip: 1.5
  mvp: 2

conditions:
  vip:
    1:
      type: permission
      permission: 'group.vip'
  mvp:
    1:
      type: permission
      permission: 'group.mvp'
```

``` YAML
mode: MIN

value:
  default: 1
  vip: 0.5
  mvp: 0.3

conditions:
  vip:
    1:
      type: permission
      permission: 'group.vip'
  mvp:
    1:
      type: permission
      permission: 'group.mvp'
```

## 在物品配置中使用变量

``` YAML
items:
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: sea_lantern
        lore: 
          - '%player_health%'
    buy-prices:
      1:
        economy-plugin: Vault
        amount: '{conditional_buy} * 5' # <--- 修改好的内容
        start-apply: 0
        placeholder: '{amount} 硬币'
    sell-prices:
      1:
        economy-plugin: Vault
        amount: '{conditional_sell} * 5' # <--- 修改好的内容
        start-apply: 0
        placeholder: '{amount} 硬币'
```

* `5` 为基础价格，在此之前添加 `{conditional_buy}` 和 `{conditional_sell}` 变量。
* 若玩家达到了 `vip` 条件，则 `{condition_buy}` 会返回 `0.5`，即 $0.5 * 8 = 2.5$ 硬币！

## 自动应用折扣

* 自 2.3.2 版本起，你可以对所有价格自动应用条件变量！只需在 `config.yml` 中尽显配置即可。如下示例可以为所有物品添加折扣。

``` YAML
placeholder:
  auto-settings:
    add-conditional-in-all-price-amount:
      enabled: false
      buy-placeholder: buy
      sell-placeholder: sell
      black-dynamic-price: true
      black-shops:
        - 'example'
```

* 在使用动态定价时推荐禁用此功能，否则需要将这里的 `black-dynamic-price` 选项启用！
* 若你想要为指定商店禁用该选项，请使用 `black-shops` 选项。