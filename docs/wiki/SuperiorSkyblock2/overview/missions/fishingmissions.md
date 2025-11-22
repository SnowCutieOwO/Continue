# 钓鱼任务

钓鱼任务模块记录并处理岛屿上玩家的钓鱼行为。你可以通过它给玩家发布需要钓鱼的任务。任务会在玩家钓鱼时检查进度并记录相关数据。

## 所需设置

### `required-caughts`

完成任务所需捕获的鱼。

该部分的示例配置可在下文找到。

#### 设置类型

配置

## 示例配置

``` YAML
# 使用的任务文件名称
mission-file: FishingMissions

# 任务在达到条件时是否自动并领取奖励.
auto-reward: true

# 是否在完成任务后重置玩家的方块计数?
reset-after-finish: true

# 完成任务时给予的奖励.
rewards:
  commands:
    - 'eco give %player% 2500'
    - 'is admin msg %player% &e&l钓鱼 | &7成功完成了任务 渔夫 I!'
    - 'is admin msg %player% &e&l钓鱼 | &7听说海里也能钓上其他物品...'
    - 'is admin msg %player% &e&l钓鱼 | &7&o有关下个任务的更多信息, 请输入命令 /is missions 查看'

# 完成任务所需要收集的物品种类及其数量.
required-caughts:
  '1':
    types:
      - 'RAW_FISH'
    amount: 5

# 菜单中使用的图标.
icons:
  not-completed:
    type: PAPER
    name: '&a渔夫 I'
    lore:
      - '&7做点鱼汤吧.'
      - '&7钓 5 条鱼.'
      - ''
      - '&6任务需求:'
      - '&8 - &7x5 任意 鱼'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$2,500'
      - ''
      - '&6钓鱼总数: &7{1}/5'
      - '&6总进度: &7{0}%'
      - '&c&l ✘ &7尚未完成'
  can-complete:
    type: PAPER
    name: '&a渔夫 I'
    lore:
      - '&7做点鱼汤吧.'
      - '&7钓 5 条鱼.'
      - ''
      - '&6任务需求:'
      - '&8 - &7x5 任意 鱼'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$2,500'
      - ''
      - '&6钓鱼总数: &75/5'
      - '&6总进度: &7100%'
      - '&a&l ✔ &7点击领取任务奖励.'
    enchants:
      DURABILITY: 1
    flags:
      - HIDE_ENCHANTS
  completed:
    type: MAP
    name: '&a渔夫 I'
    lore:
      - '&7做点鱼汤吧.'
      - '&7钓 5 条鱼.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$2,500'
      - ''
      - '&6钓鱼总数: &75/5'
      - '&6总进度: &7100%'
      - '&a&l ✔ &7已经领取.'
```