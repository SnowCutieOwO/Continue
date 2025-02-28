# MPDB 数据迁移
该教程将会引导你将 MySQLPlayerDataBridge（MPDB） 插件的数据迁移至 HuskSync 2.x。

::: warning
请注意，由于 MPDB 的更新，HuskSync 仅支持从 MySQLPlayerDataBase `<= 4.9.2` 的版本迁移。对未来版本的支持还在更新中。
:::

## 需求

* *安装了* MySQLPlayerDataBridge 的 Spigot 子服。

## 迁移教程

### 1. 在所有的子服上安装 HuskSync 2.x

* 下载并在所有的子服上安装 HuskSync。先不要急着卸载 MySQLPlayerDataBridge；
* 按照章节开头的教程安装插件；
* 完成后，重启你的服务器。

### 2. 配置迁移

* 确保服务器没有玩家并按步骤正确安装 HuskSync 2.x 版本；
* 请使用子服的控制台输入命令 `husksync migrate mpdb`。若 MPDB 迁移不可用，请确保 MySQLPlayerDataBridge 仍然安装着；
* 通过下列命令按需修改迁移设置：`husksync migrate mpdb set <设置> <值>`；
* 请注意数据将会*从*你在上述命令中指定的数据库迁移*至* `config.yml` 中设置的数据库。

### 3. 开始迁移

* 输入命令 `husksync migrate legacy start` 来开始迁移程序。这会消耗一些时间，具体时长取决于迁移数据量。

### 4. 卸载 MySQLPlayerDataBridge

* 迁移完毕后，HuskSync 将会在控制台弹出消息，提示迁移完成；
* 关闭所有子服，并删除每个子服的 MySQLPlayerDataBridge jar 文件；
* 重启你的所有子服。

### 5. 确保数据迁移成功

* 若要验证数据迁移是否成功，可以进入游戏，输入命令 `/userdata list <玩家名称>`，检查数据是否因 `mpdb_migration` 原因而转化；
* 你可以删除数据库中的旧数据表。确保你删除了原数据表而不是转化后的数据表。
