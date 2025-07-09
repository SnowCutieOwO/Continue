# 开发者 API

### 介绍

LuckPerms 有一整套供开发者使用的 API，允许其他插件能够读取 LuckPerms 的数据，并简单地让 LuckPerms 与现有的插件与系统深入交互。

### 版本

API 使用的是语义化版本号，也就是说在不向前兼容的版本出现后，大版本号就会增加。至少你可以确保你的集成能在小版本间通用。

当前的 API 版本为 `5.4`.

* LuckPerms 的 API 包为 `net.luckperms.api`
* JavaDocs 在[标准 JavaDoc](https://javadoc.io/doc/net.luckperms/api/latest/)或 API [源码](https://github.com/LuckPerms/LuckPerms/tree/master/api/src/main/java/net/luckperms/api)中均可查询。

### 更新日志

* `2.x` 版本，API 首次发布。
* `3.x`（2017 年 2 月 19 日）引入了不向前兼容的内容。[[更新日志](https://gist.github.com/lucko/fdf6ae4b2d9e466d8103dd9c68e5db9e)]
* `4.x`（2017 年 11 月 7 日）引入了不向前兼容的内容。[[更新日志](https://gist.github.com/lucko/34c5c3c52ad80f8541395a096a937e91)]
* `5.x` 版本对 API 进行了完全重写。同时加入了桥接工具以维持与旧版本 API 的兼容性。

## 快速开始

* [将 LuckPerms 导入工程](#将-luckperms-导入工程)
    * [Maven](#maven)
    * [Gradle](#gradle)
    * [手动](#手动)
* [获取 API 实例](#获取-api-实例)
    * [通过 Bukkit 的 ServicesManager](#通过-bukkit-的-servicesmanager)
    * [通过 Sponge 的 ServicesManager](#通过-sponge-的-servicesmanager)
    * [单例引入](#单例引入)
* [实用信息](#实用信息)
    * [线程安全](#线程安全)
    * [不可变性](#不可变性)
    * [阻止操作](#阻止操作)
    * [使用 CompletableFutures](#使用-completablefutures)
    * [异步事件&回调](#异步事件回调)

### 将 LuckPerms 导入工程

API 成品可以在 [Maven 中心](http://central.sonatype.org/)的仓库中找到。

#### Maven

如果你正在使用 Maven，将这些内容添加至 POM 的 `dependencies` 部分即可。

```XML
<dependencies>
    <dependency>
        <groupId>net.luckperms</groupId>
        <artifactId>api</artifactId>
        <version>5.4</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

#### Gradle

若你正在使用 Gradle，请将这些内容放入你的构建脚本中。

##### Groovy DSL：

```Kotlin
repositories {
    mavenCentral()
}

dependencies {
    compileOnly 'net.luckperms:api:5.4'
}
```

##### Kotlin DSL：

```Kotlin
repositories {
    mavenCentral()
}

dependencies {
    compileOnly("net.luckperms:api:5.4")
}
```

#### 手动

如果你想要将 API 依赖手动导入，你可以通过下列方式获取 jar：

1. 进入 [`https://repo1.maven.org/maven2/net/luckperms/api/`](https://repo1.maven.org/maven2/net/luckperms/api/)
2. 选择你需要使用的版本
3. 下载 `api-x-x.jar` 文件

### 获取 API 实例

API 示例的根为 `LuckPerms`，在对 API 做任何事之前都需要先生成一个 API 实例。

它可以通过许多方式产生。

#### 通过 Bukkit 的 ServicesManager

插件启用后，Bukkit 的 ServicesManager 会提供一个 `LuckPerms` 的实例。（只在 Bukkit 上有效！）

```Java
RegisteredServiceProvider<LuckPerms> provider = Bukkit.getServicesManager().getRegistration(LuckPerms.class);
if (provider != null) {
    LuckPerms api = provider.getProvider();
}
```

#### 通过 Sponge 的 ServicesManager

插件启用后，Sponge 的 ServicesManager 会提供一个 `LuckPerms` 的实例。（只在 Sponge 上有效！）

```Java
Optional<ProviderRegistration<LuckPerms>> provider = Sponge.getServiceManager().getRegistration(LuckPerms.class);
if (provider.isPresent()) {
    LuckPerms api = provider.get().getProvider();
}
```

#### 单例引入

插件启用后，`LuckPermsProvider` 会提供一个 `LuckPerms` 的实例。（全平台通用）
**注意：**若 API 未载入，则这个方法会抛出一个 `IllegalStateException`。

```Java
LuckPerms api = LuckPermsProvider.get();
```

### 实用信息

在你将 API 类添加至你的项目并生成了一个 `LuckPerms` 的实例之后，你可以开始使用 API 了。但是，在你进一步探索之前，我们希望你阅读并了解下面的信息。

#### 线程安全

* 所有 LuckPerms 的示例都是对线程安全的。你可以以异步定时任务的形式（或从其他线程）与 API 实例交互
* 这也包括在 Bukkit/Bungee/Sponge 的权限查询方法。它们可以在 LuckPerms 用作权限插件时被安全地异步调用。

#### 不可变性

* 在方法从 Java 集合框架返回类的情况下，除非另有说明，否则默认返回的方法始终不可变。（JavaDoc 有详细说明）
* 这表示你不能对已经返回的任何集合进行修改，且这些集合只是表示方法调用时返回数据的准确表示。

#### 阻止操作

* 一些方法不对“主线程友好”，这表示它们如果从 Minecraft 服务器的主线程调用，服务器就会卡顿。
* 这是因为很多方法涉及了与文件系统或网络有关的 I/O 内容。
* 大多数情况下，方法均会返回 [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html)。
* 这些对象一开始对某些用户而言可能非常复杂 —— 所以在尝试使用之前对它们有一个基本的了解很重要。
* 一般来讲，非常建议尽可能在与 API 交互时使用异步任务。一些方法不会返回异步对象，但仍可能会参与一些复杂的计算。

#### 使用 CompletableFutures

这是一个简短的教程。若你想要了解更多，请阅读 JavaDoc 的 [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html) 与 [CompletionStage](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletionStage.html) 部分。

为了便于解释，我们从 `ActionLogger` 类中拿出这个方法：

```Java
CompletableFuture<ActionLog> getLog();
```

在调用方法后，我们得到了一个 `CompletableFuture<ActionLog>` —— 我们想要的对象是 `ActionLog`。`CompletableFuture` 表示的是某个计算的结果（也就是说获取 ActionLog 的计算），并包含了获取 `ActionLog` 对象的方法。

如果我们的方法调用已经是异步（如果我们调用的方法来自于异步定时任务），那么我们就可以完全以异步对象将其去掉。

```Java
/*
  Calling this method "requests" an ActionLog from the API.
  
  However, it's unlikely that the log will be available immediately...
  We need to wait for it to be supplied.
*/
CompletableFuture<ActionLog> logFuture = actionLogger.getLog();

/*
  Since we're already on an async thread, it doesn't matter how long we
  have to wait for the elusive Log to show up.
  
  The #join method will block - and wait until the Log has been supplied,
  and then return it.
  
  If for whatever reason the process to obtain a ActionLog threw an exception,
  this method will rethrow an the same exception wrapped in a CompletionException
*/
ActionLog log = logFuture.join();
```

其他方法是使用对 CompletableFuture 使用 `#join` 来注册一个回调，使得在 `Log` 产生时执行相应内容。

若我们需要在服务器主线程上使用实例，那么服务器主线程上会产生一个特殊的任务执行器传递给回调。

```Java
// Create an executor that will run our callback on the server thread.
Executor executor = runnable -> Bukkit.getScheduler().runTask(plugin, runnable);

// Register a callback with the future.
logFuture.whenCompleteAsync(new BiConsumer<ActionLog, Throwable>() { // can be reduced to a lambda, I've left it as an anonymous class for clarity
    @Override
    public void accept(ActionLog log, Throwable exception) {
        if (exception != null) {
            // There was some error whilst getting the log.
            return;
        }

        // Use the log for something...
    }
}, executor);
```

如果你不关心报错，那么这个还可以进一步简化：

```Java
logFuture.thenAcceptAsync(log -> { /* Use the log for something */ }, executor);
```

CompletableFuture 类一开始用起来可能会相当复杂（在 Java 中它还是个比较年轻的 API！），但它是封装异步计算的好方法，且在 Minecraft 的角度看来，它不会因等待超长的 I/O 调用而堵塞主线程。

#### 异步事件&回调

* LuckPerms 的绝大部分工作都是在非服务器主线程上以异步任务的方式完成的。
* 在此前提下，还要去异步调用 LuckPerms 的想法会很好笑 —— 这表示，在没有错误的情况下，所有事件监听器都是异步调用的。

需要注意的是，Bukkit、Sponge 和 Minecraft 服务器的许多部分都不对线程友好，且应只从服务器线程方面与之交互。若你需要在 LuckPerms 的事件监听器或回调中使用来自 Bukkit 或 Sponge 的方法，你需要用计划表来执行操作。