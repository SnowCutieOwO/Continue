# 主配置文件

此为默认的主配置文件。所有设置都可在注释中找到详细解读。

```YAML
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#                                                                                                           #
#                  _  _                       _              _                              _               #
#                 (_)| |                     | |            | |                            | |              #
#          __ _    _ | |      ___   __ _   __| |  ___  _ __ | |__    ___    __ _  _ __   __| | ___          #
#         / _` |  | || |     / _ \ / _` | / _` | / _ \| '__|| '_ \  / _ \  / _` || '__| / _` |/ __|         #
#        | (_| |  | || |____|  __/| (_| || (_| ||  __/| |   | |_) || (_) || (_| || |   | (_| |\__ \         #
#         \__,_|  | |\_____/ \___| \__,_| \__,_| \___||_|   |_.__/  \___/  \__,_||_|    \__,_||___/         #
#                _/ |                                                    by ajgeiss0702                     #
#               |__/                                                                                        #
#                                                                                                           #
#          Welcome to the config for ajLeaderboards!                                                        #
#                                                                                                           #
#          Make sure to read the comments above each option to know what that option does.                  #
#                                                                                                           #
#          If you have any questions, first make sure you've read the comment above the option, then        #
#           feel free to join my discord and ask there (invite link is on the plugin page)                  #
#                                                                                                           #
#          Happy configuring!                                                                               #
#                                                                                                           #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #



# How often should we refresh the stats of online players?
# this is in ticks, so 20 ticks = 1 second
#  Default: 1200 (60 seconds)
stat-refresh: 1200

# Should we check for the dontupdate permission?
# The dontupdate permission will cause players (who have it) to not be added/updated on the leaderboard
# ajleaderboards.dontupdate.<board>
#  Default: true
enable-dontupdate-permission: true

# Should we block the thread when loading placeholders?
# The default option of auto will only block when we are not on the main server thread.
# If true, it will always block the thread, which could cause some lag.
# If false, it will never block the thread it's on. (but will show "Loading" for a sec)
#  Options: true, false, auto
#  Default: auto
blocking-fetch: auto

# Should we register luckperms contexts?
# See how to use them here: https://wiki.ajg0702.us/ajleaderboards/setup/luckperms-contexts
# If you enable this, I HIGHLY recommend configuring "only-register-lpc-for" below
#   to only register the ones you're actually going to use
#  Default: false
register-lp-contexts: false

# What boards and types should we calculate luckperms contexts for?
# If this is blank (and register-lp-contexts is enabled) then we will calculate it for all boards
# If you add stuff to this, it should be in the format board:type
# Example: - "statistic_time_played:alltime"
# If you leave off the type at the end, it will do all timed types for that board:
# Example: - "statistic_time_played"
only-register-lpc-for: []

# Boards listed here will be sorted in reverse order
# e.g. instead of showing the highest on top, boards listed here will show the lowest on top
reverse-sort: []

# How often (in ticks) should we update leaderboard signs?
# Note that this updates from the cache. The cache update speed is controlled by stat-refresh
#  Default: 20 (1 per second)
sign-update: 20

# Should ajLeaderboards update the stat as soon as the player joins?
# If this is disabled, players will still be updated, just at the stat-refresh interval
#  Default: true
update-on-join: true

# Should ajLeaderboards update the stat as soon as the player leaves?
# This can be used to prevent players from losing all of their money, then leaving before ajlb updates
#  Default: true
update-on-leave: true

# These are "extra" placeholders that can be parsed to be displayed alongside the leaderboard
# For example, you can have a KDR leaderboard, then next to each player on the leaderboard,
#  you can show their actual kills and deaths
# More info: https://wiki.ajg0702.us/ajleaderboards/setup/extras/
extras:
  - "statistic_player_kills"

# When resetting a timed type (e.g. daily, weekly, etc) how many positions should we save?
# They are saved in the "past-resets" folder
# Set to 0 or a negative number to disbale saving
#  Default: 10
reset-save-positions: 10

# Which timed types should we save?
# Use "*" to save all
#  Default: all except hourly
reset-save-types:
  - DAILY
  - WEEKLY
  - MONTHLY
  - YEARLY

# What character should we use for the comma in long numbers?
# You can also set this to be blank if you don't want commas
comma: ","

# What character should we use for the decimal?
decimal: "."

# What day of the week should WEEKLY leaderboards reset on?
# Options are monday, tuesday, wednesday, thursday, friday, saturday, sunday
# The weekly reset happens at midnight (12:00 am / 00:00) (the start of the day) of the day you put here
# Caps don't matter
#  Default: sunday
reset-weekly-on: sunday

# What should values be called?
# In the default value, the statistic_player_kills board will have a name of "kills" to be displayed on signs after the value
# This is only used in signs. If you want more than this, you can change the sign format in the messages.yml file
value-names:
- "statistic_player_kills%kills"

