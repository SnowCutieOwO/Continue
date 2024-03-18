# 命令用法

>**注意：**
`/sparkb`、`/sparkv` 和 `/sparkc` 是 BungeeCord、Velocity 以及 Forge/Fabric 专用的命令，在使用对应服务端时应该将 `/spark` 替换成上述的命令。

## 分析器

### `/spark profiler`

子命令 `profiler` 可以控制 spark 的分析器。

执行命令所需权限为 `spark 或 `spark.profiler`。

如果分析器已经启动，你可以输入下面这些命令：


* `/spark profiler open` **打开**分析报告页而无需停止；
* `/spark profiler stop` **停止**分析并浏览分析结果；
* `/spark profiler cancel` **取消**分析操作，并取消上传报告。

在其他情况下，你可以使用这些基本的操作命令：


* `/spark profiler start` 在默认操作模式下**开始**分析；
* `/spark profiler stop` **停止**分析并浏览结果；
* `/spark profiler info` 检查当前分析的**状态**。

这里还有一些额外的标志参数，可以用于控制分析器。如：


* `/spark profiler start --timeout <秒>` 开始分析，并在给定的时间之后**自动停止**；
* `/spark profiler start --thread *` 开始分析，并记录**所有线程**；
* `/spark profiler start --alloc` 开始分析，并分析内存分配（内存使用情况）而非 CPU 的使用情况。
<details> <summary>高级用户参数</summary>你可以使用以下命令：

* `/spark profiler start --interval <毫秒>` 开始分析，并按参数中的间隔时间采样（默认值为 4，表示采样间隔为 4 毫秒）；
* `/spark profiler start --thread *` 开始分析，并记录所有线程；
* `/spark profiler start --thread <线程名称>` 开始分析，并记录参数所给定的线程；
* `/spark profiler start --only-ticks-over <毫秒>` 开始分析，但只对时间长度超过给定值的滴答进行采样；
* `/spark profiler start --regex --thread <正则表达式>` 开始分析，且只分析名称符合给定正则表达式的线程；
* `/spark profiler start --combine-all` 开始分析，但将所有线程都组合在一个根节点下；
* `/spark profiler start --not-combined` 开始分析，但禁用来自同一线程池的线程组；
* `/spark profiler start --force-java-sampler` 开始分析，并强制使用 Java 采样而非异步采样；
* `/spark profiler start --alloc --alloc-live-only` 开始分析内存分配，且只保留在结束时仍未被内存回收清理的对象数据；
* `/spark profiler start --interval <字节>` 开始分析内存分配，且只按给定速度采样（默认值是 `524287`，即 [i]512 KB[/i]）；
* `/spark profiler stop --comment <注释>` 停止分析，并在浏览界面中填写注释；
* `/spark profiler stop --separate-parent-calls` 停止分析，并在浏览界面中将不同父方法调用的内容分开显示。（[i]已弃用[/i]）
</details>

## 健康分析

### `/spark health`

子命令 `health` 会产生一份服务器的健康报告，其中包含 TPS、CPU、内存和硬盘的使用情况。

执行命令所需权限为 `spark` 或 `spark.healthreport`。

你可以使用以下命令：


* `/spark health --memory` 会让报告中附带 JVM 内存的使用情况； 
* `/spark health --network` 会让报告中附带系统网络的使用情况。


### `/spark ping`

子命令 `ping` 会输出全体玩家延迟的平均循环时间（或是指定玩家的延迟），并取三位小数。

你可以使用以下命令：


* `/spark ping` 来浏览有关所有玩家平均延迟的信息；
* `/spark ping --player <玩家名称>` 返回指定玩家的延迟循环时间。

执行命令所需权限为 `spark` 或 `spark.ping`。

### `/spark tps`
子命令 `tps` 会输出服务器 TPS（每秒刻数）比率和 CPU 的使用情况。

执行命令所需权限为 `spark` 或 `spark.tps`。

### `/spark tickmonitor`

子命令 `tickmonitor` 可以控制刻监视器（Tick Monitor）。

执行命令所需权限为 `spark` 或 `spark.tickmonitor`。

在不带参数的情况下，执行这条命令，可以控制监视器的开和关。

你可以使用以下命令：


* `/spark tickmonitor --threshold <比例>` 启动刻监视器，但只记录超过刻时间间隔一定百分比的刻；
* `/spark tickmonitor --threshold-tick <毫秒>` 启动刻监视器，但只记录 MSPT（每刻毫秒数，Milliseconds per Tick）超过给定参数的刻；
* `/spark tickmonitor --without-gc` 启动刻监视器，但禁用 GC（内存垃圾收集，Garbage Collection）活动的记录。


## 内存使用

### `/spark gc`
子命令 `gc` 会显示服务器 GC（内存垃圾收集，Garbage Collection）的历史记录。

执行命令所需权限为 `spark` 或 `spark.gc`。

### `/spark gcmonitor`

子命令 `gcmonitor` 管理服务器的 GC（内存垃圾收集，Garbage Collection）监视器系统。

执行命令所需权限为 `spark` 或 `spark.gcmonitor`。

### `/spark heapsummary`

子命令 `heapsummary` 会产生一份内存（堆）转储摘要，并将它上传到浏览器中。

执行命令所需权限为 `spark` 或 `spark.heapsummary`。

### `/spark heapdump`

子命令 `heapdump` 会产生一份堆转储（.hprof 格式的快照）文件，并将它保存在本地。

你可以使用以下命令：


* `/spark heapdump --compress <类型>` 可以指定堆转储文件压缩为的格式。支持的未见类型有 gzip、xz 以及 lzma；
* `/spark heapdump --include-non-live` 可以指定所要包含的“非活跃”对象（不可访问且符合 GC 回收条件的对象）；[i]（已弃用）[/i]
* `/spark heapdump --run-gc-before` 可以让 JVM 在堆转储生成前启用 GC。[i]（已弃用）[/i]


## 杂项

### `/spark activity`

子命令 `activity` 能显示 spark 最近活动的有关信息。

执行命令所需权限为 `spark` 或 `spark.activity`。

你可以使用以下命令：


* `/spark activity --page <页码>` 可以浏览指定页面。


## 另见

* 有关**刻**和**滴答**的释义：https://zh.minecraft.wiki/w/%E5%88%BB
* 部分译名参考自站内搬运帖：https://www.mcbbs.net/thread-823209-1-1.html
* 部分译名参考自中文维基：https://zh.minecraft.wiki/w/%E5%88%BB
* 部分译名参考自知乎文章[i]《由浅入深了解GC原理》[/i]：https://zhuanlan.zhihu.com/p/100475619
