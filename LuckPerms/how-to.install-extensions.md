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

### REST API

[见此](developers.standalone-app-rest-api.md)了解更多。:)

### 弃用拓展

下述的拓展是大约 6 年前发布的（截止 2025 年 6 月算），用于减轻从 LuckPerms v4 升级至 v5 的负担。我们认为用户已经花了足够长的时间去升级，因此现在弃用它们，并不再受到支持。

* [extension-legacy-api](https://github.com/LuckPerms/extension-legacy-api)
* [extension-default-assignments](https://github.com/LuckPerms/extension-default-assignments)