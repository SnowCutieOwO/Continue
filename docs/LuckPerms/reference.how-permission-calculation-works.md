# 高级安装

## 介绍

尽管 LuckPerms 的基础非常简单，但是你还是可以照着本章节的教程来使用更多的特性，搭建一个更强大的权限系统。

## 指定世界或服务器生效的权限

LuckPerms 是为多子服的群组设计的。你可以设置只在某个服务器或世界中生效的权限。

### 一些重要的配置选项：

```YAML
# The name of the server, used for server specific permissions. Set to 'global' to disable.
server: global
```

这就是服务器的名称。若你想要设置只在某个服务器生效的权限，你需要通过修改这个选项为服务器命名。如果你想要的话，群组中的服务器也可以是同一个名字。

```YAML
# If users on this server should have their global permissions/groups applied.
include-global: true
```

“包含全局”选项也非常重要。

LuckPerms 的权限可以分成仅在指定服务器生效（只在处于某个服务器中有效）与全局生效（所有服务器均会生效）两类。

将上述选项设置为 **false**，表示只有指定了生效服务器的权限才会被应用。全局（或未指定生效服务器的）权限将不会生效。

通过修改这两个选项，你可以设置更灵活、强大的服务器权限与权限组。

### 示例

#### 示例一

```YAML
server: global
include-global: true
```

* /luckperms user Luck set minecraft.command.gamemode true **会生效**
* /luckperms user Luck set minecraft.command.gamemode true factions 在不处于“factions”服务器时**不会生效**

#### 示例二

```YAML
server: lobby
include-global: true
```

* /luckperms user Luck set minecraft.command.gamemode true **会生效**
* /luckperms user Luck set minecraft.command.gamemode true lobby **会生效**

#### 示例三

```YAML
server: bungeecord
include-global: false
```

* /luckperms user Luck set minecraft.command.gamemode true **不会生效**
* /luckperms user Luck set bungeecord.command.alert true bungeecord **会生效**

#### 示例四

```YAML
server: global
include-global: false
```

**没有权限会生效**

若不指定服务器，且不包括全局权限，那么没有权限会生效。

## 权限计算
如下所示，权限是通过权重系统进行判定的。

* **限定服务器的权限会覆盖全局权限。**

示例：若玩家拥有一个“fly.use”权限，之后又拥有一个在“factions”服务器上生效的“fly.use”负权限，那么指定了服务器的权限就会覆盖全局权限，且玩家会（在指定服务器中时）获得这个负权限

* **限定世界的权限会覆盖全局权限。**

示例：若玩家拥有一个“fly.use”权限，之后又拥有一个在“world_nether”世界中生效的“fly.use”负权限，那么指定了世界的权限就会覆盖全局权限，且玩家会（在指定世界中时）获得这个负权限

* **临时权限会覆盖永久权限。**

示例：若玩家拥有一个“test.node”的负权限，又设置了相同的临时权限，那么它就会覆盖永久权限，玩家也会在其生效期间内获得这个权限。

* **通配符/正则权限会被正常权限覆盖。**

示例：若一个玩家有“luckperms.*”权限，和一个“luckperms.something”负权限，非通配符权限会覆盖通配符，也就是玩家的“luckperms.something”权限设置为负，无视通配符。

* **临时权限会覆盖其他持续时间更长的临时权限。**

示例：若玩家拥有一个在 1 天内过期的“fly.use”临时权限，和一个在 1 小时内过期的“fly.use”负权限，那么持续时间更短的权限将会覆盖持续时间长的，负权限会在这 1 个小时内被优先计算。

* **更详细的通配符权限会覆盖更粗略的通配符权限。**

示例：若一个玩家有“luckperms.\*”权限，以及“luckperms.user.\*”负权限，所有 user 相关的命令都会被禁止，除非再次给予比“luckperms.*”更详细的权限。

* **继承权限会被自拥有权限覆盖。**

示例：一个玩家属于默认组，拥有权限“some.thing.perm”，但玩家自身拥有“some.thing.perm”负权限。继承权限会被玩家本身的权限覆盖，且玩家该权限的状态为负。

## 临时权限

临时权限每 3 秒会进行一次检查，确认其是否过期。检查无视同步间隔设置。这表示你可以安心地设置只持续几秒的权限，它们会被按时移除。

## 缩写权限

LuckPerms 允许你通过它（尽管与 PermissionsEx 的有点像 😛）将权限缩写。

### 示例

#### 示例一

以 LuckPerms 权限节点为例，你想要玩家能够对其他玩家和权限组进行自由控制。

在没有缩写的情况下，你需要给予四个权限。

```
luckperms.user.setpermission
luckperms.user.unsetpermission
luckperms.group.setpermission
luckperms.group.unsetpermission
```

但是，在缩写启用的情况下，你只需添加这个权限：

```
luckperms.{user,group}.{setpermission,unsetpermission}
```

你可以使用花括号来将一部分节点当做缩写组，通过英文逗号 `,` 来分隔多条权限。

#### 示例二

你可以通过 `-` 符号使用字母范围。在没有缩写的情况下，你需要给予四个权限。

```
coolkits.kit.a
coolkits.kit.b
coolkits.kit.c
coolkits.kit.d
```

但在拥有缩写的情况下，你可以给予这个权限：
```
coolkits.kit.{a-d}
```

#### 示例三

你可以通过 `-` 符号使用数字范围。在没有缩写的情况下，你需要给予四个权限。

```
prisonmines.teleport.1
prisonmines.teleport.2
prisonmines.teleport.3
prisonmines.teleport.4
```


但在拥有缩写的情况下，你可以给予这个权限：
```
prisonmines.teleport.{1-4}
```

## 正则

LuckPerms 支持正则权限。

在使用正则权限时，它必须以“R=”开头，这样 LuckPerms 才能知道它是正则，而不是一般的字符串。

例如，如果你想要玩家能创建组与路线，一般情况下你要给予两个权限节点。但是在使用正则的情况下，你只需要给予 `luckperms\.create.*` 权限。但是记住，你需要转义其中出现的标点（包括 `.` 符号），因为一整个节点都是正则的识别范围。