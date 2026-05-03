# 默认 database.yml

``` YAML
  
database:
  
  # The Database version number. Do not change.
  version: '1'
  
  # Valid load and save types are: flatfile and mysql.
  database_load: flatfile
  database_save: flatfile
  
  # SQL database connection details (IF set to use mysql).
  sql:
    hostname: localhost
    port: '3306'
    dbname: towny
    table_prefix: towny_
    username: root
    password: ''
    flags: ?verifyServerCertificate=false&useSSL=false&useUnicode=true&characterEncoding=utf-8
  
    # Disables the warning when a backup is made about not all Towny data being backed up when mysql is in use.
    # Set this to true when you fully understand what not having flatfile backups means, if your mysql database were to become unusable and you have not configured your own backup solution.
    disable_backup_warning: 'false'
  
    # Modifiable settings to control the connection pooling.
    # Unless you actually know what you're doing and how Towny uses its mysql connection,
    # it is strongly recommended you do not change these settings.
    pooling:
      max_pool_size: '5'
      max_lifetime: '180000'
      connection_timeout: '5000'
```