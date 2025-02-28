# 命令

插件的主命令可以在 `config.yml` 中修改。默认情况下为 `/excellentcrates` 或者 `/cratess`。

## 参数

* `-s` - 命令静默执行（目标玩家不会收到消息）。
* `-f` - 绕过限制执行。

## 插件命令


<el-button type="warning" disabled><> 必选参数</el-button> <el-button type="success" disabled>[] 可选参数</el-button>

* `/crates [help]` - 列出可用的插件命令。
* `/crates reload` - 重载插件。
* `/crates key` - 钥匙管理相关命令。
  * `/crates key [help]` - 列出所有钥匙相关的子命令。
  * `/crates key drop <钥匙名称> <x> <y> <z> <世界名称>` - 在指定世界的指定位置生成一个钥匙物品。
  * `/crates key inspect [玩家名称]` - 浏览指定玩家拥有的虚拟钥匙。
  * `/crates key giveall <钥匙名称> [数量] [-s]` - 向在线所有玩家给予钥匙。玩家必须拥有 [`include.giveall`](permissions.md) 权限！
  * `/crates key give <玩家名称> <钥匙名称> [数量] [-s]` - 向指定玩家给予钥匙。
  * `/crates key set <玩家名称> <钥匙名称> [数量] [-s]` - 将指定玩家的钥匙数量设置为固定值。
  * `/crates key take <玩家名称> <钥匙名称> [数量] [-s]` - 从指定玩家处拿走钥匙。
* `/crates drop <宝箱名称> <x> <y> <z> [世界名称]` - 在指定世界的指定位置生成宝箱物品。
* `/crates editor` - 打开编辑器界面。
* `/crates give <玩家名称> <宝箱名称> [数量] [-s]`
* `/crates open <宝箱名称>` - 打开一个宝箱。
* `/crates openfor <玩家名称> <宝箱名称> [-s] [-f]` - 强制某个玩家打开宝箱。
* `/crates preview <宝箱名称> [玩家名称]` - 打开宝箱预览界面。
* `/crates resetcooldown <玩家名称> <宝箱名称>` - 为指定玩家重置开箱冷却。