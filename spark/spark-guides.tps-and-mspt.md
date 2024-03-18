# TPS 与 MSPT

命令 [`/spark tps`](https://spark.lucko.me/docs/Command-Usage#spark-tps) 显示服务器的每秒刻数（Ticks per Second，缩写为TPS）和每刻毫秒数（Milliseconds per Tick，缩写为MSPT），但这些值到底是什么意思？

这两个数据是检测游戏运行状况的指标。它们与刻循环有关：多少 tick 正在被执行，而它们执行又平均耗时多少。

## TPS

每秒刻数（Ticks per Second，缩写为TPS）显示了游戏每秒能*平均*处理多少个 tick。

正常不卡的情况下，TPS 一般为 **20**。

若要达到这个数字，每个 tick 处理的耗时不能超过 50 毫秒。

![img](https://s11.ax1x.com/2023/12/25/piHDyF0.png)
一个服务器刻循环的示意图。

这个例子中，一些 tick 计算的耗时超过了 50 毫秒，这导致一秒内只有 16 个 tick 参与计算。如果这种情况一直存在，spark 就会认为服务器的 **TPS** 是 **16**。

## MSPT（每刻毫秒数）

每刻毫秒数（Milliseconds per Tick，缩写为MSPT）显示了游戏每个 tick 处理的*平均*耗时。

正常不卡的情况下，MSPT 一般**小于 50** 毫秒/刻。

![img](https://s11.ax1x.com/2023/12/25/piHDTFx.png)
一个服务器刻循环的示意图。

使用与上文相同的例子，你可以看到每个 tick 的耗时不尽相同。

耗时最短的 tick 只花费了 20 毫秒，那么 spark 会将这个数字认为“最小 MSPT”。耗时最长的 tick 花费了 100 毫秒，那么 spark 会将这个数字认为“最大 MSPT”。

spark 也会使用这个数字计算其他内容：中值和 95% 分位数。

**在命令输出中的样子...**

这就是 `/spark tps` 命令中显示的一堆数字的真正含义。😎

![img](https://s11.ax1x.com/2023/12/25/piHr1cF.png)

spark 会自动将这些数值按服务器的健康情况标为*绿*、*黄*或*红*色。