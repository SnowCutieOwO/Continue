# API

HuskSync API（v3）提供了更新和返回[快照数据](developers.api-v3.data-snapshot-api.md)的方法，一系列 API 事件，可用于追踪数据何时被同步或保存，一系列同步自定义数据类型的序列化注册的基础方法。

## 兼容性

[![img](https://repo.william278.net/api/badge/latest/releases/net/william278/husksync/husksync-common?color=00fb9a&name=Maven&prefix=v)](https://repo.william278.net/#/releases/net/william278/husksync/)

HuskSync API 的版本与插件发行版相同。请注意大版本更新和紧急修复可能会导致 API 产生变动，但绝不会毫无提醒。

|API 版本|HuskSync 版本|是否支持|
|---|---|---|
|v3.x|v3.0-至今|✅|
|v2.x|v2.0-v2.2.8|❌|
|v1.x|v1.0-v1.4.1|❌|

### 平台

::: info 注意
对于低于 `3.3` 的版本，HuskSync API 仅通过（位于 `net.willian278:husksync`）Bukkit 平台分发。
:::

HuskSync API 仅对下列平台开放使用：
* `bukkit` - Bukkit、Spigot、Paper 等。会向 `org.bukkit` 对象提供 Bukkit API 的事件监听器和适配器。
* `common` - 对所有平台的通用 API

### 针对旧版本

* HuskSync API 仅会分发低于 `v3.3` 的 Bukkit 模块；成品 ID 为 `net.william278:husksync` 而非 `net.william278.husksync:husksync-平台名称`。
* 低于 `v2.2.5` 的 HuskSync 通过 JitPack 分发，你需要使用 `https://jitpack.io` 仓库。

## 内容一览

1. [API 介绍](#API-介绍)
    1. [通过 Maven 安装](#11-通过-maven-安装)
    2. [通过 Gradle 安装](#12-通过-gradle-安装)
2. [将 HuskSync 导入为依赖](#2-将-husksync-导入为依赖)
3. [创建一个 API 实例类](#3-创建一个-api-实例类)
4. [检查 HuskSync 是否存在并对接](#4-检查-husksync-是否存在并对接)
5. [获取 API 实例](#4-检查-husksync-是否存在并对接)
6. [CompletableFuture 与 Optional 基础](#6-completablefuture-与-optional-基础)
7. [下一步](#7-下一步)

## API 介绍

### 1.1 通过 Maven 安装

#### Maven 安装详情

将仓库按如下格式添加至你的 `pom.xml`。你也可以在末尾指定 `/snapshots` 来获取最新版的开发构建（但不推荐）
```XML
<repositories>
    <repository>
        <id>william278.net</id>
        <url>https://repo.william278.net/releases</url>
    </repository>
</repositories>
```

将依赖按下列各式导入 `pom.xml`。请将 `VERSION` 替换为 HuskSync 的最新版本（去掉左侧的“v”）：![img](https://img.shields.io/github/v/tag/WiIIiam278/HuskSync?color=%23ffffff&label=%20&style=flat-square)

### 1.2 通过 Gradle 安装

#### Gradle 安装详情

将以依赖按如下格式导入你的 `build.gradle`。你也可以通过指定 `/snapshots` 来使用最新的开发构建版仓库（但不推荐）

```Kotlin
allprojects {
    repositories {
        maven { url 'https://repo.william278.net/releases' }
    }
}
```

按如下格式导入依赖。将 `VERSION` 替换为 HuskSync 的最新版本号（去掉左侧的“v”）：![img](https://img.shields.io/github/v/tag/WiIIiam278/HuskSync?color=%23ffffff&label=%20&style=flat-square)

```Kotlin
dependencies {
    compileOnly 'net.william278.husksync:husksync-PLATFORM:VERSION'
}
```

### 2. 将 HuskSync 导入为依赖

* 在 `plugin.yml` 中将 HuskSync 添加为 `softdepend`（若不强制依赖 HuskSync）或 `depend`（若强制依赖 HuskSync）
```YAML
name: MyPlugin
version: 1.0
main: net.william278.myplugin.MyPlugin
author: William278
description: 'A plugin that hooks with the HuskSync API!'
softdepend: # 或者在这里用 'depend' 代替，取决于你想将 HuskSync 作为软依赖或硬依赖
  - HuskSync
```

## 3. 创建一个 API 实例类

* 除非你的插件完全依赖于 HuskSync，否则不应将 HuskSync API 直接在主类中调用，如果 HuskSync 尚未安装，在这种情况下就会抛出 `ClassNotFoundException` 错误。

```Java
public class HuskSyncAPIHook {

    public HuskSyncAPIHook() {
        // API 交互相关代码
    }

}
```

## 4. 检查 HuskSync 是否存在并对接

* 在与 API 对接类进行交互前确认是否安装了 HuskSync

```Java
public class MyPlugin extends JavaPlugin {

    public HuskSyncAPIHook huskSyncAPIHook;

    @Override
    public void onEnable() {
        if (Bukkit.getPluginManager().getPlugin("HuskSync") != null) {
            this.huskSyncAPIHook = new HuskSyncAPIHook();
        }
    }
}
```

## 5. 获取 API 实例

* 你现在可以通过调用 `HuskSyncAPI#getInstance()` 方法获取 API 实例
* 若是在 Bukkit 平台，你也可以调用 `BukkitHuskSyncAPI#getBukkitInstance()` 来获取 Bukkit 平台的 API 实例（推荐）

```Java
import net.william278.husksync.api.HuskSyncAPI;

public class HuskSyncAPIHook {

    private final HuskSyncAPI huskSyncAPI;

    public HuskSyncAPIHook() {
        this.huskSyncAPI = HuskSyncAPI.getInstance();
    }

}
```

## 6. CompletableFuture 与 Optional 基础

* HuskSync 的 API 经常会用到 `CompletableFuture` 与 `Optional`。
* `CompletableFuture` 是一种异步回调机制。方法会异步处理，数据则会在它被请求时返回。之后，使用 `CompletableFuture#thenAccept(data -> {})` 来对获取的 `data` 进行你需要的处理，以此避免卡顿。
* `Optional` 是可避免返回 null 的数据表示。你可通过 `Optional#isEmpty()`（若你的调用无可用返回数据则会被 API 返回）。若该可选内容包含数据，则你可以通过 `Optional#get()` 方法获取。

::: warning
你不应在 HuskSyncAPI 的 future 异步任务上调用 `#join()` 方法，这些任务是在服务器上异步处理的，如果你试着锁定主线程并处理它们，可能导致线程死锁并导致服务器崩溃。
:::

## 7. 下一步

现在你已经把所有东西都准备妥当了，你可以开始与 HuskSync API 进行交互了！

* [数据快照 API](developers.api-v3.data-snapshot-api.md) —— 获取、编辑、创建与删除数据快照并更新玩家
* [自定义数据 API](developers.api-v3.custom-data-api.md) —— 注册自定义数据类型以使得你的插件数据能被 HuskSync 同步
* [API 事件](developers.api-v3.api-events.md) —— 监听、取消与修改异步事件的数据结果
