# 默认 chatconfig.yml

``` YAML
  
version:
  # This is the current version of Towny.  Please do not edit.
  version: '0.119'
  # This is for showing the changelog on updates.  Please do not edit.
  last_run_version: '0.119'
  
############################################################
# +------------------------------------------------------+ #
# |                    ChatConfig.yml                    | #
# +------------------------------------------------------+ #
############################################################
#
# The formats below will specify the changes made to the player chat when talking.
#
# {worldname} - Displays the world the player is currently in.
# {town} - Displays town name if a member of a town.
# {townformatted} - Displays town name (if a member of a town) using tag_format.town.
# {towntag} - Displays the formated town tag (if a member of a town) using modify_chat.tag_format.town.
# {towntagoverride} - Displays the formated town tag (if a member of a town and present) or falls back to the full name (using modify_chat.tag_format.town).
#
# {nation} - Displays nation name if a member of a nation.
# {nationformatted} - Displays nation name (if a member of a nation) using tag_format.town.
# {nationtag} - Displays the formated nation tag (if a member of a nation) using modify_chat.tag_format.nation.
# {nationtagoverride} - Displays the formated nation tag (if a member of a nation and present) or falls back to the full name (using modify_chat.tag_format.nation).
#
# {townytag} - Displays the formated town/nation tag as specified in modify_chat.tag_format.both.
# {townyformatted} - Displays the formated full town/nation names as specified in modify_chat.tag_format.both.
# {townytagoverride} - Displays the formated town/nation tag (if present) or falls back to the full names (using modify_chat.tag_format.both).
#
# {title} - Towny resident Title.
# {surname} - Towny resident Surname.
# {townynameprefix} - Towny name prefix taken from the townLevel/nationLevels.
# {townynamepostfix} - Towny name postfix taken from the townLevel/nationLevels.
# {townyprefix} - Towny resident title, or townynameprefix if no title exists.
# {townypostfix} - Towny resident surname, or townynamepostfix if no surname exists
#
# {townycolor} - Towny name colour for king/mayor/resident.
# {group} - Players group name pulled from your permissions plugin.
# {permuserprefix} - Permission user prefix.
# {permusersuffix} - Permission user suffix.
# {permgroupprefix} - Permission group prefix.
# {permgroupsuffix} - Permission group suffix.
# {permprefix} - Permission group and user prefix.
# {permsuffix} - Permission group and user suffix.
#
# {primaryresidentrank} - When a resident has a primary rank with a prefix this will display their prefix with a space added to the end.
#
# {playername} - Default player name.
# {modplayername} - Modified player name (use if Towny is over writing some other plugins changes).
# {msg} - The message sent.
#
# {channelTag} - Defined in the channels entry in Channels.yml.
# {msgcolour} - Defined in the channels entry in Channels.yml.
#
# Text colouring
# --------------
# Black = &0, Navy = &1, Green = &2, Blue = &3, Red = &4
# Purple = &5, Gold = &6, LightGray = &7, Gray = &8
# DarkPurple = &9, LightGreen = &a, LightBlue = &b
# Rose = &c, LightPurple = &d, Yellow = &e, White = &f
#
# Text altering
# -------------
# Bold = &l, Italics = &o, Underlined = &n,
# Magic = &k, Strike = &m, Reset = &r
#
# Hex Chat Coloring
# -----------------
# Valid format: 
# <#RRGGBB>
chatconfigcomments: ''
  
channel_formats:
  # This is the format which will be used for GLOBAL chat/channels.
  # This is also the format used when you have modify_chat.enable: true, but use other plugins to handle chat.
  global: '{channelTag} {worldname}{townytagoverride}{townycolor}{permprefix}{group} {townyprefix}{modplayername}{townypostfix}{permsuffix}&f:{msgcolour} {msg}'
  # TOWN channel types.
  town: '{channelTag} {townycolor}{permprefix}{townyprefix}{playername}{townypostfix}{permsuffix}&f:{msgcolour} {msg}'
  # NATION channel types.
  nation: '{channelTag} {towntagoverride}{townycolor}{permprefix}{townyprefix}{playername}{townypostfix}{permsuffix}&f:{msgcolour} {msg}'
  # ALLIANCE channel types.
  alliance: '{channelTag} {towntagoverride}{townycolor}{permprefix}{townyprefix}{playername}{townypostfix}{permsuffix}&f:{msgcolour} {msg}'
  # DEFAULT channel types.
  default: '{channelTag} {permprefix}{playername}{permsuffix}&f:{msgcolour} {msg}'
  
tag_formats:
  world: '&f[&f%s&f] '
  town: '&f[&3%s&f] '
  nation: '&f[&e%s&f] '
  # First %s is the nation tag, second is the town tag.
  # You may also use %t for the town tag and %n for the nation tag!
  both: '&f[&6%s&f|&3%s&f] '
  
colour:
  king: '&6'
  mayor: '&b'
  resident: '&f'
  nomad: '&f'
  
modify_chat:
  
  # The priority used for the AsyncPlayerChatEvent listener in TownyChat. This option will decide when TownyChat listens to the Chat event thrown by Bukkit-based servers.
  # Valid settings are: lowest, low, normal, high, highest
  # Lowest is the earliest listener, allowing TownyChat to act upon chat before Low, Normal, High, and Highest priority plugins.
  # Highest will cause TownyChat to change chat after other plugins operating on lower priorities.
  # If you don't know what any of this means leave it at normal.
  listener_priority: normal
  # When true Towny will format all ChannelTypes,
  # When false Towny will only format TOWN, NATION, ALLIANCE, DEFAULT types.
  # When false Towny will not format GLOBAL types, leaving other chat plugins to do the work.
  enable: 'true'
  # If true the chat formats will be read from below to allow per world formatting.
  # These can then be altered individually.
  per_world: 'false'
  # If true any player who speaks in a channel in which he cannot be heard,
  # either by being along in the channel or out-of-range of another player in his chat channel,
  # that player will see a message saying they cannot be heard.
  alone_message: 'false'
  # This allows you to set your alone message.
  alone_message_string: No one in range can hear you or you are alone in this channel.
  
# If true players will see You have joined channel {channel} message on joining the server.
display_channel_join_message_on_joining_the_server: 'true'
  
# If true players that say !somewords will have their message sent to a global type channel with unlimited range (usually your general chat.)
allow_exclamation_point_to_shout: 'true'
```