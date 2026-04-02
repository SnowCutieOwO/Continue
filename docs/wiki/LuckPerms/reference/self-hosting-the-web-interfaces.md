# 自托管网页界面

LuckPerms 有许多内置的在线编辑器/浏览器。它们不需要自托管，适合服主与用户直接使用，所有人都可部署的公开版本可以在如下链接找到：

* https://luckperms.net/editor/
* https://luckperms.net/verbose/
* https://luckperms.net/treeview/

一直以来都有许多想要自托管的用户。不过大体上讲，**非常不建议这么干**，但鉴于代码开源，我们也欢迎经验丰富的服主参与。下面这些内容可以帮助你快速开始。

同时你还需要准备：

* 一台用于托管的 Linux 服务器
* 一个域名
* 设置过的 DNS 记录
* TLS 证书

等等内容。以及伴随这些有趣内容的相关工作，比如：修复、维护、防护。

## 在服务器上部署 LuckPermsWeb 网栈

在服务器中输入如下命令：

``` bash
git clone git@github.com:LuckPerms/LuckPermsWeb.git
cd LuckPermsWeb
docker compose up -d
```

这会把实例开放到 `8080` 端口。

这个时候，你就可以从 `http://<你的服务器 IP>:8080` 进入界面——但这还不是很安全，所以你的下一步就是要把它放入反向代理（例如 NGINX），然后配置一个域名和 DNS，最后是 TLS 证书。这些远远超出了这个教程所能讲述的内容。

## 让插件使用自定义网栈

假设你的网站网址是 `https://luckperms.yourdomain.com/`：

那么你需要在 LuckPerms 中 `config.yml` 的末尾添加这些内容。

``` YAML
bytebin-url: https://luckperms.yourdomain.com/data/
bytesocks-url: https://luckperms.yourdomain.com/ws/

web-editor-url: https://luckperms.yourdomain.com/editor/
verbose-viewer-url: https://luckperms.yourdomain.com/verbose/
tree-viewer-url: https://luckperms.yourdomain.com/treeview/
```