# 事件

附属与 Terra API 之间的交互通过事件完成。

## 事件管理器

与 Terra 事件交互的最好办法就是 [EventManager](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/event/EventManager.html)。事件管理器包含了这些方法：

* 调用事件（`#callEvent`）
* 注册事件处理器（`#registerHandler`）
* 访问事件处理器（`#getHandler`）

### 访问事件管理器

事件管理器通过 [Platform](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/Platform.html) 实例访问：

``` Java
platform.getEventManager();
```

::: info

若要在附属中访问 [Platform](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/Platform.html)，请先使用[依赖注入](dependency-injection.md)。

:::

::: info

通常需要再附属的入口处注册事件监听器。

:::

## 事件处理器

事件处理器提供了注册事件监听器的 API。Terra 默认提供了一个事件处理器，即 [FunctionalEventHandler](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/event/functional/FunctionalEventHandler.html)。如果附属需要使用诸如注释方法使用不同的 API 注册事件，则可以注册自定义事件处理器。

### 访问事件处理器

只需将其类实例传入 [EventManager#getHandler(Class)](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/event/EventManager.html#getHandler-java.lang.Class-) 即可。

如下为访问默认的 [FunctionalEventHandler](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/event/functional/FunctionalEventHandler.html) 示例代码：

``` Java
platform.getEventManager()
        .getHandler(FunctionalEventHandler.class);
```

### 功能事件处理器

功能事件处理器（Functional Event Handler）是 Terra 默认提供的事件处理器。大多数附属可以直接使用它。这个处理器提供了类函数 API，可通过 Java 的 [lambda 表达式](https://www.w3schools.com/java/java_lambda.asp)注册事件。

#### 注册监听器

通过功能事件处理器注册事件监听器时，只需调用 [FunctionalEventHandler#register(BaseAddon, Class)](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/event/functional/FunctionalEventHandler.html#register-com.dfsek.terra.api.addon.BaseAddon-java.lang.Class-) 方法即可。这会返回 [EventContext](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/event/functional/EventContext.html) 的示例，可以用于构建你的监听器。

#### 向监听器添加行为

只需在其后添加 [EventContext#then(Consumer)](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/event/functional/EventContext.html#then-java.util.functions.Consumer-) 调用即可，这些操作会持续执行，接受方会持续接收事件实例。

#### 示例

``` Java
platform.getEventManager()                        // 获取事件管理器。
        .getHandler(FunctionalEventHandler.class) // 获取功能事件处理器。
        .register(addon, SomeEvent.class)         // 在附属中为 SomeEvent 事件注册监听器。
        .then(someEventInstance -> {              // 事件触发时执行操作。
            logger.info("正在处理事件！");
            logger.info("事件内容：{}", someEventInstance.getSomething());
        });
```

这个示例为 `SomeEvent` 注册了一个监听器。在事件调用时，事件实例的结果 `#getSomething()` 会被记录。