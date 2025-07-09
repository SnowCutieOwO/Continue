# 任务

通过任务模块，你可以让玩家选择任务并完成。本章节将会带你了解如何编辑任务！

## 任务是如何工作的？

了解任务工作很重要。任务是由外部模块（类似插件）给予的类挑战功能。它处理玩家的事件与动作，并在玩家达成目标后给予奖励。SuperiorSkyBlock 提供的默认模块能处理很多行为，例如方块破坏、岛屿行为、附魔、收集或合成物品等。

## 默认任务模块

在这里你可以找到默认的任务文件描述。

### 方块任务

方块任务模块记录并处理玩家在岛屿上的方块放置与破坏行为。你可以通过它给玩家发布需要挖掘或放置方块完成的任务。

你可以在[这里](overview.missions.blocksmissions.md)了解更多。

### 酿造任务

酿造任务模块记录并处理玩家在岛屿上的炼药行为。你可以通过它给玩家发布需要酿造药水的任务。

你可以在[这里](overview.missions.brewingmissions.md)了解更多。

### 合成任务

合成任务模块记录并处理玩家在岛屿上的物品合成行为。你可以通过它给玩家发布需要合成物品的任务。

你可以在[这里](overview.missions.craftingmissions.md)了解更多。

### 附魔任务

模块记录并处理玩家在岛屿上的物品附魔行为。你可以通过它给玩家发布需要附魔物品的任务。

你可以在[这里](overview.missions.enchantingmissions.md)了解更多。

### 耕作任务

模块记录并处理玩家在岛屿上的耕作行为。你可以通过它给玩家发布需要种植作物的任务。

你可以在[这里](overview.missions.farmingmissions.md)了解更多。

### 钓鱼任务

模块记录并处理玩家在岛屿上的钓鱼行为。你可以通过它给玩家发布需要钓鱼的任务。

你可以在[这里](overview.missions.fishingmissions.md)了解更多。

### 岛屿任务

模块记录并处理玩家的岛屿相关事件。你可以通过它给玩家发布岛屿相关的任务。

你可以在[这里](overview.missions.islandmissions.md)了解更多。

### 物品任务

模块记录并处理玩家的物品栏。你可以通过它给玩家发布需要手持物品完成的任务。

你可以在[这里](overview.missions.itemsmissions.md)了解更多。

### 击杀任务

模块记录并处理玩家在岛屿上的实体击杀行为。你可以通过它给玩家发布需要击杀实体的任务。

你可以在[这里](overview.missions.killsmissions.md)了解更多。

### 统计数据任务

模块记录并处理玩家岛屿上的统计数据。你可以通过它给玩家发布需要达到某一指标的任务。

你可以在[这里](overview.missions.statisticsmissions.md)了解更多。

## 任务模块文件结构

任务模块的根文件夹位于 `modules/missions/categories` 下。这个文件夹应该只包含文件夹，每个文件夹都代表着一个任务模块的分类。每个分类文件夹可包含数量不限的任务。文件名称即为任务名称。

## 创建任务

本段会详细讲解如何创建任务。所有任务都按照相似的格式，但在本教程中我会自定义一个砍树任务！

首先设置基本信息（名称与任务类型）：

``` YAML
mission-file: BlocksMissions    # 使用方块任务模块, 因为它能处理方块破坏相关的行为.
```

在此之后，我会设置一些更高级的参数。我需要限制玩家只能通过破坏自然生成的方块完成任务，还要能够在岛屿解散的时候重置进度，最后限制玩家只能在岛屿等级大于 250 级时才可以接取这个任务。

``` YAML
mission-file: BlocksMissions

only-natural-blocks: true             # 确保只有自然生成的方块会被计入任务进度.
disband-reset: true                   # 在岛屿解散时重置任务进度.
required-checks:                      # 处理自定义检查, 如最小等级要求.
  - '%superior_island_level% > 250'
```

现在，我会配置三个最重要的内容：

1. 被记录的方块（我使用的方块格式为 1.16）
2. 任务的奖励
3. 显示在 `/is missions` 中的任务图标

