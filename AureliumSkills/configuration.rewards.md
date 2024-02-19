# 奖励配置
指导创建自定义奖励的教程。  
  
## 介绍  
奖励是玩家升级技能后以执行操作或给予物品等为内容的操作。这里有许多不同种类的奖励，包括但不限于属性增减、执行命令、修改权限、给予物品或经济货币。奖励也支持在菜单和聊天栏中的消息自定义。  
  
### YAML 格式  
正确地配置奖励需要你预先学习一些 YAML 的语法结构，技术上一般称作映射列表。这些就是包含着多个元素的列表，与 JSON 中的数组相似。映射列表通常如下方格式般定义：  

```
patterns:
  - type: stat # 列表中的第一个元素开始标志
    stat: strength
    value: 1
  - type: stat # 列表中的第二个元素开始标志
    stat: health
    value: 1.5
```

> **！**注意横杠符号之间的缩进。在这个示例中，正常的一个缩进是两个空格。所以，在你映射列表中的各个值（如type、stat、value）相比较它们的开头，应当有共计四个空格的缩进。

## 文件结构  
奖励是存储在 `AureliumSkils/rewards` 文件夹下的可修改配置，它们的名称对应了它将会修改的各个技能名称（例如，farming.yml 表示它只会控制农耕技能的相关奖励）。这里也有一个 `global.yml` 用以控制所有技能的奖励内容，因此添加进这个文件中的所有奖励将会对所有技能生效。默认情况下，你会看见每个技能有各自的示例配置。每个文件都被分成两大区域，分别是 `patterns` 与`levels`。  
  
### 固定（Patterns）区域 
固定区域是设置正常技能升级时常会重复出现的奖励内容。每一个在该部分的奖励配置都应该有一部分包含 `start`、`interval` 和 `stop` 值的元素。固定模式可使用所有种类的奖励。  
初始值（`start`）是该固定奖励初次出现时玩家到达的等级；这个值至少应为2，因为玩家进入服务器后第一次升级只可能是从1级开始升级。若该值未被指定，那么它将默认为2。  
  
间隔（`interval`）是两个固定奖励之间的等级差距；当该值设定为 2 时，表示每两级能领取到该固定奖励（2、4、6、…级）。该内容的默认值为 1。  
  
停止值（`stop`）是指该固定奖励出现时玩家升级后等级的最大值，但需要注意，在初始值和间隔影响下，玩家能领取到该固定奖励的等级并不一定等于停止值。这个值只是简单地定义了不大于该等级的玩家可以领取到这个区间的固定奖励。在留空时，该值与 config.yml 下各自技能的 `max-level` 值相同。  
  
### 指定等级（Levels）区域 
该区域设置到达特定等级时的奖励内容。你必须按下列各式先定义一个到达对应等级触发的区域，然后才能开始填入奖励内容。设置如下文所示：  

```
levels:
  5:
    - type: command
      executor: console
      command: say hi
```

该命令奖励将会在玩家升到 5 级时触发并执行。  
  
## 奖励种类
每一种奖励都必须有决定它种类的 `type` 值。每种不同的奖励配置都有各自需配置的值，且每个值均是可选的。  
  
### 属性奖励（`stat`）
属性奖励允许在玩家升级后给予本插件的属性，包括生命（health）、力量（strength）、幸运（luck）、智慧（wisdom）以及韧性（toughness）。菜单和升级发送的聊天栏信息由插件自动处理。  
键名：  

*   `stat` - 奖励增加等级的属性名称，请使用诸如 strength 的英文原名（必需）
*   `value` - 增加属性等级的值，默认为 1 （可选）

示例：  

```
\- type: stat
  stat: strength
  value: 1
```

> **！****是否想要移除默认的属性奖励？**你可以将固定奖励部分设置为诸如 `patterns: \[\]` 的格式来禁用默认的奖励内容。但在这种情况下你可能需要编辑消息文件里的文本，使得在没有属性奖励的情况下不出现多余的空格。

### 命令奖励（`command`） 
命令奖励允许你以控制台或玩家的身份执行命令。  
键名：  

*   `command` - 需要执行的命令内容；不需要命令开头的斜杠。（必需）  
    *   支持的内建变量：  
        *   {player} - 返回玩家名称
        *   {level} - 返回玩家升到的等级
        *   {skill} - 返回玩家升级的技能名称
        *   所有 PlaceholderAPI 变量（需安装 PlaceholderAPI 插件）均支持解析。内建变量先于 PlaceholderAPI 解析，因此你可以将二者结合使用。
    *   使用 “&” 符号的颜色代码是允许的，但不要使用带转义符的颜色代码符“\\&”。
*   `executor` - 决定命令的执行方，可以为控制台（`console`）或玩家（`player`）。若使用玩家身份执行命令则不能绕过权限检查。默认为控制台身份。（可选）
*   `revert\_command` - 反转命令允许玩家因管理员而失去技能等级时触发相关的命令，可使用的变量与上方相同。（可选）
*   `revert\_executor` - 反转命令的执行方。（可选）

