# 配置系统

本章节我们将会讲述：

* Terra 如何规定配置的结构
* 这些结构如何被 Terra 读取与利用
* 如何按前文所述的结构编写配置

## 模板

大部分配置都遵照一套内容，我们将其称为**模板**。模板像是*特殊的映射表*，规定了其内的键值对结构。Terra 定义了许多模板，它们都可以算作特殊的数据类型，就像字符串与整数那样。

### 参数

模板的主要部分就是特定的**参数**。它们是数据起效的关键，Terra 中的所有世界生成行为都由这些参数决定。

在模板中特定的参数包括：

* 参数的名称（影响到其在模板中的引用方式）。
* 参数是否必须存在。
* 参数填入的数据类型。

若要在模板内设置参数，我们需要用*键*表明我们**所需添加的参数**，以及我们想要**赋予这个参数的***值*。例如，这里是一对在 Terra 配置包中设置的参数，用以验证包的基本信息：

:::: tabs

::: tab YAML id="1"

``` YAML title="pack.yml"
id: COOL_CONFIG_PACK
version: 1.0.0
author: 佚名. 某某人
```

:::

::: tab JSON id="2"

``` JSON title="pack.json"
{
   "id": "COOL_CONFIG_PACK",
   "version": "1.0.0",
   "author": "佚名. 某某人"
}
```

:::

::::

参数也可以在模板内的多个映射表下组合使用。例如，在如下配置中，最上级的对象遵守了模板并指定了一个联结参数，它的值是 `一段参数值`。

:::: tabs

::: tab YAML id="3"

``` YAML title="config.yml"
a:
  nested:
    parameter: 一段参数值
```

:::

::: tab JSON id="4"

``` JSON title="config.json"
{
   "a": {
      "nested": {
         "parameter": "一段参数值"
      }
   }
}
```

:::

::::

当在模板内引用参数时，我们会使用英文点号 `.` 分隔的键名来自带参数路径。上述配置，引用 `一段参数值` 的键就是 `a.nested.parameter`。

部分需牢记于心的参数约定俗成：

* 参数的父键对象总是字符串，所有字符都是小写，且空格会被英文横杠 `-` 代替。
* *值对象*的*类型*即为*参数类型*。

## 模板相关

基于上文的解释，让我们引入一种新的模板，叫做 `AnimalTemplate`。这个模板类型指定了：

* 名为 `color` 的必填参数，类型为 `string` 字符串。
* 名为 `legs` 的必填参数，类型为 `integer` 整数。

我们可以在新生成的配置文件中编写它，假设最上层的对象是 `AnimalTemplate` 类型：

:::: tabs

::: tab TAML id="5"

``` YAML title="koala.yml"
color: grey
legs: 4
```

:::

::: tab JSON id="6"

``` JSON title="koala.json"
{
   "color": "grey"
   "legs": 4
}
```

:::

::::

因为 `AnimalTemplate` 包含了这些参数，如果我们不遵守这些规则，那么 Terra 就不能读取它们。例如，下文的配置是无效的。原因其一，`color` 是一个必填参数，而这里没有出现；其二， `legs` 需要填入的值类型是整数，而不是字符串。

:::: tabs

::: tab YAML id="7"

``` YAML title="koala.yml"
legs: two
```

:::

::: tab JSON id="8"

``` JSON title="koala.json"
{
   "legs": "two"
}
```

:::

::::


如果我们需要为 `AnimalTemplate` 制作文档，那么它们的格式如下：

::: info AnimalTemplate

*决定动物的属性。*

`必填参数`

<Badge type="info" text="color" /> `String`
动物的颜色。
<Badge type="info" text="color" /> `Integer`
动物的腿数量。

:::

很好，现在我们有一个用于描述动物的模板了。让我们创建一个描述动物园的模板吧：

::: info ZooTemplate

*决定一个动物园。*

`必填参数`

<badge type="info" text="animals" /> `Map`

包含的动物。

`选填参数`

<badge type="info" text="description" /> `String`

动物园和里面动物的描述。

:::

值得注意的是，`ZooTemplate` 在 `animals` 部分要求的数据类型是我们先前定义的 `AnimalTemplate`。这种将模板当成数据类型的特点使得我们可以制作非常复杂的配置文件，这也是 Terra 配置系统的一大特点。

现在，我们可以在 `ZooTemplate` 中使用 `AnimalTemplate`，以此创建可以被配置管理器读取和识别的配置：

:::: tabs

::: tab YAML id="9"

``` YAML title="australian_zoo.yml"
description: 来自澳大利亚的动物们.
animals:
  koala:
    color: grey
    legs: 4
  kangaroo:
    color: brown
    legs: 2
```

