# 🛒 物品格式™ 的信息

物品格式是一个由本插件提供的配置格式，可以通过 YAML 格式的配置生成 **Minecraft 中的物品**。如果配置文本中的某个选项需要或支持**物品格式**，则我们就会在注释中标明。能填入物品格式的经典示例就是 `buy-prices` 选项，即某个物品可以用于购买另一个物品。

## 物品参数可用值列表

在**物品格式**中，这些有一些不可随意填写的值。你只能填写游戏内存在的内容。例如 `enchantments` 一栏中，你只能填写游戏内存在的附魔名称（包括由插件或数据包注册的附魔）。下列选项为多个物品参数提供了可能的值。

每个物品参数都会带有 `<版本>` 标签。你应该将 `<版本>` 替换为你所使用的服务器版本，如 `1.21.3`、`1.20.4`、`1.20.6` 等。需要注意的是 PaperAPI 不保存每个 Minecraft 版本的 Paper API，因此如果你打开的链接里没有你想要的内容，只需修改 Minecraft 版本并再次访问即可。

### 标志

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/inventory/ItemFlag.html
```

### 声音

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/JukeboxSong.html
```

### 物品稀有度

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/inventory/ItemRarity.html
```

### 附魔

在 1.20.5 之后，我们遵循 Minecraft 原版的附魔 ID 而非 Spigot API 中使用的旧版内容。如果你使用的版本高于 1.20.5，请阅读 Minecraft 维基的有关内容。

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/enchantments/Enchantment.html
```

### 属性 ID

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/attribute/Attribute.html
```

### 槽位

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/inventory/EquipmentSlot.html
```

### 旗帜图案

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/block/banner/PatternType.html
```

### 染料颜色（包括旗帜图案）

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/DyeColor.html
```

### 盔甲纹饰材料

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/inventory/meta/trim/TrimMaterial.html
```

### 盔甲纹饰

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/inventory/meta/trim/TrimPattern.html
```

### 伤害类型标签

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/tag/DamageTypeTags.html
```

### 实体类型

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/entity/EntityType.html
```

### 物品/实体类型标签

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/Tag.html
```

### 药水基础效果

#### 1.20.5 后

`WATER`、`MUNDANE`、`THICK`、`AWKWARD`、`NIGHT_VISION`、`LONG_NIGHT_VISION`、`INVISIBILITY`、`LONG_INVISIBILITY`、`LEAPING`、`LONG_LEAPING`、`STRONG_LEAPING`、`FIRE_RESISTANCE`、`LONG_FIRE_RESISTANCE`、`SWIFTNESS`、`LONG_SWIFTNESS`、`STRONG_SWIFTNESS`、`SLOWNESS`、`LONG_SLOWNESS`、`STRONG_SLOWNESS`、`WATER_BREATHING`、`LONG_WATER_BREATHING`、`HEALING`、`STRONG_HEALING`、`HARMING`、`STRONG_HARMING`、`POISON`、`LONG_POISON`、`STRONG_POISON`、`REGENERATION`、`LONG_REGENERATION`、`STRONG_REGENERATION`、`STRENGTH`、`LONG_STRENGTH`、`STRONG_STRENGTH`、`WEAKNESS`、`LONG_WEAKNESS`、`LUCK`、`TURTLE_MASTER`、`LONG_TURTLE_MASTER`、`STRONG_TURTLE_MASTER`、`SLOW_FALLING`、`LONG_SLOW_FALLING`、`WIND_CHARGED`、`WEAVING`、`OOZING`、`INFESTED`


#### 1.20.5 前

`AWKWARD`、`FIRE_RESISTANCE`、`INSTANT_DAMAGE`、`INSTANT_HEAL`、`INVISIBILITY`、`JUMP`、`LUCK`、`MUNDANE`、`NIGHT_VISION`、`POISON`、`REGEN`、`SLOW_FALLING`、`SLOWNESS`、`SPEED`、`STRENGTH`、`THICK`、`TURTLE_MASTER`、`UNCRAFTABLE`、`WATER`、`WATER_BREATHING`、`WEAKNESS`

### 音乐

``` txt
https://jd.papermc.io/paper/<版本>/org/bukkit/MusicInstrument.html
```