# BossShopPro - 商店
允许在每种箱子界面或商店中创建本插件的物品

该功能由 [yzl210](https://github.com/yzl210) 为你呈现，快说谢谢作者！

Spigot 插件链接：https://www.spigotmc.org/resources/bossshoppro-the-most-powerful-chest-gui-shop-menu-plugin.222/

## 菜单物品

### 用法

```YAML
OraxenTest:
    MenuItem:
      oraxen: <oraxen 物品名称>
      amount: <物品数量(可选, 默认为 1)>
```
### 示例
```YAML
OraxenTest:
    MenuItem:
      oraxen: oraxen_icon_test
```

## 奖励

### 用法（与 ITEM 格式相似）

```YAML
OraxenTest:
    RewardType: ORAXEN(也可使用 ORAXEN-ITEM 与 ITEM-ORAXEN)
    Reward:
    - - type: <Oraxen 物品名称>
      - amount: <item amount(可选, 默认为 1)>
```

你可以按需要添加尽可能多的物品，只需在物品的开头加上 `- -` 即可。

### 示例

```YAML
OraxenTest:
    RewardType: ORAXEN
    Reward:
    - - type: oraxen_item_1
      - amount: 5
    - - type: oraxen_item_2
      - amount: 10
```

## 价格

### 用法（与 ITEM 格式相似）

```YAML
OraxenTest:
    PriceType: ORAXEN(也可使用 ORAXEN-ITEM 与 ITEM-ORAXEN)
    Price:
    - - type: <Oraxen 物品名称>
      - amount: <item amount(可选, 默认为 1)>
```
你可以按需要添加尽可能多的物品，只需在物品的开头加上 `- -` 即可。

### 示例

```YAML
OraxenTest:
    PriceType: ORAXEN
    Price:
    - - type: oraxen_item_1
      - amount: 5
    - - type: oraxen_item_2
      - amount: 10
```