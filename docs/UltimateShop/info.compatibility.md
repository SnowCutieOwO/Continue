# 🔗 兼容性

插件的兼容性主要体现在**物品库插件**与**经济插件**上。与其他同类插件不同的是，我们可以无视其实现方式直接兼容。这里有两种方法支持所需插件：**直接支持**与**间接支持**。

## 直接支持的插件

直接支持表示这些经济或物品库的插件能够在 **ItemFormat 物品格式**和 **EconomyFormat 经济格式**中使用。这个兼容方法最为简单，并受到官方支持。

### <font color="green">直接支持的</font>自定义物品系列

* ItemsAdder
* Oraxen
* EcoItems
* EcoArmor
* MMOItems
* MythicMobs
* eco
* NeigeItems
* ExecutableItems

### <font color="green">直接支持的</font>自定义经济插件系列

* Vault（及依赖其的所有经济插件）
* GamePoints
* PlayerPoints
* CoinsEngine
* UltraEconomy
* EcoBits
* PEconomy
* RedisEconomy
* RoyaleEconomy
* VotingPlugin

如下示例为通过**物品格式**直接兼容功能调用 **ItemsAdder** 插件的物品，并以通过**经济格式**调用的 **Vault** 货币为回报。

``` YAML
items:
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1: 
        hook-plugin: ItemsAdder # 物品格式
        hook-item: fishing_pack:common_fishing_bait # 物品格式
    buy-prices:
      1:
        economy-plugin: Vault # 经济格式
        amount: 5
        start-apply: 0
        placeholder: '&65 硬币'
```

### <font color="green">直接</font>支持的保护插件列表

若玩家在这些区域内没有打开容器的权限，则 UltimateShop 会阻止玩家在这些区域中使用出售魔杖。

* BentoBox
* Dominion
* GriefPrevention
* HuskTowns
* HuskClaims
* Lands
* PlotSquared
* Residence
* Towny
* WorldGuard

## 间接支持

间接支持指代通过灵活运用插件的特性来使其与本插件关联。

* 保存物品：我们在命令章节介绍了 `/shop saveitem` 命令，之后通过物品格式中的 `material` 选项使用物品 ID 即可。
* 购买操作：我们在商店章节介绍了 `buy-actions` 功能。在动作章节，我们也提及购买操作支持执行命令，所以只需在这里调用对应插件的给予命令即可。
* 给予操作：我们在简化流程章节提及了这个内容，与购买操作相似。另外该章节也有相应示例给出。

### 示例：将不支持的物品库插件用作商品

在该示例中，我们首先要通过展示物品选项描述的**物品格式**来表示不兼容插件的物品，这样玩家就可以看到实际物品。

在 `products` 部分，我们使用自定义出售匹配功能，这允许插件自行判断出售的物品是否符合要求，例如包含描述等。接着，我们使用 `give-actions` 格式来执行物品给予命令，这样玩家就可以在购买后收到对应物品。

``` YAML
    display-item:
      material: APPLE
      # 手持物品并输入命令 /shop generateitemformat 来获取填入这里的物品格式。
    products:
      1:
        # 出售匹配
        match-item:
          contains-lore:
            - 'test1'
        # 购买给予命令
        give-actions:
          1:
            type: console_command
            command: 'items give {player} {amount}'
          2:
            type: message
            message: '测试消息'
        amount: 64
```

如果你正在使用 Paper 服务端且物品已被固定（每次生成的物品都会有所不同），你可以使用物品保存机制：你只需输入 `/shop itemsave` 命令，然后使用**物品格式**中的 `material` 选项，并在该选项填入保存物品的 ID 即可。

### 示例：将不支持的经济插件用作价格

在本示例中，我们会灵活利用不同的单条目与 `give-actions` 选项，这些功能可以在商品页面找到详细解释。假设玩家购买了这个物品，然后购买选项中的 `match-placeholder` 判断玩家是否拥有足够的货币。若其达到条件，则玩家会获得苹果。然后 `give-actions` 会被触发，使得玩家对应货币减少。相似地，在出售过程中，出售部分的 `give-actions` 也会被执行，因此玩家会收到对应货币。

``` YAML
    products:
      1:
        # 出售物品名称
        material: APPLE
        # 购买给予命令
        give-actions:
          1:
            type: console_command
            command: 'eco take {player} {amount}'
        amount: 64
    buy-prices:
      1:
        # 购买匹配变量
        match-placeholder: '%economy_now_balance_placeholder%'
        amount: 500
    sell-prices:
      1:
        # 出售给予命令
        give-actions:
          1:
            type: 'console_command'
            command: 'eco give {player} {amount}'
        amount: 500
```

## NeigeItems：物品名称翻译挂钩

通过这个联动，原版物品的本地化名称可以在物品上显示，其语言依照 NeigeItems 中的设置而变化。

在这里下载 NeigeItems：https://github.com/ankhorg/NeigeItems-Kotlin/releases

你应该下载 NeigeItems-xxx.jar（而非 NeigeItems-api），正确文件大小应该大于 10MB。

只需将其装入服务器便大功告成！插件现在会自动显示本地化名称。

## MythicChanger：额外物品格式选项

通过这个联动，基于物品格式，物品可以进一步修改以达到预期要求。

该功能需要的服务器安装 **MythicChanger** 插件，你可以在这里获取：

**免费版本**：[点此下载](https://www.spigotmc.org/resources/mythicchanger-match-and-modify-all-your-items-without-trouble-1-14-1-21.98523/)

**付费版本**：[点此下载](https://www.spigotmc.org/resources/mythicchanger-premium-match-and-modify-all-your-items-without-trouble-1-14-1-21.115913/)

对于如何配置 `change-item` 部分，请阅读 MythicChanger 的维基，[点此](https://simple.superiormc.cn/)访问。  
请注意，部分修改规则需要<font color="red">**付费版本的 MythicChanger，而非付费版本的 UltimateShop！**</font>

::: info

若你正在使用**付费版本的 MythicChanger**，它会允许你通过添加 nbt-xxx 规则使用自定义 NBT 标签。你也可以使用 `/mc viewnbt` 命令来浏览手持物品的 NBT 数据。

:::

``` YAML
change-item:
  set-name: '&f上品钻石剑'
```

## AdvancedEnchantments：额外物品格式选项 - <font color="red">仅付费版</font>

通过这个联动，基于物品格式，物品可以拥有来自于 AdvancedEnchantments 的自定义附魔。

诸如 `EcoEnchants`、`ExcellentEnchants` 的附魔插件是通过原版注册实现的，你只需将其附魔 ID 放入配置中的附魔选项即可（如上所述）。

你可以使用 `plugin-enchants` 选项来为你的物品添加插件附魔。

``` YAML
plugin-enchants:
  PLANTER: 5 # 一个 AdvancedEnchantments 附魔
```

## NBTAPI：额外物品格式 - <font color="red">仅付费版</font>

该选项的格式为：

``` YAML
nbt:
  <NBT 类型>:
    <NBT 键名>: <NBT 值>
```

支持填入的 NBT 类型有：

* byte
* short
* int
* long
* float
* double
* string

例如：

``` YAML
nbt:
  string: 
    customNBT: 'Hello!'
  int:
    anotherNBTComponent.theNBTKey: 5
```

## MythicChanger；自定义物品匹配

[自定义物品匹配方法](features.custom-item-match-method.md)功能需要用到 MythicChanger。

## PlacheolderAPI：额外变量

UltimateShop 向 PlaceholderAPI 提供了这些新的变量。更多信息请[见此](placeholders.built-in-placeholder.md#placeholderapi-支持)。