``` YAML
mission-file: BlocksMissions

only-natural-blocks: true
disband-reset: true
required-checks:
 - '%superior_island_level% > 250'

# 被记录的方块名称.
required-blocks:
 # 一系列方块. 所有在同一个部分内的方块都算同一种方块.
 '1':
   # 该配置下的所有方块.
   types:
     - 'OAK_LOG'
     - 'SPRUCE_LOG'
     - 'BIRCH_LOG'
     - 'JUNGLE_LOG'
     - 'ACACIA_LOG'
     - 'DARK_OAK_LOG'
   # 该部分所需的方块总数 (5 组).
   amount: 320

# 任务的奖励.
任务奖励:
 items:
   '1':                  # 奖励部分名称, 可随意设置, 不影响实际效果.
     type: OAK_SAPLING   # 物品类型
     amount: 16          # 物品数量.
 commands:               # 完成后执行的命令.
   - 'is admin msg %player% &e&l任务 | &7成功完成了伐木工任务!'

# 任务菜单内图标相关的设置.
icons:
 # 在玩家尚未完成任务时显示的内容.
 not-completed:
   type: PAPER
   name: '&a伐木工'
   lore:
     - '&7砍伐 320 块原木.'
     - ''
     - '&6任务条件:'
     - '&8 - &7x320 原木'
     - ''
     - '&6任务奖励:'
     - '&8 - &7x16 橡树树苗'
     - ''
     - '&6砍伐原木: &7{1}/320'
     - '&6任务进度: &7{0}%'
     - '&c&l ✘ &7尚未完成'
 # 在玩家完成任务但未领取奖励时显示的内容.
 can-complete:
   type: PAPER
   name: '&a伐木工'
   lore:
     - '&7砍伐 320 块原木.'
     - ''
     - '&6任务条件:'
     - '&8 - &7x320 原木'
     - ''
     - '&6任务奖励:'
     - '&8 - &7x16 橡树树苗'
     - ''
     - '&6砍伐原木: &7320/320'
     - '&6任务进度: &7100%'
     - '&a&l ✔ &7点击领取任务奖励.'
   enchants:
     DURABILITY: 1
   flags:
     - HIDE_ENCHANTS
 # 在玩家完成任务之后显示的内容.
 completed:
   type: MAP
   name: '&a伐木工'
   lore:
     - '&7砍伐 320 块原木.'
     - ''
     - '&6砍伐原木: &7320/320'
     - '&6任务进度: &7100%'
     - '&a&l ✔ &7已经完成.'
```

你可能注意到，我使用了诸如 `{0}` 和 `{1}` 的内建变量。

这其中：

* `{0}` - 表示进度百分比变量。
* `{1}` - 表示记录的破坏方块数量。
* `{value_<方块名称>}` - 指定记录方块的进度。
* `{percentage_<方块名称>}` - 指定记录方块的百分比进度。

大功告成！现在任务已设置完毕并可投入使用。另外还有一些可以用在任务里的设置：

* `required-missions`：接取该任务的前置任务。
* `required-checks`：接取该任务的前置条件（检查变量）。
* `only-show-if-required-completed`：是否只在前置任务完成后出现任务图标。
* `island`：是否为岛屿任务（与岛屿上全部玩家同步显示）。
* `weight`：岛屿任务在菜单中显示的顺序。任务将会按权重排序，若有任务权重相同，则会按名称排序。
* `auto-reward`：是否在达到条件后立即发放奖励，而无需玩家打开界面点击领取。
* `disband-reset`：是否在岛屿结算时清空任务进度（只能用于玩家任务）。
* `leave-reset`：是否在离开岛屿时清空任务进度（只能用于玩家任务）。
* `reset-amount`：任务可以完成的次数。
* `rewards.items`：完成任务后给予的物品。
* `rewards.commands`：完成任务后执行的命令。
* `icons.not-completed`：未完成任务时显示在界面中的图标。
* `icons.can-complete`：任务正在进行时显示在界面中的图标。
* `icons.completed`：任务完成后显示在界面中的图标。

## 自行编写任务模块

