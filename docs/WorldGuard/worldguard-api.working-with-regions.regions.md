# 区域

每个区域对象都是 `ProtectedRegion` 的一个子类，这里一共有下列子类：

* `ProtectedCuboidRegion`
* `ProtectedPolygonalRegion`
* `GlobalProtectedRegion`

每个区域对象存储了：

* 区域的命名（不可修改）
* 区域的优先级
* 区域的（可选）父区域
* 成员列表
* 拥有者列表
* 标志列表
* 脏标志列表（译者注：见本章节末尾）

向量用于指代位置—这些向量对象来自于 WorldEdit（见“引自 Bukkit 的对象”章节来转化 Bukkit 的位置对象）

::: info 示例：修改区域的优先级
```Java
region.setPriority(100);
```
:::

::: info 示例：设置区域的父区域
```Java
mall.setParent(null); // 表示没有父区域
plot.setParent(mall);
```
如果你试图创建带有循环继承的区域，这会导致插件报错。
:::

::: info 示例：获取区域的平面顶点
```Java
if (region instanceof ProtectedPolygonalRegion) {
    ProtectedPolygonalRegion polygon = (ProtectedPolygonalRegion) region;
    List<BlockVector2> points = polygon.getPoints();
}
```
:::

## 领域

拥有者和成员（通过 `region.getOwners()` 和 `region.getMembers()` 获取）都是 `DefaultDomain` 的单独实例，它们都存储着玩家名称、玩家的 UUID 以及其所属的权限组。
::: info 示例：将一个成员添加至指定区域]
```Java
> DefaultDomain members = region.getMembers();
> members.addPlayer(UUID.fromString("0ea8eca3-dbf6-47cc-9d1a-c64551ca975c"));
> members.addGroup("admins");
```

::: warning
通过名称（而不是 UUID）指代玩家不应该被使用，因为名称是可以被更改的。离线模式也不建议使用，否则后果自负。领域中的使用名称而不是 UUID 的方法也已经被标注为弃用。
:::

::: info 示例：在后台将名称转化为 UUID
如果你需要将玩家名称转化为 UUID，你必须尽可能在后台进行这个操作，这样你就不会让游戏或服务器卡顿。    
你可以使用 WorldGuard 的 `DomainInputResolver` 类来帮助你。它集成了 `Callable<DefaultDomain>`，且会返回一个 `DefaultDomain` 对象，可以用于添加至已存在的领域。它会捕获成员管理命令中的参数。这会在下文详细描述。
```Java
// Google 的 Guava 库提供了有用的并发类.
// 下列执行器可在你的插件中重复使用.
ListeningExecutorService executor =
        MoreExecutors.listeningDecorator(Executors.newCachedThreadPool());

String[] input = new String[] { "sk89q", "g:admins" };
ProfileService profiles = WorldGuard.getInstance().getProfileService();
DomainInputResolver resolver = new DomainInputResolver(profiles, input);
resolver.setLocatorPolicy(UserLocatorPolicy.UUID_AND_NAME);
ListenableFuture<DefaultDomain> future = executor.submit(resolver);

// 通过 Guava 库制作的反馈
Futures.addCallback(future, new FutureCallback<DefaultDomain>() {
    @Override
   public void onSuccess(DefaultDomain result) {
        region.getOwners().addAll(result);
    }

    @Override
    public void onFailure(Throwable throwable) {
        // 处理错误的相关代码
    }
});
```
非常推荐在 UUID 搜索未完成的时候提醒相关的用户。
:::

## 标志

标志可以通过 `getFlag(Flag flag)` 方法获取。你可以在返回的 `Flags` 对象中找到 `Flags` 的设置，例如：
```
Flags.BUILD
Flags.PVP
Flags.LEAF_DECAY
Flags.LIGHTNING
```
返回值即为对应设置的数据类型。例如，如果你正要调用 `Flags.GREET_MESSAGE`，而它是一个 `StringFlag` 对象，那么该方法就会返回 `String`。
::: info 示例：获取欢迎消息]
```Java
String message = region.getFlag(Flags.GREET_MESSAGE);
player.sendMessage(message);
```
若指定区域未设置该标志，则返回值为 `null`。
:::

### 设置标志

