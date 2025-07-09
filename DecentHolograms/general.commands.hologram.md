# 悬浮字
悬浮字的通用用法与编辑功能

## 参数
括号只是用于标注参数的必要性，你最终输入的命令不需要带着它们！

|括号种类|参数意义|
|---|---|
|尖角括号“`<>`”|必须填入的参数。|
|方括号“`[]`”|可选填入的参数。|
|花括号“`{}`”|可能填入的值的列举，用 `|` 分隔。|

## 命令

**别称：**`hologram`、`holo`、`h`
**权限：**`dh.command.holograms`

::: info 命令帮助
可输入如下命令来查看所有可用的子命令：
```
/dh h help
```
:::

### `/dh h addflag <悬浮字> <标志>`

**权限：**`dh.command.holograms.addflag`

向指定悬浮字添加标志。

* `<悬浮字>` - 悬浮字的名称。
* `<标志>` - 添加的[标志](general.flags.md)。

### `/dh h align <悬浮字> {X|Y|Z|XZ|FACING} <其他悬浮字>`

**权限：**`dh.command.holograms.align`

将指定悬浮字移动到其他悬浮字按特定轴对齐的位置上。

* `<悬浮字>` - 悬浮字的名字。
* `{X|Y|Z|XZ|FACING}` - 将悬浮字按 X、Y、Z 或 XZ 轴（平面）与 `<其他悬浮字>` 对齐，或将面朝角度与 `<其他悬浮字>` 同步。
* `<其他悬浮字>` - 其他悬浮字的名称。

### `/dh h center <悬浮字>`

**权限：**`dh.command.holograms.center`

将悬浮字中心水平移动到当前所在方块正中央。

* `<悬浮字>` - 悬浮字的名称。

### `/dh h clone <悬浮字> <名称> [临时] [-l:<世界名称>:<x>:<y>:<z>]`

**别称：**`copy`

**权限：**`dh.command.holograms.clone`

复制已有悬浮字。

* `<悬浮字>` - 被复制的悬浮字名称。
* `<名称>` - 新复制的悬浮字名称。
* `[临时]` - 可选布尔值（填 true / false），表示复制的悬浮字是否为临时存在（不会保存至文件）。默认为 `false`。
* `[-l:<世界名称>:<x>:<y>:<z>]` - 可选的位置参数，允许你将复制的悬浮字放在指定世界的位置。这个参数可以让控制台执行这个命令。

::: info 示例
```
/dh h clone test test_clone
/dh h clone test test_clone true
/dh h clone test test_clone -l:world:0:100:0
/dh h clone test test_clone true -l:world:0:100:0
```
:::

### `/dh h create <名称> [-l:<世界名称>:<x>:<y>:<z>] [内容]`

**别称：**`create`、`c`

**权限：**`dh.command.holograms.create`

创建新的悬浮字。

* `<名称>` - 创建悬浮字的名称。
* `[-l:<世界名称>:<x>:<y>:<z>]` - 可选的位置参数，允许你指定悬浮字生成的位置。这个参数可以让控制台执行这个命令。
* `[内容]` - 悬浮字第一行的文本。（可选）

::: info 示例
```
/dh h create test
/dh h create test -l:world:0:100:0
/dh h create test First Line
/dh h create test -l:world:0:100:0 First Line
```
:::

### `/dh h delete <悬浮字>`

**别称：**`del`、`remove`、`rem`

**权限：**`dh.command.holograms.delete`

删除现存的悬浮字。

* `<悬浮字>` - 悬浮字的名称。

### `/dh h disable <悬浮字>`

**别称：**`off`

**权限：**`dh.command.holograms.disable`

禁用指定的悬浮字。禁用后它不会对任何玩家显示。

* `<悬浮字>` - 悬浮字的名称。

### `/dh h downorigin <悬浮字> {true|false}`

**权限：**`dh.command.holograms.downorigin`

设置下行插入的状态。设置为 true 时，新插入的悬浮字行会将已有的悬浮字顶起。

* `<悬浮字>` - 悬浮字的名称。
* `{true|false}` - 决定悬浮字下行插入的状态。

### `/dh h enable <悬浮字>`

**别称：**`on`

**权限：**`dh.command.holograms.enable`

启用指定的悬浮字。

