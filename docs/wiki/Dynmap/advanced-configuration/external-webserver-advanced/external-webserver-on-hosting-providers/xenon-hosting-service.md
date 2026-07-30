# 在 Xenon 上托管 Dynmap（由 mavbear 所作）

许多人可能注意到，在 Xenon 或其他服务提供商上直接运行 Dynmap 似乎不太可行，尝试打开网页地图则会显示黑屏。本教程会通过几个简单步骤帮你缓解这个问题。需要有你自己的网页托管服务（我这里采用的是 1and1.com）。

首先，在这里下载最新版本的 Dynmap：<https://www.spigotmc.org/resources/dynmap.274/>——将插件和配置上传到 MC 服务器文件夹中。

解压上述文件，打开你的 FTP 应用（推荐 FileZilla），登入你的网页托管服务。你需要向网页托管服务注入一个 Xenon 禁止的 JS 文件。别忘记一并复制 `/js/` 文件夹外的 `config.js` 文件。随后记下指向这个文件夹的链接。

打开 `web/index.html` 文件。找到这段内容：

``` HTML
<script type="text/javascript" src="js/jquery.json.js"></script>
```

找到 `js/jquery.json.js`——你需要将其重命名为你的实际文件夹所在位置。

对所有 `js` 开头的标签进行这样的重复操作，对列表底部的 `config.js` 也是如此。

保存 `index.html` 文件，并将其上传至 MC 服务器的文件顶级目录。

之后，打开 `map.js`，前往 403 行（在 v0.70.1 版本是如此——可能随版本发生变化）：

``` JavaScript
loadjs('js/' + type + '.js', function() {
    // ...
}
```

将其改为：

``` JavaScript
loadjs('链接/js/' + type + '.js', function() {
    // ...
}
```

将 `map.js` 重新上传到网页托管服务（不是 MC 服务器）。

这样网页地图就可以看到其他玩家，也可以使用聊天功能，否则只能看到地图。

这部分是我（作者）自行摸索出来的解决方法。我可能会在稍后上传一个视频教程，希望这对你有帮助！