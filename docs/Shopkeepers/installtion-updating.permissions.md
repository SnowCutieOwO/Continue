# 权限

通常情况下，默认的权限设置能开箱即用：拥有 OP 权限的玩家能使用所有内容，而普通玩家只能进行交易和使用基本命令（如 `/shopkeeper list`），并通过[商店创建物品](creating-shops.md#商店创建物品)或命令（[如果在配置里启用的话](installtion-updating.configuration.md)）创建商店。

若要进行调整，你需要通过“权限插件”修改指定玩家或权限组的权限分配。

本章节有每个权限的简短描述，`default: true` 表示每个玩家都拥有这个权限。

你也可以在插件的 [plugin.yml](https://github.com/Shopkeepers/Shopkeepers/blob/master/modules/main/src/main/resources/plugin.yml) 中找到所有保持最新的**静态**权限、默认分配的权限及其子权限。

```YAML
permissions:
    # Command permissions:
    shopkeeper.help:
        description: Display the command help
        default: true
    shopkeeper.reload:
        description: Reload the plugin
        default: op
    shopkeeper.debug:
        description: Toggle debug mode and access debugging commands
        default: op
    shopkeeper.cleanup-citizen-shopkeepers:
        description: Delete invalid Citizen shopkeepers via command
        default: op

    shopkeeper.list.own:
        description: List your own player shops
        default: true
    shopkeeper.list.others:
        description: List the player shops of other players
        default: op
    shopkeeper.list.admin:
        description: List the admin shops
        default: op

    shopkeeper.remove.own:
        description: Remove your own shops via command
        default: op
    shopkeeper.remove.others:
        description: Remove the shops of other players via command
        default: op
    shopkeeper.remove.admin:
        description: Remove admin shops via command
        default: op

    shopkeeper.remove-all.own:
        description: Remove all of your own shops via command
        default: op
    shopkeeper.remove-all.others:
        description: Remove all the shops of another player via command
        default: op
    shopkeeper.remove-all.player:
        description: Remove the player shops of all players via command
        default: op
    shopkeeper.remove-all.admin:
        description: Remove all admin shops via command
        default: op

    shopkeeper.notify.trades:
        description: Allows turning trade notifications for you on or off by command
        default: true
    shopkeeper.give:
        description: Give shop creation items via command
        default: op
    shopkeeper.givecurrency:
        description: Give currency items via command
        default: op
    shopkeeper.setcurrency:
        description: Set the currency items via command
        default: op
    shopkeeper.convertitems.own:
        description: Convert your own items via command
        default: op
    shopkeeper.convertitems.others:
        description: Convert items of other players via command
        default: op
    shopkeeper.remote:
        description: Remotely open shops via command
        default: op
    shopkeeper.remote.otherplayers:
        description: Remotely open shops for other players
        default: op
    shopkeeper.remoteedit:
        description: Remotely edit shops via command
        default: op
    shopkeeper.transfer:
        description: Transfer ownership of player shops
        default: op
    shopkeeper.settradeperm:
        description: Set the trade permissions for admin shops
        default: op
    shopkeeper.settradedcommand:
        description: Set the traded command for the held item
        default: op
    shopkeeper.setforhire:
        description: Set a shopkeeper to be for hire
        default: op
    shopkeeper.snapshot:
        description: Access shopkeeper snapshot commands
        default: op
    shopkeeper.edit-villagers:
        description: Edit regular villagers
        default: op
    shopkeeper.edit-wandering-traders:
        description: Edit regular wandering traders
        default: op

    # General permissions
    shopkeeper.trade:
        description: Allows trading with shopkeepers
        default: true
    shopkeeper.hire:
        description: Allows hiring of shopkeepers
        default: true
    shopkeeper.bypass:
        description: Bypass player shop restrictions (access player shops of others)
        default: op
    shopkeeper.maxshops.unlimited:
        description: Allows the creation of an unlimited number of shops
        default: op
    # Dynamic max shops permissions: The default max shops limit is configured in the config.
    # shopkeeper.maxshops.<count>
    #   description: The maximum number of shops a player can have, only values setup in the config can be used
    #   default: false

    # Shop types:
    shopkeeper.admin:
        description: Create and modify admin shopkeepers
        default: op
    shopkeeper.player.sell:
        description: Create selling player shopkeepers
        default: false
    shopkeeper.player.buy:
        description: Create buying player shopkeepers
        default: false
    shopkeeper.player.trade:
        description: Create trading player shopkeepers
        default: false
    shopkeeper.player.book:
        description: Create books selling player shopkeepers
        default: false
    shopkeeper.player:
        description: Create any type of player shopkeeper
        default: true
        children:
            shopkeeper.player.sell: true
            shopkeeper.player.buy: true
            shopkeeper.player.trade: true
            shopkeeper.player.book: true

    # Shop objects:
    shopkeeper.sign:
        description: Create sign shopkeepers
        default: true
    shopkeeper.hanging-sign:
        description: Create hanging sign shopkeepers
        default: true
    shopkeeper.citizen:
        description: Create Citizens NPC shopkeepers
        default: op
    shopkeeper.entity.*:
        description: Create shopkeepers of any mob type
        default: true
    # Dynamic mob type permissions:
    # You can find all entity type names here:
    # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html
    # The permissions use the lower case entity type name.
    # shopkeeper.entity.<mob-type>:
    #   description: Create shopkeepers of the specific mob type
    #   default: false

    shopkeeper.trade-notifications.admin:
        description: Receive trade notifications for admin shops
        default: false
    shopkeeper.trade-notifications.player:
        description: Receive trade notifications for player shops
        default: false

    # Star notation: Includes all other permissions
    shopkeeper.*:
        description: Access to everything
        default: op
        children:
            shopkeeper.help: true
            shopkeeper.reload: true
            shopkeeper.debug: true
            shopkeeper.cleanup-citizen-shopkeepers: true
            shopkeeper.list.own: true
            shopkeeper.list.others: true
            shopkeeper.list.admin: true
            shopkeeper.remove.own: true
            shopkeeper.remove.others: true
            shopkeeper.remove.admin: true
            shopkeeper.remove-all.own: true
            shopkeeper.remove-all.others: true
            shopkeeper.remove-all.player: true
            shopkeeper.remove-all.admin: true
            shopkeeper.give: true
            shopkeeper.givecurrency: true
            shopkeeper.convertitems.own: true
            shopkeeper.convertitems.others: true
            shopkeeper.remote: true
            shopkeeper.remote.otherplayers: true
            shopkeeper.remoteedit: true
            shopkeeper.transfer: true
            shopkeeper.settradeperm: true
            shopkeeper.setforhire: true
            shopkeeper.trade: true
            shopkeeper.hire: true
            shopkeeper.bypass: true
            shopkeeper.maxshops.unlimited: true
            shopkeeper.admin: true
            shopkeeper.player: true
            shopkeeper.sign: true
            shopkeeper.citizen: true
            shopkeeper.entity.*: true
```