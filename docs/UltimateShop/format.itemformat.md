# 📝 物品格式™

::: info
Mojang 非常喜欢修改物品（物品类型）、附魔、药水以及其他内容的 ID（及命名空间）。例如，他们在 1.21 将“横扫之刃（sweeping）”附魔改为了“sweeping_edge”。所以，在更新服务器版本之前，你需要仔细检查新版本是否对物品进行了什么修改，否则这会导致你的配置文件无法正常读取。
:::

## 对接物品

### 对接插件

可用的值：
`EcoItems`、`EcoArmor`、`MMOItems`、`ItemsAdder`、`Oraxen`、`MythicMobs`、`eco`、`NeigeItems`、`ExecutableItems`、`Nexo`。

``` YAML
hook-plugin: MMOItems
```

### 对接物品

对于 `EcoItems`、`Oraxen` 以及 `MythicMobs`，请直接填入物品 ID。

对于 `ItemsAdder` 和 `eco`，请填入 `命名空间:物品 ID`。

* `eco` 的命名空间为插件名称，如 `talismans`。`物品 ID` 遵照如下规则：
    * Talisman：只需输入对应护身符名称。
    * EcoArmor：
        * 盔甲：`set_<套装 ID>_<部位 ID>`
        * 高级盔甲：`set_<套转 ID>_<部位 ID>_advanced`
        * 升级宝石：`shard_<升级宝石 ID>`
    * Reforges：`stone_<重铸 ID>`

对于 `EcoArmor`，请填入 `盔甲套装 ID;;部位名称`。`部位名称`可为`BOOTS`（靴子）、`CHESTPLATE`（胸甲）、`ELYTRA`（鞘翅）、`HELMET`（头盔）、`LEGGINGS`（护腿）。

对于 `MMOItems`，请填入 `<物品类型>;;<物品 ID>`。

``` YAML
hook-item: AXE;;TEST_AXE
```

::: info 
**等等！** 如果你只是想要从自定义物品插件获取物品，`hook-plugin` 与 `hook-item` 选项对你来说已经足够了。如果你的自定义物品插件不受支持，请使用如下的命令。下面的内容适用于原版物品。如果你在这里设置，我们将会替换其上已有的属性，导致最终结果和物品插件中的物品不完全相同。
:::

## 材料

若你想要使用插件保存的物品，只需将如下选项设置为保存物品的 ID，如 `material: superior_sword`。

若值为空或无效，则会变为石头。

**请勿在添加 `hook-plugin` 选项时再使用该设置，强行使用没有任何效果！**

``` YAML
material: APPLE
```

## 数量

支持使用 PlaceholderAPI 或表达式。例如 `%player_health% * 5`

``` YAML
amount: 5
```

## 最低价/最高价 - 仅支持价格/物品

用于动态定价。

``` YAML
min-amount: 1
max-amount: 15
```

## 自定义名称/显示名称

