# 常见问题

## 1）我输入了命令 `/dynmap fullrender` 但地图还是空白的？

答：Dynmap 只渲染生成区块内的地图，因此它会随着你进一步探索世界而增加渲染数量。如果你需要显示完整地图，你可以徒步或飞行探索整块地图以生成新区块，或者使用预生成区块的插件，如 FastChunkPregenerator 或者 ChunkyBorder。Dynmap 不修改世界数据，因此我们没有计划实现区块预生成功能。

::: warning

部分托管服务器不允许安装区块预生成插件。请阅读相应提供商的服务条款以防止在不知情的情况下违反规则。

:::

## 2）如何删除某些地图，如“cave”？

答：输入命令 `/dmap mapdelete 世界名称:地图名称` 即可。若要找到地图，可输入命令 `/dmap maplist 世界名称`，另外 `/dmap purgemap 世界名称:地图名称` 可完全删除旧地图文件。

## 3）我的 Dynmap 显示的是其他服务器的地图？

答：你使用的托管服务器很可能使用了共享 IP。你的地图端口号可能被其他服务器占用，因此插件扫描的是他们服务器的地图而非你自己的——只需在 Dynmap 配置文件下修改端口号并切换访问的网页即可。

## 4）控制台显示网页服务器正常启动，实际无法通过浏览器访问？

答：这通常是因为 Dynmap 配置中对应端口号未开放。打开 https://www.canyouseeme.org/ 并输入你服务器 IP 和端口号可查询其是否开放。如果它显示开放，则请联系 Dynmap 开发团队，我们会帮助你。如果显示端口为开放，则需要找到路由防火墙或服务器控制面板放行端口。更多信息请查阅安装教程的托管服务[^1]。

## 5）我的 Dynmap 不显示模组方块？

答：模组方块不支持开箱即用，但你可以使用如下两个工具！

* Dynmap-BlockScan：这个插件会扫描大多数“模组”的方块纹理与模型，使得 Dynmap 能够渲染它们。最普通的使用方法即为按操作使用一次，然后将生成在 `dynmap/renderdata/modsupport` 文件夹的文件放入 `dynmap/renderdata` 下，之后再删除该插件。这可以减少服务器启动用时，且在不改动模组的情况下只需运行一次。
* Dynmap-BlockScanData Repo：我们创建了一个 Github 仓库用于存放 Block-Scan 插件生成的数据。仓库内有相关教程，指导你选择下载其中的数据并将其放入对应的文件夹，而无需手动运行扫描程序。这个仓库完全基于社区贡献，不过你还是需要手动生成那些仓库中没有的模组数据。大部分\*数据文件都有一定兼容性（1.12.2 的文件可以用于 1.16，反之亦然），但在没有更新的情况下不会显示更新版本添加的新方块内容。

## 6）如何防止全渲染状态消息刷屏？

答：有两种方法解决这个。

1. 通过命令 `/dynmap quiet` 禁用渲染倒计时消息。

::: warning

执行命令后无法撤销。

:::

2. 在 configuration.txt 编辑如下设置：

``` txt
# 全渲染/范围渲染的进度报告间隔，单位为刻。填入数字不得小于 100。
progressloginterval: 100
```

中型服务器地图可将该值设置为 1000，若规模更大还可考虑设置为 10000。你需要重启服务器才可以应用改动。

## 7）“无效的 plugin.yml”（Invalid plugin.yml）是什么意思？

答：如果一并出现了“无法载入某插件”（Could not load x plugin）与“ZipException”——这通常是因为下载的插件损坏导致的。

请重新下载文件并确保其完好无损。同时你也可以借此更新一下插件版本。

## 8）如何禁用聊天功能？

答：禁用聊天一般是因为用了相同功能的其他插件，或单纯不需要这样的功能。你可以通过编辑 `configuration.txt`，将有关部分全部注释以禁用聊天功能。如下为示例，行号可能有所不同，因此我们只展示有关聊天的部分。

::: detail 原配置（点击展开）

``` txt:line-numbers=43
  - class: org.dynmap.InternalClientUpdateComponent
    allowwebchat: true
```

``` txt:line-numbers=101
  - class: org.dynmap.SimpleWebChatComponent
    allowchat: true
    # If true, web UI users can supply name for chat using 'playername' URL parameter.  'trustclientname' must also be set true.
    allowurlname: false
```

``` txt:line-numbers=135
  - class: org.dynmap.ClientComponent
    type: chat
    allowurlname: false
  - class: org.dynmap.ClientComponent
    type: chatballoon
    focuschatballoons: false
  - class: org.dynmap.ClientComponent
    type: chatbox
    showplayerfaces: true
    messagettl: 5
    # Optional: set number of lines in scrollable message history: if set, messagettl is not used to age out messages
    #scrollback: 100
    # Optional: set maximum number of lines visible for chatbox
    #visiblelines: 10
    # Optional: send push button
    # sendbutton: false 
```

:::

::: detail 禁用后状态（点击展开）

``` txt:line-numbers=43
  - class: org.dynmap.InternalClientUpdateComponent
    # allowwebchat: true
```

``` txt:line-numbers=101
#  - class: org.dynmap.SimpleWebChatComponent
#    allowchat: true
#    # If true, web UI users can supply name for chat using 'playername' URL parameter.  'trustclientname' must also be set true.
#    allowurlname: false
```

``` txt:line-numbers=135
#  - class: org.dynmap.ClientComponent
#    type: chat
#    allowurlname: false
#  - class: org.dynmap.ClientComponent
#    type: chatballoon
#    focuschatballoons: false
#  - class: org.dynmap.ClientComponent
#    type: chatbox
#    showplayerfaces: true
#    messagettl: 5
    # Optional: set number of lines in scrollable message history: if set, messagettl is not used to age out messages
    #scrollback: 100
    # Optional: set maximum number of lines visible for chatbox
    #visiblelines: 10
    # Optional: send push button
    # sendbutton: false 
```

:::

如果控制台出现了一些奇怪的消息，如 `{jndi} / IaM5uchA1337Haxr-Ban Me!`，那么可能是一些蓄意破坏者意识到在线聊天可以向 Minecraft 服务器日志发送消息。这些消息利用了 Log4J 或 Log4Shell 的一个高危漏洞。这允许攻击者可以远程执行任意代码而无需任何权限。如果你尚未了解这些漏洞的危害，你可以在[这里](https://time.com/6128795/log4j-security-flaw/)了解更多。不过最新版本的 Minecraft 早已将其修复。我需要声明的是，Dynmap 不会使得你的服务器受到攻击，同样也不会提供额外保护。**保护服务器的唯一方式就是为其加装补丁。**如果你不需要显示这些消息，你可以通过上文所述将其禁用。

[^1]: 原文超链接为视频，考虑到需要烤肉的问题，暂时不作搬运。