# ⛓️ 条件变量 - 仅付费版

我们向插件添加了 `{conditional}` 内建变量。

## 配置

所有条件变量配置都存储在 `conditional_placeholders` 文件夹下。文件名称即为其 ID。例如，`buy.yml` 表示其 ID 为 `buy`。示例配置如下：

``` YAML
mode: MAX

value:
  default: 1
  vip: 1.5
  mvp: 2

conditions:
  vip:
    1:
      type: permission
      permission: 'group.vip'
  mvp:
    1:
      type: permission
      permission: 'group.mvp'
```

* `mode`：条件变量的类型。
  * `DEFAULT`：基础模式，从上至下检查玩家是否满足条件，会在所有条件满足时返回对应的值。
  * `MAX`：需要所有变量的值为数字，只返回符合条件的最大值。
  * `MIN`：与 `MAX` 相似，但返回的是最小值。
* `conditions`：每个值的条件。每个条件 ID 下的内容都可以使用[动作格式](../format/action-format.md)。
* `value`：每个条件的值。`default` 选项是没有条件满足时返回的值。

## 使用变量

通过 `{conditional_<ID>}` 变量显示器值。更多信息请见[变量](../placeholders/built-in-placeholder.md)章节。例如：`{conditional_buy}`。

## 示例：条件商品

* 像这样新建一个条件变量：

``` YAML
mode: DEFAULT
value:
  default: A # 商品 ID
  vip: B # 商品 ID
  mvp: C # 商品 ID
conditions:
  vip:
    1:
      type: permission
      permission: 'group.vip'
  mvp:
    1:
      type: permission
      permission: 'group.mvp'
```

* 确保你的商店有 ID 为 `A, B, C` 的商品。
* 打开商店菜单配置，找到 `layout` 部分：

``` YAML
dynamic-layout: true
layout:
  - '000000000'
  - '000`{conditional_变量名称}``{conditional_变量名称}``{conditional_变量名称}`000'
  - '000000000'
  - 'a0003000b'
```

将 `变量名称` 替换为你使用的条件变量名称。