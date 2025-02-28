# LocalSession 示例

::: info
该文档讲述的是使用会话数据的 API。在游戏对会话功能的解释请转到“[会话](usage.general.sessions.md)”章节。对 LocalSession API 的概述请转到“[本地会话](developer-api.api-concepts.local-sessions.md)”章节。
:::

本章节所述概念出现在如下部分的示例中：操作方、区域、本地会话、适配器。

## 获取 LocalSession

在获取 LocalSession 前，你需要先拥有一个指定操作方的会话。通常来讲，操作方会被适配器通过各服务端核心不同的类型自动收集。在下文的示例中，我们会使用 Bukkit 提供的 `org.bukkit.entity.Player` 对象。
```Java
org.bukkit.entity.Player player = ...; // 根据服务端不同而有差异的玩家类, 通常会从命令、事件等内容中被收集.
Player actor = BukkitAdapter.adapt(player); // WorldEdit 的本地 Player 类, 继承了 Actor
SessionManager manager = WorldEdit.getInstance().getSessionManager();
LocalSession localSession = manager.get(actor);
```
现在你已经拥有了一个会话，你可以对它做很多事情。

## 获取玩家会话
```Java
// 按上文示例获取一个 LocalSession 对象
LocalSession localSession = ...;
Region region; // 声明区域变量 region
// 注意: 所处世界并不需要与玩家相同, 见“概念”章节
World selectionWorld = localSession.getSelectionWorld();
try {
    if (selectionWorld == null) throw new IncompleteRegionException();
    region = localSession.getSelection(selectionWorld);
} catch (IncompleteRegionException ex) {
    actor.printError(TextComponent.of("Please make a region selection first."));
    return;
}
/* 你现在就可以将区域对象用于编辑, 例如检查指定形状等. */
```

## 获取玩家剪贴板

正如“剪贴板示例”中所见的那样，你可以复制一片区域或载入的结构来创建一个剪贴板对象，你可以将这个剪贴板对象粘贴，或将其保存为结构文件。为了能在代码层面进行交互，这些已经足够，但有些时候你可能需要与某个玩家的剪贴板直接交互。在这种情况下，你就可以通过 `LocalSession` 获取或修改玩家的剪贴板内容。

示例 1：设置玩家的剪贴板
```Java
LocalSession localSession = ...; // 如第一个示例那般获取一个 LocalSession 对象
Clipboard clipboard = ...; // 如上文所述般, 载入一个结构或复制一片区域
localSession.setClipboard(new ClipboardHolder(clipboard));
```

示例 2：获取玩家的剪贴板
```Java
LocalSession localSession = ...; // 如第一个示例那般获取一个 LocalSession 对象
ClipboardHolder clipboard; // 声明变量
try {
    clipboard = localSession.getClipboard();
} catch (EmptyClipboardException ex) {
    actor.printError(TextComponent.of("Your clipboard is empty."))
    return;
}
/* 你现在可以将剪贴板粘贴在某处, 或将其保存为结构等. */

// 额外示例: 旋转玩家剪贴板的内容
AffineTransform transform = new AffineTransform();
clipboard.setTransform(clipboard.getTransform().combine(transform.rotateY(90)));
```

## 在玩家的操作历史中存储 EditSession 对象

在代码中创建和使用 EditSession 并修改了一些方块之后，你也许想要将这些改动存储在玩家的历史记录上，以便他们稍后能使用 `//undo` 进行撤销操作。
```Java
LocalSession localSession = ...; // 如第一个示例那般获取一个 LocalSession 对象
EditSession editSession = ...; // 之前使用过的编辑会话
localSession.remember(editSession);
```