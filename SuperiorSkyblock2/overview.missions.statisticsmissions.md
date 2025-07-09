# 统计任务

统计任务模块记录并处理玩家的统计数据。你可以通过它给玩家发布需要做某些事的任务。任务会在玩家统计数据变动时检查进度并记录相关数据。

## 所需设置

### `required-statistics`

完成任务所需的统计数据。

该部分的示例配置可在下文找到。

#### 设置类型

配置

## 示例配置

``` YAML
# 使用的任务文件名称
mission-file: StatisticsMissions

# 任务在达到条件时是否自动并领取奖励.
auto-reward: true

# 完成任务时给予的奖励.
rewards:
  commands:
    - 'eco give %player% 1000'
    - 'is admin msg %player% &e&l飞行 | &7成功完成了任务 飞翔者 I!'
    - 'is admin msg %player% &e&l飞行 | &7&o有关下个任务的更多信息, 请输入命令 /is missions 查看'

# 完成任务所需要击杀的实体种类及其数量.
required-statistics:
  '1':
    statistics:
      - 'FLY_ONE_CM'
    amount: 1000

# 菜单中使用的图标.
icons:
  not-completed:
    type: PAPER
    name: '&a飞翔者 I'
    lore:
      - '&7飞行总距离达到 1000 格方块.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6飞行距离: &7{value_fly_one_cm}/1000'
      - '&6任务进度: &7{0}%'
      - '&c&l ✘ &7尚未开始'
  can-complete:
    type: PAPER
    name: '&a飞翔者 I'
    lore:
      - '&7飞行总距离达到 1000 格方块.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6飞行距离: &71000/1000'
      - '&6任务进度: &7100%'
      - '&a&l ✔ &7点击领取任务奖励.'
    enchants:
      DURABILITY: 1
    flags:
      - HIDE_ENCHANTS
  completed:
    type: MAP
    name: '&a飞翔者 I'
    lore:
      - '&7飞行总距离达到 1000 格方块.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6飞行距离: &71000/1000'
      - '&6任务进度: &7100%'
      - '&a&l ✔ &7已经领取.'
```