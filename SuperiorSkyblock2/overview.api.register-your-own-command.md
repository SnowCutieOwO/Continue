# 注册自定义命令

API 提供了一种注册命令的方法，即 `SuperiorSkyblockAPI.registerCommand(<SuperiorCommand>)`。

在本教程中，我会着手创建一条新命令 `/is near`，用于返回附近的岛屿及其方位。

首先，我需要创建一个自定义的 `SuperiorCommand` 类：

``` Java
public final class NearCommand implements SuperiorCommand {

    @Override
    public List<String> getAliases() {
        // 别称列表. 首个参数为子命令的标签.
        return Arrays.asList("near", "nearby");
    }

    @Override
    public String getPermission() {
        // 命令的所需权限. 若不需要指定, 请填入 "".
        return "";
    }

    @Override
    public String getUsage(Locale locale) {
        // 命令用法. 应当只包含命令的标签及参数.
        return "near";
    }

    @Override
    public String getDescription(Locale locale) {
        // 命令的描述, 会显示在 /is help 中.
        return "Locate nearby islands.";
    }

    @Override
    public int getMinArgs() {
        // 包括标签在内命令所需的最小参数量.
        return 1;
    }

    @Override
    public int getMaxArgs() {
        // 包括标签在内命令所需的最大参数量.
        return 1;
    }

    @Override
    public boolean canBeExecutedByConsole() {
        // 命令是否可在控制台中执行.
        return false;
    }

    @Override
    public boolean displayCommand() {
        // 命令是否要显示在 /is help 列表中.
        return true;
    }

    @Override
    public void execute(SuperiorSkyblock plugin, CommandSender sender, String[] args) {
        // 待完成
    }

    @Override
    public List<String> tabComplete(SuperiorSkyblock plugin, CommandSender sender, String[] args) {
        // 待完成
        return new ArrayList<>();
    }

}
```

就是这样。接下来你就需要在 `execute` 部分下填入你自己的代码，并实现 TAB 键自动补全功能。

`execute()` 与 `tabComplete()` 方法需要三个参数：

* `plugin`：插件的实例。
* `sender`：命令的执行者。
* `args`：执行者为命令附加的参数。

编写代码之后，最终版本的代码是这样的：

``` Java
public final class NearCommand implements SuperiorCommand {
    
    // 其他方法...

    private static final int MAX_ISLAND_SIZE = 200;
    
    @Override
    public void execute(SuperiorSkyblock plugin, CommandSender sender, String[] args) {
        // 因为已经在上一部分中禁用了控制台执行命令, 发送者只能是玩家.
        SuperiorPlayer superiorPlayer = SuperiorSkyblockAPI.getPlayer((Player) sender);
        
        Island targetIsland = plugin.getGrid().getIslandAt(superiorPlayer.getLocation());
        
        if(targetIsland == null){
            sender.sendMessage("" + ChatColor.RED + ChatColor.BOLD + "错误 | " + ChatColor.GRAY + "你必须站在岛屿的一边.");
            return;
        }
        
        StringBuilder message = new StringBuilder();
        int islandsAmount = 0;
        
        for(BlockFace blockFace : BlockFace.values()){
            // 我只需要获取东南西北四个方向上的岛屿 - 我需要检查它们的 modX 或 modZ 是否在 -+1 范围内 .
            int modXAbs = Math.abs(blockFace.getModX()), modZAbs = Math.abs(blockFace.getModZ());
            if((modXAbs == 1 || modZAbs == 1) && modXAbs + modZAbs != 2){
                Location targetIslandLocation = targetIsland.getCenter(World.Environment.NORMAL)
                        .add(MAX_ISLAND_SIZE * 3 * blockFace.getModX(), 0, MAX_ISLAND_SIZE * 3 * blockFace.getModZ());
                if(plugin.getGrid().getIslandAt(targetIslandLocation) != null) {
                    islandsAmount++;
                    message.append(", ").append(blockFace.name());
                }
            }
        }
        
        String directionsMessage = message.length() == 0 ? "" : message.substring(2);
        
        switch (islandsAmount){
            case 0:
                sender.sendMessage("" + ChatColor.YELLOW + ChatColor.BOLD + "岛屿 | " + ChatColor.GRAY + "没有找到符合条件的岛屿.");
                break;
            case 1:
                sender.sendMessage("" + ChatColor.YELLOW + ChatColor.BOLD + "岛屿 | " + ChatColor.GRAY + "有一座岛屿位于 " + directionsMessage + ".");
                break;
            default:
                sender.sendMessage("" + ChatColor.YELLOW + ChatColor.BOLD + "岛屿 | " + ChatColor.GRAY + "有多座岛屿位于 " + directionsMessage + ".");
                break;
        }
    }

    @Override
    public List<String> tabComplete(SuperiorSkyblock plugin, CommandSender sender, String[] args) {
        // 命令不需要添加任何 TAB 补全.
        return new ArrayList<>();
    }

}
```

你需要做的最后一件事就是调用 `SuperiorSkyblockAPI.registerCommand(<SuperiorCommand>)`。然后，大功告成！你成功注册了自己的命令！这个命令应当支持所有 TAB 补全，包括 `/is help` 与参数限制的情况！你也可以不通过调用上述方法注册命令。你可以将插件导入外部 jar 文件，并将其放在 SuperiorSkyBlock2 的命令文件夹中。