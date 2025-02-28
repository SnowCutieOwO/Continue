# LuckPerms 上下文

在 ajLeaderboards 2.5.2 之后，你可以通过 [LuckPerms](https://luckperms.net/) 的上下文（Contexts）来给予指定排行榜指定排名的玩家权限/前后缀。

确保你在配置文件中启用了 `register-lp-contexts`。我强烈推荐一并启用 `only-register-lpc-for` 来只注册你实际使用的上下文。

## 释义

如果你不知道什么是 LuckPerms 的上下文，你可以在[这里](https://luckperms.net/wiki/Context)（本维基可跳转[至此](https://snowcutieowo.github.io/LuckPerms/#/features.context)）详细了解。

ajLeaderboards 添加了自定义（动态）上下文，允许你检查玩家所在的名次。

上下文格式为 `ajlb_pos_<排行榜>_<类型>`。其中 `<排行榜>` 为排行榜的名称，`<type>` 则为刷新间隔类型。

## 示例

例如，我想要给 `statistic_time_played` 在 `alltime`（全时）的值排行第一的玩家 Essentials 的 /back 命令权限，则你可以输入这个命令：

```
/luckperms group default permission set essentials.back true ajlb_pos_statistic_time_played_alltime=1
```

这个权限将会在他们的这个变量值排名第一时生效（如果不再是第一，则会失去该权限）。