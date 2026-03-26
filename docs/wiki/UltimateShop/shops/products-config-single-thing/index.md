# 💰 物品配置：单条目

本页介绍了 `products`、`buy-prices` 与 `sell-prices` 部分的功能，附带了相关配置示例。

太长不看：

* **单条目** 是每条处于 `products`、`buy-prices` 或 `sell-prices` 部分下的内容；
* 每个交易物可拥有的此类条目数量不限；
* 插件会自行判断哪些条目有效，计算它们的数量，检查它们的条件，然后再给予玩家，或从玩家物品栏中取走。

## 什么是“单条目”？

在商店物品中，这三个部分都是由这样的条目组成的：

### `products`

可选。

如果 `products` 不存在：

* 购买操作仍旧可以触发 `buy-actions`。
* 出售操作仍旧可以触发 `sell-actions`。
* 玩家无法在购买时获得任何物品。
* 同样也无法在出售时获得。

适用于制作命令商店。

### `buy-prices`

可选，不存在时视作物品不可购买。

### `sell-prices`

可选，不存在时视作物品不可出售。

例如：

``` YAML
items:
  A:
    products:
      1:
        material: emerald
      2:
        material: diamond
    buy-prices:
      1:
        economy-plugin: Vault
        amount: 100
        placeholder: '{amount}$'
    sell-prices:
      1:
        economy-plugin: Vault
        amount: 20
        placeholder: '{amount}$'
```

在这个例子中：

* `products.1` 就是单条目；
* `products.2` 也是单条目；
* `buy-prices.1` 还是单条目；
* `sell-prices.1` 同样是单条目。

## 插件如何使用单条目

当玩家购买或交易物品时，插件不只是自上而下地读取这些部分的内容。它遵照这样的逻辑：

1. 首先，读取 `products`、`buy-prices` 或 `sell-prices` 中的内容；
2. 按 `apply-conditions` 或旧版的 `conditions` 过滤它们；
3. 通过选择模式（`ANY`, `ALL`, `CLASSIC_ANY`, `CLASSIC_ALL`）决定哪些条目下的物品被选中；
4. 计算被选中条目的实际物品数量；
5. 检查玩家拥有的物品是否足够；
6. 再检查 `require-conditions` 部分；
7. 触发 `give-actions` / `take-actions` 动作，最后给予或收取物品。

这也能解释为什么 `apply-conditions` 和 `require-conditions` 不属于单条目。

## 条目类型

插件通过你在其中设置的内容判断条目所属类型。

### 原版物品

使用普通的[物品格式](../../format/itemformat/index.md)表达商店中出售的物品，或者玩家需要给出的物品。**（购买/出售/物品）**

``` YAML
products:
  1:
    material: emerald
  2:
    material: diamond
    amount: 16
```

适用于如下场景：

* 物品属于原版 Minecraft
* 需要插件比较、给予或收取对应物品

### 挂钩物品

使用来自[支持插件](../../info/compatibility.md)的自定义物品表达商店中出售的物品，或者玩家需要给出的物品，使用[物品格式](../../format/itemformat/index.md)。**（购买/出售/物品）**

``` YAML
products:
  1:
    hook-plugin: MMOItems
    hook-item: 'AXE;;MAGIC_AXE'
```

适用于如下场景：

* 物品由其他插件提供
* 需要 UltimateShop 判断这样的物品

### 规则匹配

使用自定义的[物品匹配规则](../../features/custom-item-match-method.md)表示所需的物品。**（购买/物品）**

``` YAML
products:
  1:
    match-item:
      contains-lore:
        - '魔法飞纸'
    amount: 64
```

适用于如下场景：

* 被比较的物品不存在单一的 ID
* 需要通过物品描述、NBT、名称或其他内容比较

### 原版经济/挂钩经济

使用插件提供的货币，而非物品。使用[经济格式](../../format/economyformat.md)

``` YAML
buy-prices:
  1:
    economy-plugin: Vault
    amount: 15
    placeholder: '{amount}$'
```

适用于如下场景：

* 玩家应当支付或获得 Vault 货币、点券、经验值或等级之类的货币

### 自定义 <font color="red">- 仅付费版</font>

如果所需内容不是普通物品，且也不是受支持的货币类型，那么就需要用到 `match-placeholder`。

