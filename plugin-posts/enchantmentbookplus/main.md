<!-- resoource:info_spigot -->
---
resource-id: '117005'
native-version: ['1.20']
tested-version: ['1.20']
source-code: 'https://github.com/cloudnode-pro/EnchantBookPlus'
---
<!-- resource:info_modrinth -->
---
project-id: 'dMOPYb3s'
---

<!-- resource: description -->
# EnchantmentBookPlus

[![img](https://github.com/cloudnode-pro/EnchantBookPlus/actions/workflows/codeql.yml/badge.svg)](https://github.com/cloudnode-pro/EnchantBookPlus/actions/workflows/codeql.yml) [![img](https://img.shields.io/badge/Modrinth-%2326292f?logo=modrinth)](https://modrinth.com/plugin/dMOPYb3s/) [![img](https://img.shields.io/modrinth/game-versions/dMOPYb3s)](https://modrinth.com/plugin/dMOPYb3s/) [![img](https://img.shields.io/modrinth/dt/dMOPYb3s)](https://modrinth.com/plugin/dMOPYb3s/)

使附魔书能突破原版等级上限。

## 生效方式

将两个满级附魔书在铁砧中结合可突破其原版上限。比如，效率 V + 效率 V = 效率 VI。

你可以在配置文件中设置哪些附魔可以突破。你可以为每个附魔设置最大等级，以及配置每级额外增加的经验耗费。

> **注意!** 如果需要将 40 级以上的“过于昂贵！”消息去除，你需要安装 [AnvilUnlocker](https://github.com/Jikoo/AnvilUnlocker/releases/latest) 插件。

![img](images/image1.gif)

![img](images/image2.gif)

## 权限

> **注意！** `<附魔>` 为附魔名称，如 `swift_sneak`（迅捷潜行），`efficiency`（效率）等。若使用 * 则表示所有附魔。
> 示例：`enchantbookplus.enchant.*` 或  `enchantbookplus.enchant.unbreaking`

## 提交问题

修复漏洞是我们的头等大事。若你发现问题，请在提交报告前先检查 [Github 的漏洞追踪器](https://github.com/cloudnode-pro/EnchantBookPlus/issues)，如果没有，再提交新议题。

在提交漏洞报告时，你需要提供尽可能多的有关信息，如：

* Minecraft 服务器核心类型及版本（如 Paper 1.20.1）
* 插件版本（如 10.0）
* 后台与插件相关的报错与警告
* 复现问题的方法

## 贡献

任何人都可以为本项目贡献。

步骤如下：

1. [基于此仓库创建分支](https://github.com/cloudnode-pro/EnchantBookPlus/fork)
2. 在分支仓库中对内容进行改动
3. 创建合并请求

合并请求需要经审查同意，仓库在最终合并至主分支前可能会被审查人员请求改动。

任何贡献在大多数情况下都是欢迎的，我们也会将参与贡献的用户展示在鸣谢列表中。

## 许可

此为自由软件，即其永久免费且开源，基于 GNU General Public License version 3 许可。你可以[在这里阅读许可的完整内容](https://github.com/cloudnode-pro/EnchantBookPlus/blob/main/LICENSE)。
