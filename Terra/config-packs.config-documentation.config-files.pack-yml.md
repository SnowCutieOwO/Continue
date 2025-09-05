# pack.yml

包验证文件。

决定包内通用的内容。

<badge type="info" text="biomes" /> [群系提供器](config-packs.config-documentation.config-objects.biomeprovider.md)

<badge type="info" text="generator" /> [区块生成器](config-packs.config-documentation.config-objects.chunkgenerator.md) - 决定使用的区块生成器。

区块生成器会在其他生成阶段开始之前，为区块填充原始方块。

<badge type="info" text="id" /> [字符串](config-packs.config-documentation.config-objects.string.md) - 用于识别配置包的 ID。


<badge type="info" text="stages" /> [列表](config-packs.config-documentation.config-objects.list.md)<[生成阶段](config-packs.config-documentation.config-objects.generationstage.md)>  - 生成阶段列表。

生成阶段会在[区块生成器](config-packs.config-documentation.config-objects.chunkgenerator.md)填充原始方块后按次序细化地形。

<badge type="info" text="version" /> 版本 - 配置包的版本。

<badge type="tip" text="author" /> [字符串](config-packs.config-documentation.config-objects.string.md) - 配置包的作者。

默认值：`Anon Y. Mous`


