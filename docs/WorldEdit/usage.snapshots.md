# 快照

WorldEdit 的一个强大功能就是它可以载入世界的部分结构，由选区框定，做到在不关闭服务器或关闭游戏使用第三方编辑器的情况下将该部分区域从备份的存档还原。这种方式可以解决很多问题，例如撤销熊孩子的破坏、还原世界因保存出错导致的存档损坏，甚至是还原你中途废弃的一些建筑项目。

[[toc]]

## 配置快照

若要 WorldEdit 能够读取你的备份，你就需要为其指定一个文件夹用于存储备份。路径可以在配置文件中找到，且它的相对根目录为 `/.minecraft`（不是插件文件夹里面的 WorldEdit 文件夹！）。你也可以在备份文件存储在服务器之外的情况下使用绝对路径（例如在另一分区中，这个建议对大部分硬盘读取失败的情况有效）。

在设置后，只需将备份文件或世界的压缩包文件放入你的存档备份文件夹即可。下文为一个备份文件夹的示例结构。

::: info 示例：备份储存的可能结构 
* ![img](https://worldedit.enginehub.org/en/latest/_images/folder.png) `backups/`（此为配置文本下的文件夹名称）    
  * ![img](https://worldedit.enginehub.org/en/latest/_images/folder.png) `world/`（此为世界名称）
    * ![img](https://worldedit.enginehub.org/en/latest/_images/zip.png) `2019-06-15-03-00-00.zip`（对该世界的备份）
      * ![img](https://worldedit.enginehub.org/en/latest/_images/folder.png) `world/`（必须与上述世界名称相匹配）
        * ![img](https://worldedit.enginehub.org/en/latest/_images/folder.png) `region/`（包括该世界的 `.mca` 文件）
    * ![img](https://worldedit.enginehub.org/en/latest/_images/folder.png) `2019-05-15-03-00-00`（备份不必为压缩包文件）
      * ![img](https://worldedit.enginehub.org/en/latest/_images/folder.png) `world/`
  * ![img](https://worldedit.enginehub.org/en/latest/_images/folder.png) `world_nether/`（另外一个世界名称）
    * ![img](https://worldedit.enginehub.org/en/latest/_images/zip.png) `2019-06-15-03-00-00.zip`
  * ![img](https://worldedit.enginehub.org/en/latest/_images/zip.png) `2019-06-01-03-00-00.zip`（这个备份保存了多个世界）
    * ![img](https://worldedit.enginehub.org/en/latest/_images/folder.png) `world/`
      * ![img](https://worldedit.enginehub.org/en/latest/_images/folder.png) `region/`（所有 `.mca` 文件都在这里）
    * ![img](https://worldedit.enginehub.org/en/latest/_images/folder.png) `world_nether/`
  * ![img](https://worldedit.enginehub.org/en/latest/_images/zip.png) `2019-05-01-03-00-00.zip`（另一份一个月之前的备份）
:::

你可能注意到了，每个单独的备份都有各自的时间戳。WorldEdit 给这些备份以时间戳命名以表明哪些备份是最新的。世界文件夹必须存在于备份文件中，而世界文件夹中又必须有一个区域文件夹。你可以在顶级目录中拥有多个世界存档文件夹的备份，或者为单独世界文件夹添加多个备份。

::: tip
如果你正在使用 Linux 等类似的系统，你可以使用下列选项在合适的文件夹中创建一个 zip 文件备份：```zip -v backups\`date "+%Y-%m-%d-%H-%M-%S"`.zip -r world```。
:::

### 支持的归档格式

WorldEdit 本身通过 Java 的 zip 库支持 zip 文件。但是，Java 的 zip 库只能支持那些最基础的 zip 文件。如果你在使用 zip 的时候遇到了莫名其妙的读取错误，你可能就需要安装 TrueZip。若你要使用其他的归档格式，例如 tarballs，则你也可以安装 TrueZip。

TrueZip 可以[从 maven 仓库下载 Jar 文件](https://repo.maven.apache.org/maven2/de/schlichtherle/truezip/6.8.1/truezip-6.8.1.jar)并将其保存为 `truezip.jar` 文件。这个文件在 Bukkit 服务端下应该被放在 `plugins` 或 `plugins/WorldEdit`，在其他平台上应该被放在 `mods` 文件夹！）。你也可以在备份文件存储在服务器之外的情况下使用绝对路径（例如在另一分区中，这个建议对大部分硬盘读取失败的情况有效）。
[!TIP|label:提示]    
使用归档备份（例如，zip 文件）可以保存硬盘空间，但相对会在还原的时候提升 CPU 用量。这些利弊应当由你自己权衡。

## 使用快照

现在你的快照已被充分配置，使用它们非常简单。只需要选中一块区域并使用命令 `//restore` 即可。

默认情况下，WorldEdit 会为当前的世界寻找最近的备份，并从中为你恢复选区中的内容。

若你不想要使用最近的备份（建筑可能在备份的时候就已经被破坏，所以你需要找一份时间更早的备份），这里有额外的命令帮助你选择特定时间点的存档。

若要开始，你需要使用命令 `/snap list`，这会为你当前的世界列出所有快照。

你也可以使用 `/snap use latest` 或 `/snap yse [名称]` 来选用最新的快照或是按名称选用指定的快照。你也可以使用命令 `/snap sel <数字>` 来按列表中的序号选择所要使用的快照。

如果你知道你需要进行还原的具体时间点，或者你需要指定时间点附近的备份，你可以使用命令 `/snap before <时间>` 或 `/snap after <时间>` 来找到所指定时间点之后/之前的备份快照。这些命令需要一个与备份文件名称相似的时间戳作为参数，或者甚至是一个用词汇表示的自然时间，例如 `/snap before "last friday"`。