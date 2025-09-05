# Menifest 附属

验证附属加载器是 Terra 中默认携带的两个 bootstrap 加载器之一。另一个则是 bootstrap 加载器本身。任何不用到 bootstrap 的附属都不应使用 bootstrap 加载器。这样，大部分附属就要用到默认包含的 manifest 附属加载器。

## 附属验证文件

附属验证文件包含了 Manifest 加载器需要识别的数据。验证文件本身则是一个名称为 `terra.addon.yml` 的 YAML 文件，位于 jar 根目录。

如下为附属的示例验证文件：

``` YAML
schema-version: 1
contributors:
  - Terra contributors
id: super-cool-addon
version: 1.0.3
entrypoints:
  - "com.example.cool.MySuperCoolEntryPoint"
depends:
  cool-addon: "1.2.+"
website:
  issues: https://example.com/issues
  source: https://example.com/
  docs: https://example.com/wiki
license: MIT License
```

### 模式版本

`schema-version` 键决定了载入器载入这个文件的模式。目前最新的模式版本为 `1`。我们尽可能避免模式版本的更新，以此确保你的验证文件始终有效，尽管如此，我们还是为你保留了这个选项。

::: info

如果我们发布了新的 `schema-version`，旧版本仍然可以正常载入（控制台会出现警告），几个版本之后就会移除对它们的支持。

:::

### 贡献者

`contributors` 键是为这个拓展做出过贡献的用户列表。现在只需将你的名字填入即可！

### ID

`id` 键是你的附属 ID。它会用于内部识别，以及附属的注册命名空间。请保持命名简洁，但不要取容易和其他附属重复的名称，**多个附属不能有相同的 ID！**

### 版本

`version` 键表示附属的版本。版本命名非常重要，因为总有人需要依赖你的附属，出于提升兼容性的目的而指定依赖的版本！和大多数软件一样，Terra 使用的是[语义化版本](https://semver.org/lang/zh-CN/)命名法。

### 入口

`entrypoints` 键定义了附属的一个或多个入口。入口是实现了 `AddonInitializer` 的类。

\*待完成\*

### 依赖

`depends` 键决定了你的附属*依赖*的附属。如果你依赖一个附属：

* 它先于你的附属载入；
* 依赖缺失时附属无法载入；
* 依赖版本不符合时同样无法载入。

`depends` 键是一系列依赖名称和指定版本的映射表。版本范围可以用于决定你的附属支持哪些版本的依赖。

<center>

`示例版本列表`

|版本范围|包含版本|
|---|---|
|`1.0.0`|*只*匹配版本 `1.0.0`|
|`[0.1.0, 1.0.0)`|匹配所有从 `0.1.0`（含）到 `1.0.0`（不含）的版本|
|`0.1.+`|匹配所有从 `0.1.0`（含）到 `0.2.0`（不含）的版本|

</center>

### 网站

`website` 键包含一系列网站配置。这可以帮助用户在浏览器中找到帮助信息，例如汇报漏洞、源码链接等。该选项是可选的。

网站配置中有三个子键：

<center>


`网站键`
|键|描述|
|---|---|
|`source`|源码链接。|
|`issues`|问题反馈链接。|
|`docs`|文档链接。|

</center>

### 证书

`license` 键表示拓展基于什么协议分发。为了保持 Terra 的开源与免费精神，我们强烈建议你选择[开源证书](https://opensource.org/licenses)。

若证书获得了 OSI 认可（MIT、GPLv3、BSD-3 等），你可以直接将 OSI ID 填入这里。否则，请直接填入证书链接。

::: info

如果你还不知道你需要使用什么协议，你可以先填 `ARR`。ARR 表示保留所有权（All Rights Reserved），即人们不能在未经你同意的情况下使用你的内容。非常不建议以 ARR 发布任何东西，你应当在发布附属之前选择一款 OSI 开源证书！

:::

## 入口相关

附属验证文件的[入口](#入口)定义了附属的一系列入口。这些入口是实现了 `AddonInitializer` 的类。在附属初始化时，这些入口会被依次初始化。

### 入口中的依赖注入

Manifest 附属加载器会将如下类型数据注入入口：

* [Platform](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/Platform.html) 实例；
* [BaseAddon](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/addon/BaseAddon.html) 实例（在验证附属中，[BaseAddon](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/addon/BaseAddon.html) 实例与入口相互独立，因为附属可能会有多个入口，即具备将插件实例注入到入口的能力）；
* 指定入口的 [Logger](https://www.slf4j.org/apidocs/org/slf4j/Logger.html) 实例。

另见“[依赖注入](terra-api.api-concepts.dependency-injection.md)”部分。