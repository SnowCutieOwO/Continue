# 消息文件

在这里你可以找到配置插件消息的相关信息。

你能编辑的所有消息都存储在语言文件中。大多数消息都可自定义（约 99%），你可以按需编辑。其中一些消息包含内建变量，用于显示完成操作的相关信息。

例如，进行该操作的玩家名称、操作针对的目标等。

除了内建变量以外，所有消息文本都可以嵌入来自 PlaceholderAPI 或 MVdWPlaceholderAPI 的变量，你可以在主页找到。你可以借此制作更复杂的消息。例如，带有悬浮提示框的可点击消息。

## 原文本

原文本为不包含其他内容的字符串 —— 不能点击、不能发送 ActionBar 消息等内容。这些消息抑郁编辑。你要做的就是将消息文本当做字符串编辑，就这样！

``` YAML
RAW_MESSAGE: '我是一条不带任何特殊功能的字符串! &a支持颜色! &{HEX:4e87ee}即便是 1.16 加入的十六进制颜色也是支持的！!'
NEW_LINE_MESSAGE: |
  &a这是第一行.
  &6这是第二行.
  &c你可以添加任意多的行数 :D
```

## 复杂消息

复杂消息指带有额外操作的消息。ActionBar 消息、标题消息、悬浮提示框文本都处于这些分类。

::: info

你可以在一条消息内组合使用不同的消息类型。

:::

### ActionBar 消息

你可以发送 ActionBar 消息，它位于物品栏上方。格式如下：

``` YAML
MESSAGE:
  action-bar:
    text: '&a这会以 ActionBar 消息的形式发出!'
```

@[video](./videos/action-bar-example.mp4)

### 标题消息

你可以向玩家发送标题，即显示在准星上方的大字。格式如下：

``` YAML
MESSAGE:
  title:
    title: '&a大字文本'  # 若你不需要这一部分，只需将其改为 '' 即可.
    sub-title: '&6小字文本'  # 若你不需要这一部分，只需将其改为 '' 即可.
    fade-in: 20  # 淡入时间 (单位为刻).
    duration: 60  # 持续时间 (单位为刻).
    fade-out: 20  # 淡出时间 (单位为刻).
```

@[video](./videos/title-example.mp4)

### BossBar 消息

你可以向玩家发送 BossBar 消息，即血条消息。格式如下：

``` YAML
MESSAGE:
  bossbar:
    color: 'PINK'  # BopssBar 消息的颜色.
    message: '&eBossBar 消息示例'
    ticks: 100  # BossBar 的持续时间 (单位为刻)
```

### 声音

你可以在发送消息的同时播放声音，格式如下：

``` YAML
MESSAGE:
  sound:
    type: 'ENTITY_EXPERIENCE_ORB_PICKUP'  # 播放的音效名称.
    volume: 1
    pitch: 1
```

### 可交互消息

你可以向玩家发送带有悬浮提示框或点击动作的消息。格式如下：

``` YAML
MESSAGE:
  a:   # 随机但不可重复的键名.
    text: '&a这是一段悬浮字提示文本.'
    tooltip: '&6隐藏的消息!'
  b:
    text: '&6这条消息可以触发命令, 且位于上一条消息之后.'
    command: '/gmc'
```

@[video](./videos/interactable-messages-example.mp4)

### 自定义语言文件

创建一个新语言文件非常简单。你只需要复制 en-US.yml 文件，然后将其重命名为有效的语言格式即可！你可以在这里找到可用语言代码的列表。  
在你创建了新的文件之后，你可以通过上文提及的格式编辑消息文件。如果版本更新增添了新的消息字符串，则它们会以英语原文的方式出现在你的自定义语言文件中。