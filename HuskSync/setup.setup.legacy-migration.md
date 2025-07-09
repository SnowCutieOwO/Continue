# 从旧版迁移
该教程会指导你将 1.4.x 版本的 HuskSync 数据迁移至 2.x 版本。

## 需求

* 带有 HuskSync 1.4.x 版本数据的 MySQL 数据库；
  * 暂不支持从 SQLite 转化数据，因为 HuskSync 2.x 版本需要 MySQL 数据库，且不支持 SQLite。多有不便敬请谅解；
  * 若正在使用 1.3.x 或更低版本的 HuskSync，建议在升级至 2.x 版本前先按照操作升级至 1.4.x 版本。

## 迁移步骤

### 1. 将所有子服的 HuskSync 卸载

* 关闭你所有的群组服和子服；
* 删除子服下 `~/plugins/` 的 jar 插件；
* 同时删除群组服下 `~/plugins/` 的插件。HuskSync 的 2.x 版本不再需要安装在群组服上；
* 直接删除（或先备份再删除）所有的配置文件夹（`~/plugins/HuskSync`）。HuskSync 3.x 版本有新的 `config.yml`、`message-xx-xx.yml` 和 `server.yml` 文件。

### 2. 在子服上安装 HuskSync 的 3.x 版本

* 所有的 HuskSync 的 3.x 版本只需要安装在你的子服上，而无需安装在群组服上；
* 详细请参照开头的[安装教程](setup.setup.md)章节。

### 3. 设置迁移

* 确保服务器没有玩家并按步骤正确安装 HuskSync 3.x 版本；
* 在子服控制台输入命令 `husksync migrate legacy`；
* 仔细阅读迁移配置的指导信息。在大多数情况下，你无需改动配置文本的设置，如果你需要更改，请使用命令 `husksync migrate legacy set <设置> <值>`；
* 迁移将会*从*你在控制台中指定的数据库迁移*至*你在 `config.yml` 中指定的数据库。若你要从多个群组中迁移数据，请确保数据迁移的数据库一一对应。

### 4. 开始迁移

* 输入命令 `husksync migrate legacy start` 来开始迁移程序。这会消耗一些时间，具体时长取决于迁移数据量。

### 5. 确保数据迁移成功

* 数据迁移完毕之后，HuskSync 将会在控制台发出提醒。若要验证数据迁移是否成功，可以进入游戏，输入命令 `/userdata list <玩家名称>`，检查数据是否因 `legacy migration` 原因而转化；
* 你可以删除数据库中的旧数据表。确保你删除了原数据表而不是转化后的数据表。默认情况下，*新的*数据表名称为 `husksync_users` 和 `husksync_user_data`，而*旧版本*数据表名称为 `husksync_players` 和 `husksync_data`，具体情况视配置文本设置而定。
