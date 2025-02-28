# 开发者相关

## 安装

### Gradle

```Kotlin
repositories {
   maven { url 'https://jitpack.io' }
}
```
```Kotlin
dependencies {
    implementation 'com.github.titivermeesch:CommandTimer:<version>'
}
```

### Maven

```HTML
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>
```
```HTML

<dependency>
    <groupId>com.github.titivermeesch</groupId>
    <artifactId>CommandTimer</artifactId>
    <version>version</version>
</dependency>
```

## 用法
与本插件最合适的交互方式为拓展模块。若某个要用到的功能不能用这个方法实现，那么就需要用到 CommandTimer API。

**API 尚不存在文档，现在若要交互，你可能需要阅读源码**

## 贡献
如果找到了插件或文档的问题并想改进之，你可以来我们的 Github 提交合并请求！