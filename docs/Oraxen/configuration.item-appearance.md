# 物品外观
如何自定义物品外观？

与大多数允许你创建自定义物品的插件不同的是，Oraxen 支持创建纹理包：即你可以直接通过配置定义物品的样式，插件则会帮你完成资源包的处理。对于 Minecraft，每个物品的外观是由一个叫做模型的 json 文件决定的。大多数物品的模型都是简单的二维。若要避免重复编写 json 文件的麻烦，你可以让 Oraxen 自行生成。

## 纹理包文件夹

这个文件夹（`根目录/plugins/Oraxen/pack`）包含了你的纹理包。它的工作方式与正常的 Minecraft 纹理包相似，但更为简单。你可以将你的纹理放入 textures 文件夹，将模型放入 models 文件夹。你也可以在这些文件夹中创建子文件夹，这样你就可以为它们分类。在插件生成纹理包时，它会在这个文件夹中将最终结果以 `pack.zip` 文件输出。

## 创建简单的二维物品

将你需要的贴图放置在 pack 文件夹下的 textures 文件夹。然后你可以通过替换材质的方法让 Oraxen 生成模型：

```YAML
  Pack:
    generate_model: true
    parent_model: "item/handheld"
    textures:
      - example_image1.png # 不必带上 png 后缀
      - example_image2.png
```

`parent_model` 部分是 Minecraft 要求的。实际上这会允许你的物品继承 Minecraft 已经存在的部分类型的物品模板。你可以在 Minecraft 的默认模型中找到符合要求的内容，一般情况下我推荐为手持武器使用 `item/handheld`，为诸如上文示例的紫水晶等普通物品使用 `item/generated`。

你也可以用相似的方法声明贴图，在使用方块父模型时更加有用。

```YAML
Pack:
  generate_model: true
  parent_model: "block/cube"
  textures:
    top: example_image.png
    side: example_image2.png
```

## 使用 json 模型

创建一个 json 模型非常耗时，但它允许你制作一些很酷炫的东西（如三维物品）。通过 Oraxen 实现 json 物品模型则相对简单：将你的贴图放在 `textures` 文件夹，并将模型文件放在 `models` 文件夹下（它们在 `Oraxen/pack` 文件夹中）。然后你就可以让 Oraxen 将这些模型应用在物品上：

::: warning
请在模型和贴图名称上只使用小写字符。大写字符在 1.11 之后的 Minecraft 便不再受到支持（尽管 Optifine 为他们的使用者保留了这个功能）。
:::

```YAML
  Pack:
    generate_model: false
    model: example_model.json # json 后缀可以去掉
```

### ⚠️ 使用 json 模型前的须知！

通常情况下你将贴图放在文件夹中，打开 json 文件并找到前几行，你应该能看到诸如下文的类似文本：

```JSON
{
	"__comment": "Designed by HighBridRed for Oraxen",
	"textures": {
		"particle": "custom/bonesword_palette",
		"texture": "custom/bonesword_palette",
		"bonesword_palette": "custom/bonesword_palette"
	},
	...
```

如你所见，贴图对应的路径为 **custom/bonesword_palette**，这就意味着 Minecraft 会尝试在 `custom` 文件夹中寻找 **bonesword_palette.png**，所以你需要在 `Oraxen/pack/textures` 中创建对应的文件夹。你也可以移除 `custom/` 文件夹而只保留文件，这样你只需将文件拖入 `textures` 文件夹即可。

## 使用阻挡动作 json 模型（如盾等物品）

若你想要为诸如盾的物品创建模型，你需要指定右键点击时使用的阻挡模型，但对 Oraxen 来说这非常简单。下文是一个示例配置：

```YAML
  Pack:
    generate_model: false
    model: example_shield.json # json 后缀是可以去掉的
    blocking_model: example_shield_blocking.json # json 后缀是可以去掉的
```

## 使用拉弓动作 json 模型（如弓等物品）

若你想要为弓创建自定义模型，你需要指定右键蓄力时使用的模型，对 Oraxen 来说这非常简单。

下文是一个示例配置：

```YAML
  Pack:
    generate_model: false
    model: default/combat_bow
    pulling_models:
      - default/combat_bow_pulling_0
      - default/combat_bow_pulling_1
      - default/combat_bow_pulling_2
```

如果你只有贴图文件，这些对 `pulling_textures` 同样有效。

## 使用 `charged_model`（上膛）json 模型（如弩等物品）

```YAML
  Pack:
    generate_model: false
    model: default/custom_bow
    pulling_models:
      - default/custom_bow_pulling_0
      - default/custom_bow_pulling_1
      - default/custom_bow_pulling_2
    charged_model: default/custom_bow_pulling_2
    firework_model: default/custom_bow_charged # 非必需
```

如果你只有贴图文件，这些设置对 `charged_texture` 和 `firework_texture` 同样有效。

## 使用 `cast_model`（抛竿）json 模型（如鱼竿等物品）

```YAML
  Pack:
    generate_model: false
    model: default/fishing_rod
    cast_model: default/fishing_rod_cast
```

如果你只有贴图，这些设置对 `cast_texture` 同样有效。

## 使用 `damaged_model`（耐久度）json 模型（对不同耐久的物品）

```YAML
Pack:
  generate_model: false
  model: default/diamond_sword
  damaged_models:
    - default/diamond_sword_damaged1
    - default/diamond_sword_damaged2
    - default/diamond_sword_damaged3
```

如果你只有贴图，这些设置对 `damaged_textures` 同样有效。