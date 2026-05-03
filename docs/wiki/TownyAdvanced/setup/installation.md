# 安装

安装 Towny 非常简单。不过许多管理员会忽略两点：

> * 对现有世界进行配置
> * Townyperms.yml 文件已经包含了大部分 Towny 权限

仔细阅读下文可以帮你剩下大把抓耳挠腮的时间。

## 服务器准备

1. 关闭服务器；
2. 选择一种方式下载：
  * 从“发行版”页面下载最新的构建。
    * 里面的 .zip 压缩包会包含一个 **Towny.jar** 和 **TownyChat.jar**，当然必须解压使用。
  * 从同一页面下载的最新预览版/开发构建。
    * 包含 Towny.jar。
    * TownyChat 的最新文件可以从 TownyChat 仓库的“发行版”页面下载。
  * 可以从自述文件了解旧版 Minecraft 支持的相关信息。
3. 将 **.jar** 文件放入你的 `/plugins` 文件夹。
  * 必须安装 **Towny.jar**。
  * 如果需要 Towny 修改聊天格式，那么你需要安装 **TownyChat.jar**：
    * 根据权限插件分配的内容显示对应的前后缀
    * 在聊天栏显示城镇及国家标签
    * 显示全局/本地/城镇/国家/小管理/管理频道
  * 如果需要使用经济功能，那么还需要安装 [Vault](https://www.spigotmc.org/resources/vault.34315/) 或 [Reserve](https://www.spigotmc.org/resources/reserve.50739/)（不同链接）。
4. 启动服务器，等待 Towny 和 TownyChat 在 `plugins\towny\settings\` 下生成配置文件，以及 `plugins\towny\data\worlds\` 下生成世界配置文件。
5. 再次关闭服务器，编辑 Towny 配置文件。
6. 继续阅读，务必不要跳过教程的配置现有世界部分。

## 游戏内安装命令

自 Towny 0.97.2.0 起，你可以在服务器中通过 `/ta install` 命令进行设置。

你需要管理员身份，或拥有 `towny.admin` 或`towny.command.townyadmin.install` 权限中的一个才可以使用这个命令。

输入命令后，它会为管理员显示如何配置下列内容。输入命令后无需再次输入本章节之后提到的命令。

* 是否允许使用郊区内容。
* 是否启用[“解除占领后还原”功能](../towny-advanced/how-towny-works.md#在解除占领时还原城镇地块至初始状态)
* 每个城镇居民分到多少城镇地块/地皮。
* 建立新城镇的价格。
* 建立新国家的价格。
* 占领新城镇地块的价格。

## 配置已有世界

如果你使用了 `/ta install` 命令，那么你可能已经设置了[“解除占领后还原”功能](../towny-advanced/how-towny-works.md#在解除占领时还原城镇地块至初始状态)和郊区交互设置。不过这部分还是有必要读一读。

Towny 的 config.yml 有“默认新世界设置”部分。启动服务器后，它会通过这里的默认设置应用至新创建的世界。当然也包括各自的[“解除占领后还原”功能](../towny-advanced/how-towny-works.md#在解除占领时还原城镇地块至初始状态)和爆炸还原设置。

默认情况下玩家不能在郊区建筑/破坏，如果需要启用，那么请输入命令 `/ta toggle wildernessuse`。

默认情况下 Towny 会恢复郊区的爆炸痕迹，且城镇解除占领时会将地形逐渐还原到原本的状态。如果需要禁用，那么请输入命令 `/ta toggle regenerations`。

## 配置 [config.yml](../reference/configs/config-yml.md)

1. 打开 `\plugins\towny\settings\`。
2. 打开 [`config.yml`](../reference/configs/config-yml.md)。
3. 按喜好小心编辑配置文件。比如：
  * `town_block_size: 16`，即服务器的城镇地块大小（默认为 16x16），且**之后无法修改**。
  * 部分为新建城镇和国家准备的设置。
4. 修改经济设置：
  * 如果你不需要使用经济功能，那么请将 `using_economy` 设置为 `false`。
  * 如果你正在使用 UUID 版本的 *EssentialsEco*，那么请在经济设置部分新增 *NPC:* 前缀：
    * 从这样：
      ``` YAML
      town_prefix: town-
      nation_prefix: nation-
      ```
    * 改成这样：
      ``` YAML
      town_prefix: NPC:town-
      nation_prefix: NPC:nation-
      ```
5. 保存配置文件。
6. 启动服务器。这样就可以正常使用插件了。

## 配置 [channels.yml](../reference/configs/channels-yml.md)（可选）

*这些可选步骤是为安装了 **TownyChat.jar** 的服主准备的。*

1. 打开 `\plugins\towny\settings\`。
2. 打开 channels.yml，仔细阅读文件开头的注释。
3. 按需编辑文件。
4. 保存。
5. 在游戏内输入 `/townychat reload` 命令即可。

## 配置 [chatconfig.yml](../reference/configs/chatconfig-yml.md)（可选）

*这些可选步骤是为安装了 **TownyChat.jar** 的服主准备的。*

1. 打开 `\plugins\towny\settings\`。
2. 打开 chatconfig.yml，仔细阅读文件开头的注释。
3. 按需编辑文件。
4. 保存。
5. 在游戏内输入 `/townychat reload` 命令即可。