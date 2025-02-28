# API

HuskHomes API 提供了一些用于获取、编辑和更新玩家设置的家和地标传送点的方法，同时也包含了创建和执行（跨服）传送的功能。

API 通过 Maven 在 [repo.william278.net](https://repo.william278.net/#/releases/net/william278/huskhomes/) 上分发，可通过任何 Mavem、Gradle 等项目导入。本插件的 JavaDocs 可在[此处](https://repo.william278.net/javadoc/releases/net/william278/huskhomes/latest)浏览。

## 兼容性

[![img]https://repo.william278.net/api/badge/latest/releases/net/william278/huskhomes?color=00fb9a&name=Maven&prefix=v](https://repo.william278.net/#/releases/net/william278/huskhomes/)

为保持一致及方便使用，HuskHomes 的 API 版本与插件本身同步。但请注意次要的更新补丁可能导致 API 的变动，但绝不会在没有提醒的情况下对 API 进行大幅度更新。

|API 版本|HuskHomes 版本|是否支持|
|:-:|:-:|:-:|
|v4.x|*v4.0—当前版本*|✅|
|v3.x|*v3.0—v3.2.1*|❌|
|v2.x|*v2.0—v2.11.2*|❌|
|v1.x|*v1.5—v1.5.11*|❌|

### 平台

::: tip 提示
对于低于 `v4.6` 的版本，HuskHomes 仅通过 Bukkit 平台分发（`net.william278:huskhomes`）
:::

HuskHomes API 在如下平台可用：

* `bukkit` - Bukkit、Spigot、Paper 等提供 Bukkit API 监听器与 `org.bukkit` 对象的适配器。
* `fabric` - Fabric、Quilt 等提供了 Fabric API 回调与 `net.minecraft` 对象的适配器。
* `sponge` - Sponge 等提供了 Sponge API 事件的平台。
* `common` - 全平台可用的通用 API。

#### 针对旧版本

HuskHomes 4.3.1 之前的版本发布在 [JitPack](https://jitpack.io/#net.william278/HuskHomes2)，你需要使用 `https://jitpack.io` 仓库链接来代替。

## 目录

1. [API 介绍](#api-介绍)
    1. [使用 Maven 导入](#11-使用-maven-导入)
    2. [使用 Gradle 导入](#11-使用-gradle-导入)
2. [将 HuskHomes 作为依赖导入](#2-将-huskhomes-作为依赖导入)
3. [下一步](#3-下一步)

## API 介绍

### 1.1 使用 Maven 导入

#### Maven 导入信息

将仓库按如下代导入至你的 `pom.xml` 文件。你也可以指定 `/snapshots` 来使用包含最新开发构建的仓库。

```XML
<repositories>
    <repository>
        <id>william278.net</id>
        <url>https://repo.william278.net/releases</url>
    </repository>
</repositories>
```
将依赖按如下代码导入至你的 `pom.xml` 文件。将 `VERSION` 处替换为 HuskHomes 最新的版本号（去除字母 v）：![img](https://img.shields.io/github/v/tag/WiIIiam278/HuskHomes?color=%23ffffff&label=%20&style=flat-square)。需要注意的是对于 Fabric，你还需要在版本号后添加 Minecraft 的版本号（如 `3.6.1+1.20.1`）

```XML
<dependency>
    <groupId>net.william278.huskhomes</groupId>
    <artifactId>huskhomes-PLATFORM</artifactId>
    <version>VERSION</version>
    <scope>provided</scope>
</dependency>
```

### 1.1 使用 Gradle 导入

#### Gradle 安装信息

将依赖按如下代码添加至你的 `build.gradle`。你也可以指定 `/snapshots` 来使用包含最新开发构建的仓库。需要注意的是对于 Fabric，你还需要在版本号后添加 Minecraft 的版本号（如 `3.6.1+1.20.1`）
```Kotlin
allprojects {
    repositories {
        maven { url 'https://repo.william278.net/releases' }
    }
}
```
将依赖按如下代码导入至你的文件。将 `VERSION` 处替换为 HuskHomes 最新的版本号（去除字母 v）：![img](https://img.shields.io/github/v/tag/WiIIiam278/HuskHomes?color=%23ffffff&label=%20&style=flat-square)
```Kotlin
dependencies {
    compileOnly 'net.william278:huskhomes:VERSION'
}
```

### 2. 将 HuskHomes 作为依赖导入

将 HuskHomes 添加至你的插件中 `plugins.yml` 的 `softdepend`（作软依赖，即不强制要求安装 HuskHomes ）或 `depend`（作硬依赖，即强制要求安装 HuskHomes）下。
```YAML
name: MyPlugin
version: 1.0
main: net.william278.myplugin.MyPlugin
author: William278
description: 'A plugin that hooks with the HuskHomes API!'
softdepend: # 或在这里使用 'depend' 将其设置为硬依赖
  - HuskHomes
```
  
### 3. 下一步

现在一切都已准备妥当，你可以着手使用 HuskHomes API 了！

* [API 示例](developers.api.api-examples.md)
* [API 事件](developers.api.api-events.md)