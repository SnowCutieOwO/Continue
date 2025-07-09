# 外部连接

## 概要

太长不读版：

* LuckPerms 会在首次启动时使用网络连接安全下载必要库与翻译包
* LuckPerms 会向外部服务发送数据以提供某些服务（`/lp editor` 等）
* LuckPerms 不会向统计数据或服务发送报告数据

这些操作的生态与相关用法都在下文讲述。

## 下载外部库

LuckPerms 用到了大量的外部库 —— 在[这里](project-info.credits.md#开源)详细列出。

插件可以被配置并用于多个方面。例如，它支持许多存储方法，每个都有它们自己的存储器。大多数插件会将这些库打包（或“shade”）进自己的插件 —— 但是，这在 LuckPerms 上不可行，因为数量如此庞大的库会让 jar 文件变得非常庞大。解决方法就是在运行时根据使用的配置下载*必要*的库。

### 下载过程

* 下载只在必须要求安装库时尝试进行
* 初次下载后的二进制值文件会缓存在 `/LuckPerms/libs/` 文件中。若这里已经存在一个库，则不会尝试向服务器发送下载请求。
* 对应库的版本与 URL 是写死在插件中的 —— 它们不会自动更新。

所有库都是从 https://libraries.luckperms.net/ 或 https://repo1.maven.org/maven2/ 下载的。后者是公开的软件仓库，一般称作“中心仓库”或“Maven 中心”，前者则是由 LuckPerms 团队拥有与维护的 Maven 中心镜像。

Maven 中心是受信任的来源 —— 它被大部分 Java 开发者与开源项目使用。

作为预防网站劫持的措施，插件会在下载过程中进行额外的验证并确保最终库文件完整。

### 验证过程

每个可以在运行时下载的前置库都会带着在[这个源代码文件](https://github.com/LuckPerms/LuckPerms/blob/master/common/src/main/java/me/lucko/luckperms/common/dependencies/Dependency.java)中定义的版本与位置在 Maven 中心进行下载。

每个库在它们发布后被打包进插件的信息中都带有 SHA-256 的哈希值。这个哈希值会用于下载完成的库文件的比较。

从仓库下载库文件后，相同的步骤会对着下载数据再进行一次，得到的哈希值会与依赖验证所带的进行比较。

若两个哈希值相同，则下载文件的完整性可以被保证。否则会发生这些情况：

* 文件只下载了一部分，下载出现了错误
* 依赖文件被修改，且不应被信任

在这两种情况下，LuckPerms 都会取消依赖的下载，插件启动过程也会被终止。

这些验证是为了防止可疑代码对系统造成损害。它能有效降低[任意代码执行](https://en.wikipedia.org/wiki/Arbitrary_code_execution)发生的可能性，并让系统安全得就像将这些前置打包进插件一样。

## 下载翻译包

LuckPerms 的命令中的文本是[由社区提供](project-info.locale-and-translations.md)的。

这些翻译内容是自动导入并编译为“翻译包”文件的，并能在 API 端点上开放。这意味着翻译可以被随时间添加/改进，而无需重新编译插件。

翻译包会（大约每 24 小时）被插件更新一次。这个过程相对安全，因为翻译包本身不会影响插件的运行。

这个功能也可以在配置文件中禁用。

### 网页应用（`/lp editor` 等）

LuckPerms 有一系列为所有人开放的网络应用。

* **网页编辑器** - 修改管理权限数据的编辑器
* **权限检查系统浏览器** - 浏览权限检查系统日志的浏览器
* **树状图浏览器** - 用于显示权限树结构的浏览器

这些应用的客户端可以在下面找到。

* https://luckperms.net/editor/
* https://luckperms.net/verbose/
* https://luckperms.net/treeview/

源码可以在这里浏览：https://github.com/LuckPerms/LuckPermsWeb

在编辑器/浏览器与插件（在 Minecraft 服务器上运行的）是通过分离的数据负载进行的。这不会影响到编辑器/浏览器与服务器等的直接沟通。

你可以将编辑会话的链接随意发送 —— 所有对权限数据的改动都需要在 Minecraft 服务器上输入命令，或被编辑器信任。

数据从 https://usercontent.luckperms.net 发送&读取 —— 非常简单的内容存储系统。这个服务是由 Luck 编写与托管的。

再说一次，源码可以从这里访问：https://github.com/lucko/bytebin

其他技术细节可以在[这里](reference.web-editor-technical-details.md)找到。

### 统计与自动更新

* LuckPerms **不会**也永远不会回传分析或监控设备。
* LuckPerms **不会**也永远不会自动检查（或自动安装😠）更新。