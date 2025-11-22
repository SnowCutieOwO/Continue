# 物品任务

物品任务模块记录并处理玩家背包中的物品变动情况。你可以通过它给玩家发布需要某个物品的任务。任务只会在玩家尝试完成任务时检查是否有足够物品。

## 所需配置

### `required-items`

完成任务所需的物品列表。

该部分的示例配置可在下文找到。

#### 设置类型

配置

## 示例配置

``` YAML
# 使用的任务文件名称
mission-file: ItemsMissions

# 任务在达到条件时是否自动并领取奖励.
auto-reward: true

# 是否在完成任务后重置玩家的物品计数?
reset-after-finish: true

# 完成任务时给予的奖励.
rewards:
  commands:
    - 'eco give %player% 1000'
    - 'is admin msg %player% &e&l收集 | &7成功完成任务 收藏家 I!'
    - 'is admin msg %player% &e&l收集 | &7你现在已经获得了下界之星, 来收集其他物品吧.'
    - 'is admin msg %player% &e&l收集 | &7&o有关下个任务的更多信息, 请输入命令 /is missions 查看'

# 完成任务所需要收集的物品种类及其数量.
required-items:
  '1':
    types:
      - 'NETHER_STAR'
    amount: 1

# 菜单中使用的图标.
icons:
  not-completed:
    type: PAPER
    name: '&a收藏家 I'
    lore:
      - '&7收集下界之星 x1.'
      - ''
      - '&6所需物品:'
      - '&8 - &7x1 下界之星'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6已收集下界之星: &70/1'
      - '&6任务进度: &7{0}%'
      - '&c&l ✘ &7尚未完成'
  can-complete:
    type: PAPER
    name: '&a收藏家 I'
    lore:
      - '&7收集下界之星 x1.'
      - ''
      - '&6所需物品:'
      - '&8 - &7x1 下界之星'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6已收集下界之星: &71/1'
      - '&6任务进度: &7100%'
      - '&a&l ✔ &7点击领取任务奖励.'
    enchants:
      DURABILITY: 1
    flags:
      - HIDE_ENCHANTS
  completed:
    type: MAP
    name: '&a收藏家 I'
    lore:
      - '&7收集下界之星 x1.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6已收集下界之星: &71/1'
      - '&6任务进度: &7100%'
      - '&a&l ✔ &7已经领取.'
```