根据配置文件，这里有两种格式，一种是 1.9 之前使用的旧版颜色，或者稍后版本中使用的文本组件。前者使用我们创建的颜色格式，后者则使用 MiniMessages 格式，更多内容可在[这里](https://docs.advntr.dev/minimessage/format.html)详细阅读。
MiniMessage 格式需要服务端为 Paper 及其下游分支才可使用。

``` YAML
name: '&f精良的剑'
```

## 物品名称（1.20.5+）

物品名称是 1.20.5 新增的一种属性，与展示名称不同，物品名称不可以在铁砧中修改。

根据配置文件，这里有两种格式，一种是 1.9 之前使用的旧版颜色，或者稍后版本中使用的文本组件。前者使用我们创建的颜色格式，后者则使用 MiniMessages 格式，更多内容可在[这里](https://docs.advntr.dev/minimessage/format.html)详细阅读。
MiniMessage 格式需要服务端为 Paper 及其下游分支才可使用。

``` YAML    
item-name: '&b稀有的剑'
```

## 描述

你可以使用 `\n` 表示换行。

根据配置文件，这里有两种格式，一种是 1.9 之前使用的旧版颜色，或者稍后版本中使用的文本组件。前者使用我们创建的颜色格式，后者则使用 MiniMessages 格式，更多内容可在[这里](https://docs.advntr.dev/minimessage/format.html)详细阅读。
MiniMessage 格式需要服务端为 Paper 及其下游分支才可使用。

## 最大堆叠（1.20.5+）

``` YAML
max-stack: 99
```

## 食物（1.20.5+）

格式：`药水类型 ID, 持续时间, 倍率, 粒子效果淡色, 粒子效果显隐, 图标, 几率`。

对于 `粒子效果淡色`、`粒子效果显隐`、`图标`，这些是布尔值标签，而 `几率` 则是 0 到 1 之间的数字。

对于 `convert`，它是消耗完药水后返回给玩家的物品格式（需 1.21+，可选）

``` YAML
food:
  eat-seconds: 0.25 # 已于 1.21.2 移除
  can-always-eat: true 
  nutrition: 5
  saturation: 0.5
  convert: # 已于 1.21.2 移除
    material: BREAD
  effects: # 已于 1.21.2 移除
    - 'SPEED, 100, 1, true, true, false, 0.5'
```

## 工具（1.21+）

``` YAML
tool:
  mining-speed: 1
  damage-per-block: 1
  rules:
    # 方块, 速度, 挖掘后是否掉落
    - 'stone, coal_ore, 1, true'
    # 可将方块替换为方块标签.
```

## 唱片机可播放（1.21+）

``` YAML
song: CAT
show-song: false
```

## 免疫火焰（1.20.5+）

``` YAML
fire-resistant: true
```

## 隐藏工具提示框（1.20.5+）

``` YAML
hide-tool-tip: true
```

## 无法破坏

``` YAML
unbreakable: true
```

## 稀有度（1.20.5+）

``` YAML
rarity: COMMON
```

## 标志

``` YAML
flags:
  - HIDE_ENCHANTS
  - HIDE_ATTRIBUTES
  - HIDE_UNBREAKABLE
  - HIDE_DESTROYS
  - HIDE_PLACED_ON
  - HIDE_ADDITIONAL_TOOLTIP
  - HIDE_DYE
  - HIDE_ARMOR_TRIM
```

## 附魔

配置部分的格式为：`附魔 ID: 附魔等级`

对于附魔书：你可能需要使用 `stored-enchants` 而非本选项。

对于自定义附魔：部分附魔插件未在游戏内注册其附魔，该功能可能无效。

**你应当使用 Minecraft 原版的附魔 ID 而非 Spigot 在 1.20.5 之后提供的**

``` YAML
enchants:
  MENDING: 1
```

## 发光（1.20.5+）

``` YAML
glow: true
```

## 自定义模型数据

``` YAML
custom-model-data: 15
```

## 属性

需要注意的是 1.20.5 修改了属性格式，如果你的物品是在 1.20.5 之前生成的，你需要将配置文件手动改为新格式。

配置部分的格式为`属性 ID`，且包含多个子选项。

``` YAML
attributes:
  GENERIC_ATTACK_DAMAGE: 
    name: generic.attack_damage 
    amount: 12
    operation: ADD_NUMBER # 可为 ADD_NUMBER, ADD_SCALAR, MULTIPLY_SCALAR_1
    slot: HAND 
```

## 可损坏

代表物品是否有耐久值，或是能否磨损。

### 单次损坏值

``` YAML
damage: 5
```

### 最大损坏值（1.20.5+）

与最大耐久相似。

``` YAML
max-damage: 1500
```

## 附魔存储

这可以为物品指定其中存储的附魔，能够与其他工具在铁砧上结合。`Material.ENCHANTED_BOOK` 是存储附魔的示例。

### 存储附魔

与[附魔](#附魔)相似。

``` YAML
stored-enchants:
  MENDING: 1
```

## 旗帜

### 图案

配置部分的格式为：`图案 ID: 图案颜色`。

``` YAML
patterns:
  BASE: WHITE
```

## 药水

代表可拥有自定义效果的药水或物品。

### 基本效果（1.20.5+）

``` YAML
base-effect: 'WATER'
```

### 基本效果（1.20.5 前）

格式：`药水类型 ID, 是否延长, 是否升级`

### 效果/自定义效果

格式：`药水类型 ID, 持续时间, 倍率, 粒子效果淡色, 粒子效果显隐, 图标`。

对于 `粒子效果淡色`、`粒子效果显隐`、`图标`，这些是布尔值标签。

``` YAML
effects:
  - 'SPEED, 100, 1, true, true, false'
```

### 颜色

颜色有两种格式：

* R, G, B
* 一行数字（如 0xff0000）

``` YAML
color: '5'
```

## 盔甲

代表任何实体可装备的盔甲。

### 纹饰（1.20.5+）

配置文本格式拥有两个子选项。

``` YAML
trim:
  material: IRON
  pattern: TIDE
```

## 皮革盔甲

### 颜色

颜色有两种格式：

* R, G, B
* 一行数字（如 0xff0000）

``` YAML
color: '5'
```

## 美西螈桶（1.17+）

### 颜色

可用值：`LUCY`、`WILD`、`GOLD`、`CYAN`、`BLUE`

``` YAML
color: LUCY
```

## 热带鱼桶（1.14+）

### 颜色

可用值：`WHITE`、`ORANGE`、`MAGENTA`、`LIGHT_BLUE`、`YELLOW`、`LIME`、`PINK`、`GRAY`、`LIGHT_GRAY`、`CYAN`、`PURPLE`、`BLUE`、`BROWN`、`GREEN`、`RED`、`BLACK`

``` YAML
color: WHITE
```

### 图案颜色

与上述的颜色相似。

``` YAML
pattern-color: WHITE
```

### 图案

可用值：`KOB`、`SUNSTREAK`、`SNOOPER`、`DASHER`、`BRINELY`、`SPOTTY`、`FLOPPER`、`STRIPEY`、`GLITTER`、`BLOCKFISH`、`BETTY`、`CLAYFISH`

## 头颅

支持两种格式：

* Base64：如下所示，仅支持 1.16+
* 玩家名称：需要正版，支持所有版本。<font color="red">付费版支持嵌入 PlaceholderAPI 变量。</font>

``` YAML
skull: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvN2YzZmVkMTZmZDU1MTkwOWZhNWUyOWNkZDY5N2VlMzQ2ZTYzMzkwYjM4M2E0MzAwYTY2MmE4MGI2NGQ5ZWIxNyJ9fX0=
```

## 烟花

### 飞行时间

``` YAML
power: 1
```

### 效果

该部分配置下有多个子选项。

对于 `type`，可填入的值有：`BALL`、`BALL_LARGE`、`STAR`、`BURST`、`CREEPER`。

``` YAML
firework:
  1: 
    flicker: true
    trial: true
    colors:
      base:
        - 5
      fade:
        - 666666
    type: BALL
```

## 烟火之星

### 烟花效果

对于 `type`，可填入的值有：`BALL`、`BALL_LARGE`、`STAR`、`BURST`、`CREEPER`。

``` YAML
firework:
  flicker: true
  trial: true
  colors:
    base:
      - 5
    fade:
      - 666666
  type: BALL
```

## 迷之炖菜

### 效果

效果格式：`药水类型 ID, 持续时间, 倍率, 粒子效果淡色, 粒子效果显隐, 图标`。

``` YAML
effects:
  - 'SPEED, 100, 1, true, true, false'
```

## 收纳袋（1.17+）/潜影盒

### 内容物

配置部分格式为：槽位 ID、物品或物品格式。

## 可疑方块（1.20+）

### 内容物

可刷扫方块内的掉落物。如果你需要自定义可刷扫方块，你可以来[这里](https://www.spigotmc.org/resources/customarcheology-become-an-archaeologist-in-the-game-old-chunk-support-1-20.114142/)看看我们的 CustomArcheology！

``` YAML
content:
  material: APPLE
```

## 刷怪笼

如果你想要刷怪笼中有实体，那么只需填入 `spawner` 选项。其他选项均为可选。

``` YAML
spawner: ZOMBIE
min-delay: 200
max-delay: 800
max-entities: 6
player-range: 16
spawn-range: 30
```

## 不详之瓶（1.20.5+）

### 等级

``` YAML
power: 3
```

## 乐器（1.18+）

### 音乐

``` YAML
music: PONDER_GOAT_HORN # 音乐
```

## 可修复

``` YAML
repair-cost: 15
```

## 可附魔

``` YAML
enchantable: 15
```

## 发光（1.21.2+）

``` YAML
glider: true
```

## 物品模型（1.21.2+）

``` YAML
item-model: 'mycustom:itemmodel'
```

## 提示框类型（1.21.2+）

``` YAML
tooltip-style: 'mycustom:tooltip'
```

## 使用冷却（1.21.2+）

``` YAML
use-cooldown:
  cooldown-group: 'minecraft:custom_weapon'
  cooldown-seconds: 1.5
```

## 可装备 <font color="red">- 仅付费</font>

``` YAML
equippable:
  entities: 
    - 'zombie' # 实体类型 ID
    - 'skeletons' # 实体类型标签
  dispensable: true
  swappable: true
  damage-on-hurt: true
  camera-overlay: misc/pumpkinblur
  sound: ambient.basalt_deltas.mood
  model: mycustomarmor
  slot: head
```

## 伤害免疫

``` YAML
damage-resistant: is_fall # 伤害类型标签
```

## 外部物品格式选项

部分额外的**物品格式**选项可以在[兼容性](info.compatibility.md)章节找到。它们的目的是为了以物品格式兼容其他插件，这样它们就可以参与到物品生成的过程中。

当前支持的插件有：

* MythicChanger
* AdvancedEnchantments <font color="red">- 付费</font>
* NBTAPI <font color="red">- 付费</font>