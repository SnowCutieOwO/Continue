# 配置文件

<!--
  这段内容需要改进：
  原因：Shiki 不支持渲染 HOCON 格式
-->

``` toml
#  !!文件为 HOCON 格式!!
#  HOCON 格式与 JSON 相似，但有一些额外特征。
#  你可以在 Sponge 维基中找到更多信息：
#  https://docs.spongepowered.org/stable/en/server/getting-started/configuration/hocon.html
#  ----------------------------------------------------------------------------------------
#  LibreLogin 配置文件
#  ----------------------------------------------------------------------------------------
#  此为 LibreLogin 的配置文件.
#  你可以在 Github 页面找到本插件的更多信息：
#  https://github.com/kyngs/LibreLogin

# !!!该部分仅影响 PAPER!!!
# 验证玩家在连接至 Mojang 时的 IP 与他们进入服务器时的 IP 是否匹配。禁用该功能会导致安装在代理/VPN下群组的本插件无法正常工作。
allow-proxy-connections=true
# 玩家未登录时能使用的命令
allowed-commands-while-unauthorized=[
    login,
    register,
    "2fa",
    "2faconfirm",
    l,
    log,
    reg,
    resetpassword,
    confirmpasswordreset
]
# 是否允许带有正版名称的玩家自动注册？
# !!离线玩家将因此无法注册正版玩家名称!!
auto-register=false
# 该部分用于 MySQL 的数据库配置。
database {
    properties {
        mysql {
            # 数据库名称。
            database=librelogin
            # 数据库域名。
            host=localhost
            # 数据库的 JDBC URL。如果不知道这部分的功能，请勿乱动。 (使用的 jdbc:mariadb 也适用于纯 mysql)
            jdbc-url="jdbc:mariadb://%host%:%port%/%database%?autoReconnect=true&zeroDateTimeBehavior=convertToNull"
            # 数据库连接的最大持续时间。如果不知道这部分的功能，请勿乱动。
            max-life-time=600000
            # 数据库的密码。
            password=""
            # 数据库的端口。
            port=3306
            # 数据库的用户名。
            user=root
        }
        postgresql {
            # 数据库名称。
            database=librelogin
            # 数据库域名。
            host=localhost
            # 数据库连接的最大持续时间。如果不知道这部分的功能，请勿乱动。
            max-life-time=600000
            # 数据库的密码。
            password=""
            # 数据库的端口。
            port=5432
            # 数据库的用户名。
            user=root
        }
        sqlite {
            # SQLite 数据库文件的路径. 填入插件所在文件夹的相对路径
            path="user-data.db"
        }
    }
    # 数据库的类型。可用的内置类型：
    # librelogin-mysql - MySQL 数据库，需要填写下面的 mysql 部分内容。
    # librelogin-postgresql - PostgreSQL 数据库，需要填写下面的 postgresql 部分内容。
    # librelogin-sqlite - SQLite 数据库，默认文件为 "database.db"。你可以在下面的 sqlite 部分进行修改。
    type=librelogin-sqlite
}
# 是否启用调试模式？这会在控制台中输出一些信息。
debug=false
# 默认证书提供者。用于加密密码。可用提供者：
# SHA-256 - 过时，不推荐。出于兼容考虑而保留。
# SHA-512 - 相较 SHA-256 更安全，但仍不推荐。出于兼容考虑而保留。
# BCrypt-2A - 相对较新，更安全，推荐。
# Argon-2ID - 最新，比 BCrypt-2A 安全，但可能会导致服务器卡顿。
default-crypto-provider=BCrypt-2A
# !!使用 Paper 时该设置无效!! 如果玩家进入的服务器关闭，是否自动返回大厅？若设置为 false，他们将会被踢出。
fallback=false
# 默认情况下选择大厅/登录服时，LibreLogin 会主动排除满员服。
# 部分情况下可能不会按预期工作。在这种情况下，你可以启用该选项，可无视后端服务器 ping 显示的最大玩家数。
ignore-max-players-from-backend-ping=false
# 同一个 IP 地址可注册的最大账号数量。
# 设置为不大于 0 的数字可将其禁用。
# !!不推荐!! 因缺乏 IPv4 的地址，部分村庄或地区可能会共享一个 IP。
ip-limit=-1
# 未登录时玩家所处的世界/服务器。在 Paper 服务端中，玩家会生成在世界的出生点。填入的服务器必须在群组服核心配置中注册。在使用 Paper 的情况下，填入世界必须存在。
limbo=[
    limbo0,
    limbo1
]
# !!使用 Paper 时该设置无效!! 登录服务器绑定的端口号。
limbo-port-range="30000-40000"
# !!使用 Paper 时，请将世界全部放入 "root" 下!!
# 在 Paper 服务端中，玩家会生成在世界的出生点。
# 
# 在完成登录后传送至的服务器。对应服务器必须在群组配置文件中注册。
# 配置允许设置强制端口。在 "root" 内的服务器为非强制端口进入的玩家所使用。请使用 § 而非正常的点.
# 另见：https://github.com/kyngs/LibreLogin/wiki/Configuring-Forced-Hosts
lobby {
    root=[
        lobby1,
        lobby0
    ]
}
mail {
    # 验证邮箱的发送者。
    email="email@something.com"
    # 是否启用邮箱找回功能？
    enabled=false
    # SMTP 服务器的域名。
    host="smtp.gmail.com"
    # 登入 SMTP 服务器的密码。推荐使用不重复的一次性密码。
    password=password
    # SMTP 服务器的端口号。
    port=587
    # 邮件的发送者。
    sender="LibreLogin Network"
    # 登入 SMTP 服务器所使用的用户名称。
    username=username
}
# 当密码输入错误大于一定次数时踢出玩家。设置为 -1 表示禁用该功能。
max-login-attempts=-1
# 该部分用于配置其他插件迁移来的数据库设置。
# 请见维基获得更多信息：https://github.com/kyngs/LibreLogin/wiki/Database-Migration
migration {
    old-database {
        mysql {
            # 数据库的名称。
            database=librelogin
            # 数据库的端口。
            host=localhost
            # 数据库的 JDBC URL。如果不知道该设置的作用，请勿乱动。（对纯 mysql 请使用 jdbc:mariadb）
            jdbc-url="jdbc:mariadb://%host%:%port%/%database%?autoReconnect=true&zeroDateTimeBehavior=convertToNull"
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
        postgresql {
            # 数据库的名称。
            database=librelogin
            # 数据库的端口。
            host=localhost
            # 数据库连接的最大持续时间。如果不知道该设置的作用，请勿乱动。
            max-life-time=600000
            # 数据库的密码。
            password=""
            # 数据库的端口。
            port=5432
            # 旧数据库表名.
            table=user-data
            # 数据库用户名.
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
    # authme-postgresql - 可用于转化 PostgreSQL AuthMe BCrypt 与 SHA256
    # aegis-mysql - 可用于转化 MySQL Aegis BCrypt
    # dba-mysql - 可用于转化 MySQL DynamicBungeeAuth，其使用了 SHA-512
    # nlogin-sqlite - 可用于转化 SQLite NLogin SHA512
    # nlogin-mysql - 可用于转化 MySQL NLogin SHA512
    # loginsecurity-mysql - 可用于转化 MySQL LoginSecurity BCrypt
    # loginsecurity-sqlite - 可用于转化 SQLite LoginSecurity BCrypt
    # fastlogin-sqlite - 可用于转化 SQLite FastLogin, !!请先运行 Authme 迁移程序!!
    # fastlogin-mysql - 可用于转化 MySQL FastLogin, !!请先运行 Authme 迁移程序!!
    # limboauth-mysql - 可用于转化 MySQL LimboAuth BCrypt 与 SHA256
    # authy-mysql - 可用于转化 MySQL Authy SHA256
    # authy-sqlite - 可用于转化 SQLite Authy SHA256
    # logit-mysql - 可用于转化 MySQL LogIt SHA256
    # librelogin-mysql - 可用于转化 MySQL LibreLogin，迁移至不同数据库时很有用
    # librelogin-sqlite - 可用于转化 SQLite LibreLogin，迁移至不同数据库时很有用
    type=authme-sqlite
}
# 重置登录尝试的时间。即玩家等待登录请求过期的时间。每次加入都会重置这个计时器。
milliseconds-to-refresh-login-attempts=10000
# 未登录时提醒玩家登录的时间间隔。设置为任意负数可将其禁用。
# 包括但不限于：
# - 聊天栏消息
# - 标题
milliseconds-to-refresh-notification=10000
# 密码最小长度。设置为任意负数可将其禁用。
minimum-password-length=-1
# 玩家名称最大长度。仅对新玩家生效，设置为负数可将其禁用。
minimum-username-length=-1
# 设置新玩家创建时使用的 UUID 创建器。
# 见维基获取更多信息：https://github.com/kyngs/LibreLogin/wiki/UUID-Creators
# 可用创建器：
# RANDOM - 生成随机 UUID
# CRACKED - 基于玩家名称生成随机 UUID，与离线模式服务器中玩家 UUID 生成方式相同
# MOJANG - 若玩家存在于 Mojang 的数据库则使用该 UUID，否则使用离线 UUID 生成。
new-uuid-creator=CRACKED
# !!使用 Paper 时该设置无效!! 是否在服务器在线时向其发送 ping 请求并获取玩家数量？如果禁用，对服务器发送 ping 请求的消息仍然会在控制台中显示。
ping-servers=false
# 用于解决数据冲突的方法。可用设置：
# BLOCK - 以 "kick-name-mismatch" 对应的消息踢出玩家。管理员需手动解决该问题。
# USE_OFFLINE - 使用离线数据。在两个玩家加入时，他们会被要求登录并能用离线玩家的密码登录。离线玩家随后需要修改他们的名称来转移账户数据。需要注意的是，修改名称有 30 天的冷却期。
# OVERWRITE - 正版玩家数据将会覆盖离线玩家的数据。这会不可逆地删除后者的所有数据。!!谨慎使用; 可能导致玩家滥用!!
profile-conflict-resolution-strategy=BLOCK
# 是否记住玩家上一次游戏所在的服务器/世界？不推荐大型服务器启用该设置。
remember-last-server=false
# 配置文件修订版本号。 !!请勿乱动!!
revision=8
# 设置登录/注册的时间限制，单位为秒。设置为任意负数可将其禁用。
seconds-to-authorize=-1
# 设置玩家会话过期的时间。默认值为一周 (604800 秒)。设置为不大于 0 的数可禁用会话。
session-timeout=0
# 该部分为二步验证配置。
# !! 需要安装 Protocolize 才可使用该功能 !!
# 
# 可以在维基找到更多信息：https://github.com/kyngs/LibreLogin/wiki/2FA
totp {
    # 玩家显示二维码地图的延迟。如果消失过快可考虑将该项值调大。
    delay=1000
    # 是否启用基于 TOTP 的二步验证？如果你不知道这是什么，这是一种使用了诸如谷歌登录等软件的二步验证方法。
    # 强烈推荐你阅读维基: https://github.com/kyngs/LibreLogin/wiki/2FA
    enabled=true
    # 在二步验证软件中显示的名称。请将此项修改为服务器名称。
    label="LibreLogin Network"
}
# 是否在玩家等待登录时在 ActionBar 上显示登录信息。
use-action-bar=false
# 是否在玩家等待登录时在 BossBar 上显示登录信息。
use-titles=true
```