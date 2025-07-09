# 战利品

战利品表相关教程

## 概览

钓鱼和采集技能有掉落自定义战利品的能力，它们的配置位于 `loot` 文件夹下。对于钓鱼，`treasure_hunter` 能力对应稀有战利品，`epic_catch` 对应史诗战利品。采掘技能的 `metal_detector` 能力会给予稀有战利品，而 `lucky_spades` 会给予史诗战利品。

::: info 

能力触发的掉落几率在 `abilities.yml` 下分别配置，见“能力”章节了解更多。

:::

除了修改能力掉落的物品，这些文件还允许添加与能力无关的自定义战利品表，也允许将命令算作战利品，甚至为其他技能（如伐木和挖掘）设计战利品表。

## 文件结构

战利品表在 loot 文件夹中按技能分别存储。它们的名称即为对应的技能。默认情况下只有采掘与钓鱼战利品表。你也可以按格式为伐木与挖矿添加额外的战利品表。

### 战利品池

战利品池为一系列战利品条目。每个战利品表可拥有多个战利品池。默认的采掘和钓鱼战利品表即包含稀有和史诗战利品池。另外你也可以自行添加。

战利品池在战利品文件的 pools 部分设置。每个战利品池在配置内的名称不可重复。在采掘和钓鱼技能中，`rare` 与 `epic` 为用于技能的保留名称，因此不建议改动。

键：

* `base_chance` - 无能力加成下选中该战利品池的概率（1 = 1% 几率）（默认为 1）。
* `selection_priority` - 潜在选中的顺序，权重越高越有可能优先于啊其他道具池选中。
* `override_vanilla_loot` - 方块本身的掉落物是否被选定战利品替换。对钓鱼无效。（默认为 1）
* `chance_per_luck` - 玩家每点幸运属性对选定该战利品池几率的影响（0.1 = +0.1% 几率）（默认为 0）
* `require_open_water` - 仅对钓鱼技能有效。是否要求玩家在开放水域（5x5x5 的水）进行钓鱼。可用于防止挂机钓鱼农场刷取经验。（默认为 false）。

每个战利品池都有包含了一系列战利品条目的映射表。与奖励使用的格式相同，可在[此处](rewards.md)了解更多。

## 战利品条目

目前有两种战利品：物品与命令。每个战利品条目都有各自的必选及可选设置。在本章节中，可选键以“（可选）”标注，或有其缺省值。每个键都在下文解释：

通用键（任意战利品类型均生效）：

* `type` - 战利品类型，可为 `loot` 或 `command`
* `weight` - 战利品条目与池内其他条目相比的优先级。权重更高表示更有几率被选中（默认为 10）。
* `message` - 选中该战利品时发送的消息。支持彩色代码与 PlaceholderAPI 变量。
* `sources` - 限制该战利品生效的一系列来源或来源标签。来源名称应当与 `source_config.yml` 中的匹配。尚未支持自定义方块来源（可选）。
* `xp` - 选中该战利品时掉落的技能经验值（默认与原来源数量相同）

### 物品战利品（`type: item`）

物品战利品键：

* `material` - 物品的材料名，必须为有效的 Bukkit 材料名（五十大小写）。若低于 1.12 请使用 `材料名:ID` 的格式。
* `amount` - 物品的数量。可为固定数值如 `5` 或范围数值 `1-5`，即随机选择 1 至 5（含）个物品给予玩家。（默认为 1）
* `key` - 引用通过 `/skills item register` 注册的物品。若指定了该值，则上下的材料等设置均会被无视。
* `display_name` - 物品的显示名称，支持“&”彩色代码，但需要转义为“\&”。（可选）
* `lore` - 物品的描述。必须为列表，支持“&”彩色代码，但需要转义为“\&”。（可选）
* `enchantments` - 物品包含的一系列附魔，一行一个附魔。在附魔名称与等级间需以空格隔开，如`sharpness 5`。（可选）
* `potion_data` - 物品包含的药水设置，见下。（可选）
  * `type` - 药水类型，必须为有效的 Bukkit 药水类型。
  * `extended` - 是否为延时增强型。
  * `upgraded` - 是否为效果增强型。
* `custom_effects` - 效果映射表，见下。（可选）
  * `type` - 效果类型，必须为有效的 Bukkit 药水效果类型。
  * `duration` - 效果的持续时间，单位为刻
  * `amplifier` - 效果的倍率（从 0 起计，即实际的 1 级）
* `glow` - 物品是否含有附魔光泽。（可选）
* `nbt` - 物品包含的自定义 NBT 数据。（可选）
* `flags` - 物品包含的物品标志。（可选）
* `ignore_legacy` - 若为 true，在低于 1.13 的情况下，插件会试图跳过该物品的加载，以物品无法解析的问题。除非你同时在新旧版本的服务器上使用本插件，且对应物品只存在于最新版，否则不应使用该选项。插件能够自行将物品名称在新旧版本间转换。（可选）

