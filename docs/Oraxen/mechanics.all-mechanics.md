# 所有机制
默认可用的所有机制与按分类整理的介绍

## 杂项

### 自定义食物

这个机制允许你为任何食物有关的物品设置相关的属性。

这表示你可以制作自定义饱食度或饱和度恢复量的食物。

你也能够设置替代物品，即原物品消耗后出现的另一物品。

下文为用到了本机制的自定义食物设置：

```YAML
Mechanics:
  food:
    hunger: 10
    saturation: 10
    replacement:
      oraxen_item: any_oraxen_itemid      # 也可为 minecraft_type 或 crucible_item
    effect_probability: 0.35              # 生效几率，默认为 1.0 即 100%
    effects:
      hunger:                             # 须为有效药水效果，完整列表请见 https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html 
        amplifier: 1                      # 未设置则默认值为 0
        duration: 20                      # 单位为秒的持续时间。 未设置则默认值为 1 秒
        is_ambient: true                  # 未设置则默认值为 true
        has_particles: true               # 未设置则默认值为 true
        has_icon: true                    # 未设置则默认值为 true
      night_vision:
        duration: 60
```

### 背包

这允许你将任何物品转化为背包。

::: info 提示
这个机制可能会导致物品复制漏洞！

如果你发现了相关问题，请提交[漏洞报告](https://github.com/oraxen/oraxen/issues/new?assignees=&labels=bug&template=bug-report.yml&title=%5BBUG%5D+%3Cname+for+bug%3E)，我们会尽可能尝试修复！
:::

::: warning 警告
此为已知复制漏洞，如果你的背包使用了诸如纸等的可堆叠材料，请确保物品能像下文配置的那样不可堆叠。
:::

#### 单物品配置

```YAML
backpack:
  displayname: backpack
  material: PAPER
  unstackable: true # 推荐为物品设置不可堆叠，以防止上述提及的漏洞。
  Mechanics:
    backpack:
      rows: 4
      title: "<red>Backpack"                      # 可选项，默认填入的内容为："Backpack"
      open_sound: "entity.shulker.open"       # 可选项，默认填入的内容为："entity.shulker.open"
      close_sound: "entity.shulker.close"     # 可选项，默认填入的内容为："entity.shulker.close"
```

### 音乐唱片

这允许你制作带有自定义音效的唱片。

若要添加自定义音效，只需简单地按照下文示例并将其添加至 `Oraxen/sound.yml` 即可。

::: warning
任何立体音效都不会在指定位置或跟随实体播放。

若你想要做到这样的效果，请确保你的 .ogg 音效文件为单声道格式。
:::

`song` 为你在 `sound.yml` 定义的 `命名空间:音效名称`。

如果你的 `sound.yml` 如下文所示：

```YAML
sounds:
  my_music_disc_song.mysong:
    category: record
    sound: mysong.ogg
```

这表示你的 .ogg 文件位于 `Oraxen/sounds/mysong.ogg`，你的音效 ID 为 `my_music_disc_song.mysong`，命名空间为 minecraft。

若你正在将 sounds.json 导入其他命名空间，则一般情况下它就不会为 minecraft。

```YAML
Mechanics:
  music_disc:
    song: "minecraft:my_music_disc_song.mysong"
```

### 耐久度

这允许你修改 Oraxen 创建物品的耐久度。原版的 Minecraft 并不能用于处理这样的机制，这也就是这个系统不够完美的原因。你不会看见物品上的实际耐久值，它最多只能以百分比的形式显示。这也意味着如果你创建了一个基于木镐的物品（默认情况下耐久只有 59 点），你将其的耐久修改为了 5900，你仍然只能在物品上看见 59 点耐久，但是你需要使用 100 次工具才能让它减少 1 点耐久。另外，耐久的提示框部分是能正确显示数值的。

#### 单物品配置

这里有两个选项可供使用：ratio（比率）与 fixed_amount（固定值）。你只能为一个物品选择其中一种。前者允许你按百分比修复物品耐久度（0.15 则表示为物品恢复 15% 耐久，1.0 表示完全修复物品）。后者则允许你为物品恢复指定数值的耐久度（输入 10 则表示它可以为物品恢复 10 点耐久值）。

```YAML
Mechanics:
  durability:
    value: 5000 # 钻石剑的默认耐久为 1561 点
```

### 杂项机制

这个机制能让你对物品做出一些小改动。

它们所实现的功能一般可以望文生义。

```YAML
Mechanics:
  misc:
    breaks_from_cactus: true
    burns_in_fire: true
    burns_in_lava: true
    disable_vanilla_interactions: false
    can_strip_logs: false
    piglins_ignore_when_equipped: false
    compostable: false
    allow_in_vanilla_recipes: true
```

### 修复

这个机制允许你使用一个物品修复其他物品（可以是原版物品的耐久度，或 Oraxen 的自定义物品耐久度）。默认情况下这个机制在铁、金与钻石齿轮中使用。若要使用它们，你只需将其拖动至待修复物品上并点击交换即可。

#### 单物品配置

```YAML
Mechanics:
  repair:
    ratio: 0.10 # 10%
    fixed_amount: 10 # 或 10 点耐久
```

#### 全局配置

若你启用了 `oraxen_durability_only`，则这个机制只会对使用了 Oraxen 耐久系统的物品生效。

```YAML
repair:
  enabled: true
  oraxen_durability_only: false
```

### 执行命令

这允许你（以控制台、玩家或管理员身份）执行命令。这个选项一般不那么优雅，但可以解决很多问题。你可以通过这个部分创建使用冷却，或是检查玩家是否有指定权限再使用物品（在命令执行时减少一个该物品）

#### 单物品配置

```YAML
Mechanics:
  commands:
    cooldown: 5 # 单位为秒的示例冷却时间。此项可选
    permission: "my.awesome.perm" # 所需权限。 此项可选
    one_usage: true # 是否为一次性（使用后消耗）默认：false
    console:
      # 示例：杀死玩家
      - "kill %p%"
    player:
      # 示例：玩家执行 /spawn
      - "spawn"
    opped_player:
      # 示例：玩家给予自己一把钻石剑
      - "give diamond_sword 1"
```

### 盔甲效果

这允许你向盔甲（或帽子）绑定药水效果，且使其只在装备时有效。

#### 单物品配置

[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)是可供使用的完整药水效果列表。

```YAML
Mechanics:
  armor_effects:
    night_vision: # 药水效果类型
      duration: 10
      amplifier: 0
      ambient: true # 让药水效果产生更多半透明的利粒子效果
      particles: true # 是否产生粒子效果
      icon: true # 是否带有药水效果图标
```

你也可以设置套装效果。

```YAML
Mechanics:
  armor_effects:
    night_vision:
      requires_full_set: true
      ...
```

### 方块与音符盒

这个机制允许你让某个物品像方块那样使用。这些机制有些特殊，你可以参阅[对应的教程章节](mechanics.noteblock-mechanic.md)。

### 点击操作

这个机制允许你在玩家点击方块或家具时执行多样的事件。它自定义性较强，因此也需要参阅[对应的教程章节](mechanics.all-mechanics.clickaction-mechanic.md)。

### 粒子效果

是否想让玩家在持有物品时显示炫酷的粒子效果？粒子效果机制就是你的最佳选择！你可以在这里找到所有可使用的粒子效果名称：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html

#### 单物品配置（简明）

```YAML
Mechanics:
  aura:
    type: simple # 可用类型: [ simple, ring, helix ]
    particle: PORTAL
```

### 帽子

是否想让这个物品可以戴在头上？使用这个机制就可以实现。

#### 单物品配置（简明）

```YAML
Mechanics:
  hat:
    enabled: true
```

### 化形

通过这个机制，你可以通过皮肤机制为物品设置不同的外观。

#### 单物品配置

```YAML
Mechanics:
  skinnable: {}
```

### 物品类型

通过这个机制，你可以修改 OraxenBlocks 检测的物品类型。请确保使用在[方块机制章节](mechanics.noteblock-mechanic.md)内声明的类型。

#### 单物品配置

```YAML
Mechanics:
  itemtype:
    value: SUPER_MATERIAL # your itemType
```

### 灵魂绑定

通过这个机制，你可以防止玩家在死亡时丢失这个物品。

#### 单物品配置

```YAML
soulbound:
  lose_chance: 0
```

### 自定义机制

这个机制允许你自定义事件、条件与动作。因为它相当特殊，因此你可以前往[对应的教程章节](mechanics.all-mechanics.custom-mechanics.md)进行阅读。

### 外观

这个机制会允许该物品成为化形机制的外观，外观与可化形物品的实际物品必须相同才可生效。

#### 单物品配置

```YAML
Mechanics:
  skin: 
    consume: true # 消耗 1 个外观物品
```

## 战斗

### 雷击

是否幻想能天打雷劈？这就是为你准备的。

#### 单物品配置

```YAML
 Mechanics:
   thor:
    lightning_bolts_amount: 5 # 生成的闪电数量
    random_location_variation: 1.5 # 闪电落下的随机范围大小（单位为格）
    delay: 20000 # 单位为毫秒 (20000毫秒 = 20秒)
```

### 生命窃取

想在攻击对手时偷取他们的生命值吗？

#### 单物品配置

```YAML
Mechanics:
  lifeleech:
    amount: 2 # 从对手处偷取的生命值点数，1 点生命 = 1/2 颗心
```

### 震爆

震爆是一种炫酷的机制，它会创建一个锥形的粒子效果，并以此作为命中范围攻击敌人。

#### 单物品配置

```YAML
  Mechanics:
  energyblast:
    delay: 20000
    length: 5
    damage: 10.0
    particle:
      type: REDSTONE # 仅 REDSTONE 粒子可修改大小与颜色。
      size: 1
      color:
        red: 0
        green: 255
        blue: 255
```

### 凋零之首射弹

右键射出凋零之首！

#### 单物品配置

```YAML
Mechanics:
  witherskull:
    charged: false # 充能的凋零之首会破坏方块
    delay: 3000 # 单位为毫秒 (3000毫秒 = 3秒)
```

## 耕作

### 收获

收获允许你自动收割和补种一定范围内的农作物。

#### 单物品配置

```YAML
Mechanics:
  harvesting:
    cooldown: 10000 # 10 秒冷却时间
    radius: 5 # 点击方块的触发范围
    height: 3 # 高度
```

### 范围挖掘

范围挖掘允许你一次挖掘多个方块。默认情况下这个机制会用在锤子上，表现为你可以一次挖掘 3x3 及以上的方块。

#### 单物品配置

```YAML
Mechanics:
  bigmining:
    radius: 1 # 以被挖掘方块为中心的破坏范围
    depth: 1
```

### 自动熔炼

自动熔炼允许你在挖掘铁矿和金矿时立即熔炼它们。兼容时运与精准采集。

#### 单物品配置

```YAML
Mechanics:
  smelting:
    enabled: true
    play_sound: true
```

### 经验装瓶

这个机制能将你获得的经验值右键转化为附魔之瓶。你可以自定义损失经验值的百分比。

#### 单物品配置

比率（ratio）对应了转化为附魔之瓶与消耗经验值的比值。

```YAML
Mechanics:
  bottledexp:
    ratio: 0.95 # 每转化 1 个附魔之瓶就需要消耗 1/20 的经验值
```

### 全局配置

```YAML
bottledexp:
  enabled: true
  durability_cost: 1
```

### 挖掘基岩

::: warning
这个机制基于 ProtocolLib，如果你不能使用或未安装 ProtocolLib，你需要禁用这个选项。
:::

#### 单物品配置

硬度为破坏动画切换的间隔，概率则为挖掘后掉落基岩的概率（0.10 表示 10%，0.5 表示 50%，而 1.0 表示 100%）

```YAML
Mechanics:
  bedrockbreak:
    hardness: 10
    probability: 1
```

#### 全局配置

若你将 `disable_on_first_layer` 设置为了 true，则玩家将不能挖掘最底层的基岩。`durability_cost` 则为挖掘一次基岩成功后损失的耐久值。

```YAML
bedrockbreak:
  enabled: true
  disable_on_first_layer: false
  durability_cost: 500
```