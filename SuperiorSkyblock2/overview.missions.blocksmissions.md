# 方块任务

方块任务模块记录并处理岛屿内的方块放置与破坏行为。通过本模块，你可以为玩家分发涉及到破坏/放置方块的任务。任务会在玩家放置/破坏方块时检查进度并记录相关数据。

## 所需配置

### `required-blocks`

完成任务所需的方块列表。

该部分的示例配置可在下文找到。

#### 设置类型

配置

## 可选配置

### `only-natural-blocks`

是否只考虑自然生成的方块。

#### 设置类型

布尔值（`true`/`false`）

### `blocks-placement`

设置为 true 时，任务会记录方块放置而非破坏行为。

#### 设置类型

布尔值（`true`/`false`）

### `blocks-replace`

设置为 true 时，玩家可以通过重复放置方块获得任务进度。

::: info

仅对 `blocks-placement` 设置为 true 的任务有效。

:::

#### 设置类型

布尔值（`true`/`false`）

## 示例

``` YAML
# 使用的任务文件名称
mission-file: BlocksMissions

# 任务在达到条件时是否自动并领取奖励.
auto-reward: true

# 是否在完成任务后重置玩家的方块计数?
reset-after-finish: true

# 是否只将自然生成的方块计入任务进度.
only-natural-blocks: true

# 完成任务时给予的奖励.
rewards:
  commands:
    - 'eco give %player% 1000'
    - 'is admin rankup %player% generator-rates'
    - 'is admin msg %player% &e&l矿工 | &7成功完成了任务 矿工 I!'
    - 'is admin msg %player% &e&l矿工 | &7你现在已经熟悉刷石机了, 试着挖些铁矿吧.'
    - 'is admin msg %player% &e&l矿工 | &7&o有关任务的更多信息, 请输入命令 /is missions 查看'

# 完成任务所需要挖掘的方块种类及其数量.
required-blocks:
  '1':
    types:
      - 'STONE'
    amount: 48
  '2':
    types:
      - 'COAL_ORE'
    amount: 16

# 菜单中使用的图标.
icons:
  not-completed:
    type: PAPER
    name: '&a矿工 I'
    lore:
      - '&7挖掘 48 块圆石和 16 块煤矿石.'
      - ''
      - '&6任务需求:'
      - '&8 - &7x48 圆石'
      - '&8 - &7x16 煤矿石'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - '&8 - &7刷石机升级'
      - ''
      - '&6已挖掘圆石: &7{value_stone}/48'
      - '&6已挖掘煤矿: &7{value_coal_ore}/16'
      - '&6总进度: &7{0}%'
      - '&c&l ✘ &7尚未完成'
  can-complete:
    type: PAPER
    name: '&a矿工 I'
    lore:
      - '&7挖掘 48 块圆石和 16 块煤矿石.'
      - ''
      - '&6任务需求:'
      - '&8 - &7x48 圆石'
      - '&8 - &7x16 煤矿石'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - '&8 - &7刷石机升级'
      - ''
      - '&6已挖掘圆石: &748/48'
      - '&6已挖掘煤矿: &716/16'
      - '&6总进度: &7100%'
      - '&a&l ✔ &7点击领取任务奖励.'
    enchants:
      DURABILITY: 1
    flags:
      - HIDE_ENCHANTS
  completed:
    type: MAP
    name: '&a矿工 I'
    lore:
      - '&7挖掘 48 块圆石和 16 块煤矿石.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$1,000'
      - '&8 - &7刷石机升级'
      - ''
      - '&6已挖掘圆石: &748/48'
      - '&6已挖掘煤矿: &716/16'
      - '&6总进度: &7100%'
      - '&a&l ✔ &7已经领取.'
```