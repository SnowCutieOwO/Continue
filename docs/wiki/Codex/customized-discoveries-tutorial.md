# 自定义日志条目教程

在这一章节中我会向你解释如何使用我的另一个插件 [**ConditionalEvents**](https://www.spigotmc.org/resources/conditionalevents-custom-actions-for-certain-events-1-8-1-16.82271/) 与本插件进行配合。ConditionalEvents 允许你在达到特定条件时触发时间，并执行不同的操作。例如，如果玩家捡起了一个物品，或是按下了一个按钮，设置好的一些时间就会被触发。

所以，在我的插件 ConditionalEvents 的帮助下，你可以创建更复杂的日志条目。让我们假设你想要做通过消耗一个物品来解锁一个日志条目的功能，比如吃掉一个苹果，所以我们就可以这样创建分类：
``` YAML
config:
  inventory_items:
    category:
      id: PLAYER_HEAD
      name: "&7分类: #a36bfe&l食物"
      lore:
        - "#eeeeee你吃过的食物记录"
        - ""
        - "&7进度: %unlocked% &8[%progress_bar%&8] &8(&7%percentage%&8)"
    discovery_unlocked:
      id: PAPER
      name: "%name%"
      lore:
        - "%description%"
        - ""
        - "&8于 %date% 发现"
    discovery_blocked:
      id: GRAY_DYE
      name: "&c??"
      lore:
        - "&7你尚未发现此条目."
  rewards:
    per_discovery:
      - "centered_message: #a36bfe&m00                                                 00"
      - "centered_message: "
      - "centered_message: #eeeeee&l日志已更新"
      - "centered_message: &7食物: %name%"
      - "centered_message: "
      - "centered_message: &7通过命令 #eeeeee/codex &7查看"
      - "centered_message: "
      - "centered_message: &7奖励: &a+50XP"
      - "centered_message: "
      - "centered_message: #a36bfe&m00                                                 00"
      - "title: 20;60;20;#eeeeee&l日志已更新;&7食物: %name%"
      - "playsound: BLOCK_GILDED_BLACKSTONE_STEP;10;0.1"
      - "console_command: xp give %player% 50"
    all_discoveries: []

discoveries:
  mystery_apple:
    name: "#a36bfe&l神秘苹果"
    description:
    - "&7盖施密洞穴中所发现的苹果。"
    - "&7会给予你持续 30 秒的力量 II 效果。"
```

如你所见，我们只是创建了一个“食物”分类下的日志条目（文件名称可以为 `food.yml`）。因为这个条目只能通过命令解锁，因此无需设置 `discover_on` 设置。现在来着手制作一个 ConditionalEvents 触发事件。
``` YAML
mystery_apple_eat:
    type: item_consume
    conditions:
    - '%item% equals APPLE'
    - '%item_name% equals 神秘苹果'
    actions:
      default:
      - 'give_potion_effect: INCREASE_DAMAGE;600;2'
      - 'console_command: codex unlock %player% food 1'
```

这个事件将会检查玩家是否吃掉了一个名称为“神秘苹果”的物品，如果检测到，插件将会给予玩家 600 刻（30 秒）的力量药水效果，以及以控制台身份执行的一个命令 `/codex unlock %player% food mystery_apple false`。这将为该玩家解锁这个日志条目。如果玩家再次吃掉这个苹果，同样的命令将会被执行，但接下来不会发生任何事，因为玩家已经解锁了这个日志条目。

当然一些更为复杂的时间也可以通过此插件的多个事件做到，如果你对我的另一个插件感兴趣的话，你可以点击[这里](https://ajneb97.gitbook.io/conditionalevents/)来阅读这个插件的 Wiki 页面。