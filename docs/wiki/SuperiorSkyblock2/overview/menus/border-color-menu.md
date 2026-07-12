# 边界颜色菜单

在这里你可以找到自定义边界颜色设置界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 边界颜色相关设置

边界颜色菜单用于改变世界边界的颜色，因此有着必须进行配置的特殊按钮。只需在你的排版中为其分配一个按钮即可。

|字段|类型|描述|
|---|---|---|
| `green-color` | 单字符 | 将边界颜色修改为绿色的按钮。 |
| `red-color` | 单字符 | 将边界颜色修改为红色的按钮。 |
| `blue-color` | ‘单字符 | 将边界颜色修改为蓝色的按钮。 |

## 边界状态切换相关设置

除了改变颜色的按钮以外，你还可以添加决定边界开关的按钮。这个特殊类型的按钮格式与普通物品略有区别，且有必须设置的特殊部分。

|字段|类型|描述|
|---|---|---|
| `enable-border` |配置部分（物品）|在空岛边界禁用时显示的物品。|
| `disable-border` |配置部分（物品）|在空岛边界启用时显示的物品。|

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

### 群系物品

群系菜单使得玩家能够自由切换岛屿的生物群系。为了实现这个功能，菜单必须添加带有特殊功能的自定义按钮。

这些特殊类型的按钮与正常类型的物品格式不同，且有一些必须设置的内容。

|名称|类型|描述|
|---|---|---|
|`biome`|字符串|待更换的生物群系。可在[这里](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html)找到完整的生物群系列表。|
|`access`|物品配置|玩家有权限更换生物群系时显示的物品样式。|
|`no-access`|物品配置|玩家无权限更换生物群系时显示的物品样式。|


::: info

`access` 与 `no-access` 部分可使用声音与命令配置来实现玩家在拥有/缺少权限的情况下触发自定义的声音/命令。

:::

## 声音设置

在这部分配置中你可以自定义玩家点击物品时发出的音效。你可以在[这里](index.md#物品音效)找到正确配置音效的教程。

## 命令设置

在这部分配置中你可以自定义玩家点击物品时执行的命令。你可以在[这里](index.md#命令部分)找到正确执行命令的教程。

## 权限设置

在这部分配置中你可以自定义玩家点击物品所需要的权限。你可以在[这里](index.md#权限部分)找到正确配置权限条件的教程。

## 菜单实例

这是边界颜色界面的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '&l        边界颜色'
previous-menu: true
type: HOPPER

pattern:
  - '~ # @ ^ $'

green-color: '@'
red-color: '^'
blue-color: '$'

items:
  '~':
    enable-border:
      type: SKULL_ITEM
      data: 3
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvM2ZhZjRjMjlmMWU3NDA1ZjQ2ODBjNWMyYjAzZWY5Mzg0ZjFhZWNmZTI5ODZhZDUwMTM4YzYwNWZlZmZmMmYxNSJ9fX0='
      name: '&a启用边界'
    disable-border:
      type: SKULL_ITEM
      data: 3
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvM2ZhZjRjMjlmMWU3NDA1ZjQ2ODBjNWMyYjAzZWY5Mzg0ZjFhZWNmZTI5ODZhZDUwMTM4YzYwNWZlZmZmMmYxNSJ9fX0='
      name: '&c禁用边界'
  '#':
    type: STAINED_GLASS_PANE
    data: 15
    name: '&f'
  '@':
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzc0NzJkNjA4ODIxZjQ1YTg4MDUzNzZlYzBjNmZmY2I3ODExNzgyOWVhNWY5NjAwNDFjMmEwOWQxMGUwNGNiNCJ9fX0='
    name: '&a绿色'
  '^':
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjk1M2IxMmEwOTQ2YjYyOWI0YzA4ODlkNDFmZDI2ZWQyNmZiNzI5ZDRkNTE0YjU5NzI3MTI0YzM3YmI3MGQ4ZCJ9fX0='
    name: '&c红色'
  '$':
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTYzZTY2NDZmMWMwZDQxZmQzYmY1NTg0YTFjZTA0NGY1YzQ2ZDU5ODI1OGRiNDYyMTYxMTc4NTlmNTdhZjE5NyJ9fX0='
    name: '&b蓝色'

sounds:
  '~':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '@':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '^':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '$':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
```