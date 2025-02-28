# 自定义界面

**通过 Oraxen 的自定义字符，你可以创建自定义界面，下文为示例**

```YAML
customshop:
  texture: custom/default/custom/gui_tienda.png
  ascent: 13
  height: 256
```

贴图的分辨率可以高于 256x256，但其名称必须保持全小写不带空格，与其他纹理包中的文件一致。

若要修改界面内的贴图/自定义字符水平位置，请使用偏移标签。`<shift:-8>` 表示向左移动 8 像素，而 `<shift:211>` 则表示向右移动 211 像素。

## 我如何获取自定义字符的 Unicode？

一般情况下这没有必要，因为 Oraxen 会处理任何界面中的 `<glyph:glyph_id>` 标签。

所以只需将这个标签添加至其他插件中，例如将标题设置为 `<glyph:glyph_id>`。

如果你仍然想要原 Unicode 替换字符，你可以在你的自定义字符配置中找到它。

## 我如何创建隐形物品？

::: info 提示
隐形元素常见于菜单内的按钮。若要创建隐形元素，你需要让某个元素带上透明材质。下文为一个例子。
:::

```YAML
invisible_item:
  displayname: "<white>"
  material: PAPER
  Pack:
    generate_model: true
    parent_model: "item/generated"
    textures:
    - required/particle
```