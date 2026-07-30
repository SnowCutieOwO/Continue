import{_ as e,C as a,c as l,o as t,aa as h,G as n}from"./chunks/framework.Cn7WEiMX.js";const y=JSON.parse('{"title":"Dynmap 与 Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/Dynmap/advanced-configuration/external-webserver-advanced/external-webserver-on-linux/nginx.md","filePath":"wiki/Dynmap/advanced-configuration/external-webserver-advanced/external-webserver-on-linux/nginx.md"}'),E={name:"wiki/Dynmap/advanced-configuration/external-webserver-advanced/external-webserver-on-linux/nginx.md"};function r(k,s,c,d,o,g){const i=a("NolebaseGitContributors"),p=a("NolebaseGitChangelog");return t(),l("div",null,[s[0]||(s[0]=h(`<h1 id="dynmap-与-nginx" tabindex="-1">Dynmap 与 Nginx <a class="header-anchor" href="#dynmap-与-nginx" aria-label="Permalink to &quot;Dynmap 与 Nginx&quot;">​</a></h1> <p>本文作者：cryptk</p> <p>如下为一份在外置服务器（不代理到 Dynmap）的 nginx 网页服务器上正确设置 Dynmap 的示例配置。本章节假设：</p> <ul><li>文档根目录为 <code>/srv/dynmap</code></li> <li>你已经正确安装了 nginx，且知晓如何处理 PHP 内容（用于网页聊天）</li> <li>你已经验证过内置网页服务器能通过 8123 端口正常使用</li></ul> <p>如下为我使用 Dynmap 时的 nginx 配置。我的 nginx 部署用到了 <code>php-fpm</code>，以及定义为 <code>php-fpm.sock</code> 的上游链接到 <code>php-fpm</code> 用于处理 php 内容。</p> <div class="language-apache vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">apache</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    listen       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server_name  minecraft.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    root         /srv/dynmap/;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    index index.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    access_log /var/log/nginx/minecraft.example.com-access_log;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    error_log /var/log/nginx/minecraft.example.com-error_log;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location / {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        try_files $uri $uri/ =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location ~ \\.php$ {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        try_files $uri =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fastcgi_index index.php;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fastcgi_pass php-fpm-sock;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        include /etc/nginx/fastcgi_params;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这个配置会在 <code>server_name</code> 一行定义的链接根目录上运行 Dynmap 相关服务（修改对应内容）。在我的服务器上我也运行着（相当优秀的）multicraft 网页管理界面，通过 <code>/srv/multicraft</code> 的面板管理服务器。这里为我用于同时运行 multicraft 和 nginx 服务的配置，将它们通过 <code>/admin/</code> 的子链接分隔。</p> <div class="language-apache vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">apache</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    listen       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server_name  minecraft.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    root         /srv/dynmap/;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    index index.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    access_log /var/log/nginx/minecraft.example.com-access_log;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    error_log /var/log/nginx/minecraft.example.com-error_log;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location / {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        try_files $uri $uri/ =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location /admin {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        alias /srv/multicraft/;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        index index.php;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location ~ ^/admin/(.*\\.php)$ {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        alias /srv/multicraft/$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fastcgi_pass php-fpm-sock;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fastcgi_param SCRIPT_FILENAME $request_filename;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        include /etc/nginx/fastcgi_params;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location ~ \\.php$ {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        try_files $uri =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fastcgi_index index.php;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fastcgi_pass php-fpm-sock;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        include /etc/nginx/fastcgi_params;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>你需要确保完成了其他标准的外置网页服务器配置，以及 minecraft 用户正在运行，且有向 dynmap 文档根写入的权限，以及网页服务器有向 <code>standalone/dynmap_webchat.json</code> 文件写入的权限（这样网页聊天才能正常生效）。</p> <p>如果你需要部署 nginx 与运行 php-fpm 的教程，我有一个自己的博客文章，讲到了如何让 wordpress 与 nginx、php-fpm、apc 与 varnish 共存（假设你的服务器为 Ubuntu）。这个文章可在这里浏览：<a href="http://www.cryptkcoding.com/2011/08/running-wordpress-with-nginx-php-fpm-apc-and-varnish/" target="_blank" rel="noreferrer">http://www.cryptkcoding.com/2011/08/running-wordpress-with-nginx-php-fpm-apc-and-varnish/</a></p> `,18)),n(i),n(p)])}const _=e(E,[["render",r]]);export{y as __pageData,_ as default};
