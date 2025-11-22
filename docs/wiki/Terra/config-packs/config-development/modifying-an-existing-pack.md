# 修改已有地形包

本章教程将会简要讲述复制已有 Terra 地形包，并对其进行修改的方法。本教程不会讲述如何修改世界生成的某个地物，只会讲述自行修改的基础步骤。如果你还没有准备好，请在继续之前阅读“[配置开发介绍](config-development-introduction.md)”。

::: info

如果你希望**从零开发**而非修改已有地形包，请阅读“[从零开发地形包](creating-a-pack-from-scratch/index.md)”教程。

:::

::: danger

本教程仅适用于 6.0.+ 的 Terra，并不保证先前版本同样生效！

:::

## 创建新地形包
`步骤`

### 1. 选择合适的包

如果你想要修改 Terra 自带的地形包，你可以在[包目录](config-development-introduction.md#子文件夹)中找到它们。你可以在 [Overworld](https://www.github.com/PolyhedralDev/TerraOverworldConfig) 仓库中找到开源的默认包。

其他包可以浏览“[社区地形包](../community-packs.md)”章节。在修改地形包之前请先确认它是否与你的 Terra 兼容。

### 2. 创建配置包目录

前往[包目录](config-development-introduction.md#子文件夹)，并在其中新建一个文件夹，名称随意。本示例中我们将其命名为 `custom-pack`。

文件夹结构应当如下所示：

``` txt title="Terra/packs/custom-pack"
Terra/
├── packs/
┆   ├── default.zip
    └── custom-pack/ <- 你新建的文件夹
```

### 3. 复制待修改的包内容

将需要修改的包复制到上一步创建的文件夹中。如果你修改的包是 `.zip` 格式的文件，将其解压并放入你的新文件夹。

::: tip 修改默认包

如果你需要修改默认包，只需将 `default.zip` 解压放入文件夹即可。

:::

::: tip

包可以从文件夹或 `.zip` 压缩包中载入，无需将其重新压缩为压缩包再载入服务器。

:::

如果你已经复制了内容，那么包验证文件，即 `pack.yml` 就会像这样出现在你的文件夹中：

<badge type="info" text="正确" />

``` txt title="Terra/packs/custom-pack/pack.yml"
Terra/
├── packs/
┆   ├── default.zip
    └── custom-pack/
        ├── pack.yml
        ┆
```

<badge type="warning" text="错误" />

``` txt title="Terra/packs/custom-pack/文件夹/pack.yml"
Terra/
├── packs/
┆   ├── default.zip
    └── custom-pack/
        └── 文件夹/
            ├── pack.yml
            ┆
```


<badge type="warning" text="错误" />

``` txt title="Terra/packs/custom-pack/original-pack.zip"
Terra/
├── packs/
┆   ├── default.zip
    └── custom-pack/
        └── original-pack.zip
```

<badge type="warning" text="错误" />

``` txt title="Terra/packs/pack.yml"
Terra/
├── packs/
┆   ├── default.zip
    ├── pack.yml
    ┆
```

::: warning

所有在包目录中的文件夹或压缩包，都会被插件当做地形包读取。不要在包文件夹里遗留任何额外的文件夹或压缩包。

:::

### 4. 为新包设置自定义 ID

1. 打开包文件夹中的 `pack.yml`。
2. 找到 `id:` 开头的部分。
3. 将 `id:` 之后的内容改为你想要的内容。本示例中我们会将其命名为 `CUSTOM`。

包 ID 只能出现大写字母 `A-Z`、数字 `0-9` 或下划线 `_`。

<badge type="info" text="有效" />

``` YAML title="pack.yml"
id: CUSTOM
```

<badge type="warning" text="无效" />

``` YAML title="pack.yml"
id: custom id
```

### 5. 验证包是否载入

启动客户端/服务器，检查[控制台](config-development-introduction.md#打开控制台)中是否出现了你的新自定义包 ID。如果你见到了如下内容：

``` log
[XX:XX:XX INFO]: [Terra] Loading config pack "CUSTOM"
[XX:XX:XX INFO]: [Terra] CUSTOM <包版本> by <包作者> loaded in XXXX.XXXXms.
```

这样，你的包就已经载入并可以着手修改了！