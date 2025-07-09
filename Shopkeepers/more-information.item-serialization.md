# 物品序列化

本页介绍了 Bukkit/Spigot 用于存储/读取物品的 YAML 格式文件。本插件在诸如 `save.yml` 的文件中使用了这些格式。[在配置中的物品](installtion-updating.configuration.md)同样使用了这种格式。

本页在新的物品元数据加入或 Bukkit/Spigot 对物品序列化做出修改时更新。当前版本为：**1.21-R0.1-SNAPSHOT**（2024-08-03）

物品的数据会因其类型而有所变化。

## 所有物品均可拥有的属性：

``` YAML
path-to-item:
  ==: org.bukkit.inventory.ItemStack
  v: <data version>
  type: <item type name>
  amount: <stack size>
  meta:
    ==: ItemMeta
    meta-type: <meta type id>
    item-name: <item name Json, see https://minecraft.wiki/w/Data_component_format#item_name>
    display-name: <custom name Json, see https://minecraft.wiki/w/Data_component_format#custom_name>
    lore:
    - <lore line Json, see https://minecraft.wiki/w/Data_component_format#lore>
    - < ... more lore lines >
    custom-model-data: <custom model data integer value, see https://minecraft.wiki/w/Data_component_format#custom_model_data>
    max-stack-size: <max stack size, see https://minecraft.wiki/w/Data_component_format#max_stack_size>
    rarity: <rarity name, see https://minecraft.wiki/w/Data_component_format#rarity>
    BlockStateTag:
      <key>: <value>
      < ... more block states, see https://minecraft.wiki/w/Data_component_format#block_state>
    enchants:
      <enchantment namespaced key>: <附魔等级>
      < ... <更多附魔> >
    enchantment-glint-override: <true/false, see https://minecraft.wiki/w/Data_component_format#enchantment_glint_override>
    attribute-modifiers: # See https://minecraft.wiki/w/Data_component_format#attribute_modifiers
      <attribute namespaced key>:
      - ==: org.bukkit.attribute.AttributeModifier
        key: <arbitrary modifier namespaced key>
        operation: <operation id>
        amount: <amount>
        slot: <slot group name>
      - < ... more attribute modifiers >
      < ... more attributes >
    ItemFlags:
    - <item flag name>
    - < ... more item flag names >
    hide-tool-tip: <true/false, see https://minecraft.wiki/w/Data_component_format#hide_tooltip>
    Unbreakable: <true|false, see https://minecraft.wiki/w/Data_component_format#unbreakable>
    fire-resistant: <true/false, see https://minecraft.wiki/w/Data_component_format#fire_resistant>
    Damage: <damage, see https://minecraft.wiki/w/Data_component_format#damage>
    max-damage: <max damage, see https://minecraft.wiki/w/Data_component_format#max_damage>
    repair-cost: <repair cost, see https://minecraft.wiki/w/Data_component_format#repair_cost>
    tool:
      ==: Tool
      default-mining-speed: <float>
      damage-per-block: <integer>
      rules:
      - ==: ToolRule
        blocks: <Either a `#`-prefixed block tag namespaced key, or a list of block namespaced keys>
        speed: <float>
        correct-for-drops: <true/false>
      - < ... more tool rules >
    food:
      ==: Food
      nutrition: <integer>
      saturation: <float>
      can-always-eat: <true/false>
      eat-seconds: <float>
      using-converts-to: <serialized ItemStack>
      effects:
      - ==: FoodEffect
        effect:
          ==: PotionEffect
          effect: <药水类型 ID>
          duration: <持续时间>
          amplifier: <效果等级>
          ambient: <true|false>
          has-particles: <true|false>
        probability: <float>
      - < ... more food effects >
    jukebox-playable:
      ==: JukeboxPlayable
      song: <song namespaced key, see https://minecraft.wiki/w/Data_component_format#jukebox_playable>
      show-in-tooltip: <true/false>
    PublicBukkitValues: <custom plugin data as SNBT string>
    custom: <custom data encoded as base64 text, see https://minecraft.wiki/w/Data_component_format#custom_data>
    internal: <other data encoded as base64 text>
    unhandled: <unhandled data encoded as base64 text>
