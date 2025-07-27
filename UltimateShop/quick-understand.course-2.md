# ⚡ 第二课

之后，让我们着手编辑商店配置文件。以第一课中的商店配置为例，让我们继续改进它！

``` YAML
settings:
  menu: 'example-shop-menu'
  buy-more: true
  shop-name: '方块商店'
  hide-message: false

items:
  A:
    # ...
  B:
    # ...
  C:
    # ...
```

## 商品 A

这个示例拥有出售限制，表示玩家每天可以出售这个物品几次。

* 出售限制可以帮助服务器“平衡经济”，即使玩家有大量的腐肉，在这个示例菜单中，他还是只能出售一组。
* 在这个示例中，VIP 玩家有 50% 额外的出售上限，这可以帮助你的服务器拥有更多支持者。
* 在这个示例中，出售限制会在每天的“0：00：00”，即午夜十二点重置。
* 在这个示例中，我们设置的价格和商品模式有 `CLASSIC_` 前缀，这可以节省服务器性能开销。如果你不将 `prices` 部分的 `start_apply` 设置为其他值，你应该尽可能使用这个模式。

``` YAML
items:
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: rotten_flesh
        amount: 1
    buy-prices:
      1:
        economy-plugin: Vault
        amount: 10
        placeholder: '&6{amount} 枚硬币'
        start-apply: 0
    sell-prices:
      1:
        economy-plugin: Vault
        amount: 0.8
        placeholder: '&6{amount} 枚硬币'
        start-apply: 0
    sell-limits:
      global: 1280
      default: 64
      vip: 192
    sell-limits-conditions:
      vip:
        1:
          type: permission
          permission: 'group.vip'
    sell-limits-reset-mode: 'TIMED'
    sell-limits-reset-time: '00:00:00'  
```

## 商品 B

商品 A 只收购原版物品，试试看从第三方插件获取物品！另外，只用依赖 **Vault** 的经济插件实在是太没趣了！让我们试试不同的东西，比如原版的经验值！

* 若要了解如何设置 `hook-plugin` 和 `hook-item` 选项，请阅读“[物品格式](format.display-item-format.md)”章节。
* 若要了解如何设置 `economy-type` 和 `economy-plugin` 选项，请阅读“[经济格式](format.economyformat.md)”章节。

``` YAML
items:
  A:
    # ...
  B:
    products:
      1:
        hook-plugin: MMOItems # 插件名称
        hook-item: AXE;;EXECUTIONER_AXE # 物品 ID
        amount: 1
    price-mode: ANY
    product-mode: ALL
    buy-prices:
      1:
        economy-type: exp
        amount: 1
        start-apply: 0
        placeholder: '1 点经验值'
    sell-prices:
      1:
        economy-type: exp
        amount: 1
        start-apply: 0
        placeholder: '1 点经验值'
```

## 物品 C

有时，你可能会用到我们不支持的物品库插件，你可以通过创建命令商店解决这个问题！

``` YAML
items:
  A:
    # ...
  B:
    # ...
  C:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    display-item:
      name: '鸡刷怪笼'
      material: PLAYER_HEAD
      skull: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjQ3ZTJlNWQ1NWI2ZDA0OTQzNTE5YmVkMjU1N2M2MzI5ZTMzYjYwYjkwOWRlZTg5MjNjZDg4YjExNTIxMCJ9fX0=
      amount: 1
    buy-prices:
      1:
        economy-plugin: Vault
        amount: 350000
        placeholder: '{amount}⛂'
    buy-actions:
      1:
        type: console_command
        command: "ws give %player_name% spawner chicken 1"
```

* 你可以先输入 `/shop generateitemformat` 生成**物品格式**，然后将其填入 `display-item` 选项。因此，如果你没有设置任何物品，插件还是可以通过 `display-item` 选项在商店中展示物品。
* 这个物品没有设置 `sell-prices` 部分，因此它没有收购选项。
* 交易完成后，插件会执行 `buy-actions` 部分下的内容，即你设置的命令。有关动作的详细信息，请阅读“动作格式”章节。

## 季节性价格

``` YAML
items:
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: potato
        amount: 1
    buy-prices:
      1:
        economy-plugin: Vault
        amount: 2
        placeholder: '&6{amount} 枚硬币'
        conditions:
          1: 
            type: placeholder
            placeholder: '%rs_season%'
            rule: '=='
            value: 'Spring'
      2:
        economy-plugin: Vault
        amount: 1.8
        placeholder: '&6{amount} 枚硬币'
        conditions:
          1: 
            type: placeholder
            placeholder: '%rs_season%'
            rule: '=='
            value: 'Summber'
      3:
        economy-plugin: Vault
        amount: 3.2
        placeholder: '&6{amount} 枚硬币'
        conditions:
          1: 
            type: placeholder
            placeholder: '%rs_season%'
            rule: '=='
            value: 'Fall'
      4:
        economy-plugin: Vault
        amount: 8.8
        placeholder: '&6{amount} 枚硬币'
        conditions:
          1: 
            type: placeholder
            placeholder: '%rs_season%'
            rule: '=='
            value: 'Winter'     
```