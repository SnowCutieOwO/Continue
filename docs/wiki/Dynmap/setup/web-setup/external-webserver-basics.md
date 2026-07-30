# 外置网页服务器基础

本章节假设：

* 你对你使用的独立网页服务器了如指掌。
* 你在同一台实体机上运行网页服务器与游戏服务器。
* 你的网页服务器支持 PHP（只在网页客户端向服务器发送聊天时需要启用）。
* 若你正在运行的是 Linux，你也应该熟悉终端以及 `chmod`。

## 第一步：在 `plugins/dynmap/configuration.txt` 处禁用内部更新机制

禁用后还需启用 JSON 文件更新机制，这将会向你的网页路径间隔一定时间写入 `standalone/dynmap_world.json` 文件，间隔通过 `writeinterval` 指定。修改如下设置：

``` YAML
  - class: org.dynmap.InternalClientUpdateComponent
    sendhealth: true
    sendposition: true
    allowwebchat: true
    webchat-interval: 5
    hidewebchatip: false
    trustclientname: false
    includehiddenplayers: false
    # (optional) if true, color codes in player display names are used
    use-name-colors: false
    # (optional) if true, player login IDs will be used for web chat when their IPs match
    use-player-login-ip: true
    # (optional) if use-player-login-ip is true, setting this to true will cause chat messages not matching a known player IP to be ignored
    require-player-login-ip: false
    # (optional) block player login IDs that are banned from chatting
    block-banned-player-chat: true
    # Require login for web-to-server chat (requires login-enabled: true)
    webchat-requires-login: false
    # If set to true, users must have dynmap.webchat permission in order to chat
    webchat-permissions: false
    # Limit length of single chat messages
    chatlengthlimit: 256
  #  # Optional - make players hidden when they are inside/underground/in shadows (#=light level: 0=full shadow,15=sky)
  #  hideifshadow: 4
  #  # Optional - make player hidden when they are under cover (#=sky light level,0=underground,15=open to sky)
  #  hideifundercover: 14
  #  # (Optional) if true, players that are crouching/sneaking will be hidden 
    hideifsneaking: false
    # If true, player positions/status is protected (login with ID with dynmap.playermarkers.seeall permission required for info other than self)
    protected-player-info: false
    # If true, hide players with invisibility potion effects active
    hide-if-invisiblity-potion: true
    # If true, player names are not shown on map, chat, list
    hidenames: false
  #- class: org.dynmap.JsonFileClientUpdateComponent
  #  writeinterval: 1
  #  sendhealth: true
  #  sendposition: true
  #  allowwebchat: true
  #  webchat-interval: 5
  #  hidewebchatip: false
  #  includehiddenplayers: false
  #  use-name-colors: false
  #  use-player-login-ip: false
  #  require-player-login-ip: false
  #  block-banned-player-chat: true
  #  hideifshadow: 0
  #  hideifundercover: 0
  #  hideifsneaking: false
  #  # Require login for web-to-server chat (requires login-enabled: true)
  #  webchat-requires-login: false
  #  # If set to true, users must have dynmap.webchat permission in order to chat
  #  webchat-permissions: false
  #  # Limit length of single chat messages
  #  chatlengthlimit: 256
  #  hide-if-invisiblity-potion: true
  #  hidenames: false
```

将其改为：

``` YAML
  #- class: org.dynmap.InternalClientUpdateComponent
   # sendhealth: true
   # sendposition: true
   # allowwebchat: true
   # webchat-interval: 5
   # hidewebchatip: false
   # trustclientname: false
   # includehiddenplayers: false
   # # (optional) if true, color codes in player display names are used
   # use-name-colors: false
   # # (optional) if true, player login IDs will be used for web chat when their IPs match
   # use-player-login-ip: true
   # # (optional) if use-player-login-ip is true, setting this to true will cause chat messages not matching a known player IP to be ignored
   # require-player-login-ip: false
   # # (optional) block player login IDs that are banned from chatting
   # block-banned-player-chat: true
   # # Require login for web-to-server chat (requires login-enabled: true)
   # webchat-requires-login: false
   # # If set to true, users must have dynmap.webchat permission in order to chat
   # webchat-permissions: false
   # # Limit length of single chat messages
   # chatlengthlimit: 256
   # # Optional - make players hidden when they are inside/underground/in shadows (#=light level: 0=full shadow,15=sky)
   # hideifshadow: 4
   # # Optional - make player hidden when they are under cover (#=sky light level,0=underground,15=open to sky)
   # hideifundercover: 14
   # # (Optional) if true, players that are crouching/sneaking will be hidden 
   # hideifsneaking: false
   # # If true, player positions/status is protected (login with ID with dynmap.playermarkers.seeall permission required for info other than self)
   # protected-player-info: false
   # # If true, hide players with invisibility potion effects active
   # hide-if-invisiblity-potion: true
   # # If true, player names are not shown on map, chat, list
   # hidenames: false
  - class: org.dynmap.JsonFileClientUpdateComponent
    writeinterval: 1
    sendhealth: true
    sendposition: true
    allowwebchat: true
    webchat-interval: 5
    hidewebchatip: false
    includehiddenplayers: false
    use-name-colors: false
    use-player-login-ip: false
    require-player-login-ip: false
    block-banned-player-chat: true
    hideifshadow: 0
    hideifundercover: 0
    hideifsneaking: false
  #  # Require login for web-to-server chat (requires login-enabled: true)
    webchat-requires-login: false
  #  # If set to true, users must have dynmap.webchat permission in order to chat
    webchat-permissions: false
  #  # Limit length of single chat messages
    chatlengthlimit: 256
    hide-if-invisiblity-potion: true
    hidenames: false
```

