# 运作方式

本页将会讲述 Towny 的运作方式，以及配置文本中的设置如何影响游戏体验，并指导你如何将 Towny 调整得更适合需求。

[[toc]]

- - -

## 层级

### 游民

游民是不属于任何城镇的玩家。他们没有任何土地，拥有的权限可以在 [townyperms.yml](../reference/configs/townyperms-yml.md)。如果游民通过该设置拥有了 `towny.command.plot.claim` 权限，则他们可以购买[对外土地](#对外地皮)。除此之外，游民还默认拥有 `towny.townless` 权限节点。

### 居民

每个加入服务器的玩家都可以成为城镇居民（默认权限下会通过 townyperms.yml 的游民部分设置获得 `towny.town.resident` 权限）。居民拥有自己的[命令](../reference/commands.md)，即 `/resident`，输入后显示住所状态界面，会显示钱包余额、所在城镇、占领区域数及好友列表。居民可以加入城镇或自发设立。

加入城镇的居民可以认领镇长设置为出售状态的区域。当居民拥有至少一块区域时，住所界面会显示一行新文本，显示拥有的区域及分配至其拥有的所有（没有设置自定义权限的）地皮[权限](#)。

加入城镇居民的权限可以在 [townyperms.yml](../reference/configs/townyperms-yml.md) 的 `towns.default` 部分编辑。

### 城镇 [^1]

城镇就是一些（或一位）居民选举出一位镇长所形成的。城镇拥有一个仅镇长可存取的金库。镇长也可以招募书记，拥有同等权利与地位。城镇可以每日向居民收取一定量的税。

城镇通常由核心地块向外扩散，核心地块即镇长所占领的区域。城镇地块需要相邻占领，除非镇长在郊区通过 `/t claim outpost` 设置了前哨站。城镇可以通过配置文件的 `global_town_settings.max_residents_per_town` 的选项设置最大居民数，默认不限制。服务器上的所有城镇可通过命令 `/town list` 浏览。

在 Towny 0.95.1.0 之后，可在城镇中存储元数据，见此[^2]了解更多。

在 Towny 0.99.6.0 之后，城镇可通过命令 `/t forsale [价格]` 出售，玩家可输入 `/t buytown [城镇名称]` 将其买下。另外可通过命令 `/t notforsale` 将其下架。

### 镇长

镇长及其书记管理着城镇和居民。镇长的权限可通过 [townyperms.yml](../reference/configs/townyperms-yml.md) 编辑。

镇长可以决定居民的等级。可以是城镇助理或由管理员在 `townyperms.yml` 中创建的任意等级。玩家可以通过 `/town rank {add|remove} {玩家名称} {等级名称}` 设置等级。玩家只能被分配一个等级，使得管理员能创建多个城镇职位，如银行家、建筑师、邀请者，并为受信任的玩家分配这些等级。

镇长也可以决定向居民收取的[税收](#)类型及比率。

一个玩家不能同时管理两个以上的城镇，除非你是管理员。管理员可通过如下步骤管理多个城镇：

> 示例：管理员张三/如何创建 NPC 城镇。

> 张三想要设置一个归属于服务器的城镇以及他自己的城镇。他首先需要创建服务器城镇并设置税收、区域价格以及权限。这种城镇不应给予其他玩家居民、盟友或外来者权限。
>
> 张三可通过命令 `/ta town {城镇名称} toggle unlimitedclaims` 为城镇获取无限的区域。
>
> 当张三完成城镇设置之后，他可以通过命令 `/townyadmin set mayor {城镇名称} npc` 将指定 NPC 设置为服务器城镇的镇长。这通常足以保护大部分服务器的出生点。
>
> 张三通过命令 `/t leave` 离开城镇，并通过命令 ` /t new {城镇名称}` 创建了他自己的城镇。通过命令 `/townyadmin set mayor {城镇名称} npc`、`/t leave` 和 `/ta town {城镇名称} add {玩家名称}`，张三可以在城镇之间来回管理。
> 
> 张三无需离开城镇即可向服务器城镇添加居民！他可以使用命令 `/townyadmin town {城镇名称} add {玩家名称}` 强制向服务器城镇添加玩家，或在 [`config.yml`](../reference/configs/config-yml.md) 中设置 `default_town_name: 'Server_Town'`。许多城镇设置可以通过命令 `/ta town {城镇名称}` 进行修改。
> 
> 张三也可以将 NPC 城镇通过 `/ta nation {国家名称} add {城镇名称}` 加入国家。
> 
> 作为管理员，张三还可以在不离开自己城镇的情况下通过命令 `/ta town new {城镇名称} npc` 创建 NPC 城镇。

在 Towny 0.95.1.0 之后，镇长能够为城镇内居民设置称号（前缀）及称谓（后缀）。可通过如下命令实现：

* `/town set title {玩家名称} 称号`
* `/town set surname {玩家名称} 称谓`

## 罪犯

在 Towny 0.90.0.0 之后，城镇（默认是镇长，但其他职位也可完成）能够设置罪犯列表。设置命令为 `/town outlaw [add/remove] [玩家名称]`，所需权限为 `towny.command.town.outlaw`。罪犯可以是任意玩家，无需属于某个城镇或国家。

如果新加入的罪犯为城镇的成员，他们会被踢出城镇。设置为开放（任意玩家可通过命令 `/town join` 加入）的城镇，都可以使用罪犯列表来防止这些玩家加入城镇。玩家成为罪犯后将不能重生在公开城镇。

进入城镇的罪犯会向所有居民显示警告标题消息。如果玩家在线时被判为罪犯，他们会在聊天栏收到消息。

罪犯如果在对应城镇死亡，可将其关入监狱。这需要将 Towny config.yml 下的 `jail.is_jailing_attacking_outlaws` 设置为 true。同时也需要击杀罪犯的玩家拥有 `towny.outlaw.jailer` 权限。另外城镇需要设立至少一个监狱区域。默认情况下只有镇长、书记与警长拥有 `towny.outlaw.jailer` 权限。

城镇居民可通过命令 `/town outlawlist` 浏览罪犯列表。任何人都可以通过命令 `/town outlawlist {城镇名称}` 浏览其他城镇的罪犯列表。

玩家可以通过命令 `/res outlawlist {玩家名称}` 查询对应玩家被哪些城镇列为罪犯。若不填则默认显示自己的罪犯状态。

在 Towny 0.96.4.0 后，你可以设置是否将罪犯在对应城镇禁足。当 Towny config.yml 下的 `allow_outlaws_to_enter_town` 被设置为 false 时，他们在进入城镇时会被传送走。另外 `outlaw_teleport_warmup` 选项则会决定传送过程发生的时间，若设置为 0 则罪犯在进入后会立即被传送。

## 国家

国家为（一或）多个城镇的集合，其中一个城镇作为其首都。首都的镇长即为国家领袖。国家可以参与战争事件，也可以与其他国家结盟。国家有自己的国库，也可以向城镇收税。

如果国家设置为“公开”，即任意非敌方玩家均可进入的状态，可以通过命令 `/nation spawn` 设置出生点。config.yml 中 `global_nation_settings.capital_spawn` 可决定出生点是否限制在首都范围内。

两个国家可结盟，使其下的玩家不会受到互相的伤害，帮助对方的区域（如果区域权限允许为盟友设置的话），并支援战争。在 0.91.0.0 之后，你可以限制双向结盟，即只有在两国互相将对方考虑为盟国后才能形成盟友关系。你可以在配置文件中 `war.disallow_one_way_alliance` 处进行设置，默认为 false。

另外，在 0.91.0.0 之后，你可以通过要求居民数量来限制能够创建、加入和维护国家的玩家。详见 [config.yml](../reference/configs/config-yml.md) 的全局城镇部分设置。

在 0.93.0.0 之后，国家可以设置一个国家区，由成员城镇环绕。这可以在 [config.yml](../reference/configs/config-yml.md) `global_nation_settings.nationzone.enable` 处启用。国家区域与普通郊区无异，但只有属于该国家的玩家才可以对其进行破坏。这可以防止临近城镇的其他国家破坏国内的土地。国家区域可以通过 [config.yml](../reference/configs/config-yml.md) 中的国家等级扩大，而国家等级则受到人口数量的影响，你还可以让首都城镇拥有更大的国家区域范围。[config.yml](../reference/configs/config-yml.md) 的 `global_nation_settings.nationzone.war_disables` 设置可以决定是否在战时停用国家区域功能。在 0.97.3.0 之后，镇长可以通过 `/t toggle nationzone` 命令关闭国家区域，管理员可以为城镇通过命令 `/ta town set nationzoneoverride #` 设置国家区域。

在 0.96.2.0 之后，你可以在 `global_town_settings.maximum_number_residents_without_nation` 处设置每个无国家城镇的居民上限。设置为大于零的数字时，城镇需要组成国家才可以招收更多玩家。

在 0.100.1.0 之后，你可以设置能够加入国家的城镇与首都的最大距离。见 [config.yml](../reference/configs/config-yml.md) 全局国家设置的邻近部分设置。这里有选项可以决定每个城镇是否需要邻近首都，以及决定距离首都或其他城镇的最大距离（使得国家的领土形状能够变得更长），以及可选的在某城镇范围内时加入所需首都距离的硬上限。

在 0.100.1.0 之后，国家可以制裁城镇。这可以防止城镇通过 `/n join` 命令加入国家。这也可以防止玩家通过 `/n spawn [国家名称]` 进入公开国家区域。制裁城镇可通过命令 `/nation sanctiontown` 完成。

国家相较城镇拥有更多特权，使其更容易吸引玩家居住，这些特权包括：

* 城镇区域占领数量额外增加。
* 城镇维护费用降低。
* 环绕国家区域范围增加。
* 前哨站数量上限增加。

## 国家领袖

国家领袖引导国家，是首都城镇的镇长。领袖的权限节点可以在 [townyperms.yml](../reference/configs/townyperms-yml.md) 中编辑。领袖可以决定国家内所有居民的等级。可以是国家书记或其他由管理员在 townyperms.yml 文件中添加的自定义等级。领袖可通过 `/nation ranklist` 命令浏览所有可用等级，通过 `/nation rank {add|remove} {玩家名称} {等级名称}` 设置玩家等级。一个玩家只能拥有一个等级，管理员可以创建更多细分的国家等级，如银行家、外交官等供国家领袖选择。

领袖有能力为玩家分配称号（前缀）与别称（后缀）。命令如下：

* `/nation set title {玩家名称} 称号内容`
* `/nation set surname {玩家名称} 别称内容`

如果输入命令时不填写前/后缀内容，则会重置玩家对应前/后缀。

## 配置镇长与国家领袖的称号、城镇及国家名称

Towny 允许你自定义镇长、国家领袖、城镇、首都城镇及国家的命名方式。对应 config.yml 中两部分设置。

## 配置 town_level 与 nation_level

### town_level:

* townLevel 的基础格式如下所示：

``` YAML
  - numResidents: 1
    namePrefix: ''
    namePostfix: ' (定居点)'
    mayorPrefix: '隐士 '
    mayorPostfix: ''
    townBlockBuyBonusLimit: 0
    townBlockLimit: 16
    upkeepModifier: 1.0
    townOutpostLimit: 0
    debtCapModifier: 1.0
    peacefulCostMultiplier: 1.0
    bankCapModifier: 1.0
    resourceProductionModifier: 1.0
    townBlockTypeLimits:
    - shop: 2
    - arena: 2

  - numResidents: 2
    namePrefix: ''
    namePostfix: ' (小村)'
    mayorPrefix: '村长 '
    mayorPostfix: ''
    townBlockBuyBonusLimit: 0
    townBlockLimit: 32
    upkeepModifier: 1.0
    townOutpostLimit: 1
    debtCapModifier: 1.0
    peacefulCostMultiplier: 1.0
    bankCapModifier: 1.0
    resourceProductionModifier: 1.0
    townBlockTypeLimits:
    - shop: 5
    - arena: 4
```

各个参数如下表所示：

|变量|描述|
|---|---|
|`numresidents: 1`|到达该城镇等级所需玩家数量。|
|`namePrefix: ''`|城镇名称前缀。|
|`namePostfix: '(定居者)'`|城镇名称后缀。|
|`mayorPrefix: '隐士 '`|镇长名称前缀。|
|`mayorPostfix: ''`|镇长名称后缀。|
|`townBlockBuyBonusLimit: 0`|城镇可通过命令 `/town buy` 额外购买的最大区域数量。<br>需要 [config.yml](../reference/index.md) 下的 `town.max_purchased_blocks_uses_town_levels` 权限设置为 true。|
|`townBlockLimit: 16`|覆盖 `town_block_ratio` 设置项，决定城镇拥有多少地块。<br>需要将 [config.yml](../reference/index.md) 中 `town_block_ratio` 设置为 `0`。|
|`upkeepModifier: 1.0`|填入更高的值可在城镇居民规模增加时收取更多维护费用。<br>不影响 `town_plotbased_upkeep: true` 状态的设置服务器，因为其基于区域数量而非居民数量，*除非*你同时设置了 `town_plotbased_upkeep_affected_by_town_level_modifier: true`。|
|`townOutpostLimit: 1`|城镇可设置的前哨站数量。<br>需要将 [config.yml](../reference/index.md) 的 `limit_outposts_using_town_and_nation_levels` 设置为 true。|
|`debtCapModifier: 1.0`|当 [config.yml](../reference/index.md) 中的 `debt_cap_uses_town_levels` 设置为 true 时，`debt_cap.override` 将会乘以 town_level 的 `debtCapModifier` 值。（示例：debtCapModifier 为 3.0，debt_cap.override 为 1000.0 时，债务上限为 $3.0 \times 1000 = 3000$。）|
|`peacefulCostMultiplier: 1.0`|城镇保持中立的维持费用，受城镇居民数量影响，另外还要乘以 [config.yml](../reference/index.md) 下 `economy.price_town_neutrality` 的值。|
|`resourceProductionModifier: 1.0`|决定 TownyResources 插件每日获取的资源数量。|
|`bankCapModifier: 1.0`|城镇金库的储量上限，受城镇居民数量影响，另外还要乘以 [config.yml](../reference/index.md) 下 `economy.banks.town_bank_cap` 的值。|
|`townBlockTypeLimits`|可选列表。用于限制[每种区域](#)的数量。列表可为空 `[]` 或填入任何类型的区域。|

* 上述示例的两个等级分别为拥有 1 位和 2 位居民的城镇设置。城镇创建之初，城镇名称的末尾就会带上“（定居点）”后缀，镇长则会获得“隐士”的前缀。当城镇拥有第二位居民时，则会变为“城镇名称（小村）”，他的前缀则会变为“村长”。

### nation_level:

* nationLevel 的基础格式如下所示：

``` YAML
        -   numResidents: 10
            capitalPrefix: ''
            capitalPostfix: ''
            namePrefix: '联邦'
            namePostfix: ' (国家)'
            kingPrefix: '伯爵 '
            kingPostfix: ''
            townBlockLimitBonus: 10
            upkeepModifier: 1.0
            nationTownUpkeepModifier: 1.0
            nationZonesSize: 1
            nationBonusOutpostLimit: 2
            peacefulCostMultiplier: 1.0
            bankCapModifier: 1.0

        -   numResidents: 20
            capitalPrefix: ''
            capitalPostfix: ''
            namePrefix: '领土 '
            namePostfix: ' (国家)'
            kingPrefix: '公爵 '
            kingPostfix: ''
            townBlockLimitBonus: 20
            upkeepModifier: 1.0
            nationTownUpkeepModifier: 1.0
            nationZonesSize: 2
            nationBonusOutpostLimit: 3
            peacefulCostMultiplier: 1.0
            bankCapModifier: 1.0
```

各个参数如下表所示：

|变量|描述|
|---|---|
|`numResidents: 10`|到达该等级所需居民数量。<br>**注意：** 如果在 [config.yml](../reference/index.md) 中启用了 `global_nation_settings.nation_level_is_determined_by_town_count_instead_of_resident_count`设置，则此项为城镇数量而非居民总数。|
|`capitalPrefix: ''`|国家首都名称的前缀。|
|`capitolPostfix: ''`|国家首都名称的后缀。|
|`namePrefix: '联邦 '`|国家名称的前缀。|
|`namePostfix: ' (国家)'`|国家名称的后缀。|
|`kingPrefix: '伯爵 '`|国家领袖的前缀。|
|`kingPostfix: ''`|国家领袖的后缀。|
|`townBlockLimitBonus: 10`|加入国家后的城镇额外获得的占地上限。|
|`upkeepModifier: 1.0`|填入更高的值可增加国家居民数量增加后的维持费用（除非将 `town_plotbased_upkeep` 设置为 `true`，这样会使得其依赖占地数量而非玩家数量判断）。|
|`nationTownUpkeepModifier: 1.0`|加入国家会降低/提升城镇的维护费用。这个修饰符的计算顺序后于其他修饰符。设置为 1.0 时，维护费用不会变化。|
|`nationZonesSize: 2`|环绕城镇附近的国家区域大小。|
|`nationBonusOutpostLimit: 2`|城镇额外增加的前哨站数量上限。|
|`peacefulCostMultiplier: 1.0`|国家保持中立的维持费用，受国家居民数量影响，另外还要乘以 [config.yml](../reference/index.md) 下 `economy.price_nation_neutrality` 的值。|
|`bankCapModifier: 1.0`|国家金库的储量上限，受国家居民数量影响，另外还要乘以 [config.yml](../reference/index.md) 下 `economy.banks.town_bank_cap` 的值。|

## 城镇扩张

### 建立城镇

镇长可通过命令 `/town new {城镇名称}` 建立新的城镇。这需要收取一定量的金钱，具体数值则在配置文本的 `price_new_town` 中。

创建者所在区域则会成为城镇的核心地块，即该城镇所有居民重生后的位置。镇长可通过命令 `/t set spawn` 重设区域内的出生点。核心地块可通过命令 `/t set homeblock` 移动到城镇区域的其他位置。

可通过命令 `/town claim` 占领区域。这些区域需要与已占领区相邻，除非其为[前哨站](#)。

在 Towny 0.100.2.0 之后，能够给予新创建的城镇一些地块奖励。可通过 [config.yml](../reference/index.md) 的 `claiming.new_town_bonus_claims` 设置修改。

### 加入城镇

加入城镇的方式有两种，被镇长或镇书记邀请，或者加入公开城镇。

镇长与镇书记可以通过命令 `/town add {玩家名称}` 将玩家加入城镇。玩家会收到请求，此时可输入 `/accept` 或 `/deny` 同意或拒绝。

镇长可通过命令 `/town toggle open` 将城镇设置为对外开放。不属于任何城镇的玩家可以通过命令 `/town join {城镇名称}` 加入这些开放城镇。开放城镇可以通过命令 `/town list by open` 浏览、

在居民加入城镇后，可供镇长占领的地块数量上限会相应增加。

## 土地系统相关

### 城镇地块

Towny 提供了一种玩家自行使用的方块保护系统。方块保护将世界分为一块块区域，称之为城镇地块，默认 16x16xN（N 为世界最大高度）。将这些区域看做网格，相互对其且没有间距，大小相同。城镇地块由镇长占领，而他则可以将占领的区域分发或出售给居民。

在 Towny 0.95.1.0 后，可在城镇地块上赋予元数据，见此了解更多。

#### 城镇地块大小

你可以在 [config.yml](../reference/index.md) 的 `town_block_size` 处修改城镇地块的大小。只建议在首次安装 Towny 时修改配置。在已有数据后进入世界则会导致占领区域出现偏移。使用更小的值会需要更高的精确度，使得占领更加麻烦。另外，更小的值会导致 Towny 自带的缓存系统毫无用处（因此不推荐将其设置为小于 4 的值）。每格大小均为 `town_block_size` x `town_block_size` x N，N 为世界最大高度。

#### 认领城镇地块

##### 城镇认领

城镇居民可以在拥有权限的情况下认领城镇内的地块。默认情况下只有镇长与镇书记可以做到。玩家可通过命令 `/town claim` 或 `/town claim #` 或 `/town claim rect|circle #|auto` 或 `/town claim auto` 自行认城镇地块。为了一次认领多个地块，你需要给予镇长 `towny.command.town.claim.town.multiple` 权限。

|命令|描述|
|---|---|
|`/town claim`|认领玩家脚下所处的地块。|
|`/town claim #`|以玩家为中心，认领给定半径内的方形区域，会对值向下取整以贴合实际形状。|
|`/town claim rect #`|以玩家为中心，认领给定半径内的方形区域，会对值向下取整以贴合实际形状。|
|`/town claim rect auto`|以玩家为中心，认领玩家可领取的最大方形区域。|
|`/town claim circle #`|以玩家为中心，认领给定半径内的圆形区域，会对值向下取整以贴合实际形状。|
|`/town claim circle auto`|以玩家为中心，认领玩家可领取的最大圆形区域。|
|`/town claim auto`|以玩家为中心，认领玩家可领取的最大方形区域。|
|`/town claim fill`|填充认领由地块环绕的区域。在形成有效封闭图形前不会触发。|

输入 `/town` 命令会列出剩余可认领地块数。

在 0.95.0.0 之后，你可以通过 `economy.new_expand.price_claim_townblock_refund` 设置决定解除占领地块的退款数量。不推荐将其设置为高于认领区块的价格。在 0.98.0.0 之后，你可以将其设置为负数，使得玩家在解除认领时会被收取费用。

在 0.95.0.0 之后，你可以通过 `economy.new_expand.price_claim_townblock_increase` 设置决定占领地块后的增加价格。当设置为 1 时表示不启用。1.3 表示每次认领后，下一个地块的价格会增加 30%。价格增加状态可以在 `/towny prices` 的信息中浏览。

在 0.96.3.0 之后，你可以通过 [config.yml](../reference/index.md) 的 `economy.new_expand.max_price_claim_townblock` 设置决定 `economy.new_expand.price_claim_townblock_increase` 增加的最大价格。

在 0.99.0.0 之后，你可以强制城镇以不同形状占领其地块。[config.yml](../reference/index.md) 中的 `claiming.min_adjacent_blocks` 表示城镇待占领的地块与已占领地块相邻边的最少条数。默认将其设置为 -1，即表示禁用，但设置为 2 或 3 时可防止城镇的占地变为一条直线。

在 0.100.1.0 之后，你可以防止城镇在海洋等无人生物群系中占领区域。[config.yml](../reference/index.md) 下的占领部分配置的群系规则部分可以找到这两个选项。不允许玩家占领包含过多无人生物群系或海洋的区域。通过这个功能，你可以禁止玩家占领海洋、河流、不可占领的山脉，使得地图能保留独特的景观。

#### 个人（玩家）占领

当城镇通过命令 `/town claim` 占领地块时，镇长可通过命令 `/plot fs {可选价格}` 将地块/地皮设置为待售状态。在上架后，居民可通过 `/plot claim` 认领地块。相似地，可通过 `/plot unclaim` 命令解除认领。

### 转让土地

在 Towny 0.100.2.0 之后，玩家可自愿将土地给予其他城镇，通过命令 `/town cede plot [城镇名称]` 完成。为了让城镇能转让土地，拥有土地的城镇必须能在土地被解除占领时通过命令 `/t claim` 认领它。这表示对方城镇必须有足够的剩余地块数用于占领转让的土地，且占领区域的相邻状态等内容也必须符合规则。在输入命令 `/t cede plot [城镇名称]` 之后，玩家必须再输入一次命令确认操作，且对方镇长必须在线才可接受地皮给予请求。

### 城镇拥有地块数量设置

你可以修改城镇认领地块的最大数量。这在配置里有两个地方。Towny 会先检查 [config.yml](../reference/index.md) 的 `town_block_ratio` 设置，默认值为 8，即每位居民默认可占领 8 个地块。你可以将其设置为 `town_block_ratio: 0` 并使用 [config.yml](../reference/index.md) 中 `town_level` 部分的配置。更多有关 town_level 及其配置教程的信息可以点击[这里](#town_level)浏览。设置 `town.town_block_limit` 决定了城镇可拥有的地块总数，设置小于 0 时不生效。

在 Towny 0.98.0.0 之后，城镇可以占领数量不限的地块。这可以通过将配置文本的 `town_block_ratio` 设置为 -1（影响所有城镇），或通过命令 `/ta town {城镇名称} toggle unlimitedclaims` 完成（只影响指定城镇）。

### 购买城镇地块

通常情况下，Towny 基于居民数量或 town_level 限制城镇地块的数量。Towny 允许城镇通过 `/town buy bonus {数量}` 命令购买额外的城镇地块，之后再占领。这里有两种方法限制城镇购买的地块数量：

1. 如果 `town.max_purchased_blocks_uses_town_levels` 为 false：最大值为 [config.yml](../reference/configs/config-yml.md) 中的 `max_purchased_blocks: '0'`。
2. 如果 `town.max_purchased_blocks_uses_town_levels` 为 true：最大值通过 town_level 的 `townBlockBuyBonusLimit` 设置限制，允许居民更多的城镇购买更多的地块。

购买地块的价格位于 [config.yml](../reference/configs/config-yml.md) 中的 `price_purchased_bonus_townblock: '25.0'`，购买价格可以按购买数量递增，在配置中的 `price_purchased_bonus_townblock_increase: '1.0'` 处修改。通过这个功能，镇长可以扩张城镇规模，而无需增加居民数量。增加的购置费用可以在 `/town buy bonus` 命令显示的内容中查看。

在 Towny 0.96.3.0 之后，你可以通过 `price_purchased_bonus_townblock_increase` 决定涨价后城镇地块的最高购买价格。这个设置位于 [config.yml](../reference/configs/config-yml.md) 中的 `economy.new_expand.price_purchased_bonus_townblock_max_price`。

管理员可以通过 `/ta town 城镇名称 giveboughtblocks [#|unset]` 命令增加/减少城镇购买的地块。输入负数表示减少地块，输入 unset 表示移除所有购置的地块。

### 过度扩张

在 Towny 0.99.1.0 之后，“过度扩张”功能被加入。它默认禁用，需要在 [config.yml](../reference/configs/config-yml.md) 中的 `town.overclaiming.being_overclaimed_allows_other_towns_to_steal_land` 设置处手动启用。

开启这个功能后，城镇就有可能出现“过度扩张”状态。当城镇的占领数量高于地块上限，如“120/100 城镇地块”时，城镇即视作“过度扩张”。

地块可通过命令 `/t takeoverclaim` 命令偷窃。但它有如下限制：

* 命令只能在你的城镇边缘地带使用。
* 你自己的城镇无法过度扩张。
* 你需要支付 `economy.takeoverclaim.price` 设置中对应的额外价格。
* 城镇只能拥有其偷窃的土地，除非不再处于过度扩张状态！
* （可选）从其他城镇偷取地块的城镇需要有足够长的存在时间，防止新城镇出现过度扩张状态。
* （可选）`/t takeoverclaim` 命令有使用冷却。

被偷取的城镇地块会在区块提醒中显示“[可夺取]”。

出现或即将出现过度扩张的城镇中，镇长会在这些时候看见警告信息：

* 出现过度扩张状态时上线。
* 占领地块时达到数量上限。
* 失去居民会导致过度扩张时。

过度扩张偷取的地块不能隔开城镇，因此土地偷取只能由外向内进行。

需要注意的是：

* 只建议在禁用前哨站的服务器中使用这个功能，并建议将占领地块相对距离设置为大于 1 的值。
* 配置中存在阻止过于靠近城镇中心的地块被偷取的设置，位于 `town.overclaiming.overclaiming_prevented_by_homeblock_radius` ！

在 0.100.1.0 后，配置中出现了限制敌方完成国家土地过度扩张。它位于 [config.yml](../reference/configs/config-yml.md) 中的 `claiming.overclaiming.nations_required_to_be_enemies`。

### 地皮组

地皮可以*按组分类*。这使得多个地皮可以像一片地皮一样进行交易或其他改动。玩家必须拥有对应权限才可以创建地皮组。玩家站在地皮中，输入命令 `/plot group add {组名称}`，之后 Towny 就会将玩家所处的地皮加入对应的组，如果对应的组不存在，则会尝试新建一个。其他地皮也可通过相同的步骤加入对应的组。

大多数用于控制地皮的其他命令基本相同，但有一点不同，普通地皮的 `/plot` 命令需要替换为 `/plot group` 命令。例如，一般设置地皮售价的命令为 `/plot fs 10000`，但在地皮组中，你需要输入的命令为 `/plot group fs 10000`。权限、类型以及其他内容都需要这么做。输入 `/plot group ?` 命令可查看完整命令列表。

在 Towny 0.99.6.0 之后，可以在新居民模式 `plotgroup` 下通过走入地皮的方式，将其添加至地皮组中。当玩家预先设置好地皮组名称，他走入的任何地皮都会自动进入这个组。这个名称通过 `/plot group add 名称` 设置。在这种情况下，玩家可以通过 `/plot group add 名称` 新建地皮组，并使用 `/res toggle plotgroup` 命令开启居民模式。然后四处走动将地皮加入组中，完成后再次使用切换命令即可。

### 商业区

地皮可以被分组归纳为*街区*。街区与地皮组相似，但仍有区别：街区的城镇地块不需要拥有相同的地皮权限、类型、拥有者或名称。

街区适合用于命名城镇的某一区域，或划分邻里。

街区会在区块提醒、地图 HUD 和 `/towny map` 的悬浮文本中显示其名称。

街区中的城镇地块需要相邻。

通过 `/res toggle district` 命令设置的玩家无需使用 `/plot district` 命令即可扩张街区。该模式下，玩家走入的地块只要符合条件便会自动纳入对应街区。

### 地皮类型

Players can use `/town plots {townname}` to view the counts of various plot types in a town. Towny post-0.75 has added plot types besides the default. This is to give mayors more control over their towns. 

玩家可以通过命令 `/town plots {城镇名称}` 浏览城镇内各种地皮的数量。0.75 版本前的 Towny 向默认的地皮中添加了类型。这可以让拥有者更好地掌管城镇。

A plot's cost to create (using the `/plot set {plottype}` command,) and the plot tax paid by the player to keep ownership of the plot are set in the `townblocktypes.types` section of the config.

（通过命令 `/plot set {地皮类型}`）创建地皮的费用，以及玩家拥有地皮所需支付的税额可以在配置的 `townblocktypes.types` 部分修改。

As of Towny 0.98.4.0 you can limit how many of each plot type a town can have using the town_level's townBlockTypeLimits list.

在 Towny 0.98.4.0 之后，你可以通过 [town_level](#town_level) 的 townBlockTypeLimits 设置限制城镇可拥有的各类地皮数量。

As of Towny 0.98.0.0 you can create any number of TownBlock Types! Your config contains a townblocktypes section. In it you will find the below plot types, but you can add your own as well. It is not recommended that you remove any types added by default though.

在 Towny 0.98.0.0 之后，城镇地块的类型数量不再受到限制！配置新增的 townblocktypes 部分包含了如下默认类型，你可以根据自己的需要自行增删。非常不推荐删除默认添加的类型。

#### 自定义地皮类型

一个自定义类型包含七个参数：

|键名|解释|
|---|---|
|`name`|城镇地块的名称，用于游戏内及数据库中。|
|`cost`|玩家将城镇地块改为此类型的所需付出的价格。|
|`tax`|拥有该地皮的玩家所需承担的税额。设置为 0 时使用城镇的地皮税价。|
|`mapKey`|显示在 `/towny map` 命令中的内容。|
|`itemUseIds`|留空则使用 `protection.item_use_ids` 的值。其他情况下，对应的物品在该类型的地皮中可以触发 `item_use` 操作。|
|`switchIds`|留空则使用 `protection.switch_ids` 的值。其他情况下，对应的物品在该类型的地皮中可以触发 `switch` 操作。|
|`allowedBlocks`|拥有建筑与破坏权限的玩家只能与这些方块交互，可参照 farm 类型地皮中设置的内容。留空时，默认指定普通的建筑方块。|

在 Towny 0.99.6.0 之后，新配置中的每个 TownBlockType 默认包含 `colour:` 设置，可以通过它为每个 TownBlockType 设置默认颜色。现存的旧配置可以直接插入这个设置项。此处设置的颜色会用在 `/towny map` 的显示文本中。

Towny 提供的地皮类型如下：

##### 默认地皮

这类地皮无需额外命令分配。可通过命令 `/plot forsale {价格}` 挂售。其他种类地皮可通过命令 `/plot set reset` 重置为默认地皮。

##### 商用地皮

商用地皮通过命令 `/plot set shop` 设置。镇长可通过命令 `/town set shopprice {价格}` 改变商用地皮的默认售价。而镇长通过命令 `/plot forsale {价格}` 出售地皮时会忽略默认价格。除此之外，镇长还可以使用命令 `/town set shoptax {价格}` 为商用地皮设置额外的税。它独立于默认的地皮税。

部分商店插件支持限制玩家在商店地皮内摆摊。这有助于城镇形成商业区。

若有插件需要通过 Towny API 限制商用地皮内的商店数量，可以前往 [TownyAPI 的维基页面](../towny-advanced/townyapi.md)了解更多。

内置了支持的商店插件包括（但不限于）：

* [ChestShop](https://www.spigotmc.org/resources/chestshop.51856/)（通过附属 [ChestShop-Towny](https://github.com/TownyAdvanced/ChestShop-towny/releases) 实现）
* [TheNewEconomy](https://www.spigotmc.org/resources/the-new-economy.7805/)（通过附属 [TNE-Towny](https://www.spigotmc.org/resources/towny-tne.71240/) 实现）
* [QuickShop-ReRemake](https://www.spigotmc.org/resources/quickshop-reremake-1-20-2-ready-multi-currency.62575/)
* [DisplayShops](https://github.com/XZot1K/DisplayShops)
* [QuickShop-Hikari](https://github.com/true-og/QuickShop-Hikari)
* [CustomShop](https://github.com/solarrabbit99/CustomShop)
* [VillagerMarket](https://github.com/Bestem0r/VillagerMarket)
* [iShop](https://github.com/Beez0r/iShop)
* [EzChestShop](https://github.com/ItzAmirreza/EzChestShop)

##### 竞技场地皮

竞技场地皮通过命令 `/plot set arena` 设置。竞技场地皮内的 PVP 及友伤始终开启。除此之外，竞技场地皮内还会禁用城镇治疗。

在 0.101.0.0 之后，竞技场地皮可以防止物品降级。该功能可以在 [config.yml](../reference/configs/config-yml.md) 中的 `global_town_settings.prevent_item_degrading_in_arenas` 处设置。

##### 对外地皮

对外地皮通过命令 `/plot set embassy` 设置。镇长可通过命令 `/town set embassyprice {价格}` 改变商用地皮的默认售价。而镇长通过命令 `/plot forsale {价格}` 出售地皮时会忽略默认价格。除此之外，镇长还可以使用命令 `/town set embassytax {价格}` 为对外地皮设置额外的税。它独立于默认的地皮税。

任何拥有 `towny.command.plot.claim` 权限的玩家都可以购买对外地皮，无论他是否为城镇居民。剩余的城镇地块仍然为城镇所有，镇长可随时从拥有者处取走地皮。对外地皮可以转变为商用地皮，可以在扩大商业区规模的同时吸引外来玩家的入驻。玩家退出城镇时不会失去对外地皮的拥有权。

##### 郊区地皮

郊区地皮通过命令 `/plot set wild` 设置。居民可以在郊区地皮中破坏忽略 ID 列表中标注的方块。默认包含矿物、树木、花草、蘑菇及其他可收取的作物等。默认不包含石头、泥土、草方块等构成地形的方块。这类地皮适合用于搭建树场，或者保护城镇周围的地形，同时允许居民伐木与探索洞穴。

玩家可以通过命令 `/towny wildsblocks` 浏览郊区可破坏的方块。

设置郊区地皮有些复杂，如下为操作步骤。

> 1. 打开 `towny\data\worlds\WORLDNAME.txt` 文件。
> 2. 进行如下修改：\
>   unclaimedZoneBuild=false\
>   unclaimedZoneDestroy=false
> 3. 将 `unclaimedZoneIgnoreIds` 部分添加玩家可以自行破坏/放置的方块。
> 4. 通过命令 `/plot set wild` 设置郊区地皮。
>
> 默认情况下，居民拥有破坏与放置的能力。如果需要非城镇居民使用郊区地皮，可以为他们分配盟友或外来人员权限。

##### 旅居地皮

旅居地皮通过命令 `/plot set inn` 设置。如果在 [config.yml](../reference/configs/config-yml.md) 中启用了 `deny_bed_use` 设置的话，这类地皮将会很有用。这个设置会阻止玩家使用其他城镇的床，除非床处于旅居地皮中。

旅居地皮允许玩家设置 `/res spawn` 以及复活位置。但国家的敌人无法使用旅居地皮。

##### 监狱地皮

监狱地皮通过命令 `/plot set jail` 设置。

下述情况中的玩家会被监禁：

* 玩家所在城镇的镇长/警长使用如下命令将其打入：
  * 保释功能禁用时：
    * `/town jail [名称]` - 将指定城镇居民关押一小时。
    * `/town jail [名称] {时长}` - 将指定城镇居民关押指定时长（需为数字）。
    * `/town jail [名称] {时长} {监狱}` - 将指定城镇居民关押到指定的监狱中一段时间（均为数字）。
    * `/town jail [名称] {时长} {监狱} {牢房}` - 将指定居民关押到指定监狱的牢房中一段时间（均为数字）。
  * 保释功能启用时：
    * `/town jail [名称]` - 将指定城镇居民关押一小时，保释金额为默认值。
    * `/town jail [名称] {时长}` - 将指定城镇居民关押指定时长（需为数字），保释金额为默认值。
    * `/town jail [名称] {时长} {保释金}` - 将指定城镇居民关押指定时长，并指定保释金的数量（均为数字）。
    * `/town jail [名称] {时长} {保释金} {监狱}` - 将指定城镇居民关押到指定的监狱中一段时间，并指定保释金的数量（均为数字）。
    * `/town jail [名称] {时长} {保释金} {监狱} {牢房}` - 将指定居民关押到指定监狱的牢房中一段时间，并指定保释金的数量（均为数字）。

* （国家认定的）敌对玩家因袭击城镇死亡。该名玩家会被送往防御城镇的主监狱。
* 逃犯在袭击城镇时被带有 `towny.outlaw.jailer` 权限的玩家击杀。该名玩家会被送往防御城镇的主监狱。同时配置文本中的 `jail.is_jailing_attacking_outlaws` 项必须设置为 true。

下述情况的玩家会被释放：

* 离开城镇成为游民；
* 镇长/警长手动释放；
* （使用命令 `/resident jail paybill`）支付保释金释放；
* 逃出监狱及城镇后进入郊区。

另外，

* 被关押的玩家无法传送；
* 被关押的玩家无法使用末影珍珠或紫颂果，除非在配置文本中设置；
* 被关押的玩家死亡后会回到分配的监狱内；
* 被关押的玩家击杀后无法获得金钱；
* 被关押的玩家会在 `/res [玩家名称]` 界面和城镇信息中显示监禁状态；
* 非常建议在 townyperms.yml 文件中设置一个“警长”登记，并为其分配 `towny.command.town.toggle.jail` 权限。新生成的 townyperms.yml 文件默认包含这一等级。
* `jail.blacklisted_commands` 列表中包含了被关押玩家无法执行的命令。

还有，

* 配置中开启的功能：关入监狱前登出的玩家会被直接杀死。
  * 上线后的玩家会收到警告。
  * 与大部分防下线遁的插件原理相似。
* 可选的新手保护机制
  * 在配置中设置，新加入服务器的玩家在多久时间内不会被关入监狱。

监狱地皮可以有多个牢房。牢房通过命令 `/plot jailcell add` 添加，通过命令 `/plot jailcell remove` 移除。监狱牢房的重生位置在游戏内以围成一圈的粒子效果标记。

城镇可通过命令 `/town jail list` 命令查询监狱列表。城镇可通过命令 `/town set primaryjail` 站在监狱地皮中设置主监狱。

被关押的玩家会获得一本书，里面详细讲述了离开监狱的方式，里面的描述会被插件的设置影响。

[config.yml](../reference/configs/config-yml.md) 中的 `jail.bail.is_allow_bail` 可以启用保释功能。这允许玩家付钱出狱。逃犯、被击杀而监禁的敌人、被击杀的镇长与国王都有不同的保释价格。当城镇居民被其他玩家监禁时，保释金额可在命令中指定，上限数值可以在 [config.yml](https://github.com/TownyAdvanced/Towny/wiki/Default-Config.yml) 的 `jail.bail.bailmax_amount` 处填写。

##### 农场地皮

监狱地皮通过命令 `/plot set farm` 设置。农场地皮只允许玩家破坏 [config.yml](../reference/configs/config-yml.md) 中 `global_town_settings.farm_plot_allow_blocks` 设置的方块。默认包含如下方块：

`BAMBOO,BAMBOO_SAPLING,JUNGLE_LOG,JUNGLE_SAPLING,JUNGLE_LEAVES,OAK_LOG,OAK_SAPLING,OAK_LEAVES,BIRCH_LOG,BIRCH_SAPLING,BIRCH_LEAVES,ACACIA_LOG,ACACIA_SAPLING,ACACIA_LEAVES,DARK_OAK_LOG,DARK_OAK_SAPLING,DARK_OAK_LEAVES,SPRUCE_LOG,SPRUCE_SAPLING,SPRUCE_LEAVES,BEETROOTS,COCOA,CHORUS_PLANT,CHORUS_FLOWER,SWEET_BERRY_BUSH,KELP,SEAGRASS,TALL_SEAGRASS,GRASS,TALL_GRASS,FERN,LARGE_FERN,CARROTS,WHEAT,POTATOES,PUMPKIN,PUMPKIN_STEM,ATTACHED_PUMPKIN_STEM,NETHER_WART,COCOA,VINE,MELON,MELON_STEM,ATTACHED_MELON_STEM,SUGAR_CANE,CACTUS,ALLIUM,AZURE_BLUET,BLUE_ORCHID,CORNFLOWER,DANDELION,LILAC,LILY_OF_THE_VALLEY,ORANGE_TULIP,OXEYE_DAISY,PEONY,PINK_TULIP,POPPY,RED_TULIP,ROSE_BUSH,SUNFLOWER,WHITE_TULIP,WITHER_ROSE,CRIMSON_FUNGUS,CRIMSON_STEM,CRIMSON_HYPHAE,CRIMSON_ROOTS,MUSHROOM_STEM,NETHER_WART_BLOCK,BROWN_MUSHROOM,BROWN_MUSHROOM_BLOCK,RED_MUSHROOM,RED_MUSHROOM_BLOCK,SHROOMLIGHT,WARPED_FUNGUS,WARPED_HYPHAE,WARPED_ROOTS,WARPED_STEM,WARPED_WART_BLOCK,WEEPING_VINES_PLANT,WEEPING_VINES,NETHER_SPROUTS`

玩家可通过命令 `/towny allowedblocks` 查询服务器允许在农场地皮中破坏或放置哪些方块。

破坏/放置这些方块仍然由地皮的权限决定，可通过 `/plot perm` 界面浏览。这表示，如果 B 为 rano，任何玩家都可以在地皮中放置/破坏允许列表中的方块。如果 B 为 r---，那么只有城镇居民可以这么做。

如果管理员愿意，可以将 FARMLAND（耕地方块）加入允许的方块列表，这样任何有权限的玩家都可以用锄头锄地。默认情况下这个方块不在默认的允许列表中，只有管理员/镇长/助理可以这么做。Towny 自带防止耕地踩踏的功能，因此它只会在干涸时变回泥土。

农场地皮同样允许玩家宰杀动物。但在此之前，玩家需要拥有破坏麦捆方块的能力。可击杀动物的设置位于 `global_town_settings.farm_animals`，默认情况下包含 `PIG,COW,CHICKEN,SHEEP,MOOSHROOM`。

##### 银行地皮

监狱地皮通过命令 `/plot set bank` 设置。银行地皮可以限制城镇与国家银行的存/取款行为。默认情况下这个设置为关闭状态，但你也可以在 [config.yml](../reference/configs/config-yml.md) 中 `bank.is_banking_limited_to_bank_plots` 处调整。银行地皮也可以为其他插件结合使用，将插件提供的内容限制在银行地皮中。

在 0.100.1.0 之后，新增了强制存/取款只能在银行地皮中进行的设置，防止城镇在没有银行地皮的情况下使用城镇地块。这可以在 [config.yml](../reference/configs/config-yml.md) 中 `bank.do_homeblocks_not_work_when_a_town_has_bank_plots` 处启用。

#### 前哨站

默认情况下，城镇地块围绕着核心地块，且总与城镇其他地块相邻。为了在郊区或其他世界占领地块，镇长或助理需设置一个前哨站。为了让玩家设置前哨站，配置的 `allow_outposts:` 项必须为 `true`，且玩家必须在其权限组中拥有 `towny.town.claim.outpost` 权限。现存的前哨站可通过 `/town outpost list` 命令列出。前哨站地块内的出生点通过 `/plot set outpost spawn` 或 `/t set outpost` 命令移动。

城镇居民可通过命令 `/town outpost x|名称|名称:x` 传送至指定的前哨站。

> x 为 1 - 城镇拥有的前哨站上限
> 名称为前哨站地皮名称（可在 `/t outpost list` 中浏览，通过命令 `/plot set name {名称}` 设置。）
> 填入 名称:1xxxxx 时 - 适用于地皮名称以数字开头的情况

管理员可控制玩家设置的前哨站数量上限，这可以通过权限管理插件的信息/选项/元节点实现，只需在信息节点中填入 `towny_maxoutposts: {数量}` 即可。[更多信息见此](../reference/permission-nodes.md)。 

另外，在 0.93.0.0 之后，你可以通过修改 config.yml 的 town_level 与 nation_level 选项的 maxoutpost 值，让规模更大的城镇可以设置更多前哨站，并给予国家中的城镇额外的前哨站。需要在 [config.yml](../reference/configs/config-yml.md) 中 `global_town_settings.limit_outposts_using_town_and_nation_levels` 部分启用。

管理员还可以通过 `minimum_amount_of_residents_in_town_for_outpost` 设置决定城镇居民数量达到多少时才可以设置前哨站。默认情况下不作限制。

前哨站的位置不能太靠近其他城镇的核心地块，与新城镇不能与其他城镇相邻类似。实际数量可以在 [config.yml](../reference/configs/config-yml.md) 中 `min_distance_from_town_homeblock: 5` 处改变。默认情况下，前哨站与其他城镇核心地块的距离必须大于 5 个城镇地块单位。

你也可以通过 `town.min_distance_for_outpost_from_plot` 设置决定前哨站与其他城镇地皮的距离限制。

你还可以通过 [config.yml](../reference/configs/config-yml.md) 的 `price_outpost: 500.0` 设置修改前哨站地皮的价格。

#### 地皮的购置与出售

土地是城镇的一部分，由镇长向居民出售。必须在 [config.yml](../reference/configs/config-yml.md) 中将 `using_economy` 设置为 `true` 才可以在交易时收钱。镇长在游戏内可以通过命令设置地皮的售价。

> * `/town set plotprice {价格}`
>   * 设置此后地皮的售价，已经售出的地皮保持原价。
>   * 未设置时售价为 0。

为了出售地皮，镇长需站在地皮内，输入命令 `/plot forsale {可选价格}`。居民可（站在地皮内）输入 `/plot claim` 购置这块地皮。

镇长可以限制加入时间超过一定长度的居民才可购买该地皮。使用这两条命令：`/t plot set minjoindays {时长天数}`、`/t plot set maxjoindays {时长天数}` 即可。输入后，只有加入城镇时长处于范围内的玩家才可购置地皮。这些信息会显示在 `/plot info` 界面，且 `/plot claim` 命令购置地皮失败时也会提示。

对外地皮不受该限制的影响，除非购买它的是本城镇的居民。镇长可在价格中输入 `clear`，表示取消地皮售价设置。

#### 区域防占领

这里有三种防止玩家占领土地的方法：

1. 第一种方法，让整个世界无法被占领：在当前世界输入 `/tw toggle claimable`。这可以阻止任何玩家占领土地（包括前哨站）。
2. 第二种方法，在当前位置设置你自己的城镇，其他玩家将无法占领已经被占领的区域：
  > 如果你已经拥有了一个城镇，你可以输入 `/ta set mayor 城镇名称 npc`，然后输入 `/t leave`。之后可以在需要阻止其他玩家占领的位置设置新城镇。如果你需要更多城镇地块，管理员可使用 `/t town 城镇名称 toggle unlimitedclaims` 获得数量不限的城镇地块。占领完毕后，只需输入命令 `/ta set mayor 城镇名称 npc`，并再次输入 `/t leave` 即可。新设置的 NPC 城镇不需要支付维护费用，会永久存在于服务器中。如果需要重新加入之前的城镇，只需输入命令 `/ta town 城镇名称 add 你的名称`，再输入 `/ta set mayor 城镇名称 你的名称`。
3. 第三种方法，使用 [WorldGuard-Towny](https://github.com/TownyAdvanced/WorldGuard-Towny) 插件。安装后，任何设置了 `town-creation` 为 `deny` 标志的区域都会[阻止玩家占领 Towny 区域](#)。

#### 使用地图

Towny 中的地图会显示地皮网格。地图可通过命令 `/towny map` 浏览，也可以按如下步骤调整，使得每次移动时都会显示地图。

> 输入命令 `/resident toggle map` 将其启用或禁用。

通过命令 `/towny map big` 浏览放大版的地图。

通过命令 `/towny map hud` 显示 HUD 版的地图。

在 Towny 0.99.6.0 之后，可以通过 [config.yml](../reference/configs/config-yml.md) 的 `ascii_map_symbols.map_height` 与 `ascii_map_symbols.map_width` 设置修改 `/towny map` 显示的维度类型。

#### 地皮再生与地皮解除占领

有四种影响城镇地块/地皮的方法。

##### 在解除占领时还原城镇地块至初始状态

当地皮（因玩家通过命令 /t unclaim 或无力支付维护费用）不再被占领时，地皮的样貌会缓慢回到未占领的状态。方块会缓慢变回占领前保存快照的样貌。城镇地块必须在快照被删除前完全恢复。如果城镇地块在此过程中被其他城镇占领，则不会产生新的快照。如果此时再次被解除占领，则继续先前的还原过程。

> * `towny\data\worlds\世界名称.txt` 的 `usingPlotManagementRevert` 设置负责控制这个功能。
> * 也可以站在想要切换此功能的世界中输入命令 `/tw toggle revertunclaim`。
> * 为新建世界禁用此功能的设置位于配置文件的 `new_world_settings.plot_management.revert_on_unclaim.enabled` 部分。

你可以自行配置哪些方块不可再生，防止玩家刷取诸如钻石矿这样的珍稀资源。

> * 不可再生的方块列表位于 `towny\data\worlds\世界名称.txt` 的 `plotManagementIgnoreIds` 部分。
> * 为新建世界设置此功能的设置位于配置文件的 `new_world_settings.plot_management.revert_on_unclaim.block_ignore` 部分。

除此之外，白名单可以只让某些方块再生。

> * 白名单设置在世界配置中的 `revertOnUnclaimWhitelistMaterials` 处。
> * 留空表示关闭，即使用 `plotManagementIgnoreIds` 中的方块名称，为黑名单模式。
> * 为新建世界设置此功能的设置位于配置文件的 `new_world_settings.plot_management.revert_on_unclaim.block_whitelist` 部分。
> * 只让某些像石头、草、树木等的“自然”方块再生，对于想要在郊区采集资源的玩家而言非常有用。

在 Towny 0.99.6.0 之后，插件内置了对 CoreProtect 的支持，由 Towny 还原的方块会被记录到 CoreProtect 的日志中，你可以在那里撤销这些操作。

##### 在解除占领时移除预设方块

当地皮（因玩家通过命令 `/t unclaim` 或无力支付维护费用）不再被占领时，这个列表中的方块会瞬间消失。这个功能适合在解除城镇占领时清除其中的所有告示牌，让所有被 Lockette 或 Deadbolt 插件锁住的箱子解锁。

> * `towny\data\worlds\世界名称.txt` 的 `usingPlotManagementdelete` 设置负责控制这个功能。
> * 为新建世界禁用此功能的设置位于配置文件的 `new_world_settings.plot_management.block_delete.enabled` 部分。

可以按世界类型决定删除的方块类型。

> * `towny\data\worlds\世界名称.txt` 的 `plotManagementDeleteIds` 中的方块会在地皮解除占领后消失。
> * 为新建世界设置此功能的设置位于配置文件的 `new_world_settings.plot_management.block_delete.unclaim_delete` 部分。

##### 地皮拥有者与镇长的 `/plot clear` 命令

只有镇长可以在开放的城镇地皮中使用的命令：`/plot clear`。这个命令用于清理已经离开城镇或迁移到其他地皮的玩家在先前地点的残留建筑。默认情况下只清理告示牌，镇长可以通过这个功能清理门、箱子、熔炉、发射器以及活板门的木牌锁。

玩家可以输入命令 `/towny plotclearblocks` 浏览执行命令时清理的方块类型。

> * `towny\data\worlds\世界名称.txt` 的 `usingPlotManagementMayorDelete` 设置，或者命令 `/tw toggle plotcleardelete` 可以控制这个功能。
> * 为新建世界禁用此功能的设置位于配置文件的 `new_world_settings.plot_management.mayor_plotblock_delete.enabled` 部分。

你可以配置输入命令时移除的材料名称。

> * 方块 ID 列表位于 `towny\data\worlds\世界名称.txt` 的 `plotManagementMayorDelete` 部分。
> * 为新建世界禁用此功能的设置位于配置文件的 `new_world_settings.plot_management.mayor_plotblock_delete.mayor_plot_delete` 部分。

在 Towny 0.79.1.0 之后，玩家可以在自己的地皮中执行这条命令。

##### 郊区再生

郊区爆炸再生有两个设置：

###### 实体爆炸

由诸如 TNT、苦力怕、凋灵头、末影龙等实体（可配置）破坏的地形会缓慢再生。这些设置在世界之间相互独立，因此你需要逐个修改。

> * `towny\data\worlds\世界名称.txt` 的 `usingPlotManagementWildRegen` 设置负责控制这个功能。
> * 在对应世界中输入命令 `/tw toggle revertentityexpl` 也可以开关该功能。
> * 为新建世界禁用此功能的设置位于配置文件的 `new_world_settings.plot_management.wild_revert_on_mob_explosion.enabled` 部分。
> * 爆炸痕迹会缓慢消失的实体列表在 `towny\data\worlds\世界名称.txt` 的 `PlotManagementWildRegenEntities` 处修改。
> * 为新建世界设置此功能的设置位于配置文件的 `new_world_settings.plot_management.wild_revert_on_mob_explosion.entities` 部分。

###### 方块爆炸

在 Towny 0.96.3.0 之后，你可以指定受爆炸摧毁会逐渐恢复的方块列表（如：下界中爆炸的床），与上述选项一样有对新创建世界的预设值与已有世界的默认值。

> * 为方块爆炸禁用此功能的设置位于 `towny\data\worlds\worldname.txt` 的 `usingPlotManagementWildRegenBlocks=true`。
> * 在对应世界中输入命令 `/tw toggle revertblockexpl` 也可以开关该功能。
> * 为新建世界禁用此功能的设置位于配置文件的 `new_world_settings.plot_management.wild_revert_on_mob_explosion.enabled` 部分。
> * 受爆炸摧毁会缓慢恢复的方块列表在 `towny\data\worlds\世界名称.txt` 的 `PlotManagementWildRegenBlocks` 处修改。
> * 为新建世界设置此功能的设置位于配置文件的 `new_world_settings.plot_management.wild_revert_on_block_explosion.blocks` 部分。

另外，你也可以切换到白名单模式，使得只有列表中的方块受爆炸摧毁后才会还原。

> * 白名单设置位于世界配置的 `PlotManagementWildRegenBlockWhitelist=""` 部分。
> * 留空表示关闭，即使用 `PlotManagementWildRegenBlocks` 中的方块名称，为黑名单模式。
> * 为新建世界设置此功能的设置位于配置文件的 `new_world_settings.plot_management.wild_revert_on_explosion_block_whitelist` 部分。

这两种郊区再生方式同样有一个不会被覆写的方块列表。如果服务器安装了落地成盒或类似的插件，被苦力怕炸死时这个功能就会派上用场。当箱子不在这个列表中时，玩家死亡后生成的箱子可能会被地面方块替换，因为它也被视作爆炸产生破坏的一部分。

> * 该设置位于世界配置的 `wildRegenBlocksToNotOverwrite=""` 部分。
> * 留空表示关闭，即任意类型的方块都会被替换。
> * 为新建世界设置此功能的设置位于配置文件的 `new_world_settings.plot_management.wild_revert_explosions_blocks_to_not_replace` 部分。

###### 爆炸恢复延迟

你可以自行配置方块恢复的速度，即每个方块恢复的时间间隔。

> * `towny\data\worlds\世界名称.txt` 的 `usingPlotManagementWildRegenDelay=5` 设置负责控制这个功能。
> * 为新建世界设置此功能的设置位于配置文件的 `new_world_settings.plot_management.wild_revert_on_mob_explosion.delay` 部分。

## 玩家地皮保护机制

Towny 的精妙之处即在于，它能让玩家自保。管理员不需要四处奔走保护玩家的土地，玩家也不能在没有建设城镇的情况下大肆扩张土地。

> * 在 Towny 0.77.0.0 之后，更新了地皮的单独权限。当城镇拥有者为城镇通过命令 `/town claim` 占领土地时，地皮在 `/town status` 的权限状态将会更新。当居民通过命令 `/plot claim` 占领土地时，地皮在 `/res status` 的权限状态将会更新。地皮的拥有者可以为不同的地皮单独设置权限。通过命令 `/plot perm` 即可浏览地皮权限，命令 `/plot set perm` 则可以设置地皮权限。

### Towny 地皮权限

插件共有四种权限类型的值，可以为个人地皮或城镇地皮设置（城镇拥有者可设置城镇权限，会影响到玩家未占领的城镇地皮）。基础命令为 `/resident set perm` 或 `/town set perm`，后接每个权限对应的标志。

玩家可通过 `/towny switches` 命令浏览服务器的切换方块。

也可以通过 `/towny itemuse` 命令浏览服务器的 `item_use` 物品。

拥有管理员权限的玩家可以测试权限，也可以通过命令 `/res toggle adminbypass` 伪装成正常玩家进行权限测试。再输入一次命令即可退出管理员绕过模式。这个模式下的玩家与地皮交互时不会有管理员权限介入（与 Towny 的其他地皮一样）。

### 权限类型

可用的四种权限类型分别为建筑（Build）、破坏（Destroy）、切换（Switch）以及使用物品（Itemuse）。

* “建筑”权限允许玩家在城镇/地皮中放置方块。
* “破坏”权限允许玩家在城镇/地皮中破坏方块，或者在某些情况下改变已有方块的状态（如调整红石中继器的延迟）。
* “切换”权限涵盖了如下方块的交互权限：
  * 箱子
  * 潜影盒
  * 陷阱箱
  * 熔炉
  * 高炉
  * 发射器
  * 漏斗
  * 投掷器
  * 唱片机
  * 切石机
  * 锻造台
  * 制箭台
  * 烟熏炉
  * 织布机
  * 砂轮
  * 堆肥桶
  * 制图台
  * 铃铛
  * 木桶
  * 炼药台
  * 拉杆
  * 压力板
  * 按钮
  * 木门
  * 栅栏门
  * 活板门
  * 矿车
  * 磁石
  * 重生锚
  * 标靶
  * ... 以及其他可以左右键点击交互的方块。
* “使用物品”权限则包含了使用如下物品的权限：
  * 矿车
  * 船
  * 末影珍珠
  * 烈焰弹
  * 紫颂果
  * 栓绳
  * ... 以及其他可以左右键点击使用的物品。
* “切换”及“物品使用”列表中的如下预设表示匹配特定的所有类型物品，你也可以自行修改：船、矿车、木门、压力板、栅栏门、活板门、潜影盒、按钮。
* 注意：诸如矿车与船的载具也可以被加入 `switch_ids`。如果你需要将其他可骑乘的生物（马、驴、骡、猪、炽足兽等）纳入交互限制范围内，可以考虑将鞍加进“切换”列表中。（不推荐这么做，这样可能会让玩家在他们没有“切换”权限的城镇中无法骑上他们带来的实体）

### 权限组

每种权限都有四个可以分配的权限组。

这四个权限组分别是：

* 朋友/居民
* 城镇/国家
* 盟友
* 外来者

它们会以这个顺序显示在 `/resident perm` 界面中。如果玩家是居民，那么“朋友”组别同时包含玩家好友列表中的好友和城镇的其他成员。

城镇展示顺序同样如此，但“朋友”变为“居民”（住在城镇中的玩家），“城镇”变为“国家”，表示国家内城镇的所有玩家。

城镇拥有者应该使用 `/t set perm resident xxx on/off` 命令，而不是 `/t set perm friend xxx on/off` 命令。

这里还有其他组：

* 盟友
  * 私有地皮中，这个权限组包含了国内以及盟国的玩家。
  * 城镇中，则是盟国的玩家。
* 外来者
  * 不属于你的城镇、国家或盟国的其他玩家。

[所有命令都可以在本维基的命令章节浏览。](../reference/commands.md)

### 游戏内通过命令设置权限

为城镇的公开或私有区域设置权限非常简单！插件提供了两种等级的城镇保护。首先是城镇方块，它们属于城镇而非其他玩家。当你从郊区或地皮进入这些区域，会提示“~ 未占领”。城镇拥有者可以通过 `/town set perm` 命令设置未占领地皮的权限。完整列表在“[命令](../reference/commands.md)”章节浏览，如下为一些示例：

* `/town set perm {on/off}` - 为所有权限类型和权限组切换所有权限开关状态。
* `/town set perm ally {on/off}` - 为所有城镇的盟友（所属国家的盟国）切换所有权限开关状态。
* `/town set perm resident build {on/off}` - 为所有参与了城镇建筑的玩家切换所有权限开关状态。

其次是私有的城镇地皮。居民可以通过命令 `/resident set perm` 命令设置未占领地皮的权限。完整列表可以在“[命令](../reference/commands.md)”章节浏览，如下为一些示例：

* `/resident set perm {on/off}` - 为所有权限类型和权限组切换所有权限开关状态。
* `/resident set perm friend {on/off}` - 为所有好友切换所有权限开关状态。
* `/resident set perm ally {on/off}` - 为城镇的所有盟友切换所有权限开关状态。包括所属国家的其他城镇和盟国的城镇。
* `/resident set perm outsider switch {on/off}` - 为所有外来者设置“切换”权限的开关状态。

最后，别忘记这些只是默认的权限设置，任何被占领的地皮都可以单独设置权限：

* `/plot set perm {on/of}` - 为所有权限类型和权限组切换所处地皮内的所有权限开关状态。
* `/plot set perm friend {on/off}` - 为所有好友切换所处地皮内所有权限开关状态。
* `/plot set perm ally {on/off}` - 为城镇的所有盟友切换所处地皮内所有权限开关状态。包括所属国家的其他城镇和盟国的城镇。
* `/plot set perm outsider switch {on/off}` - 为所有外来者设置所处地皮内“切换”权限的开关状态。

城镇拥有者可以通过这些命令切换城镇的保护状态：

* `/town toggle explosion`
* `/town toggle fire`
* `/town toggle pvp`
* `/town toggle mobs`

城镇拥有者和居民可以通过这些命令切换各自地皮的保护状态：

* `/plot toggle explosion`
* `/plot toggle fire`
* `/plot toggle pvp`
* `/plot toggle mobs`

爆炸与火焰的保护会被城镇拥有者的切换命令覆盖。之前输入的命令会改变 `/town` 或 `/res` 中的权限显示。它们也会改变任何先前设置的默认权限（城镇或玩家的地皮），但不会改变没有在 `/town` 或 `/res` 界面中显示默认值的地皮。城镇拥有者或居民可以通过如下命令修改所有地皮的权限，同样能影响到所有其他玩家或城镇的地皮。

* `/res set perm reset` - 将 `/res` 中的设置复制到命令执行者拥有的地皮中。
* `/town set perm reset` - 将 `/res` 中的设置复制到命令执行者管理的城镇中。
* 这些命令同样会影响 `/town toggle` 和 `/plot toggle` 的设置。

### 设置信任名单与地皮权限覆盖

在 Towny 0.97.1.0 之后，地皮与城镇新增信任名单，地皮可以用更精细的设置覆盖上一级的城镇设置。这些功能允许玩家让其他玩家在城镇与地皮中打工，免受好友/城镇/国家/盟友/外来者地皮组功能的影响。

城镇可以通过命令 `/town trust add {玩家名称}` 将玩家加入信任名单，通过命令 `/town trust remove {玩家名称}` 将玩家移出信任名单。受信任玩家在城镇中类似于市长，可以进行建筑/破坏/切换/使用物品等行为。

玩家可以通过命令 `/plot trust add|remove {玩家名称}` 将其他玩家加入或移出自己地皮的信任名单。受信任的玩家在地皮中与地皮拥有者的权限一样，可以进行建筑/破坏/切换/使用物品等行为。

地皮权限覆盖可以详细地自定义玩家使用地皮的权限。首先可以通过命令 `/plot perm add|remove {玩家名称}` 将其加入或移出地皮覆盖权限列表。地皮拥有者可以通过 `/plot perm gui` 界面浏览在这个名单中的玩家（以对应头颅显示），点击即可展开详细的建筑/破坏/切换/使用物品设置菜单，菜单中会有图标简单介绍它们的功能。处于名单中的玩家的权限单独生效，不受到其他地皮设置的影响。

在 Towny 0.98.5.0 之后，可以通过 `/t trusttown add {城镇名称}` 将整座城镇的居民都纳入信任名单。即，所有受信任城镇的玩家在对应城镇中拥有与拥有者同等的建筑/破坏/切换/使用物品权限。但应当小心使用这个功能，受信任的城镇同样会拥有完整的地皮权限。使用这条命令之前，插件会警告玩家确认操作。

在 Towny 0.100.2.0 之后，你可以选择城镇信任名单中的玩家是否允许使用私有地皮。[config.yml](../reference/configs/config-yml.md) 中的 `global_town_settings.do_trusted_players_get_full_perms_in_personally_owned_land` 负责管理这个功能。设置为 true 时，名单中的所有玩家都会获得公有与私有的地皮权限。反之，名单中的玩家只能获得公有地皮的权限，而无权与私有地皮交互。

### 插件额外保护

Towny Advanced 新增的内容是三种保护类型。即，防爆、防火和防活塞推动。在城镇层面，城市拥有者可以通过如下命令设置相关标志：

* `/town toggle explosion`
* `/town toggle fire`

防爆阻止所有类型的爆炸摧毁方块。包括 TNT、TNT 大炮以及苦力怕的爆炸。防火则阻止所有种类的火焰蔓延及产生。例如岩浆、雷击和打火石。防活塞推动则允许活塞在归属情况类似的地皮或郊区推拉方块。

自 0.95.0.0 版本起，引诱动物（通过食物吸引动物移动）做出了如下调整：城镇地皮与郊区中不阻止这类行为。而在私有地皮中，玩家必须能挖掘区域内的泥土才可以引诱动物。

自 0.95.1.0 版本起，村民被纳入了 `evil-doers` 的保护范围。

自 0.96.2.0 版本起，点燃下界传送门需要玩家能放置传送门方块。这意味着，可以允许玩家在未授予 `towny.wild` 权限的世界中建造下界传送门。连接至郊区所需的传送门建造权限节点为 `towny.wild.build.NETHER_PORTAL`。未给予郊区权限的服务器便无需再给予 `towny.wild.build.OBSIDIAN` 权限，否则玩家将能在郊区中随意放置黑曜石。

自 0.97.3.0 版本起，Towny 会在玩家复活时给予一段时间的 PVP 无敌。[config.yml](../reference/configs/config-yml.md) 中的 `global_town_settings.respawn_protection` 负责管理这个功能。

### Towny 如何控制玩家间 PVP

Towny 会控制玩家之间的 PVP，限制玩家受到伤害的来源，以及所在的区域。

地皮、城镇与世界都有各自的 PVP 设置，如下解释了它们的机制。

#### 世界 PVP 设置

世界的 PVP 设置可通过这些游戏命令调整。

> * `/townyworld toggle pvp`
>   * 这个命令可以开关全世界的 PVP 状态。如果你输入 `/tw`，显示内容中世界名称旁边会带上一个红色的 {PVP} 标签。禁用整个世界的 PVP 会阻止任何玩家间的打斗，包括竞技场内。
> * `/townyworld toggle forcepvp`
>   * 这个命令强制开关全世界的 PVP 状态。无视地皮或城镇的 PVP 设置。
>   * 仍然遵守友伤设置，
>   * 自 Towny 0.93.0.0 版本起，[config.yml](../reference/configs/config-yml.md) 中新增的 `global_town_settings.homeblocks_prevent_forcepvp` 可以防止这个命令影响城镇区域。
>   * 另外还有一种方式覆盖城镇的 PVP 设置。使用命令 `/ta town {城镇名称} toggle forcepvp` 可以覆盖城镇的设置，这个功能可以用来设置主城禁止 PVP。
> * `/townyworld toggle friendlyfire`
>   * 这个命令可以切换世界的友伤状态。默认情况下 Towny 会禁用同一城镇、国家、领地居民和盟国下属区域中玩家之间的友伤。

#### 城镇 PVP 设置

城镇的 PVP 设置可通过这些游戏命令调整。

> * `/town toggle pvp` - 切换整个城镇的 PVP 状态。

另外，管理员可以用命令 `/ta town {城镇名称} toggle forcepvp` 管理 AdminEnabledPVP 设置。

#### 地皮 PVP 设置

城镇的 PVP 设置可通过这些游戏命令调整。

> * `/plot toggle pvp` - 切换一块地皮的 PVP 状态。

### 领地模式

Towny 有一个称作领地模式的功能。模式可由玩家通过命令 `/res toggle {状态名称}` 切换，使得插件区别对待玩家，显示他们的信息或用于执行命令。

模式列表如下：

|模式名称|解释|
|---|---|
|`name`|城镇地块在游戏和数据库中的名称|
|`adminbypass`|管理员或拥有 `towny.admin` 权限的玩家专用，允许 Towny 将其视为普通玩家。测试普通玩家权限时很有用。|
|`bedspawn`|使得玩家重生点设置为床而不是城镇出生点。|
|`bordertitles`|决定玩家是否会在进入/离开城镇时收到标题消息。需要启用 config.yml 中的 `using_titles` 功能。|
|`ignoreotherchannles`|用于忽略你不使用的 TownyChat 频道。|
|`ignoreplots`|忽略区块提醒。|
|`infotool`|管理员专用，用于获取方块信息。启用时，管理员手持红砖点击方块时会显示方块名称等有用信息。|
|`map`|在玩家切换地皮时将地图显示在聊天栏中。|
|`plotgroup`|将你走过的地皮加入当前编辑的地皮组中。|
|`townborder`|显示粒子效果，标记所处城镇的边缘地块。|
|`spy`|管理员专用，查看 TownyChat 的所有频道。|
|`constantplotborder`|显示连续的粒子效果，标记所处城镇的边缘地块。|
|`plotborder`|持续一段时间显示粒子效果，标记所处城镇的边缘地块。|
|`townclaim`|尝试将郊区地皮占领为城镇地皮。|
|`townunclaim`|尝试将城镇地皮解除占领。|

### 城镇经济

如果不需要插件的经济功能，你可以在 [config.yml](../reference/configs/config-yml.md) 中将 `using_economy` 设置为 `false`，这样就会禁用税收与维护费用功能，扩张城镇或国家区域也不会收取任何费用。

配置的经济部分有一些价格相关设置。`new_expand` 下最基础的一些配置如下：

* price_new_nation：创建国家的费用。
* price_new_town：创建城镇的费用。
* price_claim_townblock：通过命令 `/t claim` 扩张城镇区域的单价。

#### 税收与维护费

税收与维护费是两个作用不同的缴费功能。[config.yml](../reference/configs/config-yml.md) 中必须将 `using_economy` 设置为 `true` 才可以使用这两个功能。税收与维护费会在每个“城镇日”或管理员使用命令 `/townyadmin newday` 时收取。一“城镇日”的长度可以在 `config.yml` 中的 `day_interval` 处设置，默认为 24 小时（1 天）。任何玩家都可以通过 `/towny time` 命令查询下一“城镇日”到来的时间。

[config.yml](../reference/configs/config-yml.md) 同样有一个 `daily_taxes` 功能，用于开关每日税收与维护费功能的收取。

##### 税收

每个居民都要向城镇缴纳税费，而每个城镇也要对国家缴纳税费。所有玩家都可以使用命令 `/res tax` 查询他们需要缴纳的税。

城镇拥有者可以通过如下命令设置税率。

> * `/town set taxes {$}`
>   * 填入的参数可以是数值（如 10）或百分比。
>     * 可通过命令 `/town toggle taxpercent` 从数值切换到百分比税率。
>       * 纯数值税率：
>         * 向所有居民征收固定额度的税费。默认设置的 10 表示每“城镇日”收取玩家 10 单位货币。
>         * 无力支付费用的玩家会被逐出城镇。
>         * 单次收取最大值可以在配置文件的 `economy.daily_taxes.max_town_tax_amount` 调整。
>       * 百分比税率：
>         * 向所有居民征收固定百分比的税费。如果玩家没有任何存款，则不需要支付税收，且不会因此被逐出城镇。
>         * 百分比模式下征收最大税额可通过命令 `/town set taxpercentcap {$}` 调整。
>         * 配置文件中的 `economy.daily_taxes.max_town_tax_percent` 设置可调整收取的百分比上限。
> * `/town set plottax {$}`
>   * 按城镇居民拥有的地皮数量向其征收税费。默认设置的 10 表示向该玩家收取每个地皮 10 单位货币的税费。
>   * 无力支付费用的玩家将会失去地皮。
>   * 单次收取最大值可以在配置文件的 `economy.daily_taxes.max_plot_tax_amount` 调整。

在 Towny 0.99.6.0 之后，城镇拥有者可以通过 `/plot toggle taxed` 命令为其他玩家的地皮设置免税。

国家领袖可以通过如下命令设置税率。

> * `/nation set taxes {$}`
>   * 填入的参数可以是数值（如 10）或百分比。
>     * 可通过命令 `/town toggle taxpercent` 从数值切换到百分比税率。
>     * 纯数值税率：
>       * 向所有城镇征收固定额度的税费。默认设置的 100 表示每“城镇日”从城镇金库中收取 100 单位货币。
>         * 无力支付费用的城镇会被逐出国家。
>         * 单次收取最大值可以在配置文件的 `economy.daily_taxes.max_town_tax_amount` 和 `economy.daily_taxes.max_nation_tax_amount` 处调整。
>       * 百分比税率：
>         * 向所有城镇征收固定百分比的税费。如果城镇没有任何存款，则不需要支付税收，且不会因此被逐出国家。
>         * 百分比模式下征收最大税额可通过命令 `/nation set taxpercentcap {$}` 调整。
>         * 配置文件中的 `economy.daily_taxes.max_nation_tax_percent` 和 `economy.daily_taxes.max_nation_tax_percent_amount` 设置可调整收取的百分比上限。
> * `/nation set conqueredtax {$}`
>  * 对“被征服”标签的城镇按日收取税费，战争中的败方城镇会带上此标签。
>    * 无力支付的城镇会被标记为“破产”状态（前提是启用了“破产”设置）。
>    * 国家的默认征服税可在 [config.yml](../reference/configs/config-yml.md) 中的 `nation.default_taxes.default_nation_conquered_tax` 和 `nation.default_taxes.max_nation_conquered_tax settings` 处设置。
        
管理员可以在 [config.yml](../reference/configs/config-yml.md) 中调整城镇的最高/最低税收。上述的 `max_town`/`nation`/`plot_tax_amount` 选项默认为 `1000`，而 `max_town_percent` 和 `max_nation_tax_percent` 默认值则为 `25%`。具体使用的设置取决于城镇采用的税收计算方式。`town.default_taxes.minimumtax` 限制城镇拥有者通过 `/t set taxes` 命令时的税收上限。而 `nation.default_taxes.minimumtax` 则限制国家领袖通过 `/n set taxes` 命令时的税收下限。除此之外，配置中还有对新国家或城镇的地皮税、外交税与商店税的默认设置。

###### 负税率城镇与国家的税收

在 Towny 0.99.6.0 之后的版本，可以为城镇或国家设置负值税收，这会导致城镇向居民支付税收，国家向城镇支付税收。

[config.yml](../reference/configs/config-yml.md) 中的 `economy.daily_taxes.allow_negative_town_tax` 决定城镇是否可以将税率设置为负。依此类推，`economy.daily_taxes.allow_negative_nation_tax` 决定国家是否可以将税率设置为负。

###### 土地拥有者的税收支付

Towny 的 0.78.0.0 早期版本允许你向玩家按拥有的地皮数量付钱。只需按如下步骤操作：

* 设置负值城镇维护费用，将 [config.yml](../reference/configs/config-yml.md) 中的 `use_plot_payments` 设置为 `true`。
* 新一天到来时，负值税收将会用于计算城镇维护费用并分给地皮拥有者。
* 这些费用由服务器产生，城镇不会承担任何费用的支付。

##### 维护费

维护费可单独在城镇或国家上设置。维护费从城镇或国家银行中收取，并在游戏中销毁。将其设置为负值表示每天向国家或城镇发放费用。维护费可以帮助管理员从世界中抹去长时间不活跃的城镇与国家，也有助于缓解服务器的通货膨胀。将维护费设置为负数会向城镇或国家的银行中增加存款。[config.yml](../reference/configs/config-yml.md) 中的维护费相关设置有如下两个：

* `price_nation_upkeep: 100.0`
  * 服务器对每个国家的每日收取费用。无力支付的国家会强制踢出所有成员并解散。
* `price_town_upkeep: 10.0`
  * 服务器对每个城镇的每日收取费用。无力支付的城镇会强制踢出所有成员并解散。

维护费可在 [config.yml](../reference/configs/config-yml.md) 中对不同规模的城镇分别设置。计算维护费会受 `town_level` 与 `nation_level` 的 `upkeep` 修饰符影响。默认情况下这两个设置的值通过 `resident-count`（居民数量）计算特出。其他选项则可通过 `plot-count`（地皮拥有量）计算。若你需要切换，将 [config.yml](../reference/configs/config-yml.md) 中的 `town_plotbased_upkeep` 设置为 `true` 即可。使用 `plotbased_upkeed` 时，你可以自行决定其上下限。详见[此处](#配置-town_level-与-nation_level)。

在 0.95.0.0 之后的版本，你可以在 `economy.daily_taxes.nation_pertown_upkeep` 设置中向国家按城镇数量收取维护费。以城镇总数代替国家等级（居民数），原本的计算公式为 $城镇玩家数 \times 国家维护费$。若 `economy.daily_taxes.nation_pertown_upkeep_affected_by_nation_level_modifier` 为 true，则国家等级维护费修饰符仍会生效。

在 0.95.0.0 之后的版本，你可以惩罚过度扩张的城镇。将 `price_town_overclaimed_upkeep_penalty_plotbased` 设置为 `true`，并在 `economy.daily_taxes.price_town_overclaimed_upkeep_penalty` 处填入数值，之后城镇每次收取维护费时都会按超出上限占领的地块数量收取附加费用。

在 0.97.3.0 之后的版本，可以通过 `economy.daily_taxes.nation_perplot_upkeep` 设置对国家按地皮数量收取维护费。这会以国家占领地块数代替 `nation_pertown_upkeep` 和国家等级（居民数量），计算公式为 $国家维护费 \times 国家城镇地块总量$。

管理员可以通过两种方式设置例外：

* 以 NPC 为城镇拥有者的撑着呢（`/ta set mayor 城镇名称 npc`）
* 管理员通过命令 `/ta town 城镇名称 toggle upkeep` 使得对应城镇豁免支付维护费。

#### 城镇与国家银行

城镇与国家都有各自的银行，任何居民都可以存钱，但只有城镇拥有者与国家领袖（及其助理）可以取钱。任何通过税收上缴的钱都会进入这里。当城镇需要钱扩张区域或设置前哨站时，银行会代为支付。因为城镇拥有者与国家领袖可以向各自的银行存钱，部分服务器的玩家会利用这点避免 PVP 死亡时损失金钱。若要防止此类现象，管理员可以采取如下措施：

* 通过 [config.yml](../reference/configs/config-yml.md) 中的 `town_bank_cap` 与 `nation_bank_cap` 设置，调整城镇/国家银行的存款上限。
* 通过命令 `/ta toggle withdraw` 防止城市拥有者与国家领袖从银行中取钱。

在 Towny 0.82.0.0 之后，上限数值变得严格，任何会使得已有存款超出上限数值的汇入操作都会被阻止。这个机制不会销毁超出部分的钱。

在 Towny 0.96.6.0 之后，银行历史命令可以打开城镇或国家的交易历史界面：

``` txt

  - /town bankhistory {页码}
  - /nation bankhistory {页码}
  - /ta town {城镇名称} bankhistory {页码}
  - /ta nation {国家名称} bankhistory {页码}

```

在 Towny 0.98.5.0 之后，新增了通过 `/t deposit {$} {城镇名称}` 命令向其他城镇银行存钱的功能。这需要服务器管理员在 `townyperms.yml` 文件中给予 `towny.command.town.deposit.othertown` 权限 ，默认情况下无此权限。

管理员可以通过命令 `/ta town {城镇名称} deposit|withdraw {$}` 和 `/ta nation {国家名称} deposit|withdraw {$}` 从国家或城镇银行中存/取款。

#### 城镇破产

在 Towny 0.96.3.0 之后，Towny 新增了“破产”状态。可以在 [config.yml](../reference/configs/config-yml.md) 中的 `economy.bankruptcy.enabled` 处启用。启用后，城镇或国家的银行存款可以因支付维护费而变为负数。

处于破产状态的城镇可以通过命令 `/t deposit {金额}` 向银行存钱，从而离开破产状态。

处于破产状态下的城镇有如下限制：

* 无法邀请新玩家。
* 无法开放城镇。
* 无法扩张区域。
* 无法在区域内进行建筑行为。

##### 债务限额

处于破产状态下的城镇能活多久全看管理员的设置，但默认情况下 Towny 会通过如下公式计算城镇的债务上限：

$城镇费用 + (城镇地块 - 1) \times 城镇地块占领单价 + 前哨站数量 \times ( 前哨站设置单价 - 城镇地块占领单价 )$

这个公式可以大致计算城镇的花销。债务上限可以在 `/town status` 界面中浏览。

有多种覆盖方式：

1. `economy.bankruptcy.debt_cap.maximum`：设置为大于 0.0 的值时，表示城镇的债务上限，若公式计算值大于这个值，则债务上限取此值。
2. `economy.bankruptcy.debt_cap.override`：设置为大于 0.0 的值时，这个设置会强制覆盖上述的两个设置，所有城镇共用一个债务上限值。
3. `economy.bankruptcy.debt_cap.debt_cap_uses_town_levels`：当为 true 时，`debt_cap.override` 的价格会乘以配置文件 `town_level` 部分的 `debtCapModifier` 值。（例如，当 `debtCapModifier` 为 3.0，`debt_cap.override` 为 1000.0 时，债务上限为 $3.0 \times 1000 = 3000$）。

在 Towny 0.99.3.0 之后，计算债务上限有了第二种方式：

* [config.yml](../reference/configs/config-yml.md) 中有一个 `debt_cap_uses_fixed_days` 设置，设置为 true 时会使得城镇债务上限为其维护费乘以 `economy.bankruptcy.debt_cap.allowed_days` 的值（默认七天）。
* 配合配置文件中 `delete_towns_that_reach_debt_cap` 的选项，无力支付债务的城镇可以在一定时间内被删除。
* 适合用在想要让破产城镇定时删除的服务器。原有系统中的大规模城镇在荒废后仍可以坚持一段时间。

##### 其他规则

`economy.bankruptcy.upkeep.delete_towns_that_reach_debt_cap` 设置为 true 时，到达债务上限的城镇会被立即删除。否则，破产状态下的城镇不会背负更多的债务。

`economy.bankruptcy.nation_tax.do_bankrupt_towns_pay_nation_tax` 设置为 true 时，城镇将会持续支出税收用，直到因破产而停摆。否则，处于破产状态的城镇不会支付国家税收，并主动离开国家。当服务器为“攻城战”或带有征服系统时，推荐保持为 true，否则被征服城镇就可以通过拒绝支付税收而离开国家。否则推荐保持为 false 状态，以防止其他国家利用废弃城镇获取税收。

`economy.bankruptcy.nation_tax.kick_towns_that_reach_debt_cap` 设置为 true 时，背负债务到达上限的城镇会因无力支付税收而被逐出国家。

### 废弃城镇

于 Towny 0.96.6.0 新增。废弃城镇是即将被删除的城镇状态。它可以在 [config.yml](../reference/configs/config-yml.md) 的城镇废弃部分开启。这个机制的大致原理是，若城镇因无力支付维护费或玩家手动输入删除命令，城镇便会进入废弃猪状态。在 `town_ruining.town_ruins.max_duration_hours` 设置填入的时长之后，城镇才会被彻底删除。

废弃城镇有如下特点：

* 城镇内的地块无法被其他城镇抢占（机制上这些地块仍被人拥有）。
* 城镇的管理权将会被转交给 NPC。
* 城镇将不会受到任何保护。
* 城镇居民不能使用大部分城镇命令，如 `/town`、`/plot` 和 `/town reclaim|list|leave` 之类的命令。

城镇废弃旨在防止城镇通过快速删除城镇再建立的方式逃避其国家的控制。这个功能原本是 Goosius 为他的 SiegeWar（攻城战）开发的。

在 Towny 0.99.1.0 之后，你可以让废弃城镇银行中的剩余存款上交至国库。这个功能默认禁用，但你可以在 [config.yml](../reference/configs/config-yml.md) 中的 `town_ruining.town_ruins.town_bank_is_sent_to_nation` 设置处启用。

在 Towny 0.100.2.0 之后，废弃城镇可以逐渐开放权限。这个功能可以在 [config.yml](../reference/configs/config-yml.md) 中的 `town_ruining.town_ruins.do_plots_permissions_change_to_allow_all` 处开启。设置为 `true` 时，处于废弃状态下的城镇每隔一小时就会放开建造、破坏、切换及物品切换权限。这会影响到新开辟的地块，一直蔓延到城镇内最初占领的地块，这个过程受到 `max_duration_hours` 设置的影响。当城镇的占领范围大到无法在设置给定的时间中完全取消，那么每个小时开放权限的地皮数量会变多。假设存在这样的城镇，如 500 块地块，最长时间为 72 小时，那么每小时则会按占领时间顺序开放 7 块地块。若城镇情况相反，即地块数量小于给定小时数，那么则会比正常情况慢得多。例如 36 块地块，最长时间为 72 小时，那么每两个小时才会按占领时间顺序开放一块地块。这个机制是为了让不同时间段的玩家都有机会搜刮废弃城镇的物资。

#### 收复失地

这个功能在 [config.yml](../reference/configs/config-yml.md) 中的 `town_ruining.town_ruins.reclaim_enabled` 设置处启用。启用后，任何城镇居民都可以使用 `/town reclaim` 命令竞选为新城镇拥有者。这个命令会收费，价格则在 `economy.new_expand.price_reclaim_ruined_town` 设置处决定，也可以通过命令 `/towny prices` 界面浏览。

这个功能只在城镇废弃一段时间后才可以使用，具体时长可以在 `town_ruining.town_ruins.min_duration_hours` 设置处调整。默认为 4 个小时。

### 城镇征服

城镇可以被其他插件征服。当城镇处于被征服状态时，无法主动退出征服其的国家。征服状态可以永续存在，也可以只持续几天。如果是后者的情况，每过一个城镇日（即每次收税后），陈真被征服状态的剩余时间就会减少一天。当征服状态持续时间变为零时，下一天城镇就会回到未征服状态，并可以输入命令 `/nation leave` 退出城镇。

当城镇处于被征服状态时，城镇需要向征服其的国家上缴税收（如果国家启用这个功能的话）。

其他插件通过 Towny API 也可以征服城镇。已知支持此功能的插件有 SiegeWar 和 EventWar。

在 Towny 0.101.2.0 之后，可以剥夺原住民的建造、破坏、切换以及使用物品权限，让新来的其他成员可以在领地中建筑。这个功能可以在 [config.yml](../reference/configs/config-yml.md) 的 `global_nation_settings.are_conquered_towns_given_nation_plot_perms` 处设置。设置为 false 时，被征服城镇居民将不再控制自己的地皮，征服国家的成员可以进入城镇随意建筑或破坏。

### 城镇战争

有许多支持 Towny 的战争附属，可以在[这里](https://townyadvanced.github.io/wars.html)详细浏览。

### 聊天栏

#### PlaceholderAPI 支持

维基的[这个章节](../reference/placeholders-papi.md)详细讲述了 Towny 提供的 PlaceholderAPI 变量。

#### Townychat.jar

若你需要在聊天栏或城镇/国家的聊天频道中嵌入 Towny 的变量，你必须下载安装 TownyChat.jar。

##### 搭配其他聊天插件使用

若要将 Towny 与其他插件搭配使用，你需要这么做：

* 前往 Towny 的 [ChatConfig](../reference/configs/chatconfig-yml.md).yml，找到 `modify_chat.enable:`，将其改为 false。
* 这可以让 channel.yml 中 GLOBAL 类型的聊天频道不会被 Towny 修改，让其他聊天插件能够修改聊天格式。

##### 单独使用

若不与其他插件搭配使用，你需要这么做：

* 前往 Towny 的 [ChatConfig](../reference/configs/chatconfig-yml.md).yml，找到 `modify_chat.enable:`，将其改为 true。
* 按下文修改聊天格式。

### Chatconfig.yml

Towny 聊天的第一个配置文件就是位于 `/plugins/towny/settings/` 文件夹的 ChatConfig.yml。

#### Towny 聊天格式

下文为可嵌入 Channel_format 中的内建变量。

``` txt
  {worldname} - 显示玩家所在的世界。
  
  {town} - 若玩家加入了某个城镇，则显示其所在城镇的名称。
  {townformatted} - 按 tag_format.town 的设置显示带格式的城镇名称（同样需要玩家加入了某个城镇）。
  {towntag} - 按 modify_chat.tag_format.town 的设置显示带格式的城镇标签 （同样需要玩家加入了某个城镇）。
  {towntagoverride} - （按 modify_chat.tag_format.town 格式）显示玩家所在城镇标签或其全名。
  
  {nation} - 若玩家加入了某个国家，则显示其所在的国家的名称。
  {nationformatted} - 按 tag_format.nation 的设置显示带格式的国家名称（同样需要玩家加入了某个国家）。
  {nationtag} - 按 modify_chat.tag_format.nation 的设置显示带格式的国家标签 （同样需要玩家加入了某个国家）。
  {nationtagoverride} - （按 modify_chat.tag_format.nation 格式）显示玩家所在国家标签或其全名。
   
  {townytag} - 按 modify_chat.tag_format.both 的设置，显示带格式的城镇/国家标签。
  {townyformatted} - 按 modify_chat.tag_format.both 的设置，显示城镇或国家的全名。
  {townytagoverride} - （按 modify_chat.tag_format.both 格式）显示玩家所在国家标签或其全名。
   
  {title} - 居民前缀
  {surname} - 居民后缀
  {townynameprefix} - townLevel/nationLevels 中设置的 Towny 名称前缀。
  {townynamepostfix} - townLevel/nationLevels 中设置的 Towny 名称后缀。
  {townyprefix} - 居民前缀，若无则返回 townynameprefix。
  {townypostfix} - 居民后缀，若无则返回 townynamepostfix。
   
  {townycolor} - 国家领袖/城镇拥有者/居民的名称颜色
  {group} - 读取自权限组插件的玩家组别名称
  {permprefix} - 权限组前缀
  {permsuffix} - 权限组后缀
  {permuserprefix} - 权限组玩家前缀
  {permusersuffix} - 权限组玩家后缀
   
  {playername} - 默认玩家名称
  {modplayername} - 修改后玩家名称（若 Towny 出现了覆盖其他插件修改玩家名称的情况，请使用这个变量）
  {msg} - 玩家发出的消息。

  {channelTag} - 在 Channels.yml 中设置。
  {msgcolour} - 在 Channels.yml 中设置。
```

* 默认防刷屏设置是 `spam_time: 0.5`。
* `channel_formats` 部分决定了聊天频道的格式。`tag_formats` 部分决定了标签的格式。
* `colour` 部分决定了 {townycolor} 返回的颜色。
* `modify_chat` 部分可以禁用 Towny 添加的所有聊天内容。
* 若你需要分世界的聊天频道，你可以将 `per_world` 设置为 true。

#### 聊天频道

聊天频道在 `/plugins/towny/settings/Channels.yml` 文件中配置。

Towny 默认有七个聊天频道，但管理员可以在 Channels.yml 中新增数量不限的聊天频道。

Channels.yml 能设置加入退出频道的命令。

* /g [聊天消息]
  * 在全局/公开频道里发消息，直接输入命令则表示进入频道。
* /l [聊天消息] 或 /lc [聊天消息]
  * 在本地频道里发消息，直接输入命令表示进入频道。
* /tc [聊天消息]
  * 在城镇内频道中发消息，直接输入命令表示进入频道。
* /nc [聊天消息]
  * 在国家内频道中发消息，直接输入命令表示进入频道。
* /ac [聊天消息]
  * 在国家与盟友圈频道中发消息，直接输入命令表示进入频道。
* /a [聊天消息] 或 /admin [聊天消息]
  * 在管理员频道中发消息，直接输入命令表示进入频道。
* /m [聊天消息] 或 /mod [聊天消息]
  * 在小管理频道中发消息，直接输入命令表示进入频道。

聊天频道各自的标签可以用在 ChatConfig.yml 的 {channelTag} 中。也可以设置每个频道所需的权限节点或聊天可见范围：

* -1 = 不设限制
* 0 = 仅限同一世界的玩家可见
* 任意正整数 = 同一世界内指定范围内的玩家可见

##### 自动进入频道

通过 GroupManager、PEX 或 bPermissions 的 info/option/meta 权限，可以在玩家加入服务器时自动进入某个频道。在配置同一部分新增 `towny_default_modes` 即可。可填入的值有 general（全局频道）、town（城镇频道）、nation（国家频道）、admin（管理员频道）、mod（小管理频道）或 local（本地频道）。

示例配置如下：

``` YAML
                groups:
                  Default:
                    default: true
                    permissions:
                    - general.spawn
                    inheritance: []
                    info:
                      prefix: ''
                      build: true
                      suffix: ''
                      towny_maxplots: 1
                      towny_default_modes: 'local'
                  Admins:
                    default: false
                    permissions:
                    - '*'
                    inheritance:
                    info:
                      prefix: ''
                      build: true
                      suffix: ''
                      towny_maxplots: -1  
                      towny_default_modes: 'admin'
```

### 城镇头衔与称号

国家领袖可以用如下命令修改居民的前后缀：

* `/nation set title {居民名称} {前缀内容}`
  * 设置指定玩家的前缀。
* `/nation set surname {居民名称} {后缀内容}`
  * 设置指定玩家的后缀。
* 授予城镇拥有者的前/后缀会覆盖配置文件中 townLevels 的显示内容，另外其名称颜色保持不变（默认为淡蓝色）。

城镇的拥有者可以通过如下两个命令改变居民的前后缀：

* `/town set title {玩家名称} {前缀内容}`
  * 改变玩家的前缀。
* `/town set surname {玩家名称} {后缀内容}`
  * 改变玩家的后缀。
* 授予城镇拥有者的前/后缀会覆盖配置文件中 townLevels 的显示内容，另外其名称颜色保持不变（默认为淡蓝色）。

如果你需要禁止前后缀中出现颜色字符，你需要将 [config.yml](../reference/configs/config-yml.md) 中的 `name_remove_regex` 从 `'[^\P{M}a-zA-Z0-9\&._\[\]-]'` 改为 `'[^\P{M}a-zA-Z0-9._\[\]-]'`，这样就可以防止玩家将 & 符号（通常用作字体颜色代码）输入前后缀中。

除此之外，你还可以保持不变，让城镇拥有者能通过权限节点使用颜色代码。不过这必须在 [config.yml](../reference/configs/config-yml.md) 的 `filters_colour_chat.modify_chat.does_adding_colour_codes_require_permission_node` 中启用。启用后，城镇拥有者或国家领袖为玩家设置带颜色的前后缀时就需要权限节点。国家领袖需要的权限为 `towny.command.nation.set.title.colours`，而城镇拥有者需要的权限则为 `towny.command.town.set.title.colours`。这些权限默认不会出现在 townyperms.yml 的设置中，必须手动为对应玩家添加。

#### 聊天频道窃听

管理员可以通过命令 `/towny spy` 或 `/res set mode spy` 窃听所有频道。任何拥有 `towny.chat.spy` 权限的玩家都可以使用窃听功能。

### 多世界支持

Towny 支持多世界。每个世界都有一个位于 `\plugins\towny\data\worlds\世界名称.txt` 的数据文件，它们的总列表则位于 `\towny\data\worlds.txt` 中。

#### World Toggles

Towny 可以在指定世界禁用。只需进入对应世界，输入命令 `/townyworld toggle usingtowny` 即可。除此之外，你还可以切换这些东西：

* usingtowny - 完全禁用插件的功能。
* claimable - 城镇拥有者是否可以在这个世界里占据领地。
* pvp - 是否允许玩家在这个世界里互相攻击。
* forcepvp - 切换友军伤害。
* explosion - 切换郊区的爆炸防护。
* forceexplosion - 切换城镇的爆炸防护。
* fire - 切换城镇的火焰蔓延保护。
* townmobs - 切换所有城镇的生物清理功能。被清理的生物列表可以在 [config.yml](../reference/configs/config-yml.md) 的 `town_mob_removal_entities` 中修改。
* worldmobs - 切换整个世界的生物清理功能。被清理的生物列表可以在 [config.yml](../reference/configs/config-yml.md) 的 `world_mob_removal_entities` 中修改。
* wildernessmobs - 切换世界内所有郊区的生物清理功能。被清理的生物列表可以在 [config.yml](../reference/configs/config-yml.md) 的 `wilderness_mob_removal_entities` 中修改。
* revertunclaim - 为世界切换 `revert-on-unclaim` 设置的状态。
* revertentityexpl - 为世界切换郊区内 `revert-on-explosion`（由实体造成）设置的状态。
* revertblockexpl - 为世界切换郊区内 `revert-on-explosion`（由方块造成）设置的状态。
* plotcleardelete - 是否允许玩家在自己地皮中使用 `/plot clear` 命令清空地皮。
* unclaimblockdelete {on|off} - 为世界切换 `blocks-on-unclaim` 设置的状态。
* warallowed - 是否允许发起战争。
* wildernessuse - 切换玩家在郊区建筑/破坏/切换/使用物品的权限。

### 权限节点

Towny 内置的权限插件为 TownyPerms。它可以在 `towny\settings\townypersm.yml` 中修改。权限节点会给予玩家的地位分配。

Towny 会为所有玩家基于他们的地位分配权限，**只要他们所在的世界启用了 Towny 插件**。

如果你打算创建一个没有占领区域的资源世界，而不想要（用 `/tw toggle usingtowny` 命令）关闭 Towny，只需（通过 `/tw toggle claimable` 命令）禁止玩家在这个世界占领区域即可。这可以确保玩家仍拥有插件分配的权限，而不能在这个世界里占领任何区域。

如果你想了解属于 TownyPerms 的权限列表，你可以浏览权限节点页面。

#### 配置 Townyperms.yml 以及等级

这个系统直接将权限推送给 Bukkit，并与其他权限插件兼容。这个功能允许你基于玩家地位（游民/居民/城镇拥有者/国家领袖）为其分配权限。你也可以基于其他分配的城镇/国家职位（助理/VIP 等）为玩家给予额外权限。这个文件也允许管理员更方便地管理不同等级玩家的权限。部分等级会视情况自动分配：

* 不属于城镇的玩家即为游民。
* 城镇中的玩家即为居民。
* 镇长即为城镇拥有者。
* 国王即为国家领袖。

部分等级由城镇拥有者或国家领袖授予，可以基于玩家已有的权限进行补充：

* 城镇拥有者可以将居民提升为城镇助理。
* 国家领袖可以将居民提升为国家助理。
* 城镇拥有者和国家领袖可以拥有管理员给予的等级，进一步提升自定义性。
  * 玩家从城镇拥有者或国家领袖处可以获得的等级数量不限。
  * 比如城镇建筑师、城镇银行家、国家银行家、城镇来宾等。

城镇居民可以通过 `/town ranklist` 命令查询他们的等级。城镇拥有者可以通过命令 `/towny rank {add|remove} {玩家名称} {等级名称}` 授予或剥夺玩家等级。国家领袖则可以通过命令 `/nation rank {add|remove} {玩家名称} {等级名称}` 授予或剥夺玩家等级。

在 Towny 0.97.1.0 之后，管理员可以通过命令 `/ta townyperms` 命令在游戏内编辑 townyperms.yml。详细内容请在游戏内输入命令 `/ta townyperms ?` 了解。

在 Towny 0.99.1.0 之后，管理员可以为城镇和国家等级设置优先级，使得拥有多个等级的玩家可以正常显示所需前缀。townyperms.yml 中的国家与城镇等级现在有两个新的特殊权限：

* towny.rankpriority.数字
* towny.rankprefix.前缀文本

例如，助理等级可以拥有这些权限：

* towny.rankpriority.100
* towny.rankprefix.&a&r

警长等级可以拥有这些权限：

* towny.rankpriority.500
* towny.rankprefix.&b&r

同时拥有这两个等级的玩家将会在变量中显示助理的前缀。

### 多语言

Towny 支持多语言。语言支持可以在 Crowdin 的 TownyAdvanced 项目页面中浏览。如果你没有找到你的语言，请在 Discord 发起工单或在 Github 中提交 issue。

Towny 默认跟随 Minecraft 客户端使用的语言，只要它的对应译文出现在 Crowdin 页面中，插件就会自动为玩家显示。玩家切换语言后，Towny 也会跟随切换显示的语言。

管理员可以在 [config.yml](../reference/configs/config-yml.md) 的 `language` 处设置默认语言。控制台显示的大部分消息会使用这个设置中的语言，如果玩家选择了没有译文的语言，那么他们显示的文本也将会是这个设置对应的语言。

服务器管理员有很多方法覆盖默认语言文件：

* `towny\settings\lang\override\` 默认只有一个文件，即 `global.yml`。这个文件可以填入任何 Towny 的显示文本并覆盖显示。非常适合用来修改 Towny 的消息前缀，或者状态界面的文本颜色。
* 将 `towny\settings\lang\reference\` 的文件移动到 `towny\settings\lang\override\`，方便管理员一次覆盖整个插件的文本。

注意：对 `towny\settings\lang\reference\` 的改动不会在游戏里显示。

在 Towny 0.99.6.0 之后的版本，整个帮助命令菜单（`/[插件命令] ?` 或 `/[插件命令] help`）现在也可以本地化！

### Towny 正则设置

Towny 通过 [config.yml](../reference/configs/config-yml.md) 的 regex_settings 控制字符使用情况。

默认设置如下：

``` YAML
  regex:
    name_filter_regex: '[\\\/]'
    name_check_regex: ^[\p{L}a-zA-Z0-9._\[\]-]*$
    string_check_regex: ^[a-zA-Z0-9 \s._\[\]\#\?\!\@\$\%\^\&\*\-\,\*\(\)\{\}]*$
    name_remove_regex: '[^\P{M}a-zA-Z0-9\&._\[\]-]'
```

允许（非英语）Unicode 字符出现。

有些服务器的经济插件不支持嵌入 Unicode 字符，或者有些服务器的操作系统不支持保存包含 Unicode 字符的文件。或者管理员不希望城镇或国家名称中出现 Unicode 字符。那么这些服务器可以参考如下示例配置：

``` YAML
  regex:
    name_filter_regex: '[\\\/]'
    name_check_regex: ^[a-zA-Z0-9._\[\]-]*$
    string_check_regex: ^[a-zA-Z0-9 \s._\[\]\#\?\!\@\$\%\^\&\*\-\,\*\(\)\{\}]*$
    name_remove_regex: '[^a-zA-Z0-9\&._\[\]-]'
```

自 Towny 0.97.2.0 起，插件会尝试自动重命名不符合正则表达式要求的城镇与国家。这可以解决操作系统读取到不受支持字符时的问题。重命名的城镇或国家会变成其他名称。

如果你需要禁止前后缀中出现颜色字符，你需要将 [config.yml](../reference/configs/config-yml.md) 中的 `name_remove_regex` 从 `'[^\P{M}a-zA-Z0-9\&._\[\]-]'` 修改为 `'[^\P{M}a-zA-Z0-9._\[\]-]'`，这样玩家就无法使用颜色代码，也不能在前后缀里插入彩色代码了。

### Towny 数据库

在 Towny 0.80.0.0 之后，管理员可选择使用 SQL 数据库而非文件存储。

#### 配置数据库

* 打开 \towny\settings\database.yml.
* 找到 sql: 部分。
* 填入 MySQL 数据库的地址、端口、用户名及密码。
* 在 flags 部分设置你想要的标志。
* 保存配置，接着往下读。

#### 将文件导入数据库

1. 关闭服务器。
2. 打开 settings\database.yml。
3. 找到 `database_load` 设置，确保其设置为 flatfile。
4. 找到 `database_save` 设置，将其设置为 mysql。
5. 保存配置，重启服务器。
6. 当服务器运行时：
  * 将 `database_load` 设置为 mysql。
  * 在游戏内输入 `/ta reload all` 命令。

7. 打开 Towny\Data\ 文件夹，移除除 plot-block-data 之外的所有文件夹。这个文件夹包含着 revert-on-unclaim 功能保存的所有地皮快照。若不需要这个功能，那么请直接删除整个文件夹。
8. 注意，Towny 不会备份数据库。这是你的工作。

#### 从数据库导出到文件

1. 关闭服务器。
2. 打开 \towny\settings\database.yml。
3. 找到 `database_load` 设置，确保其设置为 mysql。
4. 找到 `atabase_save` 设置，将其设置为 flatfile。
5. 保存配置，重启服务器。
6. 当服务器运行时：
  * 将 `database_load` 设置为 flatfile。
  * 在游戏内输入 `/ta reload all` 命令。


[^1]: 原文插入的视频暂时不在此显示。

[^2]: 原文链接指向不存在的页面。