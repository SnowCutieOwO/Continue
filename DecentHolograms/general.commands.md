# ⌨️ 命令
DecentHolograms 提供的所有命令。

DecentHolograms 提供了一个使用简单的命令交互界面，允许在不修改配置文件的情况下编辑悬浮字的大多数内容。与此同时，所有的命令都支持 TAB 键补全，进一步提升了使用命令的快捷程度。

**你可以通过下列指令浏览所有命令：**

* `/dh help` - 全局帮助。
* `/dh holograms help` - 悬浮字相关帮助。
* `/dh lines help` - 悬浮字行相关帮助。
* `/dh features help` - 悬浮字功能相关帮助。

## 参数
括号只是用于标注参数的必要性，你最终输入的命令不需要带着它们！

|括号种类|参数意义|
|---|---|
|尖角括号“`<>`”|必须填入的参数。|
|方括号“`[]`”|可选填入的参数。|
|花括号“`{}`”|可能填入的值的列举，用 `|` 分隔。|

## 别称

DecentHolograms 由少量的主命令和较多的子命令构成。若要让悬浮字的编辑变得更快捷，我们添加了一些命令的等价用法，使之更为方便。这些等价用法在帮助信息和 TAB 补全中苏处可见，一些重要的等价用法会在下文介绍。

|类型|（子）命令名称|等价用法|
|---|---|---|
|主命令|/decentholograms|/holograms、/hologram、/holo、/dh|
|悬浮字命令|holograms|hologram、holo、h|
|悬浮字行命令|lines|line、l|
|点击操作命令|features|feature、f|
|悬浮字页命令|lines|page、p|

::: info 示例
为了简化这个命令：
```
/decentholograms holograms create demo
```
你可以将它简写成：
```
/dh h c demo
```
:::

## 权限

DecentHolograms 提供了一些你可使用的权限。

|权限|描述|
|---|---|
|`dh.default`|允许使用 `/decentholograms` 命令（仅可显示插件信息）与 [`/dh version`](general.commands.general.md#dh-version)。|
|`dh.admin`|允许使用插件所有命令与子命令。|
|`dh.command`|与 `dh.admin` 相同，允许使用插件所有命令与子命令。|
|`dh.command.<命令>`|允许使用插件的指定命令。如 `dh.command.version` 允许使用 [`/dh version`](general.commands.general.md#dh-version)|
|`dh.command.<命令>.<子命令>`|允许使用插件的指定子命令。如 `dh.command.holograms.create` 允许使用 [`/dh holograms create ...`](general.commands.hologram.md#dh-h-create-名称--l世界名称xyz-内容)|