示例：  

```
\- type: command
  executor: console
  command: say leveled up!
  revert\_executor: console
  revert\_command: say removed level up
```

  
### 权限奖励（`permission`） 
权限奖励会将特定的权限节点发放给玩家。当需要给玩家权限时，你更应该使用该模块，而非插件的命令模块，因为直接的命令会在权限回收等方面出现许多问题，相对地，权限奖励发放模块则不会有。例如：1. 玩家失去等级时将权限回收；2. 添加权限奖励时会对已经达到该等级的玩家补发（在玩家加入后才可自动补发，对不在线玩家无效）。  
  
该模块仅在你以 [LuckPerms](https://www.spigotmc.org/resources/luckperms.28140) 为权限管理插件时有效。  
  
键名：  

*   `permission` - 所操作的权限节点（必需）
*   `value` - 权限节点的设定值，填入 `true` 或 `false`，默认为 `true`（可选）

示例：  

```
\- type: permission
  permission: some.permission.node
  value: true
```

### 物品奖励（`item`）  
物品奖励将特定物品发放给玩家，通过键值与注册内容系统而支持大部分的物品。奖励物品必须在游戏内手持该物品，并使用命令 `/skills item register \[命名\]` 来注册。物品也可使用命令 `/skills item unregister \[命名\]` 来解除注册。当玩家背包满时，插件将会提醒玩家，并将未领取的物品发放至玩家的临时库存。他们随后可使用 `/skills claimitems` 命令来领取这些物品。服务器重启后这些临时物品不会丢失。  
键名：  

*   `key` - 使用命令 `/skills item register \[命名\]` 注册的物品命名（必需）
*   `amount` - 给予该物品的数量，可超过最大堆叠值。若超过，多余的物品会按组堆叠发放给玩家，当玩家背包满时，物品将会发送至玩家的临时库存，给予物品的默认值为注册该物品时手持的物品数量。（可选）

示例： 

```
\- type: item
  key: some\_item\_key
  amount: 24
```
  
### 货币奖励（`money`） 
  
该模块简单地在玩家升级时为他们发放一定数量依赖 Vault 接口的货币。  
键名：  

*   `amount` - 给予货币数量

示例：  

```
\- type: money
  amount: 1000
```

若你不使用 Vault 或有其他的经济（译者注：例如点券），你可以使用命令奖励来正常给予货币奖励。你也可以使用 PlaceholderAPI 的 Math 变量拓展，通过计算按等级的应发放货币量来给予玩家对应数量的货币。下面是一个例子：  

```
\- type: command
  executor: console
  command: eco give {player} %math\_{level}\*2+100%
```
  
## 消息文本
命令、权限以及物品奖励均支持在菜单或聊天栏中插入自定义提示文本。`menu\_message` 键即是在升级进度菜单中显示的文本内容（可通过点击任意技能或输入命令 /skills menu 打开）。这将会在 “奖励：” 一栏下的奖励之后出现。`chat\_message` 键即是在玩家升级后聊天栏中出现的提示文本。若要求二者输出的内容相同，可将这两个值合并为 `message` 项并填入内容。  
  
消息文本的值可以是一条字符串（也就是你输入的内容），也可以是在消息配置中的一条消息文本。插件将优先解析字符串是否匹配了消息配置中的内容，若没有匹配到对应的文本，则将其按原样输出。消息文本同样支持彩色代码 “&”。  
  
注意：消息文本默认不带换行符，若要每个奖励单独一行显示，你必须在这些文本的开头加上换行符 “\\n”。  
设置了菜单和聊天栏消息的示例:  

```
\- type: permission
  permission: some.permission.node
  value: true 
  menu\_message: \\n  Some message in the menu
  chat\_message: \\n  Some message in chat
```

在 menu\_message 和 chat\_message 相同的情况下使用 message 参数简写的示例：  

```
\- type: command
  executor: console
  command: say leveled up!
  message: \\n  Both a menu and chat message
```

### 默认和自动处理的奖励消息  
物品奖励按消息配置中 rewards.item 下的物品名显示物品的名称。若物品没有展示名称，则默认不显示消息。  
  
属性奖励的相关消息通常由插件自动处理，因为它总是在菜单中使用消息配置的 `menus.level\_progression\_menu.rewards\_entry` 项，而在聊天栏中使用消息配置的 `leveler.stat\_level` 项。若要修改属性奖励的信息，则你应修改这两条消息配置中的文本。  
  
货币奖励也通常由插件处理，它总是在菜单中使用消息配置 `menus.level\_progression\_menu.money\_reward` 项，在聊天栏中使用消息配置的 `leveler.money\_reward` 项。所有特定等级的特定数量货币奖励将会叠加为单条信息，包括配置文本下的旧版设置 `skill-money-rewards` 项所设置的货币奖励。  
  
## 更多内容  
仍然困惑或格式不起作用？试着浏览一下[本插件的示例奖励配置文件](https://github.com/Archy-X/AureliumSkills/blob/master/bukkit/src/main/resources/rewards/example_rewards.yml)吧。
