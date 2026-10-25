# 📦 Maven

## 仓库

我们为所有 MMO 系列插件的 API 构建建立了一个 Maven 仓库。可以这样将其添加进你的仓库列表：

``` XML
<repository>
    <id>phoenix</id>
    <url>https://nexus.phoenixdevt.fr/repository/maven-public/</url>
</repository>
```

## 依赖引入

只需在 `pom.xml` 中填入如下内容即可将本插件作为依赖引入：

``` XML
<dependency>
    <groupId>net.Indyuce</groupId>
    <artifactId>MMOInventory-API</artifactId>
    <version>2.0-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```