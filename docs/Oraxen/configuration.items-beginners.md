# （初学者）物品
如何简单创建你的首个物品

今天我想要制作一个超酷的东西。另外，玩家总是觉得物以稀为贵，所以来个超稀有物品兴许能让他们爽到（普通的稀有物品已经不能满足这些玩家的胃口了，哈哈）。不开玩笑，让我们进入第一步吧！这个教程会解释如何创建一个缟玛瑙斧，但你也可以按自己的想法决定这些。

## 1. 以创建材质起手

在本教程中我会创建一个简单的平面物品贴图，Oraxen 会负责生成模型，如果需要，你也可以使用一些软件，如 [Cubik Studio](https://cubik.studio/)（付费）或 [BlockBench](https://www.blockbench.net/)（免费且开源）。这些软件都很优秀。

这里是我在 Photoshop 的 16x16 画布中创建的贴图（看起来风格与原版相近）：

![img](images/image32.png 'Photoshop 截图')

然后，我将文件保存为 *onyx_axe.png*。

## 2. 基础配置

我难以决定物品的具体分类（这像武器还是工具？），所以我在物品文件夹下创建了 **super_cool_items.yml**。这里是我添加的内容：

```YAML
onyx_axe:
  displayname: "<#6f737d>缟玛瑙斧"
  material: DIAMOND_AXE
```

所以，我为我的物品赋予了一个自定义名称，并选择钻石斧为实际物品。在[高级教程](configuration.items-advanced.md)中你将会见到其他可用的设置项（例如如何使用附魔、物品标志（Item Flags）、属性等内容）

## 3. 为物品绑定材质

通常你需要创建两个 json 文件：一个用于向游戏表示如何显示材质，另一个则向游戏表示何时显示（如果所有的钻石斧都拥有同一个材质，那会相当难堪），在 Oraxen 中这些是不必要的，我们只需要指定向图片添加的不同材质层（一般只有一层，但在可染色物品例如皮革盔甲上可以指定更多层）。这里是我添加的内容：

```YAML
onyx_axe:
  displayname: "<black>缟玛瑙斧"
  material: DIAMOND_AXE
  Pack:
    generate_model: true
    parent_model: "item/handheld"
    textures:
      - onyx_axe.png
```

如你所见，我将 `parent_model` 设为了 `"item/handheld"`，这是工具使用的父模型，诸如钻石的普通物品则需要使用 `"item/generated"`，这决定了物品在手中的样子（如果不正确设置的话，拿在手中的物品可能会看起来很奇怪）。

我也需要将我的 **onyx_axe.png** 放入 Oraxen 中的 **/pack/textures** 文件夹。这样一来我就可以直接启动服务器并见到生效的物品，但我还想给这个东西加点别的能力。

::: info 提示
你也可以使用 json 来创建 3D 模型物品，这里是[相关文档的链接](configuration.items-advanced.md#)。
:::

## 4. 以机制美化物品

在每个物品的配置中你可以添加一个机制部分，并加入一大堆酷炫的东西。另外，如果你觉得现有的机制还不能让你满意（我已经尽可能加了很多机制），你可以通过 Oraxen API 向插件添加一些新的机制（见[编写自定义机制](developers.create-your-own-mechanic.md)）。我想给我的斧头加上超高的耐久度，并能让它挖掘基岩。这里是我写的：

```YAML
onyx_axe:
  displayname: "<black>缟玛瑙斧"
  material: DIAMOND_AXE
  Pack:
    generate_model: true
    parent_model: "item/handheld"
    textures:
      - onyx_axe.png
  Mechanics:
    durability:
      value: 20000
    bedrockbreak:
      delay: 0
      period: 10
      probability: 0.5
```

20000 点的耐久相当客观，相比只有 1561 点耐久的钻石工具来说确实是这样。我将用该物品挖掘基岩的掉落率设置为了 0.5，因为这样就可以让基岩保持难以获取的状态。

::: info 提示
某些机制需要用到 ProtocolLib，破坏基岩的示例就是这样。
:::

## 5. 试试看吧！

我重启了服务器，进入之后会向我发送在 Oraxen 文件夹中 `/pack/` 的加密纹理包，一切都很不错。

我通过命令 `/o inv` 将斧头放入背包，这是我得到的：

![img](images/image33.png '我和我的缟玛瑙斧')

我也能挖开基岩：

![img](images/image34.png '我用我的缟玛瑙斧挖基岩')

::: info 提示
如果你能做到这一步，恭喜你，你已经创建了你的第一个物品。👍
:::