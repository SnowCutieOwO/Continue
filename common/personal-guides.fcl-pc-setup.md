# FCL直装包制作——电脑端教程

:::: details FCL启动器下载

* [FCL直装模板](https://github.com/root-S7/FoldCraftLauncher/releases/download/1.2.4.3/FCL-release-1.2.4.3-arm64-v8a.apk "点击前往下载")
* [FCL官方原版（非直装）](https://github.com/FCL-Team/FoldCraftLauncher/releases/download/1.2.4.3/FCL-release-1.2.4.3-arm64-v8a.apk "点击前往下载")

::::
::: danger

请注意，FCL 直装包为非官方团队修改

:::

## 1. 准备基础

1. 下载上述链接中的代码包，将其放置在合适的位置。
2. 安装 [Android Studio](https://developer.android.google.cn/studio?hl=zh-cn)，这将会是之后修改文件属性的必要工具。
3. 安装 [Gradle](https://gradle.org/releases/) 并配置必要的环境。
4. 在 Android Studio 中，将下载的代码包作为项目打开。

::: tip

免费版的 Android Studio 不支持安装中文插件。

:::

## 2. 对客户端进行处理

1. 打开客户端的 .minecraft 文件夹。
2. 删除 `logs/`（运行日志）、`crash-reports/`（崩溃日志）文件夹。如果对大小有较高要求，还可删除 `assets/` 和 `libraries/` 文件夹。
3. 打开客户端，在设置界面关闭“版本隔离”。之后确保游戏能够正常启动。

::: info 手动关闭版本隔离的方法

打开 versions 文件夹，将其下除 `版本名称.jar`、`版本名称.json`、`options.txt`（原版设置选项）、`optionsof.txt`（Optifine 的设置文件）之外的文件移动到 `.minecraft` 中即可。

:::

::: tip 如何为游戏内置启用的资源包及服务器列表？

如果需要预安装资源包：
* 在“设置->资源包...”界面，将对应资源包勾选并移动至右侧。
如果需要预设服务器列表：
* 在“多人游戏->添加服务器”界面，填入服务器名称以及服务器地址。

:::

4. 完成后，将整个 `.minecraft` 文件夹替换项目内的 `.minecraft` 文件夹。
5. 在文件夹内加入 `version` **文件**，将内容修改为数字。

::: info 为什么要创建 `version` **文件**？

如果启动器没有在目录里检测到这个文件，会导致游戏无法启动。

:::

::: tip `version` 的妙用

更新客户端打包内容时可将 `version` 的内容修改为更大的值，这样可以更新客户端内容而无需重装启动器。

:::

## 3. 对手机版启动器的外观进行处理

|显示内容|所在位置|初始值|
|---|---|---|
|手机端软件显示名称|`源码文件夹\FCL\src\main\res\values\strings.xml` -> `app_name`|`Fold Craft Launcher`|
|包名|`源码文件夹\FCL\build.gradle.kts` -> `android.defaultConfig.applicationId`|`com.tungsten.fcl.server`|
|软件版本|`源码文件夹\FCL\build.gradle.kts` -> `android.defaultConfig.versionCode`（版本数字）、`android.defaultConfig.versionName`（显示版本）|`1242`、`1.2.4.2`|
|软件图标（含两种类型）|`源码文件夹\FCL\src\main\res\mipmap-<分辨率>\`（包括 `mdpi`、`hdpi`、`xhdpi`、`xxhdpi`、`xxxhdpi`） -> `ic_launcher_foreground.webp`（显示样式）、`ic_launcher_round.png`（圆角图标，通常无需修改）|N/A
|启动器背景|`源码文件夹\FCL\src\main\assets\app_config\settings_launcher_pictures` -> `lt.png`（亮色模式背景）、`dk.png`（暗色模式背景）|N/A|
|启动器主界面下方小字|`源码文件夹\FCL\src\main\assets\app_config\general_setting.properties` -> `activity-main-title`|`Fold Craft Launcher`|
|QQ 群/Discord|`源码文件夹\FCL\src\main\assets\app_config\general_setting.properties` -> `qq-group-key`、`discord-url`|*FCL 直装包交流群联系方式*|
|安装协议（初次进入游戏时看到的文本）|`源码文件夹\FCL\src\main\assets` -> `eula.txt`|*过长，省略*|

## 4. 编辑 `源码文件夹\local.properties`

按如下示例增加三行新的配置：

``` properties title="local.properties" {9-11}
## This file must *NOT* be checked into Version Control Systems,
# as it contains information specific to your local configuration.
#
# Location of the SDK. This is only used by Gradle.
# For customization when using a Version Control System, please read the
# header note.
#<日期，由编辑器自动生成>
sdk.dir=<Android SDK 路径，由编辑器自动生成>
curse-api-key=******
oauth-api-key=******
key-store-password=******
```

这些密钥既可自行寻找，也可反编译官方 FCL 获取。本教程恕不提供。

## 5. 开始构建

点击右侧 Gradle，点击 Execute Gradle Task（实际在左上角位置，只有一个小图标）。

输入命令 `gradlew assemblerelease -Darch=arm64` 等待完成构建即可。

::: info

命令指定了输出的文件为适用于大多数安卓设备的版本，如果需要其他版本，请自行修改构建参数。

:::

::: tip 我无法构建出成品文件！

首先，检查之前修改的内容是否符合语法。之后，检查网络是否畅通（下载依赖可能需要使用）。最后，如果还是无效，请尝试在 `gradlew` 命令之后加上 `clean` 参数，或重启编辑器再进行构建。

:::

## 6. 调试

你可以通过各种方法将文件发送到手机上安装测试，也可通过 Android Studio 自带的模拟器安装软件并进行调试。

::: warning 警告

如果你的电脑配置较差，甚至不足以支持构建程序（通常很少发生），尽可能不要运行调试用模拟器。

:::

## 7. 其他配置文件

详见 `FCL 服务器手机端制作简述（手机）` 中的介绍。