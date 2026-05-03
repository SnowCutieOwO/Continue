# 命令列表

[[toc]]

> 这个列表会详细讲述每个命令的参数。如：/resident set perm {on/off}。

> 对于 resident 命令，add 命令会自动在其后匹配在线玩家，而 add+ 则可以选择特定的离线玩家。

> 每个子命令都有其帮助菜单。输入命令 `/resident set` 或者其别称命令，可以在游戏内显示命令的所有选项。你也可以输入命令 `/resident set ?`，这样就可以在命令本身有功能时查看其帮助内容。例如：`/town claim` 和 `/town claim ?` 都能显示其下的子命令。

> 花括号 `{}` 用于表示变量或者你需要填入的内容。省略号 `...` 则表示你可以列举多个同类型参数（比如同时邀请 10 个居民）。

> `{甲/乙/丙}` 样式的参数表示输入内容可以是多个不同的词。

> 空心黑圆点则表示子命令本身可以触发功能，不会显示帮助菜单。

## /towny

* /towny
  * 显示基本的插件命令。
  * ? - 显示更多插件命令。
  * allowedblocks - 浏览区域内可放置/破坏的方块
  * itemuse - 浏览 item_use_ids 中的物品列表。
  * map - 显示插件地图
    * hud - 在玩家计分板中显示本插件的地图。
  * plotclearblocks - 浏览 `/plot clear` 清除的方块列表。
  * prices - 显示城镇运营相关的税收/费用。
  * switches - 显示 switch_ids 列表中的方块。
  * time - 显示距下一天（收税日/维护费用收取日）到来的剩余时间。
  * top
    * residents {all/town/nation} - 显示居民排行榜。
    * land {all/resident/town} - 显示土地面积排行榜。
  * spy - 监听所有聊天频道
  * tree - 显示更多详细信息。
  * universe - 显示插件完整属性，包括居民/城镇/国家/世界数量，以及占领的城镇地块数量。
  * v - 显示插件版本。
  * wildsblocks - 显示可以在郊区中使用的方块，以及能够种植在郊区中的作物。

## /plot

