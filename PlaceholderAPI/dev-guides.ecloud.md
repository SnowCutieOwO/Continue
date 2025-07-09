# eCloud

## 关于

PlaceholderAPI 使用了一个拓展云（存储了各种各样的拓展），来下载包含变量的 .jar 文件。

拓展云可以从 https://api.extendedclip.com/home 访问。

## 运作方式

PlaceholderAPI 会在服务器启动时连接至 eCloud，来检查其是否可用，以及其上的拓展数量。  
如果你输入命令 [`/papi ecloud download <拓展名称>`](user-guides.commands.md#papi-ecloud-download)，PlaceholderAPI 会先连接至网站检查指定拓展是否存在，并进行下载操作。

::: info

PlaceholderAPI 只能下载 eCloud 上经过验证的变量拓展。任何未验证的拓展都只能手动下载。

:::

你可以在 config.yml 中将 `cloud_enabled` 设置为 false 来阻止插件连接至拓展云。

## 添加自己的变量

你可以向拓展云添加自己的变量，供他人使用。  
若要这么做，你需要按照如下步骤：

1. 确保你按照“[创建变量拓展](dev-guides.creating-a-placeholderexpansion.md#创建变量拓展)”章节所述的，制作了一个单独的 jar 文件。
2. 在网站上注册或登录账号。
3. 点击 `变量拓展（Expansions）`，再点击 [`上传（Upload New）`](https://api.extendedclip.com/manage/add/)。
4. 填入必要信息。`原链接（Source URL）` 和 `依赖链接（Dependency URL）`是可选的，你可以使用它们添加源代码链接及依赖插件的链接。
5. 点击 `选择文件（Choose an file...）` 按钮并选择你的 .jar 拓展文件。

    ::: warning 注意！

    请确保 jar 的文件名中包含了代码中设置的相同版本号。

    :::

6. 点击 `提交拓展（Submit Expansion）`

你的变量拓展现在已经上传，并需要由管理员审核。  
若一切正常，你的变量拓展将会被同一，并可以在 eCloud 上下载。

::: info 托管者提示

你可以通过 `PAPI_BLOCKED_EXPANSIONS` 环境变量阻止指定变量拓展的下载。只需设置逗号分隔的拓展名称即可。

该功能自 PlaceholderAPI 2.11.4 加入。

:::

## 更新你的变量拓展

在你更新前，请先阅读如下内容：  
更新变量会使得其自动变为未经验证，需要网站管理员再次验证。这是为了防止病毒上传或扩散。

若要更新你的变量拓展，你首先需要进入[你的变量拓展列表](https://api.extendedclip.com/manage/)。  
在那里点击 `变量拓展（Expansions）` 并点选 `你的变量拓展（Your Expansions）`。  
在此之后，按如下步骤进行：

1. 点击需要更新的变量拓展名称。
2. 点击 `版本（Version）`。
3. 点击 `添加版本（Add Version）`
4. 填表并上传新 jar 文件。

    ::: warning 注意！

    请确保 jar 的文件名中包含了代码中设置的相同版本号。

    :::

5. 点击 `保存改动（Save Changes）`

现在你的新版本已经被上传至 eCloud。你现在可以在 [HelpChat Discord 频道](https://discord.gg/helpchat)上要求一位负责的管理员审查你的变量拓展，使其得到验证。在询问时请务必保持耐心与礼貌。

## 下载指定版本的变量拓展

在某些情况下，你可能需要使用指定的旧版本变量拓展。例如，你的服务器版本较旧且最新版本的变量拓展使用了它没有的一些方法，导致兼容性问题。  
在那种情况下，下载旧版本的变量拓展就是一种解决方法。你可以手动下载变量拓展，或者通过 PlaceholderAPI 下载。  
这里是详细步骤。

### 通过 PlaceholderAPI 下载。

这是两个方法中最简单的，因为它不需要大费周折。  
在游戏内或控制台中输入如下命令来下载指定版本的变量拓展。  
[`/papi ecloud download <变量拓展> [版本号]`](user-guides.commands.md#papi-ecloud-download)

若要浏览变量拓展可以使用的版本，输入 [`/papi ecloud info <变量拓展>`](user-guides.commands.md#papi-ecloud-info) 命令即可。

在下载完指定版本的变量拓展之后，输入 [`/papi reload`](user-guides.commands.md#papi-reload) 刷新安装的变量拓展。

### 手动下载

若要手动下载变量拓展，首先你需要打开对应网站并找到对应的变量拓展。  
然后，点击 `版本（Version）`按钮并点击你需要的版本的下载按钮。

最后，关闭你的服务器，将 jar 文件移动至 `/plugins/PlaceholderAPI/expansions`（如果已有一个版本，确保将旧文件删除）并重启服务器。