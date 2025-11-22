# 命令列表

## 认证命令

### 登录命令

`/login <密码>` - 使用密码登录至服务器 - 无需权限

### 注册命令

`/register <密码> <确认密码>` - 使用密码在服务器注册 - 无需权限

## 免密登录相关

### 认证命令

`/premium <密码>` - 启用自动登录 - 无需权限

### 解除认证

`/cracked` - 禁用自动登录 - 无需权限

## 管理员命令

### LibrePremium

`/librelogin <子命令>` - 需要子命令 - 根据子命令分权限

#### 重载

`/librelogin reload <子命令>` - 需要子命令 - 根据子命令分权限

##### 配置

`/librelogin reload configuration` - 重载所有配置 - **librepremium.reload.configuration**

##### 消息文本

`/librelogin reload message` - 重载消息文本 - **librepremium.reload.messages**

#### 玩家

`/librelogin user <子命令>` - 需要子命令 - 根据子命令分权限

##### 信息

`/librelogin user info <玩家名称>` - 显示玩家有关的信息（UUID、正版 UUID、加入日期与最后上线）- **librepremium.user.info**

##### 迁移

`/librelogin user migrate <玩家名称> <新名称>` - 将当前玩家数据迁移至对应新名称中，若启用了自动登录，则也会将其一并禁用 - **librepremium.user.migrate**

##### 注销

`/librelogin user unregister <玩家名称>` - 注销玩家，若其他玩家再次注册账号，仍然会保留旧玩家相关内容（背包、其他插件数据等）。- **librepremium.user.unregister**

##### 删号

`/librelogin user delete <玩家名称>` - 删除玩家。**警告：如果你删除了某个玩家，他们的数据会永久丢失。请考虑使用注销命令** - **librepremium.user.premium**

##### 开启自动登录

`/librelogin user premium <玩家名称>` - 启用指定玩家的自动登录 - **librepremium.user.premium**

##### 关闭自动登录

`/librelogin user cracked <玩家名称>` - 禁用指定玩家的自动登录 - **librepremium.user.cracked**

##### 注册

`/librelogin user register <玩家名称> <密码>` - 使用指定名称与密码注册玩家账户 - **librepremium.user.register**

##### 登录

`/librelogin user login <玩家名称>` - 将指定玩家登录（前提是玩家在线且未登录）- **librepremium.user.login**

##### 禁用二步验证

`/librelogin user 2faoff <玩家名称>` - 关闭玩家的二步验证 - **librepremium.user.2faoff**

##### 修改密码

`/librelogin user pass-change <玩家名称> <密码>` - 修改玩家密码 - **librepremium.user.pass-change**

##### 查看小号

`/librelogin user alts <玩家名称>` - 显示同一 IP 下的账号。需要注意的是，某些村庄（包含上百人）可能会使用相同的 IP[^1] - **librelogin.user.alts**

[^1]: 基于国内的 IP 策略（动态 IP），该功能很有可能不会生效。
