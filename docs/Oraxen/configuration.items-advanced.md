# （进阶）物品
物品创建的所有微妙之处

## 原版选项

### 组件（Components）

:::: tabs

::: tab 1.20.5
`max_stack_size` - 设置 Oraxen 物品单格最大堆叠数量
`enchantment_glint_override` - 设置附魔光效的覆盖状态
`fire_resistant` - 设置该 Oraxen 物品是否免疫火焰与岩浆伤害
`durability` - 设置 Oraxen 物品耐久度
`hide_tooltip` - 隐藏 Oraxen 物品的所有提示框
`food` - 使得物品可消耗

上述所有属性的示例：

```YAML
my_item:
  itemname: <gradient:#4B36B1:#6699FF>My Item
  Components:
    enchantment_glint_override: false
    durability: 10
    # if the material above isnt a normal tool, but say PAPER
    # The item will not have its durability lowered by actions by default
    # Example of making the tool lower its durability from hitting entities and breaking blocks
    #durability:
    #  value: 10
    #  damage_block_break: true
    # damage_entity_hit: true
    max_stack_size: 10
    fire_resistant: true
    hide_tooltip: true
    tool:
      damage_per_block:                       # Optional, defaults to 1
      default_mining_speed:                   # Optional, defaults to 1.0
      rules:
        - speed: 1.0
          correct_for_drops: true             # If mining the given blocks should drop or not
          material: DIAMOND_BLOCK             # The material this rule applies to, also supports list format
          #materials:
          #  - DIAMOND_BLOCK
          #  - NETHERITE_BLOCK
          # List of all tags can be found at https://minecraft.wiki/w/Tag#Block_tags_2
          tag: minecraft:mineable/axe         # The block-tag this rule applies to, also supports list format
          #tags:
          #  - minecraft:mineable/axe
          #  - minecraft:mineable/shovel
    food:
      nutrition: 2
      saturation: 2 
      can_always_eat: false                   # Optional, default is false
      eat_seconds: 1.6                        # Optional, default is 1.6
      replacement:                            # Optional, 1.21+ only, null if not specified (aka no replacement)
        #minecraft_type: DIAMOND
        #crucible_item: crucibleid
        #eco_item: ecoid
        #mmoitems_id: id
        #mmoitems_type: type
        oraxen_item: itemid
      effects:
        mining_fatigue:
          duration: 10                        # In seconds, default is 20
          amplifier: 1
          ambient: false
          show_icon: true
          show_particles: true
          probability: 50
```
:::

::: tab 1.21

`max_stack_size` - 设置 Oraxen 物品单格最大堆叠数量  
`enchantment_glint_override` - 设置附魔光效的覆盖状态  
`fire_resistant` - 设置该 Oraxen 物品是否免疫火焰与岩浆伤害  
`durability` - 设置 Oraxen 物品耐久度  
`hide_tooltip` - 隐藏 Oraxen 物品的所有提示框  
`food` - 使得物品可消耗  
`jukebox_playable` - 使物品可被放入唱片机并播放指定乐曲  
* `show_in_tooltip` - 在提示框中显示物品的歌曲信息
* `song_key` - 歌的名称（自定义歌曲需要数据包）

上述所有属性的示例：

```YAML
my_item:
  itemname: <gradient:#4B36B1:#6699FF>My Item
  Components:
    enchantment_glint_override: false
    durability: 10
    # if the material above isnt a normal tool, but say PAPER
    # The item will not have its durability lowered by actions by default
    # Example of making the tool lower its durability from hitting entities and breaking blocks
    #durability:
    #  value: 10
    #  damage_block_break: true
    # damage_entity_hit: true
    max_stack_size: 10
    fire_resistant: true
    hide_tooltip: true
    tool:
      damage_per_block:                       # Optional, defaults to 1
      default_mining_speed:                   # Optional, defaults to 1.0
      rules:
        - speed: 1.0
          correct_for_drops: true             # If mining the given blocks should drop or not
          material: DIAMOND_BLOCK             # The material this rule applies to, also supports list format
          #materials:
          #  - DIAMOND_BLOCK
          #  - NETHERITE_BLOCK
          # List of all tags can be found at https://minecraft.wiki/w/Tag#Block_tags_2
          tag: minecraft:mineable/axe         # The block-tag this rule applies to, also supports list format
          #tags:
          #  - minecraft:mineable/axe
          #  - minecraft:mineable/shovel
    food:
      nutrition: 2
      saturation: 2 
      can_always_eat: false                   # Optional, default is false
      eat_seconds: 1.6                        # Optional, default is 1.6
      replacement:                            # Optional, 1.21+ only, null if not specified (aka no replacement)
        #minecraft_type: DIAMOND
        #crucible_item: crucibleid
        #eco_item: ecoid
        #mmoitems_id: id
        #mmoitems_type: type
        oraxen_item: itemid
      effects:
        mining_fatigue:
          duration: 10                        # In seconds, default is 20
          amplifier: 1
          ambient: false
          show_icon: true
          show_particles: true
          probability: 50
      jukebox_playable:
        show_in_tooltip: true
        song_key: mysong.id
```
:::

