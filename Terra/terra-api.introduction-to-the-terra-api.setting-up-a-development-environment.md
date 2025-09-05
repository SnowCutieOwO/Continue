# 搭建开发环境

在理解了附属载入过程之后，你就可以着手搭建用于开发 Terra 的 环境了。

## 初步安装

该部分会讲述 IDE 与构建系统的选择，以及安装必要的工具（如 JDK）。如果你已经完成了这步，或者对它们了如指掌，你可以跳到下一部分。

### 选择一款 IDE

IDE（集成开发环境，Intergrated Development Environment）非常适合用于开发 Terra 相关内容。市面上有许多 Java IDE，其中较为流行的选择有：

* [IntelliJ IDEA](https://www.jetbrains.com/idea/download/)
* [Eclipse](https://www.eclipse.org/downloads/)
* [NetBeans](https://netbeans.org/downloads/index.html)

选择什么取决于你，但在本示例中我们选择使用 IntelliJ。

### 选择构建系统

构建系统让项目的构建流程自动化。你可以通过它们引入必要的依赖（如 Terra API），构建成品（如拓展 jar 文件）等任务。适用于 Java 的两大构建系统是：

* [Maven](https://maven.apache.org/)
* [Gradle](https://gradle.org/)

与 IDE 相同，你可以自行选择使用的构建系统。Terra 和它的核心拓展使用的是 Gradle。

#### 安装 JDK

为了着手编辑 Java 项目，你需要先安装 JDK。Terra 开发时使用的长期维护版本是 Java 17。可以在[这里](https://adoptium.net/)或你的包管理器中下载。

## 项目设置

在开始向项目引入 Terra API 之前，先在你选择的 IDE 中新建一个项目，并配置使用你选择的构建系统。

### 仓库设置 

Terra 会将成品发布至 [CodeMC Maven 仓库](https://repo.codemc.io/)。你可以按如下示例配置你的构建系统：

:::: tabs

::: tab Gradle（Groovy DSL）

``` groovy
// build.gradle

repositories {
    // 其他仓库
    maven {
        url "https://repo.codemc.io/repository/maven-public/"
    }
}
```

:::

::: tab Gradle（Kotlin DSL）

``` Kotlin
// build.gradle.kts

repositories {
    // 其他仓库
    maven {
        url = uri("https://repo.codemc.io/repository/maven-public/")
    }
}
```

:::

::: tab Maven

``` XML
<!-- pom.xml -->

<repositories>
    <!-- 其他仓库 -->
    <repository>
        <id>CodeMC</id>
        <name>CodeMC Maven Repository</name>
        <url>https://repo.codemc.io/repository/maven-public/</url>
    </repository>
</repositories>
```

:::

::::

### 依赖配置

配置完获取 Terra 构建品的仓库之后，你必须指定 Terra API 依赖，以及验证附属加载器：

:::: tabs

::: tab Gradle（Groovy DSL）

``` Groovy
// build.gradle

dependencies {
    // 其他依赖
    compileOnly 'com.dfsek.terra:api:API_VERSION'
    compileOnly 'com.dfsek.terra:manifest-addon-loader:LOADER_VERSION'
}
```

:::

::: tab Gradle（Kotlin DSL）

``` Kotlin
// build.gradle.kts

dependencies {
    // 其他依赖
    compileOnly("com.dfsek.terra:api:API_VERSION")
    compileOnly("com.dfsek.terra:manifest-addon-loader:LOADER_VERSION")
}
```

:::

::: tab Maven

``` XML
<!-- pom.xml -->

<dependencies>
    <!-- 其他依赖 -->
    <dependency>
        <groupId>com.dfsek.terra</groupId>
        <artifactId>api</artifactId>
        <version>API_VERSION</version>
        <scope>provided</scope>
    </dependency>
    <dependency>
        <groupId>com.dfsek.terra</groupId>
        <artifactId>manifest-addon-loader</artifactId>
        <version>LOADER_VERSION</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

:::

::::

::: info

请将 `API_VERSION` 和 `LOADER_VERSION` 替换为最新的 Terra API 及验证附属载入器版本！

:::

### 刷新项目

:::: tabs

::: tab IntelliJ

`Ctrl+Shift+O`

:::

::: tab Eclipse

1. 在项目浏览器中选择项目根目录
2. 右键，在菜单中选择 `刷新`（Refresh）或按下 `F5`

:::

::::

现在，你成功搭建了 Terra 项目，可以着手开发附属了！

## 完整示例构建文件

:::: tabs

::: tab Gradle（Groovy DSL）

``` Groovy
plugins {
    id 'java'
}

group 'com.dfsek'
version '0.1.0'

repositories {
    mavenCentral()
    maven {
        url "https://repo.codemc.io/repository/maven-public/"
    }
}

dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.8.2'
    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:5.8.2'

    compileOnly 'com.dfsek.terra:api:API_VERSION'
    compileOnly 'com.dfsek.terra:manifest-addon-loader:LOADER_VERSION'
}

test {
    useJUnitPlatform()
}
```

:::

::: tab Gradle（Kotlin DSL）

``` Kotlin
plugins {
    java
}

group = "com.dfsek"
version = "0.1.0"

repositories {
    mavenCentral()
    maven {
        url = uri("https://repo.codemc.io/repository/maven-public/")
    }
}

dependencies {
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.8.2")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine")

    compileOnly("com.dfsek.terra:api:API_VERSION")
    compileOnly("com.dfsek.terra:manifest-addon-loader:LOADER_VERSION")
}

tasks.getByName<Test>("test") {
    useJUnitPlatform()
}
```

:::

::: tab Maven

``` XML
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.dfsek</groupId>
    <artifactId>ExampleAddonMaven</artifactId>
    <version>0.1.0</version>

    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
    </properties>

    <repositories>
        <repository>
            <id>CodeMC</id>
            <name>CodeMC Maven Repository</name>
            <url>https://repo.codemc.io/repository/maven-public/</url>
        </repository>
    </repositories>

    <dependencies>
        <dependency>
            <groupId>com.dfsek.terra</groupId>
            <artifactId>api</artifactId>
            <version>API_VERSION</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>com.dfsek.terra</groupId>
            <artifactId>manifest-addon-loader</artifactId>
            <version>LOADER_VERSION</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
</project>
```

:::

::::