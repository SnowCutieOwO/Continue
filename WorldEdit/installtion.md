# 安装

[[toc]]

## 安装需求

WorldEdit 运行在 Java 版（JE 版），或是你的单人游戏与本地服务器的 Minecraft 上。

**WorldEdit 不能在 Realms、Windows 10 版、基岩版（Bedrock Edition，BE 版）或携带版（Pocket Edition，PE版，旧手机版）上使用。** 这些版本的 Minecraft 只有有限或根本没有的模组支持。需要注意的是“Windows 10 版”是一个特殊版本的 Minecraft，而不是在 Windows 10 操作系统上运行的 Minecraft。

在你安装 WorldEdit 前，你需要装一个合适的“模组（插件）加载器”，例如 NeoForge、Fabric、Spigot、Bukkit 或 Sponge。我们建议你阅读下一章节来获悉模组平台选择的相关事宜。

### 选择加载方式

若你需要在你的本地游戏/单人游戏上使用 WorldEdit，我们推荐以下两种方法：
* [NeoForge](https://neoforged.net/)；
* 或另一个模组加载平台，[Fabric](https://fabricmc.net/)。

如果你正在运行 Minecraft 服务器，你可以使用：
* [Paper](https://papermc.io/)（非常推荐的 Spigot 分支，该服务端核心有着 WorldEdit 可以加以利用的部分优化内容）；
* [Spigot](https://www.spigotmc.org/)；
* NeoForge（如果你正在服务器中使用 NeoForge 模组的话，推荐使用）；
* [Sponge](https://www.spongepowered.org/)（这个服务端核心也支持 Forge 模组）。

注意：Paper 和 Spigot 有着它自己的一系列模组（称作“插件”），大部分不与 Forge、Fabric 或 Sponge 兼容。你*也许*寻找你需要的其他模组/插件（大体上，Paper 和 Spigot 有着更多的服务器管理/“专为服务器设计的模组”——完全在服务器中运行——与此同时 Forge、Fabric 和 Sponge 有着更多修改游戏玩法的模组——而这些则需要将模组也装在客户端）但可喜的是，WorldEdit 能够同时兼容这些加载平台😊，所以你可以自由选择最适合你的简单安装方式，并继续研究有关的内容。🤙

## 逐步安装

### Bukkit / Spigot / Paper

在你搭建起了基于 Bukkit 的服务器之后（对应操作教程可在 Paper/Spigot 的论坛上找到），你就可以[从 Modrinth 下载 WorldEdit](https://modrinth.com/plugin/worldedit/versions?l=bukkit)。确保你为你的 Minecraft 获取了正确版本的 WorldEdit。

1. 在你的服务器文件夹中，找到一个名叫“plugins”的文件夹。如果没有，创建一个；（通常在首次运行服务器的时候就会生成）
2. 将 WorldEdit 的 .jar 文件放入 plugins 文件夹；
3. 启动你的服务器。

检查你的后台日志以寻找可能的报错。若你遇到了任何问题，请参考“[常见问题](common-questions.md)”章节。

### NeoForge 单人游戏

首先，你需要安装 Minecraft Forge。有许多第三方启动器能直接安装整合包。如果你正在使用其中的一种，你可以从启动器界面找到该模组并进行安装。否则的话，Forge 会尝试将文件安装至官方启动器。在通过上述的方式成功安装 Forge 以后，[从 Modrnith 网站下载 WorldEdit](https://modrinth.com/plugin/worldedit/versions?l=neoforge)。请确保你为你的 Minecraft 获取了正确且平台对应版本的 WorldEdit（用于 Fabric 的模组也会发布在这个页面——请确保你正确选择了对应平台）。
1. 如果你在官方启动器安装了 Forge，请按照 [Mojang 提供的步骤指导](https://help.minecraft.net/hc/en-us/articles/4409159214605) 找到你的“.minecraft”文件夹所在位置。若你正在使用第三方启动器，文件所处的位置可能略有不同[^3]（请尝试参考相关文档）；
2. 在“.minecraft”文件夹下找到名为“mods”的文件夹。如果没有，创建一个（通常在首次运行 Forge 客户端的时候就会生成）
3. 将 WorldEdit 的 .jar 文件放入 mods 文件夹中。从你的启动器中启动 Forge 客户端。如果正确按照上面的步骤来的话，模组列表中会出现 WorldEdit 的相关信息。

若你遇到了问题，请参考“常见问题”章节。

### Fabric 单人 / 服务器

首先，你需要先安装 Fabric。[他们的网站](https://fabricmc.net/wiki/install)上有根据你的情况所提供的不同安装方式操作指导。对于单人游玩，建议使用 MultiMC 进行安装。
 
然后，[从 Modrinth 网站下载 WorldEdit](https://modrinth.com/plugin/worldedit/versions?l=fabric)。请确保你为你的 Minecraft 选择了正确版本与正确平台的 WorldEdit（面向 Forge 平台的版本在这里也可以下载——请确保你下载了对应的版本）。

在 Minecraft 的 1.14.x 版本，你也需要安装 [Fabric API 模组](https://modrinth.com/mod/fabric-api/versions)。1.15+ 版本的则不需要。

将 WorldEdit 的 .jar 文件放入你的 MultiMC 实例的“加载器模组”部分配置，并确保勾选以启用之，如果你使用的是官方的 Minecraft 启动器，则你可以直接将 jar 文件放入 mods 文件夹（操作方法与上一部分的 Forge 平台相同）。

### NeoForge 服务器 / Sponge

首先，你需要根据你的选择安装对应的服务器核心。对于 Forge，你可以下载安装器并在命令窗口界面通过终端或命令提示符[^4]（请自行搜索以获取更多操作教程）`java -jar forge-installer.jar --installServer`。Sponge 有自己的[服务器安装教程](https://docs.spongepowered.org/stable/en/server/quickstart.html)。在安装服务器核心之后，如果你使用的是 Forge 核心，那么[从 CurseForge 下载模组](https://www.curseforge.com/minecraft/mc-mods/worldedit/files)；如果你使用的是 Sponge 核心，那么[从 Ore 下载模组](https://ore.spongepowered.org/EngineHub/WorldEdit)。

1. 找到名为“mods”的文件夹。如果不存在，创建一个（一般在首次运行服务器后即会自动生成）；
2. 将 WorldEdit 的 .jar 文件放入 mods 文件夹；
3. 启动服务器。

检查你的后台日志以寻找可能的报错。若你遇到了任何问题，请参考“常见问题”章节。

### 想要看见选区边界？

若要可视化你的选区边界，你可以：

1. 在服务器端输入 `//drawsel` 命令使用有限的选区可视化功能。仅对小于 48x48x48 的立方体选区有效（在旧版本中为 32x32x32），且你需要处于创造模式。显示受到限制是因为结构方块本身在很长一段时间内都以该种方式运作；
2. 使用一个第三方的客户端模组，例如 [WorldEdit CUI (Fabric)](https://modrinth.com/mod/worldedit-cui)[^5]。注意这个模组需要 Fabric，所以你需要先在客户端上安装 Fabric。

::: tip   
如果你需要使用更老版本的 Minecraft（1.12.2 或更早），除了下载一个旧版本的 WorldEdit（6.x 版）你也可能需要用到旧版本的 [Mumfrey 制作的 WorldEditCUI 模组](https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/1292886-worldeditcui)。注意这个模组需要 LiteLoader（安装方法在帖子中可以找到）。
:::

## 脚注

[^3]: 以 HMCL 和 PCL 为例，这两个启动器的 .minecraft 目录在未设置的情况下都与启动器文件本身处于同级目录，也就是，就在它们旁边。

[^4]: 即开服常用的命令窗口，常称为 Batch、cmd、bat 等。

[^5]: 服务器端可使用插件 [WorldEditSUI](https://www.spigotmc.org/resources/worldeditsui-visualize-your-selection.60726/)，其对选区显示没有限制，且支持显示非矩形选区。
Forge [可考虑使用 WorldEditCUI Forge Edition 3](https://www.curseforge.com/minecraft/mc-mods/worldeditcui-forge-edition-3)（对 1.9.4-1.18.1），但是并不能在最新版本上使用。