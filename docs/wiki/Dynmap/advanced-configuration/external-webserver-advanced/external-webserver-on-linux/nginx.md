# Dynmap 与 Nginx

本文作者：cryptk

如下为一份在外置服务器（不代理到 Dynmap）的 nginx 网页服务器上正确设置 Dynmap 的示例配置。本章节假设：

* 文档根目录为 `/srv/dynmap`
* 你已经正确安装了 nginx，且知晓如何处理 PHP 内容（用于网页聊天）
* 你已经验证过内置网页服务器能通过 8123 端口正常使用

如下为我使用 Dynmap 时的 nginx 配置。我的 nginx 部署用到了 `php-fpm`，以及定义为 `php-fpm.sock` 的上游链接到 `php-fpm` 用于处理 php 内容。

``` apache
server {
    listen       80;
    server_name  minecraft.example.com;
    root         /srv/dynmap/;

    index index.html;

    access_log /var/log/nginx/minecraft.example.com-access_log;
    error_log /var/log/nginx/minecraft.example.com-error_log;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_index index.php;
        fastcgi_pass php-fpm-sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include /etc/nginx/fastcgi_params;
    }
}
```

这个配置会在 `server_name` 一行定义的链接根目录上运行 Dynmap 相关服务（修改对应内容）。在我的服务器上我也运行着（相当优秀的）multicraft 网页管理界面，通过 `/srv/multicraft` 的面板管理服务器。这里为我用于同时运行 multicraft 和 nginx 服务的配置，将它们通过 `/admin/` 的子链接分隔。


``` apache
server {
    listen       80;
    server_name  minecraft.example.com;
    root         /srv/dynmap/;

    index index.html;

    access_log /var/log/nginx/minecraft.example.com-access_log;
    error_log /var/log/nginx/minecraft.example.com-error_log;

    location / {
        try_files $uri $uri/ =404;
    }

    location /admin {
        alias /srv/multicraft/;
        index index.php;
    }

    location ~ ^/admin/(.*\.php)$ {
        alias /srv/multicraft/$1;
        fastcgi_pass php-fpm-sock;
        fastcgi_param SCRIPT_FILENAME $request_filename;
        include /etc/nginx/fastcgi_params;
    }

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_index index.php;
        fastcgi_pass php-fpm-sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include /etc/nginx/fastcgi_params;
    }
}
```

你需要确保完成了其他标准的外置网页服务器配置，以及 minecraft 用户正在运行，且有向 dynmap 文档根写入的权限，以及网页服务器有向 `standalone/dynmap_webchat.json` 文件写入的权限（这样网页聊天才能正常生效）。

如果你需要部署 nginx 与运行 php-fpm 的教程，我有一个自己的博客文章，讲到了如何让 wordpress 与 nginx、php-fpm、apc 与 varnish 共存（假设你的服务器为 Ubuntu）。这个文章可在这里浏览：http://www.cryptkcoding.com/2011/08/running-wordpress-with-nginx-php-fpm-apc-and-varnish/