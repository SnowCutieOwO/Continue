# 主页

Dynmap 为你的服务器添加了如谷歌地图般浏览服务器地图的功能。通过 Dynmap 内置的网页服务器，开箱即可投入使用，同时它也可以与在 Apache 等平台上运行的其他网站一并使用。Dynmap 可使用不同的渲染器绘制地图，部分注重西性能，而其他的则注重细节。

插件支持 1.14.4+ 的 Spigot 及 Forge，并支持诸如 Paper 与 SpongeForge 这样的分支。

原项目由 k-zed 为 hMod 开发。

快捷链接：[Bukkit 资源介绍帖](https://dev.bukkit.org/projects/dynmap) - [Forge 资源介绍帖](https://minecraft.curseforge.com/projects/dynmapforge) + [BlockScan](http://dynmap.us/builds/DynmapBlockScan/) - [最新构建](http://dynmap.us/builds/)

## 联系方式

* Discord 聊天群组
* Dynmap Reddit 子版块
* Minecraft Forums

## 用户教程

* 不使用内部网络服务器搭建
* 在 Linux 下搭建 Dynmap
* 在 Windows 下搭建 Dynmap
* 通过托管服务搭建 Dynmap
* Configuration.txt
  * 插件基础设置
  * 组件配置
  * 世界与模板设置
  * 高清地图配置
  * 对 Forge 模组的支持
  * 对非 Bukkit 核心的支持
* 命令
  * 通过 dmap 配置地图与世界
* 权限
  * 网页界面登录支持与权限
* 网页界面参数字段
* 使用标记
* 自定义方块设置
* 将世界数据导出为 Wavefront OBJ 格式

## 开发者教程

Dynmap 项目被分为多个部分，用于支持不同的服务器核心，使得我们的“公开 API”能解释得更清楚。需要构建的“dynmap”（Bukkit 的 Dynmap 插件）部分如下（按构建顺序排列）：

* [DynmapCoreAPI](https://github.com/webbukkit/DynmapCoreAPI) - Dynmap 全平台通用的 API：插件作者可以通过这个接口与 Dynmap 在任意平台上对接（通过调出 Dynmap 的插件实例，将其转为 “org.dynmap.DynmapCoreAPI”）。
* [DynmapCore](https://github.com/webbukkit/DynmapCore) - Dynmap 全服务端核心通用的核心：Dynmap 大部分所有网页与渲染逻辑都在此处理（我们竭尽所能）。这里的构建是无法运行的，它们会被输入至“Dynmap”的部件构建与其他地方（如“DynmapSpout”，即面向 Spout 服务端的 Dynmap）
* [dynmap-api](https://github.com/webbukkit/dynmap-api) - Dynmap 面向 Bukkit 的 API 库 - 它定义了 org.dynmap.DynmapAPI 实例，包含面向 Bukkit 的调用。与 DynmapCoreAPI 搭配（由 DynmapAPI 继承），将插件“dynmap”实例捕获并转化为 org.dynmap.DynmapAPI，并与公开接口交互。
* [dynmap](https://github.com/webbukkit/dynmap) - 这个部件才是实际构建面向 Bukkit 的 Dynmap，并只包含无法跨平台使用的代码。

[如何编译 Dynmap？](developers.how-to-compile-dynmap.md)