# Should this server update player stats?
#  If disabled, stats will not be recorded to the database, and ajLeaderboards will basically only read from it.
#  This can be useful if you have a lobby where you want to display leaderboards, but want to make sure anything in the lobby
#   doesn't override the stats from other servers
update-stats: true

# Only automatically update these boards.
# If this is an empty list (the default), then all boards will be updated
# update-stats, if disabled, will override this.
# Reminder: all board names in ajLeaderboards are case-sensitive
#  Default: []
only-update: []

# If a player's score is 0 (and it wasn't 0 before) then ajLeaderboards will skip updating the player at first
# This is to fix plugins that return 0 while they're still loading stats
# If the player's score is still 0 the next time they're updated, then the 0 is shown.
#  Default: true
require-zero-validation: true

# In boards listed here, anyone with a score of `0` will not be added to the leaderboard.
dont-add-zero: []

# Should we get prefixes/suffixes from vault?
# If vault is not installed, this option does nothing (prefixes/suffixes aren't fetched anyway)
#  Default: true
fetch-prefix-suffix-from-vault: true

# Should we include seconds in the time format?
# This only effects things that display the value directly from ajLeaderboards
#  Default: true
time-format-display-seconds: true

# Allows setting custom bytebin location and webviewer link
# You should only need to change these if you don't want /ajlb viewer to send the data to my servers
#  (which is only kept for 90 days or less, and you can contact me to delete sooner if you'd like)
bytebin-link: "https://bytebin.ajg0702.us/post"
web-link: "https://ajlb-viewer.ajg0702.us/?id={code}"


# Debug option to print stuff that could be useful to the developer.
# You should probably keep this disabled unless you know what you are doing or are told to turn it on.
#  Default: false
debug: false

# Should we send additional debug about stat updates?
# Requires debug to be true
#  Default: false
update-de-bug: false

# Should we use particles as debug to show where heads and armor stands are being looked for?
#  Default: false
particles: false

# Should we print some more stuff about the internals of fetching?
# You really only need to use this if the dev asks for it.
fetching-de-bug: false

# Should we check our cached version of a player?
# This will only cause an update request to be sent if the player's score or info has changed.
# If disabled, the cache will only be populated if there is something else requesting specific player info
#  Default: true
check-cache-on-update: true

# Should we fetch from the database more often?
# ajLeaderboards will always fetch from the database more when the db responds quickly, and less when it is slower.
# Disabling this will make it so ajLeaderboards will fetch from the database less often when the database is fast
# The default is fine for most servers, but you may want to disable this if your database is getting too many requests
#  Default: true
more-fetching: true

# Should we check for updates?
# The updater will also let you update just by doing /ajLeaderboards update
# Changing this requires a restart
enable-updater: true

# Should we skip some steps when shutting down the plugin to make it faster?
# If you enable this, it can cause warnings after the server shuts down,
#  but can also speed up the speed that the server shuts down a lot
# Enabling this *shouldn't* break anything, but unless you have a very good reason to enable this,
#  you should probably keep it disabled
#  Default: false
fast-shutdown: false

# What is the minimum time (in milliseconds) we should keep specific player info (e.g. fetching position)
# The cached data may be used for longer if the database is slow at responding to requests.
#  Default: 5000
min-player-cache-time: 5000

# What maximum number of threads should ajLeaderboards be allowed to use for fetching from the db?
# Most of the time, the number of threads used will be far less than this.
# This is ignored on mysql (and maxConnections is used for this instead)
# Lower this if you get the message "unable to create native thread: possibly out of memory or process/resource limits reached"
# I would __not__ recommend setting this below 16.
# Requires a server restart to change
#  Default: 70
max-fetching-threads: 70

# For how long (in milliseconds) should we keep a non-core thread alive before killing it?
# This allows us to reuse threads instead of creating new ones every time we need to fetch something.
# Creating new threads is expensive but keeping them alive for too long can consume resources.
# I would __not__ recommend setting this below 500.
# Extensive testing has been done, and a value of 500 has been found suitable for ajLeaderboards.
# Requires a server restart to change
#  Default: 500
fetching-thread-pool-keep-alive: 500


# # # # # # # # # # # # # # # # # # # # # # #
#                                           #
#  End of config. Happy leaderboard-ingmore-fetching :)  #
#                                           #
# # # # # # # # # # # # # # # # # # # # # # #




# Don't touch this
config-version: 34

# ----- THESE OPTIONS HAVE MOVED -----
# to messages.yml. They will be removed from here in the future.
# They are only still here to ensure they can be copied from here to the messages file.
# If you change these here, they WILL NOT work. Only change them in messages.yml
no-data-name: "---"
no-data-score: "---"
# ^ Change those in messages.yml now
```