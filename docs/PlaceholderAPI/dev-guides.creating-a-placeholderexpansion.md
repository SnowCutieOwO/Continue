# 创建变量拓展

本页将会讲述如何创建自己的 [`PlaceholderExpansion`](https://github.com/PlaceholderAPI/PlaceholderAPI/blob/master/src/main/java/me/clip/placeholderapi/expansion/PlaceholderExpansion.java)，用于自己的插件（推荐）或[上传至 eCloud](dev-guides.ecloud.md)。

值得注意的是 PlaceholderAPI 依赖于其安装的拓展。PlaceholderAPI 仅进行核心的解析与替换工作，而拓展可以让其他插件在其消息内使用任何安装的变量。  
你既可以直接从 eCloud 自行下载变量，也可以通过 [PlaceholderAPI 的下载命令](user-guides.commands.md#papi-ecloud-download)安装。

## 章节目录

[[toc]]

## 开始

对于初学者，你需要现决定你想创建哪种 [`PlaceholderExpansion`](https://github.com/PlaceholderAPI/PlaceholderAPI/blob/master/src/main/java/me/clip/placeholderapi/expansion/PlaceholderExpansion.java)。这里有多种创建变量拓展的方式。本章节将会讲述最常见的一种。

### 普通拓展部分

下文的所有示例共享一个属于 `PlaceholderExpansion` 类的剖普通部分。  
为了避免重复解释基础方法的基本信息，以及简化文章，我们只讲述其中的必要/基础部分。

#### PlaceholderExpansion 基本结构

``` Java [SomeExpansion.java]
package at.helpch.placeholderapi.example.expansion;

import me.clip.placeholderapi.expansion.PlaceholderExpansion;

public class SomeExpansion extends PlaceholderExpansion {

    @Override
    @NotNull
    public String getAuthor() {
        return "Author"; // 这个方法允许你设置变量拓展的作者。不能为空。
    }

    @Override
    @NotNull
    public String getIdentifier() {
        return "example"; // ID 即为变量中从第一个 `%` 符号（对于括号变量则为 `{`）开始到第一个下划线 `_` 前的内容。ID 不可以包含 `%`、`{`、`}` 和 `_` 符号。
        // 如果你仍需要在其中使用这些字符，请覆写 `getName()` 方法。
    }

    @Override
    @NotNull
    public String getVersion() {
        return "1.0.0"; // 这个方法会返回变量拓展的版本。不能为空。
        // 因为这是一个字符串, 所以可以填入其他内容, 但还是推荐你将其保持在数字的版本格式。
        // PlaceholderAPI 会使用这个字符串与 eCloud 上的最新版本（如果上传的话）进行比较，来检查是否有更新可用。
        // 如果你的拓展是包含在插件中的，那么这部分不重要。
    }

    // 这些方法默认不覆写.
    // 你需要覆写其中一个.

    @Override
    public String onRequest(OfflinePlayer player, @NotNull String params) {
        // 由 PlaceholderAPI 调用，解析其中的变量。
        // 在未被覆写时会调用 `onPlaceholderRequest(Player, String)`，将 OfflinePlayer 转化为 Player 对象（若可能），否则会返回 `null`。
        // 推荐对 OfflinePlayer 使用这个方法，这样就可以在无需判断在线的前提下检查他们的数据了。
        // **参数：**
        // * `player` - 非空的 OffinePlayer 实例，用作解析变量的对象。
        // * `params` - 非空的字符串，代表第一个 `%`（若为括号变量则为 `{`）与 `_`  之间的内容。
    }

    @Override
    public String onPlaceholderRequest(Player player, @NotNull String params) {
        // 由 PlaceholderAPI 通过 `onRequest(OfflinePlayer, String)` 调用，解析其中的变量。
        // 在未被覆写时会调用 `null`，使得 PlaceholderAPI 将其判定为无效变量。
        // **参数：**
        // * `player` - 非空的 Player 实例，用作解析变量时的对象。
        // * `params` - 非空的字符串，代表第一个 `%`（若为括号变量则为 `{`）与 `_`  之间的内容。
    }
}
```

::: info
在[创建相对变量](#创建相对变量拓展)时无需覆写 `onRequest(OfflinePlayer, String)` 或 `onPlaceholderRequest(Player, String)`。
:::

### 创建内部变量拓展

内部变量拓展为直接与其依赖插件集成的类。  
推荐使用这种方法创建变量拓展，因为它有如下优势：

* 无需 `canRegister()` 方法覆写。因为你的变量拓展就是插件的一部分，它依赖的东西无需覆写。
* 读取插件数据更容易。使用依赖注入，你可以更简单地获取某些数据，如配置文件中的值。

::: warning

内部变量拓展不会被 PlaceholderAPI 自动注册，因为它们不是 expansions 文件夹下的单独 .jar 文件。  
请见“[注册变量拓展](#注册你的变量拓展)”部分获悉详情。

另外你还需要覆写此方法，并将 `persist()` 设置为 `true`。这可以告知 PlaceholderAPI 不要在插件重载时卸载你的变量拓展，否则会使其失效。

:::

::: details 完整示例
请浏览 [PlaceholderExpansion 基本结构](#placeholderexpansion-基本结构)部分来了解示例中的所有普通方法。
``` Java [SomeExpansion.java]
package at.helpch.placeholderapi.example.expansion;

import at.helpch.placeholderapi.example.SomePlugin;
import me.clip.placeholderapi.expansion.PlaceholderExpansion;
import org.bukkit.OfflinePlayer;
import org.jetbrains.annotations.NotNull;

public class SomeExpansion extends PlaceholderExpansion {

    private final SomePlugin plugin; // 模拟插件，用来展示使用依赖注入来获取插件相关数据。

    public SomeExpansion(SomePlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    @NotNull
    public String getAuthor() {
        return String.join(", ", plugin.getDescription().getAuthors()); // 我们可以使用插件中的 `plugin.yml` 文件标注的作者作为该变量的作者名。
    }

    @Override
    @NotNull
    public String getIdentifier() {
        return "example";
    }

    @Override
    @NotNull
    public String getVersion() {
        return plugin.getDescription().getVersion(); // 因为变量拓展是内部的，因此可以使用 `plugin.yml` 中设置的版本。
    }

    @Override
    public boolean persist() {
        return true; // 必须设置，否则插件重载时 PlaceholderAPI 会将其卸载。
    }

    @Override
    public String onRequest(OfflinePlayer player, @NotNull String params) {
        if (params.equalsIgnoreCase("placeholder1")) {
            return plugin.getConfig().getString("placeholders.placeholder1", "default1"); // 获取插件 `config.yml` 文件中数据的示例。
        }

        if (params.equalsIgnoreCase("placeholder2")) {
            return plugin.getConfig().getString("placeholders.placeholder1", "default1"); // 获取插件 `config.yml` 文件中数据的示例。
        }

        return null; // 到达这一部分说明给定的参数无效，所以我们会返回 `null` 来告知 PlaceholderAPI 该变量无效。
    }
}
```
:::

#### 注册你的变量拓展

因为变量拓展是内部的，因此 PlaceholderAPI 不会自动载入它，我们需要手动完成这一步。  
这可以通过创建一个变量拓展的新示例并调用其 `register()` 方法完成。

这里是一个简明示例：

``` Java [SomePlugin.java]
package at.helpch.placeholderapi.example;

import at.helpch.placeholderapi.example.expansion.SomeExpansion;
import org.bukkit.Bukkit;
import org.bukkit.plugin.java.JavaPlugin;

public class SomePlugin extends JavaPlugin {

    @Override
    public void onEnable() {
        if (Bukkit.getPluginManager().isPluginEnabled("PlaceholderAPI")) { // 我们检查 PlaceholderAPI 是否存在并启用，否则就会抛出报错。
        // 另外，确保你已经在插件的 `plugin.yml` 中将 PlaceholderAPI 设置为了（软）依赖（见上文 #将PlaceholderAPI 设为（软）依赖）
            new SomeExpansion(this).register(); // 这会向 PlaceholderAPI 注册我们的变量拓展。它也可以将插件类作为依赖注入拓展类，使我们可以使用它。
        }
    }
}
```
### 创建外部变量拓展

外部变量拓展是位于 PlaceholderAPI 的 `expansions` 文件夹下的独立 Jar 文件，包含了 [`PlaceholderExpansion`](https://github.com/PlaceholderAPI/PlaceholderAPI/blob/master/src/main/java/me/clip/placeholderapi/expansion/PlaceholderExpansion.java) 的拓展类。  
只推荐你在如下情况中制作外部变量拓展。

* 变量拓展不依赖任何插件。
* 变量拓展依赖插件但你不能将其内置（插件不属于你）。

如果你没有满足上面这些条件，这表示变量拓展会像一个插件一样对你造成负担，因此还是建议你制作[内部变量拓展](#创建内部变量拓展)。

外部变量拓展的好处包括可以通过 PlaceholderAPI 重载它，也可以将其上传至 eCloud，以通过[命令 `/papi ecloud download`](user-guides.commands.md#papi-ecloud-download) 下载。  
缺点就是为了检查对应插件是否存在，步骤会更加麻烦一些。

::: details 完整实例（无依赖）

请浏览 [PlaceholderExpansion 基本结构](#placeholderexpansion-基本结构)部分来了解示例中的所有普通方法。

``` Java [SomeExpansion.java]
package at.helpch.placeholderapi.example.expansion;

import me.clip.placeholderapi.expansion.PlaceholderExpansion;
import org.bukkit.OfflinePlayer;
import org.jetbrains.annotations.NotNull;

public class SomeExpansion extends PlaceholderExpansion {

    @Override
    @NotNull
    public String getAuthor() {
        return "Author";
    }

    @Override
    @NotNull
    public String getIdentifier() {
        return "example";
    }

    @Override
    @NotNull
    public String getVersion() {
        return "1.0.0";
    }

    @Override
    public String onRequest(OfflinePlayer player, @NotNull String params) {
        if (params.equalsIgnoreCase("placeholder1")) {
            return "text1";
        }

        if (params.equalsIgnoreCase("placeholder2")) {
            return "text2";
        }

        return null; // 到达这一部分说明给定的参数无效，所以我们会返回 `null` 来告知 PlaceholderAPI 该变量无效。
    }
}
```

:::

::: details 完整示例（有依赖）

请浏览 [PlaceholderExpansion 基本结构](#placeholderexpansion-基本结构)部分来了解示例中的所有普通方法。

``` Java [SomeExpansion.java]
package at.helpch.placeholderapi.example.expansion;

import at.helpch.placeholderapi.example.SomePlugin;
import me.clip.placeholderapi.expansion.PlaceholderExpansion;
import org.bukkit.Bukkit;
import org.bukkit.OfflinePlayer;
import org.jetbrains.annotations.NotNull;

public class SomeExpansion extends PlaceholderExpansion {

    private SomePlugin plugin; // 我们在 `canRegister()` 方法中设置了这个实例的值，这表示它不可以被设置为 final。

    @Override
    @NotNull
    public String getAuthor() {
        return "Author";
    }

    @Override
    @NotNull
    public String getIdentifier() {
        return "example";
    }

    @Override
    @NotNull
    public String getVersion() {
        return "1.0.0"
    }

    @Override
    public String getRequiredPlugin() {
        return "SomePlugin"; // 变量拓展依赖的插件。
        // 推荐设置这个，这样 PlaceholderAPI 就可以检测是否有插件缺失。
    }

    @Override
    public boolean canRegister() { // 这会实现两个目的：
        // 1. 它将 `plugin` 的实例通过 Bukkit 的 PluginManager 设置为 `SomePlugin`，返回了一个能分配到 `SomePlugin` 的 JavaPlugin 实例。
        // 2. 它会检查返回的实例是否非空。如果是，则会使得 `canRegister()` 返回 false，使得 PlaceholderAPI 不注册我们的变量拓展。
        return (plugin = (SomePlugin) Bukkit.getPluginManager().getPlugin(getRequiredPlugin())) != null;
    }

    @Override
    public String onRequest(OfflinePlayer player, @NotNull String params) {
        if (params.equalsIgnoreCase("placeholder1")) {
            return plugin.getConfig().getString("placeholders.placeholder1", "default1"); // 获取插件 `config.yml` 文件中数据的示例。
        }

        if (params.equalsIgnoreCase("placeholder2")) {
            return plugin.getConfig().getString("placeholders.placeholder1", "default1"); // 获取插件 `config.yml` 文件中数据的示例。
        }

        return null; // 到达这一部分说明给定的参数无效，所以我们会返回 `null` 来告知 PlaceholderAPI 该变量无效。
    }
}
```
:::

### 创建相对变量拓展

::: info 

相对变量总是以 `rel_` 开头以便于区分，这意味着如果你制作了一个名为 `friend_is_friend` 的相对变量，则其完整用法为 `%rel_friend_is_friend%`。

:::

相对变量拓展特殊之处在于其要求输入两个玩家名称，以此比较其间的关系。

若要创建一个相对变量，你需要先继承一个 [`Relational`](https://github.com/PlaceholderAPI/PlaceholderAPI/blob/master/src/main/java/me/clip/placeholderapi/expansion/Relational.java) 实例至你的变量拓展。你还需要拓展 [`PlaceholderExpansion`](https://github.com/PlaceholderAPI/PlaceholderAPI/blob/master/src/main/java/me/clip/placeholderapi/expansion/PlaceholderExpansion.java) 类。  
继承这个实例会添加一个 `onPlaceholderRequest(Player, Player, String)`，前两个参数为第一及第二个玩家，而第三个参数则是第二个 `_` 之后与最后 `%` 之前的内容（或者若变量为括号变量，则为 `}`）。

::: details 完整示例

请浏览 [PlaceholderExpansion 基本结构](#placeholderexpansion-基本结构)部分来了解示例中的所有普通方法。

这是一个使用相对变量的完整示例。  
为了简明，我们在这里使用了内部变量拓展的安装方法并假设 `SomePlugin` 提供了一个 `areFriends(Player, Player)`，能基于玩家是否为好友返回 true 或 false 的方法。

``` Java [SomeExpansions.java]
package at.helpch.placeholderapi.example.expansion;

import at.helpch.placeholderapi.example.SomePlugin;
import me.clip.placeholderapi.expansion.PlaceholderExpansion;
import me.clip.placeholderapi.expansion.Relational
import org.bukkit.ChatColor;
import org.bukkit.Player;
import org.jetbrains.annotations.NotNull;

public class SomeExpansion extends PlaceholderExpansion implements Relational {

    private final SomePlugin plugin; // 模拟插件，用来展示使用依赖注入来获取插件相关数据。

    public SomeExpansion(SomePlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    @NotNull
    public String getAuthor() {
        return String.join(", ", plugin.getDescription().getAuthors()); // 我们可以使用插件中的 `plugin.yml` 文件标注的作者作为该变量的作者名。
    }

    @Override
    @NotNull
    public String getIdentifier() {
        return "example";
    }

    @Override
    @NotNull
    public String getVersion() {
        return plugin.getDescription().getVersion(); // 因为变量拓展是内部的，因此可以使用 `plugin.yml` 中设置的版本。
    }

    @Override
    public boolean persist() {
        return true; // 必须设置，否则插件重载时 PlaceholderAPI 会将其卸载。
    }

    @Override
    public String onPlaceholderRequest(Player one, Player two, String identifier) {
        if (one == null || two == null) {
            return null; // 我们的变量需要两个玩家都存在，否则就返回 null。
        }

        if (identifier.equalsIgnoreCase("friends")) { // ID 匹配（表示变量为 `%rel_example_friends%` 或 `{rel_example_friends}`）之后，我们会通过插件的 `areFriends(Player, Player)` 方法检查玩家甲与乙是否为好友关系。
        // 若是，则返回绿色文本。否则返回红色文本。
            if (plugin.areFriends(one, two)) {
                return ChatColor.GREEN + one.getName() + " 与 " + two.getName() + " 是好友!";
            } else {
                return ChatColor.RED + one.getName() + " 与 " + two.getName() + " 不是好友!";
            }
        }

        return null; // 到达这一部分说明给定的参数无效，所以我们会返回 `null` 来告知 PlaceholderAPI 该变量无效。
    }
}
```

别忘了[注册你的变量](#注册你的变量拓展)。

:::