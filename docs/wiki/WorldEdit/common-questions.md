# 常见问题

[[toc]]

## 通用

### 为什么所有命令都无效？

如果命令无效，这可能说明 WorldEdit 在启动时遇到了问题：

* 请确保你正在使用 Bukkit/Forge/Sponge 等服务端。原版的 Minecraft 服务器不会载入插件/模组！

* 你可以执行诸如 `version`（Bukkit）、`sponge version`（Sponge）或 `forge help`（Forge）来确保你所运行的服务器种类对应。单人游戏中，主菜单会有“模组”按钮（且 WorldEdit 应当处于模组列表中！）；

* 请确保你为你的 Minecraft 选择了对应版本的 WorldEdit；

如果上面这些解决方法没能抱到你，你可能需要查看你的启动日志：

* 若你正在使用游戏服务器托管（面板服），则你需要打开它的日志浏览功能；
* 你也可以打开服务器根目录下的 logs 文件夹，找到并打开“latest.log”进行浏览。（旧版本的 Minecraft 下，日志文件为根目录下的“server.log”。）

若你仍然无法通过服务器日志找到问题，你可以寻求他人帮助或提交漏洞报告。

### WorldEdit 存在多久了？

WorldEdit 是 2010 年 10 月由 sk89q 发布于“hMod”模组发布网站的。随后，WorldEdit 就被转为 Bukkit 项目，并最终传播到了 Forge 等其他平台。

### 谁在维护 WorldEdit？

WorldEdit 是由许多用户共同维护开发的，WorldEdit 的很大一部分都包含着社区贡献的代码。贡献者排行榜可在 [Github 的页面](https://github.com/EngineHub/WorldEdit/graphs/contributors) 上找到。

## 世界编辑

### 所有命令在任何情况下都返回“0 个方块已改变”。

如果你之前通过命令 `//gmask <蒙版>` 设置了一个全局蒙版，你需要使用命令 `//gmask` 清除蒙版，这样它就不会影响你的其他编辑操作了。

### 我的服务器在大面积操作时崩溃了（大于 100 万方块数量的操作）！

::: info
如果你的客户端出现了连接丢失/超时现象，则下文的操作不能解决这个问题。在这个时候，WorldEdit 不会尝试在编辑方块的时候保持客户端连接。下文所述步骤的效果仅仅是让服务器能完成操作而已。
:::

造成这个问题的两个原因可能是线程守护强行中止了服务器进程，或者服务器内存溢出。

请确保你至少为服务器分配了 1GB（维持服务器运行）+ 每 1000 万个操作的方块增加 2GB 内存。例如，若你正在编辑的方块数量达到了 5000 万左右，则 `50 / 10 = 5`，然后 `1 + 2 * 5`，即你需要分配 11GB 的内存。若要将 11GB 分配至你的服务器，你需要在开服参数中添加 `-Xmx11G`。Bukkit/Spigot 服务端见[此示例操作步骤](https://bukkit.gamepedia.com/Setting_the_Java_Virtual_Machine_Heap_Size)。在 NeoForge/Fabric 服务器上大体相同。

若要修复线程守护强行中止服务器的问题，尝试将线程守护的超时时间拉长。对于 Spigot/Paper 服务端，可以在 `spigot.yml` 下的 `timeout-time` 项设置处调整。对于 NeoForge/Fabric 服务端，则是 `server.properties` 下的 `max-tick-time` 项。大多数情况下这些操作是不必要的，因为 WorldEdit 在大多数情况下都会触发线程守护。

### 我的服务器在单人客户端操作时崩溃了（大于 100 万方块数量的操作）！

你可以使用与上文针对服务器使用的步骤对客户端进行调整，但你不需要担心线程守护。单人客户端不会用到线程守护。

### 我如何移除手上物品绑定的工具/笔刷？

在手持绑定工具的物品时使用 `/tool none` 或 `/brush none` 命令。这两个命令功能相同，所以你随便选哪个都行。

### 为何告示牌文本/箱子内容/实体等不工作？

在所有版本的 WorldEdit 中，你都需要拥有 `worldedit.setnbt` 权限（OP 默认拥有）来选择方块实体。

在 Bukkit 服务端上，WorldEdit 因 Bukkit 机制的差异，需要使用对应版本的适配器才可正常使用某些功能。它会对方块实体（存有额外数据的方块，例如告示牌、容器等）、实体和其他内容使用适配器。这意味着每当你使用新版本的 WorldEdit，你都需要更新 WorldEdit。通常，WorldEdit 将会快速更新，你可以在[主页](https://worldedit.enginehub.org/en/latest/)找到新发布版本或实验性构建。

### 当我选择位点时，WorldEdit 也选中了(-1, -1, -1)！

这是 MrCrayFish 的模组 Enchantable 导致的冲突，相关问题描述可[见此](https://github.com/MrCrayfish/Enchantable/issues/18)。

你可以删除这个模组，也可以使用超距魔杖。