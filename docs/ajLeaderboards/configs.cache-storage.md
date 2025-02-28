# 缓存存储配置

此为默认的缓存配置。你可以用它来设置本插件缓存的存储方式。

```YAML
# In this file, you can control where the cache is stored.

# The method to use. h2 or mysql
# If you select mysql, you will need to configure the settings below
#  Default: h2
method: h2

# You only need to touch these settings if you are using mysql
ip: 127.0.0.1:3306
username: mc
password: password
database: mc

# Currently only used with mysql
characterEncoding: "utf8"

# Note that if you change this after already saving data in the db, ajleaderboards will not be able to see it.
# In this case, you should either stick with the default or go through and rename the tables to use the new prefix
table_prefix: ajlb_

# These settings are for mysql only
# If you dont know what these are for, I reccomend leaving them as default
minConnections: 1
maxConnections: 20

allowPublicKeyRetrieval: false
useSSL: false

# Dont touch me
config-version: 5
```