* /plot
  * 显示 /plot 命令。
  * claim - 居民命令，用于购买一块可购买的地皮。
    * auto - 居民命令，购买一块玩家附近可购买的地皮。
  * unclaim - 居民命令，解除占领当前地皮。
    * circle/rect - 居民命令，解除占领圆形或矩形区域内的地皮。
      * \{# \{以当前位置为中心的半径\}\} - 解除占领的范围大小。
  * \{forsale/fs\} - 挂售地皮。
    * circle/rect - 设置形状。
      * \{# \{以当前位置为中心的半径\}\} - 解除占领的范围大小。
    * $$ - 地皮价格。
      * circle/rect - 设置形状。
  * * \{# \{以当前位置为中心的半径\}\} - 解除占领的范围大小。
  * \{notforsale/nfs\} - 设置地皮禁止出售。
    * circle/rect - 设置形状。
      * \{# \{以当前位置为中心的半径\}\} - 解除占领的范围大小。
  * district
    * create|new \[名称\] - 创建指定名称的新商业区。
    * add \{名称\} - 向指定商业区添加新的城镇地皮。连续为同一商业区分配地皮时无需重复指定名称。
    * rename \[名称\] - 修改商业区名称。
    * remove - 从商业区中移出地皮。
    * delete - 删除商业区。
  * evict - 以城市拥有者或其助理身份从地皮拥有者手中移除地皮。
    * forsale - 驱逐地皮拥有者并立即挂售地皮。
  * trust
    * add \{名称\} - 将玩家添加至地皮的信任列表。
    * remove \{名称\} - 将玩家移出地皮信任列表。
  * perm - 显示玩家所处地皮内的权限设置状态。
    * gui - 打开地皮权限覆盖配置界面。
    * add {名称} - 将玩家添加至覆盖配置列表。
    * remove {名称} - 将玩家移出覆盖配置列表。
  * perm hud - 开关地皮权限界面侧边栏显示。以计分板形式展示玩家所处的地皮相关权限设置，提供更多有用信息。
  * set
    * reset - 将地皮重置为普通类型。
    * shop - 设置为商店地皮。
    * embassy - 设置为外交地皮。
    * arena - 设置为竞技场地皮。
    * wilds - 设置为郊区地皮。
    * inn - 设置为旅居地皮。
    * jail - 设置为监狱地皮。
    * farm - 设置为农场地皮。
    * bank - 设置为银行地皮。
    * outpost - 设置为前哨站地皮，所需价格与 `/t claim outpost` 等同。
      * spawn - 设置前哨站地皮内出生点至玩家所在位置。
    * name - 允许城镇或地皮拥有者重命名，覆盖 `~未拥有` 消息。个人拥有的地皮会同时显示地皮名称与其拥有者名称。
    * perm
      * {on/off} - 编辑玩家所处地皮的权限显示。点此了解详情。
      * {resident/ally/outsider} {on/off}
      * {build/destroy/switch/itemuse} {on/off}
      * {resident/ally/outsider} {build/destroy/switch/itemuse} {on/off}
      * reset - 将所在地皮的权限设置重置为 `/town` 或 `/resident` 界面中展示的默认值（取决于地皮属于居民还是城镇）。
    * minjoindays
      * {#} - 设置最小天数，填入 clear 时表示清除设置。
      * clear - 重置最小加入天数条件。
    * maxjoindays
      * {#} - 设置最大天数，填入 clear 时表示清除设置。
      * clear - 重置最小加入天数条件。
  * toggle
    * fire - 启用或禁用所处地皮内的火焰蔓延。
    * pvp - 启用或禁用所处地皮内的玩家 PVP。
    * explosion - 启用或禁用所处地皮内的爆炸破坏。
    * mob - 启用或禁用所处地皮内的敌怪生成。
    * taxed - 启用或禁用对地皮拥有者的税费收取。
  * clear - 从地皮中移除的方块列表，可由城镇拥有者对其土地使用，或地皮拥有者对自己的地皮使用。
  * group
    * add|new|create \{组名称\} - 在玩家所处地皮中新建一个地皮组，同时也可以将地皮加入已有的地皮组。
    * remove - 将地皮从地皮组中移出。
    * delete - 完全能删除地皮组。
    * rename {新名称} - 重命名地皮组。
    * set {地皮类型} - 将地皮设置为指定类型。不适用于监狱地皮。
    * set perm ... - 用于设置所处地皮内的权限。见上文 `/plot set perm` 部分。
    * toggle ... - 用于切换地皮内的设置。见上文 `/plot set` 部分。
    * forsale|fs {价格} - 挂售地皮组。
    * notforsale|nfs - 取消地皮出售。
    * trust
      * add {名称} - 将玩家添加至地皮组的受信任名单。
      * remove {名称} - 将玩家移出地皮组的受信任名单。
    * perm
      * gui - 打开地皮权限覆盖菜单。
      * add {名称} - 将指定玩家添加至地皮权限覆盖名单。
      * remove {名称} - 将指定玩家移出地皮权限覆盖名单。
  * jailcell
    * add - 将玩家脚下的地皮纳入监狱地皮。
    * remove - 将玩家脚下的地皮从监狱地皮范围中移出。
  
## /resident

* /resident
  * 显示玩家自己的居民界面。
  * ? - 显示可用的 `/res` 子命令。
  * {居民名称} - 向玩家显示其他玩家的居民界面。
  * friend
    * add {居民名称} ... {居民名称} - 将一或多个在线玩家添加为好友。
    * add+ {居民名称} ... {居民名称} - 将一或多个离线玩家添加为好友。
    * remove {居民名称} ... {居民名称} - 删除一或多个在线玩家的好友关系。
    * remove+ {居民名称} ... {居民名称} - 删除一或多个离线玩家的好友关系。
    * clearlist - 清空好友列表。
    * list - 浏览好友列表。
    * list online - 浏览在线好友列表。
  * list - 列出在线的居民列表。
  * jail paybill - 允许玩家保释出狱。支付的赎金会流入监狱所属的城镇。
  * outlawlist {玩家名称} - 显示指定玩家在哪些城镇被列为游民。不填则表示查询自己被哪些城镇列为游民。
  * plotlist
    * {#} - 显示玩家自己拥有的地皮。输入数字表示翻到指定页。
    * \[名称\] {#} - 显示指定玩家拥有的地皮。输入数字表示翻到指定页。
  * spawn - 若 `deny_bed_use` 为 `true` 且玩家当前设置了用作出生点的床，则将其传送至床附近。
  * toggle
    * pvp - 启用或禁用所处地皮内的玩家 PVP。
    * fire - 启用或禁用所处地皮内的火焰蔓延。
    * explosion - 启用或禁用所处地皮内的爆炸破坏。
    * mobs - 启用或禁用所处地皮内的实体生成。
    * map - 展开会在穿越地皮边界时刷新的地图。
    * townclaim - 打开跨越边界时自动执行 /town claim 的功能。
    * townunclaim - 打开跨越边界时自动执行 /town unclaim 的功能。
    * bedspawn - 打开床重生点覆盖城镇重生点的功能。
    * plotborder - 打开地图边界浏览。在不同城镇地块间穿越时显示。
    * constantplotborder - 打开地图边界浏览。保持边界显示。
    * townborder - 打开所处城镇内的地图边界浏览。保持边界显示。
    * bordertitles - 当配置中 using_title 启用时，决定启用或禁用所在城镇的进入/离开标题提醒。
    * plotgroup - 启用后将自动添加地皮至你正在编辑的地皮组。
    * district - 启用后将自动添加地皮至你正在编辑的区划。
    * spy - 启用或禁用管理员聊天频道窃听。
    * ignoreinvites - 启用或禁用城镇邀请。
    * ignoreplots - 启用或禁用地皮提醒。
    * reset - 禁用所有已经启用的设置。
    * infotool - 允许管理员使用红砖查询方块或实体的 Bukkit 名称或其所属类。
    * adminbypass - 允许管理员以普通玩家身份调试。

  * set
    * perm
      * {on/off} - 在居民界面中编辑权限内容，[见此](../towny-advanced/how-towny-works.md#towny-地皮权限)了解更多。
      * {friend/ally/outsider} {on/off}
      * {build/destroy/switch/itemuse} {on/off}
      * {friend/ally/outsider} {build/destroy/switch/itemuse} {on/off}
      * reset - 获取 /resident 中所有设置并覆盖所有玩家的地皮设置。
    * about
      * {消息} - 在 /res status 界面中设置自述/介绍信息。
      * {clear} - 清除所有开启的模式。
      * {reset} - 清除所有开启的模式，并重新分配回默认模式。
   * tax {领地名称} - 显示玩家需要支付的税。

## /town

* /town
  * 在玩家所处的城镇界面上显示个人信息。
  * ? - 显示可用的 /town 子命令。
  * {城镇名称} - 显示玩家在其他城镇中的个人信息。
  * here - 显示所处城镇的信息。
  * leave - 离开城镇。
  * list
    * by name {页码} - 按名称中的英文字母排列。
    * by resident {页码} - 按居民数量从多到少排列。
    * by balance {页码} - 按银行存款从多到少排列
    * by townblocks {页码} - 按城镇地块占领数量从多到少排列。
    * by forsale {页码} - 按城镇是否存在挂售排列。
    * by online {页码} - 按城镇当前在线玩家数量从多到少排列。
    * by open {页码} - 优先列出对外开放城镇，再按玩家数量从多到少排列。
    * by public {页码} - 优先列出公开城镇，再按玩家数量从多到少排列。
    * by ruined {页码} - 优先列出被毁城镇，再按玩家数量从多到少排列。
    * by bankrupt {页码} - 优先列出破产城镇，再按玩家数量从多到少排列。
    * by founded {页码} - 按创建时间从早到晚排列。
  * online - 显示城镇中的在线玩家。
  * plots {城镇名称} - 显示地皮帮助列表，可浏览城镇现有的地皮类型及其详细信息。
  * new {城镇名称} - 建立新城镇。
  * add {居民名称} .. {居民名称} - 城镇拥有者命令，用于将一或多个玩家加入城镇。
  * kick {居民名称} .. {居民名称} - 城镇拥有者命令，用于将一或多个玩家踢出城镇。
  * invite - 显示由你邀请至城镇的玩家列表。
    * sent - 显示被发送邀请的玩家列表。
      * removeall - 清空被发送邀请的玩家列表。
    * received - 显示城镇从国家处接收的邀请玩家列表。
    * accept {国家名称} - 同意加入国家的请求。
    * deny {国家名称} - 拒绝加入国家的请求。
    * {玩家名称} - 向玩家发出加入城镇的邀请。
  * spawn - 传送至城镇出生点。
  * spawn {城镇名称} - 传送至其他城镇的出生点。
  * claim - 城镇拥有者命令，为你的城镇占领脚下对应的地块。
    * outpost <#|{名称}|{名称:#} - 为城镇建立一个前哨站。{名称} 表示地皮名称。{名称:#} 表示当地皮以数字开头时使用。
    * {#（以当前位置为中心）} - 为城镇占领一片圆形区域的地块。
    * auto - 花费所有的钱及地块占领上限，尽可能地占领附近地块。
    * fill - 填充占领地皮之间的空缺。使用这个命令之前必须先设置边界。

  * unclaim - 城镇拥有者命令，解除占领脚下的城镇地块。
    * all - 城镇拥有者命令，解除占领所有城镇地块。
    * {#（以当前位置为中心）} - 解除占领一片圆形区域内的地块。
    * outpost - 用于解除占领使用了 MySQL 存储方式的 Towny 0.92.0.0 版本前的损坏前哨站。
  * /town cede plot {城镇名称}
    * 将玩家所处地块归还城镇。
  * withdraw
    * {$} - 取出银行存款。
    * all - 取出银行中的所有存款。
  * deposit
    * {$} - 从玩家账户向银行存款。
    * all - 将所有钱存入银行。
    * {$} {城镇名称} - 从玩家账户向指定城镇的银行存款。
  * baltop {城镇名称} - 显示城镇中的玩家财富排行榜。
  * bankhistory {#} - 打开书本菜单，显示 # 条城镇银行的交易记录。
  * buy
    * bonus {数量} - 在上限范围内购置额外的城镇地块。
  * allylist {城镇名称} - 显示城镇盟友列表。
  * enemylist {城镇名称} - 显示城镇敌人列表。
  * delete {城镇名称} - 管理员/城镇拥有者命令，将城镇从数据文件夹中删除。
  * forsale|fs [$] - 将指定城镇挂售。
  * notforsale|nfs - 取消指定城镇的挂售。
  * buytown {城镇名称} - 购买某个挂售状态的城镇。
  * merge {城镇名称} - 将 {城镇名称} 与输入命令者的城镇合并。
  * outlawlist {城镇名称} - 显示城镇罪犯列表。
  * outlaw {add/remove} {名称} - 将玩家加入或移出城镇罪犯列表。
  * outpost
    * {#（对应前哨站编号）} - 传送至指定前哨站。
    * {list} - 列出城镇设立的前哨站。
  * plotgrouplist {城镇名称} {页码} - 列出城镇挂售的地皮组及其价格。
  * purge {天数} - 踢出指定天数不活跃的玩家，不包括 NPC 与城镇拥有者。
  * ranklist {城镇名称} - 显示居民及其等级，可填入城镇名称浏览其他城镇的玩家等级列表。
  * rank {add|remove} {玩家名称} {等级} - 提升或降低城镇居民的等级。
  * reclaim - 允许城镇居民重新占领城镇废墟。
  * reslist {城镇名称} - 浏览城镇居民的完整列表。
  * say {msg} - 向在线城镇居民发送公告消息。
  * set
    * board
      * {message} - 设置居民上线时收到的消息。
      * none - 设置为 none 后，玩家不会在登录或输入 /town status 命令时收到消息。
    * mayor {居民名称} - 城镇拥有者命令，将自己的职位转让给其他玩家。
    * homeblock - 设置城镇的核心地块及出生点。
    * spawn - 设置城镇出生点，必须位于核心地块中。
    * spawncost - 设置重生至公开城镇的价格。不影响城镇居民、国家成员及盟友。
    * mapcolor {颜色} - 设置 Dynmap 中显示的城镇颜色。
    * name {新名称} - 改变城镇的名称。
    * outpost - 将前哨站的重生点重置到玩家脚下。必须在现存的前哨站地皮中使用。
    * perm
      * {on/off} - 编辑城镇界面的权限内容。[见此](../towny-advanced/how-towny-works.md#towny-地皮权限)了解更多。
      * {resident/ally/outsider} {on/off}
      * {build/destroy/switch/itemuse} {on/off}
      * {resident/ally/outsider} {build/destroy/switch/itemuse} {on/off}
      * reset - 复制 /town screen 中的设置，将其应用至城镇的所有地皮。
    * tag {最长四个字符} - 设置城镇标签，有时会用于聊天栏显示。
      * clear - 清除城镇设置的标签。
    * taxes {$} - 设置每日从居民处收取的税费。若启用百分比税收，还可输入百分比。
    * taxpercentcap {$} - 启用百分比税收时，决定允许收取的税费最大百分比。
    * plottax {$} - 根据城镇居民拥有的地皮数量，设置每日收取的税费。
    * plotprice {$} - 设置城镇地皮的默认价格。
    * shopprice {$} - 设置城镇商店地皮的默认价格。
    * shoptax {$} - 根据城镇居民拥有的商店地皮数量，设置每日收取的税费。
    * embassyprice {$} - 设置城镇对外地皮的默认价格。
    * embassytax {$} - 根据城镇居民拥有的对外地皮数量，设置每日收取的税费。
    * title {玩家名称} {标前缀内容} - 城镇拥有者命令，为城镇居民添加前缀。
    * title {玩家名称} - 城镇拥有者命令，为城镇居民除去前缀。
    * surname {玩家名称} {后缀内容} - 城镇拥有者命令，为城镇居民添加后缀。
    * surname {玩家名称} - 城镇拥有者命令，为城镇居民除去后缀。
    * primaryjail - 设置城镇的主监狱。

  * toggle
    * explosion - 启用或禁用城镇内的爆炸保护。
    * fire - 启用或禁用城镇内的火焰蔓延。
    * mobs - 启用或禁用城镇内的敌对实体生成。
    * public - 启用或禁用城镇内的 /town 出生点及 /town 界面中的城镇核心地块坐标显示。
    * pvp - 启用或禁用城镇内的玩家 PVP。
    * taxpercent - 启用或禁用城镇内按通胀率/百分比收税的设置。
    * nationzone - 启用或禁用城镇内的国家区域。
    * open - 启用或禁用公开玩家申请加入城镇。

  * takeoverclaim - 城镇拥有者命令，从过度扩张城镇中夺取溢出地块。需要配置文件中启用过度扩张功能。

  * join {城镇名称} - 加入无需邀请即可进入的城镇。

  * jail
    * list - 显示监狱编号、名称、坐标、容量及主监狱信息。
    * 保释功能未启用时：
    * {名称} - 将指定的城镇居民关入监狱一小时。
    * {名称} {小时长度} - 将指定的城镇居民关入监狱一段时间。
    * {名称} {小时长度} {监狱编号} - 将指定的城镇居民关入指定监狱（数字编号）一段时间。
    * {名称} {小时长度} {监狱编号} {牢房编号} - 将指定的城镇居民关入指定监狱的指定牢房（均为数字编号）一段时间。
    * 保释功能启用时：
    * {名称} - 将指定的城镇居民关入监狱一小时，保释金为默认值。
    * {名称} {小时长度} - 将指定的城镇居民关入监狱一段时间，保释金为默认值。
    * {名称} {小时长度} {保释金额} - 将指定的城镇居民关入监狱（数字编号）一段时间，同时自定义保释金额。
    * {名称} {小时长度} {保释金额} {监狱编号} - 将指定的城镇居民关入指定监狱（数字编号）一段时间，同时自定义保释金额。
    * {名称} {小时长度} {保释金额} {监狱编号} {牢房编号} - 将指定的城镇居民关入指定监狱的指定牢房（均为数字编号）一段时间，同时自定义保释金额。
  * unjail {名称} - 将某人释放出狱。

  * trust
    * add {名称} - 将玩家添加至整个城镇的受信任列表中。
    * remove {名称} - 将玩家从整个城镇的受信任列表中移出。
    * list - 列出城镇中的受信任玩家。

  * trusttown
    * add \[城镇名称\] - 将指定城镇添加至整个城镇的受信任列表中。
    * remove \[城镇名称\] - 将制定城镇从整个城镇的受信任列表中移出。
    * list - 列出城镇中的受信任城镇。

## /nation

* /nation
  * 显示玩家所属国家相关信息。
  * ? - 显示 /nation 下的子命令。
  * list
    * by name {页码} - 按名称中的英文字母排列。
    * by resident {页码} - 按居民总数从多到少排列。
    * by balance {页码} - 按银行存款从多到少排列。
    * by towns {页码} - 按拥有城镇数量从多到少排列。
    * by townblocks {页码} - 按城镇地块占领总数从多到少排列。
    * by online {页码} - 按城镇当前在线玩家总数从多到少排列。
    * by open {页码} - 优先列出对外开放城镇，再按玩家数量从多到少排列。
    * by public {页码} - 优先列出公开城镇，再按玩家数量从多到少排列。
    * by founded {页码} - 按创建时间从早到晚排列。
  * online - 显示国家内在线玩家。
  * {国家名称} - 浏览其他国家的 /nation 界面信息。
  * leave - 城镇拥有者命令，离开当前所属国家。
  * withdraw
    * {$} - 国家领袖命令，取出银行存款。
    * all - 取出银行中的所有存款。
  * deposit
    * {$} - 从玩家账户向银行存款。
    * all - 将所有钱存入银行。
  * baltop {国家名称} - 浏览国家中玩家财富排行榜。
  * bankhistory {#} - 打开书本菜单，显示 # 条国家银行的交易记录。
  * deposit {$} {城镇名称} - 国家领袖命令，向国内指定城镇的银行存款。
  * new
    * {国家名称} - 城镇拥有者命令，建立新国家。
  * rank - 设置国家内的辅助/自定义等级。
  * add {城镇名称} .. {城镇名称} - 邀请/添加城镇至国家。
  * kick {城镇名称} .. {城镇名称} - 将城镇移出国家。
  * delete {国家名称} - 解散国家。
  * invite - 浏览发出的邀请。
    * help - 浏览发出的邀请。
    * sent - 浏览发出的邀请。
    * {城镇名称} - 邀请城镇加入国家。
  * ally - 浏览国家发出的结盟邀请。
    * add {国家名称} .. {国家名称} - 将指定国家列为盟友。
    * remove {国家名称} .. {国家名称} - 将指定国家从盟友列表中移出。
    * accept {国家名称} - 接受其他国家的结盟邀请。
    * deny {国家名称} - 拒绝其他国家的结盟邀请。
    * sent - 浏览国家发出的结盟邀请。
    * received - 浏览国家收到的结盟邀请。
  * enemy
    * add {国家名称} .. {国家名称} - 将指定国家列为敌人。
    * remove {国家名称} .. {国家名称} - 将指定国家从敌人列表中移出。
  * rank {add|remove} {玩家名称} {等级名称} - 为国家居民授予或收回等级。
  * sanctiontown
    * add \[城镇名称\] - 将城镇加入制裁名单。
    * remove \[城镇名称\] - 将城镇移出制裁名单。
    * list - 列出国家的制裁城镇名单。
    * list \[国家名称\] - 列出其他国家的制裁城镇名单。
  * say {消息文本} - 向国内在线的玩家喊话。
  * set
    * king {居民名称} - 国家领袖命令，转让王位。
    * capital {城镇名称} - 设置国家首都。
    * board
      * {消息文本} - 设置玩家登录时看见的消息。
      * none - 设置为 none 表示不在登录或 /nation status 命令界面中显示内容。
    * taxes {$} - 对城镇设置税收。
    * conqueredtax {$} - 设置国家的征服税收，由被征服城镇上供。
    * taxpercentcap - 若国家使用百分比税收，该命令用于决定城镇的国家税上限。
    * name {名称} - 设置国家的名称。
    * spawn - 设置国家的出生点。
    * spawncost - 设置其他玩家复活在国家出生点时收取的费用。对成员及盟友无效。
    * title {名称} {前缀内容} - 国家领袖命令，为国家居民设置前缀。
    * title {名称} - 国家领袖命令，清除指定居民的前缀。
    * surname {名称} {后缀内容} - 国家领袖命令，为国家居民设置后缀。
    * surname {名称} - 国家领袖命令，清除指定居民的后缀。
    * tag {最多四个字} - 设置国家标签，有时会用在聊天栏中。
      * clear - 清除设置的国家标签。
    * mapcolor {颜色} - 设置显示在 dynmap-towny 网页地图上的国家颜色。
  * toggle
    * neutral - 设置战争爆发时国家支付的中立维持费。
    * open - 将国家设置为开放，任意城镇无需邀请即可加入。
    * taxpercent - 决定是否对城镇使用百分比税收。
  * join {国家名称}
    * 城镇拥有者命令，加入指定的国家。
  * merge {国家名称}
    * 将指定国家并入你的国家。
    * 只能由国家领袖使用，需要被合并国家的领袖在线并同意。
    * 被合并国家的领袖会收到消息提醒，确认是否继续。
    * 若接受，被合并国家的城镇会与另一国家的城镇合并。银行资产也会被转移。
  * ranklist {国家名称} - 显示居民及其等级，后接国家名称可浏览其他国家的等级列表。
  * townlist (国家名称)
    * (国家名称) 为可选参数，用于显示其他国家的城镇列表。
    * 列出国内的所有城镇。
  * allylist (国家名称)
    * (国家名称) 为可选参数，用于显示其他国家的盟友列表。
    * 列出国内的所有盟友。
  * enemylist (国家名称)
    * (国家名称) 为可选参数，用于显示其他国家的敌人列表。
    * 列出国内的所有敌人。

## /townyadmin

* /townyadmin
  * 显示内存、线程、战争状态、生命再生设置以及每日计时器及税收是否开启。
  * ? - 显示 /ta 的子命令。
  * tpplot {世界名称} {x} {z} - 管理员命令，传送至 /towny map 中显示区块坐标对应的位置。谨慎填入较大数字，可能会卡进待加载区块中。
  * plot
    * claim {玩家名称} - 管理员命令，为其他玩家领取城镇内的地皮。
    * meta - 浏览地皮的元数据。
      * set \[键\] \[值\] - 设置元数据。
      * \[add|remove\] \[键\] - 添加或移除元数据。
    * claimedat - 显示地皮的占领状态。

  * resident
    * {居民名称} delete - 管理员命令，删除指定居民。
    * {旧名称} rename {新名称} - 管理员命令，手动重命名居民。TownyNameUpdater.jar 存在时无需使用。
    * {居民名称} friend \[add|remove|clear|list\] - 管理居民的好友列表。
    * {居民名称} unjail - 管理员命令，释放任何被关押的居民。
    * {居民名称} about clear - 管理员命令，清空居民的介绍信息。
    * {居民名称} meta
      * set \[键\] \[值\] - 对居民设置元数据。
      * \[add|remove\] \[键\] - 添加或移除居民的元数据。

  * town new {城镇名称} {城镇拥有者名称} - 管理员命令，以脚下为核心地块创建新城镇，拥有者为指定玩家，不收取任何费用。

  * town new {城镇名称} npc - 创建 NPC 为城镇拥有者的城镇，允许管理员无需离开城镇即可新建城镇。

  * nation new {国家名称} {首都} - 管理员命令，以指定城镇为首都创建国家，不收取任何费用。

  * town {城镇名称}
    * add {居民名称} .. {居民名称} - 管理员命令，将玩家强制加入城镇。
    * invite {居民名称} - 向玩家发送城镇邀请。
    * remove {居民名称} .. {居民名称} - 管理员命令，将玩家强制移出城镇。
    * kick {居民名称} - 管理员命令，将玩家强制踢出城镇。
    * rename {newname} - 管理员命令，重命名城镇。
    * spawn - 管理员命令，重设城镇出生点。
    * outpost # - 管理员命令，传送到指定前哨站。
    * delete - 管理员命令，删除城镇。
    * buy .... - 管理员命令，以城镇居民身份执行购买操作。
    * forsale|fs [$] - 将城镇挂售。
    * notforsale|nfs - 取消城镇的挂售状态。
    * rank {add/remove} {名称} {等级} - 管理员命令，向指定玩家授予/收回等级。
    * toggle [任意 /t toggle 命令]... - 使用城镇的功能切换命令。
      * conquered - 设置城镇的被征服状态。
      * forcemobs - 设置城镇的 forced-mobs 状态。
      * forcepvp - 设置城镇的 AdminEnabledPVP 状态。
      * forcedisablepvp - 设置城镇的 AdminDisabledPVP 状态。
      * unlimitedclaims - 去除城镇的地块占领上限。
      * upkeep - 切换城镇的 hasUpkeep 的标志，设置为 false 表示城镇无需支付维护费用。
      * visibleontoplists - 切换城镇在 /towny top、/t list（以及 PlaceholderAPI 变量）中的显示状态。
      * allowedtowar - 切换城镇是否允许发动或参与战争（取决于所使用的战争插件是否支持该功能）。
    * set
      * [任意 /t set 命令]... - 为城镇使用设置命令。
      * foundingdate [unix 时间戳] - 修改城镇的创建时间。前往 https://www.unixtimestamp.com/ 可自行获取合适的时间戳。
    * settownlevel
      * \# - 将城镇的等级设置为 1 至 x 范围内的指定数字，x 表示城镇的最大等级。
      * unset - 移除手动覆盖，将城镇按居民数量还原等级。
    * trust
      * add \[玩家名称\]
      * remove \[玩家名称\]
      * list
    * trusttown
      * add \[城镇名称\]
      * remove \[城镇名称\]
      * list
    * giveboughtblocks
      * \# - 允许管理员给予购买的城镇地块（通过 /t buy 获取），输入负数表示取走购买的城镇地块。
      * unset - 移除城镇所有购买的地块。
    * meta - 浏览城镇的元数据。
      * set \[键\] \[值\] - 设置元数据。
      * \[add|remove\] \[键\] - 添加或移除元数据。
    * outlaw \[add|remove\] \[玩家名称\] - 管理员命令，将指定玩家加入或移出逃犯名单。
    * leavenation - 管理员命令，让城镇离开其所属国家。
    * deposit \[数量\] - 向城镇银行中存钱。
    * withdraw \[数量\] - 从城镇银行取钱。
    * bankhistory {#} - 打开书本菜单，显示 # 条城镇银行的交易记录。
    * unruin - 解除废弃城镇的废弃状态。
    * merge {城镇名称} - 向其他城镇发出合并请求。
    * forcemerge \[城镇名称\] - 强制将指定城镇与当前城镇合并，无需拥有者确认。
    * checkoutposts - 检查城镇的前哨站出生点，并删除非城镇内的出生点位置。

  * nation {国家名称}

    * add {城镇名称} - 管理员命令，将城镇邀请或直接加入国家。
    * rename {新名称} - 管理员命令，重命名国家。
    * delete - 管理员命令，删除城镇。
    * toggle \[任意 /n toggle 命令\]... - 以国家身份执行切换功能。
    * set
      * \[任意 /n set 命令\]... - 以国家身份执行设置功能。
      * foundingdate \[unix 时间戳\] - 修改国家的创建时间。前往 https://www.unixtimestamp.com/ 可自行获取合适的时间戳。
    * {被合并国家名称} merge {国家名称}
      * 将前者国家强制并入后者的命令。
    * kick [城镇...] - 管理员命令，踢出国家中的指定城镇。
    * deposit [数量] - 向国家银行存钱。
    * withdraw [数量] - 从国家银行取钱。
    * bankhistory {#} - 打开书本菜单，显示 # 条国家银行的交易记录。
    * ally [add|remove] {国家名称} - 为国家添加/移除盟友。
    * enemy [add|remove] {国家名称} - 为国家添加/移除敌人。
    * merge {国家名称} - 向其他国家发出合并邀请。
    * meta
      * set [键] [值] - 为国家设置元数据。
      * [add|remove] [键] - 为国家添加或移除元数据。
    * forcemerge {国家名称} - 强制将指定国家与当前国家合并，无需拥有者确认。
    * recheck - 在国内测试城镇，移除所有距离不符合规则的城镇。
    * transfer [城镇名称] - 将指定城镇转移到其他国家，若有必要还可移除原本国家。
    * sanctiontown
      * add [城镇名称] - 将城镇加入制裁名单。
      * remove [城镇名称] - 将城镇移出制裁名单。
      * list - 列出国家的制裁城镇名单。

  * reset - 将插件的 config.yml 重置为默认状态。

  * toggle
    * neutral - 开关国家声明中立的能力。
    * npc {居民名称} - 将玩家的居民身份设置中添加 isNPC=true，使得玩家不会被收取维护费或税。
    * debug - 开启或关闭调试模式。
    * devmode - 开启或关闭开发者模式，便于 Towny 开发者团队加入服务器寻找漏洞。
    * withdraw - 开启或关闭国家/城镇从银行中取钱的能力。
    * wildernessuse (on|off) - 开启或关闭所有世界建造/破坏/切换/使用物品功能。
    * regenerations (on|off) - 开启或关闭爆炸/解除占领区域的地形恢复功能。

  * set
    * founder {城镇名称} {组建者名称} - 设置城镇的组建者。
    * about {玩家名称} {clear|none|reset|消息文本} - 设置或清除指定居民的自述信息。
    * plot {城镇名称} - 为城镇设置地皮。
      * 处于城镇中时，一次只可转移一块地皮。不需要城镇拥有多余的可占领地块。
      * 处于郊区中时，有两种子命令可以用于占领区域：
      * 但是需要城镇拥有多余的可占领地块。
      * 同样需要遵守城镇/地块间的距离规则。
      * /ta set plot {城镇名称} {rect|circle} {半径}
      * /ta set plot {城镇名称} {rect|circle} auto
    * title {名称} {前缀} - 管理员命令，设置玩家的前缀。
    * surname {名称} {后缀} - 管理员命令，设置玩家的后缀。
    * capital {城镇名称} - 管理员命令，用于设置国家首都。被设置为首都的城镇必须属于这个国家。
    * mayor
      * {城镇名称} {居民名称} - 管理员命令，将指定玩家设置为城镇拥有者。
      * {城镇名称} npc - 管理员命令，将城镇拥有者设置为 NPC。
    * nationzoneoverride \[城镇名称\] \[大小\] - 设置城镇的 NationZone 大小。

  * givebonus {城镇名称} {#} - 向城镇发放额外可占领地块数。

  * reload
    * all - 重载所有内容。
    * database - 重载数据库。
    * perms - 重载 townyperms.yml 配置文件。
    * config - 重载 config.yml 配置文件。
    * lang - 重载语言文件。

  * backup - 创建备份。

  * checkperm {玩家名称} {权限节点} - 用于快速测试指定玩家是否拥有某个权限。

  * checkoutposts - 检测并移除服务器上所有出生点不在城镇范围内的前哨站。

  * newday - 强制进入下一天，不会阻止已经发生的下一日事件。

  * unclaim
    * rect {半径} - 管理员命令，用于解除占领一定范围的区域。

  * purge {天数} (townless) - 删除旧居民数据。
    * 可选的 townless 标签会只对城镇居民进行清理操作。

  * purge {天数} {城镇名称} - 删除旧居民数据。
    * 可选的城镇名称标签会只对不属于该城镇的居民进行清理操作。

  * mysqldump
    * 配置文件保存并载入 mysql 后，通过此命令可将数据库导出到配置文件。

  * database
    * \[save|load\] - 保存或载入数据库。
    * remove titles - 移除所有玩家的前后缀。

  * townyperms
    * grouplist - 列出所有 townyperms.yml 中的权限组。
    * group \[权限组\] - 列出权限组的权限。
    * group \[权限组\] addperm|removeperm \[权限节点\] - 为权限组添加/移除权限。
    * townrank addrank|removerank \[等级\] - 添加或移除城镇等级。
    * townrank renamerank \[旧等级名称\] \[新等级名称\] - 重命名城镇等级。
    * nationrank addrank|removerank \[等级名称\] - 添加或移除国家等级。
    * nationrank renamerank \[旧等级名称\] \[新等级名称\] - 重命名国家等级。

  * eco
    * info [Town|Nation|Resident|ServerAccount] {名称} - 显示指定的 Towny 对象的有关信息。
    * convert modern - 将 Towny 的经济实现转化为现代版本。
    * convert {经济插件} - 将 Towny 的经济数据从指定的经济插件转入其他的经济插件。
    * depositall {数量} - 向所有城镇和国家银行中存款。
    * depositalltowns {数量} - 向所有城镇银行中存款。
    * depositallnations {数量} - 向所有国家银行中存款。
    * resetbanks - 清空所有城镇与国家的银行存款。

## /townyworld

* /townyworld
  * 显示你所处世界的相关设置。
  * ? - 显示 /tw 命令帮助。
  * list - 列出所有世界。
  * {世界名称} - 显示指定世界的设置。
  * toggle
    * claimable - 开启或关闭城镇拥有者在世界内占领地块的能力。
    * usingtowny - 开启或关闭在世界中使用 Towny 功能的能力。
    * pvp - 开启或关闭世界中的 PVP。
    * forcepvp - 开启或关闭所有城镇中的强制 PVP 状态。
    * friendlyfire - 开启或关闭城镇或国家盟友间的的友军伤害。
    * explosion - 开启或关闭爆炸破坏地形的能力。
    * forceexplosion - 对应世界中的强制爆炸破坏。
    * fire - 开启或关闭火焰蔓延的能力。
    * forcefire - 对应世界中的强制火焰蔓延。
    * jailing - 开启或关闭监狱功能。
    * townmobs - 开启或关闭世界中的敌怪生成。
    * worldmobs - 开启或关闭世界生物名单的生成能力。
    * wildernessmobs - 开启或关闭郊区生物名单的生成能力。
    * revertunclaim - 开启或关闭解除占领还原地形的功能。
    * revertentityexpl - 开启或关闭还原实体爆炸破坏地形的功能。
    * revertblockexpl - 开启或关闭还原方块爆炸破坏地形的功能。
    * warallowed - 开启或关闭世界内发动战争的能力。
    * plotcleardelete - 开启或关闭世界内使用 /plot clear 命令的能力。
    * unclaimblockdelete {on|off} - 开启或关闭世界中的 delete-blocks-on-unclaim 功能。
    * unclaimentitydelete {on|off} - 开启或关闭世界中的 unclaiming-deletes-entities 功能。
    * wildernessuse {on|off} - 开启或关闭世界内的建筑/破坏/切换/使用物品功能。
  * set
    * wildname {名称} - 设置郊区名称。
    * wildperm {权限} .. {权限} - 已弃用功能。
    * wildignore {id} .. {id} - 已弃用功能。
    * wildregen {Creeper,EnderCrystal,EnderDragon,Fireball,SmallFireball,LargeFireball,TNTPrimed,ExplosiveMinecart} - 决定郊区内会逐渐恢复地形的爆炸类型。
    * usedefault - 已弃用功能。
  * regen - 按种子重新生成区块内的地形。
  * undo - 撤销 /tw regen 的操作。

## /invite

* /invite
  * 显示子命令。
  * ?|help - 显示子命令。
  * list - 显示城镇发给你的邀请。
  * accept {城镇名称} - 同意城镇的邀请。
  * deny {城镇名称} - 拒绝城镇的邀请。
  * deny all - 拒绝所有收到的城镇邀请。

## 聊天命令

  * /townychat reload - 重载 chatconfig.yml 与 channels.yml 配置文件。
  * /tc
    * 在城镇频道中发送内容，直接输入命令表示加入频道。
  * /nc
    * 在国家频道中发送内容，直接输入命令表示加入频道。
  * /ac
    * 在盟友频道中发送内容，直接输入命令表示加入频道。
  * /g
    * 在全局聊天中发送内容，直接输入命令表示加入频道。
  * /l、/lc
    * 在 localchat，直接输入命令表示加入频道。
  * /res set mode reset
    * 将聊天模式重置为默认。
  * /a、/admin - 管理员聊天。
  * /m、/mod - 小管理聊天。

  * /channel leave|join {频道名称} - 加入或退出聊天频道。
  * /ch list - 列出玩家所处的频道。
  * /leave {频道名称} - 离开频道。
  * /join {频道名称} - 加入频道。
  * /chmute {频道名称} {玩家名称} - 禁言指定频道的玩家。
  * /mutelist {频道名称} - 浏览指定频道的禁言玩家列表。
  * /chunmute {频道名称} {玩家名称} - 解除指定频道玩家的禁言。
