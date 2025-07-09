# 常见问题

本页列出了你使用 PlaceholderAPI 时可能遇到的问题及其解决方法。

如果你还有更多问题，欢迎进入 [Discord 频道](https://discord.gg/helpchat)询问。

## `java.lang.NoClassDefFoundError: com/google/gson/Gson¶`

``` log
org.bukkit.plugin.InvalidPluginException: java.lang.NoClassDefFoundError: com/google/gson/Gson
```

如果你碰到了诸如上述的报错，这表示你安装了 PlaceholderAPI 的服务器没有包含 Gson，这通常是 1.8 或更低版本的服务器会遇到的问题。若要修复这个，请升级到至少 1.8.8，这个版本包含了所需的依赖。

## 变量拓展不生效

如果一或多个变量不生效，请确保你检查了如下内容：

* 下载变量拓展后输入了 `/papi ecloud` 命令。
* 所有需要的插件都已安装并启用。
* 变量拓展有效（见下）。

## `载入变量拓展类 <拓展名称> 失败...（Failed to load expansion class <expansion> ...）`

### `- 其中的一个属性为空，这不被允许（- One of its properties is null which is not allowed）`

这个报错消息表示拓展内的 `getAuthor()`、`getIdentifier()` 或 `getVersion()` 返回了 `null`，而这是不被允许的。  
在这种情况下，联系变量的开发者并提及有关问题，并等待他们对其进行修复即可。

### `（是否缺失依赖？）（(Is a dependency missing?)）`

这个错误会在变量拓展无法载入时显示，通常是因为依赖缺失（所需插件）或创建实例失败。

你能做的只有提供完整错误，这样我们才可以检查错误是否来源于 PlaceholderAPI（大多数情况下不是）或变量拓展。