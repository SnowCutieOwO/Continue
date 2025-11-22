# 附魔任务

附魔任务模块记录并处理玩家在岛屿上的物品附魔行为。你可以通过它给玩家发布需要附魔物品的任务。任务会在玩家附魔物品时检查进度并记录相关数据。

## 所需配置

### `required-enchants`

完成任务所需的附魔列表。

该部分的示例配置可在下文找到。

#### 设置类型

配置

## 可选配置

### `enchanted-placeholder`

已完成附魔条目所显示的变量。

#### 配置类型

字符串

#### 默认值

`Yes`

### `not-enchanted-placeholder`

已完成附魔条目所显示的变量。

#### 配置类型

字符串

#### 默认值

`Yes`

## 示例配置

``` YAML
# 使用的任务文件名称
mission-file: EnchantingMissions

# 任务在达到条件时是否自动并领取奖励.
auto-reward: true

# 完成任务时给予的奖励.
rewards:
  commands:
    - 'eco give %player% 1000'
    - 'is admin msg %player% &e&l附魔 | &7成功完成了任务 附魔师 I!'
    - 'is admin msg %player% &e&l附魔 | &7你现在已经熟悉附魔物品了, 让我们更进一步吧.'
    - 'is admin msg %player% &e&l附魔 | &7&o有关任务的更多信息, 请输入命令 /is missions 查看'

# 完成任务所需要获得的物品种类及其数量.
required-enchants:
  '1':
    types:
      - 'DIAMOND_HELMET'
    enchants:
      PROTECTION_ENVIRONMENTAL: 4
    amount: 1
  '2':
    types:
      - 'DIAMOND_CHESTPLATE'
    enchants:
      PROTECTION_ENVIRONMENTAL: 4
    amount: 1
  '3':
    types:
      - 'DIAMOND_LEGGINGS'
    enchants:
      PROTECTION_ENVIRONMENTAL: 4
    amount: 1
  '4':
    types:
      - 'DIAMOND_BOOTS'
    enchants:
      PROTECTION_ENVIRONMENTAL: 4
    amount: 1

# 菜单中使用的物品.
icons:
  not-completed:
    type: PAPER
    name: '&a附魔师 I'
    lore:
      - '&7制作一套保护 IV 的钻石盔甲'
      - ''
      - '&6所需物品:'
      - '&8 - &7x1 钻石头盔 (保护 IV)'
      - '&8 - &7x1 钻石胸甲 (保护 IV)'
      - '&8 - &7x1 钻石护腿 (保护 IV)'
      - '&8 - &7x1 钻石靴子 (保护 IV)'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6钻石头盔: &7{enchanted_diamond_helmet}'
      - '&6钻石胸甲: &7{enchanted_diamond_chestplate}'
      - '&6钻石护腿: &7{enchanted_diamond_leggings}'
      - '&6钻石靴子: &7{enchanted_diamond_boots}'
      - '&6任务进度: &7{0}%'
      - '&c&l ✘ &7尚未完成'
  can-complete:
    type: PAPER
    name: '&a附魔师 I'
    lore:
      - '&7制作一套保护 IV 的钻石盔甲'
      - ''
      - '&6所需物品:'
      - '&8 - &7x1 钻石头盔 (保护 IV)'
      - '&8 - &7x1 钻石胸甲 (保护 IV)'
      - '&8 - &7x1 钻石护腿 (保护 IV)'
      - '&8 - &7x1 钻石靴子 (保护 IV)'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6钻石头盔: &7是'
      - '&6钻石胸甲: &7是'
      - '&6钻石护腿: &7是'
      - '&6钻石靴子: &7是'
      - '&6任务进度: &7100%'
      - '&a&l ✔ &7点击领取任务奖励.'
    enchants:
      DURABILITY: 1
    flags:
      - HIDE_ENCHANTS
  completed:
    type: MAP
    name: '&a附魔师 I'
    lore:
      - '&7制作一套保护 IV 的钻石盔甲'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - ''
      - '&6钻石头盔: &7是'
      - '&6钻石胸甲: &7是'
      - '&6钻石护腿: &7是'
      - '&6钻石靴子: &7是'
      - '&6任务进度: &7100%'
      - '&a&l ✔ &7已经领取.'
```