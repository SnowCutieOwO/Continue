# 关于 spark 的统计信息

spark 能提交并计算一些统计数据。

在所有情况下，测量所用标准的数据都来自别的地方。如果出现错误，说明 spark 所接收的数据很有可能存在错误。


|数据名称|数据来源|
|---|---|
|TPS|服务器活动（通过 spark 的 `TickHook` 接口获取）|
|MSPT|服务器活动（通过 spark 的 `TickReporter` 接口获取）|
|CPU 使用情况|Java API（[jdk.management/OperatingSystemMXBean](https://docs.oracle.com/en/java/javase/17/docs/api/jdk.management/com/sun/management/OperatingSystemMXBean.html)）|
|内存使用情况|Java API（[jdk.management/OperatingSystemMXBean](https://docs.oracle.com/en/java/javase/17/docs/api/jdk.management/com/sun/management/OperatingSystemMXBean.html)）& `/proc/meminfo`（仅 Linux）|
|磁盘使用情况|Java API（[java.base/FileStore](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/nio/file/FileStore.html)）|
|GC|Java API（[jdk.management/GarbageCollectorMXBean](https://docs.oracle.com/en/java/javase/17/docs/api/jdk.management/com/sun/management/GarbageCollectorMXBean.html)）|
|玩家延迟|服务器 API（通过 spark 的 `PlayerPingProvider` 接口获取）|
|网络使用情况|`/proc/net/dev/`（仅 Linux）|
|CPU 名称|Linux 上为 `/proc/cpuinfo`，Windows 上为 `wmic cpu`|
|操作系统名称及版本|Linux 上为 `/proc/os-releases`，Windows 上为 `wmic os`|

### 面板服与 Docker 镜像

在服务器（以及 spark 的拓展）运行在容器（例如 Pterodactyl 等）中时，我们可以看见某些统计数据（大多数 CPU/内存使用情况）不与实际情况对应。

spark 对此无能为力。如你所见，spark 只会使用一些标准的 Java 和操作系统的 API 来获取一些统计数据。如果这些内容不准确，那么有可能是你的安装或 Java/Docker/操作系统 的漏洞。