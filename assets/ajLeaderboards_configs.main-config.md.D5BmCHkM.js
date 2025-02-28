import{_ as a,c as i,o as n,b0 as e}from"./chunks/framework.w6NQj85O.js";const c=JSON.parse('{"title":"主配置文件","description":"","frontmatter":{},"headers":[],"relativePath":"ajLeaderboards/configs.main-config.md","filePath":"ajLeaderboards/configs.main-config.md"}'),l={name:"ajLeaderboards/configs.main-config.md"};function t(p,s,h,k,r,d){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="主配置文件" tabindex="-1">主配置文件 <a class="header-anchor" href="#主配置文件" aria-label="Permalink to &quot;主配置文件&quot;">​</a></h1><p>此为默认的主配置文件。所有设置都可在注释中找到详细解读。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                                                                                           #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                  _  _                       _              _                              _               #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                 (_)| |                     | |            | |                            | |              #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#          __ _    _ | |      ___   __ _   __| |  ___  _ __ | |__    ___    __ _  _ __   __| | ___          #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#         / _\` |  | || |     / _ \\ / _\` | / _\` | / _ \\| &#39;__|| &#39;_ \\  / _ \\  / _\` || &#39;__| / _\` |/ __|         #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#        | (_| |  | || |____|  __/| (_| || (_| ||  __/| |   | |_) || (_) || (_| || |   | (_| |\\__ \\         #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#         \\__,_|  | |\\_____/ \\___| \\__,_| \\__,_| \\___||_|   |_.__/  \\___/  \\__,_||_|    \\__,_||___/         #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                _/ |                                                    by ajgeiss0702                     #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#               |__/                                                                                        #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                                                                                           #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#          Welcome to the config for ajLeaderboards!                                                        #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                                                                                           #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#          Make sure to read the comments above each option to know what that option does.                  #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                                                                                           #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#          If you have any questions, first make sure you&#39;ve read the comment above the option, then        #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#           feel free to join my discord and ask there (invite link is on the plugin page)                  #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                                                                                           #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#          Happy configuring!                                                                               #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                                                                                           #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># How often should we refresh the stats of online players?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># this is in ticks, so 20 ticks = 1 second</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: 1200 (60 seconds)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">stat-refresh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1200</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should we check for the dontupdate permission?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The dontupdate permission will cause players (who have it) to not be added/updated on the leaderboard</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ajleaderboards.dontupdate.&lt;board&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enable-dontupdate-permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should we block the thread when loading placeholders?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The default option of auto will only block when we are not on the main server thread.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If true, it will always block the thread, which could cause some lag.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If false, it will never block the thread it&#39;s on. (but will show &quot;Loading&quot; for a sec)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Options: true, false, auto</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: auto</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">blocking-fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">auto</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should we register luckperms contexts?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># See how to use them here: https://wiki.ajg0702.us/ajleaderboards/setup/luckperms-contexts</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you enable this, I HIGHLY recommend configuring &quot;only-register-lpc-for&quot; below</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   to only register the ones you&#39;re actually going to use</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">register-lp-contexts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># What boards and types should we calculate luckperms contexts for?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If this is blank (and register-lp-contexts is enabled) then we will calculate it for all boards</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you add stuff to this, it should be in the format board:type</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Example: - &quot;statistic_time_played:alltime&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you leave off the type at the end, it will do all timed types for that board:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Example: - &quot;statistic_time_played&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">only-register-lpc-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Boards listed here will be sorted in reverse order</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># e.g. instead of showing the highest on top, boards listed here will show the lowest on top</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reverse-sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># How often (in ticks) should we update leaderboard signs?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Note that this updates from the cache. The cache update speed is controlled by stat-refresh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: 20 (1 per second)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sign-update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should ajLeaderboards update the stat as soon as the player joins?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If this is disabled, players will still be updated, just at the stat-refresh interval</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">update-on-join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should ajLeaderboards update the stat as soon as the player leaves?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This can be used to prevent players from losing all of their money, then leaving before ajlb updates</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">update-on-leave</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># These are &quot;extra&quot; placeholders that can be parsed to be displayed alongside the leaderboard</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For example, you can have a KDR leaderboard, then next to each player on the leaderboard,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  you can show their actual kills and deaths</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># More info: https://wiki.ajg0702.us/ajleaderboards/setup/extras/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">extras</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;statistic_player_kills&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># When resetting a timed type (e.g. daily, weekly, etc) how many positions should we save?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># They are saved in the &quot;past-resets&quot; folder</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Set to 0 or a negative number to disbale saving</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: 10</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reset-save-positions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Which timed types should we save?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Use &quot;*&quot; to save all</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: all except hourly</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reset-save-types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DAILY</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WEEKLY</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MONTHLY</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">YEARLY</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># What character should we use for the comma in long numbers?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># You can also set this to be blank if you don&#39;t want commas</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;,&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># What character should we use for the decimal?</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">decimal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># What day of the week should WEEKLY leaderboards reset on?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Options are monday, tuesday, wednesday, thursday, friday, saturday, sunday</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The weekly reset happens at midnight (12:00 am / 00:00) (the start of the day) of the day you put here</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Caps don&#39;t matter</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: sunday</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reset-weekly-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sunday</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># What should values be called?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In the default value, the statistic_player_kills board will have a name of &quot;kills&quot; to be displayed on signs after the value</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This is only used in signs. If you want more than this, you can change the sign format in the messages.yml file</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">value-names</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;statistic_player_kills%kills&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should this server update player stats?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  If disabled, stats will not be recorded to the database, and ajLeaderboards will basically only read from it.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  This can be useful if you have a lobby where you want to display leaderboards, but want to make sure anything in the lobby</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   doesn&#39;t override the stats from other servers</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">update-stats</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Only automatically update these boards.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If this is an empty list (the default), then all boards will be updated</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># update-stats, if disabled, will override this.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Reminder: all board names in ajLeaderboards are case-sensitive</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">only-update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If a player&#39;s score is 0 (and it wasn&#39;t 0 before) then ajLeaderboards will skip updating the player at first</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This is to fix plugins that return 0 while they&#39;re still loading stats</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If the player&#39;s score is still 0 the next time they&#39;re updated, then the 0 is shown.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">require-zero-validation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In boards listed here, anyone with a score of \`0\` will not be added to the leaderboard.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dont-add-zero</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should we get prefixes/suffixes from vault?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If vault is not installed, this option does nothing (prefixes/suffixes aren&#39;t fetched anyway)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fetch-prefix-suffix-from-vault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should we include seconds in the time format?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This only effects things that display the value directly from ajLeaderboards</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">time-format-display-seconds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Allows setting custom bytebin location and webviewer link</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># You should only need to change these if you don&#39;t want /ajlb viewer to send the data to my servers</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  (which is only kept for 90 days or less, and you can contact me to delete sooner if you&#39;d like)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bytebin-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://bytebin.ajg0702.us/post&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">web-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://ajlb-viewer.ajg0702.us/?id={code}&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Debug option to print stuff that could be useful to the developer.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># You should probably keep this disabled unless you know what you are doing or are told to turn it on.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should we send additional debug about stat updates?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Requires debug to be true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">update-de-bug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should we use particles as debug to show where heads and armor stands are being looked for?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">particles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should we print some more stuff about the internals of fetching?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># You really only need to use this if the dev asks for it.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fetching-de-bug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should we check our cached version of a player?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This will only cause an update request to be sent if the player&#39;s score or info has changed.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If disabled, the cache will only be populated if there is something else requesting specific player info</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">check-cache-on-update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should we fetch from the database more often?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ajLeaderboards will always fetch from the database more when the db responds quickly, and less when it is slower.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Disabling this will make it so ajLeaderboards will fetch from the database less often when the database is fast</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The default is fine for most servers, but you may want to disable this if your database is getting too many requests</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">more-fetching</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should we check for updates?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The updater will also let you update just by doing /ajLeaderboards update</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Changing this requires a restart</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enable-updater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Should we skip some steps when shutting down the plugin to make it faster?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you enable this, it can cause warnings after the server shuts down,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  but can also speed up the speed that the server shuts down a lot</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Enabling this *shouldn&#39;t* break anything, but unless you have a very good reason to enable this,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  you should probably keep it disabled</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fast-shutdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># What is the minimum time (in milliseconds) we should keep specific player info (e.g. fetching position)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The cached data may be used for longer if the database is slow at responding to requests.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: 5000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">min-player-cache-time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># What maximum number of threads should ajLeaderboards be allowed to use for fetching from the db?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Most of the time, the number of threads used will be far less than this.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This is ignored on mysql (and maxConnections is used for this instead)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Lower this if you get the message &quot;unable to create native thread: possibly out of memory or process/resource limits reached&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># I would __not__ recommend setting this below 16.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Requires a server restart to change</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: 70</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">max-fetching-threads</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">70</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For how long (in milliseconds) should we keep a non-core thread alive before killing it?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This allows us to reuse threads instead of creating new ones every time we need to fetch something.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Creating new threads is expensive but keeping them alive for too long can consume resources.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># I would __not__ recommend setting this below 500.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Extensive testing has been done, and a value of 500 has been found suitable for ajLeaderboards.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Requires a server restart to change</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: 500</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fetching-thread-pool-keep-alive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># # # # # # # # # # # # # # # # # # # # # # #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                           #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  End of config. Happy leaderboard-ingmore-fetching :)  #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                                           #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># # # # # # # # # # # # # # # # # # # # # # #</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Don&#39;t touch this</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">config-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ----- THESE OPTIONS HAVE MOVED -----</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># to messages.yml. They will be removed from here in the future.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># They are only still here to ensure they can be copied from here to the messages file.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you change these here, they WILL NOT work. Only change them in messages.yml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">no-data-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;---&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">no-data-score</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;---&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ^ Change those in messages.yml now</span></span></code></pre></div>`,3)]))}const y=a(l,[["render",t]]);export{c as __pageData,y as default};
