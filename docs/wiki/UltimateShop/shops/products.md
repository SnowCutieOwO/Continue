# 🛒 物品

这里是两个物品的配置：

``` YAML
items:
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    sell-all: true
    products:
      1:
        material: STRING
        amount: 1
        give-actions:
          1:
            type: message
            message: '你获得了一根线!'
    buy-prices:
      1:
        match-placeholder: '%player_health%'
        amount: '1.65'
        placeholder: '{amount}$'
        start-apply: 0
    sell-prices:
      1:
        match-placeholder: '%player_health%'
        amount: '1.65'
        placeholder: '{amount}$'
        start-apply: 0
        give-actions:
          1:
            type: console_command
            command: 'eco give {player} {amount}'
  B:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: FEATHER
        amount: 1
    buy-prices:
      1:
        economy-plugin: Vault
        amount: '0.55'
        placeholder: '{amount}$'
        start-apply: 0
    sell-prices:
      1:
        economy-plugin: Vault
        amount: '0.52'
        placeholder: '{amount}$'
        start-apply: 0
```

## 全局选项

::: info

点[这里](shops.md)浏览这些选项的详细示例配置。

:::

- `display-item`：展示在商店菜单中的物品，可以与玩家实际获得的物品不同。虚拟物品必须设置 `display-item` 选项，否则它们就无法在商店菜单中显示。真实物品必须设置 `config.yml` 文件中 `display-item` 下的 `auto-set-first-product` 为 `true` 以允许你删除这个选项。启用后，若 `display-item` 未设置，那么出售的第一个真实物品将会被当做图标。该部分配置会使用到“[物品格式](../format/itemformat/index.md)”的配置。**可选（若不设置则使用首个物品）**
    - `display-item.modify-lore`：是否尝试修改展示物品的描述，为其添加价格与出售限制等内容。你可以在 `config.yml` 文件中设置。**可选（默认为 true）**。
- `display-name`：设置物品在 `{product}` 与增量购买菜单中显示的名称。**可选。（若未设置，则以展示物品的名称作为商品的展示名称）**
- `add-lore`：为该物品设置[额外描述](../menus/display-item-add-lore/index.md)，若不设置则使用配置文本中的默认值。**可选。**
- `bedrock`：[见此](../menus/bedrock-menus-premium.md)。
- `buy-more`：设置该商品是否可以打开增量购买菜单，**必须先删除商店的 `buy-more` 选项才可以让该设置生效！可选。（默认为 true）**
- `buy-more-menu`：为商品设置单独的增量购买菜单。**可选。需要 2.2.10+。（若未设置，则使用 `config.yml` 中的默认值）**

``` YAML
    buy-more: true
    buy-more-menu:
      menu: buy-more-2
      max-amount: 16
```

- `sell-all`：决定商品是否可以使用一键出售模式。**可选，默认为 true。（3.9.0 新增）**
- `price-mode`：价格模式。可填入 `ANY`、`ALL`、`CLASSIC_ANY` 和 `CLASSIC_ALL`。**必选。**
- `product-mode`：物品模式，可填入的参数与上述相同。**若设置了物品部分则必选。**

::: info

你只应在商品与价格配置带有动态值时使用 **ANY** 与 **ALL**。如果你的配置使用的是静态值，则我们会自动为你将模式切换为 **CLASSIC**，避免性能浪费。

:::

|模式|`ANY`|`ALL`|`CLASSIC_ANY`|`CLASSIC_ALL`|
|---|---|---|---|---|
|物品给予|随机给予符合条件的物品。|给予所有物品。|与 `ANY` 相同。|与 `ALL` 相同。|
|收取货币/物品|收取符合条件且数量足够的首个货币/物品。|玩家需要满足所有条件并拥有所有对应物品或货币才可出售。|与 `ANY` 相同。|与 `ALL` 相同。|
|给予货币（即出售）|发放符合条件的货币。|给予所有种类货币。|与 `ANY` 相同。|与 `ALL` 相同。|
|货币支持|支持动态定价与 `apply` 设置。|与 `ALL` 相同。|价格必须每次相同。|与 `CLASSIC_ALL` 相同。|
|一键出售支持|**否**<br>价格本身存在浮动，插件无从得知最大出售次数。|**否**<br>价格本身存在浮动，插件无从得知最大出售次数。|是|是|
|性能影响|在出现大量买卖操作时可能占用较高。|与 `ALL` 相同。|与其他商店插件相差无几！|与 `CLASSIC_ANY` 相同。|

