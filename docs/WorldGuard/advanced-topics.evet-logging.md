# 事件记录

## 事件过滤

Bukkit 通过“事件”提醒插件在游戏中发生的特定事件。这里有许多，许多的事件，例如：

* 装满桶；
* 倒空桶；
* 玩家右键点击实体；
* 玩家右键放置方块；
* 玩家挖掘方块；
* 实体替换方块；
* 活塞臂伸出；
* 活塞臂收回。

大体上，这些事件都与 Minecraft 中的三大基本元素有关：

* 物品
* 方块
* 实体

你可以用这些对象做特定的事情：

* 放置
* 破坏
* 交互
* 攻击

为了简化它们，WorldGuard 过滤了原本的 Bukkit 事件，将它们分成了更基本的几组事件：

* 装满桶 → 与方块交互、与物品交互
* 倒空桶 → 与方块交互、与物品交互
* 玩家右键点击实体 → 与实体交互
* 玩家右键放置方块 → 与方块交互
* 玩家挖掘方块 → 与方块交互
* 实体替换方块 → 与方块交互
* 活塞臂伸出 → 与方块交互
* 活塞臂收回 → 与方块交互

WorldGuard 的部分，例如区域保护，只需要处理“与方块交互”、“与实体交互”一类的事件，并以此决定一个方块或实体是否能被放置、破坏或与之交互。

## 追踪原因

另一个决定事件是否被允许的重要原因是，我们需要指出是*谁*干的。

但有时候，一些简介因素会让溯源变得困难。例如，如果玩家对着另一个玩家射箭，间接原因—也就是箭—不是真正的原因；玩家才是。另一个例子是，通过砂砾等下落放置的方块：方块最终落在地上的原因一般是（1）落沙实体，或者是（2）原本的砂砾方块，又或者是最终的（3）玩家本身。

需要牢记的是，原因可能是玩家，也可以是方块（活塞）或实体（末影人或苦力怕）。

有些时候我们不总是能追踪事件的真正原因。但 WorldGuard 必须处理不可追踪的事件链。

## 显示内部事件

这里只有一些用于筛选 Bukkit 内部事件的过滤器。你可以在服务器日志中找到这些事件，它们会被记录于此。这也能帮你：

* 找出触发黑名单中事件的特定操作；
* 查看 WorldGuard 是否完全处理某事件；
* 辅助 WorldGuard 的开发，了解其如何处理特定事件。

若要使用该模式，需要在启动命令中添加参数 `-Dworldguard.debug.listener=true`。

::: tip
该功能最好在私人的测试用服务器上使用，如果在玩家较多的服务器上使用，后台可能会被日志刷屏。
:::

::: info 示例
假设你的开服脚本是这样的：
```Batch
@echo off
java -Xmx4096M -Xms4096M -jar server.jar nogui
pause
```
你可以按如下格式将参数 `-Dworldguard.debug.listener=true` 加进去：
```Batch
@echo off
java -Xmx4096M -Xms4096M -Dworldguard.debug.listener=true -jar server.jar nogui
pause
```
参数可以在“java.exe”后，“-jar”参数前的任意位置添加。在本示例中，该参数被放在了 -jar 前。
:::

## 解释输出

以上文所述的将砂砾放置在保护区域上方为例子。你可以看见，在你的服务器日志或控制台中，会有下列输出：
```
* USE   GRAVEL         [Player{sk89q}] @world :BlockPlaceEvent
* PLACE GRAVEL @0,99,0 [Player{sk89q}] :BlockPlaceEvent
* SPAWN FALLING_BLOCK  [Block{0,99,0}] @-0,99,0 :EntityChangeBlockEvent
* PLACE GRAVEL @       [Block{0,99,0} | FallingSand] :EntityChangeBlockEvent [CANCELLED]
* SPAWN DROPPED_ITEM   [Block{0,99,0} | FallingSand] @-0,0,0 :EntityChangeBlockEvent
```
::: tip
上文中的输出因解释需要而做了精简化处理。
:::

每一行的大致格式是这样的：
```
事件名称 种类/位置 [原因] @位置 :BUKKIT-EVENT [是否取消?]
```
一个被取消的事件就是被阻止的事件。

### 追踪砂砾放置

首先，当砂砾方块被使用的时候，它会发送一个方块使用事件：
```
* USE   GRAVEL         [Player{sk89q}] @world :BlockPlaceEvent
```
原因，当然就是玩家本身。如果该事件（因黑名单或 WorldGuard 的其他功能而）未被取消，那么它会进入下一步：
```
* PLACE GRAVEL @0,99,0 [Player{sk89q}] :BlockPlaceEvent
```
因为砂砾方块是在空中被放置的，它一定会掉落。坠落的方块会变成实体（就和骷髅或者挂画一样），所以这个事件的结果就是实体生成，原因则是放置方块。需要注意的是，WorldGuard 不会尝试追踪谁放置了这块砂砾。
```
* SPAWN FALLING_BLOCK  [Block{0,99,0}] @-0,99,0 :EntityChangeBlockEvent
```
如你所见，砂砾放置的事件被阻止了。这是因为砂砾掉落在了一个受保护的区域内，且这块砂砾来自区域外部。又因 WorldGuard 不希望让玩家在生存的时候因此损失物品，它会尝试生成一个物品，这会返回一个事件：
```
* SPAWN DROPPED_ITEM   [Block{0,99,0} | FallingSand] @-0,0,0 :EntityChangeBlockEvent
```
你可以看见的是，原因仍然追溯回到了一开始放置方块的事件。因为物品掉落的标志对非成员（原本的砂砾方块就是一个非成员，因为它来自区域外）在这个区域内是禁用的，物品事件不会被取消，于是砂砾就会变成物品形式掉落在地上。
