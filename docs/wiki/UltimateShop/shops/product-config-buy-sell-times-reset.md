# ♻️ 物品配置：交易次数重置

## 常被提及：为什么这个功能重置所有玩家的交易次数而不使服务器崩溃？

这个功能不会一次性清除所有玩家的交易次数。我们会基于**重置模式**存储**不同的时间戳数据**。当到达预计重置时间，我们就会开始重置数据。

* 如果玩家当前在服务器，则交易次数只会在玩家打开商店时重置。（在打开商店前，交易次数不会被重置）
* 如果玩家当前不在服务器，则交易次数只会在玩家下次进入服务器时重置。

这些措施是为了保证重置数据时插件的性能优化，我们不会修改它们的底层逻辑。如果你不喜欢，你可能需要考虑更换其他插件。

## 重置

插件只会在如下情况中尝试重置：

* 玩家购买/出售物品前
* 玩家打开商店界面时
* 自动重置时（需在 `config.yml` 中启用 `use-times.auto-reset-mode` 选项，会消耗更多服务器性能）

## 选项类型

购买次数有如下选项：

* `buy-times-reset-mode`（3.3.0 前为 `buy-limits-reset-mode`，功能相同）
* `buy-times-reset-time`（3.3.0 前为 `buy-limits-reset-time`，功能相同）
* `buy-times-reset-time-format`
* `buy-times-reset-value`
* `buy-times-max-value`

出售次数有如下选项：

* `sell-times-reset-mode`（3.3.0 前为 `sell-limits-reset-mode`，功能相同）
* `sell-times-reset-time`（3.3.0 前为 `sell-limits-reset-time`，功能相同）
* `sell-times-reset-time-format`
* `sell-times-reset-value`
* `sell-times-max-value`

若你想要启用对所有物品的交易次数重置，只需打开 `config.yml` 文件进行修改即可：

``` YAML
use-times:
  default-reset-mode: 'NEVER'
  default-reset-time: '00:00:00'
  # 仅对 CUSTOM 重置模式有效.
  default-reset-time-format: 'yyyy-MM-dd HH:mm:ss'
  default-reset-value: 0
  # 设置为 -1 表示禁用。
  default-max-value: -1
  # 若设置为 true，商品的默认购买/出售次数会重置为商品配置或上述设置的默认值。
  set-reset-value-by-default: true
  # 若设置为 true，商品配置或上述设置的最大值将只在统计变量中生效。
  max-value-for-total-only: true
```

无论你使用了什么方法，我们都可以发现其由五个选项类型组成：

* 重置模式
* 重置时间
* 重置时间格式（只在使用 `CUSTOM` 类型时需要填入）
* 重置值
* 最大值

## 重置模式

支持填入如下方法：

* `NEVER`：永不刷新。
* `TIMER`：在给定时间如五小时后刷新。
* `TIMED`：在指定时间如早晨 8：15 刷新。
* `COOLDOWN_TIMER`（于 3.3.0 加入）<font color="red">**- 仅付费版**</font>
* `COOLDOWN_TIMED`（于 3.3.0 加入）<font color="red">**- 仅付费版**</font>
* `COOLDOWN_CUSTOM`（于 3.9.1 加入）<font color="red">**- 仅付费版**</font>
* `RANDOM_PLACEHOLDER`：与指定随机变量同步重置时间。（于 3.3.0 加入）<font color="red">**- 仅付费版**</font>
* `CUSTOM`：在重置时间处直接填入重置时间点，插件不会进行任何计算。推荐通过 PlaceholderAPI 获取重置时间。你需要在 `reset-time-format` 处设置时间格式，这会影响 PlaceholderAPI 变量的输出结果。（于 3.3.0 加入）<font color="red">**- 仅付费版**</font>

::: info

随机变量重置模式支持 `TIMER`、`TIMED`、`CUSTOM`。随机变量的重置时间会保存至服务器，因此它们的效果与 `COOLDOWN_TIMER`、`COOLDOWN_TIMED`、`COOLDOWN_CUSTOM` 相同。

:::

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

### `CUSTOM`/`COOLDOWN_CUSTOM` <font color="red">- 仅付费版</font>

你只需要在此填入 PlaceholderAPI 变量，且其必须返回年、月、日、时、分、秒的完整格式。你也需要在配置中填入它们的时间格式，因为不同类型的变量会返回不同的时间格式，插件很难自动识别。

### `RANDOM_PLACEHOLDER` <font color="red">- 仅付费版</font>

在此输入有效的随机变量 ID 即可。

