# 标志计算

若要检查标志，一个 `ApplicableRegionSet`（包含一个区域的列表）的示例必须提供。在“空间查询”章节有相吸讲述。

## 查询标志

给定列表查询指定标志的问题是，这里可能会有多个区域包含同一个标志（且值不同）。如果优先级和继承关系在之前已经正确配置，那么这里可能只会有一个“有效的”值，或者在其他情况下会有多个。

### 获取所有值

`queryAllValues(RegionAssociable, Flag)` 可以用于获取对一个标志设置的所有值。标志可以从 `Flags` 中获取。

::: info 示例：获取 greeting 标志设置的消息，将其设置在玩家上
```Java
LocalPlayer localPlayer = WorldGuardPlugin.inst().wrapPlayer(player);
Collection<String> greetings = set.queryAllValues(localPlayer, Flags.GREET_MESSAGE);
```
:::

### 获取单个值

`queryValue(RegionAssociable, Flag)` 可以用于获取单个值。取决于标志种类，这可能是找到的第一个值，或者是“最匹配”的值。截至维基最后一次编辑前，仅 `StateFlags` 会实际意义上地选择“最匹配”的值。

::: info 示例：获取 greeting 标志设置的消息，将其设置在玩家上
```Java
LocalPlayer localPlayer = WorldGuardPlugin.inst().wrapPlayer(player);
String greeting = set.queryValue(localPlayer, Flags.GREET_MESSAGE);
```
若这个标志没有在任何区域上被设置，那么返回的值有可能是 `null`。
:::

### 获取 StateFlag 的值

如果你正在尝试查询一个 `StateFlag`（只有 allow/deny 两种值的标志），这就会有你可使用的额外方法。它们允许你指定多个状态标志，用于自动结合（请记住，“deny”会覆盖“allow”）。

* `queryState(RegionAssociable, StateFlag...)` 需要一个或更多的标志，返回的值为 allow、deny 或 null；
* `testState(RegionAssociable, StateFlag...)` 功能大致相同，但会在标志为 allow 时返回 true。

你仍然可以使用 `queryValue`，但你一次只能指定一个标志。

::: info 示例：测试 build 标志]
``` Java
LocalPlayer localPlayer = WorldGuardPlugin.inst().wrapPlayer(player);
if (!set.testState(localPlayer, Flags.BUILD)) {
    event.setCancelled(true);
}
```
:::

### 无玩家标志

如果你正在尝试寻找不需要玩家的标志（例如，`creeper-explosion` 标志），那么你就可以在 `RegionAssociable` 参数的位置使用 `null`。

::: info 示例：测试爬行者爆炸摧毁（creeper-explosion）标志]
```Java
if (!set.testState(null, Flags.CREEPER_EXPLOSION)) {
    event.setCancelled(true);
}
```
:::

::: tip
你也可以在与玩家有关的标志中使用 `null`，但在区域组标志中这不会正常工作。
:::

### 也可通过 RegionQuery

该页面中描述的方法同样在 `RegionQuery` 中可直接获取。

::: info 示例：使用 `RegionQuery` 直接查询标志]
```Java
LocalPlayer localPlayer = WorldGuardPlugin.inst().wrapPlayer(player);
Location loc = new Location(world, 10, 64, 100);
RegionContainer container = WorldGuard.getInstance().getPlatform().getRegionContainer();
RegionQuery query = container.createQuery();

// 不与之冲突:
// ApplicableRegionSet set = query.getApplicableRegions(loc);

// 只是直接测试标志:
query.testState(loc, localPlayer, Flags.BUILD);
```
额外地，你可以使用 `testBuild` 等作为 `testState(..., Flags.BUILD, 你的标志)` 的快捷方式。
:::

### 非玩家操作

除了在玩家上传递，你也可以在（一个非`LocalPlayer`的）`RegionAssociable` 中传递。这个对象用于决定是否对区域的拥有者、成员或非成员使用标志。

但是，让我们先考虑玩家方面会发生的事情。让玩家成为建筑团队的一个成员，而该区域组是主城区域和“builder's cloud”，返回的内容一定是 `OWNER`，如下所述：
```Java
List<ProtectedRegion> regions = Arrays.asList(spawnRegion, buildersClub);
builderPlayer.getAssociation(regions) == Association.OWNER;
```

