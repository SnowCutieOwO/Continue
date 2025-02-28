# 变量

LuckPerms 有一些变量可以被支持的插件引用。

## PlaceholderAPI

若要使用支持 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) 的 LuckPerms 变量，你需要先安装 LuckPerms 变量拓展。

若要从 clip 的云系统自动安装变量拓展的最新版本，只需输入命令 `/papi ecloud download LuckPerms`，然后输入 `/papi reload`。

若要手动安装最新版本的变量拓展，你需要：

* 在[这里](https://ci.lucko.me/job/LuckPermsPlaceholders/) 下载 `Expansion-LuckPerms.jar`。
* 将它放入 `/plugins/PlaceholderAPI/expansions/` 文件夹中。

## MVdWPlaceholderAPI

若要使用支持 MVdWPlaceholderAPI 的 LuckPerms 变量，你需要安装 LuckPerms 变量联动插件。

* 从[这里](https://ci.lucko.me/job/LuckPermsPlaceholders/)下载 `LuckPermsMVdWHook.jar`
* 将它放入 `/plugins/` 文件夹中。

## Fabric PlaceholderAPI

若要在支持 [Fabric PlaceholderAPI](https://placeholders.pb4.eu/) 的模组中使用 Fabric LuckPerms 的变量，你需要安装 LuckPerms 变量联动模组。变量格式略有不同，可以在他们文档[此处](https://placeholders.pb4.eu/user/mod-placeholders/#luckperms)查询

* 从[这里](https://ci.lucko.me/job/LuckPermsPlaceholders/) 下载 `LuckPerms-Fabric-PlaceholderAPI-Hook.jar`
* 将它放入你的 `/mods/` 文件夹中

## 变量

带有**参数**的变量，参数必须以下划线（`_`）分隔并加在变量末尾。

例如，`%luckperms_meta%` 变量需要一个 `<元数据 键>` 参数。假设参数是 *home*，那么完整的变量是 `%luckperms_meta_home%`。

| 变量名称                                    | 参数                     | 描述                                                  |
| ----------------------------------------------- | ---------------------------- | ------------------------------------------------------------ |
| `%luckperms_prefix%`                            |                              | 返回玩家的前缀                                  |
| `%luckperms_suffix%`                            |                              | 返回玩家的后缀                                   |
| `%luckperms_meta%`                              | `<元数据 键>`                 | 返回给定元数据键的单个对应值                |
| `%luckperms_meta_all%`                          | `<元数据 键>`                 | 返回给定元数据键的所有对应值           |
| `%luckperms_prefix_element%`                    | `<元素>`                  | 通过给定的“元数据组”元素定义返回一个前缀元素。更多信息请见[前缀堆叠](how-to.stack-prefixes.md) |
| `%luckperms_suffix_element%`                    | `<元素>`                  | 通过给定的“元数据组”元素定义返回一个后缀元素。更多信息请见[后缀堆叠](how-to.stack-prefixes.md) |
| `%luckperms_context%`                           | `[上下文键]` (*可选*) | 返回玩家当前的所有上下文。若给定键作为参数传入，只有给定键对应的值会被返回。 |
| `%luckperms_groups%`                            |                              | 返回玩家直接继承的权限组列表。 |
| `%luckperms_inherited_groups%`                  |                              | 返回玩家（直接或间接）继承的权限组列表。|
| `%luckperms_primary_group_name%`                |                              | 返回玩家的主权限组。              |
| `%luckperms_has_permission%`                    | `<权限>`               | 返回玩家是否实际拥有该权限（与一般的权限检查不同！）|
| `%luckperms_inherits_permission%`               | `<权限>`               | 返回玩家是否实际继承该权限（与一般的权限检查不同！） |
| `%luckperms_check_permission%`                  | `<权限>`               | 返回对给定玩家的权限检查。 |
| `%luckperms_in_group%`                          | `<权限组>`                    | 返回玩家是否为给定权限组的成员。 |
| `%luckperms_inherits_group%`                    | `<权限组>`                    | 返回玩家直接或间接继承给定权限组的状态。 |
| `%luckperms_on_track%`                          | `<路线>`                    | 返回玩家的“主权限组”是否处于该路线中（*已弃用 —— 尽可能避免主权限组，请使用下面的变量！*） |
| `%luckperms_has_groups_on_track%`               | `<路线>`                    | 返回玩家所属任何权限组是否处于该路线中。 |
| `%luckperms_highest_group_by_weight%`           |                              | 返回玩家权重最高的权限组，*不包含*间接继承自其他地方的权限组。 |
| `%luckperms_lowest_group_by_weight%`            |                              | 返回玩家权重最低的权限组，*不包含*间接继承自其他地方的权限组。 |
| `%luckperms_highest_inherited_group_by_weight%` |                              | 返回玩家权重最高的权限组，*包括*简介继承自其他地方的权限组。 |
| `%luckperms_lowest_inherited_group_by_weight%`  |                              | 返回玩家权重最低的权限组，*包括*简介继承自其他地方的权限组。 |
| `%luckperms_current_group_on_track%`            | `<路线>`                    | 若玩家处于给定路线中，返回当前权限组的名称。 |
| `%luckperms_next_group_on_track%`               | `<路线>`                    | 若玩家处于给定路线中，返回下一权限组的名称。（玩家可以通过晋升命令进入的下一个组） |
| `%luckperms_previous_group_on_track%`           | `<路线>`                    | 若玩家处于给定路线中，返回上一权限组的名称。（玩家可以通过降级命令返回的上一个组） |
| `%luckperms_first_group_on_tracks%`             | `<多个路线>`                   | 返回一个逗号分隔的路线名称，显示由玩家直接继承的权限组所属路线的首个权限组。 |
| `%luckperms_last_group_on_tracks%`              | `<多个路线>`                   | 返回一个逗号分隔的路线名称，显示由玩家直接继承的权限组所属路线的最后一个权限组。 |
| `%luckperms_expiry_time%`                       | `<权限>`               | 返回直接分配给玩家的临时权限剩余时间。 |
| `%luckperms_inherited_expiry_time%`             | `<权限>`               | 返回直接或间接分配给玩家的临时权限剩余时间。 |
| `%luckperms_group_expiry_time%`                 | `<权限组名称>`               |返回直接分配给玩家的临时权限组剩余时间。 |
| `%luckperms_inherited_group_expiry_time%`       | `<权限组名称>`               |返回直接或间接分配给玩家的临时权限组剩余时间。 |