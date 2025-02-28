# Citizens 商店

此为本插件对 Citizen NPC 作为商店物体类型的**实验性支持**。这个功能需要安装 [Citizens](https://www.spigotmc.org/resources/citizens.13811/)，可以在[配置文件](installtion-updating.configuration.md)中自由启用或关闭。

在安装 Citizens 插件且该功能启用后，你可以使用本插件原本不支持的商店实体。例如玩家 NPC 与其他多种不支持的实体类型。插件本身因工作量过大而难以支持这些实体。另外，Citizens NPC 也有额外的功能，例如自定义行为：你可以设置实体与你交谈、到处走动等。

创建 Citizens 实体商店所需的权限为 `shopkeeper.citizen`。

你可以通过命令 `/shopkeeper npc` 创建 Citizens 实体管理员商店。

相似地，Citizens 的 NPC 中也有一个 `'shopkeeper'` 特征，你可以将其分配至已有的 NPC 上。我们更建议通过上述的命令创建联动商店。

Citizens 实体商店默认显示为玩家。对于玩家商店，这些 NPC 会使用创建玩家的名称（以及皮肤）。[配置文件](installtion-updating.configuration.md)中也有对应选项能设置玩家是否可以重命名 NPC 玩家商店（默认为：`false`）。

## 离线模式服务器提醒

最新版本的 Citizens 插件中，**不支持离线模式服务器**下玩家 NPC 名称与正版玩家重合的情况。如果你正在运行离线模式，你需要通过 `default-citizen-npc-type` **修改默认 NPC 类型**至其他种类实体。

其他修改 Citizens NPC 的操作，例如修改实体类型或者皮肤，都需要通过 Citizens 的命令完成。需要注意的是某些操作，例如重命名或者复制 NPC，对本插件的 NPC 可能无效，因为本插件在 NPC 生成时会进行一些额外的操作。