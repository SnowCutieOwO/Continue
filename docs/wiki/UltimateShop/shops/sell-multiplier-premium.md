# 💰 出售倍率 - 仅付费版

::: info

出售魔杖与出售魔箱提供了倍率功能，它们的倍率与本章节所介绍的相互独立。最终价格会叠加计算。

:::

`sell.multiplier` 为全局出售增值系统。你可以用它收税，或者奖励 VIP 玩家额外物品。可以在 `config.yml` 文件中找到相关设置。

```yaml
sell:
  # 仅付费版本
  multiplier:
    enabled: false
    display-original-price: true
    # 支持填入：MAX, STACK
    # MAX 模式：默认使用最大值作为结果
    # STACK 模式：在玩家满足条件的情况下进行堆叠与倍增
    mode: STACK
    value:
      default: 1
      rich: 0.9
      vip: 1.1
    value-conditions:
      # Tax
      rich:
        1:
          type: placeholder
          placeholder: '%vault_eco_balance%'
          rule: '>='
          value: 50000
      # VIP 专属奖励
      vip:
        1:
          type: permission
          permission: 'group.vip'
```
* `enabled`：使用此功能请确保将其设置为 `true`。
* `display-original-price`：若设置为 `false`，插件会显示倍率修正后的价格。
* `mode`：可填入 **MAX** 或 **STACK**。
    * `MAX`：在所有倍率条目与 `default` 中取最大值乘算。
    * `STACK`: 从 `default` 条目开始乘算所有值。

    示例：
    * `default = 1`
    * `rich = 0.9`
    * `vip = 1.1`
    * 玩家同时 `rich` 与 `vip`
    * MAX 模式下的输出结果为 `1.1`
    * STACK 模式下的输出结果为 $1 \times 0.9 \times 1.1 = 0.99$
* `value` 与 `value-conditions`：`value` 中的倍率 ID 必须与 `value-conditions` 中的 ID 完全符合。可以在 `value-conditions` 中使用[条件格式](../format/condition-format.md)。