标志可以通过方法 `setFlag(Flag flag, ? value)`。所设置的值必须与标志类型对应。例如，若标志类型为 `StringFlag`，则你只能设置一个 `String` 类型的标志：
```Java
region.setFlag(Flags.GREET_MESSAGE, "你好!");
```

标志可通过将值设置为 `null` 来清除设置。

区域组可以通过调用 `getRegionGroupFlag()` 方法对其对应的标志进行设置：
```Java
RegionGroupFlag flag = Flags.PVP.getRegionGroupFlag();
```

::: info 示例：设置区域组的 `use` 标志]
```Java
region.setFlag(Flags.USE, StateFlag.State.ALLOW);
region.setFlag(Flags.USE.getRegionGroupFlag(), RegionGroup.MEMBERS);
```
:::

### 自定义区域标志

在 6.2 版本，插件可以加入自定义的区域标志和选区处理。见“自定义标志和选区处理模块”章节来获得更多信息。

## 创建区域

`ProtectedRegion` 是一个抽象类，所以你必须使用它其中的一个子类。例如，你必须使用 `ProtectedCuboidRegion` 子类。

在每个例子中，必须提供一个区域命名。有效区域必须符合下列正则表达式 `^[A-Za-z0-9_,'\-\+/]{1,}`，也就是，区域命名只在包含大小写英文字母、数字、下划线、英文逗号、英文单引号、英文横杠、英文加号或正斜杠中的任意一种或多种字符时有效。区域命名是大小写敏感的。命名的有效性可以通过方法 `ProtectedRegion.isValidId(String)` 检查。

若要保存一个已创建的区域，请见“区域管理模块”章节。

### 长方体区域

若要创建一个新的长方体区域，需要指定该区域中的两个对角线上的端点。任意对角线上两端点均可接受。
```Java
BlockVector3 min = BlockVector3.at(-10, 5, -4);
BlockVector3 max = BlockVector3.at(5, -8, 10);
ProtectedRegion region = new ProtectedCuboidRegion("spawn", min, max);
```

### 平面多边形区域

只支持平面多边形。这些是垂直方向上无限拓展的区域，也就是从最小 Y 轴覆盖到最大 Y 轴的区域。至少需要三个点来创建一个有效的平面多边形区域。
```Java
List<BlockVector2> points = new ArrayList<>();
points.add(BlockVector2.at(3, 4));
points.add(BlockVector2.at(0, 0));
points.add(BlockVector2.at(19, 3));
int minY = 0;
int maxY = 54;
ProtectedRegion region = new ProtectedPolygonalRegion("spawn", points, minY, maxY);
```

### 全局区域

不需要将它与全局区域混淆，本章节提到的全局区域没有物理边界。也不包含任意一点。全局区域[i]需要[/i]用到 `GlobalProtectedRegion` 对象，但其他区域也可以调用该类（用户也可以在命令 `/rg define` 中使用 `-g` 参数创建区域）

这些区域通常用于创建继承用的模板区域。
```Java
ProtectedRegion region = new GlobalProtectedRegion("template");
```

## 区域查询

这里有一些方法在指定区域执行指定查询

::: tip
如果你对在所有区域中进行查询的操作感兴趣，请参考“[区域查询](worldguard-api.working-with-regions.querying-protection.md)”章节。
:::

### 测试点容器

`boolean contains(BlockVector3)` 可以用于测试一个区域中是否包含指定的点。

::: info 示例：查询包含位置 (20, 0, 30) 的区域]
```Java
region.contains(BlockVector3.at(20, 0, 30));
```
:::

### 查找重叠区域

方法 `getIntersectingRegions(Collection<ProtectedRegion>)` 的调用可以用于返回相互重叠的区域。这些区域[b]不一定[/b]是相互之间存在完全包含关系的。

::: info 示例：查找 spawn 区域附近重叠的区域]
```Java
List<ProtectedRegion> candidates = Lists.newArrayList();
candidates.add(mall);
candidates.add(hospital);

List<ProtectedRegion> overlapping = spawn.getIntersectingRegions(candidates);
```
:::

### 脏标志

每当对一个区域的修改完成以后，一个“脏”标志（不会和其他标志混在一起）就会被设置在该区域对象上。
这可以用方法 `isDirty()` 测试，且用于区域管理模块，用以获悉哪些区域需要进行保存操作。