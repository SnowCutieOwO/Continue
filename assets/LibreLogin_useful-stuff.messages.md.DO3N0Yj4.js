import{_ as i,c as a,o as n,b0 as l}from"./chunks/framework.w6NQj85O.js";const d=JSON.parse('{"title":"消息文本","description":"","frontmatter":{},"headers":[],"relativePath":"LibreLogin/useful-stuff.messages.md","filePath":"LibreLogin/useful-stuff.messages.md"}'),p={name:"LibreLogin/useful-stuff.messages.md"};function t(k,s,h,e,r,E){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="消息文本" tabindex="-1">消息文本 <a class="header-anchor" href="#消息文本" aria-label="Permalink to &quot;消息文本&quot;">​</a></h1><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  !!文件为 HOCON 格式!!</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  HOCON 格式与 JSON 相似，但有一些额外特征。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  你可以在 Sponge 维基中找到更多信息：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  https://docs.spongepowered.org/stable/en/server/getting-started/configuration/hocon.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  ----------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  LibreLogin 消息文本</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  ----------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  该部分包含了插件使用的消息文本，你可以按需修改其中的内容。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  消息支持使用原版代码格式和 MiniMessage 代码格式。例如，这条消息被视作有效并能正常解析：&lt;bold&gt;&amp;a重载成功!&lt;/bold&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  你可以在 Github 页面找到 LibreLogin 的更多信息：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  https://github.com/kyngs/LibreLogin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家正在登录时这段消息会显示在 ActionBar 上，请确保你启用了配置文本中的请确保你在配置文本中启用了 use-action-bar 选项。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">action-bar-login=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;e/login &amp;b&lt;密码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家正在注册时这段消息会显示在 ActionBar 上，请确保你在配置文本中启用了 use-action-bar 选项。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">action-bar-register=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;e/register &amp;b&lt;密码&gt; &lt;密码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 该部分包含了命令的自动补全。因其繁杂，一般人会保持默认设置。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># !!请勿翻译内建变量 @players!! 这个变量用于提及在线的所有玩家。</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">autocomplete {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /2fa-confirm 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;2fa-confirm&quot;=验</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">证码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /changepassword 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    change-password=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;旧密码 新密码&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /confirmpasswordreset 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    confirm-password-reset=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;验证码 旧密码 新密码&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin email test 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    email-test=邮</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">箱地址</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /login 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    login=密</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /premium 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    premium=密</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /register 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    register=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;密码 确认密码&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /resetpassword 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    reset-password=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /setemail 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set-email=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;邮箱地址 密码&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user 2fa-off 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-2fa-off=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user alts 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-alts=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user cracked 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-cracked=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user delete 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-delete=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user emailoff 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-email-off=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user info 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-info=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user login 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-login=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user migrate 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-migrate=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players newName&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user pass-change 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-pass-change=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players newPassword&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user premium 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-premium=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user register 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-register=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players password&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user setemail 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-set-email=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players email&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /librelogin user unregister 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-unregister=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@players&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这条消息会在玩家尝试输入命令 /verifyemail 时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    verify-email=c</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">ode</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这封邮件会在玩家尝试重置密码时发送，你可以在这条消息中插入任何 HTML 代码。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">email-password-reset-content=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你好 %name%!&lt;br&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">你 (来自 IP %ip% 的请求) 发送了来自 %server% 服务器的重置密码请求.&lt;br&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">若你没有进行过相关操作，请无视该邮件。&lt;br&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">若要确认此操作，请在&lt;b&gt;游戏内输入命令：&lt;/b&gt;&lt;br&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;b&gt;&lt;验证码&gt;&lt;h1&gt;/confirmpasswordreset %code%&lt;/h1&gt;&lt;/code&gt;&lt;/b&gt;&lt;br&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这封邮件会在玩家尝试重置密码时发送。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">email-password-reset-subject=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;来自 %server% 服务器的重置密码请求&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这封邮件会在玩家尝试添加恢复邮箱时发送。你可以在这条消息中插入任何 HTML 代码。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">email-verification-content=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你好 %name%!&lt;br&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">你发送了来自 %server% 服务器的添加恢复邮箱请求.&lt;br&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">若你没有进行过相关操作，请无视该邮件。&lt;br&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">若要确认此操作，请在&lt;b&gt;游戏内输入命令：&lt;/b&gt;&lt;br&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;b&gt;&lt;验证码&gt;&lt;h1&gt;/verifyemail %code%&lt;/h1&gt;&lt;/code&gt;&lt;/b&gt;&lt;br&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这封邮件会在玩家尝试添加恢复邮箱时发送。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">email-verification-subject=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;在 %server% 服务器上验证你的邮箱&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试再次登录时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-already-authorized=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请勿重复登录!&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试再次注册显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-already-registered=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请勿重复注册!&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在配置文件出现问题时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-corrupted-configuration=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;配置文件出现问题，将保留备份后生成新文件。原因: %cause%&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在消息文本 messages.conf 文件出现问题时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-corrupted-messages=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;消息文本出现问题，将保留备份后生成新文件。原因: %cause%&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试使用过短或违非法密码注册时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-forbidden-password=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;密码过短或存在非法字符！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家执行来自 Floodgate 的命令时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-from-floodgate=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你不能在 Floodgate 中使用这个命令!&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家使用了无效命令时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-invalid-syntax=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Usage: &lt;c2&gt;{command}&lt;/c2&gt; &lt;c3&gt;{syntax}&lt;/c3&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试发送邮件但未能成功显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-mail-not-sent=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;发送邮件失败，是否正确填写邮箱地址？如果你确信邮箱填写正确，请联系服务器管理员。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试发送邮箱请求过快时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-mail-throttle=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;发送邮箱次数过多！请稍后再试。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试输入 /premium 前执行命令 /premiumconfirm 时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-no-confirm=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请先使用命令 /premium &lt;密码&gt;！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试重置密码但没有找到恢复邮箱时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-no-email=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你尚未设置恢复密码邮箱！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试输入 /mail 前执行命令 /mailconfirm 时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-no-mail-confirm=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请先使用命令 /setemail &lt;邮箱&gt; &lt;密码&gt; ！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试重置空密码时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-no-password=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;尚未设置密码。你可以尝试使用命令 /cracked 禁用自动登录后注册。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试执行命令 /resetpasswordconfirm, before running /resetpassword.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-no-password-reset=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请先使用命令 /resetpassword ！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家无权限执行命令时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-no-permission=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你没有权限使用该命令！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试使用登录后才可执行的命令时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-not-authorized=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请先登录！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试使用 MultiProxy 不支持的功能时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-not-available-on-multi-proxy=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;该功能在 MultiProxy 上不可用！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试重复启用自动登录时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-not-cracked=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你已经启用了自动登录，若要解除请输入 /cracked！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试启用自动登录但账号不存在于 Mojang 数据库中显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-not-paid=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;该账号不存在于 Mojang 数据库！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试重复禁用自动登录时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-not-premium=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你已经禁用了自动登录，若要启用请输入 /premium &lt;密码&gt;！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家未注册的情况下尝试登录显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-not-registered=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请先注册！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试转移数据至已有账号时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-occupied-user=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;该用户名已存在！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试使用损坏的密码登入时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-password-corrupted=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;登录密码出现错误，请联系管理员！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试使用前后不一的密码注册时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-password-not-match=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;前后密码不一致！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试修改密码且功能被禁用的情况下显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-password-resetting-disabled=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;本服尚未启用密码重置功能！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家使用过长密码注册时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-password-too-long=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;密码过长！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试使用错误密码登录时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-password-wrong=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;密码错误！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在尝试引用已登录玩家时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-player-authorized=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;该玩家已经登录！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在尝试引用未注册玩家时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-player-not-registered=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;该玩家尚未注册！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在尝试引用离线玩家时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-player-offline=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;该玩家不在线！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在尝试引用在线玩家时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-player-online=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;该玩家在线！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在验证指定玩家名称因 Mojang 速率限制而导致范文被拒绝时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-premium-throttled=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Mojang API 已达到速率限制，请稍后重试！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在连接至 Mojang 时出现未知错误而无法进一步验证玩家名称时显示的消息。错误将会输出在控制台上。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-premium-unknown=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;连接至 Mojang API 时出错，请检查控制台获取更多信息。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家执行命令速度过快时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-throttle=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;执行命令过快！请稍等一会。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在出现未知错误时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-unknown=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;出现未知错误，请检查控制台。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试使用未知命令时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-unknown-command=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;未知命令！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试提及未知用户时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-unknown-user=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;该玩家不存在！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试验证邮箱但验证码错误时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-wrong-mail-verify=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;验证码错误！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试重置密码但验证码错误时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error-wrong-password-reset=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;验证码错误！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家输入命令 /librelogin about 时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># !! 以任何方式使得这段消息不可见的方法都是可耻且视作违反证书规定 !!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-about=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;该服务器正在运行 FOSS 验证插件，LibreLogin。</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">当前版本：%version%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">插件作者：kyngs 与其他贡献成员</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">插件源码：https://github.com/kyngs/LibreLogin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">使用证书：Mozilla Public License 2.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家拥有多个账号时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-alts=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当前 IP 地址下有 %count% 个玩家：&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家拥有多个账号时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-alts-entry=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;- %name% (最后上线: %last_seen%)&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在删除某些内容时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-deleted=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;删除成功！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 正在删除某些内容时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-deleting=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;正在删除...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 正在禁用某些内容时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-disabling=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;正在禁用...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试执行命令 /librelogin dump 时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-dumped=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;缓存已保存为 %file%!&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试执行命令 /librelogin dump 时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-dumping=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;正在创建缓存...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在编辑某些内容时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-edited=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;编辑完毕！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 正在编辑某些内容时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-editing=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;编辑中...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 正在启用某些内容时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-enabling=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;启用中...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家被服务器踢出时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-kick=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你已被服务器踢出，理由：%reason%&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家登入时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-logged-in=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;登录成功！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试登录时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-logging-in=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;正在登录...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家执行发送邮件的命令时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-mail-sending=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;正在发送邮件...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家验证邮箱时发送的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-mail-verified=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;邮箱验证完成！现在可以在忘记密码时通过邮箱重置。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家没有同 IP 下账号时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-no-alts=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;同一 IP 下没有更多账号。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家重置密码时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-password-reset=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;密码已重置！之后便可使用新密码登录。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家通过 /premium 启用免密登录后显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-premium-logged-in=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你已自动登录！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家注册完成后显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-registered=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;注册成功！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试注册时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-registering=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;正在注册...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 完成重载显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-reloaded=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;重载成功！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在重载时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-reloading=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;重载中...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家执行发送重置密码邮件时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-reset-password-mail-sent=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;密码重置邮件已发送！若收件箱中没有找到，请检查垃圾邮件箱。重置请求有效期为 10 分钟。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试重置密码时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-resetting-password=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;正在重置密码...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家执行发送邮件的命令时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-sending-email=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;正在发送邮件...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家执行发送邮件的命令时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-sent-email=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;邮件已发送！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家处于会话期间而跳过登录时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-session-logged-in=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你已自动登录！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家的信息被查询时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-user=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UUID：%uuid%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">正版 UUID：%premium_uuid%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">最后上线：%last_seen%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">注册日期：%joined%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">二步验证：%2fa%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">邮箱：%email%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IP：%ip%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">最后登录：%last_authenticated%&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家执行发送验证邮箱的命令时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info-verification-mail-sent=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;验证邮件已发送！若收件箱中没有找到，请检查垃圾邮件箱。重置请求有效期为 10 分钟。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家启用二步验证时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-2fa-enabled=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;二步验证已启用！请重新进入服务器。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家已经连接但试图从其他位置进入服务器时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-already-connected=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你已经进入服务器了！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家使用错误密码登入服务器时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-error-password-wrong=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;密码错误！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家使用非法名称进入服务器时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 见 https://github.com/kyngs/LibreLogin/wiki/Name-Validation 了解详细。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-illegal-username=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;名称中包含非法字符或长于 16 字符！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家名称大小写不正确时进入服务器时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 见 https://github.com/kyngs/LibreLogin/wiki/Name-Validation 了解详细。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-invalid-case-username=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请使用 &amp;c%username% &amp;f登录服务器&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家可注册账号数量已达到单 IP 上限时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 见配置文件中 &quot;ip-limit&quot; 项的描述。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-ip-limit=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当前 IP 不能再注册更多账号了！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 该消息会在数据冲突时出现。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 见 https://github.com/kyngs/LibreLogin/wiki/Profile-Conflicts 了解详细。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-name-mismatch=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;糟糕！似乎有正版玩家将自己的名字改成了 %nickname%，也就是出现了冲突账号。请立即联系管理员！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家因无登录服可用时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-no-limbo=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;这里没有你能进入的登录服，请稍后再试。如果你是管理员，请尝试安装 NanoLimboPlugin。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家因无服务器可用时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-no-lobby=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;这里没有你能进入的大厅，请稍后再试。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家使用重复名称进入服务器时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-occupied-username=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请使用 &amp;c%username% &amp;f登录服务器&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 Mojang API 速率限制请求时，插件无法验证给定玩家是否为正版用户时发送的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-premium-error-throttled=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Mojang API 查询服务繁忙，请稍后进入服务器。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在连接至 Mojang 出现问题而无法验证玩家名称时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 对应错误会输出在控制台。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-premium-error-undefined=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;与 Mojang 通信时出现错误，若问题持续存在，请联系服务器管理员。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家禁用自动登录后被踢出显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-premium-info-disabled=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你已成功禁用自动登录！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家启用自动登录后被踢出显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-premium-info-enabled=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;自动登录已启用！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家名称过短时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 见配置文本 &quot;minimum-username-length&quot; 项的描述。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-short-username=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;用户名称过短！不能短于 %length% 个字符。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家登录超时时显示的消息。（可以在配置文件中设置玩家用于登录的时间长度。）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-time-limit=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;给你登录的时间已经过了！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家确认使用自动登录时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt-confirm=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你正在启用正版免密登录。需要注意的是启用后&amp;4将无法&amp;r再使用离线客户端登入服务器。你可以稍后使用 /cracked 命令关闭验证。若要确认本次操作，请在 5 分钟内输入命令 /confirmpremium。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家要求登录时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt-login=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请登录：&amp;e/login &amp;b&lt;密码&gt; [二步验证码]&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家要求注册时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt-register=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请注册：&amp;e/register &amp;b&lt;密码&gt; &lt;确认密码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置修订版本。!!请勿乱动!!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">revision=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在登录时显示的子标题。请确保你在配置文本中启用了 use-titles 选项。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sub-title-login=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;e/login &amp;b&lt;密码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在注册时显示的子标题。请确保你在配置文本中启用了 use-titles 选项。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sub-title-register=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;e/register &amp;b&lt;密码&gt; &lt;密码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 该部分包含了命令的格式文本。因其繁杂，一般人会保持默认设置。</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">syntax {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式进行二步验证时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;2fa-confirm&quot;=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;验证码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式修改密码时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    change-password=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;旧密码&gt; &lt;新密码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式确认密码修改时显示</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    confirm-password-reset=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;验证码&gt; &lt;密码&gt; &lt;重复密码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式测试邮箱时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    email-test=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;邮箱地址&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式登录时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    login=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;密码&gt; [验证码]&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式启用正版免密登录时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    premium=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;密码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式注册账号时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    register=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;密码&gt; &lt;重复密码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式重置密码时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    reset-password=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式设置邮箱时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set-email=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;邮箱地址&gt; &lt;密码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式禁用其他玩家二步验证时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-2fa-off=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式查询同 IP 账号时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-alts=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式禁用其他玩家免密登录时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-cracked=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式删除其他玩家时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-delete=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式禁用其他玩家邮箱时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-email-off=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式获取其他玩家时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-info=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式登录其他玩家时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-login=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式为其他玩家迁移数据时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-migrate=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt; &lt;新名称&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式为其他玩家修改密码时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-pass-change=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt; &lt;新密码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式为其他玩家启用免密登录时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-premium=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式注册其他用户时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-register=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt; &lt;密码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式为其他玩家设置邮箱时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-set-email=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt; &lt;邮箱&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式注销时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user-unregister=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在玩家试图以错误格式验证邮箱时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    verify-email=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;验证码&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家登录时显示的标题。请确保你在配置文本中启用了 use-titles 选项。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title-login=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;6&amp;l登录&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家注册时显示的标题。请确保你在配置文本中启用了 use-titles 选项。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title-register=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;6&amp;l注册&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在开始二步验证时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">totp-generating=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;正在生成二步验证码...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试完成二步验证操作但未启用时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">totp-not-awaiting=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你尚未启用二步验证！请输入命令 /2fa 开启二步验证。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试不填入二步验证码登录时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">totp-not-provided=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入二步验证码！请使用命令 /login &lt;密码&gt; &lt;验证码&gt;，若丢失验证码，请联系管理员。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家需要扫描二步验证二维码时显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">totp-show-info=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请使用登录软件扫描地图上的二维码。例如谷歌登录或 Authy。</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">完成后请输入命令 /2faconfirm &lt;验证码&gt; 完成二步验证。</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">断开连接以取消操作。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试登录或完成二步验证时使用了错误的验证码显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">totp-wrong=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;验证码错误！&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在玩家尝试使用旧版本二步验证客户端时显示的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">totp-wrong-version=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;客户端版本需高于 %low% - %high% 才可启用二步验证。之后才可再次使用旧版本登入。&quot;</span></span></code></pre></div>`,2)]))}const o=i(p,[["render",t]]);export{d as __pageData,o as default};
