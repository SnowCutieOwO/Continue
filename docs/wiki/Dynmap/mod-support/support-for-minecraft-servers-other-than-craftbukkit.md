# 非 CraftBukkit 服务端核心支持情况

Dynmap 包含对其他几种服务端的支持。最新可用版本的支持情况可在[这里](http://www.minecraftforum.net/topic/1543523-dynmap-dynamic-web-based-maps-for-minecraft/)浏览。

目前，有三种 Dynmap 平台：

* Bukkit Dynmap（<https://github.com/webbukkit/dynmap/>）
* DynmapForge（<https://github.com/webbukkit/DynmapForge/>）
* DynmapSpout（<https://github.com/webbukkit/DynmapSpout/>）

## Spigot

Bukkit Dynmap 完全支持 Spigot。

## MinecraftForge

DynmapForge 支持多个版本的 Forge。就像其他 Forge 模组一样，每个支持的版本都有自己的二进制值文件，更新 Forge 版本后也要更换 DynmapForge 的版本。不论升级还是初次安装，如下步骤都适用：

* 下载对应 MC 版本适用的 zip 压缩包。
* 解压整个文件，包括文件夹，放入服务器根目录（不是 `mods` 文件夹）。
* 若需要升级，请删除 `mods` 文件夹下旧版本的 `Dynmap-x.y.zip`。

## MCPC+

DynmapForge 模组仅支持对应版本 Forge 的 MCPC+（1.4.7+）。不支持 CraftBukkit。只需按照上述步骤安装即可。如果需要与 Bukkit 插件联动，使用它们的 API，你可以下载安装 DynmapCBBridge 模组（点击这里前往下载。这是一个 Bukkit 插件，因此必须放入 `plugins` 目录，仅支持基于 Forge 且兼容 Bukkit 的服务器（如 MCPC+ 或 BukkitForge））。

## BukkitForge

这是一个基于 Forge 端增加了 Bukkit API 兼容性的服务端，不支持 Dynmap Bukkit 版本。但 DynmapForge 支持，可通过 DynmapCBBridge 提供的 API 兼容与其他使用了 Dynmap API 的插件交互。安装步骤与 MCPC+ 相同。

## Tekkit 经典版

Dynmap Bukkit 版本支持 Tekkie 与旧版 MCPC（适用于 1.2.5，没有加号）。这些服务端能在 1.2.5 上继续运行 Bukkit 版本的 Dynmap。

## Tekkit-Lite

DynmapForge 支持 Tekkit-Lite，而 Bukkit Dynmap 不支持。安装步骤与 Forge 服务端相同。

## Spout

DynmapSpout 项目尚在开发中，支持 Spout 服务端（但目前 Spout 的持续重构导致它难以投入稳定生产环境）。在 Spout 上安装 Dynmap 与 Bukkit 类似（解压后放入 `plugins` 目录）。注意：这个项目是面向 Spout（服务端），而非 SpoutPlugin（Bukkit 插件）。SpoutPlugin 服务端支持 Bukkit 版本的 Dynmap。

## 从 Bukkit Dynmap 迁移到 Forge 的安装步骤

将现有的 Bukkit 配置迁移到 Forge 服务端（如 MCPC+ 或 BukkitForge），只需按照如下步骤：

* 将整个 `/plugins/dynmap` 文件夹（所有文件与子目录）移动到 Forge 服务器上的 `/dynmap` 文件夹中。
* 编辑 `onfiguration.txt`，将 `render-triggers` 部分的配置改为如下内容：
``` YAML
    render-triggers:
    - blockupdate
    #- blockupdate-with-id
    #- lightingupdate
    - chunkpopulate
    - chunkgenerate
    #- none
```
* 删除 `/plugins/dynmap.jar`。
* 跟随上述安装步骤，安装/升级对应的 Forge 版本 Dynmap。
