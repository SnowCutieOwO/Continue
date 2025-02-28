
# 已知问题

该部分列出了不同 Minecraft/Spigot 版本之间的差异，以及有关已知问题与其他插件或服务端的兼容问题。

当前支持的 Minecraft 版本（1.21.x, 1.20.x, 1.19.4, 1.18.2, 1.17.1, 1.16.5）：

* **稍老的 Bukkit/Spigot 版本**：最新版的测试已初步完成。如果你遇到与旧版本服务器兼容相关的问题，请务必让我知道，我会着手调查。另外也请注意，不支持新版本迁移回旧版本，且有可能会使本插件的数据损坏。请在更新服务器版本时记得备份数据。
* **不支持的实体类型**：部分类型的实体可以在配置中启用，用于实验目的，但可能会造成多种问题。只有默认启用的类型是官方测试过的。见 v1.50 的更新日志。
* **和平难度**：在和平难度下服务器会立即移除任何敌对生物的商店，而插件会尝试不断生成它们。
* **成书交易**：如果交易失败，玩家仍然能通过极快的反应在关闭商店后打开并阅读其中的内容。对此我无能为力。
* **MC-89883**[^1]：鱿鱼和荧光鱿鱼无法固定在原地。
* **Minecraft 迁移调试信息**：Minecraft 可能会在 ItemStack 迁移期间发送“Unable to resolve BlockEntity for ItemStack ...”消息。它们可被安全地忽略。
* **玩家头颅物品**：创建带有 SkullOwner 的玩家头颅，如 `/give @p player_head{SkullOwner: "MHF_Chest"} 1`，Minecraft 会尝试获取该名称玩家的档案并将其替换为完整数据。档案中包含了诸如头颅贴图的信息。但是，我们不能保证替换行为一定正常发生。部分物品栏操作可能会触发它，比如物品被 Minecraft 保存并载入时。但只要 SkullOwner 档案没有被物品设置，它就不能在本插件的交易中使用。作为玩家，你无法分辨头颅数据是否被替换：物品可能已经出现了对应贴图，即便对应数据尚未被保存至物品中。
    另一个有关问题是被获取的玩家档案不仅包含头颅贴图，也包含一个获取数据的时间戳。Minecraft 会将缓存的数据存储在服务器中。所以只要缓存仍然包含档案，所有物品的时间戳都会变得相同。但是，缓存会定期清理，如果 Minecraft 需要为新物品再次获取档案，则它的时间戳不会匹配先前创建的物品。这种差异会导致其无法与先前创建的物品堆叠，也无法参与本插件的交易。  
    唯一的解决方法目前只有在通过命令创建物品时指定完整的档案（UUID、贴图、时间戳等），或者只创建一次物品，随后将其存储在某些地方，以其为模板创建复制（比如创造模式下的物品复制）并进行相应的编辑。如果物品已经包含了完整且有效的档案，则 Minecraft 不会尝试修改它，即便对应玩家同时修改了皮肤。（参考：https://bugs.mojang.com/browse/MC-52806）
    同样的问题也会影响其他创建玩家头颅的插件：如果它们不指定完整档案，只留下玩家名称，则服务器会自发获取档案并填充。
* **Spigot**：如果你正在使用 Spigot，且你在某一个地点聚集了大量村民，请考虑禁用 Spigot 的 **`tick-inactive-players`** 设置：启用该功能可能导致包含大量村民的区块被无限加载。

