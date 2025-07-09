# 附属

在这里你可以找到一些利用了本插件 API 实现的附属。

你可以在[这里](https://github.com/BG-Software-LLC/SuperiorSkyblock2/tree/dev/API/src/main/java/com/bgsoftware/superiorskyblock/api)找到 API。

若你想要你的附属显示在这里，你可以随时在 [Discord 群组聊天](https://bg-software.com/discord/)上联系我。

## SlimeWorldManager 附属

该附属使得 [SlimeWorldManager](https://www.spigotmc.org/resources/69974/) 能管理不同世界的岛屿创建。SlimeWorldManager 允许你创建以 slime 格式保存的世界——这是一种由 Hypixel 团队设置的格式，旨在让较大的世界处理更为简单与快速。slime 世界通常用于不需要载入很多区块即可运行的小世界（主要是小游戏）。你可以在[这里](https://hypixel.net/threads/2190753/)找到这种格式的更多信息。你可以在团队的 [Github 介绍页](https://github.com/OmerBenGera/SSB-SlimeWorldManager)上找到附属的源代码及发行文件。

## OneBlock 附属

OneBlock 是一种大幅修改了原版空岛体验的附属。空岛不再像普通结构那样生成，而是被一块能无限生成的单方块替换。每次挖掘都会生成新的不同方块。插件为你设置了包含各种方块的不同阶段，直到你解锁末地。你可以在[这里](https://www.youtube.com/watch?v=_QihkN7cxas&list=PLXYjxAo4KISIdiqhoLW_f7Y62hYgHagQC)找到一系列这种游玩类型的介绍。

你可以在 [Github 介绍页](https://github.com/OmerBenGera/SSB-OneBlock)上找到附属的源代码及发行文件。

### 设置单方块空岛

在使用 OneBlock 附属是，你仍然需要配置 SuperiorSkyBlock。这表示你需要修改原有的空岛结构（你也不想玩单方块空岛的时候用了普通空岛的结构对吧？），同时需要按需修改你的配置文件。结构的中心方块为生成方块（即单方块），因此创建[新结构](overview.schematics.md)时要注意这点。

## AcidIslands 附属

AcidIsland 是一种大幅修改了原版空岛体验的附属。空岛不再像普通结构那样生成，而是被洋洋大海中的一座小岛替代。里面的水有剧毒，接触都会导致你的死亡！

你可以在 [Github 介绍页](https://github.com/OmerBenGera/SSB-AcidIslands)上找到附属的源代码及发行文件。

## 自定义脚本引擎附属

在 Java 15 之后，Oracle 移除了 JDK 中的 Nashorn JavaScript 引擎。这表示插件不能再在某些地方通过 JavaScript 执行脚本（例如，检查任务、岛屿任务成功检查、等级价格计算等）。下面的附属可以解决这些问题。只需将其放入插件的 `modules` 文件夹即可。如果你找不到它，请确保你使用的版本是最新构建。

### Nashorn 引擎

这是 Nashorn 引擎的独立版本，换言之，这和 Java 中使用的是同一个引擎。你可以在 [Github 介绍页](https://github.com/BG-Software-LLC/SuperiorSkyblock2-NashornEngine)上找到附属的源代码及发行文件。

### Rhino 引擎

这是 Rhino 引擎的独立版本，换言之，这是 JavaScript 引擎的另一个实现。你可以在 [Github 介绍页](https://github.com/BG-Software-LLC/SuperiorSkyblock2-RhinoEngine)上找到附属的源代码及发行文件。

### GraalVM 引擎

这是使用 GraalVM 引擎的附属。你必须正确安装并使用 GraalVM。你可以在 [Github 介绍页](https://github.com/BG-Software-LLC/SuperiorSkyblock2-GraalVMEngine)上找到附属的源代码及发行文件。