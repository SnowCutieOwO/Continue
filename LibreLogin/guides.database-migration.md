# 数据库迁移

## 支持迁移的插件

*若你的插件尚未支持，请先注册一些随机的用户，密码统一为“testpassword”，然后将对应玩家的 MySQL 数据库通过站内私信或 Discord 发给我。*

<input type="checkbox" disabled="true" checked/> JPremium SHA256<br>
<input type="checkbox" disabled="true" checked/> AuthMe BCrypt<br>
<input type="checkbox" disabled="true" checked/> AuthMe SHA256<br>
<input type="checkbox" disabled="true" checked/> Aegis BCrypt<br>
<input type="checkbox" disabled="true" checked/> DynamicBungeeAuth SHA512<br>
<input type="checkbox" disabled="true" checked/> JPremium BCrypt<br>
<input type="checkbox" disabled="true"/> 在这里填上你的插件名称

## 迁移

此为数据库迁移的简短解释。

在 `config.conf` 中找到下面的配置并填写：

<!--
  这段内容需要改进：
  原因：Shiki 不支持渲染 HOCON 格式
-->

```
# 该部分用于配置其他插件迁移来的数据库设置。
# 请见维基获得更多信息：https://github.com/kyngs/LibreLogin/wiki/Database-Migration
migration {
    old-database {
        mysql {
            # 数据库的名称。
            database=librelogin
            # 数据库的端口。
            host=localhost
            # 数据库连接的最大持续时间。如果不知道该设置的作用，请勿乱动。
            max-life-time=600000
            # 数据库的密码。
            password=""
            # 数据库的端口。
            port=3306
            # 旧数据库表名。
            table=user-data
            # 数据库的用户名称。
            user=root
        }
        sqlite {
            # SQLite 数据库文件的路径. 填入插件所在文件夹的相对路径
            path="user-data.db"
        }
    }
    # 下次重启时迁移数据库。
    on-next-startup=false
    # 迁移类型。可填入的类型：
    # jpremium-mysql - 可用于转化 MySQL JPremium SHA256 与 BCrypt
    # authme-mysql - 可用于转化 MySQL AuthMe BCrypt 与 SHA256
    # authme-sqlite - 可用于转化 SQLite AuthMe BCrypt 与 SHA256
    # aegis-mysql - 可用于转化 MySQL Aegis BCrypt
    # dba-mysql - 可用于转化 MySQL DynamicBungeeAuth，其使用了 SHA-512
    # librelogin-mysql - 可用于转化 MySQL LibreLogin，迁移至不同数据库时很有用
    # librelogin-sqlite - 可用于转化 SQLite LibreLogin，迁移至不同数据库时很有用
    type=authme-sqlite
}
```

完成设置之后重启群组端，控制台就会出现有关的状态信息。

在迁移完成之后，关闭群组端，并将配置文件中 `on-next-startup` 选项改为 false。

现在，所有数据应已迁移完毕，若出现任何问题，请在 Github 提交议题。