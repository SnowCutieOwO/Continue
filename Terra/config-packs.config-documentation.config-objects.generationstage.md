# 生成阶段（GenerationStage）

## 类型

不同类型的 `GenerationStage` 有着不同的行为，有时还有额外的配置参数可以控制它们。

类型通过配置参数 <badge type="info" text="type" /> 决定。如果两个附属使用了同一种类型名称，你可以在类型前加上 `附属名称:` 区分。

可用的 `GenerationStage` 如下所示：

- - -

### FEATURE

\* 配置类型需要 `generation-stage-feature` 拓展才可使用

<badge type="info" text="id" /> [字符串](config-packs.config-documentation.config-objects.string.md)

<badge type="tip" text="resolution" /> [整数](config-packs.config-documentation.config-objects.intenger.md)

默认值：`4`

## 用途

只有一个参数用到：

* pack.yml 中的 base：

  <badge type="info" text="stages" /> [列表](config-packs.config-documentation.config-objects.list.md)<[生成阶段](config-packs.config-documentation.config-objects.generationstage.md)>