请勿取消两个 `#` 的注释部分配置，它们仅用于介绍设置，如果取消注释则会导致配置文件出错。

## 第二步：禁用内置网页服务器

只需在如下部分（340 行）禁用内置网页服务器即可。

``` YAML
# Disables Webserver portion of Dynmap (Advanced users only)
disable-webserver: false
```

将其改为：

``` YAML
# Disables Webserver portion of Dynmap (Advanced users only)
disable-webserver: true
```

## 第三步：将文件复制到网页服务器，修改路径

将你的 `plugins/dynmap/web` 文件夹复制到网页服务器的文件夹。修改 `configuration.txt`，使 `tilespath` 与 `webpath` 都指向复制后文件夹的位置。*nix 系的系统：

``` YAML
# The path where the tile-files are placed.
tilespath: /path/to/web/server/dynmap/web/tiles

# The path where the web-files are located.
webpath: /path/to/web/server/dynmap/web
```

Windows 系统：

``` YAML
# The path where the tile-files are placed.
tilespath: c:\\path\\to\\web\\server\\dynmap\\web\\tiles

# The path where the web-files are located.
webpath: c:\\path\\to\\web\\server\\dynmap\\web
```

## 第四步：应用配置更改

重启游戏服务器，进入后（随意）放置方块，使得 Dynmap 开始生成地图图块。你也可以通过 `/dynmap fullrender 世界名称` 命令开始渲染整个世界。

刷新浏览器，<http://mywebserver/dynmap/> 下的网页地图应该就能正常显示了，记得保持更新。

## 问题排除

如果地图上没有显示图块，检查 `tiles` 文件夹下是否生成了文件。如果没有，有可能是 Minecraft 缺少写入 `web-path` 路径的对应权限。除此之外也有可能是你没有正确填写 `tilespath` 设置。

如果地图上没有出现玩家，请打开 <http://mywebserver/standalone/dynmap_世界名称.json>。你应该能看到一些每秒更新的代码（服务器时间也会一并更新）。如果文件不存在于此，或者文件没有更新，你可能没有正确设置配置中的 `webpath` 项。

在 Linux 中，若网页向服务器传递聊天消息的功能不正常，你也需要通过 `chmod` 将 `standalone` 文件夹改为 77x，根据下方表格选择你需要的值，如果一个不行，就接着换下一个。

``` bash
$ chmod -R 770 standalone
```

|值|参数|组权限|用户权限|所需权限|
|---|---|---|---|---|
| 770 symbolic | `rwxrwx--- user` | 读写及组执行 | 读写及其他执行 | 无 |
| 774 symbolic | `rwxrwxr-- user` | 读写及组执行 | 读写及其他执行 | 读 |
| 775 symbolic | `rwxrwxr-- user` | 读写及组执行 | 读写及其他执行 | 读写 |
| 777 symbolic | `rwxrwxr-- user` | 读写及组执行 | 读写及其他执行 | 读写、执行 |

一般来讲，`$ chmod -R 770 standalone` 就可以解决问题，使用其他数字需要你自行承担责任。若命令不生效，试着换成 `$ chmod 770 -R standalone` 执行。

这可以让 `sendmessage.php` 创建 JSON 文件。这是由网页服务器而非游戏服务器创建，因此需要这样分配权限。

若 IIS 上这个功能无法生效，你可能需要安装 PHP。