
# 🎲 随机变量 - 仅付费版

我们在付费版中加入了新的 `{random}` 内建变量。你可以在任何支持使用变量的地方嵌入它，用以随机选中值。例如，随机价格、随机重置时间，随机库存等。

## 配置

所有随机变量配置都存储在 `random_placeholders` 文件夹下。文件名称就是它的 ID，例如：`rotate.yml` 表示它的 ID 是 `rotate`。示例配置如下：

``` YAML
reset-mode: TIMED
reset-time: '00:00:00'
per-player-element: true
element-sort: true
element-amount: 5
elements:
  A:
    rate: 1
    conditions:
      1:
        type: permission
        permission: 'test.permission'
  B:
    rate: 5
  C:
    rate: 2
  D:
    rate: 5
  E:
    rate: 2
  F:
    rate: 15
  G:
    rate: 7
```

- `per-player-elemennt`：设置为 `false` 时，所有玩家使用同一个随机出的结果。例如，玩家 1 和 2 都会得到 **A**，不论玩家数量，他们只会得到这一个值。设置为 `true` 时，每个玩家获取的随机值都是不一样的。如果玩家没有满足返回元素的条件，那么玩家就无法使用它。

::: info

<font color="red">**不推荐**</font>在启用对应变量之后再次修改这个设置的值，这可能会导致插件检测出错误（如玩家随机变量数据溢出到全局数据库），且无法屏蔽。

每个玩家的随机变量无法应用到全服，反之亦然。不启用分玩家返回的随机变量也不能分配到单独的玩家身上。例如，使用 `/resetrandomplaceholder` 命令时，分玩家的随机变量必须在命令中输入玩家的名称，否则会导致插件报错。

:::

- `element-sort`：若设置为 `false`，随机变量的结果会乱序输出。例如，若 `elements` 中包含 `A, B, C, D, E`，随机生成的结果为 `B, D`，那么随机变量的实际顺序可能是 `B, D` 或 `D, B`。如果设置为 `true`，随机结果将会自动排序，即只能返回 `B, D`。**（3.12.2 新增）**
- `reset-mode`/`reset-time`：见下。
- `element-amount`：在此变量中选择元素的数量。**（3.1.0 新增）**
- `elements`：可随机的元素列表。
    * **支持使用 `~` 符号选择随机数。例如，`5~100` 表示从 5 到 100 之间选择一个随机数。**

``` YAML
elements:
  - 'A'
  - 'B'
  - 'C'
```

``` YAML
elements:
# 从 5 到 100 的随机整数。
  - '5~100'
```

第二种配置用到了子区的形式，每个元素都可以设置 `rate` 与 `conditions`。`conditions` 是可选设置，且只在 `per-player-element` 为 `true` 时有效。**（3.12.0 新增）**

## 使用变量

通过内置变量 `{random_<ID>;;<数字>}` 来显示其值，如 `{random_daily;;2}` 会查询 `daily` 随机变量选出的**第二个**随机元素。更多信息可浏览“[变量](../placeholders/built-in-placeholder.md)”。有关此变量的用法，请浏览“[每日商店](../shops/example-daily-shop-rotating-shop.md)”章节。\
通过内置变量 `{random_times_<ID>}` 来显示下一次重置的时间，如 `{random_times_daily}`。

### 重置变量

你可以通过 `reset-mode` 与 `reset-time` 选项，或者 `/shop resetrandomplaceholder` 命令重置变量。

支持如下重置模式：

* `NEVER`
* `ONCE`：每次使用变量后都会重置且无法用在价格中，玩家打开商店及参与交易时会被计算两次，因此无法实现价格同步，这还会导致显示的价格和实际收取费用会变得不同。
* `TIMER`：指定时间后重置，例如五小时。
* `TIMED`：指定时间点重置，例如 8：15。
* `CUSTOM`：直接进入重置时间，插件不会进行任何计算。建议通过变量获取重置时间。变量需要传入的时间格式为配置文件中 `reset-time-format` 部分。

首先，我们会在随机变量被使用一次后生成重置时间。重置时间不会随配置更新而更新。若你设置了不正确的时间，你需要删除对应的数据。

<font color="red">**不要**</font>在这里使用 `COOLDOWN_TIMER`/`COOLDOWN_TIMED`/`COOLDOWN_CUSTOM` 重置模式，它们不会在随机变量中生效，且因为随机变量的数据总是保存在服务器中，所以随机变量的 `TIMER`/`TIMED`/`CUSTOM` 效果与物品配置中的 `CUSTOM_TIMER`/`CUSTOM_TIMED`/`COOLDOWN_CUSTOM` 相同。

### 重置时间

