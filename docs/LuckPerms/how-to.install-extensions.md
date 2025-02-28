# 拓展

拓展是为插件“附加”功能的一种方式。拓展可以在 LuckPerms 运行的平台独立运作（如 Bukkit、Sponge 等），也可以用相同的方式在其他平台上俺咋混个。它们使用的是插件提供的本地 API。

通俗来讲，它们是“插件的插件” —— 听起来有些绕，有些烧脑 —— 但对我刚刚好！

## 安装拓展

拓展一般为 `.jar` 格式的文件。安装步骤为：

1. 进入 `/LuckPerms/` 文件夹（`config.yml` 所在的地方）
2. 创建一个叫 `extensions` 的文件夹
3. 将拓展 `.jar` 文件放入该文件夹中
4. 重启服务器。

## 官方拓展

### extension-legacy-api

* [源码](https://github.com/LuckPerms/extension-legacy-api)
* [下载](https://ci.lucko.me/job/extension-legacy-api/)

LuckPerms v5 的拓展，集成了旧版 v4 的 API。* `
这允许依赖之前版本的 LuckPerms 能继续在当前版本运行。* `
但这不是长久之计，它的存在是为了减轻用户的更新负担。开发者应当尽可能使用 v5 的 API。

#### 事件监听

只有数量有限的事件可以被监听。

当前支持的事件：

* `GroupCacheLoadEvent`
* `GroupDataRecalculateEvent`
* `NodeAddEvent`
* `NodeClearEvent`
* `NodeMutateEvent`
* `NodeRemoveEvent`
* `UserCacheLoadEvent`
* `UserDataRecalculateEvent`
* `UserDemoteEvent`
* `UserFirstLoginEvent`
* `UserLoadEvent`
* `UserPromoteEvent`
* `UserTrackEvent`

### extension-default-assignments

* [源码](https://github.com/LuckPerms/extension-default-assignments)
* [下载](https://ci.lucko.me/job/extension-default-assignments/)

LuckPerms v5 的拓展，集成了默认分配（现已移除）功能。

这允许旧系统的用户能够无感更新至更新的版本。