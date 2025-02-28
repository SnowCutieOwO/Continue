# 从 v4 升级至 v5

从 v4 升级至 v5 非常重要 —— 一些重点是：

* 集成了新的开发者 API。
* 引入了全新版本的网页编辑器。
* 一些功能被完全重写，变得更易于理解与维护。

在这个更新到来之时我们还需要做很多事 —— 但为了用户能用这些新特性做出想要的功能，我们决定将其发布。

## 在更新前...

**请务必务必务必备份你的数据。**

## API 兼容性

若你有任何正在使用旧版 LuckPerms API 的插件，这些插件可能会在之后的更新中变得不兼容。

你有两个选择：

1. 让作者更新到新版的 API。（推荐）
2. 安装 extension-legacy-api 拓展。

### 安装拓展

1. 打开 `/LuckPerms/` 文件夹（一般位于 `/plugins/LuckPerms`）。
2. 在其中创建一个名为 `extensions` 的文件夹。
3. 下载 [`extension-legacy-api.jar`](https://ci.lucko.me/job/extension-legacy-api/lastSuccessfulBuild/artifact/build/libs/extension-legacy-api-1.0.0.jar) 并将其放入 extensions 文件夹。
4. 重启服务器。

## 其他

若你之前正在使用“默认分配”（配置文件的最后一部分），你需要[安装 `extension-default-assignments` 拓展](how-to.install-extensions.md)，或者考虑使用其他功能实现。