不同的重置模式在这里填入的值不同。支持变量，<font color="red">**在这里使用的变量必须为服务器侧，即所有玩家收到的值相同。**</font>

#### NEVER

无需填入任何内容。

#### TIMER

可以在这里填入三到五组数字，以英文冒号 `:` 分隔。例如：`15:00:00`。

从右到左，每个数字分别代表：

* 秒
* 分
* 时
* 日
* 月

在本示例中，这个计时器持续到 15 小时之后。即，**如果现在时间为 2023-09-04 12:00:00，那么会在 15 小时，即 2023-09-05 03:00:00 时重置。**

#### TIMED

与 TIMER 大致相似，但从右侧起的前三位数字表示每天的时间，同样以 15:00:00 为例：

如果现在时间为 2023-09-04 12:00:00，那么重置时间为 2023-09-04 15:00:00。

这就是天数设置为 0 的结果。若设置为 1，则会延迟一天，就是这样。

如果你要做每日商店，**days** 选项必须设置为 0，如果你需要做每周商店，则它必须设置为 6。因为你需要在最后一天重置时间，而不是在最后一天*之后*重置。

这种重置模式也支持设置多个重置时间，每个重置时间需要以 `;;` 分隔，我们会选择最早的时间。如：<font color="red">（仅付费版）</font>

物品配置：

``` YAML
    sell-times-reset-mode: 'TIMED'
    sell-times-reset-time: '20:00:00;;19:00:00'
```

随机变量配置：

``` YAML
reset-mode: 'TIMED'
reset-time: '20:00:00;;19:00:00'
```

在本示例中，这个物品会在每天的 19：00 与 20：00 重置。

### Cron（每周/月）重置 <font color="red">- 仅付费版</font>

你可以在重置时间中使用 Cron 表达式。

* 将重置模式设置为 `COOLDOWN_CUSTOM`（若使用随机变量，将其设置为 `CUSTOM` 即可）。
* 在重置时间中填入 `cron_"<cron 表达式>"` 内建变量。不要漏了英文双引号 `"`。应当使用 **Quartz** 格式。

例如：

``` YAML
    sell-times-reset-mode: 'COOLDOWN_CUSTOM'
    sell-times-reset-time: '{cron_"0 0 0 ? * 5"}'
    # sell-times-reset-time-format: 'yyyy-MM-dd HH:mm:ss' 
    # 你不需要在这里设置时间格式，这只是方便你记住可以在这里设置时间格式。
```

随机变量配置：

``` YAML
reset-mode: 'CUSTOM'
reset-time: '{cron_"0 0 0 ? * 5"}
```

你可以通过询问 AI 或者[这个工具](https://freeformatter.com/cron-expression-generator-quartz.html)获得你想要的 Cron 表达式。例如，本示例中的 Cron 表达式表示每周四 0：00 重置。我们不会提供有关编写 Cron 表达式的帮助。

::: info

你**必须**保证 Cron 变量返回的时间格式（在 `config.yml` 中设置）与你在这里设置的相同。默认情况下就是如此。

:::

## 测试

你可以通过命令 `/shop getplaceholdvalue {random times_<变量 ID>}` 浏览随机变量的重置时间。通过命令 `/shop getplaceplaceervalue {random_<变量 ID>}` 还可获取当前随机变量的值，你可以通过这种方式比较值在重置前是否相同。

## 示例：随机价格

### 创建新的随机变量

在这个实例中，我们在 `random_placeholder` 文件夹下创建了一个新的随机变量文件 `price.yml`。

``` YAML
reset-mode: TIMED
reset-time: '00:00:00'
element-sort: true
element-amount: 50 
elements:
# 生成 5 至 100 的随机数.
  - '5~100'
  - '4~40'
  - '53~530'
  - '32~140'
  - '55~140'
```

### 在物品配置中设置动态值

在物品的价格配置部分使用 `{random_price}` 变量。在本示例中，我将它添加至了如下配置：

``` YAML
items:
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: coal
        amount: 1
    buy-prices:
      1:
        economy-plugin: Vault
        amount: '{random_price;;1}' # <--- 修改的内容
        placeholder: '&6{amount} 硬币'
        start-apply: 0
    buy-limits:
      global: 320
      default: 240
      vip: 320
    buy-limits-conditions:
      vip:
        - 'permission: group.vip'
    buy-limits-reset-mode: 'TIMED'
    buy-limits-reset-time: '00:00:00'
```

## 测试

你可以通过这个指令测试当前变量下次重置时间： `/shop getplaceholdvalue {random times_<placeholdID>}`。
然后，你还可以通过这个指令： `/shop getplaceplaceervalue {random_<placeholdID>}` 显示变量当前的值，你可以在重置前后各输入一次这个指令测试重置是否生效。