若要创建任务模块，你需要掌握 Java 与 Spigot API 的相关知识。任务模块也包含了部分 SuperiorSkyblock API，可以在[这里](https://github.com/OmerBenGera/SuperiorSkyblockAPI)浏览。

在本教程中，我会制作一个记录玩家发送聊天内容“Hello”的次数统计任务。

首先，我创建一个继承了 Mission 对象的 ChatMission 对象，并覆写所有方法。

``` Java
public final class ChatMission extends Mission<Object> {

    @Override
    public void load(JavaPlugin plugin, ConfigurationSection section) throws MissionLoadException {

    }

    @Override
    public double getProgress(SuperiorPlayer superiorPlayer) {
        return 0;
    }

    @Override
    public void onComplete(SuperiorPlayer superiorPlayer) {

    }

    @Override
    public void onCompleteFail(SuperiorPlayer superiorPlayer) {

    }

}
```

如你所见，Mission 对象需要一个参数。这个参数就是我们的数据。Mission 对象内置了自动组织数据的功能。在本示例中，我会用到 Integer 类。在更多复杂的任务重，你可以使用你自己的对象。

``` Java
public final class ChatMission extends Mission<Integer> {

    ...

}
```

现在，我们来实现一些默认的方法。

* `load()` - 这是任务的“构建器”。它有两个参数：插件实例，以及任务的 ConfigurationSection。若某些步骤没有正确完成，你需要取消任务载入时，只需抛出 MissionLoadException 并附上报错信息即可。
* `getProgress()` - 计算玩家的任务进度。必须为 0 至 1 之间的数字。
* `onComplete()` - 回调方法，会在玩家完成任务时触发。
* `onCompleteFail()` - 回调方法，会在玩家任务失败时触发。

``` Java
public final class ChatMission extends Mission<Integer> {

    private int AMOUNT_OF_TIMES = 0;
    private String CHAT_MESSAGE = "";

    @Override
    public void load(JavaPlugin plugin, ConfigurationSection section) throws MissionLoadException {
        if(!section.contains("times"))
            throw new MissionLoadException("任务 ChatMission 必须包含 \"times\" 设置!");

        if(!section.contains("message"))
            throw new MissionLoadException("任务 ChatMission 必须包含 \"message\" 设置!");

        AMOUNT_OF_TIMES = section.getInt("times");

        if(AMOUNT_OF_TIMES <= 0)
            throw new MissionLoadException("时间必须为正值.");

        CHAT_MESSAGE = section.getString("message").toLowerCase();
    }

    @Override
    public double getProgress(SuperiorPlayer superiorPlayer) {
        Integer count = get(superiorPlayer);
        return count == null ? 0D : (double) count / AMOUNT_OF_TIMES;
    }

    @Override
    public void onComplete(SuperiorPlayer superiorPlayer) {
        // 这里没有什么可以做的, 所以我只会清除玩家的数据
        clearData(superiorPlayer);
    }

    @Override
    public void onCompleteFail(SuperiorPlayer superiorPlayer) {
        // 空
    }

}
```

这之后，你就可以开始监听你的事件，并在必要时修改数据。还剩一件重要的事，那就是调用 `rewardMission()` 方法。之后，你需要调用 `saveProgress()` 和 `loadProgress()` 方法，这样数据就会在重启时保存。

添加监听器与注册之后的最终成品：

``` Java
public final class ChatMission extends Mission<Integer> implements Listener {

    private int AMOUNT_OF_TIMES = 0;
    private String CHAT_MESSAGE = "";

    @Override
    public void load(JavaPlugin plugin, ConfigurationSection section) throws MissionLoadException {
        if(!section.contains("times"))
            throw new MissionLoadException("任务 ChatMission 必须包含 \"times\" 设置!");

        if(!section.contains("message"))
            throw new MissionLoadException("任务 ChatMission 必须包含 \"message\" 设置!");

        AMOUNT_OF_TIMES = section.getInt("times");

        if(AMOUNT_OF_TIMES <= 0)
            throw new MissionLoadException("时间必须为正值.");

        CHAT_MESSAGE = section.getString("message").toLowerCase();

        Bukkit.getPluginManager().registerEvents(this, plugin);
    }

    @Override
    public double getProgress(SuperiorPlayer superiorPlayer) {
        Integer count = get(superiorPlayer);
        return count == null ? 0D : (double) count / AMOUNT_OF_TIMES;
    }

    @Override
    public void onComplete(SuperiorPlayer superiorPlayer) {
        // 这里没有什么可以做的, 所以我只会清除玩家的数据
        clearData(superiorPlayer);
    }

    @Override
    public void onCompleteFail(SuperiorPlayer superiorPlayer) {
        // 空
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onPlayerChat(AsyncPlayerChatEvent e){
        SuperiorPlayer superiorPlayer = SuperiorSkyblockAPI.getPlayer(e.getPlayer());;

        // 检查记录的消息是否出现在玩家的消息中.
        if(!e.getMessage().toLowerCase().contains(CHAT_MESSAGE))
            return;

        // 确保玩家可以实际完成任务, 这样我们就无需无端记录玩家数据.
        if(!SuperiorSkyblockAPI.getMissions().canCompleteNoProgress(superiorPlayer, this))
            return;

        // 计数器加 1.
        Integer currentCount = get(superiorPlayer);
        insertData(superiorPlayer, currentCount == null ? 1 : currentCount + 1);

        /* 以下列参数调用奖励方法:
            mission - 本实例.
            superiorPlayer - 玩家对象.
            boolean - 插件是否要检查自动奖励.
         */
        SuperiorSkyblockAPI.getMissions().rewardMission(this, superiorPlayer, true);
    }

}
```

更多复杂的任务需要记录更多数据，注册更多的监听器。另外，我没有在本示例中展示 `saveProgress()` 和 `loadProgress()` 的使用方法，我也没有展示更多你可能用得上的方法。

我推荐你在编写自己的任务模块前浏览 Mission 对象以了解它的所有内容。若你想要研究默认任务模块的实现方法，你可以前往我们的 [Github 仓库](https://github.com/OmerBenGera/SuperiorSkyblock2-Missions/)浏览！