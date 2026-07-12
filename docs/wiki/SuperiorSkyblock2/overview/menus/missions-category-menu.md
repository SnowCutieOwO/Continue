# 任务分类菜单

在这里你可以找到自定义任务分类界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 分页式菜单设置

任务分类菜单是分页菜单，它会显示一列可用的物品——在这里就是成员列表。它的数量可能会大于菜单实际拥有的格子数量，这种情况下菜单就需要分成多页。

这些类型的菜单有四个额外选项：
* `slots` - 代表着任务的按钮。
* `previous-page` - 代表着翻回上一页的按钮。
* `current-page` - 代表着当前页的按钮。
* `next-page` - 代表着翻到下一页的按钮。

::: info

任务本身的图标不在菜单中配置——每个任务各自的图标都在它们的配置 `icons` 部分。

:::

## 任务分类相关设置

任务分类菜单有如下需要配置的设置：

|字段|类型|描述|
|---|---|---|
| `sort-by-completion` | 布尔值 | 所有任务是否按完成状态排序：未完成 -> 可完成 -> 已完成。 |
| `remove-completed` | 布尔值 | 是否在菜单中隐藏已完成的任务。 |

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

### 自定义变量

分页菜单（`slots`、`previous-page` 等）支持嵌入内建变量！

* `previous-page`、`next-page` - 
  * `{0}` - 若存在下一页则显示为绿色（`&a`），反之则为红色（`&c`）
* `current-page` -
  * `{0}` - 当前页码

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

## 声音设置

在这部分配置中你可以自定义玩家点击物品时发出的音效。你可以在[这里](index.md#物品音效)找到正确配置音效的教程。

The mission buttons (slots char) support four special sound sections instead of a regular sound, depending on the status of the mission for the player:
Field Name
Description

任务按钮（`slots` 符号）相较一般的声音有更多设置，取决于玩家当前的任务状态：

|字段|描述|
|---|---|
| `locked` | 当玩家未解锁该任务时播放。 |
| `completed` | 当玩家已完成该任务时播放。 |
| `not-completed` | 当玩家未完成该任务且尚不能提交时播放。 |
| `can-complete` | 当玩家未完成任务但可以提交时播放。 |

## 命令设置

在这部分配置中你可以自定义玩家点击物品时执行的命令。你可以在[这里](index.md#命令部分)找到正确执行命令的教程。

## 权限设置

在这部分配置中你可以自定义玩家点击物品所需要的权限。你可以在[这里](index.md#权限部分)找到正确配置权限条件的教程。

## 菜单示例

这是任务菜单的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '&l{0} 任务'
previous-menu: true

pattern:
  - '# # # # # # # # #'
  - '# # @ @ @ @ @ # #'
  - '# # # # # # # # #'

slots: '@'
previous-page: '*'
current-page: '*'
next-page: '*'

# 任务是否按其完成状态排序？
# 未完成 -> 可完成 -> 已完成
sort-by-completion: false

# 已完成的任务是否在菜单中隐藏？
remove-completed: false

items:
  '#':
    type: STAINED_GLASS_PANE
    data: 15
    name: '&f'

sounds:
  '@':
    locked:
      type: ANVIL_LAND
      volume: 0.2
      pitch: 0.2
    completed:
      type: ANVIL_LAND
      volume: 0.2
      pitch: 0.2
    not-completed:
      type: ANVIL_LAND
      volume: 0.2
      pitch: 0.2
    can-complete:
      type: ORB_PICKUP
      volume: 0.2
      pitch: 0.2
```