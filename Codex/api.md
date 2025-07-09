# API

## 使用教程

若要使用并集成 Codex API，首先你需要创建一个插件项目并导入 Codex.jar 作为外部依赖文件，或使用 maven 并在你的 pom.xml 文件中设置如下内容。

``` XML
<repository>
  <id>jitpack.io</id>
  <url>https://jitpack.io</url>
</repository>

<dependency>
  <groupId>com.github.ajneb97</groupId>
  <artifactId>Codex</artifactId>
  <version>2.0.1</version>
  <scope>provided</scope>
</dependency>
```

同时也要在你的插件 `plugin.yml` 文件中设置 `depend` 或 `softdepend`！

## 方法

你可以通过 **CodexAPI** 类访问所有 API 静态方法。