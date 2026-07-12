# 价值菜单

在这里你可以找到自定义升级界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

菜单的标题支持自定义变量：

* `{0}` - 岛屿拥有者的名称；
* `{1}` - 岛屿的价值；
* `{2}` - 岛屿的价值，按格式显示，`K` 代表千，`M` 代表百万。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

### 方块价值物品

价值菜单展示了岛屿上不同类型的方块价值及等级。不过在此之前，你必须先设置特殊类型的按钮才能让它正常生效。

这些特殊类型的按钮格式与一般物品类似，但拥有必须设置的额外参数：

|字段|类型|描述|
|---|---|---|
| `block` | 字符串 | 记录的方块名称。可以为材料名（例如 `IRON_BLOCK`）或带有实体的刷怪笼（例如 `MOB_SPAWNER:BLAZE`）。 |

### 自定义变量

升级物品（`slots`、`previous-page` 等）支持嵌入内建变量！

* `{0}` - 岛屿上该方块的数量。
* `{1}` - 方块的总价值。
* `{2}` - 方块的总等级。
* `{3}` - 方块的总价值，按格式显示，`K` 代表千，`M` 代表百万。
* `{4}` - 方块的总等级，按格式显示，`K` 代表千，`M` 代表百万。

## 声音设置

在这部分配置中你可以自定义玩家点击物品时发出的音效。你可以在[这里](index.md#物品音效)找到正确配置音效的教程。

## 命令设置

在这部分配置中你可以自定义玩家点击物品时执行的命令。你可以在[这里](index.md#命令部分)找到正确执行命令的教程。

## 权限设置

在这部分配置中你可以自定义玩家点击物品所需要的权限。你可以在[这里](index.md#权限部分)找到正确配置权限条件的教程。

## 菜单示例

这是升级菜单的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '{0} &n${1}'
previous-menu: true

pattern:
  - '& & & & & & & & &'
  - '% $ A B C D E F %'
  - '% % G H I J K L %'
  - '% * M N O P Q R %'
  - '% % S T U V W X %'
  - '& & & & & & & & &'

items:
  '&':
    type: STAINED_GLASS_PANE
    data: 15
    name: '&f'
  '$':
    type: MOB_SPAWNER
    name: '&e&l刷怪笼 ->'
    flags:
      - HIDE_ATTRIBUTES
  '*':
    type: BOOK_AND_QUILL
    name: '&e&l物品 ->'
  'A':
    block: MOB_SPAWNER:IRON_GOLEM
    type: SKULL_ITEM
    data: 3
    skull: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODkwOTFkNzllYTBmNTllZjdlZjk0ZDdiYmE2ZTVmMTdmMmY3ZDQ1NzJjNDRmOTBmNzZjNDgxOWE3MTQifX19'
    name: '&e&l[!] &7铁傀儡刷怪笼'
    lore:
      - '&6&l* &e&l数量 &fx{0}'
      - '&6&l* &e&l价值: &f${1}'
      - '&6&l* &e&l等级: &f${2}'
  'M':
    block: HOPPER
    type: HOPPER
    name: '&e&l[!] &7漏斗'
    lore:
      - '&6&l* &e&l数量 &fx{0}'
      - '&6&l* &e&l价值: &f${1}'
      - '&6&l* &e&l等级: &f${2}'
  'O':
    block: IRON_BLOCK
    type: IRON_BLOCK
    name: '&e&l[!] &7铁块'
    lore:
      - '&6&l* &e&lQuantity &fx{0}'
      - '&6&l* &e&l价值: &f${1}'
      - '&6&l* &e&l等级: &f${2}'
  # ... 其他方块格式保持一致 ...
```