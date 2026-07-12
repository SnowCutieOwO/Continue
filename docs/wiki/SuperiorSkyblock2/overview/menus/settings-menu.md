# 岛屿设置菜单

在这里你可以找到自定义设置界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 分页式菜单设置

设置菜单是分页菜单，它会显示一列可用的物品——在这里就是设置。它的数量可能会大于菜单实际拥有的格子数量，这种情况下菜单就需要分成多页。

这些类型的菜单有四个额外选项：
* `slots` - 代表着设置的按钮。
* `previous-page` - 代表着翻回上一页的按钮。
* `current-page` - 代表着当前页的按钮。
* `next-page` - 代表着翻到下一页的按钮。

## 设置部分

除了一般的菜单部分，设置菜单还有一个 `settings` 部分，负责管理菜单的所有设置。每个设置都有自己的子配置，以岛屿设置的名称作为其键名。每个设置部分都有如下字段：

|字段|类型|描述|
|---|---|---|
| `display-menu` | 布尔值 | 是否将此设置展示在菜单中。 |
| `settings-enabled` | 配置部分（物品） | 设置启用时展示的物品。 |
| `settings-disabled` | 配置部分（物品） | 设置禁用时展示的物品。 |
| `sound` | 声音 | 设置切换时播放的音效。 |

``` YAML
settings:
  always_day:
    display-menu: true
    settings-enabled:
      type: STAINED_CLAY
      data: 4
      name: '&6总是白天'
      lore:
        - '&7将岛屿的时间保持在白天.'
        - '&7当前状态为&a启用&7.'
    settings-disabled:
      type: STAINED_CLAY
      data: 4
      name: '&6总是白天'
      lore:
        - '&7将岛屿的时间保持在白天.'
        - '&7当前状态为&c禁用&7.'
    sound:
      type: ORB_PICKUP
      volume: 0.2
      pitch: 0.2
```

::: info 

若插件中存在的设置没有出现在 `settings` 部分，则会在控制台生成警告。你可以将 `display-menu` 项设置为 false 将其隐藏。

:::

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

### 自定义变量

分页菜单（`slots`、`previous-page` 等）支持嵌入内建变量！

* `previous-page`、`next-page` - 
  * `{0}` - 若存在下一页则显示为绿色（`&a`），反之则为红色（`&c`）
* `current-page` -
  * `{0}` - 当前页码

## 声音设置

在这部分配置中你可以自定义玩家点击物品时发出的音效。你可以在[这里](index.md#物品音效)找到正确配置音效的教程。

## 命令设置

在这部分配置中你可以自定义玩家点击物品时执行的命令。你可以在[这里](index.md#命令部分)找到正确执行命令的教程。

## 权限设置

在这部分配置中你可以自定义玩家点击物品所需要的权限。你可以在[这里](index.md#权限部分)找到正确配置权限条件的教程。

## 菜单示例

这是设置菜单的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '&l岛屿设置'
previous-menu: true

pattern:
  - '$ $ $ $ $ $ $ $ $'
  - '$ @ @ @ @ @ @ @ $'
  - '$ @ @ @ @ @ @ @ $'
  - '$ @ @ @ @ @ @ @ $'
  - '$ $ % $ * $ ^ $ $'

slots: '@'
previous-page: '%'
current-page: '*'
next-page: '^'

items:
  '$':
    type: STAINED_GLASS_PANE
    data: 3
    name: '&f'
  '%':
    type: PAPER
    name: '{0}上一页'
  '*':
    type: DOUBLE_PLANT
    name: '&a当前页'
    lore:
      - '&7第 {0} 页'
  '^':
    type: PAPER
    name: '{0}下一页'

settings:
  always_day:
    display-menu: true
    settings-enabled:
      type: STAINED_CLAY
      data: 4
      name: '&6总是白天'
      lore:
        - '&7将岛屿的时间保持在白天.'
        - '&7当前状态为&a启用&7.'
    settings-disabled:
      type: STAINED_CLAY
      data: 4
      name: '&6总是白天'
      lore:
        - '&7将岛屿的时间保持在白天.'
        - '&7当前状态为&c禁用&7.'
    sound:
      type: ORB_PICKUP
      volume: 0.2
      pitch: 0.2
  # ... 其他配置按相同格式排列 ...
```