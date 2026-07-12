# 群系菜单

在这里你可以找到自定义生物群系的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 群系相关设置

群系菜单有一些可配置的额外设置——`current-biome-glow`，可以决定当前选中的生物群系是否在菜单中带有附魔光效。

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

这是生物群系菜单的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '&l选择群系'
previous-menu: true

pattern:
  - '$ $ $ $ $ $ $ $ $'
  - '# ! # % # & # ~ #'
  - '# # @ # ^ # * # #'
  - '$ $ $ $ $ $ $ $ $'

# 是否将当前选择的群系设置为附魔状态?
current-biome-glow: false

items:
  '$':
    type: BLACK_STAINED_GLASS_PANE
    name: '&f'
  '!':
    biome: PLAINS
    required-permission: ''
    access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzk1ZDM3OTkzZTU5NDA4MjY3ODQ3MmJmOWQ4NjgyMzQxM2MyNTBkNDMzMmEyYzdkOGM1MmRlNDk3NmIzNjIifX19'
      name: '&e平原群系 &a(可选择)'
      lore:
        - '&7将岛屿的群系切换为平原.'
    no-access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzk1ZDM3OTkzZTU5NDA4MjY3ODQ3MmJmOWQ4NjgyMzQxM2MyNTBkNDMzMmEyYzdkOGM1MmRlNDk3NmIzNjIifX19'
      name: '&e平原群系 &c(未解锁)'
      lore:
        - '&7将岛屿的群系切换为平原.'
  '@':
    biome: JUNGLE
    required-permission: ''
    access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODQ0OWI5MzE4ZTMzMTU4ZTY0YTQ2YWIwZGUxMjFjM2Q0MDAwMGUzMzMyYzE1NzQ5MzJiM2M4NDlkOGZhMGRjMiJ9fX0='
      name: '&e丛林群系 &a(可选择)'
      lore:
        - '&7将岛屿的群系切换为丛林.'
    no-access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODQ0OWI5MzE4ZTMzMTU4ZTY0YTQ2YWIwZGUxMjFjM2Q0MDAwMGUzMzMyYzE1NzQ5MzJiM2M4NDlkOGZhMGRjMiJ9fX0='
      name: '&e丛林群系 &c(未解锁)'
      lore:
        - '&7将岛屿的群系切换为丛林.'
  '%':
    biome: TAIGA
    required-permission: ''
    access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDNjNTJlYWU3NDdjYWQ1YjRmZDE5YjFhMjNiMzlhMzM2YjYyZWQ0MjI3OTdhNjIyZDA0NWY0M2U1ZDM4In19fQ=='
      name: '&e针叶林群系 &a(可选择)'
      lore:
        - '&7将岛屿的群系切换为针叶林.'
    no-access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDNjNTJlYWU3NDdjYWQ1YjRmZDE5YjFhMjNiMzlhMzM2YjYyZWQ0MjI3OTdhNjIyZDA0NWY0M2U1ZDM4In19fQ=='
      name: '&e针叶林群系 &c(未解锁)'
      lore:
        - '&7将岛屿的群系切换为针叶林.'
  '^':
    biome: DESERT
    required-permission: ''
    access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTMxOTkzZTRjZmRhMTUzZWFmN2RjMTM4ZDUyYmJhNWMyODNkMDE2MzI2MDIyNjIxNjE3NzZmMGY0Yjg2YSJ9fX0='
      name: '&e沙漠群系 &a(可选择)'
      lore:
        - '&7将岛屿的群系切换为沙漠.'
        - '&c警告，请先清理岛屿内的冰与雪！'
    no-access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTMxOTkzZTRjZmRhMTUzZWFmN2RjMTM4ZDUyYmJhNWMyODNkMDE2MzI2MDIyNjIxNjE3NzZmMGY0Yjg2YSJ9fX0='
      name: '&e沙漠群系 &c(未解锁)'
      lore:
        - '&7将岛屿的群系切换为沙漠.'
        - '&c警告，请先清理岛屿内的冰与雪！'
  '&':
    biome: NETHER
    required-permission: ''
    access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTU2Y2E1YzY3OTMzNmRkNGYzMjYyZjRmYmMyM2MxYTJlZTBkODJhN2ZkODFlNmU2MjMzN2U1ZmQ1YzcifX19'
      name: '&e下界群系 &a(可选择)'
      lore:
        - '&7将岛屿的群系切换为下界.'
        - '&c警告，请先清理岛屿内的水、冰与雪！'
    no-access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTU2Y2E1YzY3OTMzNmRkNGYzMjYyZjRmYmMyM2MxYTJlZTBkODJhN2ZkODFlNmU2MjMzN2U1ZmQ1YzcifX19'
      name: '&e下界群系 &c(未解锁)'
      lore:
        - '&7将岛屿的群系切换为下界.'
        - '&c警告，请先清理岛屿内的水、冰与雪！'
  '*':
    biome: SWAMP
    required-permission: ''
    access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzdlOGNiNTdmZTc5MGU5NjVlM2NmYTZjNGZiYzE2ZTMyMjYyMTBkNjVmNTYxNGU4ODUzZmE5ZmI4NDA3NDQ0MSJ9fX0='
      name: '&e沼泽群系 &a(可选择)'
      lore:
        - '&7将岛屿的群系切换为沼泽.'
    no-access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzdlOGNiNTdmZTc5MGU5NjVlM2NmYTZjNGZiYzE2ZTMyMjYyMTBkNjVmNTYxNGU4ODUzZmE5ZmI4NDA3NDQ0MSJ9fX0='
      name: '&e沼泽群系 &c(未解锁)'
      lore:
        - '&7将岛屿的群系切换为沼泽.'
  '~':
    biome: WOODED_HILLS
    required-permission: ''
    access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODJkNWZlZmUyMGRhZjMxYzIzOGVlMjI3ZGQxNDE4MjdhZGE1ZWY4NDgyZDhkMzU3YmJlNWE3Y2Y0MGFmODUifX19'
      name: '&e恶地群系 &a(可选择)'
      lore:
        - '&7将岛屿的群系切换为恶地.'
    no-access:
      type: PLAYER_HEAD
      skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODJkNWZlZmUyMGRhZjMxYzIzOGVlMjI3ZGQxNDE4MjdhZGE1ZWY4NDgyZDhkMzU3YmJlNWE3Y2Y0MGFmODUifX19'
      name: '&e恶地群系 &c(未解锁)'
      lore:
        - '&7将岛屿的群系切换为恶地.'

