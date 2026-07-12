# 成员职位菜单

在这里你可以找到自定义成员职位界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

### 职位物品

玩家职位菜单允许为成员设置职位。它有几个需要配置的按钮。只需在排版为其分配自定义字符即可。

特殊类型的按钮与普通格式的物品保持一致，但有一个必须设置的额外参数：

|字段|类型|描述|
|---|---|---|
| `role` | 字符串/整数 | 点击时设置的职位，可为 config.yml 中的职位名称或数字 ID。 |

::: info

当职位设置为岛屿领袖时，点击为其他玩家分配这个职位会使得岛屿拥有权也发生转移。

:::

## 声音设置

在这部分配置中你可以自定义玩家点击物品时发出的音效。你可以在[这里](index.md#物品音效)找到正确配置音效的教程。

## 命令设置

在这部分配置中你可以自定义玩家点击物品时执行的命令。你可以在[这里](index.md#命令部分)找到正确执行命令的教程。

## 权限设置

在这部分配置中你可以自定义玩家点击物品所需要的权限。你可以在[这里](index.md#权限部分)找到正确配置权限条件的教程。

## 菜单示例

这是成员管理菜单的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '&8&l{}'
previous-menu: true

pattern:
  - '$ $ $ $ $ $ $ $ $'
  - '$ # # # # # # # $'
  - '$ @ # % # & # * $'
  - '$ # # # # # # # $'
  - '$ $ $ $ $ $ $ $ $'

items:
  '$':
    type: STAINED_GLASS_PANE
    data: 15
    name: '&f'
  '@':
    role: Member
    type: LEATHER_CHESTPLATE
    name: '&c成员'
    lore:
      - '&7点击将玩家的职位设置为普通成员.'
    flags:
      - HIDE_ATTRIBUTES
  '%':
    role: Moderator
    type: GOLD_CHESTPLATE
    name: '&e小管理'
    lore:
      - '&7点击将玩家的职位设置为小管理.'
    flags:
      - HIDE_ATTRIBUTES
  '&':
    role: Admin
    type: IRON_CHESTPLATE
    name: '&e大管理'
    lore:
      - '&7点击将玩家的职位设置为大管理.'
    flags:
      - HIDE_ATTRIBUTES
  '*':
    role: Leader
    type: DIAMOND_CHESTPLATE
    name: '&e领袖'
    lore:
      - '&7点击转让岛屿拥有权.'
    flags:
      - HIDE_ATTRIBUTES

sounds:
  '@':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
  '%':
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
```