- `buy-actions`：购买商品后执行的一系列动作。使用“[动作格式](../format/action-format.md)”。**可选。**
- `sell-actions`：出售商品后执行的一系列动作。使用“[动作格式](../format/action-format.md)”。**可选。**
- `fail-actions`：交易操作失败后执行的一系列动作。使用“[动作格式](../format/action-format.md)”。**可选。在上述示例中我们将它放在了 `general-configs` 部分下，设置了交易失败播放音效。**
- `buy-conditions`：玩家购买该商品所需达到的条件。使用“[条件格式](../format/condition-format.md)”。**可选。**
- `sell-conditions`：玩家出售该商品所需达到的条件。使用“[条件格式](../format/condition-format.md)”。**可选。**
- `buy-limits`：设置购买或出售的最大次数；**可选。若未设置，商品购买次数不作限制。**
    - `buy-limits.global`：全局购买限制；**可选。**
    - `buy-limits.default`：若玩家未到达下述的任意条件，他们就会使用该限制；**若设置了 buy-limits，则该项为必选参数。**
- `buy-limits.<条件 ID>`：达到该要求的玩家将会使用该限制。可在“[条件格式](../format/condition-format.md)”章节找到对应的格式。例如：

``` YAML
buy-limits:
  default: 10
  vip: 20
buy-limits-conditions:
  vip: 
    1:
      type: permission
      permission: 'test.permission'
```

- sell-limits: 与 buy-limits 设置相同，但是是为出售使用的。

## 单条目选项

该部分配置包含如下选项：

* `buy-prices`
* `sell-prices`
* `products`

这些选项会单独介绍，请[点此](products-config-single-thing.md)浏览。

## 交易次数重置选项

该部分配置包含如下选项：

* `buy-times-reset-mode`
* `buy-times-reset-time`
* `buy-times-reset-time-format`
* `sell-times-reset-mode`
* `sell-times-reset-time`
* `sell-times-reset-time-format`

这些选项会单独介绍，请[点此](product-config-buy-sell-times-reset.md)浏览。

## 动态值

你可以在商店配置的 `buy-prices`、`sell-prices` 的 `amount` 部分与 `buy-limits`、`sell-limits` 的值中插入变量与[数学计算格式](../format/math-calculate-format.md)。

默认情况下，动态值是实时计算而非定期刷新。但是，玩家不会在界面中看见这些值实时更新。我们只会在玩家打开菜单或者点击其中物品后刷新显示的动态值。例如，如果你在买价设置了动态值，且玩家打开界面后这个值产生了更新，则玩家无法通过展示物品注意到，但插件会根据变化后的值计算新价格。这是基于服务器性能与节省开销的权衡之策。

可用的内建变量如下。更多信息请浏览“[内建变量](../placeholders/built-in-placeholder.md)”章节。

* `{buy-times-player}`
* `{buy-times-server}`
* `{buy-total-player}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>
* `{buy-total-server}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>

::: info **times** 变量与 **total** 变量之间的区别：

* **times** 变量会在每次重置后变为你设定的值。
* **total** 变量会在重置后保持不变，且会与先前的值叠加。通过命令或其他方式设置的购买/出售次数仍然会影响到总数变量。这个变量会在到达 int 极限值时自动重置。

:::

* `{sell-times-player}`
* `{sell-times-server}`
* `{sell-total-player}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>
* `{sell-total-server}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>
* `{last-buy-player}` <font color="red">**- 仅付费版**</font>

