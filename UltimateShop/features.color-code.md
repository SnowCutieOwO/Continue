# 🎨 颜色代码

UltimateShop 提供了两种样式的颜色代码。插件会自动检测你所使用的格式，你无需顾虑。

## MiniMessage

* [在此](https://docs.advntr.dev/minimessage/format.html)浏览彩色代码格式。
* 需要使用 Paper 或其分支，且服务器版本为 1.17.1+。
* 可使用更多高级功能，如字体、悬浮文本等。
* 可在除基岩版设置或 `config.yml` 文件外的任何地方使用。这是因为 Geyser 和 PlaceholderAPI 都尚未在 api 层面兼容 MiniMessage。

## 内置颜色判断器

* [在此](https://github.com/CarmJos/EasyPlugin)浏览彩色代码格式。
* 格式：
  * 十六进制彩色格式：`\&#RRGGBB`
  * 例如：`\&#ff0000`。
  * 渐变色格式：`&<#起始色码> 消息文本 &<#终止色码>`
  * 例如：`&<#666666>UltimateShop &<#ffffff>`。
* 支持任意种类及版本的服务端。
* 仅支持彩色与渐变色。
* 可在任何地方使用。
* 对于支持 MiniMessage 的 Paper 服主，我们会将内置格式自动转化为 MiniMessage 格式。