```

其中 `数据包版本` 取决于服务器使用的版本，并能决定服务器载入物品时迁入数据的方法。暂无相关资料。

可用的物品类型名称：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html
可用的附魔名称：见 https://zh.minecraft.wiki/w/%E7%89%A9%E5%93%81%E5%A0%86%E5%8F%A0%E7%BB%84%E4%BB%B6#enchantments/stored_enchantments 与 https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html
可用的物品标志名称：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html

自 Minecraft 1.20.5 依赖，物品标志不再映射至 [`HideFlags`](https://zh.minecraft.wiki/w/%E7%89%A9%E5%93%81%E6%A0%BC%E5%BC%8F#%E7%89%A9%E5%93%81%E5%AD%98%E5%82%A8%E6%A0%BC%E5%BC%8F) 标签，而是多个其他物品属性/组件：

* `HIDE_ENCHANTS`：`show-in-tooltip`（悬浮窗内显示，下同）的附魔
* `HIDE_ATTRIBUTES`：`show-in-tooltip` 的属性
* `HIDE_ADDITIONAL_TOOLTIP`：[`hide_additional_tooltip`](https://zh.minecraft.wiki/w/%E7%89%A9%E5%93%81%E5%A0%86%E5%8F%A0%E7%BB%84%E4%BB%B6#hide_additional_tooltip) 与 `show-in-tooltip` 存储附魔
* `HIDE_UNBREAKABLE`: `show-in-tooltip` 的“无法损坏”标签
* `HIDE_DYE`：`show-in-tooltip` 的皮革盔甲染色

可用的属性及原版修饰符：见 https://zh.minecraft.wiki/w/%E5%B1%9E%E6%80%A7#%E5%B1%9E%E6%80%A7 与 https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html
属性修饰符操作 ID：https://zh.minecraft.wiki/w/%E5%B1%9E%E6%80%A7#%E5%BA%94%E7%94%A8
字符串化 NBT（SNBT）格式：https://zh.minecraft.wiki/w/NBT%E6%A0%BC%E5%BC%8F#SNBT%E6%A0%BC%E5%BC%8F
当 `命名空间 ID` 在此页中被提及时，我们会参考 Minecraft 的 `资源定位`：https://zh.minecraft.wiki/w/%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4ID

在旧 Minecraft 版本中，显示名称与描述使用 `§`（而非 `&`）开头的格式代码：https://zh.minecraft.wiki/w/%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81  
在新 Minecraft 版本中，物品的名称与描述更经常使用 JSON 格式化文本：https://zh.minecraft.wiki/w/%E6%96%87%E6%9C%AC%E7%BB%84%E4%BB%B6

食物组件数据：https://zh.minecraft.wiki/w/%E7%89%A9%E5%93%81%E5%A0%86%E5%8F%A0%E7%BB%84%E4%BB%B6#food  
药水效果相关信息：https://zh.minecraft.wiki/w/%E7%8A%B6%E6%80%81%E6%95%88%E6%9E%9C  
工具组件数据：https://zh.minecraft.wiki/w/%E7%89%A9%E5%93%81%E5%A0%86%E5%8F%A0%E7%BB%84%E4%BB%B6#tool  

某些物品可以通过 `meta` 部分增加更多详细数据。它们的 `meta-type` ID 与数据会在接下来逐个讲述。  
如果物品包含了上述未提及的数据，它会存储在未处理的 `internal` 数据部分。这部分的数据结构尚无文档记载。

## 不列在此处的物品：

**元数据类型 ID：**`UNSPECIFIC`

这些物品只存储上述的普通数据。

### 盔甲架：

**元数据类型 ID：**`ARMOR_STAND`

物品的实体标签会存储在物品的全局 `internal` 数据下。

### 旗帜：

**元数据类型 ID：**`BANNER`

``` YAML
patterns:
- ==: Pattern
  color: <颜色名称>
  pattern: <图案/样式名称>
- < ... 更多样式 >
```
可用的颜色名称与样式名称见此：https://zh.minecraft.wiki/w/%E6%97%97%E5%B8%9C#%E6%96%B9%E5%9D%97%E5%AE%9E%E4%BD%93

### 盾牌：

**元数据类型 ID：**`SHIELD`

``` YAML
base-color: <颜色名称>
patterns:
- ==: Pattern
  color: <颜色名称>
  pattern: <图案/样式名称>
