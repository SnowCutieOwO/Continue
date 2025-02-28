# 📚 普通示例

## 普通示例

本示例包含了出售限制，这表示玩家每天只能出售 X 次物品。

* 出售限制可以帮助你的服务器达到“经济平衡”，即便玩家有 10000 块腐肉，他也只能在本示例中出售 64 个。
* 在本示例中，VIP 玩家有额外 50% 的出售限制，这可以让你的服务器有跟多支持者。
* 在本示例中，出售箱子会在本地时间的“0：00：00”即午夜重置。
* 在本示例中，我们的定价与物品模式均带有 `CLASSIC_` 前缀，这可以节省服务器性能，若你没有在 `prices` 下设置 `start-apply` 部分，则你应当使用这个模式。

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
        placeholder: '&6{amount} 硬币'
        start-apply: 0
    sell-prices:
      1:
        economy-plugin: Vault
        amount: 0.8
        placeholder: '&6{amount} 硬币'
        start-apply: 0
    sell-limits:
      global: 1280
      default: 64
      vip: 192
    sell-limits-conditions:
      vip:
        - 'permission: group.vip'
    sell-limits-reset-mode: 'TIMED'
    sell-limits-reset-time: '00:00:00'  
```

## 经济兑换示例

在本示例中，我们做出了一些修改，使得其与上文普通物品示例有了一些区别：

* 我们添加了 `display-item` 部分，因为本示例中没有物品参与交易。
* 我们将定价与物品模式修改为了不带 `CLASSIC` 前缀的模式，因为我们将 `start-apply` 设置体改为了其他内容。

``` YAML
items:
  A:
    display-item:
      material: GOLDEN_BLOCK
    price-mode: ALL
    product-mode: ANY
    products:
      1:
        economy-plugin: PlayerPoints
        amount: 1
    buy-prices:
      1:
        economy-plugin: Vault
        amount: 10
        placeholder: '&6{amount} 硬币'
        apply: [1,2,3,4,5]
      1:
        economy-plugin: Vault
        amount: 20
        placeholder: '&6{amount} 硬币'
        start-apply: 6
    buy-limits:
      global: 1000
      default: 10
      vip: 20
    buy-limits-conditions:
      vip:
        - 'permission: group.vip'
    buy-limits-reset-mode: 'TIMED'
    buy-limits-reset-time: '00:00:00'
```

## MMOItems 示例

``` YAML
items:
  E:
    products:
      1:
        hook-plugin: MMOItems
        hook-item: AXE;;EXECUTIONER_AXE
        amount: 1
    price-mode: ANY
    product-mode: ALL
    buy-prices:
      1:
        economy-type: exp
        amount: 1
        start-apply: 0
        placeholder: '1 经验值'
    sell-prices:
      1:
        economy-type: exp
        amount: 1
        start-apply: 0
        placeholder: '1 经验值'
```

## 单条目配置中使用动作的示例（刷怪笼/命令商店）

``` YAML
items:
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    display-item:
      name: '鸡 刷怪笼'
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

## 示例：季节性价格

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
        placeholder: '&6{amount} 硬币'
        conditions:
          1: 
            type: placeholder
            placeholder: '%rs_season%'
            rule: '=='
            value: 'Spring'
      2:
        economy-plugin: Vault
        amount: 1.8
        placeholder: '&6{amount} 硬币'
        conditions:
          1: 
            type: placeholder
            placeholder: '%rs_season%'
            rule: '=='
            value: 'Summber'
      3:
        economy-plugin: Vault
        amount: 3.2
        placeholder: '&6{amount} 硬币'
        conditions:
          1: 
            type: placeholder
            placeholder: '%rs_season%'
            rule: '=='
            value: 'Fall'
      4:
        economy-plugin: Vault
        amount: 8.8
        placeholder: '&6{amount} 硬币'
        conditions:
          1: 
            type: placeholder
            placeholder: '%rs_season%'
            rule: '=='
            value: 'Winter'     
```