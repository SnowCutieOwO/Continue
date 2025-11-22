# 经验限制

配置经验限制的教程

升级技能所需的经验值可以在 `xp_requirements.yml` 中配置。

## 表达式与变量

在诸如 `default` 的配置区域内，你会找到一条包含计算经验值表达式/等式的 `expression` 设置。

表达式可以按需修改，但需为有效的 EvalEx 表达式。你可以在[这里](https://ezylang.github.io/EvalEx/references/functions.html)浏览支持的运算符及功能。

::: info

表达式的结果会四舍五入。

:::

表达式中也支持嵌入变量。为了让等级间的经验要求不同，你必须在表达式中插入 `level` 变量。它对应下一等级的数字。`level` 的初始值为 config.yml 下 `start_level` 的值加一。例如，表达式在 `level` 为 5 时表达式返回的即为从 4 升至 5 级所需经验。

该设置同样支持自定义变量，可自行标注或组织表达式。除了直接在表达式中使用数字，你还可以将其变为用指定键名引用的变量。在下方的默认表达式中，`multiplier` 和 `base` 即为示例自定义变量。

``` txt
multiplier * (level - 2) ^ 2 + base
```

如你所见，`multiplier` 和 `base` 的值是以键的形引用，与变量同名：

``` YAML
default:
  expression: 'multiplier * (level - 2) ^ 2 + base'
  multiplier: 100.0
  base: 100.0
```

你可以使用任何变量名称，只需在配置中单独定义它的值即可。

## 技能覆盖


你可以增加 `skills.[技能名称]` 部分覆盖默认的 `default` 经验条件配置。技能部分的键与值格式与 `default` 部分相同。

如下为覆盖默认值的自定义炼药经验要求：

``` YAML
default:
  expression: 'multiplier * (level - 2) ^ 2 + base'
  multiplier: 100.0
  base: 100.0
skills:
  alchemy:
    expression: 'multiplier * (level - 2) ^ 3 + base'
    multiplier: 20.5
    base: 20.0
```

## 直接设置

除了使用等式，经验值要求还可通过直接设置列表实现。在 `default` 部分或指定技能部分下创建一个名为 `values` 的列表并填入值即可。

这里是通过列表值设置等级所需经验的示例：

``` YAML
default:
  values:
    - 100
    - 200
    - 300
    - 500
    - 750
    - 1250
    - 1720
```

在这个列表中，第一个值表示从 1 升至 2 级所需的经验值。