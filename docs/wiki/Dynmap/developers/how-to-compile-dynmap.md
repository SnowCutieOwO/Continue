# 通过 Maven 编译

~~Dynmap 可以使用 Maven 构建。通过 `mvn install` 命令，可以将 Dynmap 安装至项目的 Maven 仓库，用于编译其他依赖 Dynmap 的插件。基础原则是，每个依赖项目都通过 `git clone` 与 `mvn install` 构建代码。~~

请使用 Gradle。本页面已经严重过时，请见项目主页的自述文件了解详情。

Dynmap 的核心系统依赖非常少。核心用于其他框架的实现，例如 Bukkit 或 Spout。在编译适用于任意平台的实现之前，你应该按顺序克隆并编译如下项目：

* DynmapCoreAPI
  - git://github.com/webbukkit/DynmapCoreAPI.git
* DynmapCore
  - git://github.com/webbukkit/DynmapCore.git

## 面向 Bukkit 的 Dynmap

在编译面向 Bukkit 的 Dynmap 前，你需要克隆并编译如下依赖项目：

* dynmap-api

  - git://github.com/webbukkit/dynmap-api.git
dynmap
  - git://github.com/webbukkit/dynmap.git

或将如下内容复制到终端：

``` bash
git clone git://github.com/webbukkit/DynmapCoreAPI.git && (cd DynmapCoreAPI && mvn install)
git clone git://github.com/webbukkit/DynmapCore.git && (cd DynmapCore && mvn install)
git clone git://github.com/webbukkit/dynmap-api.git && (cd dynmap-api && mvn install)
git clone git://github.com/webbukkit/dynmap.git && (cd dynmap && mvn install)
```

包含 Dynmap 文件的 zip 格式压缩包 `dynmap-*-bin.zip` 就会出现在 `dynmap/target/` 中。

## 面向 Spout-Vanilla 的 Dynmap

在编译面向 Spout-Vanilla 的 Dynmap 前，你需要克隆并编译如下依赖项目：

* SpoutAPI
  - git://github.com/SpoutDev/SpoutAPI.git
* SpoutVanilla
  - git://github.com/SpoutDev/Vanilla.git
* DynmapSpout
  - git://github.com/webbukkit/DynmapSpout.git

或将如下内容复制到终端：

``` bash
git clone git://github.com/webbukkit/DynmapCoreAPI.git && (cd DynmapCoreAPI && mvn install)
git clone git://github.com/webbukkit/DynmapCore.git && (cd DynmapCore && mvn install)
git clone git://github.com/SpoutDev/SpoutAPI.git && (cd SpoutAPI && mvn install)
git clone git://github.com/SpoutDev/Vanilla.git && (cd Vanilla && mvn install)
git clone git://github.com/webbukkit/DynmapSpout.git && (cd DynmapSpout && mvn install)
```

包含 Dynmap 文件的 zip 格式压缩包 `DynmapSpout-*-bin.zip` 就会出现在 `DynmapSpout/target/` 中。