- < ... 更多样式 >
```

可用的颜色名称与样式名称见此：https://zh.minecraft.wiki/w/%E6%97%97%E5%B8%9C#%E6%96%B9%E5%9D%97%E5%AE%9E%E4%BD%93  
其他方块实体数据则被存储在 `internal` 部分中。

### 方块实体：

**元数据类型 ID**

``` YAML
blockMaterial: <物品类型>
```

看起来 `blockMaterial` 似乎可以省略，且会在物品被载入时由服务器自动存储。  
现存方块实体列表：https://zh.minecraft.wiki/w/%E6%96%B9%E5%9D%97%E5%AE%9E%E4%BD%93  
目前这些数据全部存储在 `internal` 下。

### 可编辑的书（书与笔）：

**元数据类型 ID**：`BOOK`

``` YAML
pages:
- <每页文本>
- < ... 更多页面 >
```

与成书不同，这些页面会按纯文本存储（而非 JSON 格式）。

### 成书

**元数据类型 ID：**`BOOK_SIGNED`

``` YAML
title: <书本标题>
author: <作者名称>
pages:
- <JSON 格式的页面文本>
- < ... 更多页面 >
generation: <复印次数>
resolved: <true/false>
```

与可编辑的书不同的是，这些页面会按 JSON 格式存储：https://zh.minecraft.wiki/w/%E6%96%87%E6%9C%AC%E7%BB%84%E4%BB%B6  
书本复印次数相关信息：https://zh.minecraft.wiki/w/%E6%88%90%E4%B9%A6#%E7%89%A9%E5%93%81%E6%95%B0%E6%8D%AE  
UUID 与名称不必为已存在的玩家。

### 盔甲：

**元数据类型 ID：**`ARMOR`

``` YAML
trim:
  material: <盔甲饰纹材料命名空间键>
  pattern: <盔甲饰纹图案命名空间键>
```

纹饰材料与图案：https://zh.minecraft.wiki/w/%E7%9B%94%E7%94%B2#%E7%89%A9%E5%93%81%E6%95%B0%E6%8D%AE

### 皮革盔甲（如：皮革马铠）：

**元数据类型 ID：**`LEATHER_ARMOR`

``` YAML
color:
  ==: Color
  ALPHA: <Alpha 通道值>
  RED: <红通道值>
  GREEN: <绿通道值>
  BLUE: <蓝通道值>
```

颜色的通道值为介于 `0` 与 `255` 的整数。除默认 `255` 外的 Alpha 通道值没有作用。

### 可染色盔甲（如：玩家的皮革盔甲，狼铠等）

**元数据类型 ID：**`COLORABLE_ARMOR`

``` YAML
trim:
  material: <盔甲饰纹材料命名空间键>
  pattern: <盔甲饰纹图案命名空间键>
color:
  ==: Color
  ALPHA: <Alpha 通道值>
  RED: <红通道值>
  GREEN: <绿通道值>
  BLUE: <蓝通道值>
```

纹饰材料与图案：https://zh.minecraft.wiki/w/%E7%9B%94%E7%94%B2#%E7%89%A9%E5%93%81%E6%95%B0%E6%8D%AE  
颜色的通道值为介于 `0` 与 `255` 的整数。除默认 `255` 外的 Alpha 通道值没有作用。

### 已探索的地图

**元数据类型：**`MAP`

``` YAML
scaling: <true|false>
display-map-color:
  ==: Color
  ALPHA: <Alpha 通道值>
  RED: <红通道值>
  GREEN: <绿通道值>
  BLUE: <蓝通道值>
```

颜色的通道值为介于 `0` 与 `255` 的整数。除默认 `255` 外的 Alpha 通道值没有作用。

### 药水与药水箭

**元数据类型：**`POTION`

``` YAML
potion-type: <药水类型名称>
custom-color:
  ==: Color
  ALPHA: <Alpha 通道值>
  RED: <红通道值>
  GREEN: <绿通道值>
  BLUE: <蓝通道值>
custom-effects:
- ==: PotionEffect
  effect: <药水类型 ID>
  duration: <持续时间>
  amplifier: <效果等级>
  ambient: <true|false>
  has-particles: <true|false>
- < ... 更多药水效果 >
```

可用药水效果名称：https://zh.minecraft.wiki/w/%E8%8D%AF%E6%B0%B4#%E7%89%A9%E5%93%81%E6%95%B0%E6%8D%AE  
颜色的通道值为介于 `0` 与 `255` 的整数。除默认 `255` 外的 Alpha 通道值没有作用。
可用的药水效果类型 ID 与其他信息见此：https://zh.minecraft.wiki/w/%E7%8A%B6%E6%80%81%E6%95%88%E6%9E%9C
可用药水效果类型 ID 与其他有关药水效果的信息：
Suspicious stew

**元数据类型：**`SUSPICIOUS_STEW`

``` YAML
effects:
- ==: PotionEffect
  effect: <药水类型 ID>
  duration: <持续时间>
  amplifier: <效果等级>
  ambient: <true|false>
  has-particles: <true|false>
- < ... 更多药水效果 >
```

可用的药水效果类型 ID 与其他信息见此：https://zh.minecraft.wiki/w/%E7%8A%B6%E6%80%81%E6%95%88%E6%9E%9C

### 刷怪蛋：

**元数据类型：**`SPAWN_EGG`

自 MC 1.13 开始，实体类型由刷怪蛋的物品类型决定。  
任何额外的实体数据（包括潜在的不同实体类型）都被储存在内部数据中。

### 附魔书：

**元数据类型：**`ENCHANTED`

``` YAML
stored-enchants:
  <附魔 ID>: <附魔等级>
  < ... <更多附魔> >
