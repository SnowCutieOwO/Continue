# 来源

配置经验来源的教程

**经验来源（Sources）** 是能给予玩家技能经验的特定游戏行为。包括挖矿和击杀实体。每个技能的经验来源都在 `sources` 文件夹中，名称分别对应。每个来源的经验数量均可修改，且可添加新来源并对其进行配置。

## 默认配置

`default` 部分在来源配置中用于减少重复工作量。其下的每个设置都会复制到每条 `sources` 下的来源配置，除非对应区域进行了覆盖配置。

例如，下面是带有默认配置的来源配置：

``` YAML
default:
  type: brewing
  trigger: takeout
  menu_item:
    material: potion
sources:
  awkward:
    ingredient: nether_wart
    xp: 10
    menu_item:
      potion_data:
        type: awkward
```

与下面不带默认配置的来源配置等价：

``` YAML
sources:
  awkward:
    type: brewing # 从前面的默认配置复制而来
    trigger: takeout # 从前面的默认配置复制而来
    ingredient: nether_wart
    xp: 10
    menu_item: # menu_item 部分配置与前面的默认配置相结合
      material: potion # 从前面的默认配置复制而来
      potion_data: # 来源本身要求的设置键
        type: awkward
```

默认配置使得多个共用设置的相同来源技能有更简洁的配置结构。

## 类型

每个来源都需要有一个用于决定动作类型的 `type`。如果你发现某些配置没有这部分配置，则表明它使用来自 `default` 部分的值。

每个来源都有对应名称，即设置部分的键名。这个名称可用于标签部分的来源引用。每个技能的经验来源都不可有重复名称。

::: info

部分选项包含复数形式单词的列表，如 `block` 与 `blocks`。如果配置中有这类名称，则不应使用其单数形式作键名。

:::

### 全局设置

如下设置对所有类型的经验来源通用：

