import{_ as h,C as i,c as e,o as p,a9 as t,G as a}from"./chunks/framework.DuenUNqn.js";const A=JSON.parse('{"title":"默认 channel.yml","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/wiki"},{"title":"TownyAdvanced","link":"/wiki/TownyAdvanced"},{"title":"reference","link":"/wiki/TownyAdvanced/reference"},{"title":"configs","link":"/wiki/TownyAdvanced/reference/configs"},{"title":"默认 channel.yml","link":"/wiki/TownyAdvanced/reference/configs/channels-yml"}]},"headers":[],"relativePath":"wiki/TownyAdvanced/reference/configs/channels-yml.md","filePath":"wiki/TownyAdvanced/reference/configs/channels-yml.md"}'),k={name:"wiki/TownyAdvanced/reference/configs/channels-yml.md"};function r(d,s,g,c,y,E){const n=i("NolebaseGitContributors"),l=i("NolebaseGitChangelog");return p(),e("div",null,[s[0]||(s[0]=t(`<h1 id="默认-channel-yml" tabindex="-1">默认 channel.yml <a class="header-anchor" href="#默认-channel-yml" aria-label="Permalink to &quot;默认 channel.yml&quot;">​</a></h1><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This file contains all configuration data for the TownyChat channels.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Each channel is a map of keys and values. You can add and remove channels, as you see fit.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Channels do not require all of the keys to be set. The keys which are required are:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    - type</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    - commands</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The other keys are not required.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The keys are as follows: commands, type, channeltag, messagecolour, permission, leavepermission, speakpermission, listenpermission, sound, range,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># spam_time, focusable, default.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The TYPE key will determine what formatting is used in a channel. Types&#39; formats are configured in the chatconfig.yml file in the channel_formats section.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *** Further Explanation of the available keys is below: ***</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># COMMANDS</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In order to swap channels, you must use the desired channel&#39;s command to enter the new chat and leave the old one.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    eg: /tc (would put you in town chat) and typing it again would not change your channel. To get back to general chat, you can do /g.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Commands can also be used to speak into a channel, without leaving the channel you are speaking in.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    eg: &#39;/tc somewords&#39; will send &#39;somewords&#39; to the townchat channel.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># TYPE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ----</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The channel type is either GLOBAL, TOWN, NATION, ALLIANCE, or DEFAULT. These specify what chat formating is used from the chatconfig.yml&#39;s channel_formats</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># section.)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># CHANNELTAG</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ----------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># channeltag is what defines how the chatconfig.yml&#39;s {channelTag} chat tag will appear in the channel.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># PERMISSION</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ----------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># permission is an optional key in a channel, when it is set the given value will be the permission node required to listen/speak in the channel. It is used</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># when either spearkpermission or listenpermission is not set.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># SPEAKPERMISSION</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ---------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># speakpermission is an optional key in a channel, when it is set the given value will be the permission node required to speak in the channel, overriding</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the channel&#39;s permission key when players are speaking.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># LISTENPERMISSION</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ----------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># listenpermission is an optional key in a channel, when it is set the given value will be the permission node required to listen to the channel, overriding</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the channel&#39;s permission key when a player&#39;s ability to hear a channel is tested.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># LEAVEPERMISSION</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ---------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># leavepermission is an optional key in a channel, when it is set the given value will be the permission node required to listen to the channel, when not</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># set this is automatically set to &#39;towny.chat.leave.{channelname}&#39;.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># MESSAGECOLOUR</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># messagecolour is what defines how the chatconfig.yml&#39;s {msgcolour} chat tag will appear in the channel.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Tip: if you want to have message colour determined per-rank on your server this is possible:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># in your chatconfig.yml&#39;s channel_formats section add {permsuffix} or {permgroupsuffix} after the {msgcolour} tag. Then in your permission plugin give the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ranks you want to have coloured chat a suffix consisting of a colour code. Ranks without a suffix set will have the normal channel message colour used.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># RANGE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -----</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># range is what defines whether a channel has distance-based or world-based listening logic. Someone outside of the configured range will not see messages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># in chat and cannot be &#39;heard&#39; by others outside of the range. Range is in blocks (when set above 0).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Options for range:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   -1 = no limits, everyone will hear messages if they have permission.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#	  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0 = same world only</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#	  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">any positive value = limited range in the same world.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># SPAM_TIME</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ---------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># spam_time sets how long between chatting a player must wait, to prevent players from flooding chat with spam.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># FOCUSABLE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ---------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># focusable is a setting which allows players to set their focused channel, ie: using the /tc command with no message. Channels are focusable by default, so</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># there is no point to adding focusable: true. You make a channel un-focusable by adding the key/value &#39;focusable: false&#39;.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># IGNOREABLE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ---------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ignoreable is a setting which determines if a player can ignore the channel by using /res toggle ignoreotherchannels. By default a channel will have</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ignoreable set to true. You can add ignoreable: false to a channel in order to make it something that players cannot ignore, and will see the channel chat</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># from this channel even when that player has other channels ignored. This is useful for staff chat channels which should always be monitored.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># DEFAULT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># default is a setting which decides which channel is the default when a player logs in to the server.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># HOOKED</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># hooked is a setting which decides if a channel can be view by other plugins which are using the TownyChat AsyncChatHookEvent. You may find that a plugin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># you are using will ask for &#39;hooked: true&#39; to be added to a channel, in order for that plugin to further modify chat being spoken in town/nation channels.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># SOUND</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -----</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Each channel can have a sound by adding the key/value &#39;sound: SOUND_TO_USE&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Sounds can be found here: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Text Colouring Hints</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Black = &amp;0, Navy = &amp;1, Green = &amp;2, Blue = &amp;3, Red = &amp;4, Purple = &amp;5, Gold = &amp;6, LightGray = &amp;7, Gray = &amp;8, DarkPurple = &amp;9, LightGreen = &amp;a,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># LightBlue = &amp;b, Rose = &amp;c, LightPurple = &amp;d, Yellow = &amp;e, White = &amp;f</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">channelscomments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Channels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  general</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">g</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GLOBAL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    channeltag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f[g]&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    messagecolour</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">towny.chat.general</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-1&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    spam_time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0.5&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  town</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tc</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TOWN</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    channeltag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f[&amp;3TC&amp;f]&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    messagecolour</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;b&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">towny.chat.town</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-1&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    spam_time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0.5&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  nation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nc</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NATION</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    channeltag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f[&amp;6NC&amp;f]&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    messagecolour</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;e&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">towny.chat.nation</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-1&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    spam_time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0.5&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  alliance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ac</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ALLIANCE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    channeltag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f[&amp;2AC&amp;f]&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    messagecolour</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;a&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">towny.chat.alliance</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-1&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    spam_time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0.5&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  admin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">a,admin</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DEFAULT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    channeltag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f[&amp;4ADMIN&amp;f]&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    messagecolour</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;c&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">towny.chat.admin</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-1&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ignoreable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;false&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  mod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">m,mod</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DEFAULT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    channeltag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f[&amp;9MOD&amp;f]&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    messagecolour</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;5&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">towny.chat.mod</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-1&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ignoreable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;false&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">l,lc</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GLOBAL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    channeltag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f[local]&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    messagecolour</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">towny.chat.local</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100&#39;</span></span></code></pre></div>`,2)),a(n),a(l)])}const D=h(k,[["render",r]]);export{A as __pageData,D as default};
