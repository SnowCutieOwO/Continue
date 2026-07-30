# 在 Arch Linux 上的 lighttpd 运行 Dynmap 服务

本章节假设：

* 你安装了 `lightppd`。
* 你的 `www` 根目录为 `/srv/http/`。
* 可通过 <http://localhost:8123/> 打开 Dynmap 地图

之后：

* 开始之前，新建 `/srv/http/dynmap/` 文件夹。
* 复制 zip 内的 `web` 文件夹到 `/srv/http/dynmap`。

本章节将会展示如何将 Dynmap 放入 lighttpd 网页服务器运行，并通过 <http://mywebserver/dynmap/> 访问。

在 `/etc/lighttpd/lighttpd.conf/` 按如下格式启用对应模块：

``` apache
    server.modules = ( "mod_access",
    "mod_rewrite",
    "mod_proxy",
    "mod_fastcgi"
    )
```

现在，使得网页服务端可读取图块，同时还能将 `/dynmap/up/`“重定向”/代理到 Dynmap 的内置网页服务器。只需在 `/etc/lighttpd/lighttpd.conf` 中这样设置：

``` apache
alias.url += ( "/dynmap/tiles/" => "/home/minecraft/minecraft_server/plugins/dynmap/web/tiles/" )

url.rewrite-once += ( 
        "^/dynmap/up/(.*)" => "/up/$1",
        "^/dynmap/standalone/(.*)" => "/standalone/$1"
)

$HTTP["url"] =~ "^/up/" {
        proxy.server = ( "" => (( "host" => "127.0.0.1", "port" => 8123 )) )
}
$HTTP["url"] =~ "^/standalone/" {
        proxy.server = ( "" => (( "host" => "127.0.0.1", "port" => 8123 )) )
}
```

重启 lighttpd（`sudo /etc/rc.d/lighttpd restart`）

现在 <http://mywebserver/dynmap/> 网页地图应该就能正常显示在线玩家了，请记得保持更新。