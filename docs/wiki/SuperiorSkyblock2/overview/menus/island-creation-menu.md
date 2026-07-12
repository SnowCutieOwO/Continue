# 岛屿创建菜单

在这里你可以找到自定义岛屿创建界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

### 结构物品

岛屿创建菜单允许新玩家创建岛屿。为了让菜单正常生效，你需要先配置菜单里的特殊按钮。

这些特殊类型的按钮格式与一般的物品格式有所不同，有着部分必须设置的内容。

|结构|类型|描述|
|---|---|---|
| `schematic` | 字符串 | 新建岛屿使用的结构名称。结构相关的更多信息可以在[这里](../schematics.md)浏览。 |
| `biome` | 字符串 | 新建岛屿使用的群系名称。 |
| `spawn-offset` | 字符串 | 新建岛屿时的出生点偏移，格式为 `x,y,z`。 |
| `bonus` | 双精度浮点数 | 新建岛屿时结构本身的额外价值（同样支持 `bonus-worth`）。 |
| `bonus-level` | 双精度浮点数 | 新建岛屿时结构本身的额外等级。 |
| `offset` | 布尔值 | 启用后，结构方块的价值会用作偏移，使得岛屿本身初始价值为 0。 |
| `access` | 配置部分（物品） | 当玩家有权限选择结构时显示的物品。 |
| `no-access` | 配置部分（物品） | 当玩家无权限选择结构时显示的物品。 |

::: info

`access` 与 `no-access` 字段可以用在声音与命令部分，以此实现无权限选择结构时的自定义声音及命令。选择结构的权限为 `superior.island.schematic.<结构名称>`。

:::

::: info

岛屿创建菜单支持 `skin-one-item` 选项——当岛屿创建结构选择只有一页时，箱子界面会直接打开而非先进入菜单。

:::

## 声音设置

在这部分配置中你可以自定义玩家点击物品时发出的音效。你可以在[这里](index.md#物品音效)找到正确配置音效的教程。

## 命令设置

在这部分配置中你可以自定义玩家点击物品时执行的命令。你可以在[这里](index.md#命令部分)找到正确执行命令的教程。

## 权限设置

在这部分配置中你可以自定义玩家点击物品所需要的权限。你可以在[这里](index.md#权限部分)找到正确配置权限条件的教程。

## 菜单示例

这是岛屿地标菜单的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '&l新建一座岛屿...'
previous-menu: true

pattern:
  - '~ ~ ~ ~ ~ ~ ~ ~ ~'
  - '# @ # # ^ # # $ #'
  - '~ ~ ~ ~ ~ ~ ~ ~ ~'

items:
  '@':
    schematic: 'normal'
    biome: PLAINS
    spawn-offset: '0, 0, 0'
    access:
      type: SKULL_ITEM
      data: 3
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzk1ZDM3OTkzZTU5NDA4MjY3ODQ3MmJmOWQ4NjgyMzQxM2MyNTBkNDMzMmEyYzdkOGM1MmRlNDk3NmIzNjIifX19'
      name: '&eNormal Island &a(Available)'
      lore:
        - '&7有着大量菌树木和一座矿井的岛屿!'
        - '&7 '
        - '&7&o(( &f&o右键点击&7&o预览岛屿. ))'
    no-access:
      type: SKULL_ITEM
      data: 3
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzk1ZDM3OTkzZTU5NDA4MjY3ODQ3MmJmOWQ4NjgyMzQxM2MyNTBkNDMzMmEyYzdkOGM1MmRlNDk3NmIzNjIifX19'
      name: '&eNormal Island &c(Unavailable)'
      lore:
        - '&7有着大量菌树木和一座矿井的岛屿!'
        - '&7 '
        - '&7&o(( &f&o右键点击&7&o预览岛屿. ))'
  '^':
    schematic: 'mycel'
    biome: MUSHROOM_ISLAND
    spawn-offset: '0, 0, 0'
    access:
      type: SKULL_ITEM
      data: 3
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZWE0NWQxYjQxN2NiZGRjMjE3NjdiMDYwNDRlODk5YjI2NmJmNzhhNjZlMjE4NzZiZTNjMDUxNWFiNTVkNzEifX19'
      name: '&eMycelium Island &a(Available)'
      lore:
        - '&7有着大量菌丝的岛屿!'
        - '&7 '
        - '&7&o(( &f&o右键点击&7&o预览岛屿. ))'
    no-access:
      type: SKULL_ITEM
      data: 3
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZWE0NWQxYjQxN2NiZGRjMjE3NjdiMDYwNDRlODk5YjI2NmJmNzhhNjZlMjE4NzZiZTNjMDUxNWFiNTVkNzEifX19'
      name: '&eMycelium Island &c(Unavailable)'
      lore:
        - '&7有着大量菌丝的岛屿!'
        - '&7 '
        - '&7&o(( &f&o右键点击&7&o预览岛屿. ))'
  '$':
    schematic: 'desert'
    biome: DESERT
    spawn-offset: '0, 0, 0'
    access:
      type: SKULL_ITEM
      data: 3
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjVkYjMxMjA2N2JlMWQ1YzRmMTQ3OGFmM2NhMmY2Y2Y4MTA0YWI0Y2NiZmY1NzkxN2M4NTc4ZGFhMTUwMDJjMiJ9fX0='
      name: '&eDesert Island &a(Available)'
      lore:
        - '&7有着大量沙子的岛屿!'
        - '&7 '
        - '&7&o(( &f&o右键点击&7&o预览岛屿. ))'
    no-access:
      type: SKULL_ITEM
      data: 3
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjVkYjMxMjA2N2JlMWQ1YzRmMTQ3OGFmM2NhMmY2Y2Y4MTA0YWI0Y2NiZmY1NzkxN2M4NTc4ZGFhMTUwMDJjMiJ9fX0='
      name: '&eDesert Island &c(Unavailable)'
      lore:
        - '&7有着大量沙子的岛屿!'
        - '&7 '
        - '&7&o(( &f&o右键点击&7&o预览岛屿. ))'
  '~':
    type: STAINED_GLASS_PANE
    data: 15
    name: '&f'

sounds:
  '@':
    access:
      type: PORTAL_TRIGGER
      volume: 1
      pitch: 0.2
    no-access:
      type: ANVIL_LAND
      volume: 0.2
      pitch: 0.2
  '^':
    access:
      type: PORTAL_TRIGGER
      volume: 1
      pitch: 0.2
    no-access:
      type: ANVIL_LAND
      volume: 0.2
      pitch: 0.2
  '$':
    access:
      type: PORTAL_TRIGGER
      volume: 1
      pitch: 0.2
    no-access:
      type: ANVIL_LAND
      volume: 0.2
      pitch: 0.2
```