## 重置值 <font color="red">- 仅付费版</font>

默认情况下，重置值为 0，但如果你想要做出一些改变，那你就可以修改这个值。另外，这个值也支持填入变量。若与随机变量组合，它可以在玩家每次重置之后使用不同的重置值。

重置值会在每次重置后使用，如果玩家从未购买或出售过对应的物品，你可能需要先在设置重置值前设置默认值。更多信息请见下文“默认值”部分。

<font color="red">这个选项非常危险，你必须谨慎设置。</font>你<font color="red">**必须**</font>确保**交易限制的值大于交易重置的值。**这表示一旦重置，玩家就可以再次购买/出售物品，否则你会发现物品不可逆地无法交易，**除非**在配置文件中重置交易限制或使用命令手动重置交易次数，<font color="red">切记</font>！

## 默认值 <font color="red">- 仅付费版</font>

上文的重置值只会在购买或出售次数重置时重置。部分情况下，如果你还需要将其设为默认值，可以在 `config.yml` 中 `times.set-reset-value-by-default` 处启用这个功能。如果你需要像默认库存这样的设定，那么这个功能非常适合你使用。

## 最大值 <font color="red">- 仅付费版</font>

你可以设置购买与出售次数的最大值。当达到这个值时，插件将不会继续对玩家的交易行为进行统计。

请注意：

* 到达限制后，玩家仍然可以购买或出售商品，但插件不会再记录他们的交易次数。如果你需要禁止玩家出售或收购物品，请使用“[商品](products.md)”配置中的 `buy-limits` 或 `sell-limits` 选项，而不是这个功能。
* 因为超出限制的购买次数将不再参与统计，如果这里的值大于限制值，购买和出售限制将会无效。也可能影响到其他未提及的功能。
* 你可以修改 `config.yml` 中的 `use-times.max-value-for-total-only` 选项确保次数变量能在到达最大值之后正常显示，而统计变量则能按预期停止增加。有关这两个变量的更多信息，请浏览[这里](../placeholders/built-in-placeholder.md)。

## 动态重置时间 <font color="red">- 仅付费版</font>

本示例使用了一个随机变量，实现在 3、4 或 5 小时后刷新物品而非固定事件点刷新。

首先在 `random_placeholder` 文件夹中按如下格式创建一个随机变量配置：

``` YAML
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
    buy-times-reset-mode: 'COOLDOWN_TIMED'
    buy-times-reset-time: '{random_reset}' # <--- 在这里使用, 出售次数同样有效!
```

## 动态重置值 <font color="red">- 仅付费版</font>

默认情况下，每次重置都会将玩家的购买或出售次数重置为 0，但你也可以将其设置为其他固定或随机值！

按如下示例在 `random_placeholders` 中创建一个随机变量：

``` YAML
# 仅付费版本。
reset-mode: ONCE
elements:
  - '0~20' # 范围为 0 到 20 的随机变量
  - '40' # 固定数
```

在任意商品配置中的 `buy-times-reset-value` 中使用这个变量：

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
    buy-times-reset-time: '19:00:00;;20:00:00' # <--- TIMED 支持多次重置时间!
    buy-times-reset-value: '{random_resetvalue}' # <--- 使用随机变量
```

## Cron 重置 <font color="red">- 仅付费版</font>

你可以在重置时间中使用 Cron 表达式。

* 将重置模式设置为 `COOLDOWN_CUSTOM`（若使用随机变量，将其设置为 `CUSTOM` 即可）。
* 在重置时间中填入 `cron_"<cron 表达式>"` 内建变量。不要漏了英文双引号 `"`。

例如：

``` YAML
    sell-times-reset-mode: 'COOLDOWN_CUSTOM'
    sell-times-reset-time: '{cron_"0 0 0 ? * 5"}'
    # sell-times-reset-time-format: 'yyyy-MM-dd HH:mm:ss' 
    # 你不需要在这里设置时间格式，这只是方便你记住可以在这里设置时间格式。
```

你可以通过询问 AI 获得你想要的 Cron 表达式。例如，本示例中的 Cron 表达式表示每周四 0：00 重置。我们不会提供有关编写 Cron 表达式的帮助。

另外，本插件使用的 Cron 表达式为 **Quartz** 版本。

::: info

你**必须**保证 Cron 变量返回的时间格式（在 `config.yml` 中设置）与你在这里设置的相同。默认情况下就是如此。

:::

## 重置时间不正确？

* 物品必须至少交易一次才可存储其充值时间。否则的话，我们只能显示基于当前时间计算的预计重置时间。