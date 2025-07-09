# 耕作任务

耕作任务模块记录并处理岛屿上的作物生长行为。你可以通过它给玩家发布需要种植作物的任务。任务会在作物生长与玩家种植作物时检查进度并记录相关数据。

## 所需配置

### `required-plants`

完成任务所需的作物。

可填入的值如下：

* `BAMBOO`
* `BEETROOT`
* `CACTUS`
* `CARROT`
* `CHORUS_FLOWER`
* `CHORUS_PLANT`
* `COCOA`
* `MELON`
* `POTATO`
* `PUMPKIN`
* `SUGAR_CANE`
* `SWEET_BERRY_BUSH`
* `WHEAT`

其他类型的方块可能有效。除此之外，请确保你填入的是方块材料名称，而非物品。

#### 设置类型

配置

## 示例配置

``` YAML
# 使用的任务文件名称
mission-file: FarmingMissions

# 任务在达到条件时是否自动并领取奖励.
auto-reward: true

# 是否在完成任务后重置玩家的作物收取计数?
reset-after-finish: true

# 完成任务时给予的奖励.
rewards:
  items:
    '1':
      type: BEETROOT_SEEDS
      amount: 1
    '2':
      type: PUMPKIN_SEEDS
      amount: 1
    '3':
      type: MELON_SEEDS
      amount: 1
  commands:
    - 'eco give %player% 2500'
    - 'is admin msg %player% &e&l耕作 | &7成功完成了任务 农夫 I!'

# 完成任务所需要获得的物品种类及其数量.
required-plants:
  '1':
    types:
      - 'CARROT'
    amount: 10
  '2':
    types:
      - 'POTATO'
    amount: 10
  '3':
    types:
      - 'WHEAT'
    amount: 10

# 菜单中使用的物品.
icons:
  not-completed:
    type: PAPER
    name: '&a农夫 I'
    lore:
      - '&7开个小农场.'
      - ''
      - '&6需要种植:'
      - '&8 - &7x10 胡萝卜'
      - '&8 - &7x10 马铃薯'
      - '&8 - &7x10 小麦'
      - ''
      - '&6任务奖励:'
      - '&8 - &7x1 甜菜种子'
      - '&8 - &7x1 南瓜种子'
      - '&8 - &7x1 西瓜种子'
      - '&8 - &7$2,500'
      - ''
      - '&6已种植胡萝卜: &7{value_carrot}/10'
      - '&6已种植马铃薯: &7{value_potato}/10'
      - '&6已种植小麦: &7{value_wheat}/10'
      - '&6总进度: &7{0}%'
      - '&c&l ✘ &7尚未完成'
  can-complete:
    type: PAPER
    name: '&a农夫 I'
    lore:
      - '&7开个小农场.'
      - ''
      - '&6需要种植:'
      - '&8 - &7x10 胡萝卜'
      - '&8 - &7x10 马铃薯'
      - '&8 - &7x10 小麦'
      - ''
      - '&6任务奖励:'
      - '&8 - &7x1 甜菜种子'
      - '&8 - &7x1 南瓜种子'
      - '&8 - &7x1 西瓜种子'
      - '&8 - &7$2,500'
      - ''
      - '&6已种植胡萝卜: &710/10'
      - '&6已种植马铃薯: &710/10'
      - '&6已种植小麦: &710/10'
      - '&6总进度: &7100%'
      - '&a&l ✔ &7点击领取任务奖励.'
    enchants:
      DURABILITY: 1
    flags:
      - HIDE_ENCHANTS
  completed:
    type: MAP
    name: '&a农夫 I'
    lore:
      - '&7开个小农场.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7x1 甜菜种子'
      - '&8 - &7x1 南瓜种子'
      - '&8 - &7x1 西瓜种子'
      - '&8 - &7$2,500'
      - ''
      - '&6已种植胡萝卜: &710/10'
      - '&6已种植马铃薯: &710/10'
      - '&6已种植小麦: &710/10'
      - '&6总进度: &7100%'
      - '&a&l ✔ &7已经领取.'
```