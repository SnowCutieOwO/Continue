# 权限列表

权限会在此以父子关系列出。给予父权限会使得其下的子权限也会生效。

* `excellentcrates.*` - 允许完全控制插件。   
  * `excellentcrates.massopen` - 允许使用连抽功能。
  * `excellentcrates.include.giveall` - 拥有该权限的玩家会获得 `/crate key giveall` 给予的物品。 
  * `excellentcrates.command.*` - 允许使用插件所有的命令。
    * `excellentcrates.command.reload` - 允许使用 `/crates reload` 命令。
    * `excellentcrates.command.editor` - 允许使用 `/crates editor` 命令。
    * `excellentcrates.command.drop` - 允许使用 `/crates drop` 命令。
    * `excellentcrates.command.open` - 允许使用 `/crates open` 命令。
    * `excellentcrates.command.openfor` - 允许使用 `/crates openfor` 命令。
    * `excellentcrates.command.give` - 允许使用 `/crates give` 命令。
    * `excellentcrates.command.key` - 允许使用 `/crates key` 命令。
      * `excellentcrates.command.dropkey` - 允许使用 `/crates key drop` 命令。
      * `excellentcrates.command.key.give` - 允许使用 `/crates key` give 和 /crate key giveall 命令。
      * `excellentcrates.command.key.take` - 允许使用 `/crates key` take 命令。   
      * `excellentcrates.command.key.set` - 允许使用 `/crates key` set 命令。
      * `excellentcrates.command.key.show` - 允许使用 `/crates key inspect` 命令。
      * `excellentcrates.command.key.show.others` - 允许对其他玩家使用 `/crates key inspect` 命令。
    * `excellentcrates.command.menu` - 允许使用 `/crates menu` 命令。
    * `excellentcrates.command.menu.others` - 允许对其他玩家使用 `/crates menu` 命令。
    * `excellentcrates.command.preview` - 允许使用 `/crates preview` 命令。
    * `excellentcrates.command.preview.others` - 允许对其他玩家使用 `/crates preview` 命令。
    * `excellentcrates.command.resetcooldown` - 允许使用 `/crates resetcooldown` 命令。
  * `excellentcrates.bypass.*` - 绕过插件所有的限制。
  * `excellentcrates.bypass.crate.open.cost.*` - 绕过所有开箱限制。
  * `excellentcrates.bypass.crate.opencost.*` - 无视支付指定货币开箱的要求。
  * `excellentcrates.bypass.crate.opencooldown` - 无视开箱冷却。
  * `excellentcrates.bypass.reward.limit` - 无视奖励获取次数冷却。