``` YAML
buy-prices:
  1:
    match-placeholder: '%player_health%'
    amount: 5
    placeholder: '{amount} 生命值'
    take-actions:
      1:
        multi-once: true
        type: console_command
        command: 'health take {player} {amount}'
```

适用于如下场景：

* 比较任意数值
* 插件本身不支持这样的货币或系统

注意：

* 变量只应读取玩家当前状态下的返回内容
* `take-actions` / `give-actions` 可以用来实际改变变量的内容

### 免费/空

如果某个条目没有设置物品/经济数据、`match-item` 或 `match-placeholder`，则将其视为免费。

适用于如下场景：

* 命令商店
* 权限商店
* 只有动作奖励

## 单条目选项

适用于如下场景：

* 需要物品
* 但不需要收走物品

### `apply-conditions` 与 `require-conditions` 的区别

这就是整个系统里最重要的部分。

#### `apply-conditions`

`apply-conditions` 决定了这个条目是否包含在交易中。

如果没有满足条件：

* 条目会被忽略
* 它不会被选中
* 不影响价格或交易物的计算

在这些场景中很有用：

* VIP 优惠价
* 季促折扣
* 分玩家奖励
* 根据权限或变量决定价格

例如：

``` YAML
products:
  1:
    material: PAPER
    amount: 1
  2:
    material: PAPER
    amount: 2
    apply-conditions:
      1:
        type: permission
        permission: group.vip
```

结果：

* 正常玩家使用 `products.1`
* VIP 玩家则还能使用 `products.2`

#### `require-conditions`

`require-conditions` 不会决定哪个条目被选中。但它可以决定选中条目结算完毕后是否继续选择。

如果没有满足条件：

* 交易被阻止
* 物品/价格已选中，但无法使用

在这些场景中很有用：

* 支付前需要确认权限或收到指定物品；
* 在玩家符合条件前阻止奖励；
* 阻止特定结算物品数量的交易达成。

示例：

``` YAML
buy-prices:
  1:
    economy-plugin: Vault
    amount: 50
    placeholder: '{amount}$'
    require-conditions:
      1:
        type: permission
        permission: shop.buy.special
```

结果：

* 价格仍然会被选中
* 如果玩家没有 `shop.buy.special` 权限，则交易失败

#### 旧版 `conditions`

在代码中，`conditions` 视作 `apply-conditions` 的旧版别称。

即：

* `conditions` = 旧应用条件
* `apply-conditions` = 更清晰的新命名
* `require-conditions` = 不同行为的不同检查

如果需要跳过某个条目，那么你可以使用 `apply-conditions`。如果需要阻止交易过程，那么你需要使用 `require-conditions`。

### 单条目下 `give-actions`/`take-actions` 与交易物的 `buy-actions`/`sell-actions` 区别

这两个动作等级看似相同，实际上功能有所区别。

#### 单条目的 `give-actions`/`take-actions`

这些动作属于某个条目。

它们只在这些情况下触发：

* 条目被选中
* 且为实际给予或收取的物品

这意味着它们适合：

* 特殊奖励分支
* 特殊价格分支
* 自定义经济分支
* 只在单个条目内执行的命令

#### 交易物的 `buy-actions`/`sell-actions`

这些动作属于商店内的物品。

它们只在这些情况下触发：

* 整个交易（出售、收购）过程成功

它们不与条目的某个分支对应。

这意味着它们适合：

* 全局出售成功消息
* 记录
* 播放声音
* 整个流程完成后应当执行的其他命令
* 属于整个交易物的效果等

#### 最大不同：`{amount}`

对于单条目动作：

* `{amount}` 表示单条目下的物品总数

对于物品动作：

* `{amount}` 表示交易物等级的数量
* 即常规意义上的物品购买总量
* 如果禁用了 `display-item.calculate-amount` 选项，则只显示购买份数

示例：

``` YAML
products:
  1:
    material: PAPER
    amount: 4
    give-actions:
      1:
        type: message
        message: '单条目数量 = {amount}'

buy-actions:
  1:
    type: message
    message: '物品计数 = {amount}'
```

如果玩家买了 5 次物品：

* 单条目的 `give-actions` 会获得当前分支下的实际物品数量
* 交易物层面的 `buy-actions` 会获得购买流程中的交易总量

在许多普通配置中，这两个值的输出内容大致相似。但实际上它们是以不同的方式计算出的，且应当保留不同用途。

#### 助记规则

