# 🖼️ 展示物品格式

你可以在菜单按钮以及商店物品的 `display-item` 部分使用展示物品格式。

## 单个

如果你要展示的物品只有一个，且无任何条件，只需在这部分配置中使用[物品格式](format.itemformat.md)即可！

``` YAML
  B:
    display-item:
      material: BREAD
      name: '&c超级面包'
```

## 多重

如果你想要为这个按钮或物品设置多个展示物品，并为其基于条件设置不同的显示内容，则只需按如下格式进行配置即可：

``` YAML
  1:
    display-item:
      default:
        material: GREEN_WOOL
        amount: 1
        name: '&e第 1 天'
        lore:
          - '&f今日奖励:'
          - '&7  - 10 Gems'
          - ''
          - '&#FFFACD点击领取!'
      claimed:
        material: RED_WOOL
        amount: 1
        name: '&e第 1 天'
        lore:
          - '&f包含奖励:'
          - '&7  - 10 Gems'
          - ''
          - '&#ff3300已领取过!'
    display-item-conditions:
      claimed: 
        1:
          type: placeholder
          placeholder: '%ultimateshop_streak_A_{buy-times-player}%'
          rule: '>'
          value: '0'
      default:
        1:
          type: placeholder
          placeholder: '%ultimateshop_streak_A_{buy-times-player}%'
          rule: '='
          value: '0'
```