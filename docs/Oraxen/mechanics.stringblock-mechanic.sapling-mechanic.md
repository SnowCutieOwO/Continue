# 树苗机制

::: info 提示
仅适用于 1.136.0+ 的 Oraxen。
:::

## 它如何生效？

这是一个自定义方块的变种，但这个机制做成的方块碰撞箱基于线，适合用于制作那些可遍历小型装饰物体，而且它们的占用也会比家具类方块小。另外这类方块的 `custom_variation` 也略有不同。

### 全局配置

```YAML
stringblock:
  tool_types:
    - WOODEN
    - STONE
    - IRON
    - GOLDEN
    - DIAMOND
    - NETHERITE
  sapling_growth_check_delay: 4000
  enabled: true
```

## 我如何创建一种树苗？

你可以选择将下列内容添加至你的绊线方块。

```YAML
sapling:
  Mechanics:
    stringblock:
      sapling:
        canGrowNaturally: true # 是否允许自然生长
        naturalGrowthTime: 6000 # 单位为刻
        canGrowFromBoneMeal: true
        boneMealGrowChance: 50
        growSound: block.grass.break
        minLightLevel: 4
        requiresWaterSource: false # 是否需要浇水
        schematicName: schemTest # 生成的结构
```

你可以给生长过程添加一些随机性，或是单纯地将生长的时间延长。

打开 `mechanics.yml` 并找到 `stringblock-mechanic` 不分，将 `sapling_growth_check_delay` 项修改至合适的值即可。（20 刻 = 1 秒）