# 安装

:::: tabs
 
::: tab Minecraft 服务端

若要在服务器上安装 spark，你只需在[**下载页**](https://spark.lucko.me/download)获取最新版的 spark **.jar** 文件，并把它放进服务端的 `mods` 或者 `plugins` 文件夹中。

如此操作，spark 就会在下次开服时启用。

你可以使用 `/spark` 使用及调整 spark。

你也许需要给自己 `spark` 权限，或者确保你是管理员，才可继续使用本插件的功能。

> [!NOTE] 提示
> 可能需要额外做些事才能让 `async-profiler` 的分析引擎正常工作。

:::

::: tab Minecraft 客户端

若要安装 spark，只需从[我们的下载页](https://spark.lucko.me/download)获取最新的 spark **.jar** 文件，然后将其放入客户端的 `mods` 文件夹即可。

你可以通过 `/sparkc` 命令使用本插件。
:::

::: tab Minecraft 群组

若要安装 spark，只需从[我们的下载页](https://spark.lucko.me/download)获取最新的 spark **.jar** 文件，然后将其放入群组服的 `plugin` 文件夹即可。

spark 会在群组（重新）启动时自动载入。

你可以通过 `/sparkb`（BungeeCord）或 `/sparkv`（Velocity）命令使用本插件。

你可能需要先获得 `spark` 权限。

> [!NOTE] 提示
> 在 async-profiler 模式能够正常使用前你可能还需要进行[一些额外的步骤](spark-misc.using-async-profiler-engine.md#系统需求)。
:::

::::