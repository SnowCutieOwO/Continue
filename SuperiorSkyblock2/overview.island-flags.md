# 岛屿标志

每个岛屿都有拥有者可修改的设置（即标志）。它们可以用于控制岛屿上的不同事物：流体流动、岩浆、实体生成等等...！

## 内置标志

### 常为白天

将岛屿内的时间固定在白天。  
不与其他修改时间的标志兼容。

### 常为中午

将岛屿内的时间固定在中午。  
不与其他修改时间的标志兼容。

### 常为夜晚

将岛屿内的时间固定在夜晚。  
不与其他修改时间的标志兼容。

### 常为午夜

将岛屿内的时间固定在午夜。  
不与其他修改时间的标志兼容。

### 常为雨天

将岛屿内的天气固定为雨。  
不与其他修改天气的标志兼容。

### 常为晴天

将岛屿内的天气固定为晴。  
不与其他修改天气的标志兼容。

### 苦力怕爆炸

决定苦力怕爆炸是否能摧毁方块。

### 作物生长

决定岛屿内的作物是否会自然生长。

### 下蛋

决定岛屿内的鸡是否能正常下蛋。

### 末影人破坏

决定岛屿内的末影人是否能搬运或放置方块。

### 火焰蔓延

决定岛屿内的火焰是否会传播至其他方块。

### 恶魂火球

决定恶魂的烈焰弹是否能破坏岛屿内的方块。

### 岩浆流动

决定岛屿内的岩浆是否能自由活动。

### 动物自然生成

决定岛屿内的动物是否能自然生成。

### 怪物自然生成

决定岛屿内的怪物是否能自然生成。

### PVP

决定岛屿内的玩家是否能互相伤害。  
启用该设置后，所有访客都会被传送至出生点以防止被困。

### 刷怪笼生成动物

决定岛屿内的刷怪笼是否能生成动物。

### 刷怪笼生成怪物

决定岛屿内的刷怪笼是否能生成怪物。

### TNT 爆炸

决定岛屿内的 TNT 爆炸是否能摧毁方块。

### 树木生长

决定岛屿内的树苗是否能生长为树木。

### 水流动

决定岛屿内的水能否自由流动。

### 凋灵破坏

决定岛屿内的凋灵是否能通过召唤时的爆炸摧毁方块。


## 自行创建岛屿标志

若要创建你自己的设置，你必须熟悉 Java 和 Spigot API。  
除此之外，你还需要了解 SuperiorSkyBlock 的 API，你可以在[这里](https://github.com/OmerBenGera/SuperiorSkyblockAPI)浏览。

岛屿设置以一个名为 `IslandFlag` 的类区分，注册一个自定义的标志非常简单！在本教程中，我会创建一个游泳的自定义标志。首先，我通过监听 `PluginInitializeEvent` 注册自定义设置，随后调用 `IslandFlag.register()` 方法。完整示例代码如下：

``` Java
public final class SwimmingFlag implements Listener {

    private static IslandFlag SWIMMING;

    @EventHandler
    public void onPluginInit(PluginInitializeEvent e){
        IslandFlag.register("SWIMMING");
        SWIMMING = IslandFlag.getByName("SWIMMING");
    }

}
```

::: info

`PluginInitializeEvent` 会在 SuperiorSkyBlock 的 `onEnable()` 后调用。因此，你的插件必须先于它载入。可以通过将本插件设置为（软）依赖的方法解决。

:::

在注册自定义标志后，我们就可以实现游泳的限制了！

``` Java
public final class SwimmingFlag implements Listener {

    private static IslandFlag SWIMMING;

    @EventHandler
    public void onPluginInit(PluginInitializeEvent e){
        IslandFlag.register("SWIMMING");
        SWIMMING = IslandFlag.getByName("SWIMMING");
    }
    
    @EventHandler(ignoreCancelled = true)
    public void onPlayerMove(PlayerMoveEvent e){
        // 首先检查方块间的移动事件
        if(e.getFrom().getBlockX() == e.getTo().getBlockX() && e.getFrom().getBlockY() == e.getTo().getBlockY() && 
                e.getFrom().getBlockZ() == e.getTo().getBlockZ())
            return;

        Island island = SuperiorSkyblockAPI.getIslandAt(e.getTo());
        
        // 确保游泳功能被禁用
        if(island == null || island.hasSettingsEnabled(SWIMMING))
            return;

        Block toBlock = e.getTo().getBlock();
        Block belowBlock = toBlock.getRelative(BlockFace.DOWN);
        
        // 检查目标方块或其下的方块是否为水.
        if(toBlock.getType() == Material.WATER || (!toBlock.getType().isSolid() && belowBlock.getType() == Material.WATER)){
            e.setCancelled(true);
            e.getPlayer().sendMessage("" + ChatColor.RED + ChatColor.BOLD + "Error | " + ChatColor.GRAY + "This island has swimming disabled.");
        }
        
    }

}
```

就是这样！现在玩家不能在该设置禁用的时候游泳了。只需将其放入设置菜单，并编辑它的图标，剩下要做的就和其他普通设置一样。