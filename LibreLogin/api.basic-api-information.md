# 基础 API 信息

LibreLogin 提供了一个 API，允许你将本插件按需修改。若你想做的事在 API 中毫无头绪，你可以提交一个议题，我会很快回复。

## 获取

### 添加仓库

#### Gradle（KTS）:

```Kotlin
maven("https://repo.kyngs.xyz/public")
```

#### Gradle（Groovy）

```Kotlin
maven {
    url "https://repo.kyngs.xyz/public"
}
```

#### Maven

```XML
<repository>
  <id>kyngs-repo-public</id>
  <name>Repository</name>
  <url>https://repo.kyngs.xyz/public</url>
</repository>
```

### 添加成品

**将 <版本> 替换为你想要依赖的成品版本。**[你可以在这里浏览可用**发行版**](https://repo.kyngs.xyz/#/releases/xyz/kyngs/librelogin/API)，[或者你可以在这里浏览可用的**快照**（开发构建）](https://repo.kyngs.xyz/#/snapshots/xyz/kyngs/librelogin/API)。

#### Gradle（KTS）：

```Kotlin
compileOnly("xyz.kyngs.librelogin:API:<version>")
```

#### Gradle（Groovy）：

```Kotlin
compileOnly "xyz.kyngs.librelogin:API:<version>"
```

#### Maven

```XML
<dependency>
  <groupId>xyz.kyngs.librelogin</groupId>
  <artifactId>API</artifactId>
  <version><version></version>
  <scope>provided</scope>
</dependency>
```

## 我正在为 ... 编写插件

### Paper、Purpur 等

你必须在插件的 `plugin.yml` 中声明“LibreLogin”为依赖。然后你就可以获取 API 实例：

```Java
var api = ((LibreLoginProvider<Player, World>) Bukkit.getPluginManager().getPlugin("LibreLogin")).getLibreLogin();
```

### Velocity

你必须在插件的声明中标记“LibreLogin”为依赖。然后你就可以获取 API 实例：

```Java
var api = ((LibreLoginProvider<Player, RegisteredServer>) server.getPluginManager().getPlugin("librelogin").orElseThrow().getInstance().orElseThrow()).getLibreLogin();
```

### BungeeCord、WaterFall、FlameCord 等

你必须在插件的 `plugin.yml`/`bungee.yml` 中声明“LibreLogin”为依赖。然后你就可以获取 API 实例：

```Java
var api = ((LibreLoginProvider<ProxiedPlayer, ServerInfo>) getProxy().getPluginManager().getPlugin("librelogin")).getLibreLogin();
```

### 多平台

你可以通过平台的插件管理器获取 LibreLogin 的实例。之后你需要将其调用为 `LibreLoginProvider<?, ?>`

## 用法

API 中的所有用法都有文档记载。你的 IDE 应该会帮你下载好插件的源码，你可以直接进行浏览。对 API 事件，请见[API 事件](api.api-events.md)章节。

## 警告

**如果有功能包含在代码实现却未出现在 API 中，请提交议题，我们会负责解决。**