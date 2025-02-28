# 📂 商店

示例商店文件在此：

``` YAML
settings:
  menu: 'example-shop-menu'
  buy-more: true
  shop-name: '食物商店'
  hide-message: false

general-configs:
  # 这表示所有物品都会使用这些价格与物品模式.
  # 除非自行指定.
  price-mode: CLASSIC_ANY
  product-mode: CLASSIC_ANY
  # 支持所有物品选项, 如价格, 物品, 限制等!
  fail-actions:
    1:
      type: sound
      sound: block.note_block.bass

items:
  A:
    display-name: "苹果"
    price-mode: ANY
    product-mode: ALL
    products:
      1:
        material: APPLE
        amount: 1
      2: 
        material: BREAD
        amount: 5
        conditions:
          1:
            type: permission: 
            permission: 'group.vip'
        give-actions:
          1:
            type: message
            message: '看起来你似乎是 VIP 玩家, 所以我们额外附赠你 5 块面包!'
    buy-prices:
      1:
        economy-plugin: Vault
        amount: 200
        placeholder: '{amount} 硬币'
        start-apply: 0
      2:
        economy-plugin: PlayerPoints
        amount: 10
        placeholder: '{amount} 点券'
        start-apply: 5
    sell-prices:
      1:
        economy-plugin: Vault
        amount: 50
        placeholder: '{amount} 硬币'
      2:
        economy-plugin: PlayerPoints
        amount: 1
        start-apply: 5
        placeholder: '{amount} 点券'
        give-actions:
          1: 
            type: message: 
            message: '看起来你已经卖出 5 个苹果了!'
    buy-actions:
      1:
        type: player_command
        command: 'say %player_name% 买了一个苹果!'
      2:
        type: announcement
        message: '&7%player_name% 买了一个苹果!'
  B:
    display-item:
      material: BREAD
      name: '&c超级面包'
    display-name: "面包"
    add-lore:
      - '@a&e买价: {buy-price}'
      - '@b&e卖价: {sell-price}'
    bedrock:
      hide: false
      icon: 'url;;https://raw.githubusercontent.com/Jens-Co/MinecraftItemImages/main/1.20/bread.png'
    buy-more: true
    buy-more-menu:
      menu: buy-more-2
      max-amount: 16
    price-mode: ANY
    product-mode: ALL
    products:
      1:
        material: BREAD
        amount: 1
    buy-prices:
      1:
        economy-plugin: Vault
        amount: 200
        placeholder: '{amount} 硬币'
        start-apply: 0
      2:
        economy-plugin: PlayerPoints
        amount: 10
        placeholder: '{amount} 点券'
        start-apply: 5
    sell-prices:
      1:
        economy-plugin: Vault
        amount: 50
        placeholder: '{amount} 硬币'
      2:
        economy-plugin: PlayerPoints
        amount: 1
        start-apply: 5
        placeholder: '{amount} 点券'
    buy-limits:
      global: 100
      default: 10
      test-condition: 20
    buy-limits-conditions:
      test-condition:
        1:
          type: permission
          permission: 'test.permission'
    buy-times-reset-mode: 'TIMED'
    buy-times-reset-time: '00:00:00'
  C:
    display-item: 
      material: DIAMOND
    as-sub-button: A
buttons:
  a:
    display-item:
      material: arrow
      name: '&c上一页'
      lore:
        - '&7点击浏览上一页!'
    actions:
      - 'shop_menu: crops'
```  

## 设置

- `menu`：商店的菜单名称，也就是菜单的文件名称。
- `buy-more`：该商店中的商品是否能打开增量购买菜单。
- `shop-name`：商店的显示名称，会被内置变量 `{shop-name}` 使用。
- `hide-message`：是否隐藏玩家在商店中进行交易后显示的消息。

## 全局配置

在这里设置的内容会对所有物品生效。对于 `buy-action`、`sell-actions` 和 `fail-actions`，我们会自动将其与物品配置中的内容合并。 

## 物品

物品即为商店中的商品，商品可以不是物品，也可以是虚拟物品，例如 100 点其他经济插件的货币。

更多内容详见“物品”章节。

## 按钮

商店中同样可以插入与菜单功能相同的按钮，详见“[菜单]”章节获取更多信息。