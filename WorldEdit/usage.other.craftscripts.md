# 快速脚本

脚本允许你在不学习 Java 的情况下快速完成一些小任务，无需知晓编译 WorldEdit 的方法，或是自行写轮子。需要注意的是快速脚本本身是 JavaScript 写就的。

## 要求

在你开始使用快速脚本之前，你需要先安装 [Rhino JavaScript 引擎](https://github.com/mozilla/rhino/releases)。直接下载的链接可以[点击这里](https://github.com/mozilla/rhino/releases/download/Rhino1_7_13_Release/rhino-runtime-1.7.13.jar)获取。
将下载下来的文件重命名为 `js.jar`。将 `js.jar` 放入 `plugins/` 或 `plguins/WorldEdit` 文件夹下（对 Bukkit 系核心而言），或者是 `mods` 文件夹下（对其他种类的核心而言）。

## 使用快速脚本

在你安装完 JS 引擎之后，将你的快速脚本 `.js` 文件放在 `craftscripts` 文件夹中（在 WorldEdit 配置文件夹中 - 可能是 `plugins/WorldEdit` 或者 `config/WorldEdit` 文件夹下，取决于你所使用的服务端核心种类）。

运行快速脚本

```
/cs <文件名称> <参数>
/.s <参数>
```

`/cs` 命令将会执行给定名称的快速脚本（`.js` 后缀可省略）。每个快速脚本都有它自己的参数。命令 `/.s` 将会执行你最近执行过的快速脚本。

## 编写快速脚本

在 WorldEdit 中编写脚本允许创建能够改变世界的代码，而无需学习 Java 或编译代码。脚本，在 WorldEdit 中被称作“快速脚本”（CraftScripts），它以 JavaScript 的格式写就并存放在你的 craftscripts/ 文件夹下。在 WorldEdit 使用脚本的优点如下：

* 直接对接至 WorldEdit 的撤销/重做系统；
* 使用 WorldEdit 的方块放置优先级；
* 接受 WorldEdit 强大的方块类型格式（`//set sign[facing=north]`）；
* 获取用户的选区。

::: tip
推荐你在编写快速脚本之前对 Java 或者 JavaScript 进行一些基本的了解。
:::

::: tip  
当我们使用 WorldEdit API 编写快速脚本时，对这部分内容的限制并不算多。    
进阶用户甚至可以与服务端底层 API（如 Bukkit、NeoForge 等）进行对接。
:::

### 介绍

快速脚本在公共命名空间下有三个变量：


* `context` 为 [CraftScriptContext](https://github.com/EngineHub/WorldEdit/blob/master/worldedit-core/src/main/java/com/sk89q/worldedit/scripting/CraftScriptContext.java) 的实例；
* `player` 为触发了该快速脚本的玩家，即一个 [Player](https://github.com/EngineHub/WorldEdit/blob/master/worldedit-core/src/main/java/com/sk89q/worldedit/entity/Player.java) 实例；
* `argv` 是一个 Java 的数组字符串，存储了调用脚本以来使用的所有参数。


**操作方块**

所有在 WorldEdit 中的方块编辑都是通过 EditSession 完成的。这个对象会自动处理所有历史和方块放置顺序。若要为自己的快速脚本获取一个编辑选区，你需要使用：

```Java
var sess = context.remember();
```

每次你调用这个方法时，都会获得一个新的 `EditSession` 对象，所以请确保在编写脚本时只引入一个该对象。若要设置方块，你既要提供一个表示方块种类和一或多个属性的结合内容 `BlockState`，或一个 `BaseBlock`，即表示带有可能的额外 NBT 数据的 `BlockState` 对象，所以请确保在编写脚本时只引入一个该对象。若要设置方块，你既要提供一个表示方块种类和一或多个属性的结合内容。

::: info 示例：将一个方块设置为白色羊毛

```Java
importPackage(Packages.com.sk89q.worldedit.world.block);
var sess = context.remember();
sess.setBlock(player.getBlockOn().toVector().toBlockPoint(), BlockTypes.WHITE_WOOL.getDefaultState());
```
:::

若要获取方块，请在 EditSession 上使用方法 `getBlock()` 方法。这个方法将会返回一个 `BaseBlock`。

### 处理参数

参数在 `argv` 变量中传递。若你需要检查玩家提供的参数数量是否正确，你可以使用方法 `CraftScriptContext#checkArgs()`。将
`CraftScriptContext` 可通过 `CraftScriptContext#checkArgs()` 进行基本的参数判断。你也可以使用 `WorldEdit.getInstance().getPatternFactory()` 和 `.getMaskFactory()` 直接对接 WorldEdit 的判断器。

::: info 示例：检查参数
```Java
context.checkArgs(1, 3, "<block> [width] [height]");
var block = context.getBlock(argv[1]);
```
:::

如果玩家输入了一个无效方块怎么办？脚本将会抛出一个错误，如果你不尝试捕捉这个错误的话，玩家就会收到这条错误的消息，且脚本也会被强制中止。

### 处理 Java 包

若要导入一个 Java 包，你可以按下列格式进行操作：

```Java
importPackage(Packages.package.name.here);
```

你可以导入任何在 Java class 路径中可用的包 - 即使它不与 WorldEdit 相关。

### 示例脚本

你可以在 [WorldEdit 的 Github 仓库](https://github.com/EngineHub/WorldEdit/tree/master/contrib/craftscripts)找到一些示例脚本。需要注意的是不是所有脚本都会更新以适配最新版本的 WorldEdit API。你可以在 API 章节找到更多有关 WorldEdit API 的描述。

## 另见

* LocusAzzuro, 2016.3.10, *[WorldEdit]CraftScript脚本 - 编写出你想要的WE功能！ [~3200字]*, https://www.mcbbs.net/thread-565465-1-1.html
