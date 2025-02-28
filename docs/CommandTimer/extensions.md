# 拓展模块
拓展模块可以给插件添加额外的功能。每个拓展模块都是 jar 文件的形式，插件可以用它们拓展自己的功能。

## 安装拓展模块

拓展模块不是插件。它们需要放在 `commandtimer/extensions` 文件夹下。

在放入这个文件夹以后，你就可以在不同的菜单界面中看见正在运行的拓展（例如，如果你安装了条件拓展模块，那么你就可以在条件设置界面中找到由拓展模块添加的内容）。

## 可用拓展模块

这里是可供下载安装的完整拓展模块列表。官方拓展模块是由本插件的开发团队制作的，而社区拓展模块如其名，就是由社区制作并发布的拓展模块。

### 官方拓展模块
* [时间拓展](https://www.spigotmc.org/resources/time-conditions-commandtimer-extension.105591/)
* [玩家拓展](https://www.spigotmc.org/resources/player-conditions-commandtimer-extension.97186/)
* [服务器拓展](https://www.spigotmc.org/resources/server-conditions-commandtimer-extension.97188/)
* [GriefDefender 拓展](https://www.spigotmc.org/resources/griefdefender-conditions-commandtimer-extension.106330/)
* [WorldGuard 拓展](https://www.spigotmc.org/resources/worldguard-conditions-commandtimer-extension.112403/)
* [Vault 拓展](https://www.spigotmc.org/resources/vault-conditions-commandtimer-extension.112471/)

### 社区拓展模块

如果你制作了拓展模块并想发布在这里，请在 [Github](https://github.com/titivermeesch/CommandTimer) 上发出请求。

* [PlaceholderAPI Extension](https://github.com/TreemanKing/CommandTimer-PAPIConditions)

## 制作拓展模块

制作拓展模块相对简单，跟随本章节教程即可。

1. 创建一个新的 Java 项目。最好能使用诸如 Maven 或 Gradle 这样的依赖管理器。
2. 将 CommandTimer 设为项目的依赖。见开发者文档来获取更多细节。
3. 创建一个类，这个类会是你的拓展模块的切入点。这个类**需要**继承 `ConditionExtension`（位于 `me.playbosswar.com.api.ConditionExtension`） 
4. 在主类建立完毕之后，你就可以着手添加更多内容了。我推荐先编译你的 Jar 文件并检查它是否会在游戏菜单内出现。

### 添加拓展条件

拓展的一种可能就是给条件模块添加新的条件。

条件可通过继承了 `ConditionRule`（位于 `me.playbossbar.com.api.ConditionRule`）的类表示。你也需要向你的项目中添加 [Easy Rules](https://github.com/j-easy/easy-rules) 包。但你不需要手动 shade，因为本插件已为你自动预打包。本插件使用的版本为 `4.1.0` 所以理想情况下你的拓展使用的版本应当相同。

条件最重要的部分是 `ConditionRule#evaluate(Facts facts)` 方法。这个方法会在每次插件的执行循环（约每秒/次）触发，来检查是否满足给定的条件。

事实上，只有 `player` 对象默认可用。**以特定身份如 `CONSOLE`（控制台）执行时将不可用。**

若要获取正在用于检查条件的玩家，你可以这样做：
```Java
Player p = facts.get("player")
```
这里另一个重要的方法是 `ConditionRule#getNeededValues()`。该方法会返回一个 `NeededValue` 对象，表示了条件所需的额外参数。你可以将它当做玩家所需提供额外参数的设置。    
这里是支持类型的列表：
* Double
* Intenger
* String
* ConditionCompare

这些类型中除 `ConditionCompare` 外均为 Java 自带的数据类型，`ConditionCompare` 会在两个值比较时使用。可以为 EQUAL、LESS_THEN、BIGGER_OR_EQUAL_THEN 等。类本身可以有不同的选择。可以在[这里](https://github.com/titivermeesch/CommandTimer_PlayerConditions/blob/master/src/main/java/me/playbosswar/cmtplayerconditions/conditions/PlayerTimeInWorldCondition.java)找到相关示例。