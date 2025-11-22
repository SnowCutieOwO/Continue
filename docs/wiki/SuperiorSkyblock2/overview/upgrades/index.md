# 升级

通过升级，你可以让玩家拥有可升级的特权。本章节会指导你如何对其进行编辑！

## 创建第一个升级

创建一个新升级非常简单！

所有升级都遵循同一规则，因此本章节以刷石机为例。

我们首先按如下格式编写升级的基本格式：

``` YAML
upgrades:
  island-generators:        # 升级名称.
    '1':                    # 升级的第一级.
      <待完成>
    '2':                    # 升级的第二级.
      <待完成>
```

所有升级都使用统一格式：升级的全局部分配置，以及适用于不同等级的独立设置。你可以设置数量不限的等级！

现在，我们将重点放在第一个等级的编辑上。我们会为其添加一个价格类型、价格内容，以及在升级时触发的命令和使用升级的权限节点。在本示例中我不需要这个，因此我没有添加这一部分的配置。

``` YAML
'1':
  price-type: 'money'      # 价格类型. 详细内容见下.
  price: 100000.0          # 升到下一等级所需的价格.
  commands:
    - 'island admin setupgrade %player% island-generators 2'     # 我们必须通过命令手动切换等级.
    - 'island admin msgall %player% &e&l升级 | &7%player% 将你的刷石机升至了等级 II!'   # 这条消息会发送给所有成员.
  permission:  <所需权限>   # 若你需要限制玩家拥有指定权限才可升级，则你可以填写这一栏.
```

你可能注意到，我在配置中添加了升级命令——只有这样，插件才可以帮你实际切换岛屿等级。否则就无法升级，就像你在最后一级所见的内容。

在我们设置等级的基本格式之后，我们就需要为其设定一些值。值会与岛屿同步。你可以通过升级修改作物生长速率、刷怪笼速率、掉落物倍率、方块限制、刷石机等等！在本章节中，我会通过 `generator-rates` 部分修改刷石机速率：

``` YAML
'1':
 price-type: 'money'
 price: 100000.0
 commands:
   - 'island admin setupgrade %player% island-generators 2'
   - 'island admin msgall %player% &e&l%player% &e&l升级 | &7%player% 将你的刷石机升至了等级 II!'
 generator-rates:
   normal:      # 世界环境. 可为 normal, nether 或 the_end.
     STONE: 85
     COAL_ORE: 10
     IRON_ORE: 5 
```

就是这样！我们完成了第一个等级！因为这是升级的第一个等级，这会对所有岛屿生效。也就是所有岛屿都会拥有我在这里设定的值。现在，我按同一格式添加了更多等级：

``` YAML
upgrades:
 island-generators:
   '1':
     price-type: 'money'
     price: 100000.0
     commands:
       - 'island admin setupgrade %player% island-generators 2'
       - 'island admin msgall %player% &e&l%player% &e&l升级 | &7%player% 将你的刷石机升至了等级 II!'
     generator-rates:
       normal:
         STONE: 85
         COAL_ORE: 10
         IRON_ORE: 5 
   '2':
     price-type: 'money'
     price: 150000.0
     commands:
       - 'island admin setupgrade %player% island-generators 3'
       - 'island admin msgall %player% &e&l%player% &e&l升级 | &7%player% 将你的刷石机升至了等级 III!'
     generator-rates:
       normal:
         STONE: 70
         COAL_ORE: 15
         IRON_ORE: 10
         DIAMOND_ORE: 5
   '3':
     price-type: 'money'
     price: 300000.0
     commands:
       - 'island admin setupgrade %player% island-generators 4'
       - 'island admin msgall %player% &e&l%player% &e&l升级 | &7%player% 将你的刷石机升至了等级 IV!'
     generator-rates:
       normal:
         STONE: 50
         COAL_ORE: 25
         IRON_ORE: 15
         DIAMOND_ORE: 10
```

在配置了所有等级之后，我们就需要添加最后一个升级——第四级。与其他升级不同的是，这个升级无需包含 `setupgrade` 命令，但相关的值仍会正常分配：

``` YAML
'4':
  price-type: 'money'
  price: 0.0       # 将值设置为 0 确保玩家总能看见如下消息.
  commands:
    - 'island admin msg %player% &c&l错误 | &7你已达到岛屿刷石机的最大等级.'
  generator-rates:
    normal:
      EMERALD_ORE: 50
      DIAMOND_ORE: 50
```

最后，这就是一个与所有岛屿同步属性的刷石机升级。你随时可以修改其中的值，岛屿会自动同步。但不要将已有等级删除——你可以让升级什么都不做，如果将升级移除可能会导致插件报错。

你可以使用如下部分修改岛屿的属性：

* `crops-growth`：决定升级修改的作物生长速率。
* `spawner-rates`：决定升级修改的刷怪笼刷怪速率。
* `mob-drops`：决定升级修改的怪物掉落物倍率。
* `team-limit`：决定升级修改的团队玩家数量限制。
* `warp-limit`：决定升级修改的地标的数量限制。
* `coop-limit`：决定升级修改的合作玩家数量限制。
* `border-size`：决定升级修改的岛屿边界大小。
* `block-limits`：决定升级修改的岛屿方块数量限制。
  *该部分下所有方块格式为 `类型: 限制数量`。*
* `entity-limits`：决定升级修改的岛屿实体数量限制。
  *该部分下所有实体格式为 `类型: 限制数量`。*
* `generator-rates`：决定升级修改的刷石机产出。
  *该部分下所有产出格式为 `类型: 几率`。*
* `island-effects`：决定升级修改的岛屿效果。
  *该部分下所有效果格式为 `效果: 等级`。*

## 价格类型

插件有两种预设的价格类型——基于硬币与变量的价格。只需将 `price-type` 部分添加至你的升级，并设置你想要的价格类型。当前支持的是 `money` 和 `placeholder`

#### `money`

在使用该价格类型时，钱会直接从玩家的账户（由 Essentials 或其他经济插件提供）中扣除。

你必须添加如下内容才可让其正常生效：

|所需内容|类型|描述|
|---|---|---|
|`price`|Double（双精度浮点数）|升到下一级所需花费的价格。|

#### `placeholders`

在使用该价格类型是，价格会通过执行自定义命令扣除，余额通过填入的变量判断。

你必须添加如下内容才可让其正常生效：

|所需内容|类型|描述|
|---|---|---|
|`price`|Double（双精度浮点数）|升到下一级所需花费的价格。|
|`placeholder`|String（字符串）|代表玩家当前余额的变量。|
|`withdraw-commands`|List（列表）|一列会为玩家执行扣费操作的命令。你可以使用 `%player%` 表示玩家的名称，`%amount%` 表示扣款数量。|

::: info

你也可以通过 API 注册自定义价格类型。

:::

### 示例

在下文的示例中，你可以找到带有两个不同价格的升级（各只有一个等级）。

第一个升级，`money-example-upgrade`，价格类型为 `money`。第二个，`placeholder-example-upgrade`，价格类型为 `placeholders`。

在本示例中，假设余额变量为 `%custom_economy_balance%`，且可通过命令 `/customeco take <玩家名称> <价格>` 收取费用。

``` YAML
upgrades:
  money-example-upgrade:
    '1':
      price: 1000000.0
      price-type: 'money'
      commands:
        - ...
  placeholders-example-upgrade:
    '1':
      price: 1000000.0
      price-type: 'placeholders'
      placeholder: '%custom_economy_balance%'
      withdraw-commands:
      - 'customeco take %player% 1000000'
      commands:
        - ...
```