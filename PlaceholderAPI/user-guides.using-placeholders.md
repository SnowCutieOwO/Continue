# 使用变量

本页为服主介绍了使用本插件的教程。

如果你是开发者，想要了解如何在自己的插件中添加 PlaceholderAPI 的变量支持，请浏览[使用 PlaceholderAPI](dev-guides.using-placeholderapi.md)章节。

## 准备工作

在你使用变量之前，你需要先检查一些东西。

### 插件对本插件的支持

最重要的一点就是，了解你所使用的插件是否支持插入 PlaceholderAPI 的变量。  
诸如 EssentialsXChat 的聊天插件一般不支持本插件，除非其他插件将这些替换后的变量“注入”最终显示的聊天消息。

检查某个插件是否支持本插件的最快方法，就是浏览[支持 PlaceholderAPI 的插件](user-guides.plugins-using-placeholderapi.md)章节。  
如果插件出现在列表中，且 `支持变量` 处打钩，则表示它支持本插件。

如果插件没有在列表中，你可以浏览插件的介绍页，或其他来源的信息如维基，来确认此插件是否支持 PlaceholderAPI。

### 正确的网络连接

本插件会向 https://api.extendedclip.com 获取 eCloud 中有关变量拓展的信息，同时也会从这里下载变量拓展。请确保你的服务器能够连接到上述网站。如果不能，且你运行的环境为 VPS 等托管服务，请联系服务器提供商放行。

::: info 托管相关信息

PlaceholderAPI 会自行校验下载环境并阻止服务器下载可疑的变量拓展。  
若要在 VPS 等托管服务上阻止指定变量拓展的下载，在环境变量中加入 `PAPI_BLOCKED_EXPANSIONS`，并在其后设置逗号分隔的拓展名称列表来阻止 PlaceholderAPI 下载这些拓展。

该功能自本插件 2.11.4 版本起被加入。
:::

### 下载/获取变量拓展

变量拓展及其变量的提供方式可以为插件（如果有）自带，或 eCloud 上独立的 .jar 文件。  
变量拓展类型不同，你的安装方法也会有所差别。

若要检查变量拓展是独立文件还是内置于插件中，你可以浏览[变量列表](user-guides.placeholder-list.md)章节进行查询。  
如果它出现在列表上，你可以浏览下方的提示框来知晓其是否独立：

* `papi ecloud download <变量拓展>`：此拓展存储在 eCloud 上，需要使用 [`/papi ecloud download` 命令](user-guides.commands.md#papi-ecloud-download) 下载。
* `内置于插件`：变量拓展为插件的一部分，安装对应插件后自动生效，无需额外下载变量拓展。
* *链接*：拓展需要从其他地方下载（如 Github 发行页面）。你需要手动下载它们并放入 expansions 文件夹。

你可以通过命令 `/papi list` 查看载入的拓展。

### 使用变量拓展

使用拓展中的变量就相对简单了许多。  
只需将对应的变量（如 `%player_name%`）放入支持变量的配置中即可。对应插件的维基或手册也会提供支持变量的相关信息。