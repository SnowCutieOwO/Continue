# 开始使用 API

## 介绍
PlayerPoints 自带一个 API，允许你查询和修改玩家持有的点券数量。

## 安装
我推荐你使用 Gradle 或 Maven 来将 PlayerPoints 设为你的插件的依赖。不要将整个插件塞入你的 jar 文件，它应当只以集成的形式被加入插件。与使用依赖管理器相似的方法是下载插件 jar 文件并手动拖入你的 IDE。

将 `$version$` 替换为你正在使用的插件版本。现在可以填入 3.0.0 或更高的版本。

### Gradle

```Kotlin
repositories {
    maven { 
        url = 'https://repo.rosewooddev.io/repository/public/' 
    }
}

dependencies {
    compile 'org.black_ixx:playerpoints:$VERSION$'
}
```

### Maven

```HTML
<repositories>
    <repository>
        <id>rosewood-repo</id>
        <url>https://repo.rosewooddev.io/repository/public/</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>org.black_ixx</groupId>
        <artifactId>playerpoints</artifactId>
        <version>$VERSION$</version>
    <scope>provided</scope>
    </dependency>
</dependencies>
```

## 获取 API 实例
若要使用 API，你需要先获得一个 API 实例。插件的示例类可在下文参考。
```Java
import org.black_ixx.PlayerPointsAPI;
import org.bukkit.Bukkit;
import org.bukkit.plugin.java.JavaPlugin;

public class Example extends JavaPlugin {
    private PlayerPointsAPI ppAPI;

    @Override
    public void onEnable() {
        if (Bukkit.getPluginManager().isPluginEnabled("PlayerPoints")) {
            this.ppAPI = PlayerPoints.getInstance().getAPI();
        }

        // 当你想要获取 API 时, 检查所获取的示例是否存在
        if (this.ppAPI != null) {
            // 用 API 在这里搞些事情
        }
    }
}
```

## 依赖/软依赖

如果你的插件需要依赖 PlayerPoints，你需要在它的 plugin.yml 下加入 `softdepend: [PlayerPoints]` 或 `depend: [PlayerPoints]`。