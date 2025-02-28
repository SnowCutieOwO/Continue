# 操作方

`Actor` 可以是任何使用 WorldEdit 命令或调用它特定部分 API 的对象。通常来讲，操作方是玩家，但它们也可以是一个命令方块、控制台，甚至是一个实体。需要厘清的一个事实是，一个操作方对象并不需要知道它在世界的哪个位置，尽管很多操作方对象集成了 `Locatable` 用于获取位置。模组/插件并不经常需要向 WorldEdit API 提供操作方，但在某个对接例如 `EditSessionEvent` 事件（见“[编辑会话事件](developer-api.api-concepts.edit-sessions.md)”章节）会提供操作方对象，这允许你基于操作方的不同而做出一些个性化的选择。