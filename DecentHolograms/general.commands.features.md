# 特性
DecentHolograms 的悬浮字特殊功能命令

## 参数
括号只是用于标注参数的必要性，你最终输入的命令不需要带着它们！

|括号种类|参数意义|
|---|---|
|尖角括号“`<>`”|必须填入的参数。|
|方括号“`[]`”|可选填入的参数。|
|花括号“`{}`”|可能填入的值的列举，用 `|` 分隔。|

## 命令

**别称：**`features`、`f`

**权限：**`dh.command.features`

::: info 命令帮助
可输入如下命令来查看所有可用的子命令：
```
/dh f help
```
:::

### `/dh f disable <功能>`

**别称：**`off`

**权限：**`dh.command.features.disable`

禁用指定功能。

* `<功能>` - 所要禁用的功能。

### `/dh f enable <功能>`

**别称：**`on`

**权限：**`dh.command.features.enable`

启用指定功能。

* `<功能>` - 所要启用的功能。

### `/dh f info <功能>`

**权限：**`dh.command.features.info`

显示有关功能的信息。

* `<功能>` - 所要查询的功能。

### `/dh f list`

**权限：**`dh.command.features.list`

列出所有可用功能。

### `/dh f reload <功能>`

**权限：**`dh.command.features.reload`

重载指定功能。

* `<功能>` - 所要重载的功能。

