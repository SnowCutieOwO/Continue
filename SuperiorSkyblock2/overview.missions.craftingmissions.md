# 合成任务

合成任务模块记录并处理玩家在岛屿上的物品合成行为。你可以通过它给玩家发布需要合成物品的任务。任务会在玩家合成物品时检查进度并记录相关数据。

## 所需配置

### `craftings`

完成任务所需的物品列表。

该部分的示例配置可在下文找到。

#### 设置类型

配置

## 示例配置

``` YAML
# 使用的任务文件名称
mission-file: CraftingMissions

# 任务在达到条件时是否自动并领取奖励.
auto-reward: true

# 完成任务时给予的奖励.
rewards:
  commands:
    - 'eco give %player% 1000'
    - 'is admin msg %player% &e&l合成 | &7成功完成了任务 手艺人 I!'
    - 'is admin msg %player% &e&l合成 | &7你现在已经熟悉制作物品了, 让我们更进一步吧.'
    - 'is admin msg %player% &e&l合成 | &7&o有关任务的更多信息, 请输入命令 /is missions 查看'

# 完成任务所需要获得的物品种类及其数量.
craftings:
  '1':
    type: 'GOLD_BLOCK'
    amount: 1

# 菜单中使用的图标.
icons:
  not-completed:
    type: PAPER
    name: '&a手艺人 I'
    lore:
      - '&7合成 1 个金块.'
      - ''
      - '&6所需物品:'
      - '&8 - &7x1 金块'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6已合成金块数: &7{value_gold_block}/1'
      - '&6任务进度: &7{0}%'
      - '&c&l ✘ &7尚未完成'
  can-complete:
    type: PAPER
    name: '&a手艺人 I'
    lore:
      - '&7合成 1 个金块.'
      - ''
      - '&6所需物品:'
      - '&8 - &7x1 金块'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6已合成金块数: &71/1'
      - '&6任务进度: &7100%'
      - '&a&l ✔ &7点击领取任务奖励.'
    enchants:
      DURABILITY: 1
    flags:
      - HIDE_ENCHANTS
  completed:
    type: MAP
    name: '&a手艺人 I'
    lore:
      - '&7合成 1 个金块.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6已合成金块数: &71/1'
      - '&6任务进度: &7100%'
      - '&a&l ✔ &7已经领取.'
```