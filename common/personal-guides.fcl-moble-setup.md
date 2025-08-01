# FCL直装包制作——手机端教程

:::: details FCL启动器下载

[FCL直装模板](https://github.com/root-S7/FoldCraftLauncher/releases/download/1.2.4.3/FCL-release-1.2.4.3-arm64-v8a.apk "点击前往下载")
[FCL官方原版（非直装）](https://github.com/FCL-Team/FoldCraftLauncher/releases/download/1.2.4.3/FCL-release-1.2.4.3-arm64-v8a.apk "点击前往下载")

::::

::: danger

请注意，FCL 直装包为非官方团队修改

:::

## 1. 准备基础

1. 下载[直装包模板](https://github.com/root-S7/FoldCraftLauncher/ "点击前往下载") ，将其放置在合适的位置。
   
::: tip

建议下载图中所示 `FCL-release-X.X.X.X-arm64-v8a.apk`，版本保持最新即可。

:::

::: danger

请注意，直装包部分目录下有一个名为 `version` 的文件，该文件不能删去，不然游戏无法启动。注意，**不能删去！不能删去！不能删去！**

:::

![](images/fcl-download.png)

2. 下载 [MT 修改器](https://mt2.cn/ "点击跳转官方网站")。
3. 下载 [APKTool M](https://maximoff.su/apktool/?lang=zh "点击跳转官方网站")（用于修改包名，无该需求可以不下）。

## 2. 对客户端进行处理

1. 打开客户端的 `.minecraft` 文件夹。
2. 删除 `logs`（运行日志）、`crash-reports`（崩溃日志）文件夹。如果对大小有较高要求，还可删除 `assets` 和 `libraries` 文件夹（游戏会自行补全这两个文件夹的内容，但如果客户端包含*反作弊*，则不建议删）。

![](images/fcl-logs.png){width="40%"}

![](images/fcl-assets.png){width="40%"}

3. 打开客户端，在设置界面关闭“版本隔离”。之后确保游戏能够正常启动。

::: info 手动关闭版本隔离的方法

打开 versions 文件夹，将其下除 `版本名称.jar`、`版本名称.json`、`options.txt`（原版设置选项，其中包含默认启用资源包的选项）、`optionsof.txt`（Optifine 的设置文件）之外的文件移动到 `.minecraft` 中即可。

:::

::: tip 如何为游戏内置启用的资源包及服务器列表？

如果需要预安装资源包：
* 在“设置->资源包...”界面，将对应资源包勾选并移动至右侧。
如果需要预设服务器列表：
* 在“多人游戏->添加服务器”界面，填入服务器名称以及服务器地址（服务器地址会保存在 `servers.dat` 中）。

:::

4. 完成后，将整个 `.minecraft` 文件夹替换项目内的 `.minecraft` 文件夹。

![](images/fcl-resources.gif){width="40%"}

5. 在文件夹内加入 `version` **文件**，将内容修改为数字。

::: info 为什么要创建 `version` **文件**？

如果启动器没有在目录里检测到这个文件，会导致游戏无法启动。

:::

::: tip `version` 的妙用

更新客户端打包内容时可将 `version` 的内容修改为更大的值，这样可以更新客户端内容而无需重装启动器。

:::

## 3. 软件名称修改

### 方案一

![](images/fcl-name1.gif){width="40%"}

### 方案二

![](images/fcl-name2.gif){width="40%"}

## 4. 软件图标修改

|屏幕像素密度|DPI|图片分辨率|适用范围|
|---|---|---|---|
|mdpi（320x480或更低）|160|48x48|是Android应用程序的基准密度|
|hdpi（480x800或更低）|240|72x72|通常用于较大的高分辨率屏幕|
|xhdpi（720x1280或更低）|320|96x96|用于更高分辨率的屏幕|
|xxhdpi（1080x1920或更低）|480|144x144|适用于非常高分辨率的屏幕|
|xxxhdpi（1440x2560或更低）|640|192x192|用于极高分辨率的屏幕|

::: tip 可用于修改图片参数的网站

1. [PNG *DPI* 转换](https://www.imgdiet.com/zh-CN/dpi-converter)
2. [JPG 转 PNG](https://cdkm.com/cn/jpg-to-png)
3. [调整图片大小](https://www.iloveimg.com/zh-cn/resize-image#resize-options,pixels)
4. [PNG 转 WEBP](https://cdkm.com/cn/png-to-webp)
5. [PNG24 转 PNG32](https://omnifile.co/zh-cn/to-png32/)
6. [图片圆角处理](https://www.lddgo.net/image/round-image)
7. [WEBP 调整](https://products.aspose.app/imaging/zh-hans/image-resize/webp)
8. [AConvert](https://www.aconvert.com/)（支持 PNG 和 WEBP 互转，支持修改导出格式大小）

:::

### 第一步：转换图片DPI

打开 [PNG *DPI* 转换](https://www.imgdiet.com/zh-CN/dpi-converter)网站，将图标按上方表格一一转换为指定 DPI 大小。

![](images/fcl-icon1.gif){width="40%"}

::: info

请注意，将生成的不同 DPI 文件分清楚，以便后续操作。

:::

### 第二步：文件格式转换

::: tip

由于转换完文件会自动变为 `JPG` 格式，所以我们需要将其重新转换成 `PNG` 格式。

:::

打开 [JPG 转 PNG](https://cdkm.com/cn/jpg-to-png) 网址。

![](images/fcl-icon2.gif){width="40%"}

### 第三步：调整图片大小

::: tip

为了适应不同设备分辨率，我们需要用不同分辨率来适配。

各个文件夹中图片所需的分辨率在上表中也已一一呈现，只需按需求修改即可。

:::

打开[调整图片大小](https://www.iloveimg.com/zh-cn/resize-image#resize-options,pixels)网址。

![](images/fcl-icon3.gif){width="40%"}

### 第四步：将 `PNG24` 转换成 `PNG32`（可选）

::: tip

由于该网站原因，转换分辨率后，图片位深度会变成24，我们需将其转换回32

:::

打开 [PNG24 转 PNG32](https://omnifile.co/zh-cn/to-png32/) 网址。

![](images/fcl-icon4.gif){width="40%"}

### 第五步：为 `PNG` 文件添加圆角

打开[图片圆角处理](https://www.lddgo.net/image/round-image) 网址，选择你的图片，并将值改为 `100`。

![](images/fcl-icon5.gif){width="40%"}

### 第六步：将你修改的图片替换模板中的图片

![](images/fcl-icon.gif "示例"){width="40%"}

## 5. 修改包名（可做到多端共存）。

1. 打开 APKTool M 并找到你下载的模板。
   
![](images/fcl-package1.png){width="40%"}

2. 单击该文件，并点击**快速编辑**。

![](images/fcl-package2.png){width="40%"}

3. 修改包名，然后保存。

![](images/fcl-package3.png){width="40%"}

![](images/fcl-package4.png){width="40%"}

4. 重新回到 **MT管理器** 中，在模板文件夹下会生成一个 `XX_mod.APK` 文件，打开 `AndroidManifest.xml`。

![](images/fcl-package5.png){width="45%"}

![](images/fcl-package6.png){width="45%"}

5. 点右上角三个点，点击搜索 `FileProvider` ，修改 `android:authorities` 的值为 `com.tungsten.fcl.server.provider` ，然后保存。

![](images/fcl-package7.png){width="45%"}

![](images/fcl-package8.png){width="45%"}

![](images/fcl-package10.png){width="45%"}

6. 安装即可。

## 6. 修改版本号

修改 `android:versionCode` 和 `android:versionName` 即可。

![](images/fcl-package7.png){width="45%"}

## 7. 配置项修改

::: info

自定义各个参数是直装包的一大优势，下文将简述 `assets` 中各配置项的修改。

:::

|文件名|路径|
|---|---|
|`eula.txt`|`/assets/`|
|`authlib_injector_server.json`|`/assets/app_config`|
|`config.json`|`/assets/app_config`|
|`general_setting.properties`|`/assets/app_config`|
|`launcher_rules.json`|`/assets/app_config`|
|`menu_setting.json`|`/assets/app_config`|

### 1. eula.txt（最终用户许可协议）

想必开过服务器的对此并不陌生，此文件中的内容为用户第一次安装打开时显示的内容。

#### 使用示例：

![](images/fcl-setting1.png)

:::: details 默认配置

``` txt
FoldCraftLauncher — 整合包一键安装版


  1. 你可以尝试修改APK的『assets/eula.txt』文件来改变该页面显示内容

  2. 该启动器一般用于『服务器客户端』或『个人整合包』的一键安装。

  3. 只接受启动器功能缺陷报告，不接受游戏崩溃报告；手机上不是所有MOD都能运行，不要用Java软件是跨平台来反驳（因为这样回答显得你很弱智）

  4. 游戏资源默认安装到当前APK的私有目录下，即『/storage/emulated/0/Android/data/com.tungsten.fcl.server/files/.minecraft/』路径下。

  5. 每次安装前会删除原路径下所有的游戏文件，某些人制作的APK可能会把你原公有目录下资源删除，你需要自行甄别！

  6. 该启动器的所有设置选项可以在APK的『assets/app_config』目录下进行修改；修改前请确保对应文件格式正确，且尽量使用英文值。

  7. APK的默认包名是『com.tungsten.fcl.server』，如果你需要修改包名请根据群文件要求来；千万不要使用『NP/MT』管理器自带的『APK共存』功能！！！

  8. 在APK的『assets』目录下，有些目录内自带的『version』文件请不要删除，否则会造成应用崩溃或卡加载！

  9. 禁止直接反编译APK的dex文件；请使用Git克隆该项目源码，并使用IDE集成开发环境进行修改
```
::::

### 2. settings_launcher_pictures `文件夹` （启动器主页和鼠标贴图）

::: tip

请仔细阅读该文件夹下的 `格式说明.pdf`。

:::

该目录下只能上传下表中的文件：

|文件名|功能|文件大小|分辨率|
|---|---|---|---|
|`lt.png`|亮色模式背景图片|≤2MB|≤2560x1440|
|`dk.png`|暗色模式背景图片|≤2MB|≤2560x1440|
|`cursor.png`|鼠标指针图片|≤48KB|≤128x128|
|`menu_icon.png`|菜单键图片|≤32KB|≤64x64|

### 3. authlib_injector_server.json（皮肤站地址）

:::: details 默认配置

``` json title="authlib_injector_server.json"
{
  "注意事项": {
    "配置文件说明1": "只能在“server-address”数组内写内容，其余地方禁止改动",
    "配置文件说明2": "请确保配置文件编码是UTF-8！！！",
    "格式说明1": "请严格按照JSON文件格式编辑，若格式出现问题启动器将不会解析任何地址",
    "格式说明2": "server-address数组内只能只能为字符串格式，数组的最后一个元素后面不需要加英文逗号",
    "格式说明3": "若皮肤站链接是http协议的不能省开头，必须写完整的；如：http://makeblock.net.cn",
    "格式说明4": "若数组内只有一个元素也不允许加英文逗号",
    "server-address对象值说明": "一行一个服务器地址，接受格式如下：",
    "正确的服务器格式1": "littleskin.cn",
    "正确的服务器格式2": "https://littleskin.cn/api/yggdrasil",
    "正确的服务器格式3": "littleskin.cn/api/yggdrasil",
    "正确的服务器格式补充": "其他格式也可以，只要你在FCL启动器内能添加的认证地址都可以写进来"
  },
  "server-address": [
    "littleskin.cn"
  ]
}
```
::::

### 4. config.json
::: info

为了实现多端共存，请私有目录的路径 `/storage/emulated/0/Android/data/com.tungsten.fcl.server/files/.minecraft` 为 `/storage/emulated/0/Android/data/你的包名/files/.minecraft` ，但由于按键解压路径在 `公有目录` ，按键不同启动器会自动检测而导致需要重新解压，所以为了不每次打开不同启动器都要重新解压，你需要更改 `公有目录` 路径 `/storage/emulated/0/FCL-Server/.minecraft` 中的 `FCL-Server`，建议为你服务器名称英文名。

:::
::: tip

按键默认解压目录详见 `general_setting.properties` 中的 `controller-dir`。

:::

修改可参考 [MinecraftArgs](https://zhuanlan.zhihu.com/p/12840515737)。


:::: details 默认配置
``` json title="config.json"
{
  // 自动选择下载方式（官方源/镜像源）
  "autoChooseDownloadType": true,
  // 自动选择下载线程
  "autoDownloadThreads": true,
  "_version": 0,
  "configurations": {
    "公有目录": {
      "global": {
        // 开启后会在『.minecraft/versions/xxxx』版本下生成一个『fclversion.cfg』文件，然后会使用该文件的设置项游戏设置项依据。
        "usesGlobal": true,
        // Java虚拟机参数（不懂的别乱改）
        "javaArgs": "",
        // 游戏参数（不懂的别乱改）
        "minecraftArgs": "",
        // 游戏内存设置『值低于0则会根据设备运行内存大小自动设置』。
        "maxMemory": -1,
        // 启动器的『自动分配内存』选项。
        "autoMemory": true,
        // 启动器的『内存永久保留区域』选项。
        "permSize": "",
        // 启动器的『服务器地址』选项。
        "serverIp": "",
        // 启动器的『Java版本』选项，可以设置Auto、jre8、jre11、jre17、jre21。
        "java": "Auto",
        // 启动器的『窗口分辨率』选项，范围为25~100。
        "newScaleFactor": 1.0,
        // 启动器的『不检查游戏完整性』选项，可以设置false、true。
        "notCheckGame": false,
        // 启动器的『不检查JVM兼容性』选项，可以设置false、true。
        "notCheckJVM": false,
        // 启动器的『基岩版触控手势』选项，可以设置false、true。
        "beGesture": true,
        // 启动器的『允许Zink使用系统Vulkan驱动』选项，可以设置false、true。
        "vulkanDriverSystem": false,
        // 使用哪个按键布局，这个建议保留默认别乱动。
        "controller": "00000000",
        // 启动器的『渲染器』选项，具体可设置内容见『launcher_rules.json』文件；需要注意的是，该设置是设置第一次运行启动器选择哪个渲染器。
        "renderer": "",
        // 启动器的『Vulkan驱动』选项，这是给Zink渲染器设置的；需要注意的是Zink渲染器通常不支持最新的设备。
        "driver": "",
        // 启动器的『版本隔离』选项，可以设置false、true。
        "isolateGameDir": false,
        // 启动器的『强制渲染器在大核上运行(Pojav后端)』选项，可以设置false、true。
        "pojavBigCore": false
      },
      // 储存目录
      "gameDir": "/storage/emulated/0/FCL-Server/.minecraft",
      "selectedMinecraftVersion": ""
    },
    "私有目录": {
      "global": {
        // 开启后会在『.minecraft/versions/xxxx』版本下生成一个『fclversion.cfg』文件，然后会使用该文件的设置项游戏设置项依据。
        "usesGlobal": true,
        // Java虚拟机参数（不懂的别乱改）
        "javaArgs": "",
        // 游戏参数（不懂的别乱改）
        "minecraftArgs": "",
        // 游戏内存设置『值低于0则会根据设备运行内存大小自动设置』。
        "maxMemory": -1,
        // 启动器的『自动分配内存』选项。
        "autoMemory": true,
        // 启动器的『内存永久保留区域』选项。
        "permSize": "",
        // 启动器的『服务器地址』选项。
        "serverIp": "",
        // 启动器的『Java版本』选项，可以设置Auto、jre8、jre11、jre17、jre21。
        "java": "Auto",
        // 启动器的『窗口分辨率』选项，范围为25~100。
        "newScaleFactor": 1.0,
        // 启动器的『不检查游戏完整性』选项，可以设置false、true。
        "notCheckGame": false,
        // 启动器的『不检查JVM兼容性』选项，可以设置false、true。
        "notCheckJVM": false,
        // 启动器的『基岩版触控手势』选项，可以设置false、true。
        "beGesture": true,
        // 启动器的『允许Zink使用系统Vulkan驱动』选项，可以设置false、true。
        "vulkanDriverSystem": false,
        // 使用哪个按键布局，这个建议保留默认别乱动。
        "controller": "00000000",
        // 启动器的『渲染器』选项，具体可设置内容见『launcher_rules.json』文件；需要注意的是，该设置是设置第一次运行启动器选择哪个渲染器。
        "renderer": "",
        // 启动器的『Vulkan驱动』选项，这是给Zink渲染器设置的；需要注意的是Zink渲染器通常不支持最新的设备。
        "driver": "",
        // 启动器的『版本隔离』选项，可以设置false、true。
        "isolateGameDir": false,
        // 启动器的『强制渲染器在大核上运行(Pojav后端)』选项，可以设置false、true。
        "pojavBigCore": false
      },
      // 储存目录
      "gameDir": "/storage/emulated/0/Android/data/com.tungsten.fcl.server/files/.minecraft",
      "selectedMinecraftVersion": ""
    }
  },
  "downloadThreads": 64,
  "downloadType": "bmclapi",
  "last": "私有目录",
  "versionListSource": "balanced"
}
```
::::

### 5. general_setting.properties（常规设置）

该文件注释非常清晰，文中不作赘述。

::: info 解决无法使用中文的问题

中文可能导致显示内容乱码，所以可将 `中文` 转化成 `Unicode`

:::

### 6. launcher_rules.json（启动器规则）

:::: details 默认配置

``` json title="launcher_rules.json"
{
  "formatSpecification": {
    "重要说明1": "所有游戏设置规则只能在『launcherRules』里面写，不能在其他任何地方写",
    "重要说明2": "请严格按照Json文件格式编写，若出现错误则任何规则都不会识别",
    "重要说明3": "请注意，只要是数组数据结构的一律有使用优先级；也就是谁在前谁就会优先使用",
    "重要说明4": "如果某个版本有多个适用规则则只会读取第一个有效的，其余均无效",
    "内存项说明": {
      "说明1": "『minMemory』项的值不能低于“1024”，否则该项检测会自动失效"
    },
    "渲染器项说明": {
      "说明1": "截至2025年7月9日，启动器内置的渲染器共包含以下6类：",
      "说明1-1": "f7e985d8-6d4c-f63c-d9f1-06074dab823a『Holy-GL4ES』，6『Custom』",
      "说明1-2": "417a7a93-d9b4-98b9-ec6e-1ea400259c1f『VirGLRenderer』",
      "说明1-3": "0fb718e4-64e3-83d4-a974-8204ea1d9f9f『VGPU』",
      "说明1-5": "18d93f17-ff53-a319-fa61-58709a77bf87『Vulkan Zink』",
      "说明1-6": "8d427e6c-9d22-2d19-db0c-3b9ac2c1543f『Freedreno』",
      "说明1-7": "1a46495a-5503-eaf5-9e3d-1ba08626b95b『GL4ES+』",
      "说明2": "在『useRenderer』字段中，需填写上述渲染器对应的UUID，而非渲染器名称",
      "说明3": "若是自定义渲染器，则需要在『useRenderer』字段中填写对象型数据，详细格式如下：",
      "说明3-1": {"packageName": "ren.test.com", "name": "Renderer name"},
      "说明3-2": "『packageName』是app的包名，『name』是该渲染器别名",
      "说明3-3": "且这两个key的值必须有合法的，不合法的将不被解析；获取包名方式请百度，这里不会介绍如何获取"
    },
    "Java项说明": {
      "说明1": "该功能暂未启用，预计下周正式启用！"
    }
  },
  "launcherRules": {
    "1.17": {
      "memory": {
        "minMemory": 3072,
        "tip": "内存最低要求为“${minMemory}MB”\n由于你的设备总运行内存只有“${totalMemory}GB”，不满足最低配置要求！"
      },
      "renderer": {
        "useRenderer": [{"packageName": "com.fcl.plugin.mobileglues", "name": "MobileGlues"}],
        "downloadURL": "https://icraft.ren:90",
        "tip": "当前所使用的渲染器为『${setRenderer}』，要求的渲染器必须为『${requiredRenderer}』\n\n检测到您未安装该渲染器，请点击右下角按钮安装额外渲染器，否则游戏将不能启动！！！"
      },
      "java": {
        "useJava": ["jre8"],
        "downloadURL": "https://icraft.ren:90",
        "tip": "当前所使用的Java为“${useJava}”，要求必须是使用如下Java才可以启动游戏：\n${requiredJava}"
      }
    }
  }
}
```
::::

### 7. menu_setting.json（菜单设置）

|配置项|默认值|功能|
|---|---|---|
|autoFit|true|自动吸附|
|autoFitDist|0|自动吸附间距（单位：dp）|
|lockMenuView|false|锁定菜单键|
|hideMenuView|false|隐藏菜单键|
|disableSoftKeyAdjust|false|禁用软键盘自适应|
|showLog|false|显示日志|
|disableGesture|false|禁用手势|
|disableBEGesture|false|禁用仿基岩版手势|
|gestureMode|0|触摸模式（0 为建筑模式，1 为战斗模式）|
|disableLeftTouch|false|禁用左半屏触控|
|enableGyroscope|false|启用陀螺仪|
|gyroscopeSensitivity|10|陀螺仪灵敏度|
|mouseMoveMode|0|鼠标控制模式（0 为点击，1 为拖动）|
|mouseSensitivity|1.0|鼠标灵敏度|
|mouseSensitivityCursor|2.0|鼠标灵敏度（当指针可见时）|
|mouseSize|15|鼠标尺寸|
|itemBarScale|0|物品栏缩放|
|windowScale|1.0|窗口分辨率|
|cursorOffset|0.0|鼠标指针偏移量|
|gamepadDeadzone|1.0|手柄死区|

## 按键配置

::: tip 按键配置

按键配置存放在 `/assets/controllers` 目录中。

:::

按键制作只能在启动器内进行。

## 包体压缩

::: tip

对客户端处理时已经提出了一种减少包体大小的方法（即删去.minecraft文件夹下的 `assets` 和 `libraries` 文件夹）。

:::

第二种方法为删去 `assets\app_runtime` 下的部分文件。

接下来，我将介绍该文件夹下各文件的作用：

|文件夹名|作用|
|---|---|
|caciocavallo|如果用到 `Java 8` 的 `AWT/Swing` 图形组件库会用到该运行库|
|caciocavallo11|如果用到 `Java 11` 的 `AWT/Swing` 图形组件库会用到该运行库|
|caciocavallo17|如果用到 `Java 17` 的 `AWT/Swing` 图形组件库会用到该运行库|
|java|各种Java运行环境|
|jna|允许Java程序调用系统本地库（不可删除）|
|lwjgl|游戏运行时需要用到的库，`Pojav` 启动端会用到（谨慎删除）|
|lwjgl-boat|游戏运行时需要用到的库，`Boat` 启动端会用到（谨慎删除）|

#### 使用说明

一般情况下，只需对 `caciocavallo` 或 `java` 资源进行修改即可，其他文件**不推荐改动**！

比如，我删除了 `Java 11` 和 `Java 17` 运行环境（由于我删除了 `Java 17` 和 `Java 11`，所以 `caciocavallo11` 和 `caciocavallo17` 不会保留）。
