# 概览

SuperiorSkyBlock 是一款现代化的空岛插件，对原有的经典空岛玩法进行了诸多改进与调整。

SuperiorSkyBlock 是一款多合一的空岛插件。其中的所有内容均可自定义，附带内容丰富的 API，使你能够按需开发插件相关内容。插件经过高度优化，确保服务器能够承受尽可能多的玩家！

## 目录

* [概览](#概览)
  * [支持插件](#支持插件)
    * [刷怪笼插件](#刷怪笼插件)
    * [皮肤插件](#皮肤插件)
    * [挂机插件](#挂机插件)
    * [隐身插件](#隐身插件)
    * [权限插件](#权限插件)
    * [变量插件](#变量插件)
    * [堆叠插件](#堆叠插件)
    * [价格插件](#价格插件)
    * [额外插件](#额外插件)
  * [命令与权限](commands-and-permissions/)
    * [玩家命令](commands-and-permissions/player-commands.md)
    * [管理员命令](commands-and-permissions/admin-commands.md)
    * [权限](commands-and-permissions/permissions.md)
  * [变量](placeholders/index.md)
    * [全局变量](placeholders/global-placeholders.md)
    * [岛屿变量](placeholders/island-placeholders.md)
    * [玩家变量](placeholders/player-placeholders.md)
    * [聊天变量](placeholders/chat-placeholders.md)
  * [配置文件](configuration-files.md)
    * [文件结构](configuration-files.md#结构目录)
    * [配置文件](configuration-files.md#配置文件)
  * [消息文件](messages.md)
    * [原文本](messages.md#原文本)
    * [复杂文本](messages.md#复杂消息)
      * [ActionBar](messages.md#actionbar-消息)
      * [标题](messages.md#标题消息)
      * [可交互消息](messages.md#可交互消息)
    * [自定义语言文件](messages.md#自定义语言文件)
  * [岛屿标志](island-flags.md)
    * [内置标志](island-flags.md#内置标志)
    * [自行创建](island-flags.md#自行创建岛屿标志)
  * [岛屿权限](island-privileges.md)
    * [内置权限](island-privileges.md#内置特权)
    * [自行创建](island-privileges.md#自行创建特权)
  * [岛屿结构](schematics.md)
    * [自行创建](schematics.md#创建第一个结构)
    * [WorldEdit 结构文件](schematics.md#worldedit-结构)
    * [自行添加](schematics.md#自行添加结构)
  * [升级](upgrades/index.md)
    * [升级模块](upgrades/index.md#升级模块)
    * [自行创建](upgrades/index.md#创建第一个升级)
    * [等级字段](upgrades/index.md#等级字段)
      * [所处检查](upgrades/index.md#所需检查)
    * [岛屿价值](upgrades/index.md#岛屿值)
    * [价格类型](upgrades/index.md#价格类型)
      * [示例](upgrades/index.md#示例)
    * [岛屿翻倍卡](upgrades/island-multipliers.md)
      * [作物生长](upgrades/island-multipliers.md#作物生长)
      * [刷怪速率](upgrades/island-multipliers.md#刷怪速率)
      * [掉落物品](upgrades/island-multipliers.md#实体掉落)
  * [菜单](menus/index.md)
    * [编辑外观](menus/index.md#编辑菜单样式)
    * [编辑物品](menus/index.md#编辑菜单内的物品)
    * [为物品赋予交互音效](menus/index.md#物品音效)
    * [执行自定义命令](menus/index.md#执行自定义命令)
    * [权限部分](menus/index.md#权限部分)
    * [创建自定义菜单](menus/index.md#创建自定义菜单)
  * [任务](missions/index.md)
    * [任务如何工作？](missions/index.md#任务是如何工作的)
    * [默认任务 Jar 文件](missions/index.md#默认任务模块)
    * [任务文件结构](missions/index.md#任务模块文件结构)
    * [创建首个任务](missions/index.md#创建任务)
    * [创建任务 Jar 文件](missions/index.md#自行编写任务模块)
    * [方块任务](missions/blocksmissions.md)
    * [酿造任务](missions/brewingmissions.md)
    * [合成任务](missions/craftingmissions.md)
    * [附魔任务](missions/enchantingmissions.md)
    * [耕作任务](missions/farmingmissions.md)
    * [钓鱼任务](missions/fishingmissions.md)
    * [岛屿任务](missions/islandmissions.md)
    * [物品任务](missions/itemsmissions.md)
    * [击杀任务](missions/killsmissions.md)
    * [统计数据任务](missions/statisticsmissions.md)
  * [JavaScript 引擎](javascript-engine.md)
    * [如何安装外部脚本引擎？](javascript-engine.md#如何安装外部脚本引擎)
  * [API](api/index.md)
    * [基本用法](api/index.md#基本用法)
    * [创建自定义命令](api/register-your-own-command.md)
    * [注册方块键](api/register-your-own-block-keys.md)
  * [附属](addons/index.md)
    * [单方块附属](addons/index.md#oneblock-附属)
    * [跨服附属](addons/index.md#proxybridge-附属)
    * [酸岛附属](addons/index.md#acidislands-附属)
    * [自定义脚本引擎附属](addons/index.md#自定义脚本引擎附属)
      * [Nashorn 引擎](addons/index.md#nashorn-引擎)
      * [Rhino 引擎](addons/index.md#rhino-引擎)
      * [GraalVM 引擎](addons/index.md#graalvm-引擎)

## 支持插件

### 刷怪笼插件

下面列出插件的刷怪笼，包括叠加形式在内，会与本插件的排行榜值正常兼容计算。

* [AdvancedSpawners](https://www.spigotmc.org/resources/75458/)
* [EpicSpawners](https://songoda.com/marketplace/product/13)
* [MergedSpawner](https://polymart.org/resource/189)
* [RoseStacker](https://www.spigotmc.org/resources/82729/)
* [SilkSpawners](https://www.spigotmc.org/resources/7811/)
* [UltimateStacker](https://songoda.com/marketplace/product/16)
* [WildStacker](https://bg-software.com/wildstacker/)

### 皮肤插件

下面列出的插件可以为菜单内的皮肤头颅提供皮肤获取服务。

* [ChangeSkin](https://www.spigotmc.org/resources/21469/)
* [SkinRestorer](https://www.spigotmc.org/resources/2124/)

### 挂机插件

下面列出的插件可用于检测玩家的挂机状态。

* [CMI](https://www.spigotmc.org/resources/3742/)
* [Essentials](https://www.spigotmc.org/resources/9089/)

### 隐身插件

下面列出的插件可用于检测隐身玩家、隐身玩家不会出现在在线状态与在线变量等内容中。

* [CMI](https://www.spigotmc.org/resources/3742/)
* [Essentials](https://www.spigotmc.org/resources/9089/)
* [SuperVanish](https://www.spigotmc.org/resources/1331/)
* [VanishNoPacket](https://dev.bukkit.org/projects/vanish/)

### 权限插件

下面列出的插件会在检查权限时直接调用对应的 API。

* [LuckPerms](https://www.spigotmc.org/resources/28140/)

### 变量插件

下面列出的插件会自动注册变量。

* [MVdWPlaceholderAPI](https://www.spigotmc.org/resources/11182/)
* [PlaceholderAPI](https://www.spigotmc.org/resources/6245/)

### 堆叠插件

下面列出插件的堆叠方块会与本插件的排行榜值正常兼容计算。

* [RoseStacker](https://www.spigotmc.org/resources/82729/)
* [WildStacker](https://bg-software.com/wildstacker/)

### 价格插件

下面列出的插件可以与本插件同步方块价值。

* [ShopGUIPlus](https://www.spigotmc.org/resources/6515/)

### 额外插件

* [CoreProtect](https://www.spigotmc.org/resources/8631/)\
  方块堆叠行为会被记录至 CoreProtect。
* [JetsMinions](https://www.spigotmc.org/resources/59972/)\
  精灵挖掘方块的行为会被记录。
* [LeaderHeads](https://www.spigotmc.org/resources/2079/)\
  岛屿数据会自动与 LeaderHeads 同步，以通过此插件显示排行榜数据。
* [Slimefun](https://github.com/Slimefun/Slimefun4)\
  \- 支持保护粘液科技的机械\
  \- 支持检测挖矿机器人的行为\
  \- 粘液科技的机械在删除岛屿时会一并清除\
  \- 支持检测方块放置器的行为