当逻辑需要针对指定价格或物品处理时，使用单条目动作。

当逻辑需要针对整个交易流程时，使用交易物动作，这样可以忽略交易进入的分支。

这些选项非常重要。

#### `amount`

条目的基础数量。

它可以是：

* 固定整数
* PlaceholderAPI 变量的值
* 数学表达式
* 动态公式

例如：

``` YAML
amount: '55 + ({buy-times-server} - {sell-times-server}) * 0.1'
```

#### `apply-conditions`

决定这个条目是否参与交易的条件。

#### `require-conditions`

决定这个条目是否在交易后使用的条件。

#### `give-actions`

当条目给予玩家时触发的动作。

常见用法：

* 命令商店奖励
* 权限奖励
* 自定义货币奖励

#### `take-actions`

当插件从玩家背包中取走条目符合物品时触发的动作。

常见用法：

* 收取自定义货币
* 执行命令收取
* 与其他插件同步

#### `give-item`

仅对物品形式奖励有效。

若设置为 `false`，插件不会给予物品，但仍然触发 `give-actions` 下的动作。

大部分命令商店会使用这种方式。

#### `take`

若设置为 `false`，条目仍然会作为条件检查，但不会扣除玩家物品。

### 价格相关选项

这些选项只在 `buy-prices` 与 `sell-prices` 中有效。

#### `placeholder`

在价格变量 `{price}` 中显示的内容。

``` YAML
placeholder: '{amount}$'
```

如果要显示价格，最好设置这个选项。

#### `start-apply`、`end-apply`、`apply`

These control when a price applies.

决定价格应用的区间。

在这些非经典价格模式下有效：

* `ANY`
* `ALL`

适用于如下场景：

* 起初购买价格低
* 随购买次数涨价
* 特定次数的特定购买价

#### `min-amount` 与 `max-amount`

限制最终的动态数量。

适用于如下场景：

* 价格公式可能会出现过小或过大的情况

示例：

``` YAML
buy-prices:
  1:
    economy-plugin: Vault
    amount: '55 + {buy-times-player} * 0.5'
    min-amount: 55
    max-amount: 500
    placeholder: '{amount}$'
```

## 关于 `ANY`、`ALL`、`CLASSIC_ANY`、`CLASSIC_ALL` 模式

你不需要理解它们的所有细节，只需记住：

* `ANY`：每次只使用一个合适的条目，每份物品都可能选择不同的条目
* `ALL`：选择所有合适的条目
* `CLASSIC_ANY`：只使用一个条目，但更像固定捆绑包
* `CLASSIC_ALL`：所有合适的条目都像固定捆绑包一样参与交易

建议：

* `CLASSIC_ALL` 适合简单固定价格的商店
* `CLASSIC_ANY` 适合“选择任意有效价格/物品”的商店
* `ANY` / `ALL` 适合只在使用应用范围或更高级的动态行为

## 共享条件键

插件还支持通过 `config.yml` 共享 apply-condition：

``` YAML
conditions:
  products-key: 'products-conditions'
  buy-prices-key: 'buy-prices-conditions'
  sell-prices-key: 'sell-prices-conditions'
  display-item-key: 'display-item-conditions'
```

你可以这样写：

``` YAML
products:
  one:
    material: REDSTONE
  two:
    material: IRON_INGOT

products-conditions:
  one:
    1:
      type: placeholder
      placeholder: '{random_daily}'
      rule: '=='
      value: 'A'
  two:
    1:
      type: placeholder
      placeholder: '{random_daily}'
      rule: '=='
      value: 'B'
```

注意：

* 共享键仅适用于应用条件
* `require-conditions` 仍然需要在条目本身中配置

## 常见商店配置

### 样式甲：普通物品商店

``` YAML
A:
  price-mode: CLASSIC_ALL
  product-mode: CLASSIC_ALL
  products:
    1:
      material: APPLE
      amount: 64
  buy-prices:
    1:
      economy-plugin: Vault
      amount: 150
      placeholder: '{amount}$'
  sell-prices:
    1:
      economy-plugin: Vault
      amount: 30
      placeholder: '{amount}$'
```

这是最简单的配置：

* 购买获得苹果
* 购买需要支付 Vault 货币
* 出售收取苹果
* 购买会给予 Vault 货币

### 样式乙：命令商店