显示最后一次由玩家购买的时间间隔，单位为秒。若玩家先前没有购买过这个物品，或购买时间已经重置，则它会返回 `0`。

* `{last-buy-server}` <font color="red">**- 仅付费版**</font>

显示最后一次由全服玩家购买的时间间隔，单位为秒。若没有玩家先前购买过这个物品，或购买时间已经重置，则它会返回 `0`。

* `{last-sell-player}` <font color="red">**- 仅付费版**</font>

显示最后一次由玩家出售的时间间隔，单位为秒。若玩家先前没有出售过这个物品，或出售时间已经重置，则它会返回 `0`。

* `{last-sell-server}` <font color="red">**- 仅付费版**</font>

显示最后一次由全服玩家出售的时间间隔，单位为秒。若没有玩家先前出售过这个物品，或出售时间已经重置，则它会返回 `0`。

* `{last-buy-reset-player}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>

展示单个玩家重置后最近或最后（取决于选择的重置模式，更多信息详见[此处](product-config-buy-sell-times-reset.md)）一次购买的时间间隔，单位为秒。若玩家先前没有购买过这个物品，或购买时间已经重置，则它会返回上次购买的时间。

* `{last-buy-reset-server}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>

展示全服玩家重置后最近或最后（取决于选择的重置模式，更多信息详见[此处](product-config-buy-sell-times-reset.md)）一次购买的时间间隔，单位为秒。若先前没有玩家购买过这个物品，或购买时间已经重置，则它会返回上次购买的时间。

* `{last-sell-reset-player}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>

展示单个玩家重置后最近或最后（取决于选择的重置模式，更多信息详见[此处](product-config-buy-sell-times-reset.md)）一次出售的时间间隔，单位为秒。若玩家先前没有出售过这个物品，或出售时间已经重置，则它会返回上次出售的时间。


* `{last-sell-reset-server}` <font color="red">**- 仅付费版，3.9.0+ 引入**</font>

展示全服玩家重置后最近或最后（取决于选择的重置模式，更多信息详见[此处](product-config-buy-sell-times-reset.md)）一次出售的时间间隔，单位为秒。若先前没有玩家出售过这个物品，或出售时间已经重置，则它会返回上次出售的时间。

另外在 `buy-prices` 与 `sell-prices` 部分下，你还可以设置两个新的选项：

* `max-amount`：最高价格。用于动态定价。**可选。**
* `min-amount`：最低价格。用于动态定价。**可选。**

在 `amount` 中使用动态定价时，你可以填入 `min-amount` 和 `max-amount` 选项限制它的最小值和最大值。适合动态定价。

需要注意的是，如果你需要使用 PlaceholderAPI 拓展的变量，则你需要使用新格式。如下所示：

``` YAML
    buy-prices:
      1:
        economy-plugin: Vault
        amount: '15 - {sell-times-player} * 0.1 + %ultimateshop_farming_B_sell-times-player% * 0.1'
        # 我们使用不带花括号“{}”的新格式.
        placeholder: '{amount}$'
        start-apply: 0
```

另外，如果你的物品位于打开的菜单中，你还需要将 `menu.shop.click-update` 选项设置为 `true`。否则出售物品 B 之后不会自动更新价格。

## 子按钮 <font color="red">- 仅付费版</font>

有些时候，你可能需要在不同菜单中设置相同的物品，或者想要为同一个物品设置多个按钮。`as-sub-button` 选项就可以帮到你。只需在此设置另一个物品 ID，之后这个按钮就会被当做对应物品。

* `display-item`：支持为子按钮设置不同的显示物品。
* `as-sub-button`：可以在此填入 `物品 ID` 或 `商店 ID;;物品 ID`。

**子按钮**的示例可以在“[商店](shops.md)”章节找到，你可以在其开头示例配置 `items` 中的 `C` 部分见到。