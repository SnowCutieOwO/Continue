# 区域查询

WorldGuard 针对下列两种区域查询方法进行了优化：

* 找到所有包含指定位置的区域；
* 找到所有重叠指定区域的其他区域。

空间查询可通过 RegionManager 的实例执行，但它也可以通过特殊的查询缓存执行。这两种情况都会返回一个 `ApplicableRegionSet` 对象，这其中包含着符合条件的区域列表，也是区域标志计算的额外方法所返回的内容。

也可以给予一个区域李彪，来制作你自己的 `ApplicableRegionSet`。在你想要测试标志的值且已经有一个用于测试的区域列表时会很有用（甚至不需要测试区域是否重叠）。

## 获取 ApplicableRegionSet

### 通过队列缓存

队列缓存存储着上次一到两秒内查询的结果，这可以提升重复查询的效率，这是一个在事件处理中常见的情况。但是，查询缓存仅支持第一类查询，也就是位置查询。若要使用这些缓存，一个新的 `RegionQuery` 对象可以从 `RegionContainer` 获取（见“引自 Bukkit 的对象”章节来获悉如何转化 Bukkit 的位置）：
```Java
RegionQuery query = container.createQuery();
ApplicableRegionSet set = query.getApplicableRegions(loc);
```
::: info 示例：获取位于 (10, 64, 100) 的区域]
```Java
Location loc = new com.sk89q.worldedit.util.Location(world, 10, 64, 100); // 如上所述, 也可从 Bukkit 获取
RegionContainer container = WorldGuard.getInstance().getPlatform().getRegionContainer();
RegionQuery query = container.createQuery();
ApplicableRegionSet set = query.getApplicableRegions(loc);
```
:::

缓存的一个特征就是它会在区域功能未启用或区域数据载入失败时**返回虚拟结果**：

* 如果区域保护被禁用，那么它会返回 `PermissiveRegionSet` 对象，该对象不包含任何区域并允许任意操作；
* 如果区域数据载入失败，那么它会返回 `FailedLoadRegionSet` 对象，该对象不包含任何区域，且会将所有标志设置为 deny，也会为一些标志提供默认的值（例如 `deny-message` 会向玩家发送错误消息）。

在这两种情况中，`set.isVirtual()` 都会返回 `true`。

### 通过区域管理模块

取一个*区域管理模块（RegionManager）*，方法 `getApplicableRegions(Vector)` 可以用于执行点状位置查询（见“引自 Bukkit 的对象”章节来获悉如何转化 Bukkit 的位置）
```Java
BlockVector3 position = BlockVector3.at(20, 10, 4);
ApplicableRegionSet set = regions.getApplicableRegions(position);
```
::: info 示例：获取位于 (10, 64, 100) 的区域]
```Java
Location loc = new new com.sk89q.worldedit.util.Location(world, 10, 64, 100); // 如上所述, 也可从 Bukkit 获取
RegionContainer container = WorldGuard.getInstance().getPlatform().getRegionContainer();
RegionManager regions = container.get(world);
// 确保区域非空的检查
ApplicableRegionSet set = regions.getApplicableRegions(loc.toVector().toBlockPoint());
```

如果目标是找到一个重叠了其他区域的区域列表，那么需要在管理模块上使用方法 `getApplicableRegions(ProtectedRegion)`。因为区域的形状和区域实际上是相同的，需要使用虚拟命名。
```Java
BlockVector3 min = BlockVector3.at(0, 0, 0);
BlockVector3 max = BlockVector3.at(10, 10, 10);
ProtectedRegion test = new ProtectedCuboidRegion("dummy", min, max);
ApplicableRegionSet set = regions.getApplicableRegions(test);
```

### 手动构建

`RegionResultSet` 需要一个 `List<ProtectedRegion>` 和一个可选的全局区域。

所提供的区域不需要重叠。

```Java
List<ProtectedRegion> regions = Lists.newArrayList();
regions.add(spawn);
regions.add(mall);
regions.add(pub);

ApplicableRegionSet set = new RegionResultSet(regions, null); // 无全局区域的情况
```
::: warning
返回的区域列表可能会按照位置重新排序。在你将列表给予实例事件后，它不应再被使用。
:::

## 使用 ApplicableRegionSet

如果你对获取区域列表感兴趣的话，`ApplicableRegionSet` 包含 `Iterable<ProtectedRegion>`，所以你可以将这些内容枚举出来。但是，在区域间通过枚举检查可能会忽略一些设置，比如优先级、标志默认值、继承关系以及全局区域。我们还是比较建议通过本地的查询方法进行保护或标志检查，这些在[保护查询](worldguard-api.working-with-regions.querying-protection.md)和[标志计算](worldguard-api.working-with-regions.flag-calculation.md)章节中均有提及。

```Java
for (ProtectedRegion region : set) {
    // 对每个区域做一些不同的事情
}
```

::: info 示例：获取区域列表
```Java
List<ProtectedRegion> region = Lists.newArrayList(set);
```
:::