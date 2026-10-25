# ⚔️ MMOItems

本章解释了如何让 MMOItems 与 MMOInventory 联动。

## 配置 MMOInventory

默认的自定义界面包含原版盔甲与副手栏，以及戒指、护符、项链、手套及制品栏。这些饰品槽的默认配置只接受特定类型的 MMOItems 物品。

例如，如下配置片段允许左戒指与右戒指栏只接受 `RING` 类型的 MMOItems 物品。

``` YAML
# 戒指栏
RIGHT_RING:
    type: accessory
    material: DIAMOND_HOE
    durability: 7
    name: '&6右戒指栏'
    slot: 25
    restrictions:
    - 'mmoitemstype{type=RING}'
    lore:
    - 将物品拖放其上装备至此。
LEFT_RING:
    type: accessory
    material: DIAMOND_HOE
    durability: 8
    name: '&6左戒指栏'
    slot: 34
    restrictions:
    - 'mmoitemstype{type=RING}'
    lore:
    - 将物品拖放其上装备至此。
```

## 配置 MMOItems

上一部分的配置只是在 MMOInventory 里注册了自定义槽位。为了让这些代码生效，你还需要在 MMOItems 的注册表里注册对应的物品类型。MMOItems 已经包含了这些饰品类型，因此你不需要从零写起。

::: warning

所有 MMOInventory 里对应自定义饰品栏的 MMOItems（戒指、项链、护符等）的父类型都必须设为 `ACCESSORY`。这可以让 MMOItems 正确注册放入自定义界面中的物品属性。

:::

例如，如下配置片段将“左戒指栏”与“右戒指栏”放入的物品限制为上述配置过的 `RING` 类型。

``` YAML
RING:
    display: EMERALD
    name: '制品'
    parent: 'ACCESSORY' # 父类型设置为 ACCESSORY
    unident-item:
        name: '&f#prefix#未鉴定的戒指'
        lore:
        - '&7这物品还没有被鉴定过。'
        - '&7我得想办法发现它的潜能！'
        - '{tier}'
        - '{tier}&8物品信息：'
        - '{range}&8- &7等级范围：&e#range#'
        - '{tier}&8- &7装备品质：#prefix##tier#'
```

## 注意

[^1]

[^1]: 原文此处为空。