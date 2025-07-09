# 击杀任务

物品任务模块记录并处理玩家在岛屿上击杀生物的行为。你可以通过它给玩家发布需要击杀某个生物的任务。任务会在玩家击杀生物时检查进度并记录相关数据。

## 所需设置

### `required-entities`

完成任务所需击杀的实体。

该部分的示例配置可在下文找到。

#### 设置类型

配置

## 示例配置

``` YAML
# 使用的任务文件名称
mission-file: KillsMissions

# 任务在达到条件时是否自动并领取奖励.
auto-reward: true

# 是否在完成任务后重置玩家的生物击杀计数?
reset-after-finish: true

# 完成任务时给予的奖励.
rewards:
  commands:
    - 'eco give %player% 1000'
    - 'is admin msg %player% &e&l击杀 | &7成功完成任务 杀手 I!'
    - 'is admin msg %player% &e&l击杀 | &7你的剑才刚刚见血 ... 杀更多生物吧!'
    - 'is admin msg %player% &e&l击杀 | &7&o有关下个任务的更多信息, 请输入命令 /is missions 查看'

# 完成任务所需要击杀的实体种类及其数量.
required-entities:
  '1':
    types:
      - 'SKELETON'
      - 'CREEPER'
      - 'ZOMBIE'
      - 'SPIDER'
    amount: 5

# 菜单中使用的图标.
icons:
  not-completed:
    type: PAPER
    name: '&a杀手 I'
    lore:
      - '&7击杀 5 个敌怪.'
      - ''
      - '&6需要击杀:'
      - '&8 - &7x5 骷髅/苦力怕/僵尸/蜘蛛'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6已击杀敌怪: &7{1}/5'
      - '&6任务进度: &7{0}%'
      - '&c&l ✘ &7尚未完成'
  can-complete:
    type: PAPER
    name: '&a杀手 I'
    lore:
      - '&7击杀 5 个敌怪.'
      - ''
      - '&6需要击杀:'
      - '&8 - &7x5 骷髅/苦力怕/僵尸/蜘蛛'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6已击杀敌怪: &75/5'
      - '&6任务进度: &7100%'
      - '&a&l ✔ &7点击领取任务奖励.'
    enchants:
      DURABILITY: 1
    flags:
      - HIDE_ENCHANTS
  completed:
    type: MAP
    name: '&a杀手 I'
    lore:
      - '&7击杀 5 个敌怪.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6已击杀敌怪: &75/5'
      - '&6任务进度: &7100%'
      - '&a&l ✔ &7已领取过.'
```