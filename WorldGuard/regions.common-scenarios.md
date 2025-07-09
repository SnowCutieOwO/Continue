# 常见场景

下面的情况可能是你会经常遇见的。其中的某些问题已经在其他章节里详细叙述了。

[[toc]]

::: tip
请确保阅读“常见问题”章节来获取更多问题的解决办法。
:::

## 综合

### 如何允许门、拉杆等方块的使用？

如果你想要所有人都能使用门、拉杆、按钮和压力板等红石元件，你可以设置 `use` 标志：
```
/rg flag 区域名称 use allow
```
如果你想要这个标志对**所有**区域都生效，那么你就需要对全局区域设置：
```
/rg flag __global__ use allow
```

### 如何允许玩家骑乘马和矿车？

如果你想要所有玩家都可以使用任意种类的坐骑，你可以设置 `ride` 标志：
```
/rg flag 区域名称 ride allow
```
如果你想要这个标志对**所有**区域都生效，那么你就需要对全局区域设置：
```
/rg flag __global__ ride allow
```

::: warning
这会允许玩家骑乘其他区域中的实体！仅在你需要这么做的时候使用，否则会出现玩家盗窃这些实体的问题。
:::

### 如何阻止在荒野区域建筑？

就像在“全局区域”章节讲到的那样，你可以将 `passthrough` 标志设置为 `deny`：
```
/rg flag __global__ passthrough deny
```
但是**不要**设置 `build` 标志。

### 如何只对非玩家成员设置禁止离开区域的标志？

因为非成员为 `entry` 和 `exit` 的默认设置，你无需设置区域组：

```
/rg addmember example_region sk89q
/rg flag example_region exit deny
```

### 如何让玩家从某个位置离开一个设置了 exit=deny 的区域？

创建两个区域：

* 一个区域设置标志 `exit=deny`；
* 另一个区域圈定拒绝区域的边界，比刚才的区域在你要允许玩家离开的方向略大一些。将这个区域设置一个 `exit-overide=true` 的标志。

### 如何解除所有附魔台的保护？

在配置文件中，修改 `interaction-whitelist` 设置项，并将附魔台方块添加到其中。可从 Bukkit 的材料页面找到你所需要的物品/方块名称。

### 如何允许挖掘方块但阻止方块放置？

将 `block-break` 设置为 `allow`：
```
/rg flag mining_area block-break allow
```

### 如何允许玩家阅读讲台上的书但阻止他们取书？

首先，确保你正在使用 7.0.1 或更高版本的 WorldGuard。早于 1.14 的版本（讲台还未出现）不支持。
* 将 `use` 标志设置为 `allow`：`/rg flag <区域名称use allow`

### 如何只允许玩家破坏指定种类的方块？

这个功能目前尚不支持按区域限制，你只能通过世界限制，在“[黑名单](blacklist.md)”和“[建筑权限](permissions.build-permissions.md)”章节都有讲到。

## 地皮设置

### 如何创建一个带地皮的预设？

如果你想要创建地皮，你需要利用“优先级与继承”章节所讲到的区域继承功能。这里有你需要创建的两个区域，然后是地皮区域本身。

你将会需要下列区域：
* 外部区域（`mall`）；
* 可选的“模板”区域，允许地皮区域继承其标志（`shop_template`）；
* 数量不限的地皮区域。

创建大厅区域：
```
/rg define mall
```

创建地皮模板区域。需要注意的是，我们会使用 `-g` 这个参数将这个区域设置为没有物理边界的状态，因为我们不需要使用这个区域来保护任何东西。
```
/rg define shop_template -g
```

创建一些地皮：
```
/rg define shop1
/rg define shop2
/rg define shop3
```

现在，你就需要为它们设置父区域：
```
/rg setparent shop_template mall
/rg setparent shop1 shop_template
/rg setparent shop2 shop_template
/rg setparent shop3 shop_template
```

::: tip
一个等价的做法是将大厅区域的优先级设置得低一些（`/rg setpriority mall -1`）
:::

### 如何阻止大厅区域的门等方块的使用？

这里的目标是：

* 通过命令将 `use` 标志设置为 `deny`：`/rg flag mall use deny`；
* 因为阻止使用对地皮也生效，所以我们需要在地皮区域内修改 `use` 标签；
* 又因为我们已经创建了临时区域，所以这会变得很简单：`/rg flag shop_template use allow`。

因为区域的继承关系，地皮区域将会继承模板区域的 `use` 标志，这会覆盖大厅区域的 `use` 标志。

## 问题

### 为什么活塞不工作？

你是否设置了 `build` 标志？你**不应该**那么做。请确保已经取消设置：
```
/rg flag __global__ build
```

* 若要阻止玩家的建筑行为，你无需进行任何设置！默认情况下，一个区域产生后就会被保护。
* 如果你要阻止荒野区域内的建造行为，你可以将 `passthrough` 标志设置为 `deny`：
```
/rg flag __global__ passthrough deny
```

::: warning
在这种情况下，插件无法阻止区域边界之间活塞推动导致的方块改变。漏洞追踪器已出现该问题的相关报告，即 #3234。
:::