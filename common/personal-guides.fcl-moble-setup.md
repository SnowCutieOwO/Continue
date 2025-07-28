# 制作 FCL 直装包相关笔记

::: danger

请注意，FCL直装包为非官方团队修改

:::

## 1. 准备基础

1. 下载 [直装包模板](https://github.com/root-S7/FoldCraftLauncher/ "点击前往下载") ，将其放置在合适的位置。
   
::: tip

建议下载图中所示 FCL-release-X.X.X.X-arm64-v8a.apk，版本保持最新即可

:::
![](images/fcl-download.png)
2. 下载 [MT修改器](https://mt2.cn/ "点击跳转官方网站")
3. 下载 [APKTool M](https://maximoff.su/apktool/?lang=zh "点击跳转官方网站") (用于修改包名，无该需求可以不下)

## 2. 对客户端进行处理

1. 打开客户端的 .minecraft 文件夹。
2. 删除 `logs`（运行日志）、`crash-reports`（崩溃日志）文件夹。如果对大小有较高要求，还可删除 `assets` 和 `libraries` 文件夹 ( 这两个加载游戏后会自动下载，但有 <u>反作弊</u> 的不建议删 ) 。
![](images/fcl-logs.png){: width="40%"} ![](images/fcl-assets.png){: width="40%"}
3. 打开客户端，在设置界面关闭“版本隔离”。之后确保游戏能够正常启动。

::: info 手动关闭版本隔离的方法

打开 versions 文件夹，将其下除 `版本名称.jar`、`版本名称.json`、`options.txt`（原版设置选项，资源包启用在这）、`optionsof.txt`（Optifine 的设置文件）之外的文件移动到 `.minecraft` 中即可。

:::

::: tip 如何为游戏内置启用的资源包及服务器列表？

如果需要预安装资源包：
* 在“设置->资源包...”界面，将对应资源包勾选并移动至右侧。
如果需要预设服务器列表：
* 在“多人游戏->添加服务器”界面，填入服务器名称以及服务器地址 ( 服务器地址将保存到 `servers.dat` ) 。

:::

4. 完成后，将整个 `.minecraft` 文件夹替换项目内的 `.minecraft` 文件夹。
5. 在文件夹内加入 `version` **文件**，将内容修改为数字。

::: info 为什么要创建 `version` **文件**？

如果启动器没有在目录里检测到这个文件，会导致游戏无法启动。

:::

::: tip `version` 的妙用

更新客户端打包内容时可将 `version` 的内容修改为更大的值，这样可以更新客户端内容而无需重装启动器。

:::

## 3. 软件名称修改
**方案1:**

![](images/fcl-name1.gif){: width="40%"}

**方案2:**

![](images/fcl-name2.gif){: width="40%"}

## 4. 软件图标修改
**示例:**

![](images/fcl-icon.gif){: width="40%"}

|屏幕像素密度|DPI|适用范围|
|---|---|---|
|mdpi（320x480或更低）|160|是Android应用程序的基准密度|
|hdpi（480x800或更低）|240|通常用于较大的高分辨率屏幕|
|xhdpi（720x1280或更低）|320|用于更高分辨率的屏幕|
|xxhdpi（1080x1920或更低）|480|适用于非常高分辨率的屏幕|
|xxxhdpi（1440x2560或更低）|640|用于极高分辨率的屏幕|

::: tip

**提供几个修改图片参数的网站**
1. [PNG 转 WEBP](https://cdkm.com/cn/png-to-webp)
2. [PNG <u>DPI</u> 转换](https://cdkm.com/cn/png-to-webp)
3. [PNG24 转 PNG32](https://omnifile.co/zh-cn/to-png32/)
4. [WEBP调整](https://products.aspose.app/imaging/zh-hans/image-resize/webp)

:::

## 4. 编辑 `源码文件夹\local.properties`



## 5. 开始构建



## 6. 调试