:::

::: tab JSON id="10"

``` JSON title="australian_zoo.json"
{

   "description": "来自澳大利亚的动物们.",
   "animals": {
      "koala": {
         "color": "grey",
         "legs": 4
      },
      "kangaroo": {
         "color": "brown",
         "legs": 2
      }
   }
}
```

:::

::::

## 配置类型

现在我们讲过了模板的作用以及使用方法，我们又遇到了新的问题：Terra 怎么知道配置里用的是哪个模板？对于最上级对象，它不包含任何指定了类型的模板，所以如何让 Terra 使用 `ZooTemplate` 而不是其他类型的模板呢？

## 选择模板

这里就是 `type` 的用武之地。这个参数可以用于指定映射表使用的模板，还可以指定多个填入的模板。

### 注册表

为了让 Terra 知道我们想要在配置里使用 `ZooTemplate`，我们必须使用 `type` 参数指定**注册键**。这允许我们在注册表内调用一些东西。

注册表可以看作内部映射表，它会被 Terra 用来存储类似的数据。正因如此，我们可以认为注册表键的工作方式与映射表相同。Terra 中有许多功能各不相同的注册表；**注册表条目**既可以被 Terra（一般通过附属）创建，也可以由配置文件产生，取决于使用途径。

在本示例中，我们会研究后者，即**配置注册表**。配置注册表会像 `ZooTemplate` 那样包含一系列的模板，会由 Terra 内部*注册*。配置注册表能让用户通过 `type` 为配置指定模板。

假设 `ZooTemplate` 已经由 Terra 在 `zoo` 这个名称/注册键下。现在我们就可以将 `type` 处填入 `zoo`，让 Terra 直到我们的配置最上层的对象类型是 `ZooTemplate`：

:::: tabs

::: tab YAML id="11"

``` YAML title="australian_zoo.yml"
type: ZOO
description: 来自澳大利亚的动物们.
animals:
  koala:
   color: grey
   legs: 4
  kangaroo:
   color: brown
   legs: 2
```

:::

::: tab JSON id="12"

``` JSON title="australian_zoo.json"
{
   "type": "ZOO",
   "description": "来自澳大利亚的动物们.",
   "animals": {
      "koala": {
         "color": "grey",
         "legs": 4
      },
      "kangaroo": {
         "color": "brown",
         "legs": 2
      }
   }
}
```

:::

::::

这样，我们就*定义了*一种 Terra 能够读取的*新***配置类型**

### 注册配置

棒极了！现在我们可以通过配置文件创建新的动物园，但又碰到了新的问题：如何追踪这些动物园的变化？我们要如何在其他配置里引用特定的动物园？也许我们会将所有动物园放在单个映射表里，然后把这些都塞进一个配置文件，用键名来引用每个动物园——这太繁琐了。如果我们定义了上百家动物园，我们要如何高效管理它们？

为了解决这个问题，我们就需要用到注册表。让我们引入一种全新的注册表，将其称为**动物注册表**。作为配置开发者，你无需担心创建注册表会有多麻烦，它们都由插件拓展与 API 完成，所以我们假设动物园注册表已经被附属创建。只需创建 `zoo` 配置即可轻松设置新的注册条目，我们可以让 Terra 自动管理每个配置的注册。

为了实现这个，我们需要找到一种为动物园选择*注册键*的方式。我们想要控制注册键，就可以在 `ZooTemplate` 里引入一个新的参数，称为 `id`。它的功能就是在 Terra 自动注册配置时设置*注册键*，使得我们可以通过*动物园注册表*获取所有 `zoo` 的配置。

按照以上叙述，我们的配置最后会看起来像这样：

:::: tabs

::: tab YAML id="13"

``` YAML title="australian_zoo.yml"
id: AUSTRALIAN_ZOO
type: ZOO
description: 来自澳大利亚的动物们.
animals:
  koala:
   color: grey
   legs: 4
  kangaroo:
   color: brown
   legs: 2
```

:::

::: tab JSON id="14"

``` JSON title="australian_zoo.json"
{
   "id": "AUSTRALIAN_ZOO",
   "type": "ZOO",
   "description": "来自澳大利亚的动物们.",
   "animals": {
      "koala": {
         "color": "grey",
         "legs": 4
      },
      "kangaroo": {
         "color": "brown",
         "legs": 2
      }
   }
}
```

:::

::::

现在，在其他需要动物园的配置中，我们可以指定 `AUSTRALIAN_ZOO`，它会自动从动物园注册表中获取待用。