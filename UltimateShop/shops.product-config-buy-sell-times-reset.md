# ♻️ 物品配置：交易次数重置

## 常被提及：为什么这个功能重置所有玩家的交易次数而不使服务器崩溃？

这个功能不会一次性清除所有玩家的交易次数。我们会基于**重置模式**存储**不同的时间戳数据**。当到达预计重置时间，我们就会开始重置数据。

* 如果玩家当前在服务器，则交易次数只会在玩家打开商店时重置。（在打开商店前，交易次数不会被重置）
* 如果玩家当前不在服务器，则交易次数只会在玩家下次进入服务器时重置。

这些措施是为了保证重置数据时插件的性能优化，我们不会修改它们的底层逻辑。如果你不喜欢，你可能需要考虑更换其他插件。

## 选项类型

购买次数有如下选项：

* `buy-times-reset-mode`（3.3.0 前为 `buy-limits-reset-mode`，功能相同）
* `buy-times-reset-time`（3.3.0 前为 `buy-limits-reset-time`，功能相同）
* `buy-times-reset-time-format`
* `buy-times-reset-value`

出售次数有如下选项：

* `sell-times-reset-mode`（3.3.0 前为 `sell-limits-reset-mode`，功能相同）
* `sell-times-reset-time`（3.3.0 前为 `sell-limits-reset-time`，功能相同）
* `sell-times-reset-time-format`
* `sell-times-reset-value`

若你想要启用对所有物品的交易次数重置，只需打开 `config.yml` 文件进行修改即可：

``` YAML
use-times:
  default-reset-mode: 'NEVER'
  default-reset-time: '00:00:00'
  # 仅对 CUSTOM 重置模式有效.
  default-reset-time-format: 'yyyy-MM-dd HH:mm:ss'
  default-reset-value: 0
```

无论你使用了什么方法，我们都可以发现其由三个选项类型组成：

* 重置模式
* 重置时间
* 重置时间格式（只在使用 `CUSTOM` 类型时需要填入）
* 重置值

## 重置模式

支持填入如下方法：

* `NEVER`：永不刷新。
* `TIMER`：在给定时间如五小时后刷新。
* `TIMED`：在指定时间如早晨 8：15 刷新。
* `COOLDOWN_TIMER`（于 3.3.0 加入）<font color="red">- 仅付费版</font>
* `COOLDOWN_TIMED`（于 3.3.0 加入）<font color="red">- 仅付费版</font>
* `RANDOM_PLACEHOLDER`：与指定随机变量同步重置时间。（于 3.3.0 加入）<font color="red">- 仅付费版</font>
* `CUSTOM`：在重置时间处直接填入重置时间点，插件不会进行任何计算。推荐通过 PlaceholderAPI 获取重置时间。你需要在 `reset-time-format` 处设置时间格式，这会影响 PlaceholderAPI 变量的输出结果。（于 3.3.0 加入）<font color="red">- 仅付费版</font>

### `COOLDOWN_TIMED`（或 `COOLDOWN_TIMER`）与 `TIMED`（或 `TIMER`）间的差异

`TIMED` 与 `TIMER` 在玩家每次到达交易限制时计算重置时间，而 `COOLDOWN_TIMED` 与 `COOLDOWN_TIMER` 则会在第一次交易时便开始计算重置时间，且在计时器结束前永远不会刷新。

因此，在使用 `COOLDOWN_TIMED` 或 `COOLDOWN_TIMER` 事件时，重置时间不会随服务器重启、配置更改或其他原因变化。这表示如果你意外地将物品设置为 1 年后刷新，重置时间不会在你修改后变化，但 `TIMED` 或 `TIMER` 可以做到。

## 重置时间

不同的重置模式需要在此填入不同的值。支持变量，<font color="red">**填入的变量必须为服务端侧的，即不随玩家变化而变化。**</font>

### `NEVER`

无需任何额外内容。

### `TIMER`/`COOLDOWN_TIMER`

你可以在这里填入由 `:` 分隔的三到六个数字。例如：`15:00:00`

每个从**右**至**左**的数字分别表示：

* 秒
* 分
* 时
* 天 <font color="red">- 仅付费版</font>
* 月 <font color="red">- 仅付费版</font>

在本示例中，即为 15 小时之后。即：**若时间为 `2023-09-04 12:00:00`。则会在 15 小时后重置，即 `2023-09-05 03:00:00`。**

### `TIMED`/`COOLDOWN_TIMED`

`TIMED` 与 `TIMER` 的组成几乎相同，但右起前三个数字代表着天数。以 15:00:00 为例：

若现在时间为 `2023-09-04 12:00:00`，则其会在 `2023-09-04 15:00:00` 重置。

这就是天数设置为 0 的结果。若将其设置为 1 则会额外增加一天。

如果你要做每日商店，则这个选项几乎无用，因为它必须被设置为 0，如果你需要做每周商店，则它必须设置为 6。因为你需要在最后一天重置时间，而不是在最后一天之后重置。

这种重置模式也支持设置多个重置时间，每个重置时间需要以 `;;` 分隔，我们会选择最早的时间。如：<font color="red">（仅付费版）</font>

``` YAML
    sell-times-reset-mode: 'TIMED'
    sell-times-reset-time: '20:00:00;;19:00:00'
```

在本示例中，这个物品会在每天的 19：00 与 20：00 重置。

### `CUSTOM` <font color="red">- 仅付费版</font>

你只需要在此填入 PlaceholderAPI 变量，且其必须返回年、月、日、时、分、秒的完整格式。你也需要在配置中填入它们的时间格式，因为不同类型的变量会返回不同的时间格式，插件很难自动识别。

### `RANDOM_PLACEHOLDER` <font color="red">- 仅付费版</font>

在此输入有效的随机变量 ID 即可。

## 重置值 <font color="red">- 仅付费版</font>

默认情况下，重置值为 0，但如果你想要做出一些改变，那你就可以修改这个值。另外，这个值也支持填入变量。若与随机变量组合，它可以在玩家每次重置之后使用不同的重置值。

<font color="red">这个选项非常危险，你必须谨慎设置。</font>你<font color="red">**必须**</font>确保**交易限制的值大于交易重置的值。**这表示一旦重置，玩家就可以再次购买/出售物品，否则你会发现物品不可逆地无法交易，**除非**在配置文件中重置交易限制或使用命令手动重置交易次数，<font color="red">切记</font>！

## 动态重置时间 <font color="red">- 仅付费版</font>

本示例使用了一个随机变量，实现在 3、4 或 5 小时后刷新物品而非固定事件点刷新。

首先在 `config.yml` 中按如下格式创建一个随机变量：

``` YAML
  # 仅付费版本。
  random:
    reset:
      reset-mode: ONCE
      elements:
        - '03:00:00'
        - '04:00:00'
        - '05:00:00'
```

在任意物品配置的 `buy-times-reset-time` 选项中使用这个变量。

``` YAML
  B:
    price-mode: ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: GOLD_INGOT
        amount: 1
    buy-prices:
      # 
    sell-prices:
      #
    buy-limits:
      default: '2'
    buy-times-reset-mode: 'TIMED'
    buy-times-reset-time: '{random_reset}' # <--- 在这里使用, 出售次数同样有效!
```

## 重置时间不正确？

* 物品必须至少交易一次才可存储其充值时间。否则的话，我们只能显示基于当前时间计算的预计重置时间。