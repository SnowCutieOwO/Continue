# 🔀 条件显示 - 仅付费版

有些时候，你可能需要在达成条件甲的时候显示物品 A，而要在达成条件乙的时候显示物品 B，在两个条件都不满足的时候显示物品 C，诸如此类的逻辑。这个功能可以帮助你实现你的想法。

## 设置展示条件

你可以在按钮或物品配置中 `display-conditions` 部分设置条件。它使用[条件格式](../format/condition-format.md)。例如：

``` YAML
  D: 
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: ROOTED_DIRT
        amount: 1
    buy-prices:
      1:
        economy-plugin: Vault
        amount: '0.58'
        placeholder: '{amount}$'
        start-apply: 0
    sell-prices:
      1:
        economy-plugin: Vault
        amount: '0.53'
        placeholder: '{amount}$'
        start-apply: 0
    display-conditions: # <--- 添加的内容
      1: 
        type: world
        world: 'world1'
```

## 设置菜单排版选项

你可以在 layout 部分使用新增的内容：

``` YAML
`D||E||F`
```

这表示 ID 为 D、E、F 的物品或按钮对应条件都会按顺序检查，直到满足任一条件。例如，如果没有达到显示 D 的条件，但达到了显示 E 的条件，那么对应格子会展示 ID 为 E 的物品或按钮。

另外，你还需要在菜单设置中将 `dynamic-layout` 设置为 `true` 才可使用这个功能。

``` YAML
dynamic-layout: true
layout:
  - '000000000'
  - '0ABC`D||E||F`EFG0'
  - '0HIJKLMN0'
  - '0OPQRSTU0'
  - '000000000'
  - 'a0003000b'
```