* [SPIGOT-6949](https://hub.spigotmc.org/jira/browse/SPIGOT-6949)[^2]：在 1.18.1 之后的某些版本中，Spigot 对配置文件的保存载入逻辑进行了改动，减轻配置文件注释消失的可能性。但是，这些改变破坏了以列表或映射连接的配置。这影响到了 NPC 交易商店的快照，因为 NPC 数据在配置文件中以快照列表的形式连接。任何保存的 NPC 数据都会丢失，并阻止备份文件载入。

* [GH-686](https://github.com/Shopkeepers/Shopkeepers/issues/886)，[SPIGOT-8989](https://hub.spigotmc.org/jira/browse/SPIGOT-7676)[^3]。在 1.20.6（多见于 1.20.4）前的某些版本里，使用土耳其语的用户可能会无法启动本插件，原因为“服务器假设测试失败”。这个问题是因为 Spigot 核心没有负责处理土耳其语的文本及其特殊的大小写 `i` 字符的方法，导致其进行某些文本转换时出现问题，如备份附魔数据。这个问题已在 MC 1.20.6 的某些版本中被修复。对于稍旧版本服务器的用户，请在服务器启动参数中添加 `Duser.language=en -Duser.region=EN`。

* **Paper**：
    * 为防止本插件的商店告示牌保存在世界/区块数据内（在卸载插件时会导致所有商店消失或服务器崩溃），插件会在世界保存前移除所有商店告示牌并于 1 刻后再次生成。Paper 的一个功能会导致实际区块保存时长超过 1 刻。可能导致告示牌在插件卸载后仍然存在于世界或导致服务器崩溃。
    * Paper 对于 Minecraft 的 `CanDestory` 和 `CanPlaceOn` 物品标签序列化和反序列化方法与 Spigot 略有不同。这会导致本插件的存储的任何物品（如商店交易内的物品）可能会在切换 Paper 和 Spigot 核心时丢失。有关的 Paper 漏洞追踪页面：https://github.com/PaperMC/Paper/issues/6689
        他们决定只部分修复这个问题：在从 Spigot 切换至 Paper 时，Paper 现在会从 Spigot 导入这些标签，但如果从 Paper 迁移回 Spigot，或只将本插件保存物品的数据迁移回去，则问题会重新出现。他们看起来不想为此提供支持。这种情况可能会发生在你使用两种核心测试其他问题，或者将数据导入给使用了 Spigot 而非 Paper 的其他服主。
    * Paper 的 `ItemMeta` 实现方式将 `CanDestroy` 和 `CanPlaceOn` 方法存储在无序的 `HashSet` 中，而原版将其存储在 `List`。从 Minecraft 原版转化为该 Bukkit 分支再将其转回（多种情况下均有可能出现，如本插件保存和载入这些物品）可能无法保留重复标签或其顺序。这可能导致受影响的物品在转化前后被 Minecraft 和本插件均判定为不相同，并最终表现在物品堆叠和交易上。
    * 在 `paper-global.yml` 下将[物品验证](https://docs.papermc.io/paper/reference/global-configuration#item-validation)调整到较小值可能会导致问题，因为服务器会在某些情况下删除某些物品的数据。这也会导致插件“服务器尝试测试”失败并导致插件无法载入。
* **ClearLagg**（检出版本 3.0.6）：ClearLagg 的“chunk-entity-limiter”功能会导致区块内超出上限的实体（包括插件生成的）被阻止生成。因为 ClearLagg 阻止生成的优先级为 MONITOR，本插件不能绕过它的限制。另外此插件的许多功能可能也会影响本插件的商店，尽管我们会定时尝试重新生成丢失的实体。使用 ClearLagg 任何有关区块卸载或限制加载的功能也可能造成冲突。参考：https://github.com/Shopkeepers/Shopkeepers/issues/587
    新版 ClearLagg 中，能够配置忽略某些携带自定义元数据的实体（如由本插件生成的实体）。
* **Ultimate_Economy**：这个插件似乎错误地将本插件的编辑界面当做自己的自定义界面（标题相同），使得玩家无法和其中的任何按钮互动，页无法设置交易。参考：https://www.spigotmc.org/threads/ultimate_economy.331584/page-10#post-3540110
* [MythicMobsExtension](https://www.spigotmc.org/threads/mythicmobsextension.296041/)：可在 Spigot 上下载到的版本（v1.239）某些时候会导致本插件的交易和编辑界面立即关闭（在 MC 1.15.2 上测试）。这个插件版本可能已经过期（也会在日志中输出很多报错）。新版本可在[这里](http://mc.hackerzlair.org:8080/job/MythicMobsExtension/)（来自于[他们的 Github 页面](https://github.com/BerndiVader/MythicMobsExtension)）下载。我测试了 v1.557 的快照，之前的问题不能复现。
* [Moneynote](https://www.spigotmc.org/resources/moneynote-convert-digital-money-into-paper.59554/)：若要让此插件的物品在本插件的交易中生效，你需要禁用它们的 `glow` 效果，禁用 `reject-villager-trading`，并移除物品描述上的 `%signer%` 内容。如果你使用的是 MC 1.8，则你需要使用本插件的 v2.2.3 版本（可在 Discord 群组聊天上下载，在 `announcements` 频道中置顶）。
    自 1.16 的更新（我不知道具体是哪个版本；我只检查了 v1.3.1），此插件为每个物品添加了属性并分配了一个随机 UUID（https://prnt.sc/tq7bzm）。在早期版本这个 UUID 在每个创建的物品上都是相同的。这导致了此类物品不能被交易，因为它们内部的 UUID 几乎不会完全匹配。参考：https://www.spigotmc.org/threads/moneynote-convert-digital-money-into-paper.333126/page-3#post-3895977  
    UUID 问题可能已在 v1.3.3 版本被修复，但我还没测试过。
    在此插件的某些版本（我只检查了 v1.4），下文所述的部分配置是空的。所以你需要手动插入这些内容：
``` YAML
use-static-uuid:
  enabled: true
  do-not-edit-this: '7d6f11b6-86c4-4c66-891c-9f1ae6a70fdb'
```

* **GriefPrevention + GeyserMC**：一个用户报告称基岩版玩家不能编辑自己的商店，但能正常进行交易。另外，一旦玩家尝试打开商店编辑器，他们就再也不能打开任何物品栏了（如箱子），直到玩家重新进入服务器。这证明这个问题只影响到 GriefPrevention 插件保护区域内的玩家，且仅有商店拥有者受到保护区“信任”。另外执行命令 `/permissiontetrust {玩家名称}` 可以间接解决这个问题。测试服务器版本为 1.17，且本插件版本为 v2.13.0。
    另一位用户记录了交易界面没有物品的问题（https://github.com/Shopkeepers/Shopkeepers/issues/756），我不能确定之前说的是否毫无关联。v2.13.2 不会再在打开交易界面的时候没有出现交易了。
* **OpenInv**：部分插件为管理员提供了一个“静默开箱”模式。如果你的服务器管理员在创建玩家商店时显示“你不能打开指定箱子”，则很有可能是它导致的。这些“静默开箱”模式通常取消与箱子的交互，转而让插件为玩家打开箱子。这个功能会影响到本插件判断玩家是否拥有权限打开箱子。例如，插件 `OpenInv` 提供了一个 `silentcontainer` 和一个 `anycontainer` 模式，可通过命令切换。也可以通过权限节点限制管理员使用对应模式。
* [**InventoryEdit**](https://www.spigotmc.org/resources/inventoryedit.97844/)：这个插件取消了所有 45 格物品栏的点击事件，因此也阻止了玩家通过编辑界面设置交易。
    编辑：插件作者对代码作出更新，使得这些事件只在界面标题为“&aInventory”时生效。这应该能解决大部分问题。但是，因为界面标题是可以通过玩家或管理员修改的（如通过配置，或者重命名商店），使用界面标题来标注界面仍有可能导致这个问题再次出现。
* **uSkyBlock**：部分插件阻止了本插件的交易。如果你被提示“村民交易已被禁止”，检查你是否安装了 uSkyBlock 插件。插件设置中的 `villager-trading` 和 `villager-trading-enabled`（隐藏并默认禁用）选项也会阻止玩家打开商店交易界面。
* [**IllegalStack**](https://www.spigotmc.org/resources/dupe-fixes-illegal-stack-remover.44411/)：此插件会检测并移除本插件编辑界面的页码按钮，因为我们使用了可编辑书本（书与笔）与其堆叠数量来表示页码，而书与笔在原版情况下是不可堆叠的。你可以在本插件的配置文件中将翻页按钮更换为其他物品，或检查此插件的配置文件中是否有方法不检测本插件的界面。我联系了插件作者并希望未来版本能够检测并忽略本插件的界面。
* [**AdvancedSpawners**](https://www.spigotmc.org/resources/%E2%9C%85-advancedspawners-%E2%9C%85-11-new-3d-custom-mobs-%E2%9C%A8-spawner-mob-stacking-%E2%9C%A8-30-sale.75458/)：这个插件也有一个功能，即在物品中“存储灵魂”（http://prntscr.com/tqlgbs ）。存储不同数量灵魂的物品不会匹配，即无法交易。如果你遇到了此类问题，请检查所有灵魂相关的配置文件与物品设置，并尝试禁用它们（https://image.prntscr.com/image/eBOLjajUTAmvD11rWFLm3g.png 、http://prntscr.com/tqsih5 ）。
* [**MMOItems**](https://www.spigotmc.org/resources/mmoitems-premium.39267/)：该插件的一位用户在使用 MC 1.16.1 时报告了如下问题。他先创建了一个可右键“冲刺”的盾类物品。在使用该效果后，物品的内部数据从 `BlockEntityTag: {id:"minecraft:banner", ..}` 变为了 `BlockEntityTag: {id:"banner", ..}`（https://prnt.sc/tq7v0w ）。这使得它不能在本插件的商店中参与交易。
    另外，请确保你设置了插件使其不生成包含随机值的物品，因为这些差异会导致物品最终无法交易。  
    其他玩家报告了该插件创建的物品名称与描述不符合 Spigot 内部数据格式的情况（https://prnt.sc/u1takr ）。但根据相关人员的反馈，他们使用了 Spigot API 来设置这些物品属性。所以我不能清楚解释为什么它们的内部数据格式会与 Spigot 的有所差别。
* [**AdvancedItems**](https://www.spigotmc.org/resources/1-17-1-21-%E2%AD%95-advanceditems-%E2%AD%90-create-custom-items-%E2%AD%95-100-abilities-40-default-items-%E2%9C%85.110438/)：2024-07-13，一位用户报告称本插件的交易不兼容此插件。本插件一直显示“交易被阻止：物品不与该插件的预期结果匹配”，这表明此插件可能在交易过程中修改了物品，引发了不兼容问题。
* [**EcoEnchants**](https://www.spigotmc.org/resources/%E2%9A%A1-1-15-1-16-2-ecoenchants-%E2%9C%A8-200-custom-enchantments-%E2%9C%85-essentials-cmi-support.79573/)：此插件创建了许多与 Spigot 兼容性不佳的自定义附魔，可能导致问题（诸如插件重载或插件加载顺序发生变化）。
    另外，这个插件似乎修改了所有附魔物品的出入物品数据包（且无视它们是否真的包含附魔）。在处理过程中，插件也会修改原有物品（http://prntscr.com/uait5a ），这会导致交易失败，因为参与交易的实际物品最终无法与对应物品匹配。  
    一位用户报告称某些更新可能修复了这个问题，其他除工具外受该问题影响的物品可正常参与交易。  
    编辑：另一位用户报告称交易附魔物品（如原版附魔书）时出现了问题。与 Eco 插件一同使用后，插件可能会导致村民交易内的附魔物品数据被修改（https://github.com/Auxilor/EcoEnchants/blob/master/eco-core/core-plugin/src/main/java/com/willfp/ecoenchants/display/EnchantDisplay.java ）。  
    编辑：与 Eco 有关的问题似乎都在 Eco 5.3.0 和 EcoEnchants 7.2.8 之后被修复了。
* [**Eco**](https://www.spigotmc.org/resources/eco.87955/)：这个问题可能和上述的 EcoEnchants 有所关联，因为该插件是上述插件的前置。这个插件似乎修改了发送至玩家界面交易的 ItemStacks（以及聊天消息的悬浮提示，但这个不是主要问题）。它的目的*可能是*修改某些物品在玩家处的显示方式。但是，可能是缺少了交易配方的复制，ItemStacks 似乎不只在发出的数据包中被修改，而是影响到了所有展示在交易列表内的物品。结果就是任何从村民处返回的物品（包括本插件提供的交易）都会在内部携带额外的数据，导致其无法与普通的 ItemStack 堆叠。在分析情况下，所有返回的物品都至少会带上额外的数据 `tag: {PublicBukkitValues: {"eco:finalized"}}`。参考：https://github.com/Auxilor/eco/issues/3
    作者对插件进行了修改，这样就只会影响到最大堆叠数量大于 1 的物品，以此解决物品不能堆叠的问题。但是，这没有实际解决插件仍在修改某些物品（如工具、武器、书本等任意堆叠数量大于 1 的物品），这破坏了 Minecraft 与其他插件比较物品的逻辑（如要求输入物品数量大于 1 的村民交易、商店插件、设置了需要完全匹配配方的自定义合成插件等）。  
    编辑：作者对插件进行了另一个修改，可能解决了 Eco 与完成标签属性有关的问题（https://github.com/Auxilor/eco/commit/dbfef3094bc60bb8f605b7c28199c7ae848605b0 ）。
    编辑：随后的另一个修改（https://github.com/Auxilor/eco/commit/e9e39345edc9157d38fc9c521a868b6aa080ab80 ）回退了我提及可能修复了问题的代码。一位用户确认了最大堆叠数量为 1 的物品仍然会导致此类问题。  
    编辑：作者对 Eco 5.3.0 做出了更多改动，包括在物品被修改前复制并发送 MerchantRecipes（交易列表）。这可能解决了不兼容的问题。该更新还移除了物品必须带有 `finalized` 数据的要求。
    编辑：作者似乎再次回退了他的改动（https://github.com/Auxilor/eco/commit/d65c04aaa75fe08bdcd116f5f75eb0f7dddbbef1 ），但之后添加了一个配置选项（`disable-display-on-villagers`）来禁用其效果（https://github.com/Auxilor/eco/commit/e61e9bc0a8ecdd94635968ecd54b591b593c7737 ）。
    编辑：作者又回退了部分改动使得 MerchantRecipes 能再次被复制，但这次也将其中的“specialPrice”考虑在内（https://github.com/Auxilor/eco/commit/e61e9bc0a8ecdd94635968ecd54b591b593c7737 ）。
    编辑（2023-01）：我*简单地*再次检查了一下并在这里找到了可能的修复更新：https://github.com/Auxilor/eco/issues/227
* [**EcoItems**](https://www.spigotmc.org/resources/1-16-1-17-%E2%AD%95-ecoitems-%E2%98%84%EF%B8%8F-make-your-own-items-and-recipes-%E2%9C%85-easy-advanced-powerful.94664/updates)：部分用户报告称此插件会导致无法交易。已有相关依赖 Eco 的插件报告了兼容性问题（见上）。但我无法证明 EcoItems 导致的问题是否由其本身造成。但是，我已经花了太多时间追踪上述 Eco 相关的兼容性问题，我不会再在相关插件上花更多时间了。你最好让 Eco 插件的开发者着手解决这些问题。
* [**GoldenEnchants**](https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/)：此插件创建了许多与 Spigot 兼容性不佳的自定义附魔，可能导致问题。例如在插件重载或插件加载顺序发生变化时，本插件中使用了这些附魔的交易可能无法载入，或永久丢失其自定义附魔。
* [**CustomItems**](https://www.spigotmc.org/resources/%E2%9B%8Fcustom-items-%E2%9C%85must-have%E2%9C%85-make-new-items-blocks-with-new-textures-models-triggers-recipes.63848/)：一位用户报告称使用该插件创建物品制作的交易出现了问题。但是，因为没有相关物品的 NBT 数据，我无法对问题进一步调查。  
    另一位用户（在约一年前）碰到了相似的问题，尝试在 2021-09-25 复现，但没有成功。Spigot 上的有关问题可能已经被解决。这位用户提供的 NBT 数据如下：`{id: "minecraft:bread", tag: {display: {Name: '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"#EAAE69","text":"Cuernito"}],"text":""}', Lore: ['{"extra":[{"bold":false,"italic":true,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"#714AB2","text":"\\"Ulala, un Croissant!\\""}],"text":""}']}, CustomModelData: 3, com.jojodmo.customitems.itemID: "cuernito", com.jojodmo.customitems.itemVersion: 1, com.jojodmo.customitems.internalVersion: "1"}, Count: 64b}`
* [**MythicMobs**](https://dev.bukkit.org/projects/mythicmobs/)：由此插件创建的物品在新版的文字组件里使用了旧版的颜色代码（如 http://prntscr.com/we8kcs ，序列化数据：http://prntscr.com/we8l0n ）。另：Spigot 和 Minecraft 均不建议将这些数据混用（见 [Spigot 维基](https://www.spigotmc.org/wiki/the-chat-component-api/#common-pitfalls)有关页面和 Mojira 内多条有关停止旧版颜色代码支持的漏洞报告）。在最新的 Spigot 版本上（1.16.4），Spigot 现在会在保存或插件重载（如本插件）时尝试正确判断这些文本。
    但是，先前保存的物品（如先前保存的交易）会以纯文本（旧版）的形式保存。在 Spigot 载入这些物品时，它们会被转化为对应的文本组件。而这些内容与此插件用于新物品的格式不匹配，所以新创建的物品不与先前保存的物品相匹配，且无法交易。唯一的解决办法就是重新设置有关物品的交易。
    注意：我只能在 Paper 上复现这个问题。在 Spigot 上物品似乎不包含旧版的颜色代码（可能是 Spigot 的某些自动转化机制导致的）。
    编辑：其他与无效 MythicMobs 物品和 Paper 的报告称，Paper 包含了一个在特定情况（如玩家小退）下自动转化这些物品的补丁。因此它有可能导致玩家拥有两个几乎相同（不匹配）且无法堆叠的物品。本插件中使用其中一个物品的交易不能识别另一个几乎相同的物品。另见 https://github.com/PaperMC/Paper/issues/4888
    编辑：根据用户反馈，最新版本的此插件（当前为 4.13.0）不再生成包含旧版代码的物品了。但是，先前设置的商店可能仍然在使用这些旧格式的物品，新旧物品可能无法兼容。当前尚无方法自动统一服务器上的这些物品（它们有可能处于玩家背包中、诸如箱子的容器内、掉落物形式，或本插件的交易中）。此插件的部分版本同时对生成的物品添加了一个 `MYTHIC_TYPE` 标签，这可能导致先前创建的物品会与其发生不匹配或无法堆叠的问题。
    2024-4-27：部分用户遇到了本插件的商店村民转化为普通村民的问题，原因是此插件的“[原版覆盖](https://gitlab.com/TranslatedByShark/Mythic-Manual-CN/-/wikis/%E5%AE%9E%E4%BD%93/%E9%80%89%E9%A1%B9)”选项。
* **Fabric/Lithium（锂）/[Cardboard](https://github.com/CardboardPowered/cardboard)**：一位用户报告称在插件初始化后遇到了指向“net/minecraft/class_1352”的“class not found”问题。他提到他之前使用过 Fabric 和 Lithium，之后便换回了普通的 Paper 服务器。问题是某些程序修改了本插件的插件并将所有 nms 类重映射至了 Fabric 的形式。我不能确定是什么触发了重映射，但这有可能是 Cardboard（一款 Bukkit 转 Fabric 的模组）导致的。所以用户可能曾经在之前使用过这个，然后切换回了普通的 Paper 端，导致重映射后的插件不能载入。  
    另一位用户报告称插件在装有 Cardboard 的 Fabric 上运作良好，但他们不能右键点击打开商店编辑器。
* [**NoMobLag**](https://www.spigotmc.org/threads/%E2%9D%8C%E2%98%A2%EF%B8%8F-nomoblag-%E2%98%A2%EF%B8%8F%E2%9D%8C-entity-farm-limiter-spawner-nerf-mob-freezing-more.404659)：这个插件的“生物冻结”和 NoAI 功能与其他通过 NoAI 标志禁用指定实体 AI 的插件冲突（例如本插件，插件会生成带有 NoAI 标签的实体使其不会移动）。根据用户反馈，这个插件强制启用了这些实体的 AI，导致其在 NoAI 状态下仍然会四处走动。  
    之前，禁用 `mob-freezing.enable-freezing` 和 `mob-freezing.enable-ao-on-chunk-load` 会解决这个问题，但也会完全禁用这个功能。
    我和作者提及了有关的解决方法（https://www.spigotmc.org/threads/%E2%9D%8C%E2%98%A2%EF%B8%8F-nomoblag-%E2%98%A2%EF%B8%8F%E2%9D%8C-entity-farm-limiter-spawner-nerf-mob-freezing-more.404659/page-2#post-4060641 ）。
    作者随后添加了 `no-ai-tags` 设置，且默认值包含 `shopkeeper` 标签，这样本插件的实体就可以被忽略。但是，他们再次添加了玩家进入区块且禁用了 `mob-freezing.enable-freezing` 后强制启用所有实体 AI 的功能（而无视配置的 `no-ai-tags`）。所以为了防止在最新版上本插件的实体到处走动（检测版本为 v2.3.3），你实际上需要启用 `mob-freezing.enable-freezing` 设置，并确保 `no-ai-tags` 设置包含 `shopkeeper`。我与作者提及了这个问题（https://www.spigotmc.org/threads/%E2%9D%8C%E2%98%A2%EF%B8%8F-nomoblag-%E2%98%A2%EF%B8%8F%E2%9D%8C-entity-farm-limiter-spawner-nerf-mob-freezing-more.404659/page-3#post-4237068 ）。
* [**MC-164353**](https://bugs.mojang.com/browse/MC-164353)[^4]：这影响到了对普通村民的编辑界面。因为一个 Minecraft 的漏洞，没有职业的村民会无法打开其交易界面（在 MC 1.16.5 上测试）。
* [**JobsReborn**](https://www.spigotmc.org/resources/jobs-reborn.4216/)：插件添加了 `JobsItemBoost: <物品名称>` 的 NBT 数据。可能意在更快速找到有关物品的相关配置。如果你正在使用本插件且启用了 `use-strict-item-comparison`，该物品有关的任何交易都会无法进行。
* **潜影盒**：潜影盒会在放下并拾起至少一次后有不同的内部数据。新创建的潜影盒没有内部数据。将其放置并拾起后会增加 `BlockEntityTag: {Items: []}`，包含了其内存储物品的数据，若没有物品则为空。如果交易需要这段额外数据，它不会接受新创建的潜影盒（因为缺少这段数据）。如果你启用了 `use-strict-item-comparison`，反之亦然：如果交易需要不包含该数据的潜影盒，则它不接受包含这段数据的潜影盒（即先前被放置并拾起过）。
    稍早 MC 版本有关潜影盒的一个相似问题：当潜影盒方块被保存时，它的数据包含了一条属性 `id: "minecraft:shulker_box"`，用于标明存储的方块实体。在早期的 MC 版本中，潜影盒物品也会在 `BlockEntityTag` 中保存这个 `id` 属性。且会随着 Minecraft 版本升级一并携带在物品中。但是，在近期的 MC 版本中（测试于 1.16.5 版本），控制潜影盒创建的战利品表逻辑在被破坏时只考虑其内的物品，并将其转移到掉落物的 `BlockEntityTag` 中。  
    对应地，潜影盒破坏后掉落的物品不再包含这个 `id` 属性，且因此不会匹配到任何仍然包含该 `id` 属性的潜影盒。任何需要该 `id` 的商店都不会接受没有 `id` 属性的物品。且如果玩家将带有 `id` 属性的潜影盒放置再破坏后拾起，得到的潜影盒物品会失去 `id` 属性。
* **BungeeCord 聊天插件**：本插件的命名功能依赖于对玩家聊天栏的监听（即检测聊天事件）。在普通的 Spigot 服务器上，这通常没有问题。如果它是 BungeeCord（或类似核心）服务器的一部分，则基于群组的插件或功能会阻止玩家的聊天包发送到下层的 Spigot 子服。例如，一个禁言插件可能在群组端层禁用玩家聊天的数据包，或是跨服聊天插件可能通过取消原本的聊天数据包，再自行向所有玩家发送聊天消息实现其功能。
    我制作了一个 BungeeCord 与 Spigot 插件，能够避免从 BungeeCord 群组服到玩家所在 Spigot 子服的聊天事件被阻断（https://www.spigotmc.org/resources/bungeeforwardcancelledchat.88941/ ）：如果你受到该问题的影响，（同时在 BungeeCord 和 Spigot 服务器上）安装此插件可能会解决这个问题。
* [InvSee](https://www.spigotmc.org/resources/invsee-plugin-with-config-1-8-x-1-16-5.74292/)：这个插件在玩家不使用此插件功能的时候强制解禁了所有物品栏的点击事件（参考：https://image.prntscr.com/image/Sak5a0E4SC6-QHfNu3Lljw.png ）。其中的一个效果是玩家能够拿走编辑界面中的物品。我将这个问题报告给了其作者：https://www.spigotmc.org/threads/invsee-plugin-with-config-1-8-x-1-16-5.412888/#post-4093874
* [AutoSort](https://dev.bukkit.org/projects/autosort-chests)：这个插件会整理类似箱子的界面，而不会试图分辨普通箱子和其他插件创建的自定义物品栏界面。这会导致诸如本插件的编辑界面失效。相关提交：https://github.com/DougKeller/AutoSort/issues/2
* [WildStacker](https://github.com/BG-Software-LLC/WildStacker)：部分用户报告称该插件可能不兼容本插件。我还没详细浏览过这个插件，因此尚不知晓问题究竟出在哪里，或是否与此插件的堆叠逻辑有关。但是，它们大部分的物品栏点击事件都忽略了取消的点击事件，而本插件都会早早取消它们。另外，我注意到他们使用了一种“发光”附魔：本插件不能很好支持自定义附魔，所有使用这个发光附魔效果的物品都会在重载插件后失效。
* 尝试载入 javaassist 类插件的问题：部分用户报告称本插件不能找到或载入 javaassist 类（https://discord.com/channels/606329645779910686/606332085308751892/816261390708244511 ，https://discord.com/channels/606329645779910686/606332085308751892/877061080667553832 ）。但是，本插件并未使用 javaassist 库，所以我并不能解释为什么会出现这个错误。因为 javaassist 是用于动态解读字节码的库，我的猜测是其他的插件，或是特殊的服务端核心，甚至是服务器托管商，正尝试在运行时修改本插件的 jar 文件。一个用户贴出了他的插件列表（https://pastebin.com/0v26ffRm）。如果你也遇到了这个问题，检查你是否安装了相同的插件，检查它们是否使用了 javaassist 库，或其他可能内部调用了 javaassist 的字节码解读库，如 ASM。
* [Knokko's Custom Items](https://www.spigotmc.org/resources/knokkos-custom-items.88182/)：插件会每隔一段时间扫描玩家的背包和装备以检查某些物品是否需要“更新”。在这种情况下，插件似乎会对它的自定义物品设置一个 `LastExportTime` 时间戳，导致 Minecraft 和本插件无法匹配，使得物品在某些情况下无法堆叠，或是本插件不接受此类物品。有关报告：https://github.com/knokko/custom-items-gradle/issues/138
* [Tracking Compass](https://www.spigotmc.org/resources/tracking-compass.79777/)：插件（我检查了 5.4 版本）强制解禁了不匹配任何插件物品栏界面标题的点击事件。这允许玩家拿出物品栏中的物品，或进行诸如交易/合成等本应被阻止的操作。这也可以造成物品复制漏洞。
    另外，此插件通过标题识别自己的物品栏。这通常来讲是不安全的。例如，本插件允许玩家重命名他们的商店。玩家可以将名称修改为和此插件标题相同的名称，然后使得该插件在物品栏中干本不应做的事。对于此插件更好的替代方法是追踪玩家打开的每个自定义物品栏，并在 InventoryClickEvent 处理过程中判断界面是否属于自身，并在收到 InventoryCloseEvent 时停止追踪。
* Citizens：如果你遇到了诸如“IllegalStateException: no implementation set”的报错，你需要做两件事来解决：
    * 更新你的 Citizens 插件。为了解决 [Spigot 卸载插件类](https://hub.spigotmc.org/jira/browse/SPIGOT-6621)改动的问题，此插件决定先在其他（软）依赖它的插件卸载时先卸载。这也会禁用 CitizensAPI，导致这些错误产生：本插件尝试在 CitizensAPI 被禁用后回调其操作。
        在较新的 Citizens 版本上，他们部分回退了改动：在相似情况下不是完全禁用 Citizens，而是“只”触发保存所有 NPC 的操作并禁用进一步的 NPC 保存。因为 CitizensAPI 仍然启用，所以这个问题应当得到了解决。但你可能仍然会因为 NPC 没有正确保存而遇到其他问题。
    * 确保没有（软）依赖 Citizens 的插件会在服务器卸载流程外被动态禁用。这可以防止 Citizens 插件部分禁用的流程被阻止，也可以防止 NPC 没有正确保存的问题出现。
* [DiscordSRV](https://github.com/DiscordSRV/DiscordSRV)：插件将 Bukkit 底层的事件系统实现完全打乱了。他们甚至将 Bukkit 底层的数据结构替换成了他们自己的，或将所有注册的事件处理器改写成了自己的实现。过去由此引发的一个问题是：https://github.com/DiscordSRV/DiscordSRV/issues/1347
    我上次检查（2021.12.26）时，这些改变的初级目的是能对所有事件反应，并检测哪些插件取消了指定事件。但是，目前为止大部分上述操作都只在调试模式启用时用到。
    这部分的问题在稍后版本的 DiscordSRV 中解决了。但是，如果你在使用此插件的时候遇到了任何问题，尤其是有关事件、事件排序、事件注册/注销等，首先尝试移除此插件并禁用所有调试功能（`Debug`、`DebugLevel` 等）后复现。
* [Mohist](https://github.com/MohistMC/Mohist)：在 Mohist 服务端上运行本插件是不受到官方支持的。我不会把时间用在 Spigot 端无法复现的问题上。你最好的选择就是联系 Mohist 开发人员，研究二者之间的差异是否能影响到诸如本插件在内的插件。即便如此，在 Mohist 上运行本插件仍然有几个已知问题：
    * [问题 #738](https://github.com/Shopkeepers/Shopkeepers/issues/738)：Mohist 报告称交易界面使用了错误的物品栏类型，这导致本插件部分出于安全目的的内部检查会使得界面在玩家与其交互时瞬间关闭。本插件的新版中，这个安全检查可通过设置 `disable-inventory-verfication` 禁用。这个设置也会在检测到服务器核心为 Mohist 时自动启用。
    * 在本插件的新版中，插件会执行一些基本的检查来验证服务端核心的某些功能会正常工作。其中之一是物品堆的比较功能（对基于物品的交易插件至关重要）。  
        一位用户报告称其中的一个检查（Bukkit 的 ItemStack 与 CraftItemStack 匹配检查失败）导致插件被禁用以防止更多问题出现。我尚未深入调查，也就是说我不知道什么东西导致了这个问题，或者只是某个物品出现了问题。但理想情况下，这应该报告给 Mohist 的开发人员让他们调试。如果你想要无视风险并继续使用本插件，你可以启用 `ignore-failed-server-assumption-tests` 设置。
* [Magma](https://github.com/magmafoundation/Magma)：出现在 Mohist 上的问题同样也能在 Magma 上复现。如果你遇到了交易界面关闭的问题，请将本插件内 `disable-inventory-verfication` 项设置为 `true`。如果你遇到了任何其他问题，你需要联系 Magma 的开发者，看他们是否有意愿解决问题。
* [NoVillagerTrade](https://www.spigotmc.org/resources/novillagertrade.75680/)：这个插件阻止开启交易界面，同样也会阻止开启本插件的界面。如果你只想要阻止非本插件的交易界面：本插件的配置中包含了 `disable-other-villagers` 设置供你使用。
* [ToolStats](https://www.spigotmc.org/resources/toolstats.28374/)：这个插件会在多种情况下（如破坏方块、击杀实体/玩家等）修改手持物品的内部数据。对应地，如果你设置了需要此类物品参与的交易，则只能在统计数据相同的情况下才有效。  
另外，一位用户（使用 Paper 作为服务端核心）报告称这个插件有时会导致“交易中止：所需物品不与此交易匹配”的错误，即便工具是参与出售而非收购的物品。但是，这个消息一般只会在其他插件在交易过程中修改了结果时出现。  
    我尚未尝试自行复现该问题，但一位用户猜测这可能是 Paper 独有的问题，原因是此插件修改了物品的描述，但使用了新旧格式混用的文本组件。Paper 会对这些格式不一的物品自动转化。这就能解释为什么交易一开始有效（显示结果物品），却会在过程中被打断，因为交易结果产生的物品与本插件预期的不同：界面内的交易结果物品经过了 Paper 核心的转化，而原本交易中的物品没有（即交易是最近设置的，且本插件尚未重载）。
* [AttributeHider](https://www.spigotmc.org/resources/attributehider.10604/)：某些情况下，这个插件可能会修改物品栏或村民交易界面中的物品。这可能导致参与交易的物品不能匹配，或交易结果的物品遭到修改而无法正常取出。  
    根据插件的更新日志，插件先前已经以只通过编辑发出数据包达到修改物品描述为目的进行了重构。但是，这个问题似乎没有完全被解决。相关议题：https://github.com/Warren1001/attributehider/issues/7
    编辑：作者对插件进行了一些改动，可能修复了这个问题。但我还未亲自测试。另外，如果你先前使用过这个插件，先前被此插件修改的物品仍然可能无法参与交易。
* NoCheatPlus（与其他反作弊插件）：为了验证玩家是否能在创建新商店时能够打开箱子，本插件会对箱子方块触发一次虚拟点击（即 PlayerInteractEvent）且同时会检查是否有插件取消该事件。但是，对于反作弊插件，如 NoCheatPlus，可能会尝试检测并阻止不在玩家触及范围内的此类事件。所以玩家在远离货架箱子时创建商店可能会出现无法创建的问题。  
    目前，本插件办无法绕过反作弊的此类限制。只能先将插件中对应的反作弊检查关闭。  
    在 NoCheatPlus 中，配置文本中有可禁用的选项（`blockinteract` 一栏下的 `direction`、`reach` 与 `visible` 选项），且也有对应权限节点让玩家不受到此类检查（`nocheatplus.checks.blockinteract.reach`、`nocheatplus.checks.blockinteract.direction`、`nocheatplus.checks.blockinteract.visible`）。  
    一种无需对接 API 即可解决此问题的方法是，向本插件的配置文件中添加一个新选项，使得交互过程中玩家临时拥有这些权限（https://github.com/Shopkeepers/Shopkeepers/issues/786 ）从而绕过检查。但该功能尚未实装。
* [ItemEffects](https://www.spigotmc.org/resources/item-effects.91208/)：部分用户报告称玩家被按次序多次击杀导致服务器卡顿，并在与商店交易时复制了他们手持或交易的物品。他们将问题定位至了此插件。议题下没有发现更多信息，例如它是否与本插件有关联，或哪些物品遭到了复制。同时也无法知晓单独安装此插件是否会发生该问题，或者以上现象是多个插件共同导致的结果。
    在检查插件时，我注意到了几个*潜在*问题：插件会对几个特殊名称的界面有反应。如果某个界面包含指定名称（`Item-Effecter`、`Stored Armors`、`Choose Effects`、`Choose Armor type`、`Item-Effecter-Aromor`），插件会将其中的物品丢出。且这个插件可以在玩家物品中包含指定描述时给予特定效果（可能包含某些特殊效果，如瞬间伤害）。可能会让插件在一刻前记住玩家的生命值，从而借此回复血量。但是，这些潜在的问题尚未被证实，也无法证明它们是否与上述的物品复制问题存在关联。
* ViaVersion：
    * 2024-7-30：在 1.21 的服务器上，使用旧版（1.20.x）客户端的玩家反馈称交易输出物品不显示（https://github.com/Shopkeepers/Shopkeepers/issues/899 ）。
    * 部分用户遇到了打开包含部分特殊交易的商店界面时断线的问题（错误显示：大致为“DecoderException”有关的内容）。  
        部分用户反馈称这个问题只影响到某些特殊物品。其他玩家能通过不包含任何 NBT 数据的物品复现这个问题。在某些情况下，这个问题只影响到需要两个物品参与的交易。另外，用户反馈称更新 ViaVersion 的新快照版本后似乎解决了这个问题。
* [Protocolize](https://www.spigotmc.org/resources/protocolize-protocollib-for-bungeecord-waterfall-velocity.63778/)：一位用户遇到了某些情况下交易不生效的问题（2022-6-28）：客户端显示交易的输出物品，但服务器和本插件反馈了该格子为空。另外，这个问题可能源自群组服上安装的该插件（或依赖该插件的其他插件）。
* [CustomEnchantments](https://www.spigotmc.org/resources/%E2%9C%AFcustom-enchantments-2-1-16-1-18-%E2%9C%AF-discontinued.89793/)：这个插件包含了一个功能，会定期扫描玩家打开的物品栏，并删除其中的某些重复物品。这个功能基本会影响所有带有对应数据的附魔工具。之后插件就会显示“已移除重复的物品”。这个功能是默认启用的，但可以在配置中的 `AntiDupe` 选项禁用。
    这个选项也会删除商店界面如编辑界面内的重复物品。所以当该功能启用时，你将会在设置需要同种物品的多条交易，或者玩家尝试使用同一物品多次购买时出现问题。
* [CMI](https://www.spigotmc.org/resources/cmi-298-commands-insane-kits-portals-essentials-economy-mysql-sqlite-much-more.3742/)：一位用户报告称这个插件与本插件一同运行时会导致本插件无法启动，并显示“服务器尝试测试”失败，并显示“Cannot invoke 'org.bukkit.enchantments.EnchantmentWrapper.getEnchantments()'”和“'org.bukkit.enchantments.EnchantmentWrapper.getEnchantments()' is null”。他们使用的服务端核心为 1.19.4 的 Paper 核心。没有获得更多信息，除了他们提到将 CMI 移除可解决此问题。也许 CMI 以某种方式修改了 Bukkit 的附魔。但没有获得插件或其源码的情况下，我无法着手调查或解决这个问题。
* [PlugMan](https://dev.bukkit.org/projects/plugman)：通过此插件重载 Citizens 插件会导致 CitizensAPI 处在一种不可用的状态（API 实现尚未设置）。我尚未验证这个问题，但有一位用户猜测这可能是重载方法使得插件的类复制一份并在新的类载入器中载入导致的：即，第二个 CitizensAPI 实例被载入，但其他插件（如本插件）仍然在使用第一个实例。如果是这样的话，我不觉得本插件或 Citizens 能够有方法解决。你需要避免使用 PlugMan 重载单独的插件。相同的问题可能也会出现在重载本插件的其他依赖插件上。
* [ShopkeepersAddon](https://www.spigotmc.org/resources/shopkeepers-addon-navigation-economy-plotsquared-vault-integration.98400/)：一位用户报告称，服务器在尝试重载本插件时崩溃，且重载耗时超过十秒。他们设置了大约 550 个交易商店。已证实此插件在本插件的商店卸载时会处理大量内容（`GuiListeners.onShopkeeperDelete`）。移除这个插件能够解决这个问题并使得重载时间“只花了几秒”。
* [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%A8itemsadder%E2%AD%90emotes-mobs-items-armors-hud-gui-emojis-blocks-wings-hats-liquids.73355/)：在过去，部分用户反馈称使用该插件的物品与本插件的交易功能时遇到问题。尚不清楚是什么导致了这些问题，或是哪些物品受到了影响。另外，另一位用户报告称描述中包含表情的该插件物品不会在交易输出格子中显示。另一位用户提供了此插件创建的物品示例，其中的文本数据中包含旧格式的颜色代码：（尤其是 Paper 的）服务端可能会在多种情况下将此类物品的内部数据转化为其他形式，包括本插件界面内存储的物品，导致转化后的物品不再匹配原物品。
* [ExecutableItems](https://www.spigotmc.org/resources/custom-items-plugin-executable-items.77578/)：一位用户注意到非管理员玩家无法交易。随后证明他们使用了此插件创建了这些物品并设置了物品 `cancel-merchant`（禁止交易）属性。见 https://docs.ssomar.com/executableitems/configurations/item-configuration/item-restrictions-resistances 。
* SuperiorSkyBlock2：一位用户反馈称与本插件交易界面有关的问题是该插件导致的。在开启调试模式后，本插件显示了“Ignoring late inventory event (InventoryClickEvent): UI session 'trading' of player X is no longer valid. Some plugin might have unexpectedly closed the inventory while the event was still being processed!”（忽略晚期物品栏事件（InventoryClickEvent）：玩家 X 的界面会话“trading”不再有效。某些插件可能在事件还在处理的时候将该界面关闭了！）。最终他们通过将此插件设置中 `protection: false` 的选项解决了这个问题。
* [Honey-AntiCrash](https://github.com/alphaalek/Honey-AntiCrash)：一位用户报告称在启用该插件后点击本插件的翻页按钮会被踢出。没有提供更多信息。
* [GUIPlus](https://www.spigotmc.org/resources/guiplus-effortlessly-create-interactive-guis-in-game-gui-builder-1-8-1-21.38664/)：2024-08-09：一位用户尝试在该插件的菜单中打开本插件的交易界面，但交易界面瞬间关闭了。开启本插件的调试模式后显示了如下内容：`Closing inventory of type CHEST with title 'Default Title' for <user>, because a different open inventory was expected for 'trading'.`（`关闭了玩家 <user> 打开的标题为 'Default Title'，类型为 CHEST 的界面，因为打开的下一个界面应当为 'trading'。`）。最终启用了 `执行命令前关闭界面` 的选项也无法生效。这个问题是这样产生的：
    1. 此插件在 `InventoryClickEvent` 内执行命令。根据 [Bukkit 的相关事件文档](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryClickEvent.html)，事件处理器应当避免任何会影响当前界面的操作，包括关闭界面或打开其他界面。正确的解决办法应当是让此插件对物品点击操作（即点击后执行命令）添加 1 刻延迟。
    2. 本插件同时在其后处理了 `InventoryClickEvent` 事件。如果本插件检测到点击事件中的内容与当前打开的界面不匹配的话，它会假设当前出现了一些未知问题并试图关闭界面。这个保护措施可以在配置文本中的 `disable-inventory-verification` 解决，但一般情况下建议将其保持开启。
        另一个解决办法是通过诸如 [Denizen](https://www.spigotmc.org/resources/denizen.21039/) 的脚本插件手动为 `shopkeeper open <ID>` 命令添加 1 刻的延迟，下列示例可通过命令 `/ex run openShopkeeper` 触发。
        ``` YAML
        openShopkeeper:
        type: task
        debug: false
        script:
        - wait 1t
        - execute as_player "shopkeeper open <id>"
        ```
        如果有人知道延迟命令 1 刻执行更轻量的方法，请务必让我知道。
* 客户端侧模组：如果你碰到任何与其有关的问题，请尝试卸载所有客户端模组后复现。
    * [OffersHUD](https://github.com/naari3/offers-hud)：用户报告称打开交易界面时遇到问题。见 https://github.com/naari3/offers-hud/issues/50

如果你遇到客户端掉线或交易不正常的情况，请尝试不安装任何诸如 ViaVersion、ProtocolLib 等数据包翻译插件，以及依赖这些插件的插件，和 Protocolize 等插件。

## 旧版本的 Minecraft 与本插件

* MC 1.20.5/1.21：
    * 随着 Minecraft 对[物品堆叠组件](https://zh.minecraft.wiki/w/%E7%89%A9%E5%93%81%E5%A0%86%E5%8F%A0%E7%BB%84%E4%BB%B6)的改动，物品数据的验证变得更加严格，且 Minecraft 可能会移除无效的物品数据。例如，如果你之前设置了无效等级如 `0` 之类的附魔，则这些数据会在更新到 1.20.5+ 之后被删除。这不只影响到本插件内的物品，而是服务器上的所有物品。不幸的是，我没有任何方法能够迁移这些自定义物品数据且能对服务器上所有物品生效的方法。如果有，请务必让我知道！
    * Spigot 1.20.5/6 包含了一些有关物品的漏洞，会导致本插件出现问题。例如 [SPIGOT-7789](https://hub.spigotmc.org/jira/browse/SPIGOT-7789)[^5]（烟花火箭物品），[SPIGOT-7804](https://hub.spigotmc.org/jira/browse/SPIGOT-7804)[^6]（成书物品）、[SPIGOT-7671](https://hub.spigotmc.org/jira/browse/SPIGOT-7671)[^7]（带有无效标志的物品）。这些问题已被部分修复，但只在 1.21 版本上有效。
* GriefPrevention：为了防止其他插件与本插件的实体（包括防止保护插件显示“你不能与该实体交互”的信息）进行交互，本插件选择尽可能早地取消交互事件，这样其他插件就能忽略它。这对大多数插件有效（如 WorldGuard）。但此插件处理实体事件也同样早。因此处理事件的先后顺序取决于其在服务器启动前的加载顺序。本插件在 plugin.yml 中有一个“loadbefore”设置，允许你将其设置在该插件启动前启动本插件。但是，这个顺序可能会在你尝试手动重载本插件且不预先重载该插件时出现问题。此插件的开发者也承诺在 GP v20 中考虑修改事件处理的优先级（[参考](https://github.com/TechFortress/GriefPrevention/issues/290#issuecomment-519691413)）。在该插件的[一个提交](https://github.com/TechFortress/GriefPrevention/pull/1200)中也反映了相关问题。
    解决办法已在 v2.13.0 添加，可能可以解决这个问题。
* MC 1.18.2：早期版本的 1.18.2 Spigot 构建有一些区块载入相关的问题（https://hub.spigotmc.org/jira/browse/SPIGOT-6980 ），*可能*导致本插件商店的激活（生成、参与刻运算等）。这个问题已经在稍后的构建中被修复，因此请确保你的服务端核心是最新的。
* [ChatColor](https://dev.bukkit.org/projects/chatcolor-s)：在重命名本插件的商店时，插件会使用玩家的下一条聊天输出来决定村民的名称。默认情况下交易商店不可使用彩色字符（但你可以在配置文件中的 `name-regex` 部分解除该限制）。但是，这个 ChatColor 插件看起来向玩家所有的聊天消息中插入了（优先级为最低，即聊天事件的最早期）彩色字符。取决于本插件读取聊天栏消息的随机顺序，以及受此插件对聊天颜色的影响，插件可能会提示聊天名称无效，因为插件实际收到的聊天消息包含了彩色字符。
    若要解决这个问题，你首先需要移除此插件，或在配置中设置允许聊天颜色出现在交易商店的名称中。我向作者提及了有关的不兼容问题：https://dev.bukkit.org/projects/chatcolor-s#c371
    编辑：该插件的新版本现在包含了一个设置，可手动修改本插件对聊天事件修改的优先级。但是，这可能只在你检出名称相关的问题时有效。
    新版本的本插件包含了一个默认解决该问题的方法：本插件重新排列注册的聊天事件监听器，确保它总是先读取聊天消息，然后才允许其他插件对聊天进行修改。
* MC 1.16.3：部分用户报告称安装本插件（v2.12.0）的情况下普通村民受到了影响。表现为普通村民的编辑界面只能打开一次，随后只能打开交易界面。我没有亲自复现照这个问题，也不知道未来的 Minecraft 版本是否也受到影响。但是，在升级至 1.16.5 之后，问题就被解决了。这个问题会影响到 Spigot 和 Paper 端。
* [**MC-121932**](https://bugs.mojang.com/browse/MC-121932)[^8]：来源于 Minecraft 本身的漏洞，会在进行某些交易时拿走错误的物品（如要求的物品类型相同但 NBT 数据不同，且玩家放入的顺序与实际展示顺序相反）。但是，这只会影响到本插件的旧版本，新版本中我们重构了交易的实现方法。我们会检查条件并取消对应的交易尝试。该问题已在 MC 1.16 被修复。
* [**MC-141494**](https://bugs.mojang.com/browse/MC-141494)[^9]：来源于 Minecraft 的一个漏洞，手持成书与村民交易时会出现问题，插件会误以为你打开了交易界面，即便当前显示的是书本。我们因此禁用了玩家在手持书本时对本插件实体的任何交互行为。
    该问题已在 MC 1.16 被修复，所以我们在之后的版本中移除了这个限制。
* [**MC-129515**](https://bugs.mojang.com/browse/MC-129515)[^10]：在过去的 Minecraft 版本中，双击任何物品会导致触发交易但不会返回物品，即玩家不会收到所有交易输出物品。在我们的交易实现方法中，我们因此在输出物品匹配当前物品的条件下禁用了该物品栏操作。自 MC 1.14 以来，Mojang 也通过完全禁用玩家在交易界面双击收集物品的方式修复了这个问题（https://bugs.mojang.com/browse/MC-148867 ）。我们自己的修复方式仍然存在，但再也无法在原版 Minecraft 中触发。
* Cubedcraft：一位用户正在 1.8.8 的 Cubedcraft 上使用 v2.2.4 版本的本插件。交易不在界面内显示。我不能追踪这个问题。在同种服务器和插件的情况下，插件能正常工作。另外，他提供的安装插件列表没有任何指向问题的线索。
* 如果你正在运行低于 MC 1.11 的服务器，你不能切换商店实体的僵尸与骷髅变种。任何使用了其变种的实体商店都会被切换为普通的僵尸与骷髅。
* 以僵尸或骷髅变种为实体的商店在更新至 MC 1.11 或更高的版本之后将不能再在低版本的 Minecraft 版本上载入（会导致丢失）。
* 在 MC 1.9 和 1.10 的版本中，任何类型的刷怪蛋都会被当做商店创建物品，如果你正在更新，你需要将配置文件中的数据值改为 0 才可让刷怪蛋正常工作。对于 1.11 和之后的版本，配置格式已被相应更新，以便指定刷怪蛋类型（见 v1.83 的更新日志）。
* 在最新的 MC 1.8.x 版本中，Minecraft 的交易逻辑被稍稍改变（也影响到了本插件）：如果交易需要特殊数据的物品（如自定义名称、描述、附魔等），Minecraft 现在只允许完全包含这些数据的物品进行交易。提供的物品可以拥有其他的额外数据。
* `always-show-nameplates` 选项不在 MC 1.8 上生效。在最新版本上则可以正常工作。
* 在本插件的早期版本中，服务器崩溃和不正确的关闭会导致活跃的非 Citizens 交易商店实体复制。

[^1]: 受影响版本为 1.9-1.21（正式版），当前状态为“已修复”。

[^2]: 受影响版本为 1.18.1-1.18.2（正式版），当前状态为“已修复”。

[^3]: 当前状态为“已修复”。

[^4]: 受影响版本为 1.14.4-1.21（正式版），当前状态为“未修复”。

[^5]: 受影响版本为 1.21（正式版），当前状态为“已修复”。

[^6]: 受影响版本为 1.20.5-1.21（正式版），当前状态为“已修复”。

[^7]: 受影响版本为 1.20.5-1.21（正式版），当前状态为“未修复”。

[^8]: 受影响版本为 1.12.2-1.13.1（正式版），当前状态为“已修复”。

[^9]: 受影响版本为 1.13.2-1.15.2（正式版），当前状态为“已修复”。

[^10]: 当前状态为“无法复现”（新版本已将该漏洞以另一种方式修复，见下文的 [MC-148867](https://bugs.mojang.com/browse/MC-148867)）。