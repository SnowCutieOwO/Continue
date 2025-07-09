# 区域管理模块

## 区域容器（Region Container）

区域数据可从 `RegionContainer` 对象中读取：
```Java
RegionContainer container = WorldGuard.getInstance().getPlatform().getRegionContainer();
```
每个世界都有一个区域的列表。若要获取指定世界的区域列表，容器有一个 `getWorld(World)` 方法：
```
RegionManager regions = container.get(world);
```
::: tip
见“[引自 Bukkit 的对象](worldguard-api.from-bukkit-objects.md)”章节来获知如何转化 Bukkit 的世界。
:::

::: warning
返回值在区域支持被禁用或区域数据载入失败时**可能会返回 null**。WorldGuard 可能会间歇性地尝试重新载入这些数据。
:::

## 区域管理

若要按区域命名获取区域对象：
```Java
ProtectedRegion region = regions.getRegion("spawn");
```

另外，还有如下方法：

* 获取所有区域的不可修改映射表：`regions.getRegions()`
* 测试指定命名的区域是否存在：`regions.hasRegion(String)`
* 获取区域大小：`regions.size()`

::: info 示例：获取名为“spawn”的区域数据
```Java
RegionContainer container = WorldGuard.getInstance().getPlatform().getRegionContainer();
RegionManager regions = container.get(world);
if (regions != null) {
    return regions.getRegion("spawn");
} else {
    // 在世界不支持区域或区域数据读取失败情况下执行的代码
}
```
:::

### 创建区域

当你创建了一个 ProtectedRegion 的实例之后，可以在区域管理模块上使用 `addRegion(ProtectedRegion)` 方法。
```Java
RegionContainer container = WorldGuard.getInstance().getPlatform().getRegionContainer();
RegionManager regions = container.get(world);
regions.addRegion(region);
```
父区域会被自动添加。如果已经存在命名相同的区域，则新创建的区域数据将会覆盖旧的区域。

### 删除区域

区域可以以按命名的方式通过方法 `regions.removeRegion(String, RemovalStrategy)` 删除。删除方法中的参数决定了该区域继承的子区域是操作方法。
```Java
regions.removeRegion("mall", RemovalStrategy.UNSET_PARENT_IN_CHILDREN);
```

### 保存改动

区域数据会在一小段时间后自动保存，所以**没有特意进行保存的必要**。

如果你执意要使用保存方法，你可以调用下列方法之一：
* `save()`
* `saveChanges()`
该方法可以从任何线程调用，但会在完成之前阻塞该线程（或产生报错）。

### 重载变动

若要从本地文件中重新读取文件，你可以使用方法 `load()`。该方法可以从任何线程调用，但会在完成之前阻塞该线程（或产生报错）。