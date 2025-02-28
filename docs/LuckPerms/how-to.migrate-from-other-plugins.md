# 迁移

LuckPerms 可以从其他插件转移权限数据 —— 我们叫它“迁移”。

### 介绍

需要注意的是迁移脚本并不完美。它在*大部分情况下*可以正常运作并完好转化所有数据。但是，所有数据不是一样的，其中也会有一些我不曾预料到的情况。

LuckPerms 也有与其他权限插件的相似之处。但是有些部分是基本不同的，所以迁移数据会显得有些麻烦。

除此之外，迁移所有数据意味着你失去了学习本插件命令的大好机会。这可能会埋下隐患。😉如果你正在将 PermissionsEx 或 GroupManager 的插件数据迁移至此，这个页码或许能帮到你。

若你正在导入的权限时间久远，或是觉得不满意，现在是一个重构和清理权限数据的大好机会，与此同时还能学习 LuckPerms 的命令！

#### 支持的插件

支持从下列插件迁移数据：

* GroupManager
* PermissionsEx（仅 Bukkit/Spigot）
* zPermissions
* bPermissions
* PermissionsBukkit
* PowerRanks
* UltraPermissions
* BungeePerms（只能在群组服上执行迁移命令）

## 过程

迁移过程非常简单，但在不同平台上略有差异。

### 第一步：安装 LuckPerms

首先，你需要[安装 LuckPerms](install-on-a-single-server.md)。先不要删除旧权限插件。

确保你的旧权限插件还在运作。如果旧权限数据损坏，迁移将不能进行。

若你想要切换[存储类型](storage.md)，例如，转化为 mysql，现在做这事情最简单。若你需要在迁移后切换存储种类，则需要遵守“[切换存储类型](how-to.switch-storage-types.md)”中的操作指示。

### 第二步：安装迁移插件

在下列的表格中按对应的权限插件安装迁移程序。将其一并放入插件文件夹下。

|权限插件|迁移程序|迁移命令|
|---|---|---|
|GroupManager|[luckperms-migration-groupmanager.jar](https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/groupmanager/build/libs/luckperms-migration-groupmanager.jar)|`/migrate-groupmanager`|
|PermissionsEx|[luckperms-migration-permissionsex.jar](https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/permissionsex/build/libs/luckperms-migration-permissionsex.jar)|`/migrate-permissionsex`|
|zPermissions|[luckperms-migration-zpermissions.jar](https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/zpermissions/build/libs/luckperms-migration-zpermissions.jar)|`/migrate-zpermissions`|
|bPermissions|[luckperms-migration-bpermissions.jar](https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/bpermissions/build/libs/luckperms-migration-bpermissions.jar)|`/migrate-bpermissions`|
|PermissionsBukkit|[luckperms-migration-permissionsbukkit.jar](https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/permissionsbukkit/build/libs/luckperms-migration-permissionsbukkit.jar)|`/migrate-permissionsbukkit`|
|PowerRanks|[luckperms-migration-powerranks.jar](https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/powerranks/build/libs/luckperms-migration-powerranks.jar)|`/migrate-powerranks`|
|UltraPermissions|[luckperms-migration-ultrapermissions.jar](https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/ultrapermissions/build/libs/luckperms-migration-ultrapermissions.jar)|`/migrate-ultrapermissions`|
|BungeePerms|[luckperms-migration-bungeeperms.jar](https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/bungeeperms/build/libs/luckperms-migration-bungeeperms.jar)|`/migrate-bungeeperms`|

### 第三步：重启服务器，执行迁移命令

重启服务器来正确载入旧权限插件、LuckPerms 以及迁移程序。

然后，进入服务器控制台，并执行上述对应的迁移命令。

稍事等待，让 LuckPerms 处理剩下的事情！你可以在控制台界面看到迁移进度，并在完成之后收到提醒。

在完成迁移后，关闭服务器并移除旧权限插件与迁移程序，然后再重启服务器。

若你正在从 GroupManager 或 PermissionsEx 迁移至本插件，那么[这里](reference.migrating-from-gm-or-pex.md)会有更多你需要的信息！