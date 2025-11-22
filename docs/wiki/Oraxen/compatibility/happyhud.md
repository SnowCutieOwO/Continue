# HappyHUD
HappyHUD 允许你制作真正的自定义界面

本章节会列出让 HappyHUD 与 Oraxen 正确兼容的步骤。

如下所示：

1. `settings.yml` 下设置 `hide_scoreboard_numbers: false`
2. 如果存在，则删除 `Oraxen/pack/shaders/core/` 下的 `render_text.vsh` 和 `render_text.json` 这两个文件
3. 在 HappyHUD 的配置文件，启用 `copy-resource-pack` 并设置 `path: "Oraxen/pack/assets"`（需要 HappyHUD 版本高于 2.7-SNAPSHOT）

::: warning
如果你真的需要隐藏计分板上的数字，可以将 Oraxen 的光影文件手动合并至 HappyHUD 的文件夹，路径为 `HappyHUD/pack/minecraft/shaders/core/`。
:::