# API 用法

## Maven & Gradle 示例

JavaDocs：https://intellectualsites.github.io/fastasyncworldedit-javadocs/

原本的 WorldEdit 文档大部分仍适用于 FAWE，你可以通过此链接访问：https://worldedit.enginehub.org/en/latest/api/index.html （[站内译文链接点此](/WorldEdit/developer-api.main.md)）

非常建议异步执行 FAWE 的操作。在主线程正确调用 FAWE API 可能会导致线程堵塞。`Operations#complete`（以及其他 `Operations` 方法）会产生此情况，以及 `EditSession#close`。若你想要编辑完毕后执行操作，请确保对应代码通过 close() 关闭了 EditSession，或 try-with-resources 等。请确保 EditSessions 在进行其他操作时正确关闭，同时请不要重复使用 EditSessions，否则应用的改动可能不会完成。

::: info

API 在开发时需要 Java 21。请确保将你的工具链指向 Java 21。

:::

若你需要的是快照版本，请将 S01 OSS Sonatype 仓库添加至仓库部分配置。


### Gradle - FAWE 核心

``` Kotlin
repositories {
    mavenCentral()
    maven("https://repo.papermc.io/repository/maven-public/")
    maven("https://maven.enginehub.org/repo/")
}

dependencies {
    implementation(platform("com.intellectualsites.bom:bom-newest:1.52")) // Ref: https://github.com/IntellectualSites/bom 
    compileOnly("com.fastasyncworldedit:FastAsyncWorldEdit-Core")
}
```

### Gradle - FAWE Bukkit 及核心

``` Kotlin
repositories {
    mavenCentral()
    maven("https://repo.papermc.io/repository/maven-public/")
    maven("https://maven.enginehub.org/repo/")
}

dependencies {
    implementation(platform("com.intellectualsites.bom:bom-newest:1.52")) // Ref: https://github.com/IntellectualSites/bom 
    compileOnly("com.fastasyncworldedit:FastAsyncWorldEdit-Core")
    compileOnly("com.fastasyncworldedit:FastAsyncWorldEdit-Bukkit") { isTransitive = false }
}
```

### Maven - FAWE 核心

``` XML
<repositories>
    <repository>
        <id>papermc</id>
        <url>https://repo.papermc.io/repository/maven-public/</url>
    </repository>
    <repository>
        <id>enginehub</id>
        <url>https://maven.enginehub.org/repo/</url>
    </repository>
</repositories>
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.intellectualsites.bom</groupId>
            <artifactId>bom-newest</artifactId> <!-- 参考: https://github.com/IntellectualSites/bom -->
            <version>1.52</version>
            <scope>import</scope>
            <type>pom</type>
        </dependency>
    </dependencies>
</dependencyManagement>
<dependency>
  <groupId>com.fastasyncworldedit</groupId>
  <artifactId>FastAsyncWorldEdit-Core</artifactId>
  <scope>provided</scope>
</dependency>
```

### Maven - FAWE Bukkit 及核心

``` XML
<repositories>
    <repository>
        <id>papermc</id>
        <url>https://repo.papermc.io/repository/maven-public/</url>
    </repository>
    <repository>
        <id>enginehub</id>
        <url>https://maven.enginehub.org/repo/</url>
    </repository>
</repositories>
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.intellectualsites.bom</groupId>
            <artifactId>bom-newest</artifactId> <!-- 参考: https://github.com/IntellectualSites/bom -->
            <version>1.52</version>
            <scope>import</scope>
            <type>pom</type>
        </dependency>
    </dependencies>
</dependencyManagement>
<dependencies>
    <dependency>
      <groupId>com.fastasyncworldedit</groupId>
      <artifactId>FastAsyncWorldEdit-Core</artifactId>
      <scope>provided</scope>
    </dependency>

    <dependency>
        <groupId>com.fastasyncworldedit</groupId>
        <artifactId>FastAsyncWorldEdit-Bukkit</artifactId>
        <scope>provided</scope>
        <exclusions>
            <exclusion>
                <artifactId>FastAsyncWorldEdit-Core</artifactId>
                <groupId>*</groupId>
            </exclusion>
        </exclusions>
    </dependency>
</dependencies>
```