# 岛屿特权

可以分配至不同岛屿职位的权限，能够允许玩家在岛屿上的特定行为。你可以将其按钮从权限菜单中移除使得玩家不可以自行分配某些权限。

## 内置特权

* **全部**  
  拥有岛屿上的所有权限。  
  建议：只应分配给岛屿拥有者。
* **动物繁殖**  
  允许通过喂食繁殖岛屿上的动物。
* **伤害动物**  
  允许攻击岛屿上的动物。
* **使用剪刀**  
  允许对岛屿上的羊/牛使用剪刀。
* **动物生成**  
  允许在岛屿上生成动物。
* **封禁成员**  
  允许封禁指定的岛屿成员。
* **破坏**  
  允许破坏岛屿上的方块。
* **使用刷子**  
  允许在岛屿上刷扫可疑的方块。
* **建筑**  
  允许在岛屿上放置方块。
* **修改名称**  
  允许修改岛屿名称。
* **箱子交互**   
  允许使用岛屿上的箱子。
* **无视封闭**  
  允许忽略岛屿的私有状态。
* **允许封闭**  
  允许将岛屿设置为私有。
* **合作成员**  
  允许将指定玩家以合作成员的身份添加至岛屿。
* **删除地标**  
  允许删除岛屿内的地标。
* **存款**  
  允许向岛屿银行内存款。
* **解散岛屿**  
  允许解散岛屿。
* **显示 Discord**  
  允许查看岛屿的 Discord 频道。
* **丢弃物品**  
  允许在岛屿上丢弃物品。
* **末影珍珠**  
  允许在岛屿上使用末影珍珠。
* **无视驱逐**  
  不会被其他玩家从岛屿上驱逐。
* **驱逐玩家**  
  允许驱逐岛屿上的其他玩家。
* **耕地踩踏**  
  允许踩踏岛屿上的耕地。
* **施肥**  
  允许对作物使用骨粉。
* **钓鱼**  
  允许在岛屿上钓鱼。
* **飞行**  
  允许在岛屿上飞行。
* **马匹交互**  
  允许使用岛屿上的马。
* **点燃苦力怕**  
  允许使用打火石将岛屿上的苦力怕点燃。
* **交互**  
  允许与岛屿内的方块交互。  
  交互方块可在 `interactable.yml` 文件下自行配置。
* **邀请成员**  
  允许将其他玩家邀请至岛屿。
* **岛屿仓库**  
  允许使用岛屿上的仓库。
* **物品展示框**  
  允许破坏或交互岛屿上的物品展示框。
* **踢出成员**  
  允许踢出岛屿上的成员。
* **栓绳**  
  允许对岛屿上的生物使用栓绳。
* **破坏矿车**  
  允许破坏岛屿上的矿车。
* **乘坐矿车**  
  允许乘坐岛屿上的矿车。
* **打开矿车**  
  允许打开岛屿上的矿车界面。
* **放置矿车**  
  允许在岛屿上放置矿车。
* **伤害怪物**  
  允许攻击岛屿上的怪物。
* **怪物生成**  
  允许在岛屿上生成怪物。
* **命名实体**  
  允许使用命名牌为生物命名。
* **开放岛屿**  
  允许将岛屿从私有转为开放状态。
* **挂画**  
  允许破坏岛屿上的挂画。
* **展示 Paypal**  
  允许展示岛屿上的 Paypal 链接。
* **装起美西螈**  
  允许使用水桶装起岛屿上的美西螈。
* **拾起物品**  
  允许捡起岛屿上的掉落物。
* **装起鱼**  
  允许使用水桶装起岛屿上的鱼。
* **取出书本**  
  允许取出岛屿内讲台中的书本。
* **晋升成员**  
  允许提升岛屿成员的职位。
* **显示评分**  
  允许浏览岛屿的评分。
* **设置群系**  
  允许设置岛屿的生物群系。
* **设置 Discord**  
  允许设置岛屿的 Discord 联系方式。
* **设置家**  
  允许设置岛屿上的家传送点。
* **设置 Paypal**  
  允许设置岛屿的 Paypal 链接。
* **设置权限**  
  允许设置岛屿的权限。
* **设置职位**  
  允许为岛屿成员分配职位。
* **修改设置**  
  允许调整岛屿相关设置。
* **设置地标**  
  允许设置岛屿的地标传送点。
* **告示牌交互**  
  允许与岛屿上的告示牌交互。
* **破坏刷怪笼**  
  允许破坏岛屿上的刷怪笼。
* **踩踏海龟蛋**  
  允许踩踏岛屿上的海龟蛋。
* **解除合作**  
  允许移除岛屿上的合作玩家。
* **使用**  
  允许使用岛屿上的方块。
* **破坏有价方块**  
  允许破坏岛屿上有价值的方块。
* **村民交易**  
  允许与岛屿上的村民交易。
* **取款**  
  允许从岛屿银行中取款。

## 自行创建特权

为了创建权限，你必须掌握 Java 和 Spigot API 的相关知识。除此之外，你好需要了解 SuperiorSkyblock API，你可以在[这里](https://github.com/OmerBenGera/SuperiorSkyblockAPI)找到。

岛屿权限以“IslandPrivilege”类表示，注册它们非常简单！在本教程中，我会制作一个示例权限，限制玩家是否能破坏岛屿上的信标。  
首先，我通过监听 PluginInitializeEvent 注册自定义权限，然后我需要调用 `IslandPrivilege.register()` 方法。

``` Java
public final class BeaconPlacePermission implements Listener {

    private static IslandPrivilege BEACON_BREAK;

    @EventHandler
    public void onPluginInit(PluginInitializeEvent e){
        IslandPrivilege.register("BEACON_BREAK");
        BEACON_BREAK = IslandPrivilege.getByName("BEACON_BREAK");
    }

}
```

::: info

`PluginInitializeEvent` 会在插件的 `onEnable()` 方法中调用。因此你的插件必须先于本插件载入，这可以通过将其添加为（软）依赖解决。

:::

在注册自定义权限之后，我们就可以着手实现限制破坏信标的权限了！

``` Java
public final class BeaconPlacePermission implements Listener {

    private static IslandPrivilege BEACON_BREAK;

    @EventHandler
    public void onPluginInit(PluginInitializeEvent e){
        IslandPrivilege.register("BEACON_BREAK");
        BEACON_BREAK = IslandPrivilege.getByName("BEACON_BREAK");
    }
    
    @EventHandler
    public void onBlockBreak(BlockBreakEvent e){
        // 只检查信标方块。
        if(e.getBlock().getType() != Material.BEACON)
            return;

        Island island = SuperiorSkyblockAPI.getIslandAt(e.getBlock().getLocation());
        
        // 确保破坏事件发生在岛屿内。
        if(island == null)
            return;
        
        if(!island.hasPermission(e.getPlayer(), BEACON_BREAK)){
            e.setCancelled(true);
            e.getPlayer().sendMessage("" + ChatColor.RED + ChatColor.BOLD + "错误 | " + ChatColor.GRAY + "这个岛屿受到保护.");
        }
    }

}
```

大功告成！现在玩家必须拥有 `BEACON_BREAK` 权限才可以在岛屿上破坏信标。你也可以在权限菜单中添加新权限并像普通权限那样编辑它的图标。