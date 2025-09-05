# 标签（Tag）

标签是一种鉴别群系的方法，通常以字符串的形式存在。标签一般用于群系分布，让群系以某种方式按组分布。例如，所有带有 `USE_DESERT_OASIS` 标签的群系都可以通过[群系提供器](config-packs.config-documentation.config-objects.biomeprovider.md)被替换为沙漠绿洲群系。

所有群系默认包含 `ALL` 标签，可通过指定 `ALL` 使得所有群系都可作为目标。

另外，所有群系也默认其 ID 为标签之一，意味着你可以将指定群系的 ID 当成标签引用。

## 用途

有 7 个参数用到：

* BIOME 中的 base:

<badge type="info" text="tags" /> Set<[标签](config-packs.config-documentation.config-objects.tag.md)>

* Stage 中的 REPLACE_LIST：

<badge type="info" text="default-from" /> [标签](config-packs.config-documentation.config-objects.tag.md) - 被替换的流水线群系必须包含的标签。

* Stage 中的 REPLACE：

<badge type="info" text="from" /> [标签](config-packs.config-documentation.config-objects.tag.md) - 包含这些标签的流水线群系会被替换。

* Stage 中的 BORDER_LIST：

<badge type="info" text="default-replace" /> [标签](config-packs.config-documentation.config-objects.tag.md) - 被替换的流水线群系必须包含的标签。

* Stage 中的 BORDER_LIST：

<badge type="info" text="from" /> [标签](config-packs.config-documentation.config-objects.tag.md) - 被替换的流水线生物群系必须包含的边缘标签。

* Stage 中的 BORDER：

<badge type="info" text="replace" /> [标签](config-packs.config-documentation.config-objects.tag.md) - 被替换的流水线群系必须包含的标签。

* Stage 中的 BORDER：

<badge type="info" text="from" /> [标签](config-packs.config-documentation.config-objects.tag.md) - 被替换的流水线生物群系必须包含的边缘标签。
