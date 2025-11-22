# 黑名单

黑名单功能允许一个（或多个）玩家试图进行的操作（放置方块、使用物品等）被禁止。一些示例包括：

* 阻止玩家挖掘金矿；
* 提醒所有管理员找到钻石矿的时间点；
* 向玩家在放置附魔台的时候发送消息。

示例黑名单文件如下：
```Ini
# 禁用岩浆桶
[lava_bucket]
ignore-groups=admins,mods
on-use=deny,tell
message=抱歉, 但你不可以在这里使用岩浆桶!

# 禁止挖掘矿物
[gold_ore,iron_ore]
ignore-groups=admins
on-break=deny,tell,notify

# 禁用 TNT!
[tnt]
ignore-groups=admins
on-place=deny,notify,kick
```

## 黑名单文件

对于每个世界，你都可以在它们的存档文件夹中找到分世界配置文件：

* `worlds/world/blacklist.txt`
* `worlds/world_nether/blacklist.txt`
* `worlds/mining_world/blacklist.txt`

::: tip
现在并不能将同一个黑名单文件在多个世界之间共享。你可能需要通过操作系统自带的“symlink”来将两个文件保持同步更新。
:::

## 格式

黑名单文件包括以下部分的设置：
```
[所匹配的物品/方块列表]
监听的事件=进行的操作
监听的事件=进行的操作
监听的事件=进行的操作
参数=值
```
`#` 开头的行不会被 WorldGuard 读取。你可以用这个特性撰写自己的注释。

### 匹配格式

物品和方块可以通过它们在 [Bukkit 的材料列表](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)中所提及的名称匹配。多个物品或方块名称可以用一个英文逗号“,”分隔：
```Ini
[oak_wood,brick,glass]
```

## 匹配格式

在你已经指定了需要监听方块和物品的名称之后，你必须指定需要检测它们的情况，也需要为它们设置执行的操作。

可用事件请参阅下表：

|事件名称|事件释义|
|---|---|
|on-break|当列表中的方块被挖掘时|
|on-destroy-with|当列表中的物品被持有并挖掘列表中的方块时|
|on-place|当列表中的方块被放置时|
|on-use|当玩家背包中的物品被使用时|
|on-interact|当玩家与列表中的方块（如：门、拉杆等）进行互动（如：鼠标右键点击）时|
|on-drop|当玩家丢弃列表中的物品时|
|on-acquire|当玩家捡起列表中的物品时|
|on-dispense|当投掷器投掷了列表中的物品时|

当指定事件时，一个“操作”列表需要在配置后指定，如下所示：
```Ini
[enchantment_table]
on-place=deny,tell
on-drop=notify
```

### 可用操作

每个事件可以指定多个对应的操作。

|操作名称|操作释义|
|---|---|
|deny|禁止本次操作（仅在黑名单没有开启“白名单模式”下有效（见下））|
|allow|允许本次操作（仅在黑名单开启了“白名单模式”下有效）|
|notify|提醒带有权限 `worldguard.nofity` 的玩家|
|log|将事件记录至控制台、文件或数据库|
|tell|提醒玩家该操作不被允许|
|kick|踢出玩家|
|ban|封禁玩家|

## 选项

选项在事件的同一个配置部分被指定，可见下文示例：

```Ini
[enchantment_table]
on-place=deny,tell
message=抱歉, 但是你不能使用附魔台!
```

在这种情况下，`messages` 就是一个能够覆盖原有“tell”操作的设置项。

|选项名称|选项描述|
|---|---|
|ignore-groups|以逗号分隔的权限组，表示这些组不受影响|
|ignore-perms|以逗号分隔的权限节点，表示持有这些权限的玩家不受影响|
|comment|在 `log` 和 `notify` 中消息的格式（会覆盖默认两个操作所写入或显示的消息格式）|
|message|向玩家发送的消息（覆盖默认消息）。消息中的内建变量 %s 会替换为物品的名称（英文原名显示）|

## 白名单模式

将黑名单模式切换为白名单模式（通过配置文件）将会把配置的功能反转。在这种情况下只有被标注为 `allow` 的操作才可以被允许。

::: tip
白名单模式非常严格。在需要放置方块的情况下，你需要先在配置文本里允许使用该方块（玩家手中的物品）、与世界上存在的所有方块的交互（允许方块放置“其上”）以及放置方块。你可能会发现通过建筑权限为玩家设置相关保护更加容易，因为它支持“*”通配符（在权限节点中使用），这样就可以减少你的工作量。
:::

## 示例

::: info 示例：禁用任意种类的桶
```Ini
[lavabucket,waterbucket,bucket]
on-use=deny,tell
```
:::

::: info 示例：踢出正在使用 TNT 的玩家，并提醒管理员

```Ini
[tnt]
ignore-groups=admins
on-place=deny,notify,kick
```
:::

::: info 示例：只允许处在权限组“obsidian”或为管理员的玩家挖掘和放置黑曜石

```Ini
[obsidian]
ignore-groups=admins,obsidian
on-place=deny,tell
on-break=deny,tell
```
:::

## 日志记录

在 `log` 操作的情况下，消息可以通过下列方式发送或保存：

* 控制台；
* 文件；
* 数据库。

这些日志记录所存储的相关设置可以在配置文件中自行启用或禁用。多个日志记录目标可以同时启用。在默认情况下，只会启用控制台日志记录。

### 控制台记录

控制台记录模式会将日志输出在服务器的控制台界面上。

### 文件记录

文件记录会将日志保存至文件。在配置文件中，日志文件可以通过特殊的格式指定其存储位置（有点像现在的时间格式），所以你可以每天按格式记录并保存日志。

可以使用下列格式：

* %Y 返回年 (YYYY)
* %m 返回月 (MM)
* %d 返回天 (DD)
* %W 返回星期数 (00-52)
* %H 返回 24 小时时间 (HH)
* %h 返回 12 小时时间 (HH)
* %i 返回分 (mm)
* %s 返回秒 (ss)
* %u 返回玩家名称
* %% 表示百分符号“%”

### 数据库记录

WorldGuard 可以将整个入记录至 MySQL 数据库。尽管如此，你仍然还是要自行创建数据库与数据表。数据库需要创建的表的结构已在下文代码中给出。

```SQL
CREATE TABLE IF NOT EXISTS `blacklist_events` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `world` varchar(10) NOT NULL,
 `event` varchar(25) NOT NULL,
 `player` varchar(16) NOT NULL,
 `x` int(11) NOT NULL,
 `y` int(11) NOT NULL,
 `z` int(11) NOT NULL,
 `item` int(11) NOT NULL,
 `time` int(11) NOT NULL,
 `comment` varchar(255) DEFAULT NULL,
 PRIMARY KEY (`id`)
);
```

