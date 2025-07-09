# 返回命令

`/back` [命令](features.commands.md) 允许玩家返回之前的位置，包括：

* 通过 HuskHomes 其他命令传送的位置（默认开启）
* 上一次死亡位置（默认关闭，需要权限）
* 其他插件的传送行为的位置（默认关闭）

## 配置

通过配置文件与权限，你可以决定玩家返回的上一个位置：

::: details 返回命令 - config.yml

``` YAML
# Settings for the /back command
back_command:
  # Whether /back should work to teleport the user to where they died
  return_by_death: true
  # Whether /back should work with other plugins that use the PlayerTeleportEvent (can conflict)
  save_on_teleport_event: false
  # List of world names where the /back command cannot RETURN the player to.
  # A user's last position won't be updated if they die or teleport from these worlds, but they still will be able to use the command while IN the world
  restricted_worlds: []
```

:::

## 限制 /back

限制 `/back` 有如下几种方法。

### 允许玩家返回上一个位置

`/back` 的默认功能即为使玩家返回上一个由 HuskHomes 处理传送请求的位置。

若要禁用该设置，只需给予玩家状态为 `false` 的 `huskhomes.command.back.previous` 权限（即负权限）即可。

### 允许玩家“返回死亡地点”

若要启用“返回死亡地点”功能，只需在 `config.yml` 中启用 `return_by_death` 设置：

::: details 返回死亡地点 - config.yml


``` YAML
back_command:
  # Whether /back should work to teleport the user to where they died
  return_by_death: true
```

:::

之后，给予玩家权限 `huskhomes.command.back.death` 即可。

### 禁止 /back 返回特定世界

在配置文件 `back_command` 的 `restricted_worlds` 设置下添加对应世界名称，之后插件便不再会保存这些世界内的传送位置。

这会使得玩家无法*返回*这些世界。但*不会*阻止玩家*在*这些世界*内*使用 `/back` 命令。如果需要阻止，请使用 [LuckPerms 的情境权限](/LuckPerms/features.context.md)。

::: details 限制世界 - config.yml

``` YAML
back_command:
  # List of world names where the /back command cannot RETURN the player to.
  # A user's last position won't be updated if they die or teleport from these worlds, but they still will be able to use the command while IN the world
  restricted_worlds: []
```

:::

### 从其他插件的传送位置返回

这可能会导致冲突，若你安装了较多插件，请慎重开启！

若要使用 `/back` 返回其他插件的位置，请在配置文本中启用 `save_on_teleport_event` 设置。

::: details 传送事件 - config.yml

``` YAML
back_command:
  # Whether /back should work with other plugins that use the PlayerTeleportEvent (can conflict)
  save_on_teleport_event: false

```

:::