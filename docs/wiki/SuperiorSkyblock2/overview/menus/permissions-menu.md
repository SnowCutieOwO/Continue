# 权限菜单

在这里你可以找到自定义权限界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 分页式菜单设置

权限菜单是分页菜单，它会显示一列可用的物品——在这里就是权限列表。它的数量可能会大于菜单实际拥有的格子数量，这种情况下菜单就需要分成多页。

这些类型的菜单有四个额外选项：
* `slots` - 代表着权限的按钮。
* `previous-page` - 代表着翻回上一页的按钮。
* `current-page` - 代表着当前页的按钮。
* `next-page` - 代表着翻到下一页的按钮。

## 消息部分

权限菜单可以开放给指定玩家或职位。不同权限组是否有权浏览物品显示的消息由如下这些设置控制：

|参数|类型|描述|
|---|---|---|
| `no-role-permission` | 字符串 | 当玩家当前职位无权设置时显示的文本。`{}` 可返回职位名称。 |
| `exact-role-permission` | 字符串 | 当玩家当前职位正好符合职位要求时显示的文本。`{}` 可返回职位名称。 |
| `higher-role-permission` | 字符串 | 当玩家当前职位高于所需要求时显示的文本。`{}` 可返回职位名称。 |

``` YAML
messages:
  no-role-permission: '&8 - &c{}'
  exact-role-permission: '&8 - &2{}'
  higher-role-permission: '&8 - &a{}'
```

## 权限配置部分

除了一般的菜单配置，权限菜单还有一个 `permission` 部分，可以控制所有菜单权限。每个权限都有自己的子配置，以岛屿权限的名称作为其键名。每个权限部分都有如下字段：

|字段|类型|描述|
|---|---|---|
| `display-menu` | 布尔值 | 这个权限是否展示在菜单中。 |
| `permission-enabled` | 配置部分（物品） | 权限启用时显示的物品。 |
| `permission-disabled` | 配置部分（物品） | 权限禁用时显示的物品。 |
| `role-permission` | 配置部分（物品） | 权限只对某一职位而非玩家开放时显示的物品。 |
| `has-access` | 配置部分 | 包含一个声音部分（以及可选的命令部分），在设置权限时触发。 |
| `no-access` | 配置部分 | 包含一个声音部分（以及可选的命令部分），在不能设置权限时触发。 |

`role-permission` 物品的描述支持两个自定义变量：`{}` - 返回当前拥有权限的职位；只有 `{0}` 的描述会被替换为拥有权限的职位列表，使用的格式则来自 `messages` 部分。

``` YAML
permissions:
  all:
    display-menu: true
    permission-enabled:
      type: BEDROCK
      name: '&6全部'
      lore:
        - '&7允许使用岛屿的所有功能.'
        - '&7当前状态为&a启用&7.'
    permission-disabled:
      type: BEDROCK
      name: '&6All'
      lore:
        - '&7允许使用岛屿的所有功能.'
        - '&7当前状态为&c禁用&7.'
    role-permission:
      type: BEDROCK
      name: '&6All'
      lore:
        - '&7允许使用岛屿的所有功能.'
        - '&7可用职位: &e{}&7.'
        - ''
        - '{0}'
    has-access:
      sound:
        type: ORB_PICKUP
        volume: 0.2
        pitch: 0.2
    no-access:
      sound:
        type: ANVIL_LAND
        volume: 0.2
        pitch: 0.2
```

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
title: '&l权限控制面板'
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

messages:
  no-role-permission: '&8 - &c{}'
  exact-role-permission: '&8 - &2{}'
  higher-role-permission: '&8 - &a{}'

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

permissions:
  animal_breed:
    display-menu: true
    permission-enabled:
      type: WHEAT
      name: '&6动物繁殖'
      lore:
        - '&7允许繁殖岛屿内的动物.'
        - '&7当前状态为&aENABLED&7.'
    permission-disabled:
      type: WHEAT
      name: '&6动物繁殖'
      lore:
        - '&7允许繁殖岛屿内的动物.'
        - '&7当前状态为&cDISABLED&7.'
    role-permission:
      type: WHEAT
      name: '&6动物繁殖'
      lore:
        - '&7允许繁殖岛屿内的动物.'
        - '&7对应职位: &e{}&7.'
        - ''
        - '{0}'
    has-access:
      sound:
        type: ORB_PICKUP
        volume: 0.2
        pitch: 0.2
    no-access:
      sound:
        type: ANVIL_LAND
        volume: 0.2
        pitch: 0.2
  # ... more privileges follow the same format ...
```