# 语言菜单

在这里你可以找到自定义语言界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

### 语言物品

玩家语言菜单允许玩家选择语言。在此之前，菜单需要先设置特殊类型的按钮才可正常使用。

这些特殊类型的按钮格式与一般物品相同，但有一个必须设置的参数：

|字段|类型|描述|
|---|---|---|
| `languages` | 字符串 | 点击物品时切换的语言（如 `en-US`）。所填语言必须在配置中启用，且对应有效的语言文件。 |

## 声音设置

在这部分配置中你可以自定义玩家点击物品时发出的音效。你可以在[这里](index.md#物品音效)找到正确配置音效的教程。

## 命令设置

在这部分配置中你可以自定义玩家点击物品时执行的命令。你可以在[这里](index.md#命令部分)找到正确执行命令的教程。

## 权限设置

在这部分配置中你可以自定义玩家点击物品所需要的权限。你可以在[这里](index.md#权限部分)找到正确配置权限条件的教程。

## 菜单示例

这是成员管理菜单的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '&l选择语言...'
previous-menu: true

pattern:
  - '@ @ @ @ @ @ @ @ @'
  - '@ # % * + ^ ~ 1 @'
  - '@ @ - = ! 2 3 @ @'
  - '@ @ @ @ @ @ @ @ @'

items:
  '@':
    type: STAINED_GLASS_PANE
    data: 15
    name: '&f'
  '#':
    language: 'en-US'
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGNhYzk3NzRkYTEyMTcyNDg1MzJjZTE0N2Y3ODMxZjY3YTEyZmRjY2ExY2YwY2I0YjM4NDhkZTZiYzk0YjQifX19'
    name: '&e英语'
    lore:
      - '&7将语言切换为英语.'
  '-':
    language: 'fr-FR'
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTEyNjlhMDY3ZWUzN2U2MzYzNWNhMWU3MjNiNjc2ZjEzOWRjMmRiZGRmZjk2YmJmZWY5OWQ4YjM1Yzk5NmJjIn19fQ=='
    name: '&e法语'
    lore:
      - '&7将语言切换为法语.'
  '=':
    language: 'es-ES'
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzJiZDQ1MjE5ODMzMDllMGFkNzZjMWVlMjk4NzQyODc5NTdlYzNkOTZmOGQ4ODkzMjRkYThjODg3ZTQ4NWVhOCJ9fX0='
    name: '&e西班牙语'
    lore:
      - '&7将语言切换为西班牙语.'
  # ... 其他语言按照相同格式 ...

sounds:
  '#':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
```