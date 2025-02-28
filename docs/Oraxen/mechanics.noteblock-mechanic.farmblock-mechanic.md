# 耕地机制
如何向游戏内添加自定义方块

::: info 提示
如果你正在查询的是如何向游戏内添加自定义耕作机制，我们推荐你看看 [CustomCrops](https://polymart.org/resource/customcrops.2625)。
它非常适合用于这类内容，且与 Oraxen 兼容性良好。
:::

## 它是如何起效的？

全局配置可以用于启用或禁用这个机制。

```YAML
noteblock:
  tool_types:
    - WOODEN
    - STONE
    - IRON
    - GOLDEN
    - DIAMOND
    - NETHERITE
  farmblock_check_delay: 1000 # 方块变为干燥的时间，单位为刻
  enabled: true

harvesting:
  enabled: true

watering:
  enabled: true
```

## 如何创建一个简单的耕地方块？

### Oraxen 物品与纹理包配置

在这种情况下你就不能没有预制模型而使用这个机制创建方块了，你需要为每个物品创建两个模型，一个是湿润状态，另一个则是干燥状态。

```YAML
epic_box_dry:
  displayname: "<white>史诗盒子"
  material: PAPER
  Pack:
    generate_model: false
    model: epic_box_dry
  Mechanics:
    noteblock:
      custom_variation: 49
      model: epic_box_dry
      hardness: 5
      farmblock:
        moistFarmBlockPath: epic_box_wet
        farmBlockDryOutTime: 30000 # 单位为毫秒 (30000ms = 30s)

epic_box_wet:
  displayname: "<white>湿润的史诗盒子"
  excludeFromInventory: true # 使得展示界面只包含基础方块
  material: PAPER
  Pack:
    generate_model: false
    model: epic_box_wet
  Mechanics:
    noteblock:
      custom_variation: 48
      hardness: 5
      model: epic_box_wet
      farmblock:
        farmBlockPath: epic_box_dry
        farmBlockDryOutTime: 30000 # 单位为毫秒 (30000ms = 30s)
```

在这个示例中，这里有两个分别配置的方块。

`epic_box_dry` 为耕地方块的干燥状态，而 `epic_box_wet` 则为耕地方块的湿润状态。

`farmBlockPath` 为缺水状态下成为的 Oraxen 物品名称。

`moistFarmBlockPath` 为湿润状态下成为的 Oraxen 物品名称。

`farmBlockDryOutTime` 则为耕地方块在脱离水源后从湿润转变为干燥所需的时间。

### 我如何才能让耕地方块湿润？

Oraxen 有一个洒水壶机制，这样你就能让某个物品充当水源将耕地方块湿润。它也需要两个模型，一个是装满水的状态，另一个则是空壶状态，下文为示例。

```YAML
epic_watering_vacuum:
  displayname: '<white>史诗水壶'
  material: LEATHER_HORSE_ARMOR
  Mechanics:
    watering:
      filledCanItem: epic_watering_full # 被灌满水后替换的物品
  Pack:
    generate_model: false
    model: items/epic_watering_vacuum

epic_watering_full:
  displayname: '<white>装满的史诗水壶'
  material: LEATHER_HORSE_ARMOR
  Mechanics:
    watering:
      emptyCanItem: epic_watering_vacuum # 被用空水后替换的物品
  Pack:
    generate_model: false
    model: custom/plants/epic_watering_full
```

关于制作自定义植物的教程，请见[这个章节](mechanics.furniture-mechanic.farming-mechanic.md)。