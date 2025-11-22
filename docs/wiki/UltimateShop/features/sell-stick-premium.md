# 🪄 出售魔杖 - 仅付费版

所有出售魔杖都存储在 `random_placeholder` 文件夹下。文件名即为其 ID，例如，`A.yml` 即其 ID 为 `A`。示例配置如下：

``` YAML
display-item:
  material: STICK
  name: '&d出售魔杖 &7(5 次)'
  lore:
    - '&f右键点击箱子使用!'
    - ''
    - '&c剩余使用次数: {times}'

usage-times: 5

multiplier: 1.2

actions:
  1:
    type: sound
    sound: 'block.note_block.pling'

conditions: []
```

* `display-item`：出售魔杖的显示物品。可以在此使用[物品格式](../format/itemformat/index.md)。
* `usage-times`：魔杖的最大使用次数。若该值小于零或不存在则为无限耐久。
* `multiplier`：出售魔杖的倍率。仅支持经济类型翻倍。
* `actions`：使用魔杖后触发的动作。可以在此使用[动作格式](../format/action-format.md)
* `conditions`：玩家使用该出售魔杖所需达到的条件。可以在此使用[条件格式](../format/condition-format.md)。