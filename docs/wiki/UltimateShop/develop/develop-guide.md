# 开发教程

::: info

请注意，UltimateShop 并非传统的商店插件。它可以动态显示商店商品与价格（甚至细分到每种货币/物品的数量），这与其他一个 ItemStack 对应一个价格的商店插件有很大区别。

:::

## 导入为依赖

::: info

在 2026 年 3 月 20 日之后，最新的插件版本为 **4.3.4**。如果时间差距过大，你可能需要自行查询版本，此处所写的插件版本可能过时或不再可用。

:::

``` xml
<repositories>
    <repository>
        <id>repo-lanink-cn</id>
        <url>https://repo.lanink.cn/repository/maven-public/
</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>cn.superiormc.ultimateshop</groupId>
        <artifactId>plugin</artifactId>
        <version>在此填入插件版本</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

``` groovy
repositories {
    maven {
        url "https://repo.lanink.cn/repository/maven-public/"
    }
}

dependencies {
    compileOnly group: 'cn.superiormc.ultimateshop', name: 'plugin', version: '在此填入插件版本'
}
```

``` kts
repositories {
    maven("https://repo.lanink.cn/repository/maven-public/
")
}

dependencies {
    compileOnly("cn.superiormc.ultimateshop:plugin:在此填入插件版本")
}
```

## UltimateShop 开发者综合教程

本文档面向想要联动 UltimateShop 的开发者，不适合普通的服主浏览。

这里的内容基于 4.3.4 版本的源码，集中解释最常见的使用场景：

* 从插件依赖 UltimateShop
* 通过商店/交易物 ID 获取商店内物品
* 查询玩家交易量并预览价格
* 监听交易时间
* 触发批量出售
* 打开商店或通过插件触发快捷交易

下文的代码片段会自动省略无关部分，例如类包装器和部分基础的库导入，只保留与 UltimateShop 联动相关的代码。

### 1. 理解 UltimateShop 的展示内容


从源码看，最佳的外部切入点是这些：

* `cn.superiormc.ultimateshop.api.ShopHelper`
* `cn.superiormc.ultimateshop.api.ItemPreTransactionEvent`
* `cn.superiormc.ultimateshop.api.ItemFinishTransactionEvent`

除此之外，这有一些可以使用的公开类，但更多偏向内部方法：

* `cn.superiormc.ultimateshop.objects.ObjectShop`
* `cn.superiormc.ultimateshop.objects.buttons.ObjectItem`
* `cn.superiormc.ultimateshop.gui.inv.ShopGUI`
* `cn.superiormc.ultimateshop.methods.Product.BuyProductMethod`
* `cn.superiormc.ultimateshop.methods.Product.SellProductMethod`

使用它们的方式包括但不限于：

* 优先选用 `api` 包
* 通过 `object` 包调用只读的物品/商店条目
* 如果需要更直接的控制，知晓它们在更新时可能改变代码的风险，那么你可以使用 `gui`/`method`。

### 2. 在插件的 `plugin.yml` 中声明依赖

如果插件只在 UltimateShop 存在时产生联动功能，那么只需将其添加为软依赖：

``` YAML title=plugin.yml
softdepend:
  - UltimateShop
```

如果插件无法在没有 UltimateShop 的情况下正常加载，那么请将其设为硬依赖。

### 3. 运行时环境检查 UltimateShop 是否加载

``` Java
Plugin plugin = Bukkit.getPluginManager().getPlugin("UltimateShop");
if (plugin == null || !plugin.isEnabled()) {
    return;
}
```

如果联动逻辑只在 UltimateShop 存在时开展，这个方法可以在 `onEnable()` 时检查插件是否存在。

### 4. 最普通的切入点：通过 ID 获取物品

通过商店 ID 和交易物 ID 获取目标物品是最简单的：

``` Java
import cn.superiormc.ultimateshop.api.ShopHelper;
import cn.superiormc.ultimateshop.objects.buttons.ObjectItem;

ObjectItem item = ShopHelper.getItemFromID("blocks", "diamond_block");
if (item == null) {
    return;
}

String shopId = item.getShop();
String productId = item.getProduct();
String displayName = item.getDisplayName(player);
```

推荐这么做，因为它非常可靠。

对于 ObjectItem，常见的只读方法有：

* `getShop()`：对应的商店 I
* `getProduct()`：交易物 ID
* `getDisplayName(Player)`：显示名称
* `getBuyPrice()` / `getSellPrice()`：价格定义
* `getReward()`：物品定义
* `getPlayerBuyLimit(Player)` / `getPlayerSellLimit(Player)`：分玩家限制
* `getServerBuyLimit(Player)` / `getServerSellLimit(Player)`：全局限制

### 5. 查询玩家交易次数

如果你需要展示诸如“玩家还能买几次这个物品”的提示，那么你可以直接使用 `ShopHelper`。

``` Java
int buyTimes = ShopHelper.getBuyUseTimes(item, player);
int sellTimes = ShopHelper.getSellUseTimes(item, player);

int playerBuyLimit = item.getPlayerBuyLimit(player);
int playerSellLimit = item.getPlayerSellLimit(player);
```

例如：

``` Java
int used = ShopHelper.getBuyUseTimes(item, player);
int limit = item.getPlayerBuyLimit(player);

if (limit != -1) {
    int remain = Math.max(0, limit - used);
    player.sendMessage("你还能买 " + remain + " 次");
}
```

注意：

* `-1` 表示不限制
* `ShopHelper` 会在没有 use-times 缓存时自动创建。

### 6. 价格预览

如果你只需要展示“这组物品值多少钱”之类的内容，那么你可以使用 `ShopHelper` 中的预览方法。

``` Java
ItemStack[] items = new ItemStack[]{player.getInventory().getItemInMainHand()};
String buyPriceDisplay = ShopHelper.getBuyPricesDisplay(items, player, 3);
if (buyPriceDisplay != null) {
    player.sendMessage("购买 3 份的价格：" + buyPriceDisplay);
}
```

### 7. 预览出售所获

``` Java
ItemStack[] items = new ItemStack[]{player.getInventory().getItemInMainHand()};
String sellPriceDisplay = ShopHelper.getSellPricesDisplay(items, player, 1);
if (sellPriceDisplay != null) {
    player.sendMessage("出售获得：" + sellPriceDisplay);
}
```

如果你需要原本的结果，而非格式化后的内容：

``` Java
ItemStack[] items = new ItemStack[]{player.getInventory().getItemInMainHand()};
TakeResult buyCost = ShopHelper.getBuyPrices(items, player, 3);
GiveResult sellReward = ShopHelper.getSellPrices(items, player, 1);
```

这些内容适合用在展示、记录日志以及后续的检查代码中。

### 8. 监听交易事件

UltimateShop 提供了两种交易事件：

* `ItemPreTransactionEvent`
* `ItemFinishTransactionEvent`

#### 8.1 `ItemPreTransactionEvent`

这个事件会在实际交易完成前触发。适合用在这些场景：

* 统计数据
* 外部日志记录
* 网页对接推送
* 侧信道同步



示例：

``` Java
import cn.superiormc.ultimateshop.api.ItemPreTransactionEvent;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;

public final class ShopListener implements Listener {

    @EventHandler
    public void onPreTransaction(ItemPreTransactionEvent event) {
        String action = event.isBuyOrSell() ? "BUY" : "SELL";
        String shopId = event.getShop().getShopName();
        String productId = event.getItem().getProduct();
        int amount = event.getAmount();

        event.getPlayer().sendMessage(
                "将要执行 " + action + " -> " + shopId + ":" + productId + " x" + amount
        );
    }
}
```

这个事件还可以返回两个重要的对象：

* `getTakeResult()`：获取交易中收取的物品

* `getGiveResult()`：获取交易中给出的物品

通常解释：

* 购买时：`takeResult` 为玩家支付的内容，而 `giveResult` 则是玩家购买所得内容。
* 出售时：`takeResult` 为玩家交出的内容，而 `giveResult` 则是玩家出售所获内容。

### 8.2 `ItemFinishTransactionEvent`

这个事件会在交易完成后触发。适合用在这些场景：

* 交易成功数据统计
* 成就解锁
* 任务进度刷新
* 完成前提醒

``` Java
@EventHandler
public void onFinish(ItemFinishTransactionEvent event) {
    Player player = event.getPlayer();
    player.sendMessage("Transaction completed: " + event.getItem().getProduct());
}
```

## 9. 零散操作：`ShopHelper.sellAll`

如果需要插件触发 UltimateShop 内置的零散操作逻辑，只需这样：

``` Java
Map<AbstractSingleThing, BigDecimal> result =
        ShopHelper.sellAll(player, player.getInventory(), 1.0D);
```

第三个参数，即 `multiplier`，就是出售所获内容的倍率。

例如：

* `1.0D`：正常出售所获
* `2.0D`：双倍出售所获
* `0.5D`：半数出售所获

这个方法执行时交易已经完成。

这就是最大的误区。

内部上说，`sellAll(...)` 直接运行出售流程。这表示它会：

* 检查物品是否匹配
* 实际取走待售物
* 实际给予所获内容
* 触发出售动作

返回的 `Map<AbstractSingleThing, BigDecimal>` 是出售结果的总结，无需调用 `giveThing(...)` 方法。

错误用法：

``` Java
Map<AbstractSingleThing, BigDecimal> result = ShopHelper.sellAll(player, inv, 1.0D);
ShopHelper.giveThing(0, 0, player, 1.0D, result); // 这会复制所获内容
```

正确理解：

* `sellAll` 调用时交易已经完成
* 显示的值只用于展示、记录或参与统计


### 10. 手动给予/拿取

如果你已经获得了 `TakeResult` 或者 `GiveResult`，需要自己执行的话，你可以使用结果对象，或 `ShopHelper` 的帮助方法。

#### 给予

``` Java
TakeResult takeResult = ShopHelper.getBuyPrices(player.getInventory(), player, 1);
if (takeResult != null && takeResult.getResultBoolean()) {
    takeResult.take(0, 1, player.getInventory(), player);
}
```

#### 从 `Result` 映射表执行给予

``` Java
GiveResult giveResult = ShopHelper.getSellPrices(player.getInventory(), player, 1);
if (giveResult != null) {
    boolean success = ShopHelper.giveThing(0, 1, player, 1.0D, giveResult.getResultMap());
}
```

#### 从 `Result` 映射表执行拿取

``` Java
ShopHelper.takeThing(0, 1, player.getInventory(), player, takeResult.getResultMap());
```

这样的代码在构建自己的商业流程时更规范，无需重复 UltimateShop 已经执行过的交易操作。

### 11. 从插件打开商店

#### 方法甲：使用命令，兼容性佳

如果不想要使用内部的 GUI 类，最安全的方法就是使用内置的命令：

``` Java
Bukkit.dispatchCommand(Bukkit.getConsoleSender(), "ultimateshop menu blocks Steve");
```

基于当前的命令环境，其一般形式为：

* 玩家身份打开商店：`/shop menu <商店名称>`
* 控制台身份打开商店：`/shop menu <商店名称>`

这种方法的优点：

* 无需直接依赖内部类
* 若内部实现方法发生改变，可以保留最大程度的兼容性


#### 方法乙：直接调用 ShopGUI

如果你需要直接的内部路径，你可以这样做：

``` Java
import cn.superiormc.ultimateshop.api.ShopHelper;
import cn.superiormc.ultimateshop.gui.inv.ShopGUI;
import cn.superiormc.ultimateshop.objects.ObjectShop;
import cn.superiormc.ultimateshop.objects.buttons.ObjectItem;

ObjectItem item = ShopHelper.getItemFromID("blocks", "diamond_block");
if (item == null) {
    return;
}

ObjectShop shop = item.getShopObject();
ShopGUI.openGUI(player, shop, false, false);

Parameter meaning:

    first false: whether to bypass menu conditions

    second false: whether this should be treated as a reopen
```

注意：`ShopGUI` 不包含在 `api` 包中。这是内部类，可能会随版本变化发生较大改动。

### 12. 直接触发快速交易

如果你已经知道了商店和对应的交易物，你也可以调用内部的交易方法。

#### 快速购买

``` Java
import cn.superiormc.ultimateshop.methods.Product.BuyProductMethod;
import cn.superiormc.ultimateshop.methods.ProductTradeStatus;

ProductTradeStatus status = BuyProductMethod.startBuy(item, player, true, false, 3);
```

这些参数分别表示：

* `item`：目标出售物
* `player`：玩家名称
* `true`：是否强制显示失败消息
* `false`：是否跳过实际结算
* `3`：购买次数

#### 快速出售

``` Java
import cn.superiormc.ultimateshop.methods.Product.SellProductMethod;
import cn.superiormc.ultimateshop.methods.ProductTradeStatus;

ProductTradeStatus status = SellProductMethod.startSell(item, player, true, false, false, 3);
```

这些布尔值参数决定了：
* 是否强制显示失败消息
* 是否跳过实际结算
* 是否启用限售逻辑

如果你只是想要插件触发普通的交易操作，这就是最直接的触发方式。

不过，这还是内部的 API 用法，它会比 `api` 包更不稳定。

### 13. 示例：使用了剩余购买次数显示，包含外部 GUI 入口的代码

``` Java
ObjectItem item = ShopHelper.getItemFromID("blocks", "diamond_block");
if (item == null) {
    return;
}

int used = ShopHelper.getBuyUseTimes(item, player);
int limit = item.getPlayerBuyLimit(player);

if (limit != -1) {
    player.sendMessage("剩余购买次数: " + Math.max(0, limit - used));
}

ShopGUI.openGUI(player, item.getShopObject(), false, false);
```

这是一个很普通的示例：

* 你的 NPC 或菜单插件只提供入口
* 所有交易物逻辑、定价、限售/购仍然通过 UltimateShop 处理

这样可以让你尽可能复用 UltimateShop 的系统。

### 14. 了解 `TakeResult`、`GiveResult` 与 `AbstractSingleThing`

这三种类型是最易于理解的：

* `AbstractThings` 表示条目容器，如完整的 `products`、`buy-prices` 或 `sell-prices` 部分。
* `AbstractSingleThing` 表示容器内的单条目。
* `TakeResult`/`GiveResult` 表示单次交易最终选中的条目，以及计算的最终总量

简而言之：

* `AbstractThings` = 候选列表
* `AbstractSingleThing` = 其中一个候选分支
* `TakeResult`/`GiveResult` = 最终交易选中的分支

#### 14.1 什么是 `AbstractSingleThing`

`AbstractSingleThing` 是所有单条目的基础抽象类，定义位于 `AbstractSingleThing.java`。

概念上，它描述了每条可以被检查、计算、给予或拿取的条目。

当前实现中，常见子类有：

* `ObjectSingleProduct`：`products` 下的一个交易物条目
* `ObjectSinglePrice`：`buy-prices` 或 `sell-prices` 下的一个价格条目

最重要的字段与内容：

* `type`：单条目类型，参考配置文件
* `singleSection`：单条目的配置部分
* `applyCondition`：分支是否参与选择
* `requireCondition`：分支是否允许在选中后完成交易
* `giveAction`/`takeAction`：交易物被实际给予或拿取时触发的操作
* `things`：`AbstractThings` 的父容器

支持的 `ThingType` 不限于 `item`。检测逻辑全部位于 `AbstractSingleThing.java` 下：

* `HOOK_ITEM`
* `MATCH_ITEM`
* `CUSTOM`
* `HOOK_ECONOMY`
* `VANILLA_ECONOMY`
* `VANILLA_ITEM`
* `FREE`
* `RESERVE`

最重要的一点就是，`AbstractSingleThing` 并不只是“一个物品”，它是“一个最小交易单位”。

##### 14.1.1 开发者辨识单条目类型

UltimateShop 环境下，开发者无需手动声明 ThingType 的类型。它会参考你的配置文件。

检测顺序非常重要，因为它基本上就是“先到先得”。

基于这样的逻辑，规则为：

* 若同时存在 `hook-plugin` 和 `hook-item`，则为 `HOOK_ITEM`
* 若存在 `match-item` 且安装了 MythicChanger，则为 `MATCH_ITEM`
* 若存在 `match-placeholder` 且插件不为免费版本，则为 `CUSTOM`
* 若存在 `economy-plugin`，则为 `HOOK_ECONOMY`
* 若存在 `economy-type` 但没有 `economy-plugin`，则为 `VANILLA_ECONOMY`
* 若存在 `material` 或 `item`，则为 `VANILLA_ITEM`
* 若只存在 `amount` 样式的数字定义且无上述命中，则为 `RESERVE`
* 若都没有命中，则为 `FREE`

你可以通过下表快速匹配：

* `hook-plugin` + `hook-item` -> `HOOK_ITEM`
* `match-item` -> `MATCH_ITEM`
* `match-placeholder` -> `CUSTOM`
* `economy-plugin` -> `HOOK_ECONOMY`
* 只有 `economy-type` -> `VANILLA_ECONOMY`
* `material` 或 `item` -> `VANILLA_ITEM`
* 只有 `amount` -> `RESERVE`
* 无有效定义 -> `FREE`

部分常见示例：

这是一个 Vault 经济条目：

``` YAML
buy-prices:
  1:
    economy-plugin: Vault
    amount: 100
    placeholder: '{amount}$'
```

所以，为了检查它是否为 Vault 价格，你可以这样写：

``` Java
Map<AbstractSingleThing, BigDecimal> resultMap = takeResult.getResultMap();
for (AbstractSingleThing singleThing : resultMap.keySet()) {
   if (singleThing.getSingleSection().getString("economy-plugin", "").equals("Vault") {
       return "This price includes Vault";
   }
}
```

#### 14.2 `AbstractSingleThing` 在交易时的作用

它主要处理四项工作：

* 决定它是否参与交易
* 读取玩家所拥有的数量
* 检查玩家是否有足够的钱，或有足够的空间获取物品
* 返回真实的给予/拿取行为

关键方法为：

* `getApplyCondition(...)`：检查 `apply-conditions`
* `getRequireCondition(...)`：检查 `require-conditions`
* `playerHasAmount(...)`：检查拥有数量
* `playerHasEnough(...)`：检查是否足够支付/是否有货，决定拿取操作是否继续
* `playerCanGive(...)`：检查是否可以给予交易物

这也是它们差别明显的原因：

* `apply-conditions` 决定了选择哪个分支
* `require-conditions` 决定了选中的分支是否可以继续

#### 14.3 什么是 `TakeResult`

TakeResult 是“交易需要拿走什么”的返回对象，定义位于 `TakeResult.java`。

它最重要的内部结构为：

``` Java
Map<AbstractSingleThing, BigDecimal> resultMap
```

意即：

* 键：所选单条目
* 值：本次交易内此单条目最终计算数量/价格

键字段有：

* `resultBoolean`: 玩家是否拥有条目内声明的交易物 
* `conditionBoolean`：所有选定的单条目是否都已通过 `require-conditions` 的检查
* `empty`：结果是否为空

最重要的区别在于：

* `resultBoolean` 回答了“买不买得起/有没有货”的问题
* `conditionBoolean` 回答了“能不能买”的问题

`TakeResult.addResultMapElement(...)` 会在条目加入时检查它的 `require-conditions`。

实际执行位于 `take(...)`。

执行并不只是简单地“取走物品”。它有这样的逻辑：

* 对每个单条目调用 `playerHasEnough(..., true, cost)`
* 执行每个单条目的 `takeAction`

所以 `TakeResult` 最好可以理解为：

* 首先，“取走什么”
* 其次，“执行取走和其他的操作”

#### 14.4 什么是 `GiveResult`

GiveResult 是“交易需要给予什么”的返回对象，定义位于 `GiveResult.java`。

与 `TakeResult` 类似，它的存储结构是这样的：

``` Java
Map<AbstractSingleThing, BigDecimal> resultMap
```

意即：

* 键：所选单条目
* 值：本次交易内此单条目最终给予的内容

同时追踪：

* `conditionBoolean`
* `empty`

不过它没有 `resultBoolean` 字段。

这是因为“检查给予”的操作在返回对象创建时并没有确定。它会在稍后的 `give(...)` 方法中检查，这里会同时检测背包容量及物品数量

`give(...)` 的流程为：

* 遍历 `resultMap`
* 在每个 `AbstractSingleThing` 上调用 `playerCanGive(...)`
* 收集所有 `GiveItemStack` 对象
* 如果有任何条目无法给予，那么返回 `false`
* 如果所有条目都可正常给予，那么直接给予

所以，`GiveResult` 大概是这样的：

* 它描述了“应该给什么”
* 是否可以进入玩家背包只在 `give(...)` 阶段时才能知道

#### 14.5 交易流程

A buy flow can be understood like this:

购买流程可以这样理解：

* `ObjectPrices.take(...)` 负责计算价格并返回 `TakeResult`
* `ObjectProducts.give(...)` 负责计算回报并返回 `GiveResult`
* 交易逻辑检查 `TakeResult.getResultBoolean()`
* 之后检查 `TakeResult.getConditionBoolean()` 与 `GiveResult.getConditionBoolean()`
* 之后执行 `GiveResult.give(...)`
* 最后执行 `TakeResult.take(...)`

共享容器抽象化位于 `AbstractThings.java`，定义了如下内容：

* `give(...)` -> `GiveResult`
* `take(...)` -> `TakeResult`

最稳定的外部模型思路：

* `AbstractThings` 从预选列表中选出最合适的条目
* `AbstractSingleThing` 处理分支逻辑
* `TakeResult`/`GiveResult` 存储并执行最终的选中的条目

### 15. 挂钩管理：经济来源与物品来源

UltimateShop 通过 `HookManager` 经济来源与物品来源

内置的实现会在启动时自动注册，例如：

* 经济类：`Vault`、`PlayerPoints`、`CoinsEngine`、`UltraEconomy` 等
* 物品类：`ItemsAdder`、`Oraxen`、`MMOItems`、`EcoItems`、`Nexo`、`CraftEngine` 等

但 `HookManager` 也有公开的注册方法：

* `registerNewEconomyHook(...)`
* `registerNewItemHook(...)`

其他开发者可以为自己的插件注册自定义经济或物品来源。

#### 15.1 自定义经济挂钩

抽象基础类位于 `AbstractEconomyHook.java`

你需要实现的核心方法有：
* `getEconomy(Player, currencyID)`：读取余额
* `takeEconomy(Player, value, currencyID)`：取款
* `giveEconomy(Player, value, currencyID)`：存款

可选：

* `isEnabled()`：如果提供者未就绪，则返回 `false`

`currencyID` 字段来自 `economy-type`：

``` YAML
buy-prices:
  1:
    economy-plugin: MyEconomy
    economy-type: gems
    amount: 100
    placeholder: '{amount} 枚宝石'
```

依赖 Vault 的单经济挂钩通常会忽略 `currencyID`，而诸如 CoinsEngine 的多经济挂钩则会用于识别特定类型的货币。

最小示例：

``` Java
public final class MyEconomyHook extends AbstractEconomyHook {

    public MyEconomyHook() {
        super("MyEconomy");
    }

    @Override
    public double getEconomy(Player player, String currencyID) {
        return MyEconomyApi.balance(player.getUniqueId(), currencyID);
    }

    @Override
    public void takeEconomy(Player player, double value, String currencyID) {
        MyEconomyApi.withdraw(player.getUniqueId(), currencyID, value);
    }

    @Override
    public void giveEconomy(Player player, double value, String currencyID) {
        MyEconomyApi.deposit(player.getUniqueId(), currencyID, value);
    }
}
```

注册：

``` Java
HookManager.hookManager.registerNewEconomyHook("MyEconomy", new MyEconomyHook());
```

注意：

* 注册名必须与配置中的 `economy-plugin` 相符
* 如果你支持多经济，那么需要将 `economy-type` 视作 `currencyID`
* 默认的 `AbstractEconomyHook.checkEconomy(...)` 实现首先会检查余额，之后才会在需要的时候调用 `takeEconomy(...)`

#### 15.2 自定义物品挂钩

抽象基础类位于 `AbstractItemHook.java`

你需要实现的核心方法有：

* `getHookItemByID(Player, itemID)`：通过配置的 ID 构筑物品
* `getIDByItemStack(ItemStack)`：将物品反向解析入来源 ID

配置如下所示：

``` YAML
products:
  1:
    hook-plugin: MyItems
    hook-item: sword_of_flame
```

最小示例：

``` Java
public final class MyItemHook extends AbstractItemHook {

    public MyItemHook() {
        super("MyItems");
    }

    @Override
    public ItemStack getHookItemByID(Player player, String itemID) {
        ItemStack item = MyItemsApi.build(itemID);
        return item == null ? returnNullItem(itemID) : item;
    }

    @Override
    public String getIDByItemStack(ItemStack hookItem) {
        return MyItemsApi.findId(hookItem);
    }
}
```

注册：

``` Java
HookManager.hookManager.registerNewItemHook("MyItems", new MyItemHook());
```

提示：
* 注册名必须与配置中的 `hook-plugin` 相符
* 实际的 `hook-item` 格式完全通过挂钩定义
* 若 `getIDByItemStack(...)` 解析 ID 失败，UltimateShop 仍可以直接从 `hook-item` 配置构筑物品，但反向物品来源检测功能会失效

#### 15.3 优秀内置挂钩参考

如果你需要找些示例用用，这些内置的参考可以帮到你：

* 经济挂钩：
  * `EconomyVaultHook`：简单经济，基于 `services-manager`
  * `EconomyCoinsEngineHook`：多经济，需要用到 `currencyID`

* 物品挂钩：
  * `ItemItemsAdderHook`：`简单 ID` -> `ItemStack` 与 `ItemStack` -> `ID`
  * `ItemMMOItemsHook`：复合 ID 格式 `TYPE;;ID`

这些，就是 UltimateShop 的挂钩样式。