# 开发者 API 用法

本页面介绍了一些 LuckPerms API（API 本身的介绍[在此](developers.api-introduction.md)）的用法。

除此之外，我们还有 [api-cookbook]。此为使用了 API 的示例 Bukkit 插件，用以执行一些基本操作。

## 目录

* [玩家权限组归属检查](#检查玩家是否处于某权限组)
* [玩家权限组归属查找](#查询权限组)
* [获取 LuckPerms `User` 对象](#获取-user-示例)
    * [在线与离线玩家的区别](#在线与离线玩家的区别)
    * [为玩家载入数据](#为玩家载入数据)
* [获取 `Group` 或 `Track` 对象](#获取权限组/路线实例)
* [保存变动](#保存变动)
* [`Node` 对象](#node-基础)
    * [创建新节点](#创建新的节点实例)
    * [修改已有节点](#修改现存节点)
* [读取玩家/权限组数据](#读取玩家权限组数据)
* [修改玩家/权限组数据](#修改玩家权限组数据)
* [上下文](#上下文基础)
    * [重要的类](#重要的类)
    * [注册 ContextCalculators](#注册-contextcalculators)
    * [查询活跃上下文/查询选项](#查询可用上下文查询设置)
* [CachedData](#cacheddata-基础)
    * [进行权限检查](#进行权限检查)
    * [获取前后缀](#返回前后缀)
    * [获取元数据](#返回元数据)
* [自定义元数据的存储与查询](#自定义元数据的查询与存储)
* [事件](#事件)
    * [事件监听器](#事件监听器)
    * [监听玩家缓存数据的变动](#监听玩家缓存数据的变动)
    * [监听权限/继承权限组等的变动](#监听权限继承权限组等的变动)

## 检查玩家是否处于某权限组

检查权限组归属可以通过 hasPermission 检查实现。

```Java
public static boolean isPlayerInGroup(Player player, String group) {
    return player.hasPermission("group." + group);
}
```

但是，需要注意的是，服务器 OP 或拥有 `*` 权限的玩家也会拥有这些权限。

## 查询权限组

我们可以用上述的方法在“可能”的权限组中找到玩家所处的组。

```Java
public static String getPlayerGroup(Player player, Collection<String> possibleGroups) {
    for (String group : possibleGroups) {
        if (player.hasPermission("group." + group)) {
            return group;
        }
    }
    return null;
}
```

记住，请先将你的 `possibleGroups` 按权重排序，“owner” 等组排前，“member” 等组靠后。

### 获取 User 示例

在 LuckPerms 中的 `User` 代表服务器上的一个玩家，以及与他们相关联的权限数据。

#### 在线与离线玩家的区别

为了减少内存占用，LuckPerms 只会在必要时载入玩家数据。

这意味着：

* **在线**玩家会与一个已载入的 User 对象相关联。
* **离线**玩家*可能*会与一个已载入的 User 对象相关联，但大部分情况下不会。

考虑到玩家是否在线的情况，这会让获取 User 实例的方法变得复杂。

#### 为玩家载入数据

##### 若玩家已在线

若玩家已经在线，那么 LuckPerms 已经在内存中准备好了它们的数据。

非常简单，就像这样...

```Java
Player player = ...;
User user = luckPerms.getPlayerAdapter(Player.class).getUser(player);
```

如果你只有 `UUID` 的话...

```Java
User user = luckPerms.getUserManager().getUser(uuid);
```

但是，请记住这个实例*不一定*能代表玩家最新的状态。若你想要对其做出改动，建议先发起刷新玩家数据的请求（下文提及...）。

##### 若玩家（可能）不在线

来假设我们想要载入一个玩家的数据 —— 但我们只有他们的 UUID.

我们要做的第一件事就是获得 `UserManager`。这个对象能够处理与 `User` 有关的事情。玩家管理提供了能够载入 `User` 实例的方法，名字叫 `loadUser`。

这个方法会返回一个 `CompletableFuture`（详见[此处](developers.api-introduction.md#使用-completablefutures)）

我们可以在这个异步对象上施加一个回调来应用操作。

```Java
UserManager userManager = luckPerms.getUserManager();
CompletableFuture<User> userFuture = userManager.loadUser(uniqueId);

userFuture.thenAcceptAsync(user -> {
    // Now we have a user which we can query.
    // ...
});
```

##### 若玩家不在线且我们想要返回某些东西

回调方法会在你不需要“返回”任何东西时正常工作。它会在服务器主线程之外执行所有讨厌的 I/O 工作，并在后台处理一切。

但如果我们*现在*需要数据怎么办？事情就开始变得有趣起来了。但不幸的是，没有明确答案 —— 但你还是有两种选择。

* 定义一个阻止方法，（可能）会很简单，但如果不是异步调用则会卡服
* 围绕 CompletableFutures 与回调进行相关操作

第一个选择的代码会像这样...

```Java
public User giveMeADamnUser(UUID uniqueId) {
    UserManager userManager = luckPerms.getUserManager();
    CompletableFuture<User> userFuture = userManager.loadUser(uniqueId);

    return userFuture.join(); // ouch! (block until the User is loaded)
}
```

之后你就可以对 user 实例进行处理 —— 但请记住，这只应从异步任务中调用！

另一个选择就是接受回调

在理想环境下，我们可以实现如下的代码而不需考虑任何后果。

```Java
public boolean isAdmin(UUID who) {
    User user = luckPerms.getUserManager().loadUser(who);

    Collection<Group> inheritedGroups = user.getInheritedGroups(user.getQueryOptions());
    return inheritedGroups.stream().anyMatch(g -> g.getName().equals("admin"));
}

public void informIfAdmin(CommandSender sender, UUID who) {
    if (isAdmin(who)) {
        sender.sendMessage("Yes! That player is an admin!");
    } else {
        sender.sendMessage("No, that player isn't an admin.");
    }
}
```

但是我们不能。因为 `#loadUser` 返回的是一个 CompletableFuture —— 它会浪费数据库查询队列来返回结构。

解决方法？异步往死里叠！

```Java
public CompletableFuture<Boolean> isAdmin(UUID who) {
    return luckPerms.getUserManager().loadUser(who)
        .thenApplyAsync(user -> {
            Collection<Group> inheritedGroups = user.getInheritedGroups(user.getQueryOptions());
            return inheritedGroups.stream().anyMatch(g -> g.getName().equals("admin"));
        });
}

public void informIfAdmin(CommandSender sender, UUID who) {
    isAdmin(who).thenAcceptAsync(result -> {
        if (result) {
            sender.sendMessage("Yes! That player is an admin!");
        } else {
            sender.sendMessage("No, that player isn't an admin.");
        }
    });
}
```

总结一下，我们有两种方法获取 user 对象。

* 使用 `UserManager#getUser` 或者 `PlayerAdapter#getUser`
    * 总是返回在线玩家的结果
    * “对主线程友好”（可异步调用）
    * 有些时候（但不总是）可以返回离线玩家的结果
* 使用 `UserManager#loadUser`
    * 返回异步对象
    * 可以用于回调，或用于仅异步调用的阻止方法
    * 对在线/离线玩家均适用

## 获取权限组/路线实例

获取 `Group` 或 `Track` 更加简单，因为它们一般会持续存在于内存中。

只需...

```Java
Group group = luckPerms.getGroupManager().getGroup(groupName);
if (group == null) {
    // group doesn't exist.
    return;
}

// now we have a group, and can apply whatever action we want.
group.doSomething(...);
```

通过 `TrackManager#getTrack` 方法，对 `Track` 对象进行的操作大致相同。

若你需要获取实时数据（做出改动时有必要），只需调用对应的 `loadGroup` 或 `loadTrack` 方法即可。

## 保存变动

在对玩家/权限组/路线做出改动以后，你需要保存变动至存储提供方。方法非常简单。

```Java
public void addPermission(User user, String permission) {
    // Add the permission
    user.data().add(Node.builder(permission).build());

    // Now we need to save changes.
    luckPerms.getUserManager().saveUser(user);
}
```

这还有一个非常方便的 `modify*` 方法，可以为你处理数据的载入与保存。

```Java
public void addPermission(UUID userUuid, String permission) {
    // Load, modify, then save
    luckPerms.getUserManager().modifyUser(userUuid, user -> {
        // Add the permission
        user.data().add(Node.builder(permission).build());
    });
}
```

对权限组或路线的方法也大致相同。

## `Node` 基础

`Node` 对象为 LuckPerms 的核心数据类。

简单来说，它表示了一个“权限节点”。但它封装的东西通常不只是权限分配。节点还能存储继承组、分配前后缀与元数据等相关数据。

将这些值的状态结合成一个对象（即一个节点）意味着一个持有者为了承担多种属性，只能有一种类型的数据集（一组节点）。

`Node` 实例提供了一系列的方法用于读取节点的数下，以及用于从这些设置中查询和提取额外状态与属性的方法。

节点有如下属性：

* key - 节点的键
* value - 节点的值（false 表示负状态）
* context - 节点生效的上下文
* expiry - 节点的失效时间

这里有一些节点类型，它们都是基本 `Node` 类的延伸。

    PermissionNode` - 表示分配的权限
    RegexPermissionNode` - 表示分配的正则权限
    InheritanceNode` - 标记持有者是否从其他组继承了数据
    PrefixNode` - 表示分配的前缀
    SuffixNode` - 表示分配的后缀
    MetaNode` - 表示分配的元数据
    WeightNode` - 表示持有节点的对象权重
    DisplayNameNode` - 表示持有节点的对象显示名称

### 创建新的节点实例

若要获取 `Node` 对象，你应该使用 `NodeBuilder`。

若你只有一个“键”且不确定它属于哪一类接地那，你可以直接使用 `Node.builder()`

```Java
// build any type of node
Node node = Node.builder("some.node.key").build();

// and with extra properties!
Node node = Node.builder("some.node.key")
        .value(false)
        .expiry(Duration.ofHours(1))
        .withContext(DefaultContextKeys.SERVER_KEY, "survival")
        .build();

// note: all of the following classes extend from Node

// build a permission node
PermissionNode node = PermissionNode.builder("my.permission").build();

// build a regex permission node
RegexPermissionNode node = RegexPermissionNode.builder(pattern).build();

// build an inheritance node
InheritanceNode node = InheritanceNode.builder(group).build();

// build a prefix node
PrefixNode node = PrefixNode.builder("[Some Prefix]", 100).build();

// build a suffix node
SuffixNode node = SuffixNode.builder("[Some Suffix]", 150).build();

// build a metadata node
MetaNode node = MetaNode.builder("some-key", "some-value").build();

// build a weight node
WeightNode node = WeightNode.builder(25).build();

// build a display name node
DisplayNameNode node = DisplayNameNode.builder("SeniorModerator").build();
```

## 修改现存节点

`Node` 对象是不可变的 —— 这表示它们不可以被修改。但是我们可以基于原本的节点再创建一个*新的*节点。

如，

```Java
Node negated = node.toBuilder().value(false).build();
```

## 读取玩家/权限组数据

`User` 和 `Group` 都继承自一个叫做 `PermissionHolder` 的父级实例。这个实例决定了大多数在玩家与权限组中共享的权限功能。

如上所述，大部分玩家/权限组持有的数据都包含在 `Node` 实例中。这就表示我们只需要考虑一些方法。但是，它们做的事情是完全不一样的！

最重要的是，下文的所有方法都会返回**不可变的集合**。你不能改变返回的连接内容。

### `.getNodes()`

方法签名为：
```Java
Collection<Node> getNodes()
```

* 方法会返回未扁平化（或称碎片化）的玩家/权限组集合。
* 距离集合起始位置（索引为 0）最近的条目优先级最高，处于末尾的则最低。
* 浏览内容**不**包含继承数据。

这是一个调用相对廉价且返回速度快的方法。

你可以使用 Stream API 来筛选你需要的数据。例如，如果你想要获取持有者继承的权限组列表，你可以这样写：

```Java
Set<String> groups = user.getNodes().stream()
    .filter(NodeType.INHERITANCE::matches)
    .map(NodeType.INHERITANCE::cast)
    .map(InheritanceNode::getGroupName)
    .collect(Collectors.toSet());
```

你也可以将这件事变得更简单，比如将节点类型以字段的方式传递！

```Java
Set<String> groups = user.getNodes(NodeType.INHERITANCE).stream()
    .map(InheritanceNode::getGroupName)
    .collect(Collectors.toSet());
```

甚至执行更复杂的操作，例如找到指定服务器中优先级最大的临时前缀。

```Java
int maxWeight = user.getNodes(NodeType.PREFIX).stream()
    .filter(Node::hasExpiry)
    .filter(n -> n.getContexts().getAnyValue(DefaultContextKeys.SERVER_KEY)
        .map(v -> v.equals("factions")).orElse(false))
    .mapToInt(ChatMetaNode::getPriority)
    .max()
    .orElse(0);
```

若你需要更详细的寻找或检查，请尝试使用其他方法（稍后讲到）来防止遍历整个节点。

### `.getDistinctNode()`

方法签名为：

```Java
SortedSet<Node> getDistinctNodes();
```

* 这个方法会返回一个 `#getNodes` 的排序后预览。若你不急着排序，使用 `#getNodes` 更快一些。
* 这些节点是根据“权重顺序”排列的。因为返回的类型是集合，因此重复的元素可能会丢失。
* 浏览内容**不**包含继承数据。

`QueryOptions` 字段封装了查询的相关设置。这部分会稍后讲到。若你不担心按上下文过滤的内容，只需使用 `QueryOptions.nonContextual()` 即可。

## 修改玩家/权限组数据

玩家/权限组子数据可以通过对持有者数据的 `Node` 添加与删除实现。这可以通过调用 `#data` 并在返回的 `NodeMap` 上调用方法实现。

这里是向指定玩家添加权限的示例：

```Java
DataMutateResult result = user.data().add(Node.builder("your.node.here").build());
```

不要忘了[保存](developers.api-usage.md#保存变动)你的改动！

## 上下文基础

上下文是 LuckPerms 的一个重要概念，在[这里](features.context.md)提及。它们在 API 通过几个重要的类封装。

非常基础的概述：

> **上下文**，基本来说就是**某条权限生效的要求**。    
> 一个简单的“上下文”包含了一个 `key`（键）和 `value`（值），以 `key=value` 的形式连缀。（希望）这会用一个例子表述得更加清楚。
> 
> 上下文可以被组合使用，称作“上下文组” —— 即一组上下文的键值对。
> 
> 上下文键是大小写敏感的，并会在所有实现中转化为小写。值也是大小写敏感的。上下文的键值不可以为 null 或空。键/值的长度若为零或只包含空格，则会被视作空。

### 重要的类

#### `ContextSet`

“上下文组”即为一组上下文。

内部来讲，一个上下文实际上就是 `Multimap<String, String>` 或 `<Map<String, Collection<String>>`，但重要的是，它**不**是 `Map<String, String>`。

键可以对应多个值。

`ContextSet` 示例定义了一系列方法，可以用于与上下文组的交互实现中。这些方法一般一看就懂 —— 但也在 JavaDocs 中有详细解释。

### `ImmutableContextSet`

一种 ContextSet 的*不可变*实现。你可以通过多种方式获得这样的一个实例。

```Java
ImmutableContextSet set1 = ImmutableContextSet.empty();  

ImmutableContextSet set2 = ImmutableContextSet.of("world", "world_nether");

ImmutableContextSet set3 = ImmutableContextSet.builder()  
    .add("world", "world_nether")
    .add("server", "survival")
    .build();

Map<String, String> map = new HashMap<>();
map.put("region", "something");

ImmutableContextSet.Builder builder = ImmutableContextSet.builder();
map.forEach(builder::add);

ImmutableContextSet set4 = builder.build();
```

你当然也可以通过首次创建（或获得）一个 `MutableContextSet` 并将其转化来获得该对象。

```Java
MutableContextSet set = MutableContextSet.create();
set.add("something", "something");

ImmutableContextSet immutableSet = set.immutableCopy();
```

### `MutableContextSet`

一种 ContextSet 的*可变*实现。你可以通过多种方式获得这样的一个实例。

```Java
MutableContextSet set1 = MutableContextSet.create();
set1.add("world", "text");

MutableContextSet set2 = MutableContextSet.of("world", "world_nether");

Map<String, String> map = new HashMap<>();
map.put("region", "something");

MutableContextSet set3 = MutableContextSet.create();
map.forEach(set3::add);

set3.removeAll("region");
```
若要编辑一个 `ImmutableContextSet`，你可以将其复制为“可变”对象。

```Java
ImmutableContextSet set = ImmutableContextSet.of("something", "something");

MutableContextSet mutableCopy = set.mutableCopy();
mutableCopy.add("something", "something-else");
```

### 注册 ContextCalculators

一个“操作对象”（大多数情况下就是玩家）是一个可以被施加上下文的对象。

换句话说，一个“操作对象”就是一个有着**活跃上下文组**的对象。一个 `ContextCalculator` 是一个决定了给定操作对象的“活跃”上下文的对象。

操作对象因平台不同而略有差异。

|平台|操作对象类型|
|---|---|
|Bukkit|`org.bukkit.entity.Player`|
|BungeeCord|`net.md_5.bungee.api.connection.ProxiedPlayer`|
|Sponge|`org.spongepowered.api.service.permission.Subject`|
|Fabric|`net.minecraft.server.network.ServerPlayerEntity`|
|Forge|`net.minecraft.server.level.ServerPlayer`|
|Nukkit|`cn.nukkit.Player`|
|Velocity|`com.velocitypowered.api.proxy.Player`|

若要提供你自己的上下文，你需要创建并注册一个 `ContextCalculator`。

例如，如果我想要为玩家的游戏模式提供上下文，从而让玩家只能在创造模式下设置权限，我按上文叙述的创建了一个计算器。
`estimatePotentialContexts` 方法可以被添加，但不是必要的，它一般用于在 TAB 补全中显示上下文输入建议。

```Java
public class CustomCalculator implements ContextCalculator<Player> {

    @Override  
    public void calculate(Player target, ContextConsumer contextConsumer) {
        contextConsumer.accept("gamemode", target.getGameMode().name());
    }
    
    @Override
    public ContextSet estimatePotentialContexts() {
        ImmutableContextSet.Builder builder = ImmutableContextSet.builder();
        for (GameMode gameMode : GameMode.values()) {
            builder.add("gamemode", gameMode.name().toLowerCase());
        }
        return builder.build();
    }   
}
```

然后再使用如下方法将其注册

```Java
luckPerms.getContextManager().registerCalculator(new CustomCalculator());
```

### 查询可用上下文/查询设置

你可以通过 `ContextManager` 查询操作对象的“活跃”上下文/搜索选项。
若你已经有了一个操作对象的实力，你可以直接使用这个。

```Java
Player player = ...;

ImmutableContextSet contextSet = luckPerms.getContextManager().getContext(player);
QueryOptions queryOptions = luckPerms.getContextManager().getQueryOptions(player);
```
若你只有一个 `User`，你还是可以进行查询操作，但是只会在操作对象（玩家）在线时返回结果。

```Java
Optional<ImmutableContextSet> contextSet = luckPerms.getContextManager().getContext(user);
Optional<QueryOptions> queryOptions = luckPerms.getContextManager().getQueryOptions(user);
```

如果你非常需要获得一个实例，你可以回到服务器的“静态”上下文/查询选项。（这些都是用无视传递的操作对象提供了上下文/查询选项的 calculators 形成的。）

```Java
User user = ...;

// This is the easy way...
ImmutableContextSet contextSet = user.getQueryOptions().context();
QueryOptions queryOptions = user.getQueryOptions();

// But is equivalent to this...
ContextManager cm = luckPerms.getContextManager();
ImmutableContextSet contextSet = cm.getContext(user).orElse(cm.getStaticContext());
QueryOptions queryOptions = cm.getQueryOptions(user).orElse(cm.getStaticQueryOptions());
```

## `CachedData` 基础

所有 `User` 和 `Groups` 都有一个附加在其身上的对象，称作 `CachedData`。这就是 LuckPerms 使用的缓存类名字，用于对所有权限持有者存储那些简单而可查询的数据。这个类提供的查找方法非常快速。若你正在做频繁的数据查询，非常推荐你在 `User` 和 `Group` 中使用 `CachedData` 提供的方法。

所有在 `CachedData` 中的方法都以 `QueryOptions` 索引，这就是 LuckPerms 内部处理所有查询的方式。

包含的数据可以分为两部分：`CachedPermissionData` 与 `CachedMetaData`。

    CachedPermissionData` 包含完全解析的玩家/权限组权限映射表，并允许你以与平台提供的 Player 类完全相同的方式进行权限检查。
    CachedMetaData` 包含了玩家/权限组的前缀、后缀与元数据信息。

### 获取 `CachedPermissionData` 与 `CachedMetaData`

你需要：

* 一个平台提供的 `Player` 实例
* 一个 LuckPerms 的 `User` 或 `Group` 示例 + 一些额外的 `QueryOptions`（获取方法见上文）

若你有一个 `Player` 平台实例（如 *org.bukkit.entity.player*），你可以使用 `PlayerAdapter` 来获取缓存数据。

```Java
Player player = ...;
PlayerAdapter<Player> adapter = luckperms.getPlayerAdapter(Player.class);

CachedPermissionData permissionData = adapter.getPermissionData(player);
CachedMetaData metaData = adapter.getMetaData(player);
```

若你已经有了一个 LuckPerms 的 `User` 或 `Group` 示例，你可以使用下列方法来获取缓存数据。

```Java
// Will attempt to use the most appropriate currect query options for the User
CachedPermissionData permissionData = user.getCachedData().getPermissionData();
CachedMetaData metaData = user.getCachedData().getMetaData();

// You can also manually specify which query options to use
CachedPermissionData permissionData = user.getCachedData().getPermissionData(queryOptions);
CachedMetaData metaData = user.getCachedData().getMetaData(queryOptions);
```

在你拥有了一个缓存数据实例之后，你就可以执行大量的不同查询操作了。

### 进行权限检查

```Java
// run a permission check!
Tristate checkResult = permissionData.checkPermission("some.permission.node");

// the same as what Player#hasPermission would return
boolean checkResultAsBoolean = checkResult.asBoolean();
```

我们可以把这些放在一起来创建一个能够在传递 `User` 和 `String`（权限）后执行一次“普通”权限检查方法。

```Java
public boolean hasPermission(User user, String permission) {
    return user.getCachedData().getPermissionData().checkPermission(permission).asBoolean();
}
```

### 返回前/后缀

```Java
String prefix = user.getCachedData().getMetaData().getPrefix();
String suffix = user.getCachedData().getMetaData().getSuffix();
```

### 返回元数据

```Java
String metaValue = user.getCachedData().getMetaData().getMetaValue("some-key");
```

相同的方法在 `Group` 上也能使用！

## 自定义元数据的查询与存储

由 LuckPerms 存储的元数据不只是几种类型。你可以使用 API 来简单地存储有关于玩家的任意类型数据，这也会利用 LP 内置的存储/缓存系统。

### 设置元数据

你可以通过向玩家创建&添加 `MetaNode` 来设置元数据。

为了表述这个，让我们先给玩家存储一个“level”元数据组。

```Java
public void setLevel(Player player, int level) {
    // obtain a User instance (by any means! see above for other ways)
    User user = luckPerms.getPlayerAdapter(Player.class).getUser(player);

    // create a new MetaNode holding the level value
    // of course, this can have context/expiry/etc too!
    MetaNode node = MetaNode.builder("level", Integer.toString(level)).build();

    // clear any existing meta nodes with the same key - we want to override
    user.data().clear(NodeType.META.predicate(mn -> mn.getMetaKey().equals("level")));
    // add the new node
    user.data().add(node);

    // save!
    luckPerms.getUserManager().saveUser(user);
}
```

### 查询元数据

在设置元数据后，查询就简单得多了！

```Java
public int getLevel(Player player) {
    // obtain CachedMetaData - the easiest way is via the PlayerAdapter
    // of course, you can get it via a User too if the player is offline.
    CachedMetaData metaData = luckPerms.getPlayerAdapter(Player.class).getMetaData(player);

    // query & parse the meta value
    return metaData.getMetaValue("level", Integer::parseInt).orElse(0);
}
```

## 事件

LuckPerms 使用它自己的事件系统，完全从平台的事件系统（如 Bukkit 或 Sponge）中分离出来。这表示你不能将监听器注册至服务器，而应直接注册至 LuckPerms。

LuckPerms 支持的事件被定义为继承自 [`LuckPermsEvent`](https://github.com/LuckPerms/LuckPerms/blob/master/api/src/main/java/net/luckperms/api/event/LuckPermsEvent.java) 的 `interface`。它们可以在 [`net.luckperms.api.event`](https://github.com/LuckPerms/LuckPerms/tree/master/api/src/main/java/net/luckperms/api/event) 包中找到。

### 事件监听器

若要监听事件，你需要先使用 `LuckPerms#getEventBus` 获取一个 [`EventBus`](https://github.com/LuckPerms/LuckPerms/blob/master/api/src/main/java/net/luckperms/api/event/EventBus.java) 实例，然后通过 `subscribe` 方法进行注册。

`subscribe` 方法能接受 `java.util.function.Consumer` 对象 —— 这允许监听器被定义为：

1. [表达 Lambda 表达式](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html#syntax)
2. [状态 Lambda 表达式](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html#syntax)
3. [方法参考](https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html)

为自己的监听器创建一个单独的类是个好点子。这里的示例类描述了如何订阅事件。

```Java
import net.luckperms.api.event.EventBus;
import net.luckperms.api.event.log.LogPublishEvent;
import net.luckperms.api.event.user.UserLoadEvent;
import net.luckperms.api.event.user.track.UserPromoteEvent;

public class MyListener {
    private final MyPlugin plugin;

    public MyListener(MyPlugin plugin, LuckPerms luckPerms) {
        this.plugin = plugin;

        EventBus eventBus = luckPerms.getEventBus();

        // 1. Subscribe to an event using an expression lambda
        eventBus.subscribe(this.plugin, LogPublishEvent.class, e -> /* ... */);

      	// 2. Subscribe to an event using a statement lambda
        eventBus.subscribe(this.plugin, UserLoadEvent.class, e -> {
            // ...
        });

        // 3. Subscribe to an event using a method reference
        eventBus.subscribe(this.plugin, UserPromoteEvent.class, this::onUserPromote);
    }

    private void onUserPromote(UserPromoteEvent event) {
        // ...
    }
}
```

若你的监听器相当简单，那么一个表达式或状态 Lambda 表达式是最好的。若你的监听器很复杂，那么方法参考可能会更易于组织。

### 监听玩家缓存数据的变动

若你有一个依赖于玩家缓存数据的系统（如前缀或权限状态），那么你可能有必要在插件中检测数据变动（无效化或更新缓存）时执行一些操作。实现这个功能最好且最简单的事件就是 [`UserDataRecalculateEvent`](https://github.com/LuckPerms/LuckPerms/blob/master/api/src/main/java/net/luckperms/api/event/user/UserDataRecalculateEvent.java)

这就是一个简单的事件，“只在玩家缓存数据更新时进行调用”。它不会显示任何有关刷新的原因 —— 只是让它发生！

### 监听权限/继承权限组/等的变动

从之前的[`所有玩家/权限组都以 `Node` 的形式存储`](#node-基础) 中讲到：

* [`NodeAddEvent`](https://github.com/LuckPerms/LuckPerms/blob/master/api/src/main/java/net/luckperms/api/event/node/NodeAddEvent.java) - 在节点添加至玩家/权限组后调用
* [`NodeRemoveEvent`](https://github.com/LuckPerms/LuckPerms/blob/master/api/src/main/java/net/luckperms/api/event/node/NodeRemoveEvent.java) - 在节点从玩家/权限组中移除后调用
* [`NodeClearEvent`](https://github.com/LuckPerms/LuckPerms/blob/master/api/src/main/java/net/luckperms/api/event/node/NodeClearEvent.java) - 在部分/全部节点从玩家/权限组中移除后调用

所有这些事件都是从决定了基础属性的 [`NodeMutateEvent`](https://github.com/LuckPerms/LuckPerms/blob/master/api/src/main/java/net/luckperms/api/event/node/NodeMutateEvent.java) 继承的。

这些事件涵盖了所有可能对 LuckPerms 玩家/权限组数据的改变。小技巧是先找到你想要的事件，然后再向下细分出你想要的改动类型。

例如，若要缓存加入*权限组*中的*前缀*，你可能需要监听 `NodeAddEvent`，之后检查 `e.isGroup() && e.getNode().getType() == NodeType.PREFIX`。当然，在这之后，你就可以使用 `((Group) e.getTarget())` 和 `((PrefixNode) node)` 来提取更多信息。

若要获取添加与移除事件，你既可以订阅更为宽泛的 `NodeMutateEvent`，也可以分别监听添加与移除事件。

这里是在 [API 食谱中的示例监听器](https://github.com/LuckPerms/api-cookbook/blob/master/src/main/java/me/lucko/lpcookbook/listener/PlayerNodeChangeListener.java)，很好地描述了上文所提及的实现。