## 示例

物品战利品的基础示例：

``` YAML
- type: item
  material: iron_ingot
  weight: 10
  amount: 1-3
```

带有显示名称、描述与附魔的更复杂的示例：

``` YAML
- type: item
  material: diamond_sword
  weight: 5
  amount: 1
  display_name: '<red>烈焰剑'
  lore:
    - '<gray>强大的武器'
    - ' '
    - '<blue>稀有'
  enchantments:
    - sharpness 5
    - fire_aspect 2
    - looting 3
```

带有自定义效果与基础药水数据的药水：

``` YAML
- type: item
  material: potion
  weight: 10
  amount: 1
  potion_data:
    type: speed
    upgraded: true
  custom_effects:
    - type: jump
      duration: 1000
      amplifier: 2
    - type: regeneration
      duration: 40
      amplifier: 3
```

通过物品标志隐藏附魔且通过 NBT 使用自定义模型数据的示例：

``` YAML
- type: item
  material: paper
  weight: 10
  amount: 1
  custom_model_data: 14
  enchantments:
    - knockback 2
  flags:
    - hide_enchants
```

## 命令战利品（`type: command`）

命令战利品会在玩家获得时执行命令，执行身份可为控制台或玩家。

命令战利品键：


* `executor` - 命令执行者的身份，可为 `console`（控制台）或 `player`（玩家）。（默认为 `console`）
* `command` - 执行的命令，无需开头的斜杠 `/`，支持 `{player}` 表示玩家名称以及所有 PlaceholderAPI 插件变量。

示例：

``` YAML
- type: command
  weight: 10
  executor: console
  command: say hi
```

## 实体战利品（`type: entity`）


实体战利品会在玩家获得时生成对应实体。目前仅钓鱼技能支持捕获实体战利品。

实体战利品键：

* `entity` - 捕获实体的类型。
  * 原版实体/生物通过名称设置（如 `entity: zombie`）
  * MythicMobs 需带前缀使用（如 `entity: mythicmobs:SkeletonKing`）
* `health` - 设置实体的生命值。覆盖默认值。
* `damage` - 设置实体的攻击力。覆盖默认值。
* `level` - 设置 AuraMobs 或 MythicMobs 的实体等级。
* `velocity` -
  * `horizontal` - 覆盖生成实体时默认的水平速度。
  * `vertical` - 覆盖生成实体时默认的垂直速度。
* `hand`、`off_hand`、`feet`、`legs`、`chest`、`head` - 设置捕获实体装备的物品。值为一系列映射表，使用的格式与普通物品战利品相同（即 `material`、`enchantments` 等）。

## 战利品选择

战利品选择的方式非常直白：

1. 战利品表由技能通过玩家的行为确认。对于基于方块的战利品，方块必须处于技能的受支持来源中（伐木、挖掘、采掘技能）。
2. 从最高权重开始选择战利品表中的战利品池。其被选中的概率基于 `base_chance` 与其他附加几率的和。若战利品池未被选中，则会尝试下一个选择权重最高的战利品池。如果没有任何选中的战利品池，则跳过下一步。
3. 基于权重从战利品池中选择一个战利品。权重越高越有可能被选中。实际几率由公式 $\frac{权重}{池内所有权重和}$ 决定。

## 自定义战利品表

全新的战利品表文件可以为任何带有方块或实体来源的技能创建。这表示下列新战利品表文件可以存在于 `loot/` 文件夹：

* `farming.yml`
* `foraging.yml`
* `mining.yml` 
* `mob.yml` 

### 实体

对于实体战利品表，可向战利品条目内加入 `mobs` 列表来设置掉落的实体。你也应当在文件开头指定 `type: mob`。例如，如下战利品条目会使得烈焰人掉落一个自定义附魔书（来自其他插件）。

``` YAML
type: mob
pools:
  adrenaline:
    base_chance: 0.5
    loot:
      - type: item
        material: enchanted_book
        enchantments: [adrenaline 1-3]
        mobs: [blaze]
```

### 方块

方块战利品表必须在文件开头带有 `type: block` 设置。在指定 `sources` 列表时，值必须与对应的 `sources` 配置文件内使用的名称相同（并非材料名称）。

如下示例为自定义耕作战利品表，有 0.05% 的几率在收获胡萝卜时获得附魔金苹果。插件会自动识别成熟的作物（带生长阶段的作物）与自然生成的作物（如南瓜与西瓜）。

``` YAML
type: block
pools:
  carrot:
    base_chance: 0.05
    loot:
      - type: item
        material: enchanted_golden_apple
        amount: 1
        sources: [carrot]
```