# 默认 config.yml

``` YAML
  
version:
  # This is the current version of Towny. Please do not edit.
  version: 0.102.0.0
  # This is for showing the changelog on updates. Please do not edit.
  last_run_version: 0.102.0.0
  
language:
  # The language file you wish to use for your default locale. Your default locale is what
  # will be shown in your console and for any player who doesn't use one of the locales below.
  # Available languages: bg-BG.yml, cz-CZ.yml, da-DK.yml, de-DE.yml, en-US.yml,
  # es-AR.yml, es-CL.yml, es-EC.yml, es-ES.yml, es-MX.yml, es-UY.yml, es-VE.yml,
  # fr-FR.yml, he-IL.yml, id-ID.yml, it-IT.yml, ja-JP.yml, ko-KR.yml, nl-NL.yml,
  # no-NO.yml, pl-PL.yml, pt-BR.yml, pt-PT.yml, ro-RO.yml, ru-RU.yml, sr-CS.yml,
  # sv-SE.yml, th-TH.yml, tl-PH.yml, tr-TR.yml, uk-UA.yml, vi-VN.yml, zh-CN.yml,
  # zh-TW.yml
  #
  # If you want to override any of the files above with your own translations you must:
  # - Copy the file from the towny\settings\lang\reference\ folder 
  #   into the lang\override\ folder and do your edits to that file.
  # If you want to override ALL locales, to change colouring for instance, you must:
  # - Copy the language strings you want to override into 
  #   the towny\settings\lang\global.yml file.
  #
  # Your players will select what locale that Towny shows them 
  # by changing their Minecraft client's locale.
  language: en-US.yml
  
  # The languages you wish to have enabled. Set to '*' to use all available languages.
  # If you would like to only allow 4 languages use: en-US,ru-RU,es-ES,fr-FR
  # If a player's locale isn't enabled or isn't available it will use the language above instead.
  # For compatibility reasons, en-US will always be considered enabled.
  enabled_languages: '*'
  
  
############################################################
# +------------------------------------------------------+ #
# |         A Note on Permission Nodes and Towny         | #
# +------------------------------------------------------+ #
#                                                          #
# For a full list of permission nodes and instructions     #
# about TownyPerms visit: https://git.io/JUBLd             #
# Many admins neglect to read the opening paragraphs of    #
# this wiki page and end up asking questions the wiki      #
# already answers!                                         #
#                                                          #
############################################################
permissions: ''
  
  
############################################################
# +------------------------------------------------------+ #
# |                Town and Nation levels                | #
# +------------------------------------------------------+ #
############################################################
  
levels:
  
  # Guide On How to Configure: https://github.com/TownyAdvanced/Towny/wiki/How-Towny-Works#configuring-town_level-and-nation_level
  # One note: You can add and remove levels from this list, but you should never remove the first numResidents: 0 block.
  town_level:
  - townBlockTypeLimits: {}
    upkeepModifier: 1.0
    townOutpostLimit: 0
    numResidents: 0
    debtCapModifier: 1.0
    namePostfix: ' Ruins'
    bankCapModifier: 1.0
    mayorPrefix: 'Spirit '
    townBlockBuyBonusLimit: 0
    namePrefix: ''
    mayorPostfix: ''
    peacefulCostMultiplier: 1.0
    townBlockLimit: 1
    resourceProductionModifier: 1.0
  - townBlockTypeLimits: {}
    upkeepModifier: 1.0
    townOutpostLimit: 0
    numResidents: 1
    debtCapModifier: 1.0
    namePostfix: ' (Settlement)'
    bankCapModifier: 1.0
    mayorPrefix: 'Hermit '
    townBlockBuyBonusLimit: 0
    namePrefix: ''
    mayorPostfix: ''
    peacefulCostMultiplier: 1.0
    townBlockLimit: 16
    resourceProductionModifier: 1.0
  - townBlockTypeLimits: {}
    upkeepModifier: 1.0
    townOutpostLimit: 1
    numResidents: 2
    debtCapModifier: 1.0
    namePostfix: ' (Hamlet)'
    bankCapModifier: 1.0
    mayorPrefix: 'Chief '
    townBlockBuyBonusLimit: 0
    namePrefix: ''
    mayorPostfix: ''
    peacefulCostMultiplier: 1.0
    townBlockLimit: 32
    resourceProductionModifier: 1.0
  - townBlockTypeLimits: {}
    upkeepModifier: 1.0
    townOutpostLimit: 1
    numResidents: 6
    debtCapModifier: 1.0
    namePostfix: ' (Village)'
    bankCapModifier: 1.0
    mayorPrefix: 'Baron Von '
    townBlockBuyBonusLimit: 0
    namePrefix: ''
    mayorPostfix: ''
    peacefulCostMultiplier: 1.0
    townBlockLimit: 96
    resourceProductionModifier: 1.0
  - townBlockTypeLimits: {}
    upkeepModifier: 1.0
    townOutpostLimit: 2
    numResidents: 10
    debtCapModifier: 1.0
    namePostfix: ' (Town)'
    bankCapModifier: 1.0
    mayorPrefix: 'Viscount '
    townBlockBuyBonusLimit: 0
    namePrefix: ''
    mayorPostfix: ''
    peacefulCostMultiplier: 1.0
    townBlockLimit: 160
    resourceProductionModifier: 1.0
  - townBlockTypeLimits: {}
    upkeepModifier: 1.0
    townOutpostLimit: 2
    numResidents: 14
    debtCapModifier: 1.0
    namePostfix: ' (Large Town)'
    bankCapModifier: 1.0
    mayorPrefix: 'Count Von '
    townBlockBuyBonusLimit: 0
    namePrefix: ''
    mayorPostfix: ''
    peacefulCostMultiplier: 1.0
    townBlockLimit: 224
    resourceProductionModifier: 1.0
  - townBlockTypeLimits: {}
    upkeepModifier: 1.0
    townOutpostLimit: 3
    numResidents: 20
    debtCapModifier: 1.0
    namePostfix: ' (City)'
    bankCapModifier: 1.0
    mayorPrefix: 'Earl '
    townBlockBuyBonusLimit: 0
    namePrefix: ''
    mayorPostfix: ''
    peacefulCostMultiplier: 1.0
    townBlockLimit: 320
    resourceProductionModifier: 1.0
  - townBlockTypeLimits: {}
    upkeepModifier: 1.0
    townOutpostLimit: 3
    numResidents: 24
    debtCapModifier: 1.0
    namePostfix: ' (Large City)'
    bankCapModifier: 1.0
    mayorPrefix: 'Duke '
    townBlockBuyBonusLimit: 0
    namePrefix: ''
    mayorPostfix: ''
    peacefulCostMultiplier: 1.0
    townBlockLimit: 384
    resourceProductionModifier: 1.0
  - townBlockTypeLimits: {}
    upkeepModifier: 1.0
    townOutpostLimit: 4
    numResidents: 28
    debtCapModifier: 1.0
    namePostfix: ' (Metropolis)'
    bankCapModifier: 1.0
    mayorPrefix: 'Lord '
    townBlockBuyBonusLimit: 0
    namePrefix: ''
    mayorPostfix: ''
    peacefulCostMultiplier: 1.0
    townBlockLimit: 448
    resourceProductionModifier: 1.0
  
  # Guide On How to Configure: https://github.com/TownyAdvanced/Towny/wiki/How-Towny-Works#configuring-town_level-and-nation_level
  # One note: You can add and remove levels from this list, but you should never remove the first numResidents: 0 block.
  nation_level:
  - kingPostfix: ''
    nationCapitalBonusOutpostLimit: 0
    capitalPostfix: ''
    upkeepModifier: 1.0
    kingPrefix: 'Leader '
    capitalPrefix: ''
    numResidents: 0
    nationBonusOutpostLimit: 0
    namePostfix: ' (Nation)'
    bankCapModifier: 1.0
    townBlockLimitBonus: 10
    namePrefix: 'Land of '
    peacefulCostMultiplier: 1.0
    nationZonesSize: 1
    nationTownUpkeepModifier: 1.0
  - kingPostfix: ''
    nationCapitalBonusOutpostLimit: 0
    capitalPostfix: ''
    upkeepModifier: 1.0
    kingPrefix: 'Count '
    capitalPrefix: ''
    numResidents: 10
    nationBonusOutpostLimit: 1
    namePostfix: ' (Nation)'
    bankCapModifier: 1.0
    townBlockLimitBonus: 20
    namePrefix: 'Federation of '
    peacefulCostMultiplier: 1.0
    nationZonesSize: 1
    nationTownUpkeepModifier: 1.0
  - kingPostfix: ''
    nationCapitalBonusOutpostLimit: 0
    capitalPostfix: ''
    upkeepModifier: 1.0
    kingPrefix: 'Duke '
    capitalPrefix: ''
    numResidents: 20
    nationBonusOutpostLimit: 2
    namePostfix: ' (Nation)'
    bankCapModifier: 1.0
    townBlockLimitBonus: 40
    namePrefix: 'Dominion of '
    peacefulCostMultiplier: 1.0
    nationZonesSize: 1
    nationTownUpkeepModifier: 1.0
  - kingPostfix: ''
    nationCapitalBonusOutpostLimit: 0
    capitalPostfix: ''
    upkeepModifier: 1.0
    kingPrefix: 'King '
    capitalPrefix: ''
    numResidents: 30
    nationBonusOutpostLimit: 3
    namePostfix: ' (Nation)'
    bankCapModifier: 1.0
    townBlockLimitBonus: 60
    namePrefix: 'Kingdom of '
    peacefulCostMultiplier: 1.0
    nationZonesSize: 2
    nationTownUpkeepModifier: 1.0
  - kingPostfix: ''
    nationCapitalBonusOutpostLimit: 0
    capitalPostfix: ''
    upkeepModifier: 1.0
    kingPrefix: 'Emperor '
    capitalPrefix: ''
    numResidents: 40
    nationBonusOutpostLimit: 4
    namePostfix: ' Empire'
    bankCapModifier: 1.0
    townBlockLimitBonus: 100
    namePrefix: 'The '
    peacefulCostMultiplier: 1.0
    nationZonesSize: 2
    nationTownUpkeepModifier: 1.0
  - kingPostfix: ''
    nationCapitalBonusOutpostLimit: 0
    capitalPostfix: ''
    upkeepModifier: 1.0
    kingPrefix: 'God Emperor '
    capitalPrefix: ''
    numResidents: 60
    nationBonusOutpostLimit: 5
    namePostfix: ' Realm'
    bankCapModifier: 1.0
    townBlockLimitBonus: 140
    namePrefix: 'The '
    peacefulCostMultiplier: 1.0
    nationZonesSize: 3
    nationTownUpkeepModifier: 1.0
  
  
############################################################
# +------------------------------------------------------+ #
# |                   New Town Defaults                  | #
# +------------------------------------------------------+ #
############################################################
  
town:
  
  # Default public status of the town (used for /town spawn)
  default_public: 'true'
  
  # Default Open status of the town (are new towns open and joinable by anyone at creation?)
  default_open: 'false'
  
  # Default neutral status of the town (are new towns neutral by default?)
  default_neutral: 'false'
  
  # Default status of new towns, (are they allowed to have a war/battle?)
  # This setting is not used internally by Towny. It is available for war/battle plugins to use.
  # Setting this false should mean your town cannot be involved in a war supplied by another plugin.
  default_allowed_to_war: 'true'
  
  # Default town board
  default_board: /town set board [msg]
  
  # Setting this to true will set a town's tag automatically using the first four characters of the town's name.
  set_tag_automatically: 'false'
  
  # When set, all new Towns will have their map color set to this color. You must use a colour listed in the global_town_settings.allowed_map_colors setting below, ie aqua, azure, etc.
  default_map_color: ''
  
  # Default tax settings for new towns.
  default_taxes:
  
    # Default amount of tax of a new town. This must be lower than the economy.daily_taxes.max_town_tax_amount setting.
    tax: '0.0'
  
    # Default amount of shop tax of a new town.
    shop_tax: '0.0'
  
    # Default amount of embassy tax of a new town.
    embassy_tax: '0.0'
  
    # Default amount for town's plottax costs.
    plot_tax: '0.0'
  
    # Does a player's plot get put up for sale if they are unable to pay the plot tax?
    # When false the plot becomes town land and must be set up for-sale by town mayor or staff.
    does_non-payment_place_plot_for_sale: 'false'
  
    # Default status of new town's taxpercentage. True means that the default_tax is treated as a percentage instead of a fixed amount.
    taxpercentage: 'true'
  
    # A required minimum tax amount for the default_tax, will not change any towns which already have a tax set.
    # Do not forget to set the default_tax to more than 0 or new towns will still begin with a tax of zero.
    # This setting has no effect when negative taxes are allowed.
    minimumtax: '0.0'
  
  
############################################################
# +------------------------------------------------------+ #
# |               New Nation Defaults                    | #
# +------------------------------------------------------+ #
############################################################
  
nation:
  
  # If set to true, any newly made nation will have their spawn set to public.
  default_public: 'false'
  
  # If set to true, any newly made nation will have open status and any town may join without an invite.
  default_open: 'false'
  
  # Default neutral status of the nation (are new nations neutral by default?)
  default_neutral: 'true'
  
  # Default nation board
  default_board: /nation set board [msg]
  
  # When set, all new Nations will have their map color set to this color. You must use a colour listed in the global_nation_settings.allowed_map_colors setting below, ie aqua, azure, etc.
  default_map_color: ''
  
  # Setting this to true will set a nation's tag automatically using the first four characters of the nation's name.
  set_tag_automatically: 'false'
  
  # Default tax settings for new nations.
  default_taxes:
  
    # Default amount of tax of a new nation. This must be lower than the economy.daily_taxes.max_nation_tax_amount setting.
    tax: '0.0'
  
    # Default status of new nation's taxpercentage. True means that the default_tax is treated as a percentage instead of a fixed amount.
    taxpercentage: 'false'
  
    # A required minimum tax amount for the default_tax, will not change any nations which already have a tax set.
    # Do not forget to set the default_tax to more than 0 or new nations will still begin with a tax of zero.
    # This setting has no effect when negative taxes are allowed.
    minimumtax: '0.0'
  
    # The default amount of money that nations will charge their conquered towns.
    default_nation_conquered_tax: '0'
  
    # The maximum amount of money that can be charged by a nation on their conquered towns.
    max_nation_conquered_tax: '100'
  
  
############################################################
# +------------------------------------------------------+ #
# |             Default new world settings               | #
# +------------------------------------------------------+ #
#                                                          #
#   These flags are only used at the initial setup of a    #
#   new world! When you first start Towny these settings   #
#   were applied to any world that already existed.        #
#   Many of these settings can be turned on and off in     #
#   their respective worlds using the /tw toggle command.  #
#   Settings are saved in the towny\data\worlds\ folder.   #
#                                                          #
############################################################
  
new_world_settings:
  # Do new worlds have Towny enabled by default?
  # You can adjust this setting for an existing world using /townyworld toggle usingtowny
  using_towny: 'true'
  
  # Are new worlds claimable by default?
  # Setting this to false means that Towny will still be active but no land can be claimed by towns.
  # You can adjust this setting for an existing world using /townyworld toggle claimable
  are_new_world_claimable: 'true'
  
  pvp:
    # Do new worlds have pvp enabled by default?
    # You can adjust this setting for an existing world using /townyworld toggle pvp
    world_pvp: 'true'
  
    # Do new worlds have pvp forced on by default?
    # This setting overrides a towns' setting.
    # You can adjust this setting for an existing world using /townyworld toggle forcepvp
    force_pvp_on: 'false'
  
    # Do new world have friendly fire enabled by default?
    # Does not affect Arena Plots which have FF enabled all the time.
    # When true players on the same town or nation will harm each other.
    # You can adjust this setting for an existing world using /townyworld toggle friendlyfire
    friendly_fire_enabled: 'false'
  
    # Do new worlds have their war_allowed enabled by default?
    # You can adjust this setting for an existing world using /townyworld toggle warallowed
    war_allowed: 'true'
  
  mobs:
    # Do new worlds have world_monsters_on enabled by default?
    # You can adjust this setting for an existing world using /townyworld toggle worldmobs
    world_monsters_on: 'true'
  
    # Do new worlds have wilderness_monsters_on enabled by default?
    # You can adjust this setting for an existing world using /townyworld toggle wildernessmobs
    wilderness_monsters_on: 'true'
  
    # Do new worlds have force_town_monsters_on enabled by default?
    # This setting overrides a towns' setting.
    # You can adjust this setting for an existing world using /townyworld toggle townmobs
    force_town_monsters_on: 'false'
  
  explosions:
    # Do new worlds have explosions enabled by default?
    # You can adjust this setting for an existing world using /townyworld toggle explosion
    world_explosions_enabled: 'true'
  
    # Do new worlds have force_explosions_on enabled by default.
    # This setting overrides a towns' setting, preventing them from turning explosions off in their town.
    # You can adjust this setting for an existing world using /townyworld toggle forceexplosion
    force_explosions_on: 'false'
  
  fire:
    # Do new worlds allow fire to be lit and spread by default?
    # You can adjust this setting for an existing world using /townyworld toggle fire
    world_firespread_enabled: 'true'
  
    # Do new worlds have force_fire_on enabled by default?
    # This setting overrides a towns' setting.
    # You can adjust this setting for an existing world using /townyworld toggle forcefire
    force_fire_on: 'false'
  
  # Do new worlds prevent Endermen from picking up and placing blocks, by default?
  enderman_protect: 'true'
  
  # Do new worlds disable creatures trampling crops, by default?
  disable_creature_crop_trampling: 'true'
  
  # This section is applied to new worlds as default settings when new worlds are detected.
  # Whether to allow players in this world to be jailed or not
  jailing_enabled: 'true'
  
  # World management settings to deal with un/claiming plots
  plot_management:
  
    # This section is applied to new worlds as default settings when new worlds are detected.
    block_delete:
  
      # You can adjust this setting for an existing world using /townyworld toggle unclaimblockdelete
      enabled: 'true'
  
      # These items will be deleted upon a plot being unclaimed
      unclaim_delete: BEDS,TORCHES,REDSTONE_WIRE,SIGNS,DOORS,PRESSURE_PLATES
  
    # This section is applied to new worlds as default settings when new worlds are detected.
    entity_delete:
      enabled: 'false'
  
      # These entities will be deleted upon a plot being unclaimed.
      # Valid EntityTypes can be found here: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html
      unclaim_delete: end_crystal
  
    # This section is applied to new worlds as default settings when new worlds are detected.
    mayor_plotblock_delete:
  
      # You can adjust this setting for an existing world using /townyworld toggle plotcleardelete
      enabled: 'true'
  
      # These items will be deleted upon a mayor using /plot clear
      # To disable deleting replace the current entries with NONE.
      mayor_plot_delete: SIGNS
  
    # This section is applied to new worlds as default settings when new worlds are detected.
    revert_on_unclaim:
      # *** WARNING***
      # If this is enabled any town plots which become unclaimed will
      # slowly be reverted to a snapshot taken before the plot was claimed.
      #
      # Regeneration will only work if the plot was claimed
      # with this feature enabled.
      #
      # You can adjust this setting for an existing world using /townyworld toggle revertunclaim
      #
      # Unlike the rest of this config section, the speed setting is not
      # set per-world. What you set for speed will be used in all worlds.
      #
      # If you allow players to break/build in the wild the snapshot will
      # include any changes made before the plot was claimed.
      enabled: 'true'
      speed: 1s
  
      # These block types will NOT be regenerated by the revert-on-unclaim
      # or revert-explosion features.
      block_ignore: ORES,LAPIS_BLOCK,GOLD_BLOCK,IRON_BLOCK,DIAMOND_BLOCK,EMERALD_BLOCK,NETHERITE_BLOCK,MOSSY_COBBLESTONE,TORCHES,SPAWNER,SIGNS,SHULKER_BOXES,BEACON,LODESTONE,RESPAWN_ANCHOR,NETHER_PORTAL,FURNACE,BLAST_FURNACE,SMOKER,BREWING_STAND,TNT,AIR,FIRE,SKULLS,DRAGON_EGG,CRYING_OBSIDIAN,MOVING_PISTON
  
      # The list of blocks that are allowed to regenerate, if this list is empty then all blocks will regenerate.
      # This list is useful for when you want only 'natural' blocks to regenerate like stone, grass, trees, etc.,
      # useful when you allow players to build/destroy in the wilderness.
      # Like other options in the new_world_settings section, this is only applied as a default setting for new worlds.
      # Configure the list found in the towny\data\worlds\WORLDNAME.txt files.
      block_whitelist: ''
  
    # This section is applied to new worlds as default settings when new worlds are detected.
    wild_revert_on_mob_explosion:
  
      # Enabling this will slowly regenerate holes created in the wilderness by monsters exploding.
      # You can adjust this setting for an existing world using /townyworld toggle revertentityexpl
      enabled: 'true'
  
      # The list of entities whose explosions should be reverted.
      entities: CREEPER,END_CRYSTAL,ENDER_DRAGON,FIREBALL,SMALL_FIREBALL,TNT,TNT_MINECART,WITHER,WITHER_SKULL
  
      # How long before an entity-caused explosion begins reverting.
      delay: 20s
  
    # This section is applied to new worlds as default settings when new worlds are detected.
    wild_revert_on_block_explosion:
  
      # Enabling this will slowly regenerate holes created in the wilderness by exploding blocks like beds.
      # You can adjust this setting for an existing world using /townyworld toggle revertblockexpl
      enabled: 'true'
  
      # The list of blocks whose explosions should be reverted.
      blocks: BEDS,RESPAWN_ANCHOR
  
    # This section is applied to new worlds as default settings when new worlds are detected.
    # The list of blocks to regenerate for block and entity explosions. (if empty all blocks will regenerate)
    wild_revert_on_explosion_block_whitelist: ''
  
    # This section is applied to new worlds as default settings when new worlds are detected.
    # This is the list of blocks that should not be overwritten by wilderness explosion reverts. (if empty all 
    # blocks placed into regenerating explosions will be overwritten with the original pre-explosion blocks.)
    # This list is useful if you have a death chest plugin which could put a player's inventory inside chest
    # that is inside of a regenerating creeper explosion pit. For Example: By putting CHEST here you can 
    # prevent the chest from being overwritten by the dirt block that used to be there.
    wild_revert_explosions_blocks_to_not_replace: ''
  
  
############################################################
# +------------------------------------------------------+ #
# |                Global town settings                  | #
# +------------------------------------------------------+ #
############################################################
  
global_town_settings:
  
  # Maximum number of towns allowed on the server.
  town_limit: '3000'
  
  # The maximum distance (in townblocks) that 2 town's homeblocks can be to be eligible for merging.
  # Set to this to 0 to disable the distance test.
  max_distance_for_merge: '10'
  
  # Players within their town or allied towns will regenerate half a heart after every health_regen_speed seconds.
  health_regen:
    speed: 3s
    enable: 'true'
  saturation_regen:
  
    # When true players cannot become hungrier when in their own or an allied town.
    also_prevent_saturation_loss: 'true'
  
  # These beacons settings will only work on Paper or Paper-derived servers. They will not have any effect on Spigot servers.
  beacons:
  
    # When true, a beacon placed in a town will only affect the allies of the town. This includes residents, nation residents and allied nation residents.
    beacons_for_allies_only: 'false'
  
    # When true, conquered towns are not considered allies.
    exclude_conquered_towns: 'false'
  
  # Number of seconds that must pass before pvp can be toggled by a town.
  # Applies to residents of the town using /res toggle pvp, as well as
  # plots having their PVP toggled using /plot toggle pvp.
  pvp_cooldown_time: '30'
  
  # Number of seconds that must pass before peacefulness can be toggled by a town or nation.
  peaceful_cooldown_time: '30'
  
  # Number of seconds that must pass before a player that has deleted their town can create a new one.
  town_delete_cooldown_time: '0'
  
  # Number of seconds that must pass before a town that has unclaimed a townblock can claim it again.
  town_unclaim_cooldown_time: '0'
  
  # When set above 0, the amount of hours a town must wait after setting their homeblock, in order to move it again.
  homeblock_movement_cooldown_hours: '0'
  
  # When set above 0, the furthest number of townblocks a homeblock can be moved by.
  # Example: setting it to 3 would mean the player can only move their homeblock over by 3 townblocks at a time.
  # Useful when used with the above homeblock_movement_cooldown_hours setting.
  homeblock_movement_distance_limit: '0'
  
  # Enables the [~Home] TownName - PlotOwner - PlotName message line..
  # If false players will not be shown any notifications when they move in and out of towns, between plots.
  show_town_notifications: 'true'
  
  # While true, outlaws can always be harmed in towns they are outlawed in.
  force_pvp_on_outlaws: 'false'
  
  # While true, outlaws can always harm players in towns they are outlawed in, despite the town pvp setting.
  allows_outlaws_to_always_pvp: 'false'
  
  # Can outlaws roam freely on the towns they are outlawed in?
  # If false, outlaws will be teleported away if they spend too long in the towns they are outlawed in.
  # The time is set below in the outlaw_teleport_warmup.
  allow_outlaws_to_enter_town: 'true'
  
  # Can outlaws freely teleport out of the towns they are outlawed in?
  # If false, outlaws cannot use commands to teleport out of town.
  # If you want outlaws to not be able to use teleporting items as well, use allow_outlaws_use_teleport_items.
  allow_outlaws_to_teleport_out_of_town: 'true'
  
  # If false, outlawed players in towns cannot use items that teleport the player, ie: Ender Pearls & Chorus Fruit.
  # Setting this to false requires allow_outlaws_to_teleport_out_of_town to also be false.
  allow_outlaws_use_teleport_items: 'true'
  
  # Should towns be warned in case an outlaw roams the town?
  # Warning: Outlaws can use this feature to spam residents with warnings!
  # It is recommended to set this to true only if you're using outlaw teleporting with a warmup of 0 seconds.
  warn_town_on_outlaw: 'false'
  
  # How many seconds in between warning messages, to prevent spam.
  warn_town_on_outlaw_message_cooldown_in_seconds: '30'
  
  # If set to true, when a player is made into an outlaw using /t outlaw add NAME, and that new
  # outlaw is within the town's borders, the new outlaw will be teleported away using the outlaw_teleport_warmup.
  outlaw_teleport_away_on_becoming_outlawed: 'false'
  
  # How many seconds are required for outlaws to be teleported away?
  # You can set this to 0 to instantly teleport the outlaw from town.
  # This will not have any effect if allow_outlaws_to_enter_town is enabled.
  outlaw_teleport_warmup: '5'
  
  # What world do you want the outlaw teleported to if they aren't part of a town
  # and don't have a bedspawn outside of the town they are outlawed in.
  # They will go to the listed world's spawn. 
  # If blank, they will go to the spawnpoint of the world the town is in.
  outlaw_teleport_world: ''
  
  # Commands an outlawed player cannot use while in the town they are outlawed in.
  outlaw_blacklisted_commands: somecommandhere,othercommandhere
  
  # Commands that cannot be run by players who have an active war.
  war_blacklisted_commands: somecommandhere,othercommandhere
  
  # When set above zero this is the largest number of residents a town can support before they join/create a nation.
  # Do not set this value to an amount less than the required_number_residents_join_nation below.
  # Do not set this value to an amount less than the required_number_residents_create_nation below.
  maximum_number_residents_without_nation: '0'
  
  # The required number of residents in a town to join a nation
  # If the number is 0, towns will not require a certain amount of residents to join a nation
  required_number_residents_join_nation: '0'
  
  # The required number of residents in a town to create a nation
  # If the number is 0, towns will not require a certain amount of residents to create a nation
  required_number_residents_create_nation: '0'
  
  # If set to true, if a nation is disbanded due to a lack of residents, the capital will be refunded the cost of nation creation.
  refund_disband_low_residents: 'true'
  
  # List of animals which can be killed on farm plots by players who have been given destroy plot permissions to destroy.
  farm_animals: PIG,COW,CHICKEN,SHEEP,MOOSHROOM
  
  # The maximum number of residents that can be joined to a town. Setting to 0 disables this feature.
  max_residents_per_town: '0'
  
  # The maximum number of residents that can be joined to a capital city.
  # Requires max_residents_capital_override to be above 0.
  # Uses the greater of max_residents_capital_override and max_residents_per_town.
  max_residents_capital_override: '0'
  
  # When set to true, the town's TownLevel is determined by the number of townblocks the town owns, instead of the number of residents.
  # This setting will have no effect when town_block_ratio is set to 0.
  town_level_is_determined_by_townblock_count_instead_of_resident_count: 'false'
  
  # If Towny should show players the townboard when they login
  display_board_onlogin: 'true'
  
  # The maximum number of characters that the town (and nation,) board messages can be.
  max_board_length: '170'
  
  # If set to true, Towny will prevent a townblock from being unclaimed while an outsider is within the townblock's boundaries.
  # When active this feature can cause a bit of lag when the /t unclaim command is used, depending on how many players are online.
  outsiders_prevent_unclaim_townblock: 'false'
  
  # If set to true, Towny will prevent a town or plot from enabling PVP while an outsider is within the town's or plot's boundaries.
  # When active this feature can cause a bit of lag when the /t toggle pvp command is used, depending on how many players are online.
  outsiders_prevent_pvp_toggle: 'false'
  
  # If set to true, when a world has forcepvp set to true, homeblocks of towns will not be affected and have PVP set to off.
  # Does not have any effect when Event War is active.
  homeblocks_prevent_forcepvp: 'false'
  
  # If set to true, any player with towny.admin (or OP,) will be able to hurt other players overriding any location's PVP setting.
  # Setting this to true will create avenues for admins to abuse players.
  admins_can_always_pvp: 'false'
  
  # If People should keep their inventories on death in a town.
  # Is not guaranteed to work with other keep inventory plugins!
  keep_inventory_on_death_in_town: 'false'
  
  # If People should keep their inventories on death in their own town.
  # Is not guaranteed to work with other keep inventory plugins!
  keep_inventory_on_death_in_own_town: 'false'
  
  # If People should keep their inventories on death in an allied town.
  # Is not guaranteed to work with other keep inventory plugins!
  keep_inventory_on_death_in_allied_town: 'false'
  
  # If People should keep their inventories on death in an arena townblock.
  # Is not guaranteed to work with other keep inventory plugins!
  keep_inventory_on_death_in_arena: 'false'
  
  # If People should keep their experience on death in a town.
  # Is not guaranteed to work with other keep experience plugins!
  keep_experience_on_death_in_town: 'false'
  
  # If People should keep their experience on death in an arena townblock.
  # Is not guaranteed to work with other keep experience plugins!
  keep_experience_on_death_in_arena: 'false'
  
  # While true, weapons and armour items worn by players in Arena plots will not lose durability.
  prevent_item_degrading_in_arenas: 'false'
  
  # The Maximum price that a town can be put for sale at. This refers to the price that
  # someone could pay if they ran /t buytown, to buy a town that has been put up for sale.
  max_buytown_price: '999999999'
  
  # Maximum amount that a town can set their plot, embassy, shop, etc plots' prices to.
  # Setting this higher can be dangerous if you use Towny in a mysql database. Large numbers can become shortened to scientific notation. 
  maximum_plot_price_cost: '1000000.0'
  
  # maximum number of plots any single resident can own
  max_plots_per_resident: '100'
  
  # If set to true, the /town screen will display the xyz coordinate for a town's spawn rather than the homeblock's Towny coords.
  display_xyz_instead_of_towny_coords: 'false'
  
  # If set to true the /town list command will list randomly, rather than by whichever comparator is used, hiding resident counts.
  display_town_list_randomly: 'false'
  
  # The ranks to be given preference when assigning a new mayor, listed in order of descending preference.
  # All ranks should be as defined in `townyperms.yml`.
  # For example, to give a `visemayor` preference over an `assistant`, change this parameter to `visemayor,assistant`.
  order_of_mayoral_succession: assistant
  
  # When enabled, blocks like lava or water will be unable to flow into other plots, if the owners aren't the same.
  prevent_fluid_griefing: 'true'
  
  # Allows blocking commands inside towns and limiting them to plots owned by the players only.
  # Useful for limiting sethome/home commands to plots owned by the players themselves and not someone else.
  # Admins and players with the towny.admin.town_commands.blacklist_bypass permission node will not be hindered.
  # Blocked commands lists can be for root commands: ie: /town, which will block all subcommands. A subcommand
  # can be specified without blocking the root command: ie: /town spawn which would not block /town.
  # When configuring the command lists below, do not include the / symbol.
  town_command_blacklisting:
  
    # Allows blocking commands inside towns through the town_blacklisted_commands setting.
    # This boolean allows you to disable this feature altogether if you don't need it
    enabled: 'false'
  
    # Comma separated list of commands which cannot be run inside of any town.
    town_blacklisted_commands: somecommandhere,othercommandhere
  
    # This allows the usage of blacklisted commands only in plots personally-owned by the player.
    # Players with the towny.claimed.townowned.* permission node will be able to run these commands
    # inside of town-owned land. This would include mayors, assistants and possibly a builder rank.
    # Players with the towny.claimed.owntown.* permission node (given to mayors/assistants usually,)
    # will also not be limited by this command blacklist.
    player_owned_plot_limited_commands: sethome,home
  
    # This allows the usage of blacklisted commands only in the player's town 
    # and the wilderness (essentially blocking commands from being ran by tourists/visitors)
    # Players with the towny.globally_welcome permission node are not going to be limited by this list.
    # Commands have to be on town_command_blacklisting.town_blacklisted_commands, else this is not going to be checked.
    own_town_and_wilderness_limited_commands: sethome,home
  
    # When set to true, trusted residents (residents that are trusted by a town directly,
    # as well as residents that are members of a town that is trusted,) will be able to use
    # commands that only town residents could use.
    own_town_and_wilderness_limited_commands_allow_trusted_residents: 'true'
  
    # When set to true, residents which are allies of the town (which could be nation members as well as allied nations' members) will be able to use
    # commands that only town residents could use.
    own_town_and_wilderness_limited_commands_allow_allies: 'false'
  
  # When enabled, town (and nation) names will automatically be capitalised upon creation.
  automatic_capitalisation: 'false'
  
  # When disabled, towns will not be able to be created with or renamed to a name that contains numbers.
  # Disabling this option does not affect already created towns.
  allow_numbers_in_town_name: 'true'
  
  # This setting determines the list of allowed town map colors.
  # The color codes are in hex format.
  allowed_map_colors: aqua:00ffff, azure:f0ffff, beige:f5f5dc, black:000000, blue:0000ff, brown:a52a2a, cyan:00ffff, darkblue:00008b, darkcyan:008b8b, darkgrey:a9a9a9, darkgreen:006400, darkkhaki:bdb76b, darkmagenta:8b008b, darkolivegreen:556b2f, darkorange:ff8c00, darkorchid:9932cc, darkred:8b0000, darksalmon:e9967a, darkviolet:9400d3, fuchsia:ff00ff, gold:ffd700, green:008000, indigo:4b0082, khaki:f0e68c, lightblue:add8e6, lightcyan:e0ffff, lightgreen:90ee90, lightgrey:d3d3d3, lightpink:ffb6c1, lightyellow:ffffe0, lime:00ff00, magenta:ff00ff, maroon:800000, navy:000080, olive:808000, orange:ffa500, pink:ffc0cb, purple:800080, violet:800080, red:ff0000, silver:c0c0c0, white:ffffff, yellow:ffff00
  
  # List of ranks (separated by a comma) that will prevent a player from being kicked from a town.
  unkickable_ranks: assistant
  
  # When true any trusted players will get permissions in town owned land, and the personally-owned land in that town.
  # When false, trusted players get permissions only in the town owned land, leaving player-owned plots to their normal plot perms.
  do_trusted_players_get_full_perms_in_personally_owned_land: 'true'
  
  
############################################################
# +------------------------------------------------------+ #
# |              Global nation settings                  | #
# +------------------------------------------------------+ #
############################################################
  
global_nation_settings:
  
  # Nation Zones are a special type of wilderness surrounding Capitals of Nations or Nation Capitals and their Towns.
  # When it is enabled players who are members of the nation can use the wilderness surrounding the town like normal.
  # Players who are not part of that nation will find themselves unable to break/build/switch/itemuse in this part of the wilderness.
  # The amount of townblocks used for the zone is determined by the size of the nation and configured in the nation levels.
  # Because these zones are still wilderness anyone can claim these townblocks.
  # It is recommended that whatever size you choose, these numbers should be less than the min_plot_distance_from_town_plot otherwise
  # someone might not be able to build/destroy in the wilderness outside their town.
  nationzone:
  
    # Nation zone feature is disabled by default. This is because it can cause a higher server load for servers with a large player count.
    enable: 'false'
  
    # When set to true, only the capital town of a nation will be surrounded by a nation zone type of wilderness.
    only_capitals: 'true'
  
    # Amount of buffer added to nation zone width surrounding capitals only. Creates a larger buffer around nation capitals.
    capital_bonus_size: '0'
  
    # When set to true, players which are part of a conquered town, will not have access to their nation's nationzone.
    # They will still be able to use the nation_zone outside of their own town.
    not_for_conquered_towns: 'false'
  
    # When set to true, the nation zone of a conquered town will only be usable by the conquered town's players.
    # The players belonging to the conquering nation will not be able to use the nation zone.
    protect_conquered_towns: 'false'
  
    # When set to true, nation zones are disabled during the the Towny war types.
    war_disables: 'true'
  
    # When set to true, players will receive a notification when they enter into a nationzone.
    # Set to false by default because, like the nationzone feature, it will generate more load on servers.
    show_notifications: 'false'
  
  # If Towny should show players the nationboard when they login.
  display_board_onlogin: 'true'
  
  # If true the capital city of nation cannot be neutral/peaceful.
  capitals_cannot_be_neutral: 'false'
  
  # When set to true, the nation's NationLevel is determined by the number of towns in the nations, instead of the number of residents.
  nation_level_is_determined_by_town_count_instead_of_resident_count: 'false'
  
  # If higher than 0, it will limit how many towns can be joined into a nation.
  # Does not affect existing nations that are already over the limit.
  max_towns_per_nation: '0'
  
  # If higher than 0, it will limit how many residents can join a nation.
  # Does not affect existing nations that are already over the limit.
  max_residents_per_nation: '0'
  
  # This setting determines the list of allowed nation map colors.
  # The color codes are in hex format.
  allowed_map_colors: aqua:00ffff, azure:f0ffff, beige:f5f5dc, black:000000, blue:0000ff, brown:a52a2a, cyan:00ffff, darkblue:00008b, darkcyan:008b8b, darkgrey:a9a9a9, darkgreen:006400, darkkhaki:bdb76b, darkmagenta:8b008b, darkolivegreen:556b2f, darkorange:ff8c00, darkorchid:9932cc, darkred:8b0000, darksalmon:e9967a, darkviolet:9400d3, fuchsia:ff00ff, gold:ffd700, green:008000, indigo:4b0082, khaki:f0e68c, lightblue:add8e6, lightcyan:e0ffff, lightgreen:90ee90, lightgrey:d3d3d3, lightpink:ffb6c1, lightyellow:ffffe0, lime:00ff00, magenta:ff00ff, maroon:800000, navy:000080, olive:808000, orange:ffa500, pink:ffc0cb, purple:800080, violet:800080, red:ff0000, silver:c0c0c0, white:ffffff, yellow:ffff00
  
  # The maximum amount of allies that a nation can have, set to -1 to have no limit.
  max_allies: '-1'
  
  # While true, conquered towns will be considered a member of good standing in the nation.
  # When set to false CombatUtil#isAlly() tests will treat conquered towns and their nations as not allied.
  # Setting this to false could result in strange unforseen behaviour.
  are_conquered_towns_considered_allies: 'true'
  
  # While true, conquered towns will be considered a member of good standing in the nation, and will be
  # treated as normal nation members when plot perms are calculated.
  # When set to false plot permission tests will treat conquered towns' residents as not members of their nations,
  # preventing them from using their host nation's plots while the nation's towns have nation plot perms enabled.
  are_conquered_towns_given_nation_plot_perms: 'true'
  
  proximity:
  
    # The maximum number of townblocks a town's homeblock can be away from their nation capital's homeblock.
    # Automatically precludes towns from one world joining a nation in another world.
    # If the number is 0, towns will not require a proximity to a nation.
    nation_proximity_to_capital_city: '0.0'
  
    # The maximum number of townblocks a town's homeblock can be away from other towns's homeblocks in the nation.
    # This setting is only used when nation_proximity_to_capital_city is above 0.
    # When used, and a town is out of range of their capital city, the remaining towns in the nation will be parsed,
    # if one of those towns' homeblocks is close enough to the town's homeblock, the town can remain in the nation.
    # Leave this setting at 0.0 in order to de-activate nations' towns granting further range for towns in the nation.
    nation_proximity_to_other_nation_towns: '0.0'
  
    # The maximum number of townblocks a town's homeblock can be away from their nation's capital's homeblock,
    # when the town is being allowed to go further out from the capital because of the nation_proximity_to_other_nation_towns
    # setting above.
    # This setting is what will stop a nation being able to go incredibly wide due to towns 'chaining' together.
    # This setting is only used when nation_proximity_to_capital_city is above 0.
    # Leave this setting at 0.0 in order to allow nations to chain towns together to go as wide as they like.
    absolute_distance_from_capital: '0.0'
  
  # When disabled, nations will not be able to be created with or renamed to a name that contains numbers.
  # Disabling this option does not affect already created nations.
  allow_numbers_in_nation_name: 'true'
  
  
############################################################
# +------------------------------------------------------+ #
# |                Town Claiming Settings                | #
# +------------------------------------------------------+ #
############################################################
  
claiming:
  
  # The maximum townblocks available to a town is (numResidents * ratio).
  # Setting this value to 0 will instead use the level based jump values determined in the town level config.
  # Setting this to -1 will result in every town having unlimited claims.
  town_block_ratio: '8'
  
  # An amount of additional townblocks that a town will receive when it is first created, in addition to any amount given via the town_block_ratio or town_levels.
  # As an example: This can be used to add 10 townblocks to a town when it is made so the borders can be grown a bit more before the mayor has to seek out residents.
  new_town_bonus_claims: '0'
  
  # The maximimum amount of townblocks a town can have, if town_block_ratio is 0 the max size will be decided by the town_levels.
  # Set to 0 to have no size limit.
  town_block_limit: '0'
  
  # The size of the square grid cell. Changing this value is suggested only when you first install Towny.
  # Doing so after entering data will shift things unwantedly. Using smaller value will allow higher precision,
  # at the cost of more work setting up. Also, extremely small values will render the caching done useless.
  # Each cell is (town_block_size * town_block_size * height-of-the-world) in size, with height-of-the-world
  # being from the bottom to the top of the build-able world.
  town_block_size: '16'
  
  # When false players will not see the particle flood effect when they claim townblocks.
  show_claiming_particles: 'true'
  
  # The minimum adjacent town blocks required to expand.
  # This can prevent long lines and snake-like patterns.
  # Set to -1 to disable. Set to 3 to force wider expansions of towns.
  min_adjacent_blocks: '-1'
  
  # maximum number used in /town claim/unclaim # commands.
  # set to 0 to disable limiting of claim radius value check.
  # keep in mind that the default value of 4 is a radius, 
  # and it will allow claiming 9x9 (80 plots) at once.
  max_claim_radius_value: '4'
  
  
  biome_rules:
  
    # When a townblock is made up of too many blocks of these biomes, it will not be able to be claimed by a town.
    unwanted_biomes:
  
      # When true, unwanted biomes will be tested for when a player is claiming land.
      enabled: 'false'
  
      # A comma separated list of biome names that will add up towards a townblock's un-claim-ability.
      # Use lower-case only or this will not work properly for you.
      biomes: the_end,end_barrens,end_highlands,end_midlands,small_end_islands
  
      # The max amount of combined unwanted biomes as a percent, that will be allowed in plots being claimed by towns.
      # For example, if a townblock would be more than X percent ocean it will not be able to be claimed.
      threshold: '55'
  
  
    ocean_blocking:
  
      # When true, any wilderness plot which has more Ocean biome in it than the allowed threshold (see below,)
      # will not be able to be claimed.
      enabled: 'false'
  
      # The max amount of combined ocean biomes as a percent, that will be allowed in plots being claimed by towns.
      # For example, if a townblock would be more than X percent ocean it will not be able to be claimed.
      threshold: '55'
  
  
  distance_rules:
  
    # If true, the below settings: min_plot_distance_from_town_plot and min_distance_from_town_homeblock
    # will be ignored for towns that are in the same nation. Setting to false will keep all towns separated the same.
    min_distances_ignored_for_towns_in_same_nation: 'true'
  
    # If true, the below settings: min_plot_distance_from_town_plot and min_distance_from_town_homeblock
    # will be ignored for towns that are mutually allied. Setting to false will keep all towns separated the same.
    min_distances_ignored_for_towns_in_allied_nation: 'false'
  
    # Minimum number of plots any towns plot must be from the next town's own plots.
    # Put in other words: the buffer area around every claim that no other town can claim into.
    # Does not affect towns which are in the same nation.
    # This will prevent town encasement to a certain degree.
    min_plot_distance_from_town_plot: '5'
  
    # Minimum number of plots any towns home plot must be from the next town.
    # Put in other words: the buffer area around every homeblock that no other town can claim into.
    # Does not affect towns which are in the same nation.
    # This will prevent someone founding a town right on your doorstep
    min_distance_from_town_homeblock: '5'
  
    # Minimum number of plots an outpost must be from any other town's plots.
    # Useful when min_plot_distance_from_town_plot is set to near-zero to allow towns to have claims
    # near to each other, but want to keep outposts away from towns.
    min_distance_for_outpost_from_plot: '5'
  
    # Set to 0 to disable. When above 0 an outpost may only be claimed within the given number of townblocks from a townblock owned by the town.
    # Setting this to any value above 0 will stop outposts being made off-world from the town's homeworld.
    # Do not set lower than min_distance_for_outpost_from_plot above.
    max_distance_for_outpost_from_town_plot: '0'
  
    # Minimum distance between homeblocks.
    min_distance_between_homeblocks: '0'
  
    # Maximum distance between homeblocks.
    # This will force players to build close together.
    max_distance_between_homeblocks: '0'
  
    # The minimum distance that a new town must be from nearby towns' plots.
    # When set to -1, this will use the value of the min_plot_distance_from_town_plot option.
    new_town_min_distance_from_town_plot: '-1'
  
    # The minimum distance that a new town must be from nearby towns' homeblocks.
    # When set to -1, this will use the value of the min_distance_from_town_homeblock setting.
    new_town_min_distance_from_town_homeblock: '-1'
  
  
  outposts:
  
    # Allow towns to claim outposts (a townblock not connected to town).
    allow_outposts: 'true'
  
    # When set to true outposts can be limited by the townOutpostLimit value of the Town Levels and
    # the nationBonusOutpostLimit value in the Nation Levels. In this way nations can be made to be
    # the only way of receiving outposts, or as an incentive to receive more outposts. Towns which are
    # larger can have more outposts.
    # When activated, this setting will not cause towns who already have higher than their limit
    # to lose outposts. They will not be able to start new outposts until they have unclaimed outposts
    # to become under their limit. Likewise, towns that join a nation and receive bonus outposts will
    # be over their limit if they leave the nation.
    limit_outposts_using_town_and_nation_levels: 'false'
  
    # When limit_outposts_using_town_and_nation_levels is also true, towns which are over their outpost
    # limit will not be able to use their /town outpost teleports for the outpost #'s higher than their limit,
    # until they have dropped below their limit.
    # eg: If their limit is 3 then they cannot use /t outpost 4
    over_outpost_limits_stops_teleports: 'false'
  
    # The amount of residents a town needs to claim an outpost,
    # Setting this value to 0, means a town can claim outposts no matter how many residents.
    # This setting is ignored when limit_outposts_using_town_and_nation_levels is set to true.
    minimum_amount_of_residents_in_town_for_outpost: '0'
  
  
  overclaiming:
  
    # A feature that allows towns which have too many townblocks claimed (overclaimed) ie: 120/100 TownBlocks, 
    # to have their land stolen by other towns which are not overclaimed. Using this incentivises Towns to keep
    # their residents from leaving, and will mean that mayors will be more careful about which land they choose
    # to claim.
    # Overclaiming does not allow a town to be split into two separate parts, requiring the Town that is stealing
    # land to work from the outside inwards.
    # It is highly recommended to only use this on servers where outposts are disabled, and requiring 
    # a number of adjacent claims over 1 is enabled.
    # Towns take land using /t takeoverclaim.
    being_overclaimed_allows_other_towns_to_steal_land: 'false'
  
    # While true, overclaiming is stopped by the min_distance_from_town_homeblock setting.
    # This prevents a town from having townblocks stolen surrounding their homeblocks.
    overclaiming_prevented_by_homeblock_radius: 'true'
  
    # When in use, requires that a town be of a minimum age in order to overclaim another town. This prevents new towns being made just to overclaim someone.
    # Default is for 7 days.
    town_age_requirement: 7d
  
    # When in use, requires an amount of time to pass before the /t takeoverclaim command can be used again.
    command_cooldown: 0m
  
    # When true, when the towns involved in the overclaiming both have nations, the overclaiming town's nation will have to have the overclaimed town's nation declared as an enemy.
    # Towns with no nation are not affected by this rule.
    nations_required_to_be_enemies: 'false'
  
  
  purchased_bonus_blocks:
  
    # Limits the maximum amount of bonus blocks a town can buy.
    # This setting does nothing when town.max_purchased_blocks_uses_town_levels is set to true.
    max_purchased_blocks: '0'
  
    # When set to true, the town_level section of the config determines the maximum number of bonus blocks a town can purchase.
    max_purchased_blocks_uses_town_levels: 'true'
  
  
############################################################
# +------------------------------------------------------+ #
# |                   Spawning Settings                  | #
# +------------------------------------------------------+ #
############################################################
  
spawning:
  
  # If enabled tries to find a safe location when teleporting to a town spawn/nation spawn/outpost
  # can be used to prevent players from making kill boxes at those locations.
  safe_teleport: 'false'
  
  # If enabled, teleportation will be canceled if the location is not safe.
  strict_safe_teleport: 'false'
  
  # Decides whether confirmations should appear if you spawn to an area with an associated cost.
  spawn_cost_warnings: 'true'
  
  # If enabled, particles will appear around town, nation, outpost & jail spawns.
  visualized_spawn_points_enabled: 'true'
  
  spawning_warmups:
  
    # If non zero it delays any spawn request by x seconds.
    teleport_warmup_time: '0'
  
    # When set to true, if players are currently in a spawn warmup, moving will cancel their spawn.
    movement_cancels_spawn_warmup: 'false'
  
    # When set to true, if players are damaged in any way while in a spawn warmup, their spawning will be cancelled.
    damage_cancels_spawn_warmup: 'false'
  
    # When set to true, players get a large Title message showing how long until their teleport will happen,
    # as well as a message telling them not to move if movement_cancels_spawn_warmup is true.
    uses_title_message: 'false'
  
    # When set to true, players get a particle effect matching the towny spawn particles, which appears around them for the warmup duration.
    uses_particle_effect: 'true'
  
  town_spawn:
  
    # Allow the use of /town spawn
    # Valid values are: true, false, war, peace
    # When war or peace is set, it is only possible to teleport to the town,
    # when there is a war or peace.
    allow_town_spawn: 'true'
  
    # Allow regular residents to use /town spawn [town] (TP to other towns if they are public).
    # Valid values are: true, false, war, peace
    # When war or peace is set, it is only possible to teleport to the town,
    # when there is a war or peace.
    allow_town_spawn_travel: 'true'
  
    # Allow regular residents to use /town spawn [town] to other towns in your nation.
    # Valid values are: true, false, war, peace
    # When war or peace is set, it is only possible to teleport to the town,
    # when there is a war or peace.
    allow_town_spawn_travel_nation: 'true'
  
    # Allow regular residents to use /town spawn [town] to other towns in a nation allied with your nation.
    # Valid values are: true, false, war, peace
    # When war or peace is set, it is only possible to teleport to the town,
    # when there is a war or peace.
    allow_town_spawn_travel_ally: 'true'
  
    # When set to true both nation and ally spawn travel will also require the target town to have their status set to public.
    is_nation_ally_spawning_to_town_requiring_public_status: 'false'
  
    # When set to true, a player that is trusted by a town is allowed to spawn to the town as if they were a resident.
    # Allows the residents of entire an town when that town is trusted by the town.
    do_trusted_residents_count_as_residents: 'false'
  
    # When a resident joins a town, should they be prompted to use spawn to the town?
    # This requires them to not already be standing in the town, and also to be able to use /t spawn and whatever costs may be associated with it.
    are_new_residents_prompted_to_town_spawn: 'false'
  
    # Prevent players from using /town spawn while within unclaimed areas and/or enemy/neutral towns.
    # Allowed options: unclaimed,enemy,neutral,outlaw
    prevent_town_spawn_in: enemy,outlaw
  
    # When true, players will be allowed to spawn to peaceful/neutral towns in which they are considered enemies.
    # Setting this to true will make town spawn points unsafe for private towns which are part of nations with enemies.
    allow_enemies_spawn_to_peaceful_towns: 'false'
  
    spawning_cooldowns:
  
      # Number of seconds that must pass before a player can use /t spawn or /res spawn.
      town_spawn_cooldown_time: '30'
  
      # Number of seconds that must pass before a player can use /t outpost.
      outpost_cooldown_time: '30'
  
      # Number of seconds that must pass before a player of the same nation can use /t spawn.
      nation_member_town_spawn_cooldown_time: '30'
  
      # Number of seconds that must pass before a player in an allied nation can use /t spawn.
      nation_ally_town_spawn_cooldown_time: '30'
  
      # Number of seconds that must pass before a player who is not a member or ally of town can use /t spawn.
      unaffiliated_town_spawn_cooldown_time: '30'
  
  nation_spawn:
  
    # If enabled, only allow the nation spawn to be set in the capital city.
    force_nation_spawn_in_capital: 'true'
  
    # Allow the use of /nation spawn
    # Valid values are: true, false, war, peace
    # When war or peace is set, it is only possible to teleport to the nation,
    # when there is a war or peace.
    allow_nation_spawn: 'true'
  
    # Allow regular residents to use /nation spawn [nation] (TP to other nations if they are public).
    # Valid values are: true, false, war, peace
    # When war or peace is set, it is only possible to teleport to the nation,
    # when there is a war or peace.
    allow_nation_spawn_travel: 'true'
  
    # Allow regular residents to use /nation spawn [nation] to other nations allied with your nation.
    # Valid values are: true, false, war, peace
    # When war or peace is set, it is only possible to teleport to the nations,
    # when there is a war or peace.
    allow_nation_spawn_travel_ally: 'true'
  
    # When set to true, towns conquered by their nation will not be allowed to use /n spawn.
    deny_conquered_towns_use_of_nation_spawn: 'false'
  
    spawning_cooldowns:
  
      # Number of seconds that must pass before a player of the same nation can use /n spawn.
      nation_member_nation_spawn_cooldown_time: '30'
  
      # Number of seconds that must pass before a player allied with the nation can use /n spawn.
      nation_ally_nation_spawn_cooldown_time: '30'
  
      # Number of seconds that must pass before a player who is not a member or ally can use /n spawn.
      unaffiliated_nation_spawn_cooldown_time: '30'
  
  respawning:
  
    # When true Towny will handle respawning, with town or resident spawns.
    town_respawn: 'false'
  
    # Town respawn only happens when the player dies in the same world as the town's spawn point.
    town_respawn_same_world_only: 'false'
  
    # When this is true, players will respawn to respawn anchors on death rather than their own town.
    respawn_anchor_higher_precendence: 'true'
  
    respawn_protection:
  
      # When greater than 0s, the amount of time a player who has respawned is considered invulnerable.
      # Invulnerable players who attack other players will lose their invulnerability.
      # Invulnerable players who teleport after respawn will also lose their invulnerability.
      time: 10s
  
      # If disabled, players will not be able to pickup items while under respawn protection.
      allow_pickup: 'true'
  
  
############################################################
# +------------------------------------------------------+ #
# |                 Plugin interfacing                   | #
# +------------------------------------------------------+ #
############################################################
  
plugin:
  # See database.yml file for flatfile/mysql settings.
  database:
  
    # Flatfile backup settings.
    daily_backups: 'true'
    backups_are_deleted_after: 90d
  
    # Valid entries are: tar, tar.gz, zip, or none for no backup.
    flatfile_backup_type: tar
  
  interfacing:
  
    tekkit:
      # Add any fake players for client/server mods (aka Tekkit) here
      fake_residents: '[IndustrialCraft],[BuildCraft],[Redpower],[Forestry],[Turtle]'
  
    luckperms:
  
      # If enabled, Towny contexts will be available in LuckPerms. https://luckperms.net/wiki/Context
      # Towny will supply for LuckPerms: townyperms' ranks contexts, as well as location-based contexts.
      contexts: 'false'
  
      # Configure what contexts to enable/disable here, contexts must be separated by a comma.
      # Available contexts: towny:resident, towny:nation_resident, towny:mayor, towny:king, towny:insidetown, towny:insideowntown, towny:insideownplot, towny:townrank
      # towny:nationrank, towny:town, towny:nation, towny:istownconquered
      enabled_contexts: '*'
  
    # If enabled, blocks that get regenerated by Towny, such as revert-on-unclaim and explosion regeneration will be logged with CoreProtect.
    # Actions are logged with the `#towny` user, so Towny's actions can easily be undone using user:#towny.
    coreprotect_support: 'true'
  
    web_map:
  
      # If enabled, players will be prompted to open a url when clicking on coordinates in towny status screens.
      enabled: 'false'
  
      # If enabled, the world name placeholder will be replaced with the world key instead of the Bukkit name.
      # This should be enabled if you use SquareMap.
      world_name_uses_world_key: 'false'
  
      # If enabled, non-public towns will show a link to their map location in the town status screen.
      non_public_towns_show_map_link: 'false'
  
      # The url that players will be prompted to open when clicking on a coordinate in a status screen.
      # Valid placeholders are {world}, {x}, and {z}, for the world name, x, and z coordinates respectively.
      url: https://example.com/map/?worldname={world}&mapname=flat&zoom=5&x={x}&y=64&z={z}
  
  day_timer:
  
    # The time for each "towny day", used for tax and upkeep collection and other daily timers.
    # Default is 24 hours. Cannot be set for greater than 1 day, but can be set lower.
    day_interval: 1d
  
    # The time each "day", when taxes will be collected.
    # Only used when less than day_interval. Default is 12h (midday).
    # If day_interval is set to something like 20m, the new_day_time is not used, day_interval will be used instead.
    new_day_time: 12h
  
    # Whether towns with no claimed townblocks should be deleted when the new day is run.
    delete_0_plot_towns: 'false'
  hour_timer:
  
    # The number of minutes in each "hour".
    # Default is 60m.
    hour_interval: 60m
    # The time each "hour", when the hourly timer ticks.
    # MUST be less than hour_interval. Default is 30m.
    new_hour_time: 30m
    # The interval of each "short" timer tick
    # Default is 20s.
    short_interval: 20s
  
  # Lots of messages to tell you what's going on in the server with time taken for events.
  debug_mode: 'false'
  
  # Info tool for server admins to use to query in game blocks and entities.
  info_tool: BRICK
  
  # Spams the player named in dev_name with all messages related to towny.
  dev_mode:
    enable: 'false'
    dev_name: LlmDl
  
  # If true this will cause the log to be wiped at every startup.
  reset_log_on_boot: 'true'
  
  # Sets the default size that /towny top commands display.
  towny_top_size: '10'
  
  # A blacklist used for validating town/nation names.
  # Names must be seperated by a comma: name1,name2
  name_blacklist: ''
  
  update_notifications:
  
    # If enabled, players with the towny.admin.updatealerts permission will receive an update notification upon logging in.
    alerts: 'true'
  
    # If enabled, only full releases will trigger notifications if you are running a full release.
    # This is ignored if the server is currently using a pre-release version.
    major_only: 'true'
  
  
