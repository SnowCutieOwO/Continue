# 本地化与翻译

### 概述

LuckPerms 所有在游戏内的语言都可以自定义或通过翻译系统切换语言。

使用*英语*的基础翻译文件可以在这里找到：[`luckperms_en.properties`](https://github.com/LuckPerms/LuckPerms/blob/master/common/src/main/resources/luckperms_en.properties)

## 贡献

将该项目翻译为其他语言的工程可在我们的 [Crowdin 项目](https://crowdin.com/project/luckperms)上找到。

我们非常感谢你的帮助！❤️

## 使用社区贡献的“官方”翻译

若要显示安装/可用的翻译，输入命令 `/lp translations` 即可。

若要安装最新的社区翻译，输入命令 **`/lp translation install`** 即可。（你可以多次输入命令来重载语言和应用改动）

玩家收到的消息语言依照他们的客户端语言，如果没有可用翻译存在，则会显示默认的英语。

## 使用自定义翻译

翻译可以通过下面的步骤载入插件：

* 创建文件夹 `/plugins/LuckPerms/translations/`
* 导出修改后的 `.properties` 玩家，并将其重命名为 `<语言 ID>.properties`
    * 支持的语言 ID 可以在[这里](https://www.localeplanet.com/java/)找到。
    * 例如，若要载入*西班牙语*的翻译，则文件名为 `es.properties`，*葡萄牙语（巴西）*的文件名为 `pt_BR.properties`
* 重启服务器。