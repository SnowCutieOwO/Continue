# 🌏 高级语言管理

## 默认语言
你可以在 `config.yml` 文件中设置插件的默认语言。

``` YAML
config-files:
  language: en_US
  # Premium version only.
  per-player-language: true
```
在这里输入的应该是不带后缀的语言文件名称。所有的语言文件都储存在 `languages` 文件夹。你也可以自行通过复制 `en_US.yml` 文件并将复制后的文件重命名为对应语言代码。例如 `zh_CN.yml`。

::: warning

以下内容仅在 **4.2.0** 版本后提供。

:::


## 分玩家区分语言 <font color="red">- 仅付费版</font>

你可以在 `config.yml` 文件中找到 `per-player-language` 选项来启用分玩家区分语言功能。启用后，插件将根据玩家的客户端语言自动显示对应语言文件提供的文本，请注意，必须存在对应的语言文件，插件才能自动为使用该语言的玩家切换显示的文本，否则，将会以默认语言的文本输出。

## 语言变量

你可以通过 `{lang:<语言键名>}` 这样的格式来使用语言变量。语言变量允许您根据玩家的客户端语言输出不同的文本。

你需要在所有的语言文件中通过 `override-lang` 部分添加像 `语言键名: 文本` 这样格式的内容来表示自定义语言。例如：

``` YAML
// ... 略去原先语言文件就存在的内容部分
# 新增的内容
override-lang:
  # 这里代表使用了 shop-title 作为了语言键
  shop-title: 'Item Shop'
```

``` YAML
// ... 略去原先语言文件就存在的内容部分
# 新增的内容
override-lang:
  # 这里代表使用了 shop-title 作为了语言键
  shop-title: '物品商店'
```

然后，在你想要使用的地方使用 `{lang:shop-title}` 变量即可使用。

在 `config.yml` 文件中，你还可以直接使用 `{lang}` 代表此配置选项的值直接从语言文件中读取。语言键名应该和配置选项在 `config.yml` 文件的结构和键名保持一致，例如：

在 `config.yml` 文件中：

``` YAML
placeholder:
  # 仅付费版本
  compare:
    up: '{lang}'
    down: '{lang}'
    same: '{lang}'
```

在每个语言文件中：

``` YAML
// ... 略去原先语言文件就存在的内容部分
override-lang:
  placeholder:
    compare:
      up: '↑'
      down: '↓'
      same: '-'
```

类似的，如果我们无法对应的语言文件中找到该自定义语言，那么我们将会在默认语言文件中搜索，如果仍然无法找到，那么我们就不会解析这个变量。

## 高级消息格式 <font color="red">- 仅付费版</font>

默认情况下，我们的语言文件都是直接配合 [颜色代码](color-code.md) 写入我们想要输出给玩家的信息。但是，你还可以通过这个功能，不仅仅只显示普通消息给玩家，还可以显示 ActionBar，Title，BossBar，音效等。

当使用高级消息格式时，你仍然可以使用颜色代码（包括MiniMessage）。

### 最为普通的用法

``` YAML
welcome: '欢迎来到服务器!'
```

### 表示聊天框中的消息

``` YAML
welcome: '[message]&a欢迎![/message]'
```

### 表示标题

``` YAML
welcome: '[title=20,60,20]&6欢迎;;&e这是副标题[/title]
```

### 表示同时发送聊天框消息和标题

你可以自由组合各种不同的消息类型，例如：

``` YAML
welcome: '[message]&a美好的一天![/message][title=20,60,20]&6欢迎;;&eT这是副标题[/title]'
```

### 表示 Action Bar

``` YAML
welcome: '[actionbar]&7请稍后...[/actionbar]'
```

### 表示 Boss Bar - 早期测试阶段

``` YAML
welcome: '[bossbar=GREEN,SOLID,1.0]&a庆祝这天[/bossbar]'
```

### 表示音效

``` YAML
welcome: '[sound=ENTITY_EXPERIENCE_ORB_PICKUP,1,1][/sound][sound=ENTITY_PLAYER_LEVELUP,1,1][/sound]'
```