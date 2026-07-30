# 网页界面登录支持及权限


Dynmap 提供了登录后可见网页界面的选择。在 `configuration.txt` 中启用如下设置即可使用登录功能：

``` YAML
login-enabled: true
```

启用后，即可注册玩家账户。账号注册既可在游戏内进行（通过 `/dynmap webregister` 命令），需要持有 `dynmap.webregister` 权限。另外，管理员也可以通过命令 `/dynmap webregister <玩家名称>` 为玩家注册账号（需要 `dynmap.webregister.other` 权限）。不论哪种注册方式，用户都会持有一段密码，之后可以在网页登录界面新建账号。

设置后，网页用户账户会使用对应游戏内玩家的权限，决定网页界面的显示内容。

若需要，网页界面还可以限制为仅登录后可见。只需打开这个设置：

``` YAML
login-required: true
```

否则，访客也可以浏览服务器地图——但只能浏览无保护的内容。

## 网页界面限制选项

### 世界保护

若管理员需要限制指定世界的所有地图数据，那么可以在 `worlds.txt` 中设置 `protected` 属性（或者通过命令 `/dmap worldset <世界名称> protected:true` 设置）。完成后，只有拥有 `dynmap.world.<世界名称>` 权限且登录的玩家才可以看见当前世界。

### 地图保护

若管理员需要限制指定世界的特定地图数据，那么可以在 `worlds.txt` 对应地图中设置 `protected` 属性（或者通过命令 `/dmap worldset <世界名称>:<地图名称> protected:true` 设置）。完成后，只有拥有 `dynmap.world.<世界名称>.<地图名称>` 权限且登录的玩家才可以看见当前世界的指定地图。

注意：如果地图和世界本身都存在保护状态，玩家需要同时拥有两个权限才可浏览。

### 聊天保护

若管理员需要限制网页界面浏览聊天栏，那么可以在 `ClientUpdateComponent` 的 `webchat-permissions` 处进行设置。打开后，只有拥有 `dynmap.webchat` 权限且登录的玩家才可以从网页界面发送消息。

### 玩家位置及信息

若管理员需要限制玩家位置及状态的显示，那么可以在 `ClientUpdateComponent` 的 `protected-player-info` 处进行设置。打开后，只有拥有 `dynmap.playermarkers.seeall` 权限且登录的玩家才可以看到所有可见玩家的位置和/或生命值信息。无对应权限的已登录玩家只能看到自己，访客则完全无法看见玩家。