你可能会担心，你不能将实体或方块作为成员添加至区域，所以它不可以像之前那样工作。若要这么做，一个特殊的 `RegionAssociable` 会被用于方块和实体：它会获取一个**源区域**的列表，以此决定哪一个目标位置的源区域是“成员”。如下所述。
```Java
Set deepInside    = newHashSet(spawn, mall);
Set inside        = newHashSet(spawn);
Set outside       = newHashSet(); // 空置

// 区域外 -> 区域内 = 判断为 "非成员"
new RegionOverlapAssociation(outside).getAssociation(inside) == NON_MEMBER

// 区域内 -> 区域内 = 判断为 "成员"
new RegionOverlapAssociation(inside).getAssociation(inside) == OWNER

// 区域内 -> 区域较深内部 = 判断为 "成员"
// 需要注意的是默认建筑权限在该情况下是被阻止的.
// 玩家与所有单独区域间的关系需为 "成员".
new RegionOverlapAssociation(inside).getAssociation(deepInside) == OWNER

// 区域内 -> 区域外 = 判断为 "非成员"
new RegionOverlapAssociation(inside).getAssociation(outside) == NON_MEMBER

// 区域较深内部 -> 区域内部 = 判断为 "成员"
new RegionOverlapAssociation(deepInside).getAssociation(inside) == OWNER
```

需要注意的是 `nonplayer-protection-domains` 标志和区域继承可覆盖此行为。多种的 `test...` 和 `query...` 方法将会为你处理这些。

概括来讲：

* 玩家（`LocalPlayer`）对象已经集成了 `RegionAssociable`；
* 对于实体与方块，WorldGuard 使用存在于 `RegionOverlapAssociation` 方块或实体的区域。

这里也有：

* `ConstantAssociation` 有预置的归属关系（`new ConstantAssociation(Association.MEMBER)` 或 `Associables.constant(Association.MEMBER)`）；
* `DelayedRegionOverlapAssociation` 的运作方式有点像 `RegionOverlapAssociation`，但不会对源区域进行区域检查，除非有需求。

::: info 示例：探究 WorldGuard 如何处理区域保护]
首先，正确的 `RegionAssociation` 必须为事件而创建。下文叙述的 `createRegionAssociable()` 并会返回一个 `RegionAssociable`。
```Java
private RegionAssociable createRegionAssociable(Object cause) {
    if (!cause.isKnown()) {
        return Associables.constant(Association.NON_MEMBER);
    } else if (cause instanceof Player player) {
        return WorldGuardPlugin.inst().wrapPlayer(player);
    } else if (cause instanceof Entity entity) {
        RegionQuery query = WorldGuard.getInstance().getPlatform().getRegionContainer().createQuery();
        WorldConfiguration config = WorldGuard.getInstance().getPlatform().getGlobalStateManager().get(BukkitAdapter.adapt(entity.getWorld()));
        Location loc = entity.getLocation(); // getOrigin() 可以用在 Paper 服务器上
        return new DelayedRegionOverlapAssociation(query, BukkitAdapter.adapt(loc), config.useMaxPriorityAssociation);
    } else if (cause instanceof Block block) {
        RegionQuery query = WorldGuard.getInstance().getPlatform().getRegionContainer().createQuery();
        WorldConfiguration config = WorldGuard.getInstance().getPlatform().getGlobalStateManager().get(BukkitAdapter.adapt(block.getWorld()));
        Location loc = block.getLocation();
        return new DelayedRegionOverlapAssociation(query, BukkitAdapter.adapt(loc), config.useMaxPriorityAssociation);
    } else {
        return Associables.constant(Association.NON_MEMBER);
    }
}
```
让我们看看它可以用在哪：
``` Java
@EventHandler
public void onPlayerBucketFill(PlayerBucketFillEvent event) {
    Player player = event.getPlayer();
    RegionAssociable associable = createRegionAssociable(player);

    if (!set.testState(associable, /* 在这里写上你的标志 */)) {
        event.setCancelled(true);
    }
}
```
:::