```

可用附魔名称：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html

### 烟花火箭：

**元数据类型：**`FIREWORK`

``` YAML
firework-effects:
- ==: Firework
  flicker: <true|false>
  trail: <true|false>
  colors:
  - ==: Color
    ALPHA: <Alpha 通道值>
    RED: <红通道值>
    GREEN: <绿通道值>
    BLUE: <蓝通道值>
  - < ... 更多颜色 >
  fade-colors:
  - ==: Color
    ALPHA: <Alpha 通道值>
    RED: <红通道值>
    GREEN: <绿通道值>
    BLUE: <蓝通道值>
  - < ... 更多颜色 >
  type: <烟花效果类型名称>
- < ... 更多烟花效果 >
power: <飞行时长>
```

颜色的通道值为介于 `0` 与 `255` 的整数。除默认 `255` 外的 Alpha 通道值没有作用。  
飞行时长（Power）为介于 `0` 至 `127` 的整数。1 单位飞行时长表示烟花可飞行半秒。  
可用的烟花效果类型名称：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html


### 烟火之星：

**元数据类型：**`FIREWORK_EFFECT`

``` YAML
firework-effect:
  ==: Firework
  flicker: <true|false>
  trail: <true|false>
  colors:
  - ==: Color
    ALPHA: <Alpha 通道值>
    RED: <红通道值>
    GREEN: <绿通道值>
    BLUE: <蓝通道值>
  - < ... 更多颜色 >
  fade-colors:
  - ==: Color
    ALPHA: <Alpha 通道值>
    RED: <红通道值>
    GREEN: <绿通道值>
    BLUE: <蓝通道值>
  - < ... 更多颜色 >
  type: <烟花效果类型名称>
```

颜色的通道值为介于 `0` 与 `255` 的整数。除默认 `255` 外的 Alpha 通道值没有作用。  
可用的烟花效果类型名称：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html  

### 知识之书：

**元数据类型：**`KNOWLEDGE_BOOK`

``` YAML
Recipes:
- <命名空间>:<ID>
- <命名空间>:<ID>
```

### 弩：

**元数据类型：**`CROSSBOW`

``` YAML
charged-projectiles:
- <序列化的箭类物品数据（所用格式与本页介绍相同）>
- < ... 更多的箭类序列化物品数据 >
```

### 指南针：

**元数据类型：**`COMPASS`

``` YAML
LodestonePosWorld: <磁石所在世界名称>
LodestonePosX: <磁石所在 x 轴坐标>
LodestonePosY: <磁石所在 y 轴坐标>
LodestonePosZ: <磁石所在 z 轴坐标>
LodestoneTracked: <true|false>
```

### 收纳袋：

**元数据类型：**`BUNDLE`

``` YAML
items:
- <ItemStack>
- < ... 更多 ItemStacks >
```

### 桶装热带鱼：

**元数据类型：**`TROPICAL_FISH_BUCKET`

``` YAML
fish-variant: <变种 ID>
```

变种决定桶中鱼的形状、外观及其颜色、体色和名称。详见：https://zh.minecraft.wiki/w/%E7%83%AD%E5%B8%A6%E9%B1%BC#%E5%AE%9E%E4%BD%93%E6%95%B0%E6%8D%AE  
鱼桶同样可以在其 `internal` 部分数据下存储实体标签和桶实体标签。

### 桶装美西螈：

**元数据类型：**`AXOLOTL_BUCKET`

``` YAML
axolotl-variant: <变种 ID>
```

美西螈桶同样可以在其 `internal` 部分数据下存储实体标签和桶实体标签。

### 其他带有实体标签的物品（物品展示框、鳕鱼/河豚/鲑鱼桶以及画）：

**元数据类型：**`ENTITY_TAG`

物品的实体标签（如物品展示框的隐形标签等）会存储在物品的全局 `internal` 部分中。

### 山羊角：

**元数据类型：**`MUSIC_INSTRUMENT`

``` YAML
instrument: <乐器命名空间 ID>
```

山羊角对应乐器相关：https://zh.minecraft.wiki/w/%E5%B1%B1%E7%BE%8A%E8%A7%92#%E7%89%A9%E5%93%81%E6%95%B0%E6%8D%AE


### 不详之瓶：

**元数据类型：**`OMINOUS_BOTTLE`

``` YAML
ominous-bottle-amplifier: <ominous bottle amplifier level>
```

不详之瓶的效果等级只能为 `0` 到 `4`（含）之间的数字：https://zh.minecraft.wiki/w/%E4%B8%8D%E7%A5%A5%E4%B9%8B%E7%93%B6#%E6%95%B0%E6%8D%AE%E5%80%BC