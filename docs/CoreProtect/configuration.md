# 配置文件

CoreProtect 的配置文件位于 `CoreProtect` 文件夹下的 `config.yml`。

## 分世界配置

如果你需要为指定世界修改记录设置，只需按如下步骤即可：

1. 复制 `config.yml` 文件，改为指定世界的名称（如，`world_nether.yml`）。
2. 在新文件中，按需修改记录设置。
3. 重启服务器或在游戏内输入 `/co reload` 以应用改动。

二级配置文件会覆盖 `config.yml` 中的值。二级配置中未设置的值会使用 `config.yml` 设置的值。

### 示例

* 如果你需要禁用末地世界的所有记录，只需将 `config.yml` 复制并改名为 `world_the_end.yml`（匹配对应世界的文件夹名称）。然后，在新文件中将所有记录设置关闭即可。
* 如果你只需要禁用下界的实体死亡记录而保留其他记录，则只需创建一个 `world_nether.yml` 文件并添加 `rollback-entities: false` 即可。

## 禁用记录

若要禁用指定玩家、方块或命令的记录，只需按如下步骤即可：

1. 在 CoreProtect 插件文件夹中，创建一个名为 `blacklist.txt` 的文件。
2. 输入需要禁用记录的玩家（或命令）名称（每行一条玩家名称）。
3. 重启服务器或在游戏内输入 `/co reload` 以应用改动。

这可以禁用非玩家的记录，如 “#creeper”。例如，如果你需要禁用玩家“Notch”的 TNT 爆炸、石头方块以及“/help”命令的记录，那么 `blacklist.txt` 需要写作如下格式：

``` txt
Notch
#tnt
/help
minecraft:stone
```

*需要注意的是，只有 CoreProtect 23+ 才支持禁用方块记录，且需要一并输入命名空间。例如，若需要禁用泥土，则你必须将其写成“minecraft:dirt”。*