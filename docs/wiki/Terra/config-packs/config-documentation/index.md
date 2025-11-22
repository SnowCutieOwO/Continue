# 配置文档

::: info 另见

[配置开发](../config-development/config-development-introduction.md) >
[在配置中定义数据](../config-development/defining-data-in-configs.md) >
[配置文件](../config-development/config-files.md) >
[配置系统](../config-development/the-config-system.md) >

:::

## 内容

* 配置文件
  * 群系
  * 地物
  * 矿物
  * 调色板
  * 分散矿物
  * pack.yml
* 配置对象
  * 浮点数
  * 整数
  * 噪声采样器
  * 字符串
  * 列表
  * 映射表
  * 布尔值
  * 范围
  * 权重列表
  * 方块
  * 流水线群系
  * 标签
  * 颜色采样器
  * 集合
  * 分布器
  * 定位器
  * 图像
  * 表达式
  * 群系
  * 调色板
  * 维度适用采样器
  * 数学函数
  * 颜色字符串
  * 群系提供器
  * 群系颜色映射
  * 排除代替群系
  * 源
  * 阶段
  * 点
  * 地物
  * 结构
  * 生成阶段
  * 平台群系
  * 区块生成器
  * 流水线群系颜色转化器
  * 调色板层
  * 群系颜色转化器
  * 排除
  * 倾斜层
  * 立体样点
  * 数量谓词
* TerraScript
  * 什么是 TerraScript？
  * 内容

## 文档格式

配置按如下格式记录：

:::: info <配置名称>

<配置名称的描述>

<badge type="tip" text="<必选参数>" /> <类型> - <摘要>

配置必须拥有的参数类型。

<badge type="info" text="<可选参数>" /> <类型> - <摘要>

默认：`默认值`

配置中可以出现，也可以不填的参数。

::: details <配置名称> 示例
``` YAML
<必选参数>: ... # 匹配参数类型的对象
<可选参数>: ...
```
:::

::::

\* 部分配置文件可能没有任何可选参数或示例配置。

## 配置对象

部分参数可能需要指定类型的配置。在这种情况下，对应类型的文档就会包含在主配置的文档中：

:::: info ExampleConfig

包含了必填对象参数的配置。

<badge type="tip" text="示例对象" /> `ConfigSpecficObject`

::: info ConfigSpecificObject

限定于示例配置中的对象。

<badge type="tip" text="对象参数" /> `String`

:::

::: details ExampleConfig 示例

``` YAML
示例对象:
  对象参数: 字符串。
```

:::

::::