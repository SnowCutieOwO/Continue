# 在 6.x 的 CentOS 上通过 Nginx 搭建 Dynmap 网页服务器

## 介绍

使用 Nginx（或者为此使用 Apache）而不是内置的“卡顿网页服务器”可以缓解游戏服务器和地图在高峰时期的压力。他如果你托管自己的网站（并因此用到了 80 端口），这也可以让你把地图放在诸如 <http://map.example.com/> 的链接里，而不是像 <http://map.example.com:8123/> 这样多一个端口号。

（设置 DNS 记录不在此教程的讲述范围里。）

注意：本教程假设网页服务器与游戏服务器分离。在这个示例中我会以 192.168.1.2 指代游戏服务器，以 192.168.1.3 指代 Nginx 服务器。如果你选择将这两个服务器放在同一台机器上，那么只需将配置中的 192.168.1.2 切换为 127.0.0.1——但需要注意的是这可能不是最好的选择（如果使用代理功能可能会好一点？存疑）。

## CentOS

为什么要用 CentOS？我要在这里引用维基百科的一句话：“CentOS（**C**ommunity **Ent**erprise **O**perating **S**ystem）是 Linux 发行版之一，它是来自于 Red Hat Enterprise Linux（RHEL）依照开放源代码规定发布的源代码所编译而成。CentOS 的存在是为了提供一个免费的企业级计算平台。”[^1]

对于安装部分，我一般使用“最小”安装 ISO 文件，然后手动安装所需的其他内容。我更喜欢少装一些，然后在后面的使用过程中补齐缺失内容，而不是一开始的时候就装一大堆东西。镜像链接[在此](http://www.centos.org/modules/tinycontent/index.php?id=30)。`x86_64` 的最小 ISO 位于 `/6.X/isos/x86_64/CentOS-6.X-x86_64-minimal.iso`（请将 X 替换为最新版本，在写这篇文章时为 6.4。）

安装 CentOS，别忘了在安装过程中设置网络，不然首次启动后你需要手动编辑 `/etc/sysconfig/network-scripts/ifcfg-eth0` 文件。在设置静态 IP 后，你还可以通过 DHCP 服务器再次设置（一般为路由）。此时你也许需要修改 SSHd，不过这是可选项。

## 安装 Nginx、PHP 与 PHP-FPM

按照这里的教程安装 nginx。如果你安装了 `x86_64` 的 CentOS，你需要（以 root 身份登录）输入如下命令：

``` bash
rpm -ivh http://mirror.yandex.ru/epel/6/x86_64/epel-release-6-7.noarch.rpm
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
```

在“配置 Nginx”部分，我一般会使用 `/var/www/map.example.com/public_html` 和 `/var/www/map.example.com/logs`，你可以自行决定。

注意：需要为缓存创建文件夹，例如 `/var/www/cache`，输入 `chown nginx:nginx /var/www/cache` 即可。

## 设置“网站”

在你创建的 `/etc/nginx/sites-available/map.example.com` 文件中，将配置修改为如下内容：

``` apache
    proxy_cache_path  /var/www/cache levels=1:2 keys_zone=map:8m max_size=1g inactive=24h;
server {
    server_name map.example.com;
    access_log /var/www/map.example.com/logs/access.log;
    error_log /var/www/map.example.com/logs/error.log;
    root /var/www/map.example.com/public_html;

    location / {
        proxy_pass                  http://[IP OF MINECRAFT SERVER]:9999/;
        proxy_set_header            Host $host;
        proxy_cache                 map;
        proxy_cache_key "$host$uri";
        proxy_cache_valid  200 302  60m;
        proxy_cache_valid  404      10m;
        proxy_cache_use_stale       error timeout invalid_header updating http_500 http_503 http_504;
        proxy_connect_timeout 10;
    }
}
```

将 `proxy_pass` 变量改为 Dynmap 网页服务器的端口与 IP。

## 完成

输入命令 `service nginx reload` 重载配置。

确保端口 80 在防火墙中开放（`iptables`），nginx 服务器的公开 IP 有与 `map.exmaple.com` 域名关联的 DNS A 记录。

现在，打开 <http://map.example.com> 即可看到你的网页地图。

[^1]: 引用日期：2026/7/20。此句后半句原文并没有在维基百科的 CentOS 页面上找到。