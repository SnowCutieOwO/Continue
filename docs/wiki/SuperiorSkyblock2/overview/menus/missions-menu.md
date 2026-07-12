# 任务菜单

在这里你可以找到自定义成员界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 分类按钮

任务菜单会为玩家展示不同类别的任务。每个分类按钮所在的格子都不是在菜单中直接定义的——它是由 `config.yml` 文件 `missions-categories` 下的 `slot` 部分决定的。点击分类按钮之后就能展开分类下的任务菜单了。

你在这个菜单中配置的物品会用于显示格子——在同一个格子里设置的物品可以改变分类的外观。

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

## 声音设置

在这部分配置中你可以自定义玩家点击物品时发出的音效。你可以在[这里](index.md#物品音效)找到正确配置音效的教程。

## 命令设置

在这部分配置中你可以自定义玩家点击物品时执行的命令。你可以在[这里](index.md#命令部分)找到正确执行命令的教程。

## 权限设置

在这部分配置中你可以自定义玩家点击物品所需要的权限。你可以在[这里](index.md#权限部分)找到正确配置权限条件的教程。

## 菜单示例

这是任务菜单的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '&l任务'
previous-menu: true

pattern:
  - '$ $ $ $ $ $ $ $ $'
  - '$ * * * * * * * $'
  - '$ * # @ % ^ & * $'
  - '$ * * * * * * * $'
  - '$ $ $ $ $ $ $ $ $'

items:
  '$':
    type: STAINED_GLASS_PANE
    data: 15
    name: '&f'
  '#':
    type: DIAMOND_PICKAXE
    name: '&e矿工任务'
    lore:
      - '&7点击开始你的矿工生活.'
    flags:
      - HIDE_ATTRIBUTES
  '@':
    type: SKULL_ITEM
    data: 2
    name: '&e杀手任务'
    lore:
      - '&7点击开始你的杀手生活.'
  '%':
    type: WHEAT
    name: '&e农夫任务'
    lore:
      - '&7点击开始你的农夫生活.'
  '^':
    type: FISHING_ROD
    name: '&e渔夫任务'
    lore:
      - '&7点击开始你的渔夫任务.'
  '&':
    type: MAP
    name: '&e探险家任务'
    lore:
      - '&7点击开始你的探险家任务.'

sounds:
  '#':
    type: CHEST_OPEN
    volume: 0.8
    pitch: 1
  '@':
    type: CHEST_OPEN
    volume: 0.8
    pitch: 1
  '%':
    type: CHEST_OPEN
    volume: 0.8
    pitch: 1
  '^':
    type: CHEST_OPEN
    volume: 0.8
    pitch: 1
  '&':
    type: CHEST_OPEN
    volume: 0.8
    pitch: 1
```