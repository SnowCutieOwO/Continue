# 引自 Bukkit 的对象

## 玩家

出于旧版原因和未来的跨平台支持，WorldGuard 使用了它自己构建的玩家对象，称为 `LocalPlayer`。一个 Bukkit 的 `Player` 对象可通过 `WorldGuardPlugin` 的 `wrapPlayer(Player)` 封装为 `LocalPlayer` 对象。
```Java
WorldGuardPlugin.inst().wrapPlayer(player);
```

## 其他类型

许多的其他操作需要 WorldEdit 的位置、世界等内容。对于 Bukkit 的 `Location`，其他对象可以通过 `com.sk89q.worldedit.bukkit.BukkitAdapter` 中的方法转化为 WorldEdit 的对象。
```Java
BukkitAdapter.adapt(location);
BukkitAdapter.adapt(world);
```