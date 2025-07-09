# 💹 经济格式™

经济格式为插件提供的一种配置格式，可与服务器的经济插件联动。若配置文件中支持或需要**经济格式**，则我们会注明。

::: info
需要注意的是，**UltimateShop** 只是一个商店插件，不提供任何形式的经济功能。如果你的服务器需要自定义经济，请自行寻找合适的经济插件。**Vault** 不是一个经济插件，它只是其他经济插件的前置库。<font color="red">在服务器上安装 Vault 之后，你还需要安装一个支持 Vault 的任意经济插件。</font>
:::

## 对接经济

对接经济适用如下格式：

* economy-plugin：需要对接的插件名称。当前，**UltimateShop** 支持如下插件：`Vault`、`GamePoints`、`PlayerPoints`、`CoinsEngine`、`UltraEconomy`、`EcoBits`、`PEconomy`、`RedisEconomy`、`RoyaleEconomy`、`VotingPlugin`。**必填项**
* economy-type：若对应经济插件为多经济插件，你需要在这里填入货币名称。**若使用多经济插件，则为必填项，否则可选**
* amount：价格。**必填项**
* max-amount：用于动态定价。决定最高浮动价格。**可选项**
* min-amount：用于动态定价。决定最低浮动价格。**可选项**

**示例：**

``` YAML
  1:
    economy-plugin: Vault
    # 若你将经济插件设置为了 CoinsEngine, 则你需要按如下格式填写:
    # economy-plugin: CoinsEngine
    # economy-type: Coin
    # 是的, 在这里你需要添加 economy-type 选项, 因为这是一个多经济插件.
    # 在本示例中, 玩家总是会花费 5$.
    amount: 5
    placeholder: '$5'
```

## 原版经济

原版经济使用如下格式：

* economy-type：支持填入 `exp`（经验值）和 `levels`（经验等级）。**必填项**
* amount：价格。**必填项**
* max-amount：用于动态定价。决定最高浮动价格。**可选项**
* min-amount：用于动态定价。决定最低浮动价格。**可选项**

**示例：**

``` YAML
  1:
    economy-type: levels
    amount: 5
    placeholder: '5 级经验'
```