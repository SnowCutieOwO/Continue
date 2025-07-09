# 与其他插件兼容
让 Oraxen 能直接从源代码层面与其他插件兼容

## 运作原理？

### 第一步：创建一个兼容类

你需要创建一个继承了 `CompatibilityProvider<想要添加支持的插件主类>` 的类，并向其中加入你想要为支持插件增加的代码。

### 第二步：将兼容类添加至 Oraxen

使用 `CompatibilitiesManager.addCompatibility(添加支持的插件, 第一步中创建的类)` 将类添加至 Oraxen。

## 示例

::: info 提示
在本章节中我会以 MythicMobs 为示例。
:::

### 第一步：创建一个兼容类

```Java
import io.lumine.xikage.mythicmobs.MythicMobs;
import io.lumine.xikage.mythicmobs.api.bukkit.events.MythicDropLoadEvent;
import io.th0rgal.oraxen.compatibilities.CompatibilityProvider;

public class MythicMobsCompatibility extends CompatibilityProvider<MythicMobs>{

    @EventHandler
    public void onMythicDropLoadEvent(MythicDropLoadEvent event) {
    
    }
    
}
```

### 第二步：将兼容类添加至 Oraxen

```Java
import io.th0rgal.oraxen.compatibilities.CompatibilitiesManager;
import org.bukkit.plugin.java.JavaPlugin;

public class OraxenMythicMobsCompatibilityPlugin extends JavaPlugin {

    public void onEnable() {
        CompatibilitiesManager.addCompatibility("MythicMobs", MythicMobsCompatibility.class)
    }

}
```