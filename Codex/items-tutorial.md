# 物品教程

所有 Codex 中的物品都使用相同的格式，你可以在这里找到其详细描述。

inventory.yml 文件的示例物品格式：

``` YAML
39:
  item:
    id: PLAYER_HEAD
    name: "&7返回"
    skull_data:
      texture: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzdhZWU5YTc1YmYwZGY3ODk3MTgzMDE1Y2NhMGIyYTdkNzU1YzYzMzg4ZmYwMTc1MmQ1ZjQ0MTlmYzY0NSJ9fX0="
```

区域分类文件的示例物品格式：

``` YAML
category:
      id: MAP
      name: "&7分类: #6bcbfe&l世界区域"
      lore:
        - "#eeeeee你所有发现的区域都会显示在这里."
        - ""
        - "&7进度: %unlocked% &8[%progress_bar%&8] &8(&7%percentage%&8)"
```

## ID

物品的 ID/材料。

最新版本材料列表：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html

``` YAML
id: LIME_TERRACOTTA
```

## 耐久度

物品的耐久或数据值。

``` YAML
durability: 5
```

## 名称

物品的自定义名称。

* 可以在这里使用任意 PlaceholderAPI 变量。

``` YAML
name: "&2条目 %name%"
```

## 描述

物品的自定义描述。

* 可以在这里使用任意 PlaceholderAPI 变量。

``` YAML
lore:
- "#eeeeee你所有发现的区域都会显示在这里."
```

## 数量

物品的数量。

``` YAML
amount: 16
```

## 自定义模型数据

物品的自定义模型数据值，仅对 1.16-1.21.3 有效。

``` YAML
custom_model_data: 5
```

## 自定义模型组件数据

1.21.4 版本引入的新自定义模型数据。标志、浮点数、颜色及字符串属性包含了一系列元素。更多信息请见：https://minecraft.wiki/w/Data_component_format/custom_model_data。[^1]

``` YAML
custom_model_component_data:
  strings:
  - "string1"
  flags:
  - "flag1"
  - "flag2"
  floats: []
  colors: []
```

## 附魔

物品携带的附魔。使用如下格式：`<名称>;<等级>`。你可以在这里找到完整附魔名称列表：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html

[^1]：原文尚无中文。

## 物品标志

物品的标志。你可以在这里找到完整物品标志列表：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html

``` YAML
item_flags:
- HIDE_ATTRIBUTES 
```

## 属性

物品的属性修饰符。这很难手动编辑，因此不建议你盲目修改。格式：`<属性名称>;<操作>;<值>;<UUID>;<槽位>`

属性名称列表：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html  
操作名称列表：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html  
槽位名称列表：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html  
随机生成 UUID 功能：https://www.uuidgenerator.net/

``` YAML
attributes:
- GENERIC_MAX_HEALTH;ADD_SCALAR;0.1;1ab87334-7a32-4307-b783-c5519f735260;HAND
- GENERIC_MOVEMENT_SPEED;ADD_SCALAR;0.35;766d5332-e2b1-493d-af98-5d3046da3f0a;HAND
```

## 颜色

皮革盔甲的颜色。

``` YAML
color: 8439583
```

## 头颅数据

带自定义贴图的玩家头颅。你可以在这里找到带材质的头及其属性：https://minecraft-heads.com/custom-heads。

``` YAML
skull_data:
    texture: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTA4Yjc3MmVjYWVlNzA2MjM1ZDFhZGJmMGI5YTI5YjU4YmE5YzBlZDYwZGU2ZjEwZWZiMWE3Zjg2ZDllIn19fQ=="
```

``` YAML
skull_data:
    owner: Ajneb
```

## 药水数据

药水物品的信息。对这些物品 ID 有效：POTION（普通药水）、SPLASH_POTION（喷溅型药水）、LINGERING_POTION（滞留型药水）、TIPPED_ARROW（药水箭）。

药水类型列表：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html  
药水效果列表：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html

``` YAML
potion_data:
    # 药水效果格式:
    # <药水效果名称>;<等级>;<单位为刻的持续时间>
    effects:
    - INCREASE_DAMAGE;1;4800
    - WATER_BREATHING;0;12000
    extended: false
    upgraded: false
    type: UNCRAFTABLE
    # 颜色只在 1.9+ 有效, 你可以在这里获取 Minecraft 颜色值:
    # https://minecraftcommand.science/armor-color
    color: 6196631
```

## 旗帜数据

旗帜或盾牌的信息。按如下格式填入：`<颜色>;<类型>`。

完整颜色列表：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/DyeColor.html  
完整图案列表：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/banner/PatternType.html

``` YAML
banner_data:
    patterns:
    - BLUE;SQUARE_BOTTOM_LEFT
    - BLUE;SQUARE_TOP_RIGHT
    - LIME;STRAIGHT_CROSS
```

## 烟花数据

烟花火箭或烟火之星的数据。烟花效果的格式：`<类型>;<颜色1>;<颜色2>,...;<淡出颜色1>,<淡出颜色2>,...;<是否闪烁>;<是否拖尾>`

烟花类型列表：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html  
颜色列表：https://minecraftcommand.science/armor-color

``` YAML
# 对于烟花火箭物品
firework_data:
    rocket_effects:
    - BALL_LARGE;11743532,2437522;1973019,15790320;false;true
    power: 1
```

``` YAML
# 对于烟火之星物品
firework_data:
    star_effect: BALL;16777215;14188952,4312372;false;false
```

## 书本数据

成书有关的信息。书页内容以 JSON 格式存储，因此我不建议你手动修改。悬浮窗与点击事件会被正常存储，但只在 1.12+ 有效。

``` YAML
book_data:
    title: "规则书"
    generation: ORIGINAL
    author: "Ajneb97"
    pages: []
```

## 盔甲饰纹数据

盔甲饰纹模板信息。仅对盔甲类物品有效。仅对 1.20+ 有效。

图案样式：https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimPattern.html  
材料名称：https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimMaterial.html

``` YAML
trim_data:
    pattern: ward
    material: redstone
```

## NBT

物品的 NBT 数据。这很难手动编辑，因此不建议你盲目修改。（仅对 1.8-1.20.4 有效，1.20.5+ 的 Minecraft 没有 NBT 组件）