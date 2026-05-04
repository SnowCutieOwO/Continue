# TownyAPI

[[toc]]

在插件中使用 Towny API 非常简单。这里有两种版本供你使用：

1. 原 API，支持 0.94.0.0 或更低的版本（旧 Javadoc 可以在[这里](http://palmergames.com/javadoc/towny-bukkit/)浏览）
2. 新 API，支持 0.94.0.1 或更高的版本（新 Javadoc 可以在[这里](https://townyadvanced.github.io/javadocs/)浏览）

新 API 支持调用旧 API 的内容，但是会被标记为“弃用”。强烈建议插件作者切换到新 API。

## 在 IDE 中导入项目

0.94.0.12 之后版本的构建可以在 Maven 仓库中获取。

### 将 Towny 导入 pom.xml 文件

#### 方法一：从 jitpack.io 导入

![](https://jitpack.io/#TownyAdvanced/Towny)

Jitpack.io 在网站上托管了大量的 github 项目，Towny 也入驻 jitpack.io 并建立了自己的[仓库](https://jitpack.io/#TownyAdvanced/Towny)。Jitpack 美中不足的是更新略慢，如果上方标牌显示为绿色，那么你可以把如下内容加入 pom.xml 使用这个来源：

::: detailsJitpack 导入配置

``` XML
  <repositories>
	<repository>
	    <id>jitpack.io</id>
	    <url>https://jitpack.io</url>
	</repository>
  </repositories>
  <dependencies>
	<dependency>
	    <groupId>com.github.TownyAdvanced</groupId>
	    <artifactId>towny</artifactId>
	    <version>0.102.0.0</version>
	    <scope>provided</scope>
	</dependency>
  </dependencies>  
```

:::

如果你用的是 Gradle，你可以将如下配置复制进 gradle.build 文件里：

``` Kotlin
repositories {
    maven { url = 'https://jitpack.io' }
}

dependencies {
    compileOnly 'com.github.TownyAdvanced:Towny:0.102.0.0'
}
```

#### 方法二：Glare 的仓库

在 Towny 0.97.5.7 之后的版本，你可以从 Glare 的仓库获取 Towny。

##### Maven：

``` XML
  <repositories>
    <repository>
      <id>glaremasters repo</id>
      <url>https://repo.glaremasters.me/repository/towny/</url>
    </repository>
  </repositories>

  <dependencies>
    <dependency>
      <groupId>com.palmergames.bukkit.towny</groupId>
      <artifactId>towny</artifactId>
      <version>0.102.0.0</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>
```

##### Gradle：

``` Kotlin
repositories {
    maven {
        name = 'glaremasters repo'
        url = 'https://repo.glaremasters.me/repository/towny/'
    }

dependencies {
    compileOnly 'com.palmergames.bukkit.towny:towny:0.102.0.0'
}
```

#### 方法三：Github 包

Github 包只会随 Towny 正式版本的发布而更新，例如：0.97.0.0，0.97.1.0，0.97.2.0，而且没有前瞻版本更新。如果你不介意被 Github 的奇葩验证拷打，也没有需求使用最新的构建，那么你可以试试看这个选择。

::: detailsGithub 包介绍

[设置 Github 令牌](https://help.github.com/en/articles/configuring-apache-maven-for-use-with-github-package-registry#authenticating-to-github-package-registry)之后，开发者可以通过如下步骤使用发行包。

如果你只需要向现存插件的 pom.xml 中加入 Towny，那么你需要为令牌分配 `read:packages` 和 `write:packages` 权限。
 
在你的 `settings.xml` 文件中，你必须填入如下内容：

``` XML
  <servers>
    <server>
      <id>github-towny</id>
      <username>在此填入 Github 用户名</username>
      <password>在此填入 Github 访问令牌</password>
    </server>
    <server>
      <id>github-tne</id>
      <username>在此填入 Github 用户名</username>
      <password>在此填入 Github 访问令牌</password>
    </server>
  </servers>
```

如果你需要从 Maven 构建 Towny，那么就需要填写 github-tne 部分，只需要将其用作插件依赖时无需填写。

必须让上述服务器匹配下面仓库的值。

配置完毕以后，你可以在 pom.xml 文件中填入如下内容：

``` XML
  <repositories>
    <repository>
      <id>github-towny</id>
      <url>https://maven.pkg.github.com/TownyAdvanced/Towny</url>
    </repository>   
  </repositories>
  <dependencies>                    
    <dependency>
      <groupId>com.palmergames.bukkit.towny</groupId>
      <artifactId>Towny</artifactId>
      <version>0.102.0.0</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>  
```

:::

### 将 Towny 导入插件的 plugin.yml

切记，API 在 0.94.0.2 之后有重大更新，因此你指定的版本号应当比它更大。添加项目依赖后，你可以将 Towny 填入 plugin.yml 的 depend（硬依赖）或 softdepend（软依赖）列表（视插件对 Towny 的功能依赖或兼容情况），最后，在插件代码的导入部分添加如下内容：

``` Java
import com.palmergames.bukkit.towny.TownyAPI;
```

### 下载源码与文档

文档与源码可以进一步解释 Towny API 的作用。你可以通过如下方法在 IDE 中下载它们：

#### IntelliJ IDE

双击 shift 进入热键菜单，输入 download，点击“下载源码与文档（Download Sources and Documentation）”

## 常见 API 用法

### 检查玩家是否处于郊区

这种检查相当简单：

``` Java
if (TownyAPI.getInstance().isWilderness(player.getLocation()))
   return false;
```

接受任意类型的 Location 对象。

### 检查玩家是否在自己的城镇中

若要获取玩家所处的城镇，你必须先检查构成城镇的城镇地块。如果玩家处于郊区，试图在他附近获取城镇地块可能会返回 null，所以建议使用 `isWilderness(Location loc)` 方法（上文有提及）筛选后再寻找城镇地块。

``` Java
   Town town = TownyAPI.getInstance().getTown(player.getLocation());
   if (town != null && resident.hasTown() && resident.getTownOrNull().equals(town)) {
       // 在这里加入你的代码
   }
   //Or:
   if (town != null && town.hasResident(player.getName())) {
       // 在这里加入你的代码
   }
```

上述代码需要引入如下内容：

``` Java
import com.palmergames.bukkit.towny.object.Resident;
import com.palmergames.bukkit.towny.object.Town;
```

之后你还可能需要获取城镇居民进一步使用上述代码，所以...

### 从玩家获取城镇居民

你可能经常需要从玩家身上获取居民对象。它有多种实现方法：

``` Java
import com.palmergames.bukkit.towny.object.Resident;

// 通过玩家对象
Resident resident = TownyAPI.getInstance().getResident(player);

// 通过玩家 UUID
Resident resident = TownyAPI.getInstance().getResident(player.getUniqueId());

// 或者通过玩家名称
resident = TownyAPI.getInstance().getResident(player.getName());
```

### 从城镇居民获取玩家

如果你有一个城镇居民对象，你需要从中获取 Bukkit 的玩家对象，也有几种不同的实现方式：

``` Java
Player player = Bukkit.getServer().getPlayer(resident.getName());
// 如果玩家在线的话：
Player player = resident.getPlayer();
```

### 获取城镇

获取城镇与上述方法相似：

``` Java
import com.palmergames.bukkit.towny.object.Town;

// 已有玩家对象时
Town town = TownyAPI.getInstance().getTown(Player); // 记得做非空检查！

// 已有城镇居民对象时
if (resident.hasTown())
   Town town = resident.getTown();

// 如果需要避免调用 Resident#GetTown() 时可能出现的 NotRegisteredException 时：
Town town = resident.getTownOrNull();
// 记得用 resident.hasTown() 等方法进行非空检查

// 已有城镇地块时
if (townblock.hasTown())
   Town town = townblock.getTown();

// 或者也可以这么干：
Town town = townblock.getTownOrNull();
```

如果你需要为代码添加 Try/Catch，那么可以不使用 .hasTown() 检查。

### 获取国家

获取国家和上述方法相似：

``` Java
import com.palmergames.bukkit.towny.object.Nation;

// 已有玩家对象时
Nation nation = TownyAPI.getInstance().getNation(Player); // 记得做非空检查！

// 已有城镇居民对象时
if (town.hasNation())
    Nation nation = town.getNation(); 

// 已有城镇居民时
if (resident.hasNation())
    Nation nation = resident.getNation();

// 或者...
Nation nation = town.getNationOrNull();

// 或者
Nation nation = resident.getNationOrNull();
```

如果你需要为代码添加 Try/Catch，那么可以不使用 .hasNation() 检查。

### 检查玩家在某处是否有建造、破坏权限
通过 PlayerCacheUtil，你可以快速检查玩家是否可以做出 Towny 中 ActionType 列表中的动作（建造、破坏、切换、使用物品等）

``` Java
boolean bBuild = PlayerCacheUtil.getCachePermission(player, block.getLocation(), block.getType(), TownyPermission.ActionType.BUILD);
```

### 检查 Towny 是否阻止 PVP 伤害

在魔法/战斗/RPG 插件中用到本 API 的情况之一就是用来检查插件是否会阻止 PVP。通过 CombatUtil，我们可以轻松实现检查：它利用了 Bukkit 的 EntityDamageByEntityEvent，代码如下：

``` Java
import com.palmergames.bukkit.towny.utils.CombatUtil;

private Towny towny = (Towny) Bukkit.getServer().getPluginManager().getPlugin("Towny");

@EventHandler(priority = EventPriority.LOWEST)
private void playerPVPEvent (EntityDamageByEntityEvent event) { 
    Entity attacker = event.getDamager();
    Entity defender = event.getEntity();
    DamageCause cause = DamageCause.ENTITY_ATTACK;
        
    if (CombatUtil.preventDamageCall(towny, attacker, defender, cause))
            return;
}
```

如果 Towny 会阻止攻击，那么 preventDamageCall 会返回 true。

除此之外，你也可以通过 Towny 查询指定位置的 PVP 开放状态（会触发 Towny 所有 pvp 测试事件）：

``` Java
boolean pvpTrue = TownyAPI.getInstance().isPVP(Location);
```

### 添加子命令

在 0.97.0.1 之后的版本，开发者可以通过命令附属 API 向 Towny 添加自定义子命令。

首先你需要实现自己的命令类，还要像普通命令那样继承 CommandExecutor 类。

``` Java
public class CustomCommand implements CommandExecutor {

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        sender.sendMessage("My custom command!");
        return true;
    }
}
```

然后再添加你的子命令：

``` Java
TownyCommandAddonAPI.addSubCommand(CommandType.TOWN, "mycommand", new CustomCommand());
```

::: details可用的命令类型
RESIDENT, RESIDENT_SET, RESIDENT_TOGGLE, NATION, NATION_LIST_BY, NATION_SET, NATION_TOGGLE, TOWN, TOWN_BUY, TOWNY_LIST_BY, TOWN_SET, TOWN_TOGGLE, PLOT, PLOT_SET, PLOT_TOGGLE, TOWNY, TOWNYADMIN, TOWNYADMIN_RELOAD, TOWNYADMIN_SET, TOWNYADMIN_TOGGLE, TOWNYADMIN_TOWN, TOWNYADMIN_NATION, TOWNYWORLD, TOWNYWORLD_SET, TOWNYWORLD_TOGGLE
:::

通过在命令类中实现 TabCompleter，还可以为命令添加你自己的 tab 补全。也可以通过 AddonCommand#setTabCompletion 方法进行，但它只适用于参数不变的情况。
 
::: detailssetTabCompletion 示例

``` Java
AddonCommand myCommand = new AddonCommand(CommandType.TOWN, "mycommand", new CustomCommand());
myCommand.setTabCompletion(0, Arrays.asList("suggestions", "for", "first", "argument"));
myCommand.setTabCompletion(1, Arrays.asList("suggestions", "for", "second", "argument"));
TownyCommandAddonAPI.addSubCommand(myCommand);
```

:::
 
### 添加自定义城镇方块类型

在 0.99.0.0 之后的版本，通过其他插件注入自定义 TownBlockTypes 无需管理员手动操作即可实现！

TownBlockTypes 在 Towny 中一般称作地皮类型，即城镇拥有者可以设置的地皮类型，如：农场、旅馆、监狱、大使馆、商店等。

若要新增自定义 TownBlockType，你需要先用 Towny 的 TownBlockTypeHandler **在你插件代码中的 onLoad() 方法下添加如下内容**：

``` Java
public static void registerCustomPlot() {
	if (TownBlockTypeHandler.exists(YOUR_CUSTOM_PLOT_TYPE_NAME)) {
		return;
	}

	TownBlockType customPlot = new TownBlockType(YOUR_CUSTOM_PLOT_TYPE_NAME, new TownBlockData() {
		@Override
		public String getMapKey() {
			return "@" // 显示在 /towny map 和 /towny map hud 上的单字符
		}
		@Override
		public double getCost() {
			return 100.0 // 设置为该地皮类型所需的价格
		}
	});
	try {
		TownBlockTypeHandler.registerType(customPlot);
	} catch (TownyException e) {
		YourLogger.severe(e.getMessage());
	}
}
```

除此之外，能够从监听类调用上述方法也很重要：

``` Java
// 在 Towny 重载时重新注册 TownBlockType
@EventHandler
public void onTownyLoadTownBlockTypes(TownBlockTypeRegisterEvent event) {
	YOUR_PLUGIN_INSTANCE.registerCustomPlot();
}
```

上述代码允许玩家通过 `/plot set 自定义地皮类型` 将地皮设置为你创建的自定义类型。

TownblockTypes 的功能不只是简单的地图图标样式和设置价格，你可以在[这里](https://github.com/TownyAdvanced/Towny/blob/master/Towny/src/main/java/com/palmergames/bukkit/towny/object/TownBlockData.java)了解 TownBlockTypes 可设置的所有功能。

另外，你可能还需要监听这些事件，为你的自定义 TownBlockType 增加更复杂的逻辑：

* PlayerChangePlotTypeEvent
* PlotPreChangeTypeEvent
* TownBlockStatusScreenEvent
* TownPreUnclaimCmdEvent