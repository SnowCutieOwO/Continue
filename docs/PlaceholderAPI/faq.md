# 常被提及的问题

这里是 PlaceholderAPI 常被问到的问题。

## 什么是变量拓展？

变量拓展（Expansion，或 PlaceholderExpansion。后者在开发中更常见）表示一个 .jar 文件或插件的一部分，能够通过 PlaceholderAPI 提供变量功能。  
变量是独立 .jar 文件还是插件的一部分取决于其本身与其目的。

独立 .jar 文件的变量拓展可以在 eCloud 页面上浏览，若其已通过验证，还可通过命令 [`/papi ecloud download <变量拓展>`](user-guides.commands.md#papi-ecloud-download) 下载。

## 它只显示 `%变量%` 而不是解析后的内容

当插件或 [`/papi parse me %placeholder%`](user-guides.commands.md#papi-parse) 返回的内容没有变化时，你应当检查如下内容：

* ### 变量拓展是否正确安装。
    
    一些变量拓展不会集成在插件中，甚至不会依赖插件。这表示它们是单独的 .jar 文件，你必须下载它们。  
    这些变量可以在 PlaceholderAPI 的 eCloud 上找到，并可通过命令 [`/papi ecloud download <变量拓展>`](user-guides.commands.md#papi-ecloud-download) 下载。  
    一个变量拓展是否在 eCloud 上可以在[变量列表](user-guides.placeholder-list.md)中浏览确认。

* ### 插件是否支持 PlaceholderAPI

    你可能在不支持解析变量的插件中使用了变量。在这种情况下，你应当先使用 parse 命令检查变量是否能返回正常值。  
    如果插件仍然显示的是未解析变量，则它很可能不支持 PlaceholderAPI。

    你可以在[这里](user-guides.plugins-using-placeholderapi.md)找到支持 PlaceholderAPI 的所有插件。  
    只需确保“支持解析变量”一栏打钩即可。

* ### 变量有无拼写错误

    请再三检查你的变量有无拼写错误。你可以使用 `/papi ecloud placeholders <变量拓展>`（将 `<变量拓展>` 替换为对应变量拓展的名称）来获取变量拓展注册的所有变量。  
    需要注意的是这只对 eCloud 上单独的变量拓展有效，那些插件内置的变量拓展不可以使用这个命令检查。

    另外，eCloud 上显示的变量列表可能过时了。推荐你检查[变量列表](user-guides.placeholder-list.md)或浏览相关文档与维基来获悉详情。

* ### 插件是否已启用

    如果一个变量拓展依赖于某个插件，请确保对应插件已安装并正常启用或（在命令 `/pl` 列表中显示为绿色）。

## 无法下载变量拓展

请检查如下内容：

1. 至 eCloud 的连接（地址为 https://api.extendedclip.com/）没有被服务器提供商或防火墙阻挡。
2. 所需的变量拓展存在于 eCloud。部分变量拓展是插件的一部分。
3. 变量拓展已被验证。只有受验证的变量拓展可以通过 PlaceholderAPI 的下载命令下载。这个措施是为了防止病毒的传播与扩散。

若上述检查都确认无误，而你仍然不能通过命令下载变量拓展，那么建议手动下载。  
只需在 eCloud 上找到对应的变量拓展介绍页，将其下载并放入 `/plugins/PlaceholderAPI/expansions/` 文件夹，再输入 [`/papi reload`](user-guides.commands.md#papi-reload) 命令。

## 其他插件如何通过 PlaceholderAPI 使用我的变量？

见“[使用 PlaceholderAPI](user-guides.using-placeholders.md)”章节。

## 我可以为维基作贡献吗？

当然可以！  
我们欢迎所有人为维基作贡献。如果你发现了错漏之处或是想要以其他方式帮助维基，请前往[维基的自述文件](https://github.com/PlaceholderAPI/PlaceholderAPI/blob/wiki/README.md)来获悉如何帮助编写维基。

## PlaceholderAPI 正在显示某个过时变量拓展的错误？

``` log
[00:00:01 ERROR]: [PlaceholderAPI] Failed to load Expansion class <expansion> (Is a dependency missing?)
[00:00:01 ERROR]: [PlaceholderAPI] Cause: NoClassDefFoundError <path>
```

如果你收到了类似这样的错误，尝试如下步骤：

* 确保已经安装了提及的变量拓展所需要的依赖（即插件）。
* 确保你的服务器为最新的受支持版本。
* 如果你是从 eCloud 下载的 .jar 文件，请确保它没有损坏。

在这些步骤之后若还是存在问题，请将其报告给变量拓展的作者。  
在大多数情况下，这个问题是依赖缺失或变量拓展尝试使用来自 PlaceholderAPI 的过时方法导致的。