# 岛屿任务

岛屿任务模块记录并处理岛屿相关事件。你可以通过它给玩家发布需要触发岛屿事件的任务。任务会在岛屿事件触发时检查进度并记录相关数据。

## 所需设置

### `events`

完成任务所需触发的岛屿事件。

该部分的示例配置可在下文找到。

::: info

你可以在[这里](https://github.com/BG-Software-LLC/SuperiorSkyblock2/tree/master/API/src/main/java/com/bgsoftware/superiorskyblock/api/events)找到事件列表。  
只支持填入岛屿相关的事件。

:::

::: info

你可以添加“-target”参数记录事件中玩家的数据。  
例如，在使用 `IslandKickEvent` 时，默认情况下只会记录执行该操作（即输入命令 /is kick）的玩家。但是，加上“-target”参数后（“IslandKickEvent-target”），那么插件就会记录被踢出的玩家。

:::

#### 设置类型

配置

## 可选设置

### `success-check` 

完成任务所需要达到的条件。表达式的值必须返回 true 或 false。

这需要 Java 相关的知识。你可以用 `event` 作为变量，以检测相关事件。

#### 设置类型

字符串

## 示例配置

``` YAML
# 使用的任务文件名称
mission-file: IslandMissions

# 任务在达到条件时是否自动并领取奖励.
auto-reward: true

# 是否在完成任务后重置玩家的方块计数?
reset-after-finish: true

# 完成任务时给予的奖励.
rewards:
  commands:
    - 'eco give %player% 25000'
    - 'is admin msg %player% &e&l探索 | &7成功完成任务 下界探索者!'
    - 'is admin msg %player% &e&l探索 | &7准备好接受真正的挑战了吗?'
    - 'is admin msg %player% &e&l探索 | &7&o有关下个任务的更多信息, 请输入命令 /is missions 查看'

# 触发该任务的事件.
events:
  - IslandSchematicPasteEvent

# 完成任务的条件.
success-check: 'event.getSchematic().endsWith("_nether")'

# 菜单中使用的图标.
icons:
  not-completed:
    type: PAPER
    name: '&a下界探索者'
    lore:
      - '&7前往下界.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$25,000'
      - ''
      - '&c&l ✘ &7尚未完成'
  can-complete:
    type: PAPER
    name: '&a下界探索者'
    lore:
      - '&7前往下界.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$25,000'
      - ''
      - '&a&l ✔ &7点击领取任务奖励.'
    enchants:
      DURABILITY: 1
    flags:
      - HIDE_ENCHANTS
  completed:
    type: MAP
    name: '&a下界探索者'
    lore:
      - '&7前往下界.'
      - ''
      - '&6任务奖励:'
      - '&8 - &7$25,000'
      - ''
      - '&a&l ✔ &7已经领取.'
```