# 剪贴板示例

::: info
该文档讲述的是使用剪贴板的 API。在游戏中使用&对剪贴板功能的解释请转到“剪贴板”章节。
:::

本章节所述概念出现在如下部分的示例中：区域、会话编辑、区段

## 复制

复制是创建剪贴板最直接的方法。若要这么做，你需要一个 `Region` 对象，一个源和目标区段，例如 `World` 和一个 `Clipboard` 对象。在本示例中我们会使用一个 `CoboidRegion` 和一个标准的 `BlockArrayClipboard`。之后，你所需要做的就是将参数传递至 `ForwardExtentCopy`，应用配置（例如调用 `setCopyingEntities(true)` 来复制实体），并调用 `Operations.complete`。
```Java
CuboidRegion region = new CuboidRegion(min, max);
BlockArrayClipboard clipboard = new BlockArrayClipboard(region);

ForwardExtentCopy forwardExtentCopy = new ForwardExtentCopy(
    world, region, clipboard, region.getMinimumPoint()
);
// 在这里配置
Operations.complete(forwardExtentCopy);
```
在这之后你可能想要保存这个剪贴板。需要注意的是如果你只是为了将剪贴板再次粘贴而去复制它的话，你应该跳过完全创建一个新剪贴板对象的步骤。你应该为目标世界构建一个 `EditSession` 并将其传递给 `ForwardExtentCopy`——它非常适合在区段之间复制方块，甚至是同一区段，并不仅限于剪贴板本身。

## 粘贴

粘贴是将方块从 `Clipboard` 移动到其他 `Extent`，通常为 `World` 的方法。若要粘贴，你需要一个目标 `Extent`（通常来讲，可以是 `World` 的 `EditSession`）和一个 `Clipboard`。通过你的剪贴板创建一个 `ClipboardHolder`，然后通过调用带有 `EditSession` 的 `createPaste` 获取一个 `PasteBuilder`。调用 `.to` 方法将位置设置在你想要粘贴的位置（实际位置会被剪贴板偏移影响，见上文的“剪贴板”章节来获取更多信息）。添加其他你想要的配置（蒙版、粘贴实体、粘贴生物群系等），之后调用 `build()` 方法获取操作。这之后操作就会被完成，所有方块都会被粘贴。需要注意的是如果你需要旋转剪贴板内容，你需要对 `ClipboardHolder` *在*调用 `createPaste` *之前*使用 `setTransform`。

完整示例：
```Java
try (EditSession editSession = WorldEdit.getInstance().newEditSession(world)) {
    Operation operation = new ClipboardHolder(clipboard)
            .createPaste(editSession)
            .to(BlockVector3.at(x, y, z))
            // 在这里配置
            .build();
    Operations.complete(operation);
}
```

你可能想要在这之前先载入一个剪贴板。

## 结构示例

该部分主要讲述结构有关的内容。结构通常指保存的剪贴板内容，而不是内存中的剪贴板。

### 保存

`Clipboard` 对象可以简单地保存至本地。你所要准备的就是一个 `ClipboardFormat`，一个 `Clipboard` 和一个 `OutputStream`。之后，你可以按格式调用 `getWriter` 并在其上以你的 `Clipboard` 进行 `write` 操作。下文为将剪贴板保存为文件的示例：

```Java
File file = /* 需要保存至剪贴板的内容 */;

try (ClipboardWriter writer = BuiltInClipboardFormat.SPONGE_SCHEMATIC.getWriter(new FileOutputStream(file))) {
    writer.write(clipboard);
}
```

### 载入

载入一个 `Clipboard` 也很简单。你可以强制指定一个 `ClipboardFormat`，或让 WorldEdit 自行发现你想要载入的结构文件。示例如下文所示。之后你就可以在格式上调用 `getReader`，并在读取器上执行 `read` 方法，以获取一个 `Clipboard` 实例。
```Java
Clipboard clipboard;

ClipboardFormat format = ClipboardFormats.findByFile(file);
try (ClipboardReader reader = format.getReader(new FileInputStream(file))) {
    clipboard = reader.read();
}
/* 在这里使用剪贴板 */
```