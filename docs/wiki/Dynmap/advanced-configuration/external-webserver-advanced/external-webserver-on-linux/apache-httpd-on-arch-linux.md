# Arch Linux 上带 `apache-httpd` 的 Dynmap

本章节假设：

* 你安装了 `apache-httpd`。
* 你的 www 根目录为：`/srv/http`。
* 可通过 <http://localhost:8123> 打开 Dynmap 地图。

本示例会教你如何将 Dynmap 地图放入 Apache 网页服务器，并通过链接 <http://mywebserver/dynmap/> 访问。

* 开始之前，先创建 `/srv/http/dynmap/` 目录。
* 复制 zip 压缩包内网页文件夹的内容到 `/srv/http/dynmap/`。

在 `/etc/httpd/conf/httpd.conf` 中，确保你添加了这些设置。需要注意的是它们无需相邻。

``` apache
    LoadModule proxy_module modules/mod_proxy.so
    LoadModule proxy_http_module modules/mod_proxy_http.so
    LoadModule rewrite_module modules/mod_rewrite.so
```

之后，我们必须将 `/dynmap/up/` 及 `/dynmap/standalone`“重定向”到 Dynmap 的内置网页服务器。只需在 `/etc/httpd/conf/httpd.conf` 的末尾加上这些内容即可：

``` apache
...
    Alias /dynmap/tiles /opt/minecraft_server/plugins/dynmap/web/tiles/

    RewriteEngine on
    RewriteRule /dynmap/up/(.*) http://localhost:8123/up/$1 [P,L]
    RewriteRule /dynmap/standalone/(.*) http://localhost:8123/standalone/$1 [P,L]

    <Directory /opt/minecraft_server/plugins/dynmap/web/tiles/>
    Order allow,deny
    Allow from all
    *</Directory>

    <Proxy http://localhost:8123/*>
    Order deny,allow
    Allow from all
    </Proxy>
```

需要注意的是这会对所有虚拟端口生效。若你有多个虚拟端口，那么需要将上述内容一并放入。

``` apache
Restart apache/httpd (`sudo /etc/rc.d/httpd restart`)
```

现在就应该能在 <http://mywebserver/dynmap/> 上正常打开浏览在线玩家了，记得让它们保持最新。