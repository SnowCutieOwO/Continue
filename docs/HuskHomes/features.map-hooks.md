# 地图插件联动

HuskHomes 支持将家传送点显示在服务器的网络地图上。下列地图插件支持显示此类传送点：

* [Dynmap](https://github.com/webbukkit/dynmap)
* [BlueMap](https://github.com/BlueMap-Minecraft/BlueMap)
* [Pl3xMap](https://github.com/BillyGalbreath/Pl3xMap)（仅 1.19.4+ 的 Paper 服务端）

若要启用地图插件的联动支持，你需要在配置文件 `config.yml` 下的 `map_hook` 位置，将 `enabled` 项设置为 `true`。你也可以自由设置是否将公共家传送点或地标传送点显示在地图上，或是二者同时显示。

## Dynmap

若要启用 Dynamp 支持，请确保 config.yml 下的 `map_hook` 启用，并且服务器上安装了最新版本的 Dynmap。安装之后，重启你的服务器，公共家传送点和地标传送点就会显示在你的地图上。

你可以点击传送点标志来显示该传送点的详细信息。

## BlueMap

若要启用 BlueMap 支持，请确保 config.yml 下的 `map_hook` 启用，并且服务器上安装了最新版本的 BlueMap。安装之后，重启你的服务器，公共家传送点和地标传送点就会显示在你的地图上。

## Pl3xMap

若要启用 Pl3xMap 支持，请确保 config.yml 下的 `map_hook` 启用，并且服务器上安装了最新版本的 Pl3xMap，且你使用的是 1.19.4+ 的 Paper 服务端。安装之后，重启你的服务器，公共家传送点和地标传送点就会显示在你的地图上。

你可以点击传送点标志来显示该传送点的详细信息。