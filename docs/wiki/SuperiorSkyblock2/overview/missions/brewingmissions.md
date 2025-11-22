# 酿造任务

酿造任务模块记录并处理玩家在岛屿上的炼药行为。你可以通过它给玩家发布需要酿造药水的任务。任务会在玩家炼药时检查进度并记录相关数据。

## 所需配置

### `required-potions`

完成任务所需的药水列表。

该部分的示例配置可在下文找到。

#### 设置类型

配置

## 示例配置

``` YAML
# 使用的任务文件名称
mission-file: BrewingMissions

# 任务在达到条件时是否自动并领取奖励.
auto-reward: true

# 是否在完成任务后重置玩家的炼药计数?
reset-after-finish: true

# 完成任务时给予的奖励.
rewards:
  commands:
    - 'eco give %player% 1000'
    - 'is admin msg %player% &e&l酿造 | &7成功完成了任务 炼药师 I!'
    - 'is admin msg %player% &e&l酿造 | &7你现在已经熟悉炼药了, 让我们更进一步吧.'
    - 'is admin msg %player% &e&l酿造 | &7&o有关任务的更多信息, 请输入命令 /is missions 查看'

# 完成任务所需要获得的物品种类及其数量.
required-potions:
  '1':
    # 酿造一瓶速度 II 药水.
    potions:
      '1':
        type: SPEED
        upgraded: true
        extended: false
        splash: false
    amount: 1

# 菜单中使用的图标.
icons:
  not-completed:
    type: PAPER
    name: '&a炼药师 I'
    lore:
      - '&7酿造 1 瓶速度 II 药水.'
      - ''
      - '&6所需物品:'
      - '&8 - &7x1 速度 II'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6已酿制药水: &70/1'
      - '&6任务进度: &7{0}%'
      - '&c&l ✘ &7尚未完成'
  can-complete:
    type: PAPER
    name: '&a炼药师 I'
    lore:
      - '&7酿造 1 瓶速度 II 药水.'
      - ''
      - '&6所需物品:'
      - '&8 - &7x1 速度 II'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6已酿制药水: &71/1'
      - '&6任务进度: &7100%'
      - '&a&l ✔ &7点击领取任务奖励.'
    enchants:
      DURABILITY: 1
    flags:
      - HIDE_ENCHANTS
  completed:
    type: MAP
    name: '&a炼药师 I'
    lore:
      - '&7酿造 1 瓶速度 II 药水.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6已酿制药水: &71/1'
      - '&6任务进度: &7100%'
      - '&a&l ✔ &7已经领取.'
```