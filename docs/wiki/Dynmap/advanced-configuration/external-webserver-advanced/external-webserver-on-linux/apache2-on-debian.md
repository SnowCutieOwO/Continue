# 在 Debian 上基于 apache2 搭建 Dynmap 服务

本章节假设：

* 你安装了 `apache2`。
* 你的 www 根目录为：`/var/www/html/`。
* 可通过 `http://localhost:8123` 或 `http://本地网络ip:8123` 打开 Dynmap 地图。

本示例会教你如何将 Dynmap 地图放入 Apache 网页服务器，并通过链接 `http://mywebserverdomain.ext/` 或 `https://mywebserverdomain.ext` 访问。

* 开始之前，前往 `/srv/http/dynmap/`。
* 复制 zip 内的 `web` 文件夹到 `/srv/http/dynmap`。

本章节将会让你的 Dynmap 通过 http 或 https 生效。

首先，前往目录 `/var/www/`。

现在，启用所需的模块。在 bash 中输入如下内容：

``` bash
sudo a2enmod rewrite proxy_http
```

之后，创建指向 Dynmap 内部服务器的反向代理。在此之前请确保你在 `/etc/apache2/sites-available/000-default.conf` 里设置了非 SSL 使用：

若你在使用 SSL，默认为你的 SSL 配置文件。`Lets Encrypt` 的文件为 `000-default-le-ssl.conf`

``` apache
...

ProxyRequests off
ProxyPass / "http://localhost:8123/"
ProxyPassReverse / "http://localhost:8123/"
...
```

重启 apache2（命令为 `sudo systemctl restart apache2`）

现在你就可以通过 `http://domainname.com/` 或 `https://domainname.com` 访问网页地图了。