* `xp` - 经验来源给予的经验值。此为基准数值，即不包含任何能力、权限或物品修饰符的倍率。（必填）
* `display_name` - 菜单中用于表示来源的可读名称。默认来源的名称已经在消息文件的 `sources.[类型].[名称]` 部分设置。若你需要为新建经验来源覆盖已有消息或本地化文本，则你就需要在来源配置中填写 `display_name` 项。
* `menu_item` - 经验来源菜单中代表该类型来源的物品。可以在诸如 `material` 的地方使用其他键的变量，以此在默认部分单独设置一个 `menu_item`。见[#菜单物品](sources.md)了解详情。
  * `Oraxen` 物品可以通过 `oraxen:` 开头的物品 ID 显示。例如，`menu_item: oraxen:mythril` 会使用 Oraxen 中对应的物品，并包含其完整 NBT。这相当于在 `menu_item` 上直接定义了一串字符串值，而不是像普通物品那样展开了更详细的设置。
* `unit` - 用于定义部分动态经验来源变量的名称，如每点伤害获取的防御经验值，或每点铁砧消耗经验获取的锻造经验值。只有部分需要单位才可显示的经验值才需要。见指定类型部分获取可填入的值列表。
* `income_per_xp` - 基于获取的经验值给予的经济数量。仅在[主配置](main-config.md)启用了职业的情况下有效。该设置与主配置的同名设置作用相同，但此设置优先级更高，可按经验来源分别覆盖。与 income 和 income_experience 互斥。
* `income` - 触发该经验来源时给予固定数量的钱。仅在启用职业的情况下有效。与 income_per_xp 和 income_expression 互斥。
* `income_expression` - 计算所获经济的表达式，与[主配置](main-config.md)中的 jobs.income.default.expression 作用相同。仅在启用职业的情况下有效。与 income_per_xp 和 income 互斥。

### 铁砧

该来源（`type: anvil`）会在玩家使用铁砧结合物品时给予经验。

#### 设置

* `left_item` - 决定铁砧内左侧格子有效物品的过滤列表。（必填）
* `right_item` - 决定铁砧内右侧格子有效物品的过滤列表。（必填）
* `multiplier` - 基础经验值的乘值变量。目前只能填入 `{repair_cost}`，即铁砧内消耗的经验数量。

### 方块

该来源（`type: block`）会在玩家挖掘或交互方块时给予经验。选项可用于设置复杂经验来源，如多种方块或指定状态的方块。

#### 选项

* `block` - 方块类型/材料。必须为全小写的有效 Bukkit [材料名](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)。
  * `Oraxen` 物品可以通过 `oraxen:` 开头的物品 ID 显示。例如，`block: oraxen:mythril_ore` 会使用 Oraxen 中对应的方块，而无需手动定义 `state`。
* `blocks` - 用于为多个方块分至同一经验来源组的列表。会覆盖 `block` 选项。
* `trigger` - 方块的动作类型。可以为 `break` 或 `interact`。`break` 即为玩家左键破坏方块，`interact` 则为右键点击。（必填）
* `triggers` - 多个触发类型。
* `check_replace` - 玩家放置的方块是否给予经验。若为 true，放置的方块将无法给予经验值。若为 false，只要方块匹配上述设置，即可给予经验。默认为 true。
* `state` - 一系列键名，用于决定方块匹配的状态。
* `states` - 一系列列表，用于匹配列表中的方块状态。
* `after_state` - 交互后的下一刻检查的方块状态。若方块不匹配 `after_state` 中设置的状态，则不会获得经验。仅在 `trigger` 设置为 `interact` 时有效。
* `after_states` - 交互后的下一刻检查的方块状态。经验只会在方块匹配其内任一状态时给予。
* `state_multiplier` - 带有方块状态的表达式，用于乘算给予的基础经验值 `xp`。
* `support_block` - 用于表示失去支撑即会坠落的重力类方块。可填入 `above`、`below`、`side` 和 `none`。这可以确保方块不会在间接破坏后被标记为由玩家放置。
* `trunk` - 方块类型是否为原木。“伐树者”能力通过该选项检查可破坏的方块。默认为 false。
* `leaf` - 方块类型是否为树叶。“伐树者”能力通过该选项检查可破坏的方块。默认为 false。

### 炼药

炼药经验来源（`type: brewing`）会在玩家通过炼药台制作药水时给予经验。

#### 选项

* `ingredient` - 用于设置有效药水原料的过滤列表。
* `trigger` - 给予经验的时间，可为 `brew` 或 `takeout`。使用前者会导致自动炼药机会持续给予放置炼药台的玩家经验。

### 伤害

伤害经验来源（`type: damage`）在玩家受伤时给予经验。默认来源中，防御与敏捷经验来源均依靠它。返回的经验值为 `xp` 键的值与所受伤害的乘积。

#### 选项

* `cause` - 造成伤害的来源。必须为有效的全小写 Bukkit [伤害原因](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html)。
* `causes` - 多个伤害来源的列表。
* `excluded_cause` - 排除的伤害来源列表。如果不指定 `cause`/`causes`，则该列表效果与黑名单相同。
* `excluded_causes` - 多个伤害来源的列表。
* `damager` - 对玩家造成伤害的实体列表。可为 `mob`、`player` 或任一全小写的 Bukkit [实体类型](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)。设置该选项后会自动忽略非实体伤害，如坠落伤害。
* `damagers` - 多个有效实体类型的列表。
* `excluded_damager` - 排除的伤害来源实体列表。
* `excluded_damagers` - 多个排除的伤害来源实体列表。
* `must_survive` - 要求玩家必须受伤后仍然存活才可获得经验。默认为 true。
* `use_original_damage` - 结算经验是否使用无任何减伤（盔甲、属性、能力等）的原数值。默认为 true。
* `cooldown_ms` - 经验获取的时间间隔，单位为毫秒（默认值为 200）。

### 附魔

附魔经验来源（`type: enchanting`）会在玩家通过附魔台为物品增加魔咒时给予经验。

#### 选项

* `item` - 获得经验时参与附魔的物品。（必填）
* `unit` - 多倍经验的单位。目前必须为 `'{sources.units.enchant_level}'`

### 实体

实体经验来源（`type: entity`）会在玩家击杀或攻击实体时给予经验。

#### 选项

* `entity` - 有效的 Bukkit 实体类型，用于指定获得经验所需击杀/攻击的实体。（必填）
* `trigger` - 给予经验的时机，可为死亡时（`death`）或受伤时（`damage`）。（必填）
* `triggers` - 多个给予经验的时机设置。
* `damager` - 给予经验时匹配的伤害来源，可为 `player`、`projectile`、`thrown_potion`。
* `damagers` - 给予经验时匹配的多个伤害来源。
* `scale_xp_with_health` - 若 `trigger` 为 `damage`，则攻击经验倍率会受实体生命上限影响。击杀实体获取的总经验无论使用何种方法均相同。默认为 true。
* `cause` - 算作有效来源的伤害原因。必须为有效的 Bukkit [伤害原因](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html)。
* `causes` - 算作有效来源的多个伤害原因。
* `excluded_cause` - 排除的伤害来源列表。如果不指定 `cause`/`causes`，则该列表效果与黑名单相同。
* `excluded_causes` - 多个伤害来源的列表。

### 钓鱼

钓鱼经验来源（`type: fishing`）会在玩家钓鱼时给予经验。

#### 选项

* `item` - 给予经验时所需钓上的物品。

### 砂轮

砂轮经验来源（`type: grindstone`）会在玩家通过砂轮祛魔时给予经验。

#### 选项

* `multiplier` - 结算经验值通过该值与 `xp` 相乘得到。目前只能填入 `'{total_level}'`，即为砂轮去除所有附魔的等级。

### 物品消耗

物品消耗经验来源（`type: item_comsume`）会在玩家消耗药水或物品时给予经验。

#### 选项

* `item` - 给予经验时所需消耗的物品。（必填）

### 跳跃

跳跃经验来源（`type: jumping`）会在玩家跳跃时给予经验。

#### 选项

* `interval` - 给予经验所需的跳跃次数。每次跳跃给予的经验数为 %\frac{xp}{interval}%。默认为 100。

### 使用魔法能力

魔法能力经验来源（`type: mana_ability_use`）会在玩家使用魔法能力时给予经验。给予的经验总数为消耗的魔力与 `xp` 相乘所得值。

#### 选项

* `mana_ability` - 给予经验时使用的魔法能力。
* `mana_abilities` - 给予经验时使用的多个魔法能力。

### 投掷药水

投掷药水经验来源（`type: potion_splash`）会在玩家使用喷溅型或滞留型药水时生效。

#### 选项

* `item` - 获取经验所需的药水类型。（必填）

### 统计数据

统计数据经验来源（`type: statistic`）会在玩家的某一原版统计数据值发生变动时给予经验。经验通过 `skills.yml` 下耐力部分的 `xp_gain_period` 设置的间隔给予。默认为五分钟。若要让经验来源生效，必须将 `spigot.yml` 下的 `stats.disable-saving` 设置为 false（默认即是如此，因此除非你先前有过改动，否则无需检查）。

#### 选项

* `statistic` - 跟踪的统计数据。必须为有效的全小写 Bukkit [统计数据](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Statistic.html)。（必填）
* `multiplier` - 基础经验值的乘值变量。（默认为 1）
* `minimum_increase` - 检查时间内触发经验增加的统计数据增加值下限。若未到达最小值，会累积至下一次检查时间中。（默认为 1）

## 物品过滤

多个含有 `item`、`ingredient` 或相似设置的经验来源设置可以使用物品过滤格式，用于更精确地过滤物品。可以通过这个功能限制完全相同的物品，或在判断多个物品时更宽泛。

### 全局选项

* `material` - 物品的材料名。必须为有效的全小写 Bukkit [材料名](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)。
* `materials` - 多个物品的材料名。
* `excluded_material` - 排除的物品材料名。
* `excluded_materials` - 排除的多个物品材料名。
* `category` - 匹配一系列物品的分类名称。有效值为 `weapon`、`armor`、`tool`、`fishing_junk` 和 `fishing_treasure`。

### 直接值

在部分你只要求一种物品的情况下，你可以将材料名指定为值而非子设置。

例如：

``` YAML
ingredient: nether_wart
```

与如下设置等价：

``` YAML
ingredient:
  material: nether_wart
```

### 元选项

可以用于更进一步地设置所需的物品而非单纯填入材料名。这些选项都与全局选项为同一缩进（和 `item` 或 `ingredient` 一样为一级缩进）。

* `display_name` - 匹配物品的显示名称。
* `lore` - 匹配物品的描述。
* `potion_data` - 匹配物品的药水数据。
  * `type` - 有效的全小写 Bukkit [药水类型](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)。
  * `types` - 多个有效的药水类型。
  * `excluded_type` - 排除的药水类型。
  * `excluded_types` - 多个排除的药水类型。
  * `extended` - 药水是否为延时增强型。
  * `upgraded` - 药水是否为效果增强型。
* `custom_model_data` - 用于匹配物品的自定义模型数据。物品的材料名与该设置均需完全匹配才有效。

### 示例

如下为 item_consume 来源的示例物品过滤器：

``` YAML
drink_regular:
  type: item_consume
  item: # 物品过滤部分名称
    material: potion # 消耗的物品必须为药水
    potion_data:
      # 药水类型不能为粗制、浓稠、平凡或普通水瓶
      excluded_types: [ mundane, thick, water, awkward ]
      extended: false # 药水不能为延时增强型
      upgraded: false # 药水不能为效果增强型
  xp: 20
```

在酿造来源中的示例物品过滤器：

``` YAML
regular:
  type: brewing
  trigger: takeout
  ingredient: # 物品过滤部分名称
    # 原料不能为如下物品
    excluded_materials: [ redstone, glowstone_dust, nether_wart, gunpowder, dragon_breath ]
  xp: 15
```

## 菜单物品

正如上述所说，`menu_item` 部分定义经验来源菜单的图标。该部分的格式在 [Slate 维基的物品章节](https://wiki.aurelium.dev/slate/items)中有详细讲述。

内建变量可以引用 menu_item 内其他部分的物品。

``` YAML
default:
  type: block
  trigger: break
  menu_item:
    material: '{block}'
```

如上默认部分配置的示例会替换 `{block}` 变量为每个来源配置中 `block` 的值。如果泥土来源为 `block: dirt`，则返回的菜单物品材料即为 `material: 'dirt'`。

## 标签

来源文件的 `tags` 部分用于配置某个能力或机制的来源列表。你不能在这里添加或移除标签，只能修改标签所在列表。

例如，`farming_luck_applicable` 标签是“耕作幸运”特征的双倍掉落奖励触发的来源。

### 通配与排除

默认情况下你不会在列表中看到来源名称，而是由一个 `*` 表示。这会在标签里添加所有来源至技能。

若你想要从列表中排除某个来源且已经有了通配符，你可以将其开头加上 `!` 表示排除：

``` YAML
tags:
  farming_luck_applicable:
    - '*'
    - '!sugar_cane'
```

上述实例中，所有除了甘蔗的经验来源都会对耕作幸运生效。

``` YAML
tags:
  farming_luck_applicable:
    - wheat
    - potato
    - carrot
    - beetroot
```

这个实例中展示了耕作幸运只对小麦、土豆、胡萝卜和甜菜根生效。需要注意的是列表中使用的名称都是来源名称（在 `sources` 部分下的名称），而不是来源内的 `block` 值。