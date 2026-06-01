# 🗯️ 自定义变量 - 仅付费版

::: info

该功能于 **4.5.26** 添加，仍在 **BETA** 测试中。

:::

自定义变量的主要功能就是记录特定信息，例如出售/购买同种材料的总量。只需通过命令在合适的地方修改变量的值，即可达到这样的效果。

## 配置

所有自定义变量都存储在 `custom_placeholders` 文件夹下。文件名称即为其 ID。例如，`example.yml` 表示其 ID 为 `example`。示例配置文件如下：

``` YAML
type: number
default-value: "1"
per-player-value: true
```
* `type`：支持填入 `default` 或 `number`。若只需要记录数字数据，那么填  `number`；否则，填 `default`.
* `default-value`：不设置变量值的情况下使用的值。
* `per-player-value`：若设置为 `true`，每个玩家都有不同的变量值；否则全服共享同一个值。

## 使用变量

可以通过 `{custom_<变量 ID>}` 内建变量显示自定义变量的值。更多信息，请见[变量列表](built-in-placeholder.md)。示例：`{custom_example}`

## 设置变量值

你需要通过命令设置自定义变量的值。

* `/shop setcustomplaceholder <ID> <值> [玩家名称]` \
  若 `per-player-result` 为 `true`，那么 `玩家名称` 为必填项；否则无需输入。
* `/shop addcustomplaceholder <ID> <值> [玩家名称]` \
  仅对数字类型的自定义变量有效。会将数值加入变量。例如，若当前值为 1，命令中的值参数为 5，那么命令执行后的变量值会变为 6。