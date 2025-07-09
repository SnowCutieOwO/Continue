# 作为依赖

若要在你的插件中使用 WorldGuard 的 API，你必须将 WorldGuard 作为依赖导入。它可作为必选或可选的前置。

## API 版本

在主流版本下（5.x、6.x、7.x），WorldGuard 的 API 非常稳定。对特定内容的弃用通常要三个月，但更一般的情况下是六个月。

API 当前支持的版本为 7.x。旧版本的 API（以及 Minecraft）不再会接收到更新提醒或是技术支持。你可以使用右上角的“版本选择”按钮来找到旧版本的文档，但是其中可能包含改动或错误。

## 构建依赖脚本

如果你正在使用 [Maven](https://maven.apache.org/) 或者 [Gradle](https://www.gradle.org/)（必须这么做！）等方式编译你的插件或模组，你就需要将 WorldGuard 添加至依赖列表。你可以在 sk89q 的 Maven 仓库中找到 WorldGuard 的构建品。

需要注意的是 WorldGuard 所使用的一些对象是来自于 WorldEdit 的。如果你需要直接使用它们，你也应当将 WorldEdit 用作编译时依赖（尽管它有可能根据你的构建配置被自动添加）。

* Maven 仓库：`https://maven.enginehub.org/repo/`
* 构建成品：`com.sk89q.worldguard:worldguard-bukkit:VERSION`（VERSION 处替换为你所需要的 WorldGuard 版本）；需要注意的是这也包含 `worldguard-code` 构建的 API。

Maven 仓库应当是全天在线的，它也是 Minecraft 历史上运行时间最长的 Maven 仓库。如果遇到问题，请参阅“获取帮助”章节。

::: info 示例：配置一个 Maven 的 pom.xml
```XML
<repositories>
    <repository>
        <id>sk89q-repo</id>
        <url>https://maven.enginehub.org/repo/</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.sk89q.worldguard</groupId>
        <artifactId>worldguard-bukkit</artifactId>
        <version>VERSION</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```
:::

::: info 示例：配置一个 Gradle 的构建脚本
```Kotlin
repositories {
    mavenCentral()
    maven { url "https://maven.enginehub.org/repo/" }
}

dependencies {
    compileOnly 'com.sk89q.worldguard:worldguard-bukkit:VERSION'
}
```
:::

## 修改 plugin.yml

首先，在 plugin.yml 下指定 WorldGuard 为“硬依赖”或“软依赖”是非常重要的，这能使 Bukkit 知道你的插件需要在 WorldGuard 之后加载；
```
name: My Plugin
version: 1.0
description: 这是我的插件!
depend: [WorldGuard]
```
如果你需要将它设置为软依赖，在 WorldGuard 存在的情况下它会先于你的插件加载，但其他情况下你的插件还是会按一般顺序加载。

## 通过自己的插件与 WorldGuard 交互

大多数 WorldGuard API 可以通过方法 `WorldGuard.getInstance()` 进行交互。
修改玩家也可以通过 `WorldGuardPlugin.inst()` 下的 `wrapPlayer` 方法来使用。见“引自 Bukkit 的对象”章节来获取更多细节。

需要注意的是，在访问 WorldGuard 的特定部分时，你必须事先保留它的内部 API。

## 软依赖关系的类路径问题

如果你正在以 WorldGuard 为赢前置，你不需要担心 WorldGuard 的类在运行时不存在的潜在情况。但是，如果你在以 WorldGuard 为软依赖，则可能需要考虑一下这个问题。

比如，当你尝试：
```Java
class MyPlugin {
    public void onEnable() {
        ProtectedCuboidRegion region = new ProtectedCuboidRegion(...);
    }
}
```
你的插件不会载入，因为 `ProtectedCuboidRegion` 不存在。插件管理器也不能调用 `onEnable()`。解决问题的一种方法是将下列代码放入一个完全不同的类中：
```Java
class RegionHolder {
    private final ProtectedCuboidRegion region;

    public RegionHolder() {
        region = new ProtectedCuboidRegion(...);
    }
}
```
在你遇到相同问题且甚至不能创建一个 `RegionHolder` 时，至少你可以从另一个类中尝试捕获错误：
```Java
class MyPlugin {
    public void onEnable() {
        try {
            new RegionHolder();
        } catch (NoClassDefFoundError e) {
            // Do something here
        }
    }
}
```
但是，这种问题也不会在所有情况中出现。链式方法的调用，总是起始于一个静态的方法调用，也可以用于防止包括其的类载入失败：
```Java
class MyPlugin {
    public void onEnable() {
        try {
            boolean result = SomeClass.staticMethod();
        } catch (NoClassDefFoundError e) {
            // Do something here
        }
    }
}
```
如果你在插件中使用了任意形式的软依赖，非常推荐进行不安装软依赖情况下的插件调试。