############################################################
# +------------------------------------------------------+ #
# |               Filters colour and chat                | #
# +------------------------------------------------------+ #
############################################################
  
filters_colour_chat:
  
  # This is the name given to any NPC assigned mayor.
  npc_prefix: NPC
  
  # Regex fields used in validating inputs.
  regex:
    name_filter_regex: '[\\\/]'
    name_check_regex: ^[\p{L}\*a-zA-Z0-9._\[\]-]*$
    string_check_regex: ^[a-zA-Z0-9 \s._\[\]\#\?\!\@\$\%\^\&\*\-\,\*\(\)\{\}]*$
    name_remove_regex: '[^\P{M}a-zA-Z0-9\&._\[\]-]'
  
  modify_chat:
  
    # Maximum length of Town and Nation names. Setting this to a number below your current max_name_length could result in
    # safe mode if the new value is below of your existing town and nation name lengths.
    max_name_length: '20'
  
    # Maximum number of capital letters that can be used in Town and Nation names. Set to -1 to disable this feature.
    # This count does not include the first letter of a town, and does not count capitalized letters that come after a _ character.
    # This means that a town named New_York would register 0 capitals. While McDonalds would register 1. COOLTOWN would register 7 capital letters.
    max_name_capital_letters: '-1'
  
    # Maximum length for Town and Nation tags.
    max_tag_length: '4'
  
    # Maximum length of titles and surnames.
    max_title_length: '10'
  
    # When true, a mayor or king will need the permission node in order to add colour codes to residents' titles and surtitles.
    # Kings require towny.command.nation.set.title.colours, mayors require towny.command.town.set.title.colours.
    # These nodes are not given out by the default townyperms.yml and must be added to the mayor and king section
    # when this setting has been made true.
    does_adding_colour_codes_require_permission_node: 'false'
  
  # See the Placeholders wiki page for list of PAPI placeholders.
  # https://github.com/TownyAdvanced/Towny/wiki/Placeholders
  papi_chat_formatting:
  
    # When using PlaceholderAPI, and a tag would show both nation and town, this will determine how they are formatted.
    both: '&f[&6%n&f|&b%t&f] '
  
    # When using PlaceholderAPI, and a tag would showing a town, this will determine how it is formatted.
    town: '&f[&b%s&f] '
  
    # When using PlaceholderAPI, and a tag would show a nation, this will determine how it is formatted.
    nation: '&f[&6%s&f] '
  
    # Colour code applied to player names using the %townyadvanced_towny_colour% placeholder.
    ranks:
      nomad: '&f'
      resident: '&f'
      mayor: '&b'
      king: '&6'
  
  papi_leaderboard_formatting:
  
    # How the %townyadvanced_top_....% placeholders will appear, first %s being the town name, with the second being the balance, resident count or town size.
    format: '%s - %s'
  
  # Colour codes used in the RELATIONAL placeholder %rel_townyadvanced_color% to display the relation between two players.
  papi_relational_formatting:
    # Used when two players have no special relationship.
    none: '&f'
  
    # Given to players who have no town.
    no_town: '&f'
  
    # Used when two players are in the same town.
    same_town: '&2'
  
    # Used when two players are in the same nation.
    same_nation: '&2'
  
    # Used when the player is a member of one of your nation's conquered towns.
    conquered_town: '&e'
  
    # Used when two players' nations are allied.
    ally: '&b'
  
    # Used when two players are enemies.
    enemy: '&c'
  
  
###########################################################################
# +---------------------------------------------------------------------+ #
# |                      block/item/mob protection                      | #
# |                                                                     | #
# | This section has settings for what is considered a item_use item    | #
# | and switch blocks, as well as settings related to mobs and their    | #
# | interactions.                                                       | #
# | In the item_use and switch ids sections you are able to use the     | #
# | Bukkit Material names which are listed at this webpage:             | #
# | https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html   | #
# |                                                                     | #
# | You are also able to use groups that are made in Towny. Group names | #
# | include:                                                            | #
# | AXES, SWORDS, BOWS, WEAPONS, ARMOURS, DYES, REDSTONE_INTERACTABLES, | #
# | POTTED_PLANTS, FLOWERS, ORES, SAPLINGS, PLANTABLES, CROPS, TREES,   | #
# | LEAVES, BEDS, SIGNS, TORCHES, SKULLS, BOATS, MINECARTS, WOOD_DOORS, | #
# | DOORS, FENCE_GATES, TRAPDOORS, SHULKER_BOXES, BUTTONS, BUCKETS,     | #
# | PRESSURE_PLATES, NON_WOODEN_PRESSURE_PLATES, COPPER_BLOCKS,         | #
# | WEATHERABLE_BLOCKS, PROJECTILE_TRIGGERED_REDSTONE, WAXED_BLOCKS,    | #
# | CANDLES, ITEM_FRAMES, HANGING_ENTITIES, CAMPFIRES, BOOK_CONTAINERS, | #
# | PLACEABLE_BOOKS, HARVESTABLE_BERRIES, MINECART_KILLERS, AIR_TYPES,  | #
# | UNSTRIPPED_WOOD, CAULDRONS, FILLED_CAULDRONS, PLANTS, LIQUID_BLOCKS,| #
# | CAULDRON_FILLABLE, HOES, BANNERS, BRUSHABLE_BLOCKS, CORAL_FANS,     | #
# | PROJECTILE_BREAKABLE_BLOCKS, NOT_SOLID_BLOCKS, FALLING_BLOCKS,      | #
# | EXPLODABLE_ATTACHABLES                                              | #
# +---------------------------------------------------------------------+ #
###########################################################################
  
protection:
  
  # Items that can be blocked within towns via town/plot flags.
  # These items will be the ones restricted by a town/resident/plot's item_use setting.
  # A list of items, that are held in the hand, which can be protected against.
  # Group names you can use in this list: BOATS, MINECARTS
  # A full list of proper names can be found here https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html 
  item_use_ids: MINECARTS,BOATS,ENDER_PEARL,FIREBALL,CHORUS_FRUIT,LEAD,EGG
  
  # Blocks that are protected via town/plot flags.
  # These are blocks in the world that will be protected by a town/resident/plot's switch setting.
  # Switches are blocks, that are in the world, which get right-clicked.
  # Towny will tell you the proper name to use in this list if you hit the block while holding a clay brick item in your hand.
  # Group names you can use in this list: BOATS,MINECARTS,WOOD_DOORS,PRESSURE_PLATES,NON_WOODEN_PRESSURE_PLATES,FENCE_GATES,TRAPDOORS,SHULKER_BOXES,BUTTONS.
  # Note: Vehicles like MINECARTS and BOATS can be added here. If you want to treat other rideable mobs like switches add SADDLE
  #       to protect HORSES, DONKEYS, MULES, PIGS, STRIDERS (This is not recommended, unless you want players to not be able to
  #       re-mount their animals in towns they cannot switch in.)
  # A full list of proper names can be found here https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html 
  switch_ids: CHESTS,SHULKER_BOXES,FURNACE,BLAST_FURNACE,DISPENSER,HOPPER,DROPPER,JUKEBOX,SMOKER,COMPOSTER,BELL,BARREL,BREWING_STAND,LEVER,NON_WOODEN_PRESSURE_PLATES,BUTTONS,WOOD_DOORS,FENCE_GATES,TRAPDOORS,MINECARTS,LODESTONE,RESPAWN_ANCHOR,TARGET,OAK_CHEST_BOAT,DECORATED_POT,CRAFTER,SHELVES,COPPER_GOLEM_STATUE
  
  # Materials which can be lit on fire even when firespread is disabled.
  # Still requires the use of the flint and steel.
  fire_spread_bypass_materials: NETHERRACK,SOUL_SAND,SOUL_SOIL
  
  # permitted entities https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/LivingEntity.html
  # Animals, Chicken, Cow, Creature, Creeper, Flying, Ghast, Giant, Monster, Pig, 
  # PigZombie, Sheep, Skeleton, Slime, Spider, Squid, WaterMob, Wolf, Zombie, Shulker
  # Husk, Stray, SkeletonHorse, ZombieHorse, Vex, Vindicator, Evoker, Endermite, PolarBear, Axolotl, Goat, GlowSquid
  
  # Remove living entities within a town's boundaries, if the town has the mob removal flag set.
  town_mob_removal_entities: Monster,Flying,Slime,Shulker,SkeletonHorse,ZombieHorse
  
  # Whether the town mob removal should remove THE_KILLER_BUNNY type rabbits.
  town_mob_removal_killer_bunny: 'true'
  
  # Prevent the spawning of villager babies in towns.
  town_prevent_villager_breeding: 'false'
  
  # A comma seperated list of spawn causes, if an entity has a spawn cause that is in this list they will not be removed by town mob removal.
  # For the list of valid spawn causes, see https://jd.papermc.io/paper/1.21.4/org/bukkit/event/entity/CreatureSpawnEvent.SpawnReason.html
  # Due to technical reasons, this setting only works on Paper servers.
  town_mob_removal_ignored_spawn_causes: TRIAL_SPAWNER
  
  # Disable creatures triggering stone pressure plates
  disable_creature_pressureplate_stone: 'true'
  
  # Remove living entities in the wilderness in all worlds that have wildernessmobs turned off.
  wilderness_mob_removal_entities: Monster,Flying,Slime,Shulker,SkeletonHorse,ZombieHorse
  
  # Globally remove living entities in all worlds that have worldmobs turned off
  world_mob_removal_entities: Monster,Flying,Slime,Shulker,SkeletonHorse,ZombieHorse
  
  # Prevent the spawning of villager babies in the world.
  world_prevent_villager_breeding: 'false'
  
  # When set to true, mobs who've been named with a nametag will not be removed by the mob removal task.
  mob_removal_skips_named_mobs: 'false'
  
  # The maximum amount of time a mob could be inside a town's boundaries before being sent to the void.
  # Lower values will check all entities more often at the risk of heavier burden and resource use.
  # NEVER set below 1.
  mob_removal_speed: 5s
  
  # permitted entities https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/package-summary.html
  # Animals, Chicken, Cow, Creature, Creeper, Flying, Ghast, Giant, Monster, Pig, 
  # PigZombie, Sheep, Skeleton, Slime, Spider, Squid, WaterMob, Wolf, Zombie
  
  # Protect living entities within a town's boundaries from being killed by players or mobs.
  mob_types: Animals,WaterMob,NPC,Snowman,ArmorStand,Villager,Hanging
  
  # When set to true, the above mob_types will be protected when they are in a town, from being able to enter empty boats.
  # This protects the mobs from being stolen using boats.
  mob_types_protected_from_boat_theft: 'false'
  
  # Setting this to false will allow non-player entities to harm the above protected mobs.
  # This would include withers damaging protected mobs, and can be quite harmful.
  are_mob_types_protected_against_mobs: 'true'
  
  # Permitted Potion Types: https://jd.papermc.io/paper/org/bukkit/potion/PotionEffectType.html
  # ABSORPTION, BAD_OMEN, BLINDNESS, CONDUIT_POWER, DARKNESS, DOLPHINS_GRACE, FIRE_RESISTANCE, GLOWING, HASTE, HEALTH_BOOST, HERO_OF_THE_VILLAGE,
  # HUNGER, INFESTED, INSTANT_DAMAGE, INSTANT_HEALTH, INVISIBILITY, JUMP_BOOST, LEVITATION, LUCK, MINING_FATIGUE, NAUSEA, NIGHT_VISION, OOZING,
  # POISON, RAID_OMEN, REGENERATION, RESISTANCE, SATURATION, SLOW_FALLING, SLOWNESS, SPEED, STRENGTH, TRIAL_OMEN, UNLUCK, WATER_BREATHING,
  # WEAKNESS, WEAVING, WIND_CHARGED, WITHER.
  
  # When preventing PVP prevent the use of these potions.
  potion_types: BLINDNESS,NAUSEA,INSTANT_DAMAGE,HUNGER,POISON,SLOWNESS,MINING_FATIGUE,WEAKNESS,WITHER,WIND_CHARGED,WEAVING,INFESTED,OOZING
  
  # When set to true, players with the Frost Walker enchant will need to be able to build where they are attempting to freeze.
  prevent_frost_walker_freezing: 'false'
  
  # When set to true, players will never trample crops. When false, players will still
  # have to be able to break the crop by hand in order to be able to trample crops.
  prevent_player_crop_trample: 'true'
  
  
############################################################
# +------------------------------------------------------+ #
# |                Wilderness settings                   | #
# +------------------------------------------------------+ #
#                                                          #
# These are default settings only, applied to newly made   #
# worlds. They are copied to each world's data file upon   #
# first detection.                                         #
# If you are running Towny for the first time these have   #
# been applied to all your already existing worlds.        #
#                                                          #
# To make changes for each world edit the settings in the  #
# relevant worlds data file 'plugins/Towny/data/worlds/'   #
#                                                          #
# Furthermore: These settings are only used after Towny    #
# has exhausted testing the player for the towny.wild.*    #
# permission nodes.                                        #
#                                                          #
############################################################
  
unclaimed:
  
  # Can players build with any block in the wilderness?
  unclaimed_zone_build: 'false'
  
  # Can player destroy any block in the wilderness?
  unclaimed_zone_destroy: 'false'
  
  # Can players use items listed in the above protection.item_use_ids in the wilderness without restriction?
  unclaimed_zone_item_use: 'false'
  
  # Can players interact with switch blocks listed in the above protection.switch_ids in the wilderness without restriction?
  unclaimed_zone_switch: 'false'
  
  # A list of blocks that will bypass the above settings and do not require the towny.wild.* permission node.
  # These blocks are also used in determining which blocks can be interacted with in Towny Wilds plots in towns.
  unclaimed_zone_ignore: TORCH,LADDER,ORES,PLANTS,TREES,SAPLINGS
  
  
############################################################
# +------------------------------------------------------+ #
# |                 Town Notifications                   | #
# +------------------------------------------------------+ #
############################################################
  
  # This is the format for the notifications sent as players move between plots.
  # Empty a particular format for it to be ignored.
  
  # Example:
  # [notification.format]
  # ~ [notification.area_[wilderness/town]][notification.splitter][notification.[no_owner][notification.splitter][notification.plot.format]
  # ... [notification.plot.format]
  # ... [notification.plot.homeblock][notification.plot.splitter][notification.plot.forsaleby][notification.plot.splitter][notification.plot.type]
  # ~ Wak Town - Lord Jebus - [Home] [For Sale by Jebus: 50 Beli] [Shop]
  
notification:
  format: '&6 ~ %s'
  splitter: '&7 - '
  area_wilderness: '&2%s'
  area_wilderness_pvp: '%s'
  area_town: '&6%s'
  area_town_pvp: '%s'
  owner: '&a%s'
  no_owner: '&a%s'
  plot:
    splitter: ' '
    format: '%s'
    homeblock: '&b[Home]'
    outpostblock: '&b[Outpost]'
    forsaleby: '&e[For Sale by %s: %s]'
    notforsale: '&e[Not For Sale]'
    type: '&6[%s]'
  group: '&f[%s]'
  district: '&2[%s]'
  
  # When set to true, town's names are the long form (townprefix)(name)(townpostfix) configured in the town_level section.
  # When false, it is only the town name.
  town_names_are_verbose: 'true'
  
  # If set to true MC's Title and Subtitle feature will be used when crossing into a town.
  # Could be seen as intrusive/distracting, so false by default.
  using_titles: 'false'
  
  # Requires the above using_titles to be set to true.
  # Title and Subtitle shown when entering a town or the wilderness. By default 1st line is blank, the 2nd line shows {townname} or {wilderness}.
  # You may use colour codes &f, &c and so on.
  # For town_title and town_subtitle you may use: 
  # {townname} - Name of the town.
  # {town_motd} - Shows the townboard message.
  # {town_residents} - Shows the number of residents in the town.
  # {town_residents_online} - Shows the number of residents online currently.
  # {nationname} - Name of the nation, formatted below,
  # {nationcapital} - Name of the nation capital and nation, formatted below,
  # {nation_motd} - Shows the nationboard message.
  # {nation_residents} - Shows the number of residents in the nation.
  # {nation_residents_online} - Shows the number of residents online currently.
  # The notification.town_names_are_verbose setting will affect the {townname} placeholder.
  titles:
  
    # Entering Town Upper Title Line
    town_title: ''
  
    # Entering Town Lower Subtitle line.
    town_subtitle: '&b{townname}'
  
    # Entering Wilderness Upper Title Line
    wilderness_title: ''
  
    # Entering Wilderness Lower Subtitle line.
    wilderness_subtitle: '&2{wilderness}'
  
    # The format used to format the {nationame} option. The name of the nation will replace %s.
    nationname_format: '&6Nation of %s'
  
    # The format used to format the {nationcapital} option. The name of the capital city and nation will replace the %s and %s.
    # Alternatively, you can use %t for townname and %n for nationname and show either one or both.
    nationcapital_format: '&6Entering %s, Capital City of %s'
  
    # The duration (in ticks) that the Title and Subtitle messages will appear for.
    # The default duration for minecraft is 70 ticks, which equates to 3.5 seconds.
    duration: '70'
  
  # When true, a plot notification that has a plot owner's name will use the verbose name, ie: town/nation titles or prefixes set via the town/nation levels.
  # When false, only their name will appear.
  owner_shows_verbose_name: 'true'
  
  # This setting controls where chunk notifications are displayed for players.
  # By default, notifications appear in the player's action bar.
  # Available options: action_bar, chat, bossbar, or none.
  notifications_appear_as: action_bar
  
  # This settings sets the duration the actionbar (The text above the inventory bar) or the bossbar lasts in seconds
  notification_actionbar_duration: '15'
  
  bossbars:
  
    # The color to use for bossbar notifications.
    # Valid colors are blue, green, pink, purple, red, white, or yellow.
    color: white
  
    # The overlay to use for bossbar notifications.
    # Valid options are progress, notched_6, notched_10, notched_12, notched_20
    overlay: progress
  
    # The progress to use for the bossbar, between 0 and 1.
    progress: '0'
  
  
############################################################
# +------------------------------------------------------+ #
# |             Default Town/Plot flags                  | #
# +------------------------------------------------------+ #
############################################################
  
default_perm_flags:
  
  # Default permission flags for residents plots within a town
  #
  # Can allies/friends/outsiders perform certain actions in the town
  #
  # build - place blocks and other items
  # destroy - break blocks and other items
  # itemuse - use items such as furnaces (as defined in item_use_ids)
  # switch - trigger or activate switches (as defined in switch_ids)
  resident:
    friend:
      build: 'true'
      destroy: 'true'
      item_use: 'true'
      switch: 'true'
    town:
      build: 'false'
      destroy: 'false'
      item_use: 'false'
      switch: 'false'
    ally:
      build: 'false'
      destroy: 'false'
      item_use: 'false'
      switch: 'false'
    outsider:
      build: 'false'
      destroy: 'false'
      item_use: 'false'
      switch: 'false'
  
  # Default permission flags for towns
  # These are copied into the town data file at creation
  #
  # Can allies/outsiders/residents perform certain actions in the town
  #
  # build - place blocks and other items
  # destroy - break blocks and other items
  # itemuse - use items such as flint and steel or buckets (as defined in item_use_ids)
  # switch - trigger or activate switches (as defined in switch_ids)
  town:
    default:
      pvp: 'true'
      fire: 'false'
      explosion: 'false'
      mobs: 'false'
    resident:
      build: 'true'
      destroy: 'true'
      item_use: 'true'
      switch: 'true'
    nation:
      build: 'false'
      destroy: 'false'
      item_use: 'false'
      switch: 'false'
    ally:
      build: 'false'
      destroy: 'false'
      item_use: 'false'
      switch: 'false'
    outsider:
      build: 'false'
      destroy: 'false'
      item_use: 'false'
      switch: 'false'
  
  
############################################################
# +------------------------------------------------------+ #
# |                 Towny Invite System                  | #
# +------------------------------------------------------+ #
############################################################
  
invite_system:
  
  # Command used to accept towny invites)
  #e.g Player join town invite.
  accept_command: accept
  
  # Command used to deny towny invites
  #e.g Player join town invite.
  deny_command: deny
  
  # Command used to confirm some towny actions/tasks)
  #e.g Purging database or removing a large amount of townblocks
  confirm_command: confirm
  
  # Command used to cancel some towny actions/tasks
  #e.g Purging database or removing a large amount of townblocks
  cancel_command: cancel
  
  # The format applied to the clickable confirmations.
  #e.g [/accept] would appear as default.
  confirmation_format: '[/%s]'
  
  # The colour used to show the accept and confirm commands.
  # Allowed colours: <black>,<dark_blue>,<dark_green>,<dark_aqua>,<dark_red>,<dark_purple>,<gold>,<gray>,<dark_gray>,<blue>,<green>,<aqua>,<red>,<light_purple>,<yellow>,<white>
  confirmation_yes_colour: <green>
  
  # The colour used to show the deny and cancel commands.
  # Allowed colours: <black>,<dark_blue>,<dark_green>,<dark_aqua>,<dark_red>,<dark_purple>,<gold>,<gray>,<dark_gray>,<blue>,<green>,<aqua>,<red>,<light_purple>,<yellow>,<white>
  confirmation_no_colour: <red>
  
  # How many seconds before a confirmation times out for the receiver.
  # This is used for cost-confirmations and confirming important decisions.
  confirmation_timeout: '20'
  
  # When set for more than 0m, the amount of time (in minutes) which must have passed between
  # a player's first log in and when they can be invited to a town.
  cooldowntime: 0m
  
  # When set for more than 0m, the amount of time until an invite is considered
  # expired and is removed. Invites are checked for expiration once every hour.
  # Valid values would include: 30s, 30m, 24h, 2d, etc.
  expirationtime: 0m
  
  # Max invites for Town & Nations, which they can send. Invites are capped to decrease load on large servers.
  # You can increase these limits but it is not recommended. Invites/requests are not saved between server reloads/stops.
  maximum_invites_sent:
  
    # How many invites a town can send out to players, to join the town.
    town_toplayer: '35'
  
    # How many invites a nation can send out to towns, to join the nation.
    nation_totown: '35'
  
    # How many requests a nation can send out to other nations, to ally with the nation.
    # Only used when war.disallow_one_way_alliance is set to true.
    nation_tonation: '35'
  
  # Max invites for Players, Towns & nations, which they can receive. Invites are capped to decrease load on large servers.
  # You can increase these limits but it is not recommended. Invites/requests are not saved between server reloads/stops.
  maximum_invites_received:
  
    # How many invites can one player have from towns.
    player: '10'
  
    # How many invites can one town have from nations.
    town: '10'
  
    # How many requests can one nation have from other nations for an alliance.
    nation: '10'
  
  # When set above 0, the maximum distance a player can be from a town's spawn in order to receive an invite.
  # Use this setting to require players to be near or inside a town before they can be invited.
  maximum_distance_from_town_spawn: '0'
  
  
############################################################
# +------------------------------------------------------+ #
# |                  Resident settings                   | #
# +------------------------------------------------------+ #
############################################################
  
resident_settings:
  
  # if enabled old residents will be deleted, losing their town, townblocks, friends
  # after Two months (default) of not logging in. If the player is a mayor their town
  # will be inherited according to the order_of_mayoral_succession list in this config.
  delete_old_residents:
    enable: 'false'
    deleted_after_time: 60d
    delete_economy_account: 'true'
  
    # When true only residents who have no town will be deleted.
    delete_only_townless: 'false'
  
    # When true players will be removed from their town and become a nomad instead of being fully deleted.
    only_remove_town: 'false'
  
  # The name of the town a resident will automatically join when he first registers.
  default_town_name: ''
  
  # If true, players can only use beds in plots they personally own.
  deny_bed_use: 'false'
  
  # The default resident about text, shown in the resident's status screen.
  default_about: /res set about [msg]
  
  # How long does a resident have to wait to join a town, after joining the server.
  # Set to 0m to disable. 1m = 1 minute, 1h = 1 hour, 1d = 1 day.
  min_time_to_join_town: 0m
  
  
############################################################
# +------------------------------------------------------+ #
# |                  Economy settings                    | #
# +------------------------------------------------------+ #
############################################################
  
economy:
  
  # This enables/disables all the economy functions of Towny.
  # This will first attempt to use Vault or Reserve to bridge your economy plugin with Towny.
  # If Reserve/Vault is not present it will attempt to find a supported economy plugin.
  # If neither Vault/Reserve or supported economy are present it will not be possible to create towns or do any operations that require money.
  using_economy: 'true'
  
  # By default it is set to true.
  # Rarely set to false. Set to false if you get concurrent modification errors on timers for daily tax collections.
  use_async: 'true'
  
  # The time that the town and nation bank accounts' balances are cached for, in seconds.
  # This time is also used for the resident tax-owing value.
  # Default of 600s is equal to ten minutes. Requires the server to be stopped and started if you want to change this.
  # Cached balances are used for PlaceholderAPI placeholders, town and nation lists.
  bank_account_cache_timeout: 600s
  
  # Prefix to apply to all town economy accounts.
  town_prefix: town-
  
  # Prefix to apply to all nation economy accounts.
  nation_prefix: nation-
  
  # The cost of renaming a town.
  town_rename_cost: '0'
  
  # The cost of renaming a nation.
  nation_rename_cost: '0'
  
  # The cost of setting a town's mapcolour.
  town_set_mapcolour_cost: '0'
  
  # The cost of setting a nation's mapcolour.
  nation_set_mapcolour_cost: '0'
  
  spawn_travel:
  
    # Cost to use /town spawn.
    price_town_spawn_travel: '0.0'
  
    # Cost to use '/town spawn [town]' to another town in your nation.
    price_town_nation_spawn_travel: '5.0'
  
    # Cost to use '/town spawn [town]' to another town in a nation that is allied with your nation.
    price_town_ally_spawn_travel: '10.0'
  
    # Maximum cost to use /town spawn [town] that mayors can set using /t set spawncost.
    # This is paid to the town you goto.
    price_town_public_spawn_travel: '10.0'
  
    # When false, the price_town_public_spawn_travel will be used for public spawn costs, despite what mayors have their town spawncost set at.
    # When true, the lower of either the town's spawncost or the config's price_town_public_spawn_travel setting will be used.
    is_public_spawn_cost_affected_by_town_spawncost: 'true'
  
    # When set to true, any cost paid by a player to use any variant of '/town spawn' will be paid to the town bank.
    # When false the amount will be paid to the server account whose name is set in the closed economy setting below..
    town_spawn_cost_paid_to_town: 'true'
  
  # The daily upkeep to remain neutral, paid by the Nation bank. If unable to pay, neutral/peaceful status is lost.
  # This cost is multiplied by the nation_level peacefulCostMultiplier.
  # Neutrality will exclude you from a war event, as well as deterring enemies.
  price_nation_neutrality: '100.0'
  
  # When it is true, the peaceful cost is multiplied by the nation's number of towns.
  # Note that the base peacful cost is calculated by the price_nation_neutrality X nation_level peacefulCostMultiplier.
  price_nation_neutrality_charges_per_town: 'false'
  
  # The daily upkeep to remain neutral, paid by the Town bank. If unable to pay, neutral/peaceful status is lost.
  # This cost is multiplied by the town_level peacefulCostMultiplier.
  price_town_neutrality: '25.0'
  
  # When it is true, the peaceful cost is multiplied by the town's number of claimed townblocks.
  # Note that the base peacful cost is calculated by the price_town_neutrality X town_level peacefulCostMultiplier.
  price_town_neutrality_charges_per_plot: 'false'
  
  new_expand:
  
    # How much it costs to start a nation.
    price_new_nation: '1000.0'
  
    # How much it costs to start a town.
    price_new_town: '250.0'
  
    # The base cost a town has to pay to merge with another town. The town that initiates the merge pays the cost.
    price_town_merge: '0'
  
    # The percentage that a town has to pay per plot to merge with another town. The town that initiates the merge pays the cost.
    # This is based on the price_claim_townblock.
    price_town_merge_per_plot_percentage: '50'
  
    # How much it costs to reclaim a ruined town.
    # This is only applicable if the town-ruins & town-reclaim features are enabled.
    price_reclaim_ruined_town: '500.0'
  
    # How much it costs to make an outpost. An outpost isn't limited to being on the edge of town.
    price_outpost: '500.0'
  
    # The price for a town to expand one townblock.
    price_claim_townblock: '25.0'
  
    # How much every additionally claimed townblock increases in cost. Set to 1 to deactivate this. 1.3 means +30% to the cost of every townblock claimed.
    price_claim_townblock_increase: '1.0'
  
    # The maximum price for an additional townblock. No matter how many blocks a town has the price will not be above this. Set to -1 to deactivate this.
    max_price_claim_townblock: '-1.0'
  
    # The amount refunded to a town when they unclaim a townblock.
    # Warning: do not set this higher than the cost to claim a townblock.
    # It is advised that you do not set this to the same price as claiming either, otherwise towns will get around using outposts to claim far away.
    # Optionally, set this to a negative amount if you want towns to pay money to unclaim their land.
    price_claim_townblock_refund: '0.0'
  
    # How much it costs a player to buy extra blocks.
    price_purchased_bonus_townblock: '25.0'
  
    # How much every extra bonus block costs more. Set to 1 to deactivate this. 1.2 means +20% to every bonus claim block cost.
    price_purchased_bonus_townblock_increase: '1.0'
  
    # The maximum price that bonus townblocks can cost to purchase. Set to -1.0 to deactivate this maximum.
    price_purchased_bonus_townblock_max_price: '-1.0'
  
  
  takeoverclaim:
  
    # The price to use /t takeoverclaim, when it has been enabled in the config at town.being_overclaimed_allows_other_towns_to_steal_land
    price: '100.0'
  
  death:
  
    # Either fixed or percentage.
    # For percentage 1.0 would be 100%. 0.01 would be 1%.
    price_death_type: fixed
  
    # A maximum amount paid out by a resident from their personal holdings for percentage deaths.
    # Set to 0 to have no cap.
    percentage_cap: '0.0'
  
    # If True, only charge death prices for pvp kills. Not monsters/environmental deaths.
    price_death_pvp_only: 'false'
  
    # The price that a player pays when they die. If this is a PVP death, the amount is paid to the killer.
    # Either a flat rate or a percentage according to the price_death_type setting.
    price_death: '1.0'
  
    # The price that a player's town pays when they die. If this is a PVP death, the amount is paid to the killer.
    # Either a flat rate or a percentage according to the price_death_type setting.
    price_death_town: '0.0'
  
    # The price that a player's nation pays when they die. If this is a PVP death, the amount is paid to the killer.
    # Either a flat rate or a percentage according to the price_death_type setting.
    price_death_nation: '0.0'
  
  banks:
  
    # Maximum amount of money allowed in town bank
    # Use 0 for no limit
    town_bank_cap: '0.0'
  
    # Set to true to allow withdrawals from town banks
    town_allow_withdrawals: 'true'
  
    # Minimum amount of money players are allowed to deposit in town bank at a time.
    town_min_deposit: '0'
  
    # Minimum amount of money players are allowed to withdraw from town bank at a time.
    town_min_withdraw: '0'
  
    # Maximum amount of money allowed in nation bank
    # Use 0 for no limit
    nation_bank_cap: '0.0'
  
    # Set to true to allow withdrawals from nation banks
    nation_allow_withdrawals: 'true'
  
    # Minimum amount of money players are allowed to deposit in nation bank at a time.
    nation_min_deposit: '0'
  
    # Minimum amount of money players are allowed to withdraw from nation bank at a time.
    nation_min_withdraw: '0'
  
    # When set to true, players can only use their town withdraw/deposit commands while inside of their own town.
    # Likewise, nation banks can only be withdrawn/deposited to while in the capital city.
    disallow_bank_actions_outside_town: 'false'
  
    # When set to true, a town or nation which is deleted will attempt to pay the balance bank balance to the mayor or leader.
    # This will only succeed if the town or nation has a mayor or leader.
    is_deleted_town_and_nation_bank_balances_paid_to_owner: 'true'
  
  closed_economy:
  
    # The name of the account that all money that normally disappears goes into.
    server_account: towny-server
  
    # The UUID of the account that all money that normally disappears goes into.
    server_account_uuid: a73f39b0-1b7c-2930-b4a3-ce101812d926
  
    # Turn on/off whether all transactions that normally don't have a second party are to be done with a certain account.
    # Eg: The money taken during Daily Taxes is just removed. With this on, the amount taken would be funneled into an account.
    #     This also applies when a player collects money, like when the player is refunded money when a delayed teleport fails.
    enabled: 'false'
  
  daily_taxes:
  
    # Enables taxes to be collected daily by town/nation
    # If a town can't pay it's tax then it is kicked from the nation.
    # if a resident can't pay his plot tax he loses his plot.
    # if a resident can't pay his town tax then he is kicked from the town.
    # if a town or nation fails to pay it's upkeep it is deleted.
    enabled: 'true'
  
    # When true, a town's mayor will pay the town tax.
    # This feature is a bit redundant because the mayor can withdraw from the bank anyways,
    # but it might keep towns from being deleted for not paying their upkeep.
    do_mayors_pay_town_tax: 'false'
  
    # Maximum tax amount allowed for townblocks sold to players.
    max_plot_tax_amount: '1000.0'
  
    # Maximum tax amount allowed for towns when using flat taxes.
    max_town_tax_amount: '1000.0'
  
    # Maximum tax amount allowed for nations when using flat taxes.
    max_nation_tax_amount: '1000.0'
  
    # Maximum tax percentage allowed when taxing by percentages for towns.
    max_town_tax_percent: '25'
  
    # The maximum amount of money that can be taken from a balance when using a percent tax, this is the default for all new towns.
    max_town_tax_percent_amount: '10000'
  
    # Maximum tax percentage allowed when taxing by percentages for nations.
    max_nation_tax_percent: '25'
  
    # The maximum amount of money that can be taken from a balance when using a percent tax, this is the default for all new nations.
    max_nation_tax_percent_amount: '10000'
  
    # When true, a nation's capital will pay the nation tax from the capital's town bank.
    # This feature is a bit redundant because the king can withdraw from both banks anyways,
    # but it might keep nation's from being deleted for not paying their upkeep.
    do_nation_capitals_pay_nation_tax: 'false'
  
    # The server's daily charge on each nation. If a nation fails to pay this upkeep
    # all of it's member town are kicked and the Nation is removed.
    price_nation_upkeep: '100.0'
  
    # Uses the total number of plots which a nation has across all of its towns to determine upkeep
    # instead of nation_pertown_upkeep and instead of nation level (number of residents.)
    # Calculated by (price_nation_upkeep X number of plots owned by the nation's towns.)
    nation_perplot_upkeep: 'false'
  
    # Uses total number of towns in the nation to determine upkeep instead of nation level (Number of Residents)
    # calculated by (number of towns in nation X price_nation_upkeep).
    nation_pertown_upkeep: 'false'
  
    # If set to true, the per-town-upkeep system will be modified by the Nation Levels' upkeep modifiers.
    nation_pertown_upkeep_affected_by_nation_level_modifier: 'false'
  
    # The server's daily charge on each town. If a town fails to pay this upkeep
    # all of it's residents are kicked and the town is removed.
    price_town_upkeep: '10.0'
  
    # Uses total amount of owned plots to determine upkeep instead of the town level (Number of residents)
    # calculated by (number of claimed plots X price_town_upkeep).
    town_plotbased_upkeep: 'false'
  
    # If set to true, the plot-based-upkeep system will be modified by the Town Levels' upkeep modifiers.
    town_plotbased_upkeep_affected_by_town_level_modifier: 'false'
  
    # If set to any amount over zero, if a town's plot-based upkeep totals less than this value, the town will pay the minimum instead.
    town_plotbased_upkeep_minimum_amount: '0.0'
  
    # If set to any amount over zero, if a town's plot-based upkeep totals more than this value, the town will pay the maximum instead.
    town_plotbased_upkeep_maximum_amount: '0.0'
  
    # The server's daily charge on a town which has claimed more townblocks than it is allowed.
    price_town_overclaimed_upkeep_penalty: '0.0'
  
    # Uses total number of plots that the town is overclaimed by, to determine the price_town_overclaimed_upkeep_penalty cost.
    # If set to true the penalty is calculated (# of plots overclaimed X price_town_overclaimed_upkeep_penalty).
    price_town_overclaimed_upkeep_penalty_plotbased: 'false'
  
    # An optional price that a town must pay for each outpost they own.
    # This number is added to the town upkeep before other upkeep modifiers are applied to the Town's upkeep costs.
    # Note: when town_plotbased_upkeep is true, this cost is added after all other upkeep modifiers are applied.
    per_outpost_cost: '0.0'
  
    # If enabled and you set a negative upkeep for the town
    # any funds the town gains via upkeep at a new day
    # will be shared out between the plot owners.
    use_plot_payments: 'false'
  
    # If enabled, if a plot tax is set to a negative amount
    # it will result in the resident that owns it being paid
    # by the town bank (if the town can afford it.)
    allow_negative_plot_tax: 'false'
  
    # If enabled, and a town tax is set to a negative amount and is a fixed amount (not percentage,)
    # it will result in every resident being paid by the town bank (if the town can afford it.)
    allow_negative_town_tax: 'false'
  
    # If enabled, and a nation tax is set to a negative amount and is a fixed amount (not percentage,)
    # it will result in every town in the nation being paid by the nation bank (if the nation can afford it.)
    allow_negative_nation_tax: 'false'
  
  # The Bankruptcy system in Towny will make it so that when a town cannot pay their upkeep costs,
  # rather than being deleted the towns will go into debt. Debt is capped based on the Town's costs
  # or overriden with the below settings.
  bankruptcy:
  
    # If this setting is true, then if a town runs out of money (due to upkeep, nation tax etc.),
    # it does not get deleted, but instead goes into a 'bankrupt state'.
    # While bankrupt, the town bank account is in debt, and the town cannot expand (e.g claim, recruit, or build).
    # The debt has a ceiling equal to the estimated value of the town (from new town and claims costs)
    # The debt can be repaid using /t deposit x.
    # Once all debt is repaid, the town immediately returns to a normal state.
    enabled: 'false'
  
    # When using bankruptcy is enabled a Town a debtcap.
    # The debt cap is calculated by adding the following:
    # The cost of the town,
    # The cost of the town's purchased townblocks,
    # The cost of the town's purchased outposts.
    debt_cap:
  
      # When set to greater than 0.0, this will be used to determine every town''s maximum debt,
      # overriding the above calculation if the calculation would be larger than the set maximum.
      maximum: '0.0'
  
      # When set to greater than 0.0, this setting will override all other debt calculations and maximums,
      # making all towns have the same debt cap.
      override: '0.0'
  
      # When true the debt_cap.override price will be multiplied by the debtCapModifier in the town_level
      # section of the config. (Ex: debtCapModifier of 3.0 and debt_cap.override of 1000.0 would set 
      # a debtcap of 3.0 x 1000 = 3000.
      debt_cap_uses_town_levels: 'false'
  
      # When true a town will only be allowed to be bankrupt for a specific number of days, before they will be deleted,
      # requires delete_towns_that_reach_debt_cap to be true.
      debt_cap_uses_fixed_days: 'false'
  
      # When debt_cap_uses_fixed_days is set to true, how many days will a town be allowed to be bankrupt?
      allowed_days: '7'
  
    upkeep:
  
      # If a town has reached their debt cap and is unable to pay the upkeep with debt,
      # will Towny delete them?
      delete_towns_that_reach_debt_cap: 'false'
  
    neutrality:
  
      # If a town is bankrupt can they still pay for neutrality?
      can_bankrupt_towns_pay_for_neutrality: 'true'
  
    nation_tax:
  
      # Will bankrupt towns pay their nation tax?
      # If false towns that are bankrupt will not pay any nation tax and will leave their nation.
      # If true the town will go into debt up until their debt cap is reached.
      # True is recommended if using a war system where towns are forced to join a conqueror's nation,
      # otherwise conquered towns would be able to leave the nation by choosing to go bankrupt.
      # False is recommended otherwise so that nations are not using abandoned towns to gather taxes.
      do_bankrupt_towns_pay_nation_tax: 'false'
  
      # If a town can no longer pay their nation tax with debt because they have
      # reach their debtcap, are they kicked from the nation?
      kick_towns_that_reach_debt_cap: 'false'
  
      # Does a conquered town which cannot pay the nation tax get deleted?
      does_nation_tax_delete_conquered_towns_that_cannot_pay: 'false'
  
  advanced:
  
    # When enabled, Towny will use UUIDs when communicating with your economy plugin.
    # Most users will never have to touch this, but for existing servers this option will automatically be set to false.
    # If this option is disabled and you wish to avoid losing data, use the `/townyadmin eco convert modern` command to convert.
    modern: 'true'
  
    # The UUID version to use for non-player accounts. This is used so that economy plugins can more easily differentiate between player and NPC accounts.
    # The default is -1, which disables modifying npc uuids.
    npc_uuid_version: '-1'
  
  
############################################################
# +------------------------------------------------------+ #
# |                 Bank History settings                | #
# +------------------------------------------------------+ #
############################################################
  
bank_history:
  
  # This allows you to modify the style displayed via bankhistory commands.
  book: |-
    {time}
    {type} of {amount} {to-from} {name}
    Reason: {reason}
    Balance: {balance}
  
  
############################################################
# +------------------------------------------------------+ #
# |                   Town Block Types                   | #
# |                                                      | #
# | You may add your own custom townblocks to this       | #
# | section of the config. Removing the townblocks       | #
# | supplied by Towny from this configuration is not     | #
# | recommended.                                         | #
# |                                                      | #
# | name: The name used for this townblock, in-game and  | #
# |    in the database.                                  | #
# | cost: Cost a player pays to set a townblock to the   | #
# |    type.                                             | #
# | tax: The amount a player has to pay city each day to | #
# |    continue owning the plot. If tax is set to 0, the | #
# |    towns' plot tax will be used instead.             | #
# | mapKey: The character that shows on the /towny map   | #
# |    commands. When using Unicode use the \u####       | #
# |    format, and use the HTML-code version of the      | #
# |    unicode character.                                | #
# | colour: The colour code which will be used to colour | #
# |    the townblocktype when viewed on the ascii maps.  | #
# |    Leave this blank to not set any colour.           | #
# | itemUseIds: If empty, will use values defined in     | #
# |    protection.item_use_ids. If not empty this defines| #
# |    what items are considered item_use.               | #
# | switchIds: If empty, will use values defined in      | #
# |    protection.switch_ids. If not empty this defines  | #
# |    what blocks are considered switches in the type.  | #
# | allowedBlocks: Will make it so players with build or | #
# |    destroy permissions are only able to affect those | #
# |    blocks, see the farm type for an example.         | #
# |                                                      | #
# +------------------------------------------------------+ #
############################################################
  
townblocktypes:
  types:
  - name: default
    cost: 0.0
    tax: 0.0
    mapKey: +
    colour: ''
    itemUseIds: ''
    switchIds: ''
    allowedBlocks: ''
  - name: shop
    cost: 0.0
    tax: 0.0
    mapKey: C
    colour: <blue>
    itemUseIds: ''
    switchIds: ''
    allowedBlocks: ''
  - name: arena
    cost: 0.0
    tax: 0.0
    mapKey: A
    colour: ''
    itemUseIds: ''
    switchIds: ''
    allowedBlocks: ''
  - name: embassy
    cost: 0.0
    tax: 0.0
    mapKey: E
    colour: ''
    itemUseIds: ''
    switchIds: ''
    allowedBlocks: ''
  - name: wilds
    cost: 0.0
    tax: 0.0
    mapKey: W
    colour: ''
    itemUseIds: ''
    switchIds: ''
    allowedBlocks: GOLD_ORE,IRON_ORE,COAL_ORE,COPPER_ORE,REDSTONE_ORE,EMERALD_ORE,LAPIS_ORE,DIAMOND_ORE,DEEPSLATE_COAL_ORE,DEEPSLATE_IRON_ORE,DEEPSLATE_COPPER_ORE,DEEPSLATE_GOLD_ORE,DEEPSLATE_EMERALD_ORE,DEEPSLATE_REDSTONE_ORE,DEEPSLATE_LAPIS_ORE,DEEPSLATE_DIAMOND_ORE,NETHER_GOLD_ORE,NETHER_QUARTZ_ORE,ANCIENT_DEBRIS,OAK_LOG,SPRUCE_LOG,BIRCH_LOG,JUNGLE_LOG,ACACIA_LOG,DARK_OAK_LOG,CRIMSON_STEM,WARPED_STEM,ACACIA_LEAVES,OAK_LEAVES,DARK_OAK_LEAVES,JUNGLE_LEAVES,BIRCH_LEAVES,SPRUCE_LEAVES,CRIMSON_HYPHAE,WARPED_HYPHAE,ACACIA_SAPLING,BAMBOO_SAPLING,BIRCH_SAPLING,DARK_OAK_SAPLING,JUNGLE_SAPLING,OAK_SAPLING,SPRUCE_SAPLING,TALL_GRASS,BROWN_MUSHROOM,RED_MUSHROOM,CACTUS,ALLIUM,AZURE_BLUET,BLUE_ORCHID,CORNFLOWER,DANDELION,LILAC,LILY_OF_THE_VALLEY,ORANGE_TULIP,OXEYE_DAISY,PEONY,PINK_TULIP,POPPY,RED_TULIP,ROSE_BUSH,SUNFLOWER,WHITE_TULIP,WITHER_ROSE,CRIMSON_FUNGUS,LARGE_FERN,TORCH,LADDER,CLAY,PUMPKIN,GLOWSTONE,VINE,NETHER_WART_BLOCK,COCOA
  - name: inn
    cost: 0.0
    tax: 0.0
    mapKey: I
    colour: ''
    itemUseIds: ''
    switchIds: ''
    allowedBlocks: ''
  - name: jail
    cost: 0.0
    tax: 0.0
    mapKey: J
    colour: ''
    itemUseIds: ''
    switchIds: ''
    allowedBlocks: ''
  - name: farm
    cost: 0.0
    tax: 0.0
    mapKey: F
    colour: ''
    itemUseIds: ''
    switchIds: ''
    allowedBlocks: BROWN_MUSHROOM,MELON_SEEDS,MANGROVE_LEAVES,ATTACHED_PUMPKIN_STEM,POTTED_PALE_OAK_SAPLING,SHEARS,ACACIA_LOG,POTTED_ACACIA_SAPLING,CHERRY_SAPLING,CLOSED_EYEBLOSSOM,TWISTING_VINES_PLANT,MELON_STEM,PINK_TULIP,PALE_OAK_LOG,TORCHFLOWER,JUNGLE_SAPLING,OAK_WOOD,WHITE_TULIP,CACTUS,SPRUCE_WOOD,CRIMSON_ROOTS,BAMBOO_SAPLING,BLUE_ORCHID,PUMPKIN,FLOWERING_AZALEA_LEAVES,NETHER_WART_BLOCK,WHEAT,SHORT_GRASS,PINK_PETALS,SPRUCE_LOG,RED_MUSHROOM,AZALEA,SPRUCE_SAPLING,SMALL_DRIPLEAF,PITCHER_POD,CRIMSON_FUNGUS,TALL_GRASS,POTTED_BIRCH_SAPLING,DARK_OAK_SAPLING,CHORUS_FLOWER,POTTED_OAK_SAPLING,BAMBOO_BLOCK,SUNFLOWER,PUMPKIN_STEM,CORNFLOWER,POTATOES,TORCHFLOWER_SEEDS,PITCHER_PLANT,WARPED_ROOTS,COCOA_BEANS,POPPY,DARK_OAK_WOOD,POTTED_JUNGLE_SAPLING,CRIMSON_HYPHAE,DARK_OAK_LOG,KELP,LILAC,POTTED_SPRUCE_SAPLING,VINE,PALE_OAK_LEAVES,CHERRY_WOOD,CRIMSON_STEM,NETHER_SPROUTS,ATTACHED_MELON_STEM,WARPED_WART_BLOCK,ACACIA_LEAVES,CHERRY_LOG,PALE_OAK_WOOD,LARGE_FERN,MANGROVE_LOG,BAMBOO,PITCHER_CROP,SUGAR_CANE,COW_SPAWN_EGG,GOAT_SPAWN_EGG,MOOSHROOM_SPAWN_EGG,JUNGLE_LEAVES,CHERRY_LEAVES,JUNGLE_WOOD,PUMPKIN_SEEDS,RED_TULIP,SPORE_BLOSSOM,POTTED_CHERRY_SAPLING,WARPED_FUNGUS,JUNGLE_LOG,NETHER_WART,WARPED_HYPHAE,FLOWERING_AZALEA,LILY_OF_THE_VALLEY,DANDELION,AZALEA_LEAVES,COCOA,ALLIUM,ACACIA_WOOD,SHROOMLIGHT,WILDFLOWERS,WARPED_STEM,OPEN_EYEBLOSSOM,MANGROVE_WOOD,OAK_SAPLING,PEONY,WEEPING_VINES_PLANT,AZURE_BLUET,OXEYE_DAISY,DARK_OAK_LEAVES,PALE_OAK_SAPLING,MELON,WHEAT_SEEDS,WITHER_ROSE,ACACIA_SAPLING,BIRCH_SAPLING,OAK_LOG,BEETROOTS,BIG_DRIPLEAF,BIRCH_LOG,CARROTS,CACTUS_FLOWER,BIRCH_WOOD,POTTED_DARK_OAK_SAPLING,OAK_LEAVES,SEA_PICKLE,SPRUCE_LEAVES,BEETROOT_SEEDS,SWEET_BERRY_BUSH,CHORUS_FRUIT,BIRCH_LEAVES,ORANGE_TULIP,MANGROVE_PROPAGULE,ROSE_BUSH
  - name: bank
    cost: 0.0
    tax: 0.0
    mapKey: B
    colour: ''
    itemUseIds: ''
    switchIds: ''
    allowedBlocks: ''
  
  
############################################################
# +------------------------------------------------------+ #
# |                 Jail Plot settings                   | #
# +------------------------------------------------------+ #
############################################################
  
jail:
  
  # If true attacking players who die on enemy-town land will be placed into the defending town's jail if it exists.
  is_jailing_attacking_enemies: 'false'
  
  # If true attacking players who are considered an outlaw, that are killed inside town land will be placed into the defending town's jail if it exists.
  is_jailing_attacking_outlaws: 'false'
  
  # How many hours an attacking outlaw will be jailed for.
  outlaw_jail_hours: '5'
  
  # How many hours an attacking enemy will be jailed for.
  pow_jail_hours: '5'
  
  # The maximum hours that a mayor can set when jailing someone, full number expected.
  maximum_jail_hours: '5'
  
  # Amount that it costs per player jailed for a town, this is withdrawn from the Town bank. Set to -1 to disable.
  fee_initial_amount: '-1'
  
  # Amount that it costs per player jailed per hour for a town, this is withdrawn from the Town bank. Set to -1 to disable.
  fee_hourly_amount: '-1'
  
  # If true jailed players can use items that teleport, ie: Ender Pearls & Chorus Fruit, but are still barred from using other methods of teleporting.
  jail_allows_teleport_items: 'false'
  
  # If false jailed players can use /town leave, and escape a jail.
  jail_denies_town_leave: 'false'
  
  bail:
  
    # If true players can pay a bail amount to be unjailed.
    is_allowing_bail: 'false'
  
    # Amount that bail costs for outlaw or POW arrests.
    bail_amount: '10'
  
    # Max bail cost that a mayor can set.
    bailmax_amount: '100'
  
    # Amount that bail costs for Town mayors if captured.
    bail_amount_mayor: '10'
  
    # Amount that bail costs for Nation kings if captured.
    bail_amount_king: '10'
  
  # Amount of potential jailed players per town, set to -1 to disable.
  max_jailed_count: '-1'
  
  # Behaviour for new jail attempts if max jailed count is reached
  # 0 = Unable to jail new players until a current prisoner is released.
  # 1 = A prisoner slot will be made by automatically releasing a prisoner based on lowest remaining time.
  # 2 = A prisoner slot will be made by automatically releasing a prisoner based on lowest custom bail.
  max_jailed_newjail_behavior: '0'
  
  # If false players will not be provided with a book upon being jailed.
  # The jail book is a book given to people when they are jailed, which explains to them
  # how they can potentially escape from jail and other jail behaviours based on the
  # settings you have configured for your server.
  is_jailbook_enabled: 'true'
  
  # Commands which a jailed player cannot use.
  blacklisted_commands: home,spawn,teleport,tp,tpa,tphere,tpahere,back,dback,ptp,jump,kill,warp,suicide
  
  # When true, jail plots will prevent any PVP from occuring. Applies to jailed residents only.
  do_jail_plots_deny_pvp: 'false'
  
  # When true, Towny will prevent a person who has been jailed by their mayor/town from logging out,
  # if they do log out they will be killed first, ensuring they respawn in the jail.
  prevent_newly_jailed_players_logging_out: 'false'
  
  # How long do new players have to be on the server before they can be jailed?
  new_player_immunity: 1h
  
  # Most types of unjailing result in a player being teleported when they are freed.
  # Setting this to false will prevent that teleporting, resulting in the player not being teleported when they are freed.
  unjailed_players_get_teleported: 'true'
  
  # When enabled, player that can pay their bail will see a title message telling them how to pay their bail.
  show_bail_command_in_title_message: 'false'
  
  
############################################################
# +------------------------------------------------------+ #
# |                 Bank Plot settings                   | #
# +------------------------------------------------------+ #
############################################################
# Bank plots may be used by other economy plugins using the Towny API.
  
bank:
  
  # If true players will only be able to use /t deposit, /t withdraw, /n deposit & /n withdraw while inside bank plots belonging to the town or nation capital respectively.
  # Home plots will also allow deposit and withdraw commands.
  is_banking_limited_to_bank_plots: 'false'
  
  # If true, towns which have one or more bank plots will no longer be able to use their homeblock for withdraw/depositing.
  # Requires the above is_banking_limited_to_bank_plots to be true as well.
  do_homeblocks_not_work_when_a_town_has_bank_plots: 'false'
  
  
############################################################
# +------------------------------------------------------+ #
# |               Town Ruining Settings                  | #
# +------------------------------------------------------+ #
############################################################
  
town_ruining:
  town_ruins:
  
    # If this is true, then if a town falls, it remains in a 'ruined' state for a time.
    # In this state, the town cannot be claimed, but can be looted.
    # The feature prevents mayors from escaping attack/occupation, 
    # by deleting then quickly recreating their town.
    enabled: 'false'
  
    # This value determines the maximum duration in which a town can lie in ruins
    # After this time is reached, the town will be completely deleted.
    # Does not accept values greater than 8760, which is equal to one year.
    max_duration_hours: '72'
  
    # This value determines the minimum duration in which a town must lie in ruins,
    # before it can be reclaimed by a resident.
    min_duration_hours: '4'
  
    # If this is true, then after a town has been ruined for the minimum configured time,
    # it can then be reclaimed by any resident who runs /t reclaim, and pays the required price. (price is configured in the eco section)
    reclaim_enabled: 'true'
  
    # If this is true, when a town becomes a ruin they also receive public status,
    # meaning anyone can use /t spawn NAME to teleport to that town.
    ruins_become_public: 'false'
  
    # If this is true, when a town becomes a ruin they also become open to join,
    # meaning any townless player could join the town and reclaim it.
    # You should expect this to be abused by players who will reclaim a town to prevent someone else reclaiming it.
    ruins_become_open: 'false'
  
    # If this is true, when a town becomes a ruin, and they are a member of a nation, any money in the town bank will be deposited to the nation bank.
    town_bank_is_sent_to_nation: 'false'
  
    # If this is true, when a town becomes a ruin, every hour more and more of their plots will have their permissions turned to allow
    # build, destroy, switch, itemuse to on. This will affect the newest claims first and progress until the first claims made are opened up
    # right before the max_duration_hours have passed. When a town has more claims than max_duration_hours, multiple plots will be opened up
    # each hour, ie: 500 claims and 72 max hours = 7 claims per hour.
    # If a Town has less claims than max_duration hours, those claims' permissions are opened up much more slowly with hours passing between
    # plots opening up, ie: 36 claims and 72 max hours = 1 claim every 2 hours.
    # This system is meant to give players across many time zones the chance to loot a town when it falls into ruin.
    do_plots_permissions_change_to_allow_all: 'false'
  
  
############################################################
# +------------------------------------------------------+ #
# |               ASCII MAP SYMBOLS & SIZES              | #
# |                                                      | #
# | Used in the ascii maps for symbols not determined by | #
# | townblocktype. See Town Block Types section for more | #
# | options. When using Unicode use the \u#### format,   | #
# | and use the HTML-code version of the unicode         | #
# | character.                                           | #
# |                                                      | #
# | When setting sizes you cannot set a height of less   | #
# | than seven or greater than 18. Your width must be    | #
# | between seven and 27, and should always be an odd    | #
# | number. These sizes will be used when displaying the | #
# | output of the /towny map command, and not used when  | #
# | the player uses the /towny map big command.          | #
# +------------------------------------------------------+ #
############################################################
  
ascii_map_symbols:
  
  # The character used for the home symbol.
  home: H
  
  # The character used for the outpost symbol.
  outpost: O
  
  # The character used for plots which are forsale.
  forsale: $
  
  # The character used for plots which are unclaimed.
  wilderness: '-'
  
  # The height of the map shown in /towny map and /res toggle map.
  # Minimum 7, maximum 18.
  map_height: '7'
  
  # The width of the map shown in /towny map and /res toggle map.
  # Minimum 7, maximum 27, only odd numbers are accepted.
  map_width: '27'
```