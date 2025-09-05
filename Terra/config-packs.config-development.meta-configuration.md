# 元配置

元配置是 Terra 配置系统中的可选内容，它能够在配置包内任意配置处设置参数。这和编程语言的变量类似。

因为元配置可以设置一个值并多次引用，它在创建易于编辑与结构性强的参数上非常有用。

## 引用

值可以通过指向其文件的路径获取，连上一个冒号，然后就是以 英文点号 `.` 分隔的路径，相对于包目录。

`<文件路径>: <父键>`

例如，如果要引用 `config.yml` 下的 `example` 字符串的话：

``` YAML title="config.yml"
path:
  to:
    config:
      value: example
```

你引用时就需要写 `config.yml:path.to.config.value`。

引用自己的内容只会被当做字符串，因此元配置有一些额外的格式，这会在稍后讲到：

## 元值（MetaValue）

元配置最基础的形式，即将参数设定为指定值。将引用内容开头加上美元符号 `$`，以此表示其是元值而非字符串。

例如：

``` YAML
内容: $config.yml:my.value
```

将 `内容` 设置为 `config.yml` 下 `my.value` 的值：

``` YAML title="config.yml"
my:
  value: 测试
```

这表示第一个配置的 `内容` 会被设置为第二个配置中的 `测试`。对大多数元配置（大部分配置均为元配置）参数有效。

## 元列表（MetaList）

你可以通过元列表格式将其他列表的元素合并至一个列表。只需在对应列表中添加一个元素，以 `<<` 开头，接一个空格，然后后面跟上引用的路径。

例如：

``` YAML
内容:
  - ONE
  - << config.yml:another.list
  - FOUR
```

这会将 `config.yml` 的列表与之合并：

``` YAML title="config.yml"
another:
  list:
    - TWO
    - THREE
```

`内容` 将会包含按指定顺序排列的 `ONE`、`TWO`、`THREE` 和 `FOUR` 元素。因为列表对顺序敏感，因此被引用列表的元素也会按顺序插入原先元素中。对顺序不敏感的集合也适用这样的引用方法。

可以按任意顺序合并多个列表：

``` YAML
things:
  - ONE
  - << config.yml:lists.first
  - FOUR
  - << config.yml:lists.second
  - << config.yml:lists.third
  - NINE
```

## 元映射表（MetaMap）

元映射表格式允许合并/覆盖多个键值对。这是基于先前提到过的 YAML“键合并”独有功能（Terra 使用的 YAML 解析器支持）。

在映射表里设置的 `"<<"` 键用于表示合并其他映射表，填入的值必须为一或多个其他映射表的引用列表。

::: warning

引用的键不可以作为普通的 YAML 合并键使用。

:::

例如：

``` YAML
things:
  one: ONE
  "<<":
    - config.yml:another.map
```

会将 `config.yml` 中 `another.map` 的 `two` 和 `three` 合并：

``` YAML title="config.yml"
another:
  map:
    two: TWO
    three: THREE
```

合并之后的配置与如下内容等价：

``` YAML
things:
  one: ONE
  two: TWO
  three: THREE
```

### 元映射表优先级

如果不同的映射表为同一个键分配了多个值，那么只使用最后引用的映射表所给的值，原先引用了它们的映射表（包含 `"<<"` 的映射表）优先级最低。

例如，如下两个配置：

``` YAML
map:
  "<<":
    - config.yml:first
    - config.yml:second
    - config.yml:third
  key: Base
```

``` YAML title="config.yml"
first:
  key: First
second:
  key: Second
  extra: Extra value
third:
  key: Third
```

分配至 `map` 的值与如下内容等价：

``` YAML
map:
  key: Third
  extra: Extra value
```

因为：

* `key` 存在于上述所有映射表中，且 `config.yml:third` 是最后引用的映射表，因此合并后取这个映射表中的值。
* `extra` 只存在于 `config.yml:second` 中，它会被并入最终结果。

## 元字符串（MetaString）

元字符串格式允许将引用值插入字符串。如下格式会被替换为其引用的值：

`${<引用内容>}`

例如：

``` YAML
内容: ${config.yml:thing1}, ${config.yml:thing2}!
```

会插入 config.yml 下的这些值到 `内容` 中去：

``` YAML title="config.yml"
thing1: Hello
thing2: World
```

那么 `内容` 的值就是 `Hello, World!`。

引用值必须为字符串、整数、浮点数、布尔值或返回这些类型数据的元值。

## 元数字（MetaNumber）

如果参数需要一些数字（浮点数或整数），你可以在这里填入[表达式](config-packs.config-documentation.config-objects.expression.md)。

``` YAML
number: 3 * 2
```

那么 `number` 的值就会是 `6`。

元字符串格式会先于表达式解析，因此你可以像这样在其中嵌入变量：

``` YAML
number: 2 * ${config.yml:multiplier}
```

在元字符串解析后，剩下的字符串会按表达式解析并替换为计算结果。

## 判断顺序

因为元配置与 YAML 语法一同使用，因此 YAML 会先解析自己的语法，然后是所有元数据预处理，如同上述表达式一样，将所有参数计算为结果。

假设有如下配置：

``` YAML title="foo.yml"
 to-merge: &anchor
   - bar.yml:map-a
   - bar.yml:map-b

 parameter:
   key-a: alpha
   "<<": *anchor
```

``` YAML title="bar.yml"
 map-a:
   key-b: bravo

 map-b:
   key-c: charlie
```

首先，YAML 锚点会被加在 `parameter.<<`，即：

``` YAML title="foo.yml"
parameter:
  key-a: alpha
  "<<":
    - bar.yml:map-a
    - bar.yml:map-b
```

之后，元映射表格式会被加入 `parameter` 中：

``` YAML title="foo.yml"
parameter:
  key-a: alpha
  key-b: bravo
  key-c: charlie
```