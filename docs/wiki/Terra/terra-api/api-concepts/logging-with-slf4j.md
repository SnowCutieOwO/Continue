# SLF4J 记录

日志记录是调试程序不可或缺的部分。Java 有许多日志框架，Terra 选用的是 [SLF4J](https://www.slf4j.org/) API。

## 获取记录器

记录器通过 [Logger](https://www.slf4j.org/apidocs/org/slf4j/Logger.html) 实例实现。在 Terra 附属中有两种方式获取 `Logger`：

### 验证附属加载器入口

如果你在验证附属加载器附属的入口中使用记录器，你可以通过[依赖注入](dependency-injection.md)获得记录器的实例：

``` Java
@Inject
private Logger logger;
```

### 利用 LoggerFactory

如果你需要在附属中的任何地方使用记录器，则你可以使用 SLF4J 的 LoggerFactory 获取指定类的记录器实例：

``` Java
private static final Logger logger = LoggerFactory.getLogger(MyClass.class); // MyClass 改成你获取记录器的类。
```

::: info

需要注意的是，`Logger` 类为 `private static final`。这是因为：

* 记录器实例指定类而非指定实例；
* 其他类无法访问你的记录器。

## 使用记录器

使用记录器非常简单。如下为按四种不同等级显示的四条日志：

``` Java
logger.debug("这是一条消息！")
logger.info("这是一条消息！")
logger.warn("这是一条消息！")
logger.error("这是一条消息！")
```

### 记录等级

SLF4J 支持多种记录等级。记录等级的不同表示了消息的重要程度，大部分记录框架都支持屏蔽指定等级以下的消息。

* `DEBUG` 等级“最高”。默认隐藏，它只记录在调试时才需要的详细内容。
* `INFO` 显示了用户可能需要的提示消息。这个等级的消息应当保持简洁，它的作用只是大致显示程序的运行状态。
* `WARNING` 等级的消息通常用于表示未预料的错误，例如使用了已弃用的 API。
* `ERROR` 等级的消息表示程序遇到了可以修正但阻止它继续运行的错误。

### SLF4J 中的字符串格式

SLF4J 支持在日志中插入格式化数据。如下为你可能在程序中找到的一段日志记录：

``` Java
logger.info("从杂货店中购买了 " + amount + " 份 " + food + "。");
```

这段代码通过字符串拼接，将两个数据插入了其中。这会导致代码变得冗杂，且拼接也需要耗费额外性能，因此这样的写法在热运行中的效率较低。

为了解决这些问题，SLF4J 有一种称作*字符串格式化*的方法：

``` Java
logger.info("从杂货店中购买了 {} 份 {}。", amount, food);
```

在消息文本中，只需将待插入变量的部分加上 `{}`，然后按顺序将变量名称写在末尾即可。

字符串格式化有两个好处：

* 减少字符串拼接的出现，简化代码，增强可读性与可维护性；
* 不输出消息（如禁用调试功能时的调试消息）时，不会触发字符串拼接！