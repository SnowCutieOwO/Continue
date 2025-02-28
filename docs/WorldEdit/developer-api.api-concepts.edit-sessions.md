# 会话编辑

一个 `EditSession` 对象处理获取和放置方块、实体和生物群系相关的配置。它会先建立一个连续区段以正确放置方块。它也参与处理渲染模式、快速模式和缓冲的开启和关闭。每个指定世界的操作都会在某一位置使用一个 `EditSession` 对象，来确保方块放置的快速和正确完成。

产生一个 `EditSession` 最简单的方式就是通过 `WorldEdit` 类上的 `newEditSession(World)` 或 `newEditSessions(Actor & Locatable)` 的辅助方法。使用 `newEditSessionBuilder()` 完整构建器也有它的缺点。构建器所有的选项，曾经是 `EditSessionFactory` 的方法，但是可读性更强。若你使用了构建器，不要忘记在末尾调用 `build()` 来获取实际的 `EditSession` 对象。

```Java
// 从 WorldEdit 世界获取编辑会话
WorldEdit.getInstance().newEditSession(world)

// 从 WorldEdit 世界获取带有操作数量上限的编辑会话
WorldEdit.getInstance().newEditSessionBuilder().world(world).maxBlocks(1000).build()
```

会话编辑需要在所有操作完成之后关闭，以此确保操作的任务队列能正常刷新。在关闭之后这些内容将不再可用，只能重新创建一个对象用于之后可能的操作。

一个简单的关闭 `EditSession` 方式是使用 `try-with-resources` 状态：
```Java
try (EditSession editSession = WorldEdit.getInstance().newEditSession(world)) {
    // 在这里使用会话编辑 ...
} // 当代码执行到退出这块内容时，它会自动关闭/刷新
```

若要了解更多信息，请见 Java 教程的“try-with-resources 状态”章节。

在所有编辑会话被用于方块编辑并关闭轴，它会保存所有的变动。若你想要在稍后撤销这些操作，你可以保留一份编辑会话备用。若要撤销操作，照上文所述，创建一个新的 EditSession，并调用 `editSesison.undo(newEditSession)` 即可。

## 区段堆栈

“区段堆栈”，用于描述许多堆叠在一起的区段，而这些区段会形成一个 `EditSession` 对象。在堆栈的最底层则是它们会提交变动的 `World` 对象。区段会被包装在其他区段中，而那些区段会用于 Minecraft 各种奇怪的修复，之后便是第一个事件以 `Stage.BEFORE_CHANGE` 的状态发起。返回的区段则会被用于 `EditSession.rawSetBlock()` 中。之后，该区段又会被包装在重排/批处理区段中，其他事件会以 `Stage.BEFORE_REORDER` 的状态进行。其中返回的区段则会用在 `EditSession.smartSetBlock()`。之后，这些区段又会被包装在设置变动、蒙版和限制区段，然后最终的事件会以 `Stafe.BEFORE_HISTORY` 的状态进行。返回的区段再被用于正常的 `EditSession.setBlock()` 操作。

## 编辑会话事件

`EditSessionEvent` 是与 WorldEdit 的变动进行高效对接的方式。它会作为 `EditSession` 创建的一部分发起，并允许与区段堆栈在上述的多个状态中进行对接。你可以通过注册 WorldEdit 的 eventBus 来监听这一事件。

```Java
WorldEdit.getInstance().getEventBus().register(new Object() /* [1] */ {
    // 请确保你导入了 WorldEdit 的 @Subscribe!
    @Subscribe
    public void onEditSessionEvent(EditSessionEvent event) {
        if (event.getStage() == /* 你需要的状态 */) {
            event.setExtent(new MyCustomExtent(event.getExtent()));
        }
    }
});

// [1]: 你不必使用匿名类, 你也可以在它的单独类下存储你的方法并在这里构建.
```

在创建你自己的区段类时，请考虑继承 `AbstractDelegateExtent`，这会允许你只覆写你想要的方法。别忘了在执行任何实际的操作之后调用正确的 `super` 方法！