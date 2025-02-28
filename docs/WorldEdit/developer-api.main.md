# 开发者 API

WorldEdit 为其他模组和插件提供了一个稳定的公开接口。它提供了各平台间独立的接口和类，用于操作 Minecraft 的方块、生物群系和世界。有限的实体支持也在 API 中提供。

## API 库

你可以通过 [Maven 仓库](https://help.sonatype.com/repomanager3/repository-manager-concepts/an-example---maven-repository-format
)获取 API，它与 [Maven](https://maven.apache.org/)、[Gradle](https://gradle.org/) 和 [sbt](https://www.scala-sbt.org/) 等其他构建系统兼容。仓库地址为 https://maven.enginehub.org/repo/ ，WorldEdit 位于 `con.sk89q.worldedit` 组下。根据你所需要的 API，你可以按名称选择下列内容：

* `worldedit-core`：核心 API。它不依赖任何平台，但也不提供任何转换类；
* `worldedit-bukkit`：Bukkit 平台集成。依赖于 Bukkit API，并通过 `BukkitAdapter` 提供了在 Bukkit 数据类型和 WorldEdit 数据类型之间的转换功能；
* `worldedit-fabric-mcXYZ`：Fabric 平台集成。依赖于 Fabric API，并通过 `FabricAdapter` 提供了在 Fabric 数据类型和 WorldEdit 数据类型之间的转换功能。使用前需将 XYZ 替换为对应的 Minecraft 版本；
* `worldedit-neoforge-mcXYZ`：NeoForge 平台集成。依赖于 NeoForge，并通过 `ForgeAdapter` 提供了在 Forge 数据类型和 WorldEdit 数据类型之间的转换功能。使用前需将 XYZ 替换为对应的 Minecraft 版本；
* `worldedit-sponge-mcXYZ`：Sponge 平台集成。依赖于 Sponge API，并通过 `SpongeAdapter` 提供了在 Sponge 数据类型和 WorldEdit 数据类型之间的转换功能。使用前需将 XYZ 替换为对应的 Minecraft 版本；（目前只支持 1.12.2，因为 Sponge 只在这个版本有模组核心。）
* `worldedit-cli`：命令行集成。用作依赖时可能不很有用，但可以在 Minecraft 之外使用 WorldEdit 的功能。

你所使用的版本取决于你要构建的对应 Minecraft 版本。6 表示低于 1.12.2 的 Minecraft，而 7 表示高于 1.13 的版本。我们只对最新版本的 WorldEdit 和 Minecraft 提供支持，但大体来讲版本与版本之间的 API 在示例中表现得大致相同。这些文档只会提及最新版本的 WorldEdit，但是你还是可以在本页面右下角的工具栏处选择旧版本的 WorldEdit 维基并进行阅读[^1]。在下载页面可以找到各个版本对应的游戏版本，也可以在仓库中自行浏览：https://maven.enginehub.org/repo/com/sk89q/worldedit/worldedit-core/

若要开始了解 API，请先阅读“API 的概念”章节。一些通用的 API 用法在“API 示例”章节中有记录。在开发插件时，请记得参阅“内部 API”章节，以此确保你正在使用的 API 是受支持的。如果你需要参阅 JavaDocs，可以在 https://docs.enginehub.org/javadoc/com.sk89q.worldedit/worldedit-core/7.2.0/ 找到它们。

[^1]: 本翻译帖中可点击[这里](https://www.mineplugin.org/WorldEdit)访问旧版本的 WorldEdit 维基，适用于 1.12.2 以下的版本；本文所译版本适用于 WorldEdit 7+，对应 Minecraft 为 1.13 或更高。