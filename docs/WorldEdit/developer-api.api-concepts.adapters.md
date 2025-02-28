# 适配器

WorldEdit 能够运行在许多种类的核心上。这表示 WorldEdit API 不使用任何平台上的类型，例如来自 Bukkit 的 `Player` 或来自 Sponge 的 `World`。相反，WorldEdit 使用它自己的 API 类型，对于各核心的库（见“[API 库](developer-api.main.md)”章节）也包含了能够将对应核心下数据类型转化为 WorldEdit 数据类型的*适配器*，反之亦然。例如，你可以将 `org.bukkit.entity.Player` 转化为 `com.sk89q.worldedit.entity.Player`，如下所示：
```Java
org.bukkit.entity.Player player = /* 获取玩家对象的代码 */;
Player wePlayer = BukkitAdapter.adapt(player);
```

大部分 WorldEdit 的类型（例如 `World`、`BlockVector3` 或 `BlockState`）都在其他核心上有对应的相似类型。可以在你的 IDE（代码编辑器）中通过查阅适配器类中的方法描述获悉。