sounds:
  '!':
    access:
      type: ENTITY_ENDERMAN_TELEPORT
      volume: 0.8
      pitch: 0.2
    no-access:
      type: BLOCK_ANVIL_PLACE
      volume: 0.2
      pitch: 0.2
  '@':
    access:
      type: ENTITY_ENDERMAN_TELEPORT
      volume: 0.8
      pitch: 0.2
    no-access:
      type: BLOCK_ANVIL_PLACE
      volume: 0.2
      pitch: 0.2
  '%':
    access:
      type: ENTITY_ENDERMAN_TELEPORT
      volume: 0.8
      pitch: 0.2
    no-access:
      type: BLOCK_ANVIL_PLACE
      volume: 0.2
      pitch: 0.2
  '^':
    access:
      type: ENTITY_ENDERMAN_TELEPORT
      volume: 0.8
      pitch: 0.2
    no-access:
      type: BLOCK_ANVIL_PLACE
      volume: 0.2
      pitch: 0.2
  '&':
    access:
      type: ENTITY_ENDERMAN_TELEPORT
      volume: 0.8
      pitch: 0.2
    no-access:
      type: BLOCK_ANVIL_PLACE
      volume: 0.2
      pitch: 0.2
  '*':
    access:
      type: ENTITY_ENDERMAN_TELEPORT
      volume: 0.8
      pitch: 0.2
    no-access:
      type: BLOCK_ANVIL_PLACE
      volume: 0.2
      pitch: 0.2
  '~':
    access:
      type: ENTITY_ENDERMAN_TELEPORT
      volume: 0.8
      pitch: 0.2
    no-access:
      type: BLOCK_ANVIL_PLACE
      volume: 0.2
      pitch: 0.2
```