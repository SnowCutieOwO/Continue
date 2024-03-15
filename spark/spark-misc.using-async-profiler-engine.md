# 使用 async-profiler 引擎

spark 有两种分析引擎：


* Java（基于 WarmRoast）
* async-profiler

async-profiler 引擎相比 Java/WarmRoast 引擎更为精确，且它不会出现安全点抽样偏差的问题。若你的系统支持该引擎，它会自动启用。

## 系统需求

async-profiler 引擎仅支持 **x86_64** 架构的 **Linux** 系统。

但好消息是，大多数专用服务器和 VPS 都是基于这个系统的！[^1]

## 面板服

如果你开的是诸如翼龙一类的面板服的话，你可能需要调整一些内容才能让 async-profile 引擎正常工作。

先试试看吧，如果你遇到了错误，那么请参照下面的步骤。

### 安装 libstdc++

async-profiler 依赖于 libstdc++。如果当前镜像中不存在这个库，你可能需要手动安装它。

如果出现下列的错误，说明你遇到的很可能就是这个问题：

> java.lang.UnsatisfiedLinkError: /tmp/spark-xxxx-libasyncProfiler.so.tmp: Error loading shared library libstdc++.so.6: No such file or directory (needed by /tmp/spark-xxxx-libasyncProfiler.so.tmp)

若要在 Alpine 上安装 libstdc++，你需要输入这个命令：
```Linux
apk add libstdc++
```
若要在 Debian/Ubuntu 上安装 libstdc++，你需要输入这个命令：
```Linux
apk install libstdc++6
```
若你正在使用基于 Alpine 的 Java Docker 镜像，你需要将下列内容加入你的 Dockerfile：
```Linux
RUN apk add --no-cache libstdc++
```
若你正在使用基于 Debian 的 Java Docker 镜像，你需要将下列内容加入你的 Dockerfile：
```Linux
RUN apt-get install libstdc++6
```

### 允许访问内核 perf-event

async-profiler 会在不能使用 perf-event 时自动使用“itimer”模式。大多数 Docker 运行时环境均限制此类访问。

对大部分用户来讲，这无伤大雅，但如果你想记录本地代码的有关信息，你就需要将下列标志添加至面板服，以此确保 async-profiler 能正常使用。
```Linux
docker run --cap-add SYS_ADMIN ...
```

### 安装 Hotspot 调试符

分配分析模式需要安装 Hotspot 调试符。在现代的 JVM（Java 11+）中自带。

如果没有，你需要通过你的操作系统包管理器安装下列包：


* `openjdk-8-dbg` 或
* `openjdk-11-dbg`

例如，在 Ununtu 中为：
```Linux
apt install openjdk-11-dbg
```

在其他发行版本的系统中安装的相关信息可以在[这里](https://github.com/jvm-profiling-tools/async-profiler#installing-debug-symbols)找到。

[^1]:
    国内的绝大部分 VPS 都是基于 Windows 的，若想要使用本章节所提及的功能，请先联系服务器提供商客服。
