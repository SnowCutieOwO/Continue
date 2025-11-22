# 图案（Pattern）

\* 该配置需 `config-locators` 附属才可使用

## 类型

不同类型的 `Pattern` 有着不同的行为，有时还有额外的配置参数可以控制它们。

类型通过配置参数 <badge type="info" text="type" /> 决定。如果两个附属使用了同一种类型名称，你可以在类型前加上 `附属名称:` 区分。

可用的 `Pattern` 如下所示：

- - -

### MATCH_AIR

<badge type="info" text="offset" /> [范围](range.md)

### MATCH_SOLID

<badge type="info" text="offset" /> [范围](range.md)

### MATCH

<badge type="info" text="block" /> [方块](block.md)

<badge type="info" text="offset" /> [范围](range.md)

### MATCH_SET

<badge type="info" text="blocks" /> [集合](set.md)<[方块](block.md)>

<badge type="info" text="offset" /> [范围](range.md)

### AND

<badge type="info" text="pattern" /> [列表](list.md)<[图案](pattern.md)>

### OR

<badge type="info" text="pattern" /> [列表](list.md)<[图案](pattern.md)>

### XOR

<badge type="info" text="pattern" /> [列表](list.md)<[图案](pattern.md)>

### NOT

<badge type="info" text="pattern" /> [图案](pattern.md)

## 用途

有 6 个参数用到：

* Pattern 中的 OR：

  <badge type="info" text="patterns" /> [列表](list.md)<[图案](pattern.md)>

* Locator 中的 PATTERN：

  <badge type="info" text="pattern" /> [图案](pattern.md)

* Locator 中的 ADJACENT_PATTERN：

  <badge type="info" text="pattern" /> [图案](pattern.md)

* Pattern 中的 NOT：

  <badge type="info" text="pattern" /> [图案](pattern.md)

* Pattern 中的 XOR：

  <badge type="info" text="patterns" /> [列表](list.md)<[图案](pattern.md)>

* Pattern 中的 AND：

  <badge type="info" text="patterns" /> [列表](list.md)<[图案](pattern.md)>
