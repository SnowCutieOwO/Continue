# 物品组件格式

::: info

该功能仅对 **1.21.5+** 的 **Paper** 系服务端有效。

:::

## 自定义名称

``` YAML
component:
  name: '<blue>村好剑'
```

## 物品名称

``` YAML
component:
  item-name: '<yellow>普通剑'
```

## 物品描述

``` YAML
component:
  lore:
    - '<gray>这真是太好了!'
```

## 自定义模型数据（Custom Model Data）

``` YAML
component:
  custom-model-data:
    float: # 自定义模型数据类型
      - '1'
    flag:
      - 'true'
    string:
      - '让我试试!'
    color:
      - '255, 255, 0'
```

## 最大堆叠数

``` YAML
component:
  max-stack: 5
```

## 食物相关

``` YAML
component:
  food:
    can-always-eat: true
    nutrition: 5
    saturation: 5
```

## 工具相关

``` YAML
component:
  tool:
    damage-per-block: 5
    mining-speed: 1.3
    destroy-blocks-in-creative: true
    rules:
      # 方块名称, 挖掘速度, 是否掉落
      - 'stone, 1.4, true'
```

## 唱片机

``` YAML
component:
  song: otherside
```

## 发光

``` YAML
component:
  glow: true
```

## 无法破坏

``` YAML
component:
  unbreakable: true
```

## 稀有度

``` YAML
component:
  rarity: COMMON
```

## 隐藏工具提示框

``` YAML
component:
  hide-tooltip:
    - 'lore' # 数据类型. 完整列表请见: https://jd.papermc.io/paper/1.21.5/io/papermc/paper/datacomponent/DataComponentTypes.html
```

## 附魔/存有附魔

``` YAML
component:
  enchants:
    mending: 1 # 附魔 ID: 附魔等级
  stored-enchants: # 仅附魔书
    mending: 1
```

## 属性

``` YAML
component:
  attributes:
    max_health: # 属性 ID
      name: 'UltiamteShop'
      amount: 5
      operation: ADD_NUMBER
      slot: ANY
```


## 伤害/最大伤害

``` YAML
component:
  damage: 5
  max-damage: 15
```

## 杂项

``` YAML
component:
  banner-patterns:
    BASE: WHITE # 样式 ID: 样式颜色
  potion:
    base-effect: 'WATER'
    effects:
      - 'SPEED, 100, 1, true, true, false' # 药水类型 ID, 持续时间, 药水倍率, 环境音效, 是否显示粒子, 图标
    color: '255, 255, 0'
    name: 'GOOD'
  potion-duration-scale: 3
  trim:
    material: IRON
    pattern: TIDE
  leather-color: '255, 255, 0'
  firework:
    1: 
      flicker: true
      trial: true
      colors:
        base:
          - 255, 255, 0
        fade:
          - 0, 0, 0
      type: BALL
      duration: 155
  break-sound: 'namespace:name'
  suspicious-stew-effects:
    - 'SPEED, 100, 1, true, true, false'
  charged-projectiles:
    material: arrow # 物品格式
  axolotl-variant: LUCY
  tropical-fish-base-color: WHITE
  tropical-fish-pattern-color: WHITE
  tropical-fish-pattern: KOB
  bundle-contents:
    1: 
      material: STONE # 物品格式
    2:
      material: APPLE
      amount: 5
  ominous-bottle-amplifier: 3
  music: PONDER_GOAT_HORN
  repair-cost: 15
  enchantable: 15
  glider: true
  item-model: 'mycustom:itemmodel'
  tootip-style: 'mycustom:tooltip'
  use-cooldown:
  cooldown-group: 'minecraft:custom_weapon'
  cooldown-seconds: 1.5
  damage-resistant: is_fall
  equippable:
    slot: head
  blocks-attacks:
    block-delay-seconds: 3
    disable-cooldown-scale: 1.2
    block-sound: 'mycustom:sound'
    bypassed-by: 'arrow'
  use-reminder:
    material: arrow # 物品格式
  consumable:
    consume-seconds: 1
    animation: DRINK
    sound: 'mycustom:sound'
    effects:
      random-teleport: 2
      clear-effect: true
      apply-effect:
        probability: 6
        effects:
          - 'SPEED, 100, 1, true, true, false' # 药水类型 ID, 持续时间, 药水倍率, 环境音效, 是否显示粒子, 图标
      play-sound: 'mycustom:sound'
  weapon:
    damage-per-attack: 5
    disable-blocking-seconds: 3
  skull: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvN2YzZmVkMTZmZDU1MTkwOWZhNWUyOWNkZDY5N2VlMzQ2ZTYzMzkwYjM4M2E0MzAwYTY2MmE4MGI2NGQ5ZWIxNyJ9fX0=
```