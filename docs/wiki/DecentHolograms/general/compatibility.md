# 🔗 兼容性
兼容的（悬浮字）插件及其迁移教程。

## PlaceholderAPI

DecentHolograms 完全支持 PlaceholderAPI（PAPI），它的变量可以用在诸如悬浮字行、点击操作和动态文本等部分。

::: info
默认情况下为防止性能问题，动画中的变量不会被解析。    
若要允许变量被解析，请在 DecentHolograms 的 `config.yml` 中启用 `allow-placeholders-inside-animations`。
:::

## 悬浮字转化

DecentHolograms 支持导入其他悬浮字插件的数据。下文为当前版本支持迁移数据的插件，需要使用的命令以及转而使用 DecentHolograms 所需要注意的事项。

::: info 
无需加载插件即可进行转化。我们只需要这些插件存储悬浮字的文件。
:::

### CMI

> /dh convert CMI

**默认文件位置：**`plugins/CMI/holograms.yml`

**特殊行为：**

* <font color="green">✔</font> `ICON:<物品>` 会被转化为 `#ICON:<物品>`
* <font color="green">✔</font> `!nextpage!` 会创建一页新的悬浮字。
* <font color="orange">⚠</font> 名称以 `#<` 或 `#>` 开头的悬浮字会被忽略

### FutureHolograms

> /dh convert FutureHolograms

**默认文件位置：**`plugins/FutureHolograms/holograms.yml`

**特殊行为：**

* <font color="orange">⚠</font> 转化过程中无特殊行为。

### GHolo

> /dh convert GHolo

**默认文件位置：**`plugins/GHolo/h.data`

**特殊行为：**

* <font color="green">✔</font> `ICON:<物品>` 会被转化为 `#ICON:<物品>`
* <font color="green">✔</font> `ENTITY:<实体>` 会被转化为 `#ENTITY:<实体>`
* <font color="green">✔</font> `[x]`、`[X]` 和 `[|]` 会被转化为 Unicode 字符
* <font color="green">✔</font> `[#rrggbb 文本 #rrggbb]` 会被转化为 <#rrggbb>文本</#rrggbb>

### Holograms

> /dh convert Holograms

**默认文件位置：**`plugins/Holograms/holograms.yml`

**特殊行为：**

* <font color="green">✔</font> `ITEM:<物品>` 会被转化为 `#ICON:<物品>`

### HolographicDisplays

> /dh convert HolographicDisplays

**默认文件位置：**`plugins/HolographicDisplays/database.yml`

**特殊行为：**

* <font color="green">✔</font> `ICON:<物品>` 会被转化为 `#ICON:<物品>`
* <font color="green">✔</font> `{papi: <变量>}` 会被转化为 `%<变量>%`
* <font color="green">✔</font> `{empty}` 会被转化为颜色代码模拟的空行。