``` YAML
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    display-item:
      name: '魔法宝箱钥匙'
      material: PAPER
      custom-model-data: 500
      amount: 1
    buy-prices:
      1:
        economy-plugin: Vault
        amount: 150
        placeholder: '{amount}⛂'
    buy-actions: # 在交易物配置中
      1:
        type: console_command
        command: "crate give {player} magic" # 在这里填入命令。
      2:
        multi-once: true # 如果需要在执行的命令中使用 {amount} 变量，确保将这个选项设置为 true，使命令多次购买时仍然只触发一次。
        type: console_command
        command: "crate give {player} magic {amount}" 
  B:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        name: 'Magic Crate Key'
        material: PAPER
        custom-model-data: 500
        amount: 1
        give-item: false # 确保样品不会卖给玩家
        give-actions: # 在单条目配置中
          1:
            type: console_command
            command: "crate give {player} magic"
          2:
            multi-once: true # 如果需要在执行的命令中使用 {amount} 变量，确保将这个选项设置为 true，使命令多次购买时仍然只触发一次。
            type: console_command
            command: "crate give {player} magic {amount}" 
    buy-prices:
      1:
        economy-plugin: Vault
        amount: 150
        placeholder: '{amount}⛂'
```

在上述示例中，最终效果是相同的。如果配合 `condition`，通过 **give-actions** 方法可以让不同的玩家使用不同的条件。

```yaml
  B:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        name: '魔法宝箱钥匙'
        material: PAPER
        custom-model-data: 500
        amount: 1
        give-item: false # 确保样品不会卖给玩家
        give-actions: # 在单条目配置中
          1:
            multi-once: true
            type: console_command
            command: "crate give {player} magic {amount}"
      2:
        name: '魔法宝箱钥匙 (VIP 附赠一个)'
        material: PAPER
        custom-model-data: 500
        amount: 1
        give-item: false # 确保样品不会卖给玩家
        give-actions: # 在单条目配置中
          1:
            multi-once: true
            type: console_command
            command: "crate give {player} magic {amount}"
        conditions:
          1:
            type: permission
            permission: group.vip
    buy-prices:
      1:
        economy-plugin: Vault
        amount: 150
        placeholder: '{amount}⛂'
```

工作原理：

* 物品存在，插件可以访问
* `give-item: false` 使得玩家不会获得假物品
* `give-actions` 通过命令给予玩家实际物品

### 是物品还是单条目？

当规则属于某个特定的价格或物品时使用单条目的逻辑。

例如：

* 普通奖励中夹杂的 VIP 奖励
* 普通价格中夹杂的季节价格
* 只在一个分支中执行的命令奖励

当规则对所有物品生效，不受选择条目影响时，那么使用物品层面的逻辑，例如 `buy-actions`、`sell-actions`、`buy-conditions`、`sell-conditions`。

### 建议

* 建议使用 `CLASSIC_ALL` 模式，除非你需要更复杂的进阶逻辑。
* 使用 `apply-conditions` 选择判断进入的分支。
* 使用 `require-conditions` 设置交易继续的条件。
* 在命令商店中记得设置 `give-item: false`。
* 如果需要某个物品存在且不收取它，那么可以设置 `take: false`。
* 精简价格与给予物品有益于引入动态公式后的配置保持简洁。
* 如果你使用了动态定价，添加 `min-amount` 与 `max-amount` 设置可以防止极端高或低价。

### 最简规则

如果你还是没能确定使用什么设置：

* “是否忽略这个分支？”-> 使用 `apply-conditions`
* “是否允许交易打断？”-> 使用 `require-conditions`
* “是否允许插件给予/取走真实物品？”-> 使用 `give-item` 或 `take-item`
* “使用条目时是否一并执行命令？”-> 使用 `give-actions` 或 `take-actions`

这些内容可以帮助你选择它们，更快地配置商店。

## 在物品描述中显示价格

* [从这里](https://www.spigotmc.org/resources/98523/)下载并安装 MythicChanger 。（同时需安装 PacketEvents）
* 在 `plugins/MythicChanger/rules` 文件夹下创建一个 `shop-display.yml` 文件。
* 复制粘贴这些内容，保存并重启服务器。

``` YAML
weight: 15

only-in-player-inventory: true

fake-changes:
  add-price-lore:
    - '&f购买单价: &6{buy-price}'
    - '&f出售单价: &6{sell-price}'
    - '&f价格: &6{total-price}'
```

![](_images/image12.png)