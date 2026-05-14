# eCloud 连接被阻止

如果你不能通过 PlaceholderAPI 自带的命令下载变量拓展，有可能是因为你的服务器无法连接到 PlaceholderAPI 变量拓展云（即 eCloud）。这一般是服务器提供商限制了对外网的访问，或是防火墙问题。

## 症状

一般表现为：

* 游戏内消息将你重定向到这个页面。
* `/papi ecloud download/update <变量拓展名称>` 失败（超时、错误、连接被拒绝等字样）

## 原因

下载命令需要从服务器出站访问 PlaceholderAPI 的 eCloud API。

连接有可能被这些东西阻止：

* 托管商设置的防火墙/安全策略
* 本地防火墙
* 网络防火墙（数据中心、路由等）
* DNS 过滤或上游的服务器提供商拦截规则

## PlaceholderAPI 使用的域名

请放行如下域名的 HTTPS（TCP 443）出站流量：

* 低于 2.12.0 版本的 PlaceholderAPI：`api.extendedclip.com`
* 高于 2.12.0 版本的 PlaceholderAPI：`*.placeholderapi.com`

## 修复指南

### 1）请求托管商解封 eCloud 域名

如果你正在使用托管商的服务器，你可能无法自行修改防火墙规则。

联系客服并请求解封上述域名的 HTTPS 出站流量。

### 2）检查防火墙/过滤设置

如果你是自建服务器，你可以检查这些设置：

* 系统防火墙规则（Windows 防火墙 / `ufw` / `iptables`）
* 路由/数据中心防火墙规则
* DNS 过滤

### 3）手动安装拓展（无需连接 eCloud）

如果无法解除封锁，你可以这样手动下载拓展：

* 前往 https://ecloud.placeholderapi.com/
* 搜索并打开你想要的变量拓展。
* 下载 `.jar` 文件。
* 将其放入服务器的 `plugins/PlaceholderAPI/expansions/` 文件夹。
* 输入命令 [`/papi reload`](../user-guides/commands.md#papi-reload)（或重启服务器）。

## 快速连通性检查（可选）

如果你能接触到运行服务器的实体机，通过终端或命令窗口进行这些检查可以确认连接是否被阻止。

``` bash
curl -I https://ecloud.placeholderapi.com/api/v3/
curl -I https://api.extendedclip.com/v2/
```

如果这些命令在服务器端失败，而在你的电脑或网络上有效，那么服务器托管商或数据中心网络极有可能阻止了这类域名的出站连接。

## 还是有问题？

如果你需要帮助，你可以加入 [Discord 聊天群组](https://discord.gg/helpchat)，分享这些信息：

* 你试过的修复方法
* 下载尝试的完整控制台报错
* `/papi dump` 命令输出的链接