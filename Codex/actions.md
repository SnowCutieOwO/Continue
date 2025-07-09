# 动作

动作可以用于解锁条目时给予奖励。更多信息可在[这里](discoveries-categories-tutorial.md#奖励)浏览。

## 消息

向玩家发送消息。

``` YAML
message: "#eeeeee&l日志已更新 &7怪物: %name%"
```

## 居中消息

向玩家发送一条居中显示的消息。

``` YAML
centered_message: "&7通过命令 #eeeeee/codex &7查看"
```

## 玩家身份执行命令

以玩家身份执行命令。

``` YAML
player_command: menu
```

## 播放声音

向玩家播放一段声音。  
格式：`"playsound: 音效;音量;音高"`  
可以在这里找到完整声音名称列表：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html

``` YAML
playsound: BLOCK_NOTE_PLING;1;1;0.1
```

## 标题

向玩家发送标题与副标题消息。  
格式：`"title: 淡入时间;保持时间;淡出时间;标题内容;副标题内容"`（淡入、保持与淡出时间单位为刻，20 刻 = 1 秒）
若你不需要标题或副标题，只需在对应部分填入“none”即可。

``` YAML
title: "20;60;20;#eeeeee&l日志已更新;&7怪物: %name%"
```