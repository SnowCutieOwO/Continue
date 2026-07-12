# 岛屿地标菜单

在这里你可以找到自定义岛屿银行界面的教程。

## 全局设置

首先，通过 `title`（字符串）设置为菜单赋予自定义标题。之后，你可以自行配置其他选项：`previous-menu`（布尔值）决定是否在关闭菜单后显示上级菜单，`type`（字符串）决定菜单显示的界面类型，`open-sound`（声音格式）可以在打开菜单时播放自定义音效。

::: info

你可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/inventory/InventoryType.html)找到有效的界面类型。

:::

## 排版设置

让我们着手研究排版。排版部分决定了菜单的显示样式。这是一系列字符串，其中的每个字符都代表着菜单中显示的一个按钮。它应当包含一至六行的字符串，每个字符串包含九个字符——空格不算作字符。如果不同格子有两个相同的字符，则这两个格子会显示相同的物品。物品的实际显示内容不在这里配置，而是在 `items` 部分。

## 岛屿银行相关设置

岛屿地标有两个可配置的额外设置。只需将代表它们的字符填入排版设置中即可将这些按钮置入菜单。

|字段|类型|描述|
|---|---|---|
| `balance` | 单字符 | 展示岛屿银行的自定义按钮。 |
| `logs` | 单字符 | 打开[岛屿银行日志](bank-logs-menu.md)的自定义按钮。 |

## 物品设置

这就是你配置物品的地方。你可以在[这里](index.md#编辑菜单内的物品)找到如何正确配置物品的教程。

### 自定义变量

`balance` 物品支持自定义变量！
* `{0}` - 银行存款。
* `{1}` - 银行存款，按逗号分隔。
* `{2}` - 银行存款，按格式显示，`K` 代表千，`M` 代表百万。
* `{3}` - 银行存款上限。
* `{4}` - 银行存款上限，按逗号分隔。
* `{5}` - 银行存款上限，按格式显示，`K` 代表千，`M` 代表百万。
* `{6}` - 上次利息发放的时间。
* `{7}` - 下次利息发放的时间。

## 声音设置

在这部分配置中你可以自定义玩家点击物品时发出的音效。你可以在[这里](index.md#物品音效)找到正确配置音效的教程。

相较普通的声音设置，银行菜单的动作物品有两种特殊条件的声音：`success-sound`，在交易成功时播放，以及 `fail-sound`，在交易失败时播放。

``` YAML
sounds:
  '!':
    success-sound:
      type: ORB_PICKUP
      volume: 0.2
      pitch: 0.2
    fail-sound:
      type: ANVIL_LAND
      volume: 0.2
      pitch: 0.2
```

## 命令设置

在这部分配置中你可以自定义玩家点击物品时执行的命令。你可以在[这里](index.md#命令部分)找到正确执行命令的教程。

## 权限设置

在这部分配置中你可以自定义玩家点击物品所需要的权限。你可以在[这里](index.md#权限部分)找到正确配置权限条件的教程。

## 菜单示例

这是岛屿地标菜单的示例配置，涵盖了本章节教程提及的大部分技术及功能。

``` YAML
title: '&l岛屿银行'
previous-menu: true

pattern:
  - '= - @ @ @ @ @ - ='
  - '- @ ! @ @ @ % @ -'
  - '@ # @ @ * @ @ ^ @'
  - '- @ $ @ @ @ & @ -'
  - '= - @ @ ~ @ @ - ='

balance: '*'
logs: '~'

items:
  '!':
    type: STAINED_GLASS_PANE
    data: 5
    name: '&a存入半数'
    lore:
      - '&7将账户中的半数存款存入银行.'
    bank-action:
      deposit: 50.0
  '#':
    type: STAINED_GLASS_PANE
    data: 5
    name: '&a存入钱款'
    lore:
      - '&7将账户中的钱存入银行.'
    bank-action:
      deposit: 0.0
  '$':
    type: STAINED_GLASS_PANE
    data: 5
    name: '&a存入所有'
    lore:
      - '&7将账户中所有钱存入银行.'
    bank-action:
      deposit: 100.0
  '%':
    type: STAINED_GLASS_PANE
    data: 14
    name: '&a取出半数'
    lore:
      - '&7从银行中取出半数存款.'
    bank-action:
      withdraw: 50.0
  '^':
    type: STAINED_GLASS_PANE
    data: 14
    name: '&a取出存款'
    lore:
      - '&7从银行中取出存款.'
    bank-action:
      withdraw: 0.0
  '&':
    type: STAINED_GLASS_PANE
    data: 14
    name: '&a取出所有'
    lore:
      - '&7从银行中取出所有存款.'
    bank-action:
      withdraw: 100.0
  '*':
    type: PAPER
    name: '&6Balance'
    lore:
      - '&7银行目前存款为 ${2}'
      - '&7下次利息发放时间为 {7}'
  '=':
    type: EMERALD_BLOCK
    name: '&f '
  '-':
    type: EMERALD
    name: '&f '
  '~':
    type: EXP_BOTTLE
    name: '&6交易日志'

sounds:
  '!':
    success-sound:
      type: ORB_PICKUP
      volume: 0.2
      pitch: 0.2
    fail-sound:
      type: ANVIL_LAND
      volume: 0.2
      pitch: 0.2
  '~':
    type: ORB_PICKUP
    volume: 0.2
    pitch: 0.2
```