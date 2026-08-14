# Terra

::: warning

本文档正在加紧完成！

想要帮忙？浏览 Github 仓库了解如何贡献：

<Links
  :grid="4"
  :items="[
    {
      icon: { icon: 'simple-icons:github' },
      name: 'TerraDocs',
      link: 'https://github.com/PolyhedralDev/TerraDocs'
    }
  ]"
/>

:::


Terra 是一个现代化的世界生成模组平台，专为 Minecraft 而生。Terra 允许世界生成完全自定义，同时提供了高级的 API，与强大的配置系统紧密绑定：

<Links
  :grid="2"
  :items="[
    {
      icon: { icon: 'carbon:cube' },
      name: '世界生成 API',
      desc: '一个体素世界生成 API，注重终端用户配置和可扩展性。',
    },
    {
      icon: { icon: 'octicon:versions' },
      name: '多平台实现',
      desc: '有多个用户可选择的平台实现。平台实现起到在 API 与平台之间兼容层的功能。',
    },
    {
      icon: { icon: 'octicon:plug' },
      name: '附属系统',
      desc: '附属载入器，允许在不同平台与 Terra API 进行交互。附属提供了 Terra 世界生成功能的主要内容。'
    },
    {
      icon: { icon: 'octicon:file-code' },
      name: '核心附属',
      desc: '部分<i>核心</i>附属，实现了标准的 Terra 配置。这些附属可以视作配置的“标准库”。',
    }
  ]"
/>

## 目录

* [开始](getting-started/index.md)
* [联系与支持](contact-and-support.md)
* [配置包](config-packs/index.md)
  * [社区配置包](config-packs/community-packs.md)
  * [安装地形包](config-packs/pack-installation.md)
  * [配置开发](config-packs/config-development/index.md)
    * [配置开发简介](config-packs/config-development/config-development-introduction.md)
    * [配置文件](config-packs/config-development/config-files.md)
    * [在配置中设置数据](config-packs/config-development/defining-data-in-configs.md)
    * [配置系统](config-packs/config-development/the-config-system.md)
    * [元配置](config-packs/config-development/meta-configuration.md)
    * [从零编写地形包](config-packs/config-development/creating-a-pack-from-scratch/index.md)
    * [修改已有地形包](config-packs/config-development/modifying-an-existing-pack.md)
    * [地形表达式列表](config-packs/config-development/list-of-terrain-expressions.md)
    * [多层地形](config-packs/config-development/multi-layered-terrain.md)
    * [噪声](config-packs/config-development/noise/index.md)
    * [图片配置](config-packs/config-development/image-configuration.md)
  * [配置文档](config-packs/config-documentation/index.md)
    * [配置文件](config-packs/config-documentation/config-files/index.md)
    * [配置对象](config-packs/config-documentation/config-objects/index.md)
    * [TerraScript](config-packs/config-documentation/terra-script/index.md)

* [Terra API](terra-api/index.md)
  * [Terra API 介绍](terra-api/introduction-to-the-terra-api/index.md)
    * [载入 Terra 附属](terra-api/introduction-to-the-terra-api/terra-addon-loading.md)
    * [搭建开发环境](terra-api/introduction-to-the-terra-api/setting-up-a-development-environment.md)
    * [创建简单附属](terra-api/introduction-to-the-terra-api/create-a-simple-addon.md)
    * [监听事件](terra-api/introduction-to-the-terra-api/listening-for-an-event.md)
    * [添加结构](terra-api/introduction-to-the-terra-api/adding-a-structure.md)
    * [注册配置类型](terra-api/introduction-to-the-terra-api/registering-a-config-type.md)
  * [API 概念](terra-api/api-concepts/index.md)
    * [Menifest 附属](terra-api/api-concepts/manifest-addons.md)
    * [依赖注入](terra-api/api-concepts/dependency-injection.md)
    * [SLF4J 记录](terra-api/api-concepts/logging-with-slf4j.md)
    * [事件](terra-api/api-concepts/events.md)
    * [类型键](terra-api/api-concepts/type-keys.md)
    * [注册条目](terra-api/api-concepts/registries.md)
    * [构造](terra-api/api-concepts/tectonic.md)
    * [云注册命令](terra-api/api-concepts/registering-commands-with-cloud.md)

