# 使用 PlaceholderAPI

本页讲述了如何在你的插件内使用 PlaceholderAPI，达到让其他插件引用你的变量的目的，或是允许其他插件的变量在你的插件中使用。

需要注意的是，本页所提及的示例只对**PlaceholderAPI 2.10.0（在 Hytale 中为 1.0.0）或更高版本**有效！

## 第一步

### 向项目中添加 PlaceholderAPI

在你可以实际使用 PlaceholderAPI 之前，首先你要将其导入你的项目。  
根据你使用的构建器类型，选择对应的依赖导入方式。

:::::: tabs

::::: tab Minecraft（Spigot、Paper 等）

:::: tabs

::: tab Maven 
``` XML title="pom.xml"
    <repositories>
        <repository>
            <id>placeholderapi</id>
            <url>https://repo.helpch.at/releases/</url>
        </repository>
    </repositories>
    <dependencies>
        <dependency>
            <groupId>me.clip</groupId>
            <artifactId>placeholderapi</artifactId>
            <version>{papiVersion}</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
```
:::

::: tab Gradle
``` Groovy title="build.gradle"
repositories {
    maven {
        url = 'https://repo.extendedclip.com/releases/'
    }
}

    compileOnly 'me.clip:placeholderapi:{papiVersion}'
    // 可选：Paper 系服务端的组件支持（2.12.0 版本后）
    compileOnly 'me.clip:placeholderapi-paper:{papiVersion}'
```
:::

::::

:::::

::::: tab Hytale

:::: tabs

::: tab Maven

``` XML title="pom.xml"
    <repositories>
        <repository>
          <id>hytale</id>
          <url>https://repo.codemc.io/repository/hytale/</url>
        </repository>
        <repository>
            <id>placeholderapi</id>
            <url>https://repo.helpch.at/releases/</url>
        </repository>
    </repositories>
    <dependencies>
        <dependency>
            <!-- 请将 {papiHytaleVersion} 替换为你所需要的版本 -->
            <groupId>com.hypixel.hytale</groupId>
            <artifactId>Server</artifactId>
            <version>{papiHytaleVersion}</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>at.helpch</groupId>
            <artifactId>placeholderapi-hytale</artifactId>
            <version>1.0.8</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
```

:::

::: tab Gradle

``` Groovy title="build.gradle"
repositories {
    maven {
        url = 'https://repo.codemc.io/repository/hytale/'
    }
    maven {
        url = 'https://repo.helpch.at/releases/'
    }
}

dependencies {
    // 请将 {papiHytaleVersion} 替换为你所需要的版本。
    compileOnly 'com.hypixel.hytale:Server:{papiHytaleVersion}'
    compileOnly 'at.helpch:placeholderapi-hytale:1.0.8'
}
```

:::

::::

::: details 什么是 `{papiVersion}/{papiHytaleVersion}`？

在使用 Javascript 的时候，`{papiVersion}` 和 `{papiHytaleVersion}` 会被替换为 Minecraft 或 Hytale 对应的 PlaceholderAPI 最新版本 API。  
如果你的变量没有被解析，这意味着你阻止了 Javascript，或是在填入的版本在载入时发现不存在。

