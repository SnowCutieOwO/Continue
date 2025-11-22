# 奖励

自定义奖励的教程

## 介绍

奖励是玩家升级时执行的动作或给予的物品。奖励分为许多类型，包括属性、命令、权限、物品与经济。奖励同样支持菜单内的自定义消息与升级的聊天提醒。

## YAML 格式

配置奖励需要你先前见过的 YAML 格式，技术上称映射列表（Map Lists）。在 JSON 中等同于对象序列。映射列表格式如下：

``` YAML
patterns:
  - type: stat # 列表中第一个元素的第一条内容
    stat: strength
    value: 1
    pattern:
      interval: 1
  - type: stat # 列表中第二个元素的第一条内容
    stat: health
    value: 1.5
    pattern:
      interval: 1
```

::: warning

请注意上述的空格。键（`type`、`stat`、`value`）之间的缩进应当像上面那样对齐！如果你在载入配置时遇到了错误，很有可能是缩进问题。

:::

## 文件结构

奖励在 `rewards` 文件夹中配置，它们的名称对应了所配置的技能（如，`farming.yml` 即为耕作技能的奖励配置）。`global.yml` 文件控制所有技能的奖励，因此其内配置的奖励会对所有技能生效。你可能已经见过了每个技能包含着的默认奖励配置。每个文件都被分为两部分，即 `pattern`（间隔给予） 与 `levels`（指定等级）。

### 固定奖励

样式部分为技能升级进度中重复的奖励。每个在此的技能都应当有一个 `pattern` 设置，其下可设置 `start`、`interval`、与 `stop`。固定奖励可设置大部分奖励。

`start` 的值为该奖励首次出现时的技能等级；这个值应当不小于 2，因为玩家升级过程是从 1 升至 2 级开始的。如果没有指定，则默认为 2。

`interval` 是给予该奖励的等级及间隔；设置为 2 表示其每隔两级（2、4、6、... 级时）给予一次。默认值为 1。

`stop` 为该奖励出现的最大等级，即这些奖励出现的等级不大于设定的值。默认值为 `max-level`，即 `skills.yml` 中设定的内容。

示例固定奖励，会在每次升级时执行一条命令：

``` YAML
patterns:
  - type: command
    executor: console
    command: 'say 这条命令会在每次升级时执行'
    pattern:
      start: 2
      interval: 1
```

### 等级奖励

等级奖励即玩家升到指定等级时给予的奖励。你必须先设置触发的等级，如下所示：

``` YAML
levels:
  5:
    - type: command
      executor: console
      command: say hi
```

这个命令奖励会在玩家升到五级时触发。

## 奖励类型

每个奖励必须设置一个 `type` 以表示其类型。每种奖励都有不同的可选键，可据此进一步自定义。

### 属性奖励（`stat`）

属性奖励可提升 AuraSkills 属性，包括生命、力量、幸运、智慧与韧性。插件会自动处理菜单与聊天栏升级消息。

键：

* `stat` - 给予的属性名称，请填入诸如 `strength` 的英文原名。（必选）
* `value` - 提升的属性等级，默认为 1。（可选）
* `format` - 决定显示在菜单与升级消息中的小数位数。使用 Java DemicalFormat。

示例：

``` YAML
- type: stat
  stat: strength
  value: 1
```

::: info

**需要移除默认的属性奖励？** 你可以将默认固定奖励设置为 `patterns: []` 取消它们。但是，你也需要修改消息文件中有关菜单消息中的空行。

:::

### 命令奖励（`command`）

命令奖励允许你以玩家或控制台身份执行任何命令。

键：

* `command` - 执行的命令；不需要包含开头的斜杠。（必填）
  * 支持变量：
    * `{player}` - 玩家名称
    * `{level}` - 玩家升级后的等级
    * `{skill}` - 玩家升级的技能名称
    * 所有由 PlaceholderAPI 提供的变量（需安装 PlaceholderAPI）。内建变量会先于 PlaceholderAPI 变量解析，所以你可以将其组合使用。
  * 诸如“&”之类的颜色代码需使用“\&”转义。
