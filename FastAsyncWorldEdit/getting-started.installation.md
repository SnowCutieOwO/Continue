# 安装

## 插件安装

### 首次安装

1. [下载插件](https://www.spigotmc.org/resources/13932)。
2. 将得到的“FastAsyncWorldEdit.jar”文件放入 `plugins` 文件夹。
3. 重启服务器，FAWE 会生成所有必要的文件。

::: info 

6.0.0 或更高版本至少需要 Java 17。

:::

::: warning

请不要安装 WorldEdit！FAWE 可**直接替换**。

:::

## 第三方插件支持

### 区域保护插件

如下区域保护插件能够兼容本插件。部分插件可能未在此列出：

* [FactionsUUID](https://www.spigotmc.org/resources/1035)
* [GriefDefender](https://www.spigotmc.org/resources/68900)
* [GriefPrevention](https://www.spigotmc.org/resources/1884)
* [PlotSquared](https://www.spigotmc.org/resources/77506)
* [Towny](https://www.spigotmc.org/resources/72694)
* [WorldGuard](https://dev.bukkit.org/projects/worldguard)

::: info

可以通过配置或 `/wea` 命令或 `fawe.bypass` 权限禁用。

:::

### 其他插件

我们也提供了一个异步版本的 VoxelSniper，以使其与 FAWE 兼容：[FastAsyncVoxelSniper](https://dev.bukkit.org/projects/favs)。

## 记录与回滚

在 `config.yml` 中启用 `use-disk` 与 `use-database` 即可使用 FAWE 内置的记录/回滚功能。

::: info

可以放心地将 FAWE 回滚功能开放给玩家使用。若要绕过日志记录，请使用命令 `//fast`。

:::