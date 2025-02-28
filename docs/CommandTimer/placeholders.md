# 变量

## CommandTimer 变量

有些变量会在安装 PlaceholderAPI 之后可用。不要忘记把 `task` 替换成你的定时任务名称。

* `%commandtimer_task_seconds%`：返回配置间隔，以秒为单位显示
* `%commandtimer_task_secondsFormat%`：与上一个相同，但显示格式为 `HH:mm:ss`
* `%commandtimer_ALLTASKS_nextTaskName%`：显示下一条执行的任务名称。
* `%commandtimer_task_nextExecution%`：获取下次执行命令的剩余时间，以秒为单位显示
* `%commandtimer_task_nextExecutionFormat%`：与上一个相同，但显示格式为 `HH:mm:ss`
* `%commandtimer_task_timerFormat%`：与上一个变量相同，但你可以将会 `timerFormat` 替换为你需要的格式。你可以填入 `DD`（天）、`HH`（时）、`mm`（分）和 `ss`（秒）。若你想要转义某个字符，你可以将其以英文单引号`'`包裹。例如若要显示 12h34m03s，变量的格式应当为 `%commandtimer_task_HH'h'mm'm'ss's'%`。有时候你可能需要将 `'` 换成 `"`，取决于你的配置文件。

如果想要变量能检查所有任务，你可以将 `nextExecution`、`nextExecutionFormat` 和 `timeFormat` 变量中 `task` 的值替换为 `ALLTASKS`。

### 回退值

在 `nextExection`、`nextExecutionFormat` 和 `timeFormat` 变量中，可以以一个特殊的回退值结尾，这样在没有下一次执行时间时便可显示回退值。例如 `%commandtimer_task_nextExecutionFormat_No next execution%`，会在没有下次执行时显示 `No next execution`

### PAPI 变量

所有 PlacholderAPI（又称 PAPI）都能在定时命令中解析。（如 `CONSOLE_PER_USER` 等的某些模式）在命令中使用变量也能读取玩家数据。