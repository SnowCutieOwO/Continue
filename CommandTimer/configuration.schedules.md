# 计划表
CommandTimer 支持不同类型的计划表，并可结合使用来应对更复杂的情况。

## 间隔（Intervals）
该模式简单地间隔一段时间重复地执行命令。

## 固定时间
该模式可用于在指定的时间执行一条命令，例如 14:30:00. 该模式也允许你设置能触发命令的时间段。更多信息请见下文。

范围与时间点可正常结合使用。

### 普通固定时间
正如上文所述，它只会在指定时间点触发预先设置的命令。在使用该模式时不会考虑间隔。

### 范围固定时间
在配置固定时间时，插件允许你输入第二个时间点。在这么设置的情况下，预先设置的命令会在时间段内以预设的间隔执行。

### Minecraft 世界时间
对于固定时间点和范围时间，插件也允许玩家使用 Minecraft 时间而非服务器的时间。可以在固定时间点触发，这意味着按服务器时间运作的定时任务可以和 Minecraft 世界时间混合使用。

在按 Minecraft 时间配置时，需要选中一个世界作为时间参考才可以继续配置。

若你想要了解有关世界时间的更多信息，前往你想要设置为参考的世界并输入命令 `/cmt time`。

## 天
在按日期设置的菜单中，你可以选择定时任务在哪天执行。默认情况下每天都会执行。

如果有预先设置的固定时间点，也会将其考虑在内。