你可以在 Github 仓库的[发行版页面](https://github.com/PlaceholderAPI/PlaceholderAPI/releases)中找到最新版与对应 API 的版本号。

:::

### 将 PlaceholderAPI 设为（软）依赖

下一步就是打开你的 plugin.yml 或是 paper-plugin.yml，然后根据其是否可选，将 PlaceholderAPI 添加为依赖或软依赖。

:::::: tabs

::::: tab plugin.yml

:::: tabs

::: tab 可选依赖

``` YAML title="plugin.yml"
name: ExamplePlugin
version: 1.0
author: author
main: com.example.plugin.ExamplePlugin

softdepend: ["PlaceholderAPI"] # 这会将 PlacehodlerAPI 设置为插件的可选依赖。
```

:::

::: tab 必选依赖

``` YAML title="plugin.yml"
name: ExamplePlugin
version: 1.0
author: author
main: com.example.plugin.ExamplePlugin

depend: ["PlaceholderAPI"] # 这会将 PlacehodlerAPI 设置为插件的必选依赖。
```

::: 

::::

:::::

::::: tab paper-plugins.yml

:::: tabs

::: tab 可选依赖

``` YAML title="paper-plugin.yml"
name: ExamplePlugin
version: 1.0
author: author
main: com.example.plugin.ExamplePlugin

dependencies:
server:
    PlaceholderAPI:
    load: BEFORE # 载入顺序依照依赖。这表示在本示例中，PlaceholderAPI **先于**你的插件载入。
    required: false
```

::: 

::: tab 必选依赖

``` YAML title="paper-plugin.yml"
name: ExamplePlugin
version: 1.0
author: author
main: com.example.plugin.ExamplePlugin

dependencies:
server:
    PlaceholderAPI:
    load: BEFORE # 载入顺序依照依赖。这表示在本示例中，PlaceholderAPI **先于**你的插件载入。
    required: true
```
:::

::::

:::::

::::: tab manifest.json（Hytale）

:::: tabs

::: tab 可选依赖

``` JSON title="manifest.json"
{
    "Group": "com.example",
    "Name": "ExamplePlugin",
    "Version": "1.0",
    "Main": "com.example.plugin.ExamplePlugin",
    "OptionalDependencies": {
        "HelpChat:PlaceholderAPI": ">= 1.0.2"
    }
}
```

:::

::: tab 必选依赖

``` JSON title="manifest.json"
{
    "Group": "com.example",
    "Name": "ExamplePlugin",
    "Version": "1.0",
    "Main": "com.example.plugin.ExamplePlugin",
    "Dependencies": {
        "HelpChat:PlaceholderAPI": ">= 1.0.2"
    }
}
```

:::

::::

::::

:::::

::::::

## 向 PlaceholderAPI 添加变量

创建变量拓展的完整教程可以在稍后的“创建变量拓展”章节中浏览。

## 在插件中设置变量

PlaceholderAPI 提供了自动解析插件内其他插件变量的能力，从而使得其他成百上千的变量能够在插件内使用而无需额外代码兼容。  
若要在你的插件内使用来自其他插件的变量，我们只需[将 PlaceholderAPI 设置为软依赖](#将-placeholderapi-设为软依赖)，然后使用 `setPlaceholders` 方法即可。

需要注意的是，任何需要插件或依赖的变量拓展必须在服务器上启用，否则变量不会被解析（返回原字符串）。

::: info 2.12.0 版本新增内容：

自 2.12.0 版本开始，可以传入 Adventure 库的 Components 进行变量解析了。

为了使用这个新功能，你需要检查：

* 你的插件是 Paper 或其分支的服务端。这个功能不支持 Spigot 服务端！
* 你使用 `PAPIComponent` 而非 `PlaceholderAPI` 解析 Components。

:::

::::: tabs

:::: tab Spigot、Paper 等

下列为示例插件，会在玩家加入时发送消息 `%player_name% 加入了服务器! 他的级别是 %vault_rank%`，且变量被替换为对应内容。

::: info

下文假设 PlaceholderAPI 是软依赖，以便更好应对该插件不存在的情况。

:::

``` Java title="JoinExample.java"
package com.example.plugin;

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

        /* 
          -----
          注意：
            通过 `placeholderapi-papi` 与 `PAPIComponents` 而非 `PlaceholderAPI` 允许你在 Adventure 库的 Components 中解析变量。
          -----
        */
        event.setJoinMessage(joinText);
    }
}
```

::::

:::: tab Hytale

如下为修改玩家聊天消息并加入变量的示例插件。它用到了 [Player](https://ecloud.placeholderapi.com/expansions/player-hytale/)、[LuckPerms](https://ecloud.placeholderapi.com/expansions/luckperms-hytale/) 以及 [HyFaction](https://ecloud.placeholderapi.com/expansions/hyfaction/) 变量拓展

::: info 线程安全警告

因 Hytale 的 API 设计，部分组件只能通过指定线程访问。与 PlaceholderAPI 的完整兼容性需要通过玩家所在世界线程调用 `setPlaceholders` 方法：`player.getWorld().execute(() -> )`。默认情况下只在玩家命令中生效，因为你已经处于世界中，因此问题不大，但你需要考虑到异步相关且调用 PAPI 的场景，例如异步玩家聊天。

:::

``` Java title="ChatExample.java"
packate com.example.plugin;

import at.helpch.placeholderapi.PlaceholderAPI;

import com.hypixel.hytale.server.core.event.events.player.PlayerChatEvent;
import com.hypixel.hytale.server.core.Message;
import com.hypixel.hytale.server.core.plugin.JavaPlugin;
import com.hypixel.hytale.server.core.plugin.JavaPluginInit;
import com.hypixel.hytale.server.core.universe.PlayerRef;
import com.hypixel.hytale.server.core.universe.Universe;
import com.hypixel.hytale.server.core.universe.world.World;

import java.util.UUID;

public class ChatExample extends JavaPlugin {
    private static final String FORMAT = "%rel_factions_relation% [%luckperms_prefix%] %player_name% > "

    public ChatExample(JavaPluginInit init) {
        super(init)
    }

    @Override
    protected void setup() {
        // 在触发 `PlayerChatEvent` 时告诉服务器调用 `onPlayerChat` 方法。
        getEventRegistry().registerGlobal(PlayerChatEvent.class, this::onPlayerChat));
    }

    public void onPlayerChat(PlayerChatEvent event) {
        // PlaceholderAPI 提供多种 `setPlaceholders` 的方法，既可返回 `String`，也可返回 `Message` 对象，请根据需求取用。
        // 需要注意的是，这些方法需要的输入参数基本相同：`String` 类型为 `setPlaceholders(PlayerRef, String)`，`Messages` 类型则为 `setPlaceholders(PlayerRef, Message)`
        PlayerRef sender = event.getSender();
        final UUID worldUuid = sender.getWorldUuid();

        if (worldUuid == null) {
            return;
        }

        final World world = Universe.get().getWorld(worldUuid);

        if (world == null) {
            return;
        } else {
            event.setCancelled(true); // 取消事件，执行我们自己的发送逻辑
            // 也许调用你自己的聊天事件？
            // HytaleServer.get().getEventBus().dispatchForAsync(CustomChatEvent.class);
        }

        world.execute(() -> {
            String replacedFormat = PlaceholderAPI.setPlaceholders(sender, FORMAT);
            for (PlayerRef recipient : event.getTargets()) {
                recipient.sendMessage(Message.raw(PlaceholderAPI.setRelationalPlaceholders(sender, recipient, replacedFormat) + event.getContent()));
            }
        });
    }
}
```

::::

:::::