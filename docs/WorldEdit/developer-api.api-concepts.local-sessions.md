# 本地会话

`LocalSession` 负责处理操作方的会话数据。

这意味着如果你需要获取并使用玩家的选区、剪贴板或历史记录等，你就需要先访问玩家的 LocalSession.

要获取玩家（或操作方）的会话，`WorldEdit` 类会允许你通过 `getSessionManager()` 方法访问 `SessionManager`。`SessionManager` 则允许你通过 `get(SessionOwner)` 和 `getIfPresent(SessionOwner)` 方法获取——但返回内容可能为 null（在某些情况，例如玩家登出且回话已失效的情况）。

## 使用 LocalSession

在你获得一个会话对象之后，你可以使用多种方法访问上述的会话数据。

不对会话中存储的数据及其可用性进行假设是非常重要的。例如，`getClipboard()` 和 `getSelection(World)` 方法将会在玩家的剪贴板没有任何内容或在指定世界中没有圈定选区时抛出错误。若你在使用这些功能的时候预先检查输入参数是否存在，请确保你能捕获这个错误并向玩家发送消息。

除了选区，需要注意的是 WorldEdit 也支持跨世界选择和编辑（即，它不与玩家所处的世界绑定。）你可以通过方法 `getSelectionWorld()` 检查当前选区。如果你想要将选区限制在当前世界，请将玩家世界参数传入 `getSelection(World)` 方法。

还需注意的是，`RegionSelector`（`getRegionSelector(World)`），不与 `Region` 相同。如果你只需读取玩家的选区，那么请坚持使用 `getSelection(World)`。选区只在你进行选区点操作时是必须的，即便区域不被完全定义或你想要实际上地修改选区。依此类推，你不应修改从 `getSelection(World)` 传回的 `Region` 对象，除非你通过 `learnChanges()` 频繁更新玩家的选区，并通过 `explainRegionAdjust(Actor player, LocalSession session).` 重新给玩家发送必要的信息。

若要参考获取玩家选区的示例，请见“示例”章节。

其他需要使用到 `LocalSession` 的内容是玩家的历史记录。如果你通过编辑会话模拟玩家进行操作，你可以使用 `LocalSession` 来 `remember` 玩家的 `EditSession`，这会允许他们通过命令 `//undo` 来撤销该操作。你也可以通过 `EditSession` 手动进行 `undo` 和 `redo` 操作。

::: info   
通过 `LocalSession` 操作历史记录只能对由该玩家造成的改动或直接修改至该玩家的改动生效（即，会话的拥有者）。若你在玩家的历史记录之外存储 `EditSession`（例如，在玩家操作中独立完成的自动操作），你可以通过 `EditSession#undo(EditSession)` 方法直接撤销操作。
:::