* `<悬浮字>` - 悬浮字的名称。

### `/dh h info <悬浮字>`

**权限：**`dh.command.holograms.info`

显示悬浮字的详细信息。

* `<悬浮字>` - 悬浮字的名称。

### `/dh h lines <悬浮字> <页码> [列表页码]`

**权限：**`dh.command.holograms.lines`

列出悬浮字所有插入的文本行。

* `<悬浮字>` - 悬浮字的名称。
* `<页码>` - 显示悬浮字行的页码。
* `[列表页码]` - 列表中移动至的页码。

### `/dh h move <悬浮字> <x> <y> <z>`

**别称：**`mv`

**权限：**`dh.command.holograms.move`

将悬浮字移动至指定坐标。

* `<悬浮字>` - 悬浮字的名称。
* `<x>` - 悬浮字的新 X 轴位置。
* `<y>` - 悬浮字的新 Y 轴位置。
* `<z>` - 悬浮字的新 Z 轴位置。

### `/dh h movehere <悬浮字>`

**别称：**`mvhr`

**权限：**`dh.command.holograms.movehere`

将指定悬浮字传送至你的位置。

* `<悬浮字>` - 悬浮字的名称。

### `/dh h near <距离>`

**权限：**`dh.command.holograms.near`

列出指定范围内存在的悬浮字。

* `<距离>` - 搜索悬浮字的范围，单位为格。

### `/dh h removeflag <悬浮字> <标志>`

**权限：**`dh.command.holograms.removeflag`

将悬浮字中的指定标志删去。

* `<悬浮字>` - 悬浮字的名称。
* `<标志>` - 移除标志的名称。

### `/dh h rename <悬浮字> <new_name>`

**权限：**`dh.command.holograms.rename`

重命名现存的悬浮字。

* `<悬浮字>` - 需要重命名的悬浮字名称
* `<new_name>` - 悬浮字的新名称。

### `/dh h setdisplayrange <悬浮字> <范围>`

**权限：**`dh.command.holograms.setdisplayrange`

设置玩家可见悬浮字的最大范围。

* `<悬浮字>` - 悬浮字的名称。
* `<范围>` - 设置显示范围，单位为格，数值在 1 - 64 间。

### `/dh h setfacing <悬浮字> <朝向>`

**别称：**`facing`、`face`、`setface`

**权限：**`dh.command.holograms.setfacing`

设置悬浮字的面朝方向（yaw）。仅影响 `#HEAD:`、`#SMALLHEAD:` 与 `#ENTITY` 内容的悬浮字行。

* `<悬浮字>` - 悬浮字的名称。
* `<朝向>` - 介于 -180.0 与 180.0 之间的数字角度或固定方向（`NORTH`、`EAST`、`SOUTH` 或 `WEST`）。

### `/dh h setpermission <悬浮字> [权限]`

**别称：**`permission`、`setperm`、`perm`

**权限：**`dh.command.holograms.setpermission`

设置浏览当前悬浮字所需的权限。

* `<悬浮字>` - 悬浮字的名称。
* `[权限]` - 显示悬浮字所需的权限。留空表示清除所设置的权限。

### `/dh h setupdateinterval <悬浮字> <间隔>`

**别称：**`updateinterval`

**权限：**`dh.command.holograms.setupdateinterval`

设置更新间隔。

* `<悬浮字>` - 悬浮字的名称。
* `<间隔>` - 单位为刻的间隔，填入介于 1 至 1200 间的数字（20 刻 = 1 秒）。

### `/dh h setupdaterange <悬浮字> <范围>`

**权限：**`dh.command.holograms.setupdaterange`

设置玩家可看见悬浮字刷新的最大范围。

* `<悬浮字>` - 悬浮字的名称。
* `<范围>` - 设置刷新显示范围，单位为格，数值在 1 - 64 间。

### `/dh h teleport <悬浮字>`

**别称：**`tele`、`tp`

**权限：**`dh.command.holograms.teleport`

将你传送至指定悬浮字的位置。

* `<悬浮字>` - 悬浮字的名称。

### `/dh h update <悬浮字>`

**权限：**`dh.command.holograms.update`

隐藏悬浮字并将其再次显示，达到手动刷新的效果。

* `<悬浮字>` - 悬浮字的名称。

