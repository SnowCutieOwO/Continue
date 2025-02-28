# 开发者 API

你可以通过 Maven 将 **ExcellentCrates** 导入你的项目。请将 `{版本}` 替换为下方显示的最新版本：

<center>

![img](https://repo.nightexpressdev.com/api/badge/latest/releases/su/nightexpress/excellentcrates/ExcellentCrates?color=40c14a&name=ExcellentCrates&prefix=v)

</center>


``` XML
<repository>
  <id>nightexpress-releases</id>
  <url>https://repo.nightexpressdev.com/releases</url>
</repository>

<dependency>
  <groupId>su.nightexpress.excellentcrates</groupId>
  <artifactId>ExcellentCrates</artifactId>
  <version>{VERSION}</version>
</dependency>
```

## 事件

* **CrateObtainRewardEvent** - 在玩家从宝箱中获取奖励时调用。
* **CrateOpenEvent** - 在玩家即将打开宝箱时调用。**可取消。**

## 数据交互

``` Java
CratesPlugin plugin = CratesAPI.getPlugin(); // ExcellentCrates 实例

UserManager userManager = CratesAPI.getUserManager(); // 用户管理.

CrateManager crateManager = CratesAPI.getCrateManager(); // 宝箱管理.

KeyManager keyManager = CratesAPI.getKeyManager(); // 钥匙管理.

CrateUser user = userManager.getUserData(Player player); // 获取玩家数据.
CrateUser user = userManager.getUserData(UUID playerId);
CrateUser user = userManager.getUserData(String playerName);
```
