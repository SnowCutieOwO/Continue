# 确认解散菜单

在这里你可以找到自定义确认解散界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 确认解散相关设置

确认解散界面会在解散岛屿之前弹出，用于再次确认操作。它有几个必须配置的特殊按钮，只需在排版中为其分配字符即可。

|字段|类型|描述|
|---|---|---|
| `confirm` | 单字符 | 确认解散操作的按钮。 |
| `cancel` | 单字符 | 取消操作的按钮。 |

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

## 声音设置

在这部分配置中你可以自定义玩家点击物品时发出的音效。你可以在[这里](index.md#物品音效)找到正确配置音效的教程。

## 命令设置

在这部分配置中你可以自定义玩家点击物品时执行的命令。你可以在[这里](index.md#命令部分)找到正确执行命令的教程。

## 权限设置

在这部分配置中你可以自定义玩家点击物品所需要的权限。你可以在[这里](index.md#权限部分)找到正确配置权限条件的教程。

## 菜单实例

这是确认解散界面的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '&l      确认解散'
previous-menu: true
type: HOPPER

pattern:
  - '# @ # ^ #'

confirm: '@'
cancel: '^'

items:
  '#':
    type: STAINED_GLASS_PANE
    data: 15
    name: '&f'
  '@':
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzc0NzJkNjA4ODIxZjQ1YTg4MDUzNzZlYzBjNmZmY2I3ODExNzgyOWVhNWY5NjAwNDFjMmEwOWQxMGUwNGNiNCJ9fX0='
    name: '&a确认'
    lore:
      - '&7你确定要删除岛屿吗?'
  '^':
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjk1M2IxMmEwOTQ2YjYyOWI0YzA4ODlkNDFmZDI2ZWQyNmZiNzI5ZDRkNTE0YjU5NzI3MTI0YzM3YmI3MGQ4ZCJ9fX0='
    name: '&4取消'

sounds:
  '@':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '^':
    type: ANVIL_LAND
    volume: 0.2
    pitch: 0.2
```