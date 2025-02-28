# 开发者 API

spark 的 API 允许插件/模组开发者获取 spark 所记录的信息，并将它们为己所用。

推荐开发者使用本文介绍的 API，而不是硬拆内部代码。如果 API 提供的内容没有你想要的，先来问问我们，我们可能会为你添加！

## 导入 API

API 成品会发布到 Sonatype Snapshots 仓库中。

你可以通过 Gradle 或者 Maven 将它导入至你的项目，或将其用作依赖。可以根据需要添加下文的构建脚本或 pom。

:::: tabs

::: tab Maven

```HTML
<repositories>
    <repository>
        <id>sonatype-snapshots</id>
        <url>https://oss.sonatype.org/content/repositories/snapshots</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>me.lucko</groupId>
        <artifactId>spark-api</artifactId>
        <version>0.1-SNAPSHOT</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

:::

::: tab Gradle (Groovy DSL)

```Kotlin
repositories {
    maven { url 'https://oss.sonatype.org/content/repositories/snapshots' }
}

dependencies {
    compileOnly 'me.lucko:spark-api:0.1-SNAPSHOT'
}
```
:::

::: tab Gradle (Kotlin DSL)

```Kotlin
repositories {
    maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
}

dependencies {
    compileOnly("me.lucko:spark-api:0.1-SNAPSHOT")
}
```
:::

::::

### 访问 API

API 的主包为 [`me.lucko.spark.api`](https://github.com/lucko/spark/tree/master/spark-api/src/main/java/me/lucko/spark/api)，API 的主接口为 [`me.lucko.spark.api.Spark`](https://github.com/lucko/spark/blob/master/spark-api/src/main/java/me/lucko/spark/api/Spark.java)。

[`Spark`](https://github.com/lucko/spark/blob/master/spark-api/src/main/java/me/lucko/spark/api/Spark.java) 接口在拥有 ServiceManager 的平台上，被作为“服务”提供。另外，你也可以通过 [`SparkProvider`](https://github.com/lucko/spark/blob/master/spark-api/src/main/java/me/lucko/spark/api/SparkProvider.java) 的单个示例获取接口。

例如，在 Bukkit 核心上，你可以这么写：
```Java
RegisteredServiceProvider<Spark> provider = Bukkit.getServicesManager().getRegistration(Spark.class);
if (provider != null) {
    Spark spark = provider.getProvider();
}
```

在其他所有的平台上，你可以这么写：
```Java
Spark spark = SparkProvider.get();
```

**注意：** 在 spark 尚未载入的时候使用 `#get` 方法会导致抛出 `IllegalStateException` 错误！

## 使用 API

spark API 当前能提供一系列的统计数据，这些数据都是由 spark 记录/计算的。这些可以通过 [`Spark`](https://github.com/lucko/spark/blob/master/spark-api/src/main/java/me/lucko/spark/api/Spark.java) 接口获取。

### TPS

获取由 spark 计算的 TPS 数值...

```Java
// 获取 TPS 数据 (在不存在滴答的服务端上会返回 null!)
DoubleStatistic<StatisticWindow.TicksPerSecond> tps = spark.tps();

// 返回最近 10 秒 / 5 分钟的平均 TPS
double tpsLast10Secs = tps.poll(StatisticWindow.TicksPerSecond.SECONDS_10);
double tpsLast5Mins = tps.poll(StatisticWindow.TicksPerSecond.MINUTES_5);
```

### MSPT

获取由 spark 计算的 MSPT（每刻毫秒数） 数值...

```Java
// 获取 MSPT 数值 (在不支持此类计算的服务端上会返回 null!)
GenericStatistic<DoubleAverageInfo, StatisticWindow.MillisPerTick> mspt = spark.mspt();

// 返回最近一分钟内的平均值
DoubleAverageInfo msptLastMin = mspt.poll(StatisticWindow.MillisPerTick.MINUTES_1);
double msptMean = msptLastMin.mean();
double mspt95Percentile = msptLastMin.percentile95th();
```

### CPU 使用情况

获取 CPU 使用情况的信息...

```Java
// 获取 CPU 使用情况的相关信息
DoubleStatistic<StatisticWindow.CpuUsage> cpuUsage = spark.cpuSystem();

// 返回最近一分钟内的平均用量
double usagelastMin = cpuUsage.poll(StatisticWindow.CpuUsage.MINUTES_1);
```

### GC

获取 GC 活动的相关信息...

```Java
// 返回自服务器启动以来的 GC 活动情况
Map<String, GarbageCollector> gc = spark.gc();

for (GarbageCollector collector : gc.values()) {
    String name = collector.name();
    long frequency = collector.avgFrequency();
    double time = collector.avgTime();
}
```

## 另见

* 部分译名参考自中文维基：https://zh.minecraft.wiki/w/%E5%88%BB
* 对刻的相关释义参考自中文维基：https://zh.minecraft.wiki/w/%E5%88%BB