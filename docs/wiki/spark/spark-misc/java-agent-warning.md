# Java 代理警告

自 Java 21 起，你可能会在使用 spark 的时候在控制台/日志中发现这些内容：

> WARNING: A Java agent has been loaded dynamically (/tmp/byteBuddyAgentxxxxxxxxxxxxxxxxxxx.jar)   
> WARNING: If a serviceability tool is in use, please run with -XX:+EnableDynamicAgentLoading to hide this warning   
> WARNING: If a serviceability tool is not in use, please run with -Djdk.instrument.traceUsage for more information   
> WARNING: Dynamic loading of agents will be disallowed by default in a future release   


## 为什么 spark 会使用 Java Agent？

spark 使用了 Java 仪表 API 来寻找关于载入 JVM Java 类的元数据（该部分请见 [`ClassFinder.java`](https://github.com/lucko/spark/blob/master/spark-common/src/main/java/me/lucko/spark/common/util/ClassFinder.java)）。

为了访问仪表 API，spark 使用了 [byte-buddy-agent](https://github.com/raphw/byte-buddy) 库，而它会动态载入一个 Java 代理以获得访问仪表 API 的能力。

## 我正在使用 Java 21，我应该做什么？

spark 会在仪表 API 不可用或载入失败时使用另一种方法（虽然效率相对低）来查找类。

也正因如此，我们推荐使用 Java 21 的用户无视报错，或按照下面的操作支持来手动启用动态代理载入。


## 我正在使用 Java 22，我应该做什么？

你有两个选择：

### 1. 重新启用动态代理载入

这会将 JVM 的行为回退至之前的状态，spark 可以因此正常工作。

若要这么做，你需要将下列内容添加至服务器启动参数中：

```
-XX:+EnableDynamicAgentLoading
```

#### 2. 什么都不做

如上文所述，spark 在代理安装失败时仍会换用其他方法继续工作。