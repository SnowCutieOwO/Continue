# 控制面板菜单

在这里你可以找到自定义岛屿管理界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 岛屿管理相关设置

岛屿管理界面类似于控制面板，它有几个必须配置的特殊按钮，只需在排版中为其分配字符即可。

|字段|类型|描述|
|---|---|---|
| `confirm` | 单字符 | 确认转让操作的按钮。 |
| `cancel` | 单字符 | 取消操作的按钮。 |

岛屿控制界面是管理面板的主界面，它有几个可以直接打开其他菜单的按钮，只需在排版中为其分配单字符即可。

|字段|类型|描述|
|---|---|---|
| `members` | 单字符 | 打开成员菜单的按钮。 |
| `settings` | 单字符 | 打开岛屿设置菜单的按钮。 |
| `visitors` | 单字符 | 打开岛屿访客菜单的按钮。 |

::: info

默认菜单内的其他按钮都是通过点击执行命令模块实现的，你可以按需要添加更多。

:::

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

## 声音设置

在这部分配置中你可以自定义玩家点击物品时发出的音效。你可以在[这里](index.md#物品音效)找到正确配置音效的教程。

## 命令设置

在这部分配置中你可以自定义玩家点击物品时执行的命令。你可以在[这里](index.md#命令部分)找到正确执行命令的教程。

## 权限设置

在这部分配置中你可以自定义玩家点击物品所需要的权限。你可以在[这里](index.md#权限部分)找到正确配置权限条件的教程。

## 菜单实例

这是岛屿管理界面的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '&l岛屿菜单'
previous-menu: true

pattern:
  - '2 2 2 2 2 2 2 2 2'
  - '# ! # @ # $ # % #'
  - '_ # ^ # & # * # 1'
  - '# ~ # = # - # + #'
  - '2 2 2 2 2 2 2 2 2'

members: '+'
settings: '@'
visitors: '-'

items:
  '!':
    type: SIGN
    name: '&e传送'
    lore:
      - '&7回到你的岛屿.'
  '@':
    type: DIODE
    name: '&e岛屿设置'
    lore:
      - '&7管理岛屿上的设置.'
  '$':
    type: ENDER_PEARL
    name: '&e岛屿权限'
    lore:
      - '&7管理岛屿上的权限设置.'
  '%':
    type: GRASS
    name: '&e岛屿群系'
    lore:
      - '&7修改岛屿上的群系.'
  '_':
    type: EMERALD
    name: '&e岛屿银行'
    lore:
      - '&7打开岛屿银行.'
  '^':
    type: GOLD_INGOT
    name: '&e岛屿升级'
    lore:
      - '&7升级你的岛屿!'
  '&':
    type: BEACON
    name: '&e岛屿排行'
    lore:
      - '&7浏览服务器上的岛屿排行榜!'
  '*':
    type: PAPER
    name: '&e岛屿任务'
    lore:
      - '&7完成各种任务获得奖励!'
  '1':
    type: SMOOTH_BRICK
    name: '&e岛屿统计'
    lore:
      - '&7浏览岛屿上的所有方块!'
  '~':
    type: BARRIER
    name: '&e解散岛屿'
    lore:
      - '&7解散你的岛屿.'
      - '&c操作不可撤销!'
  '=':
    type: CHEST
    name: '&e岛屿仓库'
    lore:
      - '&7打开岛屿上的共享仓库.'
  '-':
    type: SKULL_ITEM
    name: '&e岛屿访客'
    lore:
      - '&7浏览岛屿上的所有访客.'
  '+':
    type: SKULL_ITEM
    data: 3
    name: '&e岛屿成员'
    lore:
      - '&7管理岛屿上的所有成员.'
  '2':
    type: STAINED_GLASS_PANE
    data: 15
    name: '&f'

sounds:
  '!':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '@':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '$':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '%':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '_':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '^':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '&':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '*':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '1':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '~':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '-':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '=':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '+':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2

commands:
  '!':
    - '[player] is tp'
  '$':
    - '[player] is permissions'
  '%':
    - '[player] is biome'
  '_':
    - '[player] is bank'
  '^':
    - '[player] is upgrade'
  '&':
    - '[player] is top'
  '*':
    - '[player] is missions'
  '1':
    - '[player] is counts'
  '~':
    - '[player] is disband'
  '=':
    - '[player] is chest'
```