* `executor` - 决定命令执行者的身份，可为 `console` 或 `player`。通过玩家身份执行的命令会考虑玩家是否持有对应权限。默认为控制台身份。（可选）
* `revert_command` - 在玩家失去技能等级时触发的命令列表。可用变量与上述相同。（可选）
* `revert_executor` - 失去技能等级时命令执行者的身份，可为 `console` 或 `player`。（可选）

示例：

``` YAML
- type: command
  executor: console
  command: say 升级!
  revert_executor: console
  revert_command: say 移除了升级
```

### 权限奖励（`permission`）

权限奖励会给予玩家权限节点。权限奖励相较命令奖励有如下优势：

1. 权限会在玩家失去对应等级时撤回。
2. 在配置中增加权限奖励时，已达到这些等级的玩家会自动补发（上线时触发）。

权限奖励目前仅在安装了 [LuckPerms](https://www.spigotmc.org/resources/luckperms.28140) 的情况下生效。

键：

* `permission` - 给予的权限节点。（必填）
* `value` - 权限的值，可为 `true` 或 `false`，默认为 `true`。（可选）

示例：

``` YAML
- type: permission
  permission: some.permission.node
  value: true
```

### 物品奖励（`item`）

物品奖励会给予玩家物品，支持通过键与注册系统的任意物品。物品需要先在游戏内手持并通过命令 `/skills item register [键]` 注册。也可通过命令 `/skills item unregister [键]` 注销。在玩家背包已满时会收到提醒，给予的物品会进入未领取物品界面，可通过 `/skills claimitems` 界面取回。未领取的物品不会因重启而消失。

键：

* `key` - 通过命令 `/skills item register [键]` 注册的的物品键名。
* `amount` - 给予的物品数量，可超过最大堆叠数。若给予数量超出最大堆叠数，物品会按其最大堆叠数占据多个格子。如果物品无法放入玩家背包，它们会进入未领取物品界面。默认值为注册物品时手持的数量。（可选）

示例：

``` YAML
- type: item
  key: some_item_key
  amount: 24
```

### 经济奖励（`money`）

经济奖励给予玩家 Vault 货币。

键：

* `amount` - 给予的数量。
* `formula` - 根据 `level` 变化的给予数量计算公式。不能与 `amount` 共用。

示例：

``` YAML
- type: money
  amount: 1000
```

用于替换旧版金钱奖励的固定奖励示例：

``` YAML
patterns:
  - type: money
    formula: '100+10*level*level'
    pattern:
      interval: 1
```

如果你没有安装 Vault 或特殊经济插件，你仍然可以使用命令给予。如下所示：

``` YAML
- type: command
  executor: console
  command: eco give {player} %math_{level}*2+100%
```

## 消息

命令、权限与物品奖励支持自定义菜单与聊天栏消息。`menu_message` 决定升级菜单内显示的消息（通过 `/skills menu` 内的按钮打开）。这会在 “奖励：”（Rewards：）下显示。`chat_message` 键用于显示玩家升级后的聊天栏消息。如果你想要 `menu_message` 与 `chat_message` 使用同一条消息，你可以改为使用 `message` 缩写。

消息的值可为字符串（直接显示）或消息文件中的路径。插件会尝试替换消息键，如果未找到则直接显示原字符串。消息支持使用“&”彩色代码。

注意：消息默认没有换行，你需要通过“\n”为其手动添加换行。

示例菜单与聊天栏消息：

``` YAML
- type: permission
  permission: some.permission.node
  value: true 
  menu_message: \n  菜单内消息
  chat_message: \n  聊天栏内消息
```

为菜单和聊天栏消息使用同一值缩写的示例：

``` YAML
- type: command
  executor: console
  command: say 升级!
  message: \n  同时在菜单与聊天栏中使用
```

## 默认与自动处理的奖励消息

物品奖励使用其自定义名称或消息文本中 `rewards.item` 下的本地化名称。若物品没有显示名称，它不会显示任何消息。

属性奖励消息因使用 `menus.level_progression_menu.rewards_entry` 与 `leveler.stat_level` 处理菜单和聊天栏消息而无需手动修改。你应该在对应的消息文件中修改它们。

经济奖励消息因使用 `menus.level_progression_menu.money_reward` 与 `leveler.money_reward`  处理菜单和聊天栏消息而无需手动修改。单次升级内给予的所有经济奖励都会合并为一条消息。