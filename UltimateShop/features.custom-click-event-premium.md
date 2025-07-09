# 🎮 自定义点击事件 - 仅付费版

* 自 2.5.1 起，你可以在商店界面中使用自定义点击事件。
* 在 `config.yml` 下找到这些配置：

``` YAML
  # 可填入的值：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/ClickType.htm
  # 支持用 ;; 符号使用多个点击类型.
  click-event:
    buy: 'SHIFT_LEFT'
    sell: 'RIGHT'
    buy-or-sell: 'LEFT'
    # 若你需要禁用 select-amount 功能, 请将该项设置为 NEVER.
    select-amount: 'SHIFT_RIGHT'
    sell-all: 'DROP'
    buy-one-stack: 'SWAP_OFFHAND'
  # 商店菜单的自定义点击动作.
  # 仅付费版本.
  click-event-actions:
    buy-one-stack:
      1:
        type: buy
        shop: '{shop}'
        item: '{item}'
        amount: 64
```

* 在这里我们创建了一个新的自定义点击事件，称为 `buy-one-stack`。在这个自定义事件中，我们会执行一个购买一组物品的动作。
* 在重启服务器后，若你在一个物品上按下了 **F** 键（或对应“切换副手”的键），我们会执行你在 `click-event-actions` 设置的动作，即购买一组物品。