::: tab 1.21.2+
`equippable` - 使得该物品可像盔甲一样被装备
`damage_resistant` - 使得物品无视某些伤害
  * 如果你想要设置多种伤害类型，你需要添加新自定义标签的数据包。
  * 所有可用的伤害类型可以在[这里](https://zh.minecraft.wiki/w/%E6%A0%87%E7%AD%BE#%E4%BC%A4%E5%AE%B3%E7%B1%BB%E5%9E%8B)查看。
`enchantable` - 设置该物品在附魔台内的最大附魔消耗.
`glider` - 设置该物品在装备时是否可以像鞘翅一样滑翔。
`item_model` - 物品的基础模型，可替代 `custom_model_data`。
  * 参考模型可在 `assets/<namespace>/models/item/<model>` -> `item_model: 命名空间:模型` 下找到。
`tooltip_style` - 物品提示框的类型。
  * 自定义提示框背景可在 `assets/<namespace>/textures/gui/sprites/tooltip/<id>_background` 下找到示例。
  * 自定义提示框边框可在 `assets/<namespace>/textures/gui/sprites/tooltip/<id>_frame` 下找到示例。
  * 可通过 mcmeta 添加自定义 & 动态样式。[维基链接](https://zh.minecraft.wiki/w/%E8%B5%84%E6%BA%90%E5%8C%85)
`use_cooldown` - 对物品添加使用冷却。
`use_remainder` - 将物品在消耗后替换为其他物品。

上述所有属性的示例：

```YAML
my_item:
  itemname: <gradient:#4B36B1:#6699FF>My Item
  Components:
    enchantment_glint_override: false
    durability: 10
    # if the material above isnt a normal tool, but say PAPER
    # The item will not have its durability lowered by actions by default
    # Example of making the tool lower its durability from hitting entities and breaking blocks
    #durability:
    #  value: 10
    #  damage_block_break: true
    # damage_entity_hit: true
    max_stack_size: 10
    fire_resistant: true
    hide_tooltip: true
    tool:
      #damage_per_block:                       # Optional, defaults to 1
      #default_mining_speed:                   # Optional, defaults to 1.0
      rules:
        - speed: 1.0
          correct_for_drops: true             # If mining the given blocks should drop or not
          material: DIAMOND_BLOCK             # The material this rule applies to, also supports list format
          #materials:
          #  - DIAMOND_BLOCK
          #  - NETHERITE_BLOCK
          # List of all tags can be found at https://minecraft.wiki/w/Tag#Block_tags_2
          tag: minecraft:mineable/axe         # The block-tag this rule applies to, also supports list format
          #tags:
          #  - minecraft:mineable/axe
          #  - minecraft:mineable/shovel
    food:
      nutrition: 2
      saturation: 2 
      #can_always_eat: false                   # Optional, default is false
    damage_resistant: is_fire
    enchantable: 1
    glider: true
    item_model: minecraft:example         #`assets/minecraft/models/item/example.json`
    tooltip_style: minecraft:example      #`assets/minecraft/textures/gui/sprites/tooltip/example_(background & frame)`
    use_remainder:
      #minecraft_type: DIAMOND
      #crucible_item: crucibleid
      #eco_item: ecoid
      #mmoitems_id: id
      #mmoitems_type: type
      oraxen_item: itemid
    use_cooldown:
      seconds: 1.2                        #Default is 1.0
      group: oraxen:example               #Default is `oraxen:itemid`, set to ""-blank to affect by material
    equippable:
      slot: HEAD
      #model: minecraft:example           Optional, primarily useful for Custom-Armor
      #camera_overlay: minecraft:example  Optional, used by carved_pumpkin etc, example; `assets/minecraft/textures/example.png`
      #equip_sound: item.armor.equip_chain
      #allowed_entities:                  Optional, defaults to all entities
      #  - PLAYER
      #  - SKELETON
      #dispensable: true                  Optional, default is true
      #swappable: true                    Optional, default is true
      #damage_on_hurt: true               Optional, default is true
```
:::

::::

### 物品模板（ItemTemplate）

与格式刷类似，该功能允许你将模板物品的属性快速应用至其他物品。

模板物品配置：
```YAML
template_item:
  template: true
  material: DIAMOND_SWORD
  ...
```

在你想要复制模板属性的物品配置中：
```YAML
template_item1:
  template: template_item
  displayname: 模板物品 1

template_item2:
  template: template_item
  displayname: 模板物品 2
  material: CLOCK
```

### 自定义名称（Custom Name）

改变显示在提示框顶部的名称，即物品名称。

:::: tabs

::: tab 1.20.5+

```YAML
my_item:
  itemname: "<red><bold>示例" # 示例名称
  #customname: "example" # 应当只用于保证与旧版的兼容性
```

:::

::: tab 1.18-1.20.4

```YAML
my_item:
  displayname: "<red><bold>示例" # 示例名称
```

:::

::::

### 材料（Material）

允许你修改物品的类型。

```YAML
my_item:
  material: WOODEN_SWORD
```

### 颜色（Color）

允许你修改某些物品（如皮革盔甲）的染色颜色。

```YAML
my_item:
  color: 3, 252, 136 # 此为 RGB 颜色格式
```

### 描述（Lore）

允许你在物品名称下添加自定义描述。

```YAML
my_item:
  lore:
  - "一行描述"
  - "<green>另一行描述"
```

### 注入 ID（injectID）

允许 Oraxen 识别物品，默认情况下设置为 true，且你不应调整这个设置。如果修改，则物品的机制就不再起效。

```YAML
my_item:
  injectID: false
```

### 禁止附魔（Disable Enchanting）

该选项允许你阻止指定物品通过铁砧或附魔台附魔。

不影响通过配置文件施加的附魔。

```YAML
my_item:
  disable_enchanting: true
```

### 隐藏物品（excludeFromInventory）

允许你将该物品在 Oraxen 的物品列表中隐藏。设置后它将不再在该界面中可见，但仍然可以通过 [Oraxen 的给予命令](usage.commands.md#获取物品)获取。在应用至其他插件例如界面图标时非常有用。

```YAML
  excludeFromInventory: true
```

### 耐久度（durability）

允许你修改物品的耐久度（不很有用）。

::: info 提示
在 Oraxen 1.174.0 之后的版本，所有低于 1.20.5 的服务器都不再使用该功能。
1.20.5+ 的服务器使用 `max-durability` 标签而非该设置。
:::

```YAML
my_item:
  durability: 10
```

### 不可损坏（unbreakable）

这会使物品不消耗任何耐久（真正意义上的无限耐久，通过原版 NBT 标签而非插件实现）

```YAML
my_item:
  unbreakable: true
```

### 不可堆叠（Unstackable）

这会让物品无法堆叠。对诸如背包等独特物品的限制堆叠非常有用。

```YAML
my_item:
  unstackable: true
```

### 物品标志（ItemFlags）

允许设置物品的标志（ItemFlags），所有可用的标志可在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/ItemFlag.html)浏览。

```YAML
my_item:
  ItemFlags:
    - HIDE_ENCHANTS
    - HIDE_ATTRIBUTES
    - HIDE_UNBREAKABLE
    - HIDE_DESTROYS
    - HIDE_PLACED_ON
    - HIDE_POTION_EFFECTS
```

### 药水效果（PotionEffects）

这允许你向你的药水类物品添加自定义药水效果。可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)浏览可用药水效果。

```YAML
my_item:
  PotionEffects:
    # - type: 在这里获取完整效果列表: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html
    # - duration: 单位为刻
    # - amplifier: 药水效果等级
    # - ambient: true/false, 是否产生更多渐变的粒子效果
    # - particles: true/false, 是否显示粒子效果
    # - icon: true/false, 药水效果是否拥有图标
    - { type: WITHER,
        duration: 200,
        amplifier: 2,
        ambient: false,
        particles: true,
        icon: true }
```

### 属性修饰符（AttributeModifiers）

允许你向物品添加 Minecraft 原版的属性。它们非常强大，能够让你制作增加生命上限、提升玩家速度的物品。可以在[这里](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)获取完整的属性列表。

```YAML
my_item:
  AttributeModifiers:
    # - attribute: 在这里获取完整列表: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html
    # - operations: 0 表示 ADD_NUMBER, 1 表示 ADD_SCALAR, 2 表示 MULTIPLY_SCALAR_1;
    # - slot: HAND, OFF_HAND, FEET, LEGS, CHEST 或 HEAD
    - {
       attribute: GENERIC_MOVEMENT_SPEED, 
       amount: 0.1, 
       operation: 0, 
       slot: HAND
      }
```

### 附魔（Enchantments）

若你想要为物品添加附魔（甚至是超出原版等级上限的附魔，如锋利 15），你可以试着编辑这部分配置。

```YAML
my_item:
  Enchantments:
    protection: 4
    flame: 34
    sharpness: 18
```

下文为完整的原版可用附魔列表：

```
protection
fire_protection
feather_falling
blast_protection
projectile_protection
respiration
aqua_affinity
thorns
depth_strider
frost_walker
binding_curse
sharpness
smite
bane_of_arthropods
knockback
fire_aspect
looting
sweeping
efficiency
silk_touch
unbreaking
fortune
power
punch
flame
infinity
luck_of_the_sea
lure
loyalty
impaling
riptide
channeling
multishot
quick_charge
piercing
mending
vanishing_curse
soul_speed
```

### 如何指定自定义模型数据（Custom Model Data）？

```YAML
my_item:
  Pack:
    generate_model: true
    parent_model: "custom/items/generated_elite"
    textures:
      - custom/items/elite_zombie_walk
    custom_model_data: 452
```

### 资源包设置

该部分有独立的章节，你可以在[这里](configuration.item-appearance.md)继续阅读。

### 机制选项

该部分有独立的章节。你可以在[这里](mechanics.introduction.md)继续阅读。