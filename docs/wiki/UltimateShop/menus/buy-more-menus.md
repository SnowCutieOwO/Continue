# 🔽 增量购买菜单

## 配置文件

增量购买菜单相较于普通菜单，多出了一些选项。

``` YAML
amount-items:
  1:
    display-item:
      material: GREEN_WOOL
      name: '&a+1'
      lore:
        - '&7点击增加 1 个.'
    add-amount: 1
  2:
    display-item:
      material: GREEN_WOOL
      name: '&a+10'
      lore:
        - '&7点击增加 10 个.'
    add-amount: 10
  3:
    display-item:
      material: GREEN_WOOL
      name: '&a+32'
      lore:
        - '&7点击增加 32 个.'
    add-amount: 32
  4:
    display-item:
      material: RED_WOOL
      name: '&c-1'
      lore:
        - '&7点击减少 1 个.'
    add-amount: -1
  5:
    display-item:
      material: RED_WOOL
      name: '&c-10'
      lore:
        - '&7点击减少 10 个.'
    add-amount: -10
  6:
    display-item:
      material: RED_WOOL
      name: '&c-32'
      lore:
        - '&7点击减少 32 个.'
    add-amount: -32

display-item: B

confirm-items:
  C:
    display-item:
      material: PAPER
      name: '&a确认'
      lore:
        - '&7点此确认交易!'
      modify-lore: true
  D:
    display-item:
      material: PAPER
      name: '&a&l点击购买'
      lore:
        - '&a点击确认并购买'
        - '&a你填入数量的物品.'
    # 你可以移除 click-action 选项, 这样确认按钮就可以完成所有事情, 包括购买、出售及全部出售。
    # 若该选项存在, 那么确认按钮只可以进行一个操作.
    click-action: buy
  E:
    display-item:
      material: PAPER
      name: '&c&l点击出售'
      lore:
        - '&a点击确认并出售'
        - '&a你填入数量的物品.'
    click-action: sell
```

* `amount-items`：数量选择的物品配置。`add-amount` 可以替换为 `set-amount` 选项。
* `display-item`：需为单字符。在 `layout` 中填入该字符来调整其在菜单中的显示位置。
* `confirm-items`：确认购买或出售的物品配置。
* `confirm-items.??.click-action`：使得按钮只能完成指定操作，如购买或出售。


* `confirm-items.??.modify-lore`：是否尝试修改展示物品的描述，为其添加价格与出售限制等内容。你可以在 `config.yml` 文件中设置。**可选（默认为 true）**。

## 设置增量购买菜单

设置增量购买菜单有两种方式。默认情况下，所有物品都使用你在 `config.yml` 中设置的增量购买菜单。默认情况下有三种类型的增量购买菜单。

* 若该物品同时拥有买价和卖价，则我们会使用你在这里设置的 `default`。
* 若该物品没有卖价，则我们会使用你在这里设置的 `only-buy`。
* 若该物品没有买价，则我们会使用你在这里设置的 `only-sell`。

``` YAML
  buy-more-menu:
    not-open-when-invalid: true
    default:
      menu: buy-more
      max-amount: 64
    only-buy:
      menu: buy-more-buy
      max-amount: 64
    only-sell:
      menu: buy-more-sell
      max-amount: 64
```

你也可以在每个物品配置中设置单独的 `buy-more-menu`。在“商店”章节中，我们会详细讲述它的步骤。

若你想要为指定物品或商店设置禁用增量购买菜单，只需使用商店配置或物品配置中的 `buy-more` 选项。“商店”章节中也有提及。

其他选项：

* `not-open-when-invalid`：如果增量购买菜单中只有用于购买的按钮，且物品本身无法购买（即不显示买价），则这个增量购买菜单无效，不能打开。增量出售菜单亦是如此。（3.12.1 新增）

## 常见问题：我们能将增量购买与出售菜单分离吗？

A：此功能于 3.12.1 引入，仅付费版可用，示例请见[此处](../features/custom-click-event-premium.md#example-only-buy-more-menu)。