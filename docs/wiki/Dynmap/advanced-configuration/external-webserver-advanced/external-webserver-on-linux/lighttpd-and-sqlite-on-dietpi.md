# 附带 DietPi 的树莓派上通过 Lighttpd 与 SQLite 运行 Dynmap 服务

假设你已经安装并配置好了 lighttpd 与 PHP。

我使用的是 PaperMC，因此你也最好用这个。

我选择的是 SQLite，它会将图块保存在一个大文件里，相较存有超过几十万个图块文件的文件夹在备份上更好。

MySQL/MariaDB 配置大致类似，只有 configuration.txt 中的 `url:` 部分略有差别。你可以在维基其他部分找到有关的解释。

前两步已经在[这里](../../../setup/web-setup/external-webserver-basics.md)有所提及，不多赘述。

之后，我们需要在 configuration.txt 里额外进行一些修改：

搜索并修改如下内容：

``` YAML
storage:
  #type: filetree
  # SQLite db for map storage (uses dbfile as storage location)
    type: sqlite
    dbfile: dynmap.db
  # MySQL DB for map storage (at 'hostname':'port' with flags "flags" in database 'database' using user 'userid' password 'password' and table prefix 'prefix')
  # type: mysql
  # hostname: localhost
  # port: 3306
  # database: MyDynmapDatabase
  # userid: dynmapwebserver
  # password: oldschool 
  # prefix: "dyn_"
  # flags: "?allowReconnect=true" 
```

以及：

``` YAML
url:
    # configuration URL
      configuration: "standalone/dynmap_config.json?={timestamp}"
    # update URL
      update: "standalone/dynmap_{world}.json?={timestamp}"
    # sendmessage URL
      sendmessage: "standalone/sendmessage.php"
    # login URL
      login: "standalone/login.php"
    # register URL
      register: "standalone/register.php"
    # tiles base URL
      tiles: "standalone/SQLite_tiles.php?tile="
    # markers base URL
      markers: "standalone/SQLite_markers.php?marker=" 
```

启动服务器，检查 latest.log 里是否有报错。若有，则将 `web` 文件夹的内容复制到 lighttpd 网页服务器中，例如 `/var/www/dynmap`（根目录为 `www/` 时，有时为 `/var/www/html`，请以 `/etc/lighttpd/lighttpd.conf` 配置中的内容为准）。

确保文件拥有者为 `papermc:papermc`，且 `standalone` 文件夹拥有对应权限：

``` bash
sudo chown -R papermc:papermc /var/www/dynmap
sudo chmod -R 770 /var/www/dynmap/standalone
```

然后将用户 `papermc` 添加至 `www-data` 组：

``` bash
sudo usermod -a -G www-data papermc
```

现在打开浏览器，输入网址，例如 <https://你的服务器网址/dynmap/>，应该就能正常访问了。