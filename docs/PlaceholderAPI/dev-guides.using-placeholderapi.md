# 使用 PlaceholderAPI

本页讲述了如何在你的插件内使用 PlaceholderAPI，达到让其他插件引用你的变量的目的，或是允许其他插件的变量在你的插件中使用。

需要注意的是，本页所提及的示例只对**PlaceholderAPI 2.10.0 或更高版本**有效！

## 第一步

在你可以实际使用 PlaceholderAPI 之前，首先你要将其导入你的项目。  
使用下列示例代码匹配你的依赖管理器。

:::: tabs

::: tab Maven 
``` XML [pom.xml]
    <repositories>
        <repository>
            <id>placeholderapi</id>
            <url>https://repo.extendedclip.com/releases/</url>
        </repository>
    </repositories>
    <dependencies>
        <dependency>
         <groupId>me.clip</groupId>
          <artifactId>placeholderapi</artifactId>
          <version>{版本}</version>
         <scope>provided</scope>
        </dependency>
    </dependencies>
```
:::

::: tab Gradle
``` Kotlin [build.gradle]
repositories {
    maven {
        url = 'https://repo.extendedclip.com/releases/'
    }
}

dependencies {
    compileOnly 'me.clip:placeholderapi:{版本}'
}
```
:::

::::

::: details 什么是 `{版本}`？

在使用 Javascript 的时候，`{版本}` 会被替换为 PlaceholderAPI 最新的 API 版本。  
如果你的变量没有被解析，这意味着你阻止了 Javascript，或是在填入的版本在载入时发现不存在。

你可以在 Github 仓库的[发行版页面](https://github.com/PlaceholderAPI/PlaceholderAPI/releases)中找到最新版与对应 API 的版本号。

:::

### 将 PlaceholderAPI 设为（软）依赖

下一步就是打开你的 plugin.yml 或是 paper-plugin.yml，然后根据其是否可选，将 PlaceholderAPI 添加为依赖或软依赖。

#### plugin.yml

:::: tabs

::: tab 可选依赖

``` YAML [plugin.yml]
name: ExamplePlugin
version: 1.0
author: author
main: your.main.path.Here

softdepend: ["PlaceholderAPI"] # 这会将 PlacehodlerAPI 设置为插件的可选依赖。
```

:::

::: tab 必选依赖

``` YAML [plugin.yml]
name: ExamplePlugin
version: 1.0
author: author
main: your.main.path.Here

depend: ["PlaceholderAPI"] # 这会将 PlacehodlerAPI 设置为插件的必选依赖。
```

::: 

::::

#### paper-plugins.yml

:::: tabs

::: tab 可选依赖

``` YAML [paper-plugin.yml]
name: ExamplePlugin
version: 1.0
author: author
main: your.main.path.Here

dependencies:
server:
    PlaceholderAPI:
    load: BEFORE # 载入顺序依照依赖。这表示在本示例中，PlaceholderAPI **先于**你的插件载入。
    required: false
```

::: 

::: tab 必选依赖

``` YAML [paper-plugin.yml]
name: ExamplePlugin
version: 1.0
author: author
main: your.main.path.Here

dependencies:
server:
    PlaceholderAPI:
    load: BEFORE # 载入顺序依照依赖。这表示在本示例中，PlaceholderAPI **先于**你的插件载入。
    required: true
```
:::

::::

## 向 PlaceholderAPI 添加变量

创建变量拓展的完整教程可以在稍后的“创建变量拓展”章节中浏览。

## 在插件中设置变量

PlaceholderAPI 提供了自动解析插件内其他插件变量的能力，从而使得其他成百上千的变量能够在插件内使用而无需额外代码兼容。  
若要在你的插件内使用来自其他插件的变量，我们只需[将 PlaceholderAPI 设置为软依赖](#将-placeholderapi-设为软依赖)，然后使用 `setPlaceholders` 方法即可。

需要注意的是，任何需要插件或依赖的变量拓展必须在服务器上启用，否则变量不会被解析（返回原字符串）。

::: details 示例

假设我们需要对一个玩家拥有的初级权限组发送一条自定义加入消息。  
若要这么做，我们可以按如下步骤实现：

下文假设 PlaceholderAPI 是软依赖，以便更好应对该插件不存在的情况。

``` Java [JoinExample.java]
package at.helpch.placeholderapi;

import me.clip.placeholderapi.PlaceholderAPI;

import org.bukkit.Bukkit;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;
import org.bukkit.plugin.java.JavaPlugin;
import me.clip.placeholderapi.PlaceholderAPI;

public class JoinExample extends JavaPlugin implements Listener {

    @Override
    public void onEnable() {

        if (Bukkit.getPluginManager().isPluginEnabled("PlaceholderAPI")) {
            Bukkit.getPluginManager().registerEvents(this, this); // 这一步检查 PlaceholderAPI 是否存在并启用，然后注册事件至处理器（见下）
        } else {
            getLogger().warn("找不到 PlaceholderAPI! 插件已被禁用."); // 在 PlaceholderAPI 不存在的情况下弹出问题，并禁用自身
            Bukkit.getPluginManager().disablePlugin(this);
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    public void onJoin(PlayerJoinEvent event) {
        String joinText = "%player_name% 加入了服务器! 他的级别是 %vault_rank%";

        joinText = PlaceholderAPI.setPlaceholders(event.getPlayer(), joinText); // 使用 `PlaceholderAPI.serPlaceholders(Player, String)`，我们可以将给定字符串中的 `%变量%` 解析为对应内容，条件为对应变量拓展存在且返回非空字符串。
        // 在我们的示例中，我们提供了一条包含 `%player_name%` 和 `%vault_rank%` 变量的字符串，需要安装 Player 和 Vault 变量拓展。

        // 示例输出：`Notch 加入了服务器! 他的级别是 管理员`

        event.setJoinMessage(joinText);
    }
}
```