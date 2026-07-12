# 岛屿评分菜单

在这里你可以找到自定义岛屿评分界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 岛屿评分相关设置

岛屿评分菜单用于给岛屿评分，它也有需要配置的特殊按钮。只需在排版中为其分配单字符即可。

|字段|类型|描述|
|---|---|---|
| `zero-stars` | 单字符 | 为岛屿评分零星的按钮。 |
| `one-star` | 单字符 | 为岛屿评分一星的按钮。 |
| `two-stars` | 单字符 | 为岛屿评分二星的按钮。 |
| `three-stars` | 单字符 | 为岛屿评分三星的按钮。 |
| `four-stars` | 单字符 | 为岛屿评分四星的按钮。 |
| `five-stars` | 单字符 | 为岛屿评分五星的按钮。 |

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

## 声音设置

在这部分配置中你可以自定义玩家点击物品时发出的音效。你可以在[这里](index.md#物品音效)找到正确配置音效的教程。

## 命令设置

在这部分配置中你可以自定义玩家点击物品时执行的命令。你可以在[这里](index.md#命令部分)找到正确执行命令的教程。

## 权限设置

在这部分配置中你可以自定义玩家点击物品所需要的权限。你可以在[这里](index.md#权限部分)找到正确配置权限条件的教程。

## 菜单示例

这是岛屿评分菜单的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '&l岛屿评分'
previous-menu: true

pattern:
  - '# ~ @ % # * ^ & #'

zero-stars: '~'
one-star: '@'
two-stars: '%'
three-stars: '*'
four-stars: '^'
five-stars: '&'

items:
  '~':
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODViZDFlNjEzZmYzMmI1MjNjY2Y5ZTU3NGNjMzExYjc5OGMyYjNhNjgyOGYwZjcxYTI1NGM5OTVlNmRiOGU1In19fQ=='
    name: '&4差 (0/5)'
  '@':
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYmNmYWZmYThjNmM3ZjYyNjIxNjgyZmU1NjcxMWRjM2I4OTQ0NjVmZGY3YTYyZjQzYjMxYTBkMzQwM2YzNGU3In19fQ=='
    name: '&6丑 (1/5)'
  '%':
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNThjY2ExZTBmYjVkOWJmNzdmNTI3MzU2ZThiZjRlNTNjYjRhNGM1NmYxMWU3NzlhYmFkYWU1NDFiYmVkYzYifX19'
    name: '&e好 (2/5)'
  '*':
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzQyMjZmMmViNjRhYmM4NmIzOGI2MWQxNDk3NzY0Y2JhMDNkMTc4YWZjMzNiN2I4MDIzY2Y0OGI0OTMxMSJ9fX0='
    name: '&a棒 (3/5)'
  '^':
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOGI1MjdiMjRiNWQyYmNkYzc1NmY5OTVkMzRlYWU1NzlkNzQxNGIwYTVmMjZjNGZmYTRhNTU4ZWNhZjZiNyJ9fX0='
    name: '&2漂亮 (4/5)'
  '&':
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDkzNTdjYjQ2NjQ0MjZhOWFlMGY5Yzc3MjVlYTQzNTFkYzY5ZjE1YTgwNjJjMDM1OTFlMjZhYzExYmJjNWEifX19'
    name: '&5极好的 (5/5)'

sounds:
  '~':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '@':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '%':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '*':
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
```