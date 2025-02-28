# 自托管网页界面

LuckPerms 有许多内置的在线编辑器/浏览器。它们不需要自托管，所有人都可部署的公开版本可以在如下链接找到：

* https://luckperms.net/editor/
* https://luckperms.net/verbose/
* https://luckperms.net/treeview/
* https://bytebin.lucko.me/

但是，我们也欢迎那些有兴趣自托管这些网站的用户，这样他们就可以个性化或加入自定义内容。虽然我们不推荐这么干（回报不大）—— 但我们还是会提供给你相关内容。

本教程假定你已经有一些在 Linux 服务器上搭建（网页）应用的经验。

## 第一步：安装 bytebin

你要做的第一件事就是安装并配置 bytebin 的拷贝。这能够让 LuckPerms 在插件的数据和网页浏览器（使用网页时）传递数据。

若你只想要自定义界面，你可以跳过这一步，但如果你想要完全自托管整个系统，这个步骤是必要的。

bytebin 的源码在 https://github.com/lucko/bytebin —— 你可以用 [Maven](https://maven.apache.org/) 通过 `mvn clean package` 进行编译 —— 构建成品会输出在 `/target/` 中。

相似地，你可以在这里下载预构建的二进制文件：https://ci.lucko.me/job/bytebin/

```
mkdir bytebin
cd bytebin
curl -O https://ci.lucko.me/job/bytebin/lastSuccessfulBuild/artifact/target/bytebin.jar
touch config.json
```

之后，打开新创建的 `config.json` 文件，并加入下文内容：

```JSON
{
  "host": "127.0.0.1",
  "port": 8080,
  "keyLength": 10,
  "lifetimeMinutes": 10080,
  "maxContentLengthMb": 10
}
```

`host` 和 `port` 指定了实例监听的地址。`keyLength` 则为生成的数据 token 长度。`lifetimeMinutes` 则是内容的有效时间。`maxContentLengthMb` 则为上传文件的最大大小。

这里还有额外的配置选项，允许你自定义读/写操作的速率限制，但这些内容超出了本章的范围。对应的变量可以在[这里](https://github.com/lucko/bytebin/blob/bf7b4dc2f8cdfd912b8acd71f0a347da3c481838/src/main/java/me/lucko/bytebin/Bytebin.java#L192-L200)找到。

之后，你可能需要在反代中建立 bytebin 示例。下文为 [nginx](https://www.nginx.com/) 的示例。

```nginx
server {
    listen 80;
    listen 443;

    server_name bytebin.example.com;

    client_max_body_size 30M;
    client_body_timeout 60s;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect http:// https://;

        proxy_pass http://127.0.0.1:8080;
    }
}
```

现在你可以使用 `java -jar bytebin.jar` 启动服务器 —— 内容应该在 `https://bytebin.example.com/` 中可用。

## 第二步：安装网站

网站应用的源码可在 Github 中找到：https://github.com/LuckPerms/LuckPermsWeb

你需要在你自己的网络服务器上自行构建和托管这个网站。你可以选择使用[自动构建脚本](https://github.com/LuckPerms/web-installer#automatic-setup)或[手动安装](https://github.com/LuckPerms/web-installer#manual-setup)。

## 第三步：配置插件来使用自己的 bytebin / 网站

将下文内容添加至 LuckPerms 的 `config.yml` 末尾：

```YAML
web-editor-url: 'https://example.com/luckperms/editor/'
verbose-viewer-url: 'https://example.com/luckperms/verbose/'
tree-viewer-url: 'https://example.com/luckperms/treeview/'

# only required if you did Step 1
bytebin-url: 'https://bytebin.example.com/'
```