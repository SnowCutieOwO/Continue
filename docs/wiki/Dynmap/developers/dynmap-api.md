# Dynmap API

此章节包含的 Dynmap API 并非全部内容。你需要拥有对 Java 的基础知识，了解 Dynmap 非 API 部分的用法。

## 添加依赖

将 Dynmap API 作为依赖添加至 Maven 或 Gradle 项目

### Gradle

``` groovy
repositories {
    maven { url = "https://repo.mikeprimm.com/" }
}

dependencies {
    compileOnly "us.dynmap:DynmapCoreAPI:3.7-beta-6"
}
```

### Maven

``` XML
    <repositories>
        <repository>
            <id>MikeRepo</id>
            <url>https://repo.mikeprimm.com/</url>
        </repository>
    </repositories>
    <dependencies>
        <dependency>
            <groupId>us.dynmap</groupId>
            <artifactId>DynmapCoreAPI</artifactId>
            <version>3.7-beta-6</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
```

## 注册依赖

确保在你面向的平台上注册对应的依赖。

### Bukkit

对于 Bukkit 系服务端，你应该在 plugin.yml 中将 Dynmap 加入 `depend`（硬依赖）或 `softdepend`（软依赖）中。

``` YAML title="plugin.yml"
depend:
  - dynmap
```

## 与 Dynmap API 交互

通过静态方法 `DynmapCommonAPIListener.register` 注册一个 `DynmapCommonAPIListener` 的实例。Dynmap 插件或模组会在启用后调用 `apiEnabled(DynmapCommonAPI api)` 方法。

DynmapCommonAPIListener 相关链接：<https://github.com/webbukkit/dynmap/blob/v3.0/DynmapCoreAPI/src/main/java/org/dynmap/DynmapCommonAPIListener.java>

## 与 markerAPI 交互

``` Java
MarkerSet markerAPI = api.getMarkerAPI();
```

## 标记相关

创建新标记点之前，你需要一个 MarkerSet。可以选择已有的 MarkerSet，也可以新建一个。

### 新建 MarketSet

``` Java
MarkerSet set = markerAPI.createMarkerSet(
    /* Marker set ID */                 "setId",
    /* Marker set label */              "Display Name",
    /* Set of permitted marker icons */ null,
    /* Is marker set persistent */      false
);            
```

通过 MarkerSet 示例，你可以修改属性。你可以使得标点组默认隐藏，设置层级优先级，最小与最大缩放等级。对此的完整引用请自行参考 Marker 接口的代码。

### 访问已有的 MarkerSet

``` Java
MarkerSet set = markerAPI.getMarkerSet("setId");
```

### 访问标点图标

``` Java
MarkerIcon icon = markerAPI.getMarkerIcon("building");
```

### 注册新标点图标

``` Java
MarkerIcon icon = markerAPI.createMarkerIcon("id", "title", inputStream);           
```

若要从 `.png` 格式的文件接收输入流，你可以使用这个方法：

``` Java
plugin.getResource("myicon.png");
```

### 新建标点

``` Java
String htmlLabel = "<div>Hello World</div>"
Marker marker = set.createMarker(
    /* 标记点 ID */                  "uniqueMarkerId",
    /* 标记点标签 */               htmlLabel,
    /* 是否将标签按 HTML 格式解析 */      true,
    /* 标记点显示的世界 */ "world",
    /* X 轴坐标 */               10,
    /* Y 轴坐标 */               20,
    /* Z 轴坐标 */               30,
    /* 相关的 MarkerIcon 对象 */  icon,
    /* 是否持久化 */       false
);
```