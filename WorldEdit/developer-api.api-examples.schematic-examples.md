# 结构示例

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