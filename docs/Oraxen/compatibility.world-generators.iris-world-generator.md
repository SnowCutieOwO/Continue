# Iris
Iris 是付费的世界生成器

Iris 允许你简单地生成炫酷的世界。它支持自定义方块数据（BlockData），所以你也可以添加 Oraxen 创建的自定义矿物，并使其像钻石一样生成。

SpigotMC 链接：https://www.spigotmc.org/resources/iris-world-gen-the-dimension-engine.84586/

## 如何创建自定义矿物

在本示例中，我们假设你已经按照[这个教程](mechanics.noteblock-mechanic.md#矿物)在 Oraxen 的配置中创建了一个方块（紫水晶）。

### 1）定位你的世界配置

前往 `Iris/pack/YOUR_PACK_NAME/dimensions/YOUR_DIMENSION_NAME.json`，默认情况下应该为：`Iris/packs/overworld/dimensions/overworld.json`

之后，打开文件（或是 VSCode 的[工作区](https://code.visualstudio.com/docs/editor/workspaces)，这样你可以享受炫酷的 VSCode 所带来的功能）

### 2）添加你的矿物！

找到这部分的配置：

```YAML
    "ORES": "All settings in regards to deposits. Contains the ores spawning in your world.",
    "deposits": [
        {
            "minHeight": 19,
            "maxPerChunk": 4,
            "maxHeight": 150,
            "minPerChunk": 1,
            "minSize": 25,
            "maxSize": 25,
            "palette": [{"block": "granite"}],
            "varience": 2
        },
```

通过第一步的自定义矿物属性添加你自己的配置。如下文所示：

```YAML
    {
      "minHeight": 2,
      "maxPerChunk": 2,
      "maxHeight": 30,
      "minPerChunk": 0,
      "minSize": 3,
      "maxSize": 6,
      "palette": [{ "block": "oraxen:amethyst_ore" }],
      "varience": 5
    },
```

现在你可以保存文件，重置世界并重启服务器！
