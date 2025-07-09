# 消息文本

<!--
  这段内容需要改进：
  原因：Shiki 不支持渲染 HOCON 格式
-->

``` toml
#  !!文件为 HOCON 格式!!
#  HOCON 格式与 JSON 相似，但有一些额外特征。
#  你可以在 Sponge 维基中找到更多信息：
#  https://docs.spongepowered.org/stable/en/server/getting-started/configuration/hocon.html
#  ----------------------------------------------------------------------------------------
#  LibreLogin 消息文本
#  ----------------------------------------------------------------------------------------
#  该部分包含了插件使用的消息文本，你可以按需修改其中的内容。
#  消息支持使用原版代码格式和 MiniMessage 代码格式。例如，这条消息被视作有效并能正常解析：<bold>&a重载成功!</bold>
#  你可以在 Github 页面找到 LibreLogin 的更多信息：
#  https://github.com/kyngs/LibreLogin

# 玩家正在登录时这段消息会显示在 ActionBar 上，请确保你启用了配置文本中的请确保你在配置文本中启用了 use-action-bar 选项。
action-bar-login="&e/login &b<密码>"
# 玩家正在注册时这段消息会显示在 ActionBar 上，请确保你在配置文本中启用了 use-action-bar 选项。
action-bar-register="&e/register &b<密码> <密码>"
# 该部分包含了命令的自动补全。因其繁杂，一般人会保持默认设置。
# !!请勿翻译内建变量 @players!! 这个变量用于提及在线的所有玩家。
autocomplete {
    # 这条消息会在玩家尝试输入命令 /2fa-confirm 时显示。
    "2fa-confirm"=验证码
    # 这条消息会在玩家尝试输入命令 /changepassword 时显示。
    change-password="旧密码 新密码"
    # 这条消息会在玩家尝试输入命令 /confirmpasswordreset 时显示。
    confirm-password-reset="验证码 旧密码 新密码"
    # 这条消息会在玩家尝试输入命令 /librelogin email test 时显示。
    email-test=邮箱地址
    # 这条消息会在玩家尝试输入命令 /login 时显示。
    login=密码
    # 这条消息会在玩家尝试输入命令 /premium 时显示。
    premium=密码
    # 这条消息会在玩家尝试输入命令 /register 时显示。
    register="密码 确认密码"
    # 这条消息会在玩家尝试输入命令 /resetpassword 时显示。
    reset-password=""
    # 这条消息会在玩家尝试输入命令 /setemail 时显示。
    set-email="邮箱地址 密码"
    # 这条消息会在玩家尝试输入命令 /librelogin user 2fa-off 时显示。
    user-2fa-off="@players"
    # 这条消息会在玩家尝试输入命令 /librelogin user alts 时显示。
    user-alts="@players"
    # 这条消息会在玩家尝试输入命令 /librelogin user cracked 时显示。
    user-cracked="@players"
    # 这条消息会在玩家尝试输入命令 /librelogin user delete 时显示。
    user-delete="@players"
    # 这条消息会在玩家尝试输入命令 /librelogin user emailoff 时显示。
    user-email-off="@players"
    # 这条消息会在玩家尝试输入命令 /librelogin user info 时显示。
    user-info="@players"
    # 这条消息会在玩家尝试输入命令 /librelogin user login 时显示。
    user-login="@players"
    # 这条消息会在玩家尝试输入命令 /librelogin user migrate 时显示。
    user-migrate="@players newName"
    # 这条消息会在玩家尝试输入命令 /librelogin user pass-change 时显示。
    user-pass-change="@players newPassword"
    # 这条消息会在玩家尝试输入命令 /librelogin user premium 时显示。
    user-premium="@players"
    # 这条消息会在玩家尝试输入命令 /librelogin user register 时显示。
    user-register="@players password"
    # 这条消息会在玩家尝试输入命令 /librelogin user setemail 时显示。
    user-set-email="@players email"
    # 这条消息会在玩家尝试输入命令 /librelogin user unregister 时显示。
    user-unregister="@players"
    # 这条消息会在玩家尝试输入命令 /verifyemail 时显示。
    verify-email=code
}
# 这封邮件会在玩家尝试重置密码时发送，你可以在这条消息中插入任何 HTML 代码。
email-password-reset-content="你好 %name%!<br>\n你 (来自 IP %ip% 的请求) 发送了来自 %server% 服务器的重置密码请求.<br>\n若你没有进行过相关操作，请无视该邮件。<br>\n若要确认此操作，请在<b>游戏内输入命令：</b><br>\n<b><验证码><h1>/confirmpasswordreset %code%</h1></code></b><br>\n"
# 这封邮件会在玩家尝试重置密码时发送。
email-password-reset-subject="来自 %server% 服务器的重置密码请求"
# 这封邮件会在玩家尝试添加恢复邮箱时发送。你可以在这条消息中插入任何 HTML 代码。
email-verification-content="你好 %name%!<br>\n你发送了来自 %server% 服务器的添加恢复邮箱请求.<br>\n若你没有进行过相关操作，请无视该邮件。<br>\n若要确认此操作，请在<b>游戏内输入命令：</b><br>\n<b><验证码><h1>/verifyemail %code%</h1></code></b><br>\n"
# 这封邮件会在玩家尝试添加恢复邮箱时发送。
email-verification-subject="在 %server% 服务器上验证你的邮箱"
# 在玩家尝试再次登录时显示的消息。
error-already-authorized="请勿重复登录!"
# 在玩家尝试再次注册显示的消息。
error-already-registered="请勿重复注册!"
# 在配置文件出现问题时显示的消息。
error-corrupted-configuration="配置文件出现问题，将保留备份后生成新文件。原因: %cause%"
# 在消息文本 messages.conf 文件出现问题时显示的消息。
error-corrupted-messages="消息文本出现问题，将保留备份后生成新文件。原因: %cause%"
# 在玩家尝试使用过短或违非法密码注册时显示的消息。
error-forbidden-password="密码过短或存在非法字符！"
# 在玩家执行来自 Floodgate 的命令时显示的消息。
error-from-floodgate="你不能在 Floodgate 中使用这个命令!"
# 在玩家使用了无效命令时显示的消息。
error-invalid-syntax="Usage: <c2>{command}</c2> <c3>{syntax}</c3>"
# 在玩家尝试发送邮件但未能成功显示的消息。
error-mail-not-sent="发送邮件失败，是否正确填写邮箱地址？如果你确信邮箱填写正确，请联系服务器管理员。"
# 在玩家尝试发送邮箱请求过快时显示的消息。
error-mail-throttle="发送邮箱次数过多！请稍后再试。"
# 在玩家尝试输入 /premium 前执行命令 /premiumconfirm 时显示的消息。
error-no-confirm="请先使用命令 /premium <密码>！"
# 在玩家尝试重置密码但没有找到恢复邮箱时显示的消息。
error-no-email="你尚未设置恢复密码邮箱！"
# 在玩家尝试输入 /mail 前执行命令 /mailconfirm 时显示的消息。
error-no-mail-confirm="请先使用命令 /setemail <邮箱> <密码> ！"
# 在玩家尝试重置空密码时显示的消息。
error-no-password="尚未设置密码。你可以尝试使用命令 /cracked 禁用自动登录后注册。"
# 在玩家尝试执行命令 /resetpasswordconfirm, before running /resetpassword.
error-no-password-reset="请先使用命令 /resetpassword ！"
# 在玩家无权限执行命令时显示的消息。
error-no-permission="你没有权限使用该命令！"
# 在玩家尝试使用登录后才可执行的命令时显示的消息。
error-not-authorized="请先登录！"
# 在玩家尝试使用 MultiProxy 不支持的功能时显示的消息。
error-not-available-on-multi-proxy="该功能在 MultiProxy 上不可用！"
# 在玩家尝试重复启用自动登录时显示的消息。
error-not-cracked="你已经启用了自动登录，若要解除请输入 /cracked！"
# 在玩家尝试启用自动登录但账号不存在于 Mojang 数据库中显示的消息。
error-not-paid="该账号不存在于 Mojang 数据库！"
# 在玩家尝试重复禁用自动登录时显示的消息。
error-not-premium="你已经禁用了自动登录，若要启用请输入 /premium <密码>！"
# 在玩家未注册的情况下尝试登录显示的消息。
error-not-registered="请先注册！"
# 在玩家尝试转移数据至已有账号时显示的消息。
error-occupied-user="该用户名已存在！"
# 在玩家尝试使用损坏的密码登入时显示的消息。
error-password-corrupted="登录密码出现错误，请联系管理员！"
# 在玩家尝试使用前后不一的密码注册时显示的消息。
error-password-not-match="前后密码不一致！"
# 在玩家尝试修改密码且功能被禁用的情况下显示的消息。
error-password-resetting-disabled="本服尚未启用密码重置功能！"
# 在玩家使用过长密码注册时显示的消息。
error-password-too-long="密码过长！"
# 在玩家尝试使用错误密码登录时显示的消息。
error-password-wrong="密码错误！"
# 在尝试引用已登录玩家时显示的消息。
error-player-authorized="该玩家已经登录！"
# 在尝试引用未注册玩家时显示的消息。
error-player-not-registered="该玩家尚未注册！"
# 在尝试引用离线玩家时显示的消息。
error-player-offline="该玩家不在线！"
# 在尝试引用在线玩家时显示的消息。
error-player-online="该玩家在线！"
# 在验证指定玩家名称因 Mojang 速率限制而导致范文被拒绝时显示的消息。
error-premium-throttled="Mojang API 已达到速率限制，请稍后重试！"
# 在连接至 Mojang 时出现未知错误而无法进一步验证玩家名称时显示的消息。错误将会输出在控制台上。
error-premium-unknown="连接至 Mojang API 时出错，请检查控制台获取更多信息。"
# 在玩家执行命令速度过快时显示的消息。
error-throttle="执行命令过快！请稍等一会。"
# 在出现未知错误时显示的消息。
error-unknown="出现未知错误，请检查控制台。"
# 在玩家尝试使用未知命令时显示的消息。
error-unknown-command="未知命令！"
# 在玩家尝试提及未知用户时显示的消息。
error-unknown-user="该玩家不存在！"
# 在玩家尝试验证邮箱但验证码错误时显示的消息。
error-wrong-mail-verify="验证码错误！"
# 在玩家尝试重置密码但验证码错误时显示的消息。
error-wrong-password-reset="验证码错误！"
# 在玩家输入命令 /librelogin about 时显示的消息。
# !! 以任何方式使得这段消息不可见的方法都是可耻且视作违反证书规定 !!
info-about="该服务器正在运行 FOSS 验证插件，LibreLogin。\n当前版本：%version%\n插件作者：kyngs 与其他贡献成员\n插件源码：https://github.com/kyngs/LibreLogin\n使用证书：Mozilla Public License 2.0"
# 在玩家拥有多个账号时显示的消息。
info-alts="当前 IP 地址下有 %count% 个玩家："
# 在玩家拥有多个账号时显示的消息。
info-alts-entry="- %name% (最后上线: %last_seen%)"
# 在删除某些内容时显示的消息。
info-deleted="删除成功！"
# 正在删除某些内容时显示的消息。
info-deleting="正在删除..."
# 正在禁用某些内容时显示的消息。
info-disabling="正在禁用..."
# 在玩家尝试执行命令 /librelogin dump 时显示的消息。
info-dumped="缓存已保存为 %file%!"
# 在玩家尝试执行命令 /librelogin dump 时显示的消息。
info-dumping="正在创建缓存..."
# 在编辑某些内容时显示的消息。
info-edited="编辑完毕！"
# 正在编辑某些内容时显示的消息。
info-editing="编辑中..."
# 正在启用某些内容时显示的消息。
info-enabling="启用中..."
# 在玩家被服务器踢出时显示的消息。
info-kick="你已被服务器踢出，理由：%reason%"
# 在玩家登入时显示的消息。
info-logged-in="登录成功！"
# 在玩家尝试登录时显示的消息。
info-logging-in="正在登录..."
# 在玩家执行发送邮件的命令时显示的消息。
info-mail-sending="正在发送邮件..."
# 在玩家验证邮箱时发送的消息。
info-mail-verified="邮箱验证完成！现在可以在忘记密码时通过邮箱重置。"
# 在玩家没有同 IP 下账号时显示的消息。
info-no-alts="同一 IP 下没有更多账号。"
# 在玩家重置密码时显示的消息。
info-password-reset="密码已重置！之后便可使用新密码登录。"
# 在玩家通过 /premium 启用免密登录后显示的消息。
info-premium-logged-in="你已自动登录！"
# 在玩家注册完成后显示的消息。
info-registered="注册成功！"
# 在玩家尝试注册时显示的消息。
info-registering="正在注册..."
# 完成重载显示的消息。
info-reloaded="重载成功！"
# 在重载时显示的消息。
info-reloading="重载中..."
# 在玩家执行发送重置密码邮件时显示的消息。
info-reset-password-mail-sent="密码重置邮件已发送！若收件箱中没有找到，请检查垃圾邮件箱。重置请求有效期为 10 分钟。"
# 在玩家尝试重置密码时显示的消息。
info-resetting-password="正在重置密码..."
# 在玩家执行发送邮件的命令时显示的消息。
info-sending-email="正在发送邮件..."
# 在玩家执行发送邮件的命令时显示的消息。
info-sent-email="邮件已发送！"
# 在玩家处于会话期间而跳过登录时显示的消息。
info-session-logged-in="你已自动登录！"
# 在玩家的信息被查询时显示的消息。
info-user="UUID：%uuid%\n正版 UUID：%premium_uuid%\n最后上线：%last_seen%\n注册日期：%joined%\n二步验证：%2fa%\n邮箱：%email%\nIP：%ip%\n最后登录：%last_authenticated%"
# 在玩家执行发送验证邮箱的命令时显示的消息。
info-verification-mail-sent="验证邮件已发送！若收件箱中没有找到，请检查垃圾邮件箱。重置请求有效期为 10 分钟。"
# 在玩家启用二步验证时显示的消息。
kick-2fa-enabled="二步验证已启用！请重新进入服务器。"
# 在玩家已经连接但试图从其他位置进入服务器时显示的消息。
kick-already-connected="你已经进入服务器了！"
# 在玩家使用错误密码登入服务器时显示的消息。
kick-error-password-wrong="密码错误！"
# 在玩家使用非法名称进入服务器时显示的消息。
# 见 https://github.com/kyngs/LibreLogin/wiki/Name-Validation 了解详细。
kick-illegal-username="名称中包含非法字符或长于 16 字符！"
# 在玩家名称大小写不正确时进入服务器时显示的消息。
# 见 https://github.com/kyngs/LibreLogin/wiki/Name-Validation 了解详细。
kick-invalid-case-username="请使用 &c%username% &f登录服务器"
# 在玩家可注册账号数量已达到单 IP 上限时显示的消息。
# 见配置文件中 "ip-limit" 项的描述。
kick-ip-limit="当前 IP 不能再注册更多账号了！"
# 该消息会在数据冲突时出现。
# 见 https://github.com/kyngs/LibreLogin/wiki/Profile-Conflicts 了解详细。
kick-name-mismatch="糟糕！似乎有正版玩家将自己的名字改成了 %nickname%，也就是出现了冲突账号。请立即联系管理员！"
# 在玩家因无登录服可用时显示的消息。
kick-no-limbo="这里没有你能进入的登录服，请稍后再试。如果你是管理员，请尝试安装 NanoLimboPlugin。"
# 在玩家因无服务器可用时显示的消息。
kick-no-lobby="这里没有你能进入的大厅，请稍后再试。"
# 在玩家使用重复名称进入服务器时显示。
kick-occupied-username="请使用 &c%username% &f登录服务器"
# 在 Mojang API 速率限制请求时，插件无法验证给定玩家是否为正版用户时发送的消息。
kick-premium-error-throttled="Mojang API 查询服务繁忙，请稍后进入服务器。"
# 在连接至 Mojang 出现问题而无法验证玩家名称时显示的消息。
# 对应错误会输出在控制台。
kick-premium-error-undefined="与 Mojang 通信时出现错误，若问题持续存在，请联系服务器管理员。"
# 在玩家禁用自动登录后被踢出显示的消息。
kick-premium-info-disabled="你已成功禁用自动登录！"
# 在玩家启用自动登录后被踢出显示的消息。
kick-premium-info-enabled="自动登录已启用！"
# 在玩家名称过短时显示的消息。
# 见配置文本 "minimum-username-length" 项的描述。
kick-short-username="用户名称过短！不能短于 %length% 个字符。"
# 在玩家登录超时时显示的消息。（可以在配置文件中设置玩家用于登录的时间长度。）
kick-time-limit="给你登录的时间已经过了！"
# 在玩家确认使用自动登录时显示的消息。
prompt-confirm="你正在启用正版免密登录。需要注意的是启用后&4将无法&r再使用离线客户端登入服务器。你可以稍后使用 /cracked 命令关闭验证。若要确认本次操作，请在 5 分钟内输入命令 /confirmpremium。"
# 在玩家要求登录时显示的消息。
prompt-login="请登录：&e/login &b<密码> [二步验证码]"
# 在玩家要求注册时显示的消息。
prompt-register="请注册：&e/register &b<密码> <确认密码>"
# 配置修订版本。!!请勿乱动!!
revision=3
# 在登录时显示的子标题。请确保你在配置文本中启用了 use-titles 选项。
sub-title-login="&e/login &b<密码>"
# 在注册时显示的子标题。请确保你在配置文本中启用了 use-titles 选项。
sub-title-register="&e/register &b<密码> <密码>"
# 该部分包含了命令的格式文本。因其繁杂，一般人会保持默认设置。
syntax {
    # 在玩家试图以错误格式进行二步验证时显示。
    "2fa-confirm"="<验证码>"
    # 在玩家试图以错误格式修改密码时显示。
    change-password="<旧密码> <新密码>"
    # 在玩家试图以错误格式确认密码修改时显示
    confirm-password-reset="<验证码> <密码> <重复密码>"
    # 在玩家试图以错误格式测试邮箱时显示。
    email-test="<邮箱地址>"
    # 在玩家试图以错误格式登录时显示。
    login="<密码> [验证码]"
    # 在玩家试图以错误格式启用正版免密登录时显示。
    premium="<密码>"
    # 在玩家试图以错误格式注册账号时显示。
    register="<密码> <重复密码>"
    # 在玩家试图以错误格式重置密码时显示。
    reset-password=""
    # 在玩家试图以错误格式设置邮箱时显示。
    set-email="<邮箱地址> <密码>"
    # 在玩家试图以错误格式禁用其他玩家二步验证时显示。
    user-2fa-off="<名称>"
    # 在玩家试图以错误格式查询同 IP 账号时显示。
    user-alts="<名称>"
    # 在玩家试图以错误格式禁用其他玩家免密登录时显示。
    user-cracked="<名称>"
    # 在玩家试图以错误格式删除其他玩家时显示。
    user-delete="<名称>"
    # 在玩家试图以错误格式禁用其他玩家邮箱时显示。
    user-email-off="<名称>"
    # 在玩家试图以错误格式获取其他玩家时显示。
    user-info="<名称>"
    # 在玩家试图以错误格式登录其他玩家时显示。
    user-login="<名称>"
    # 在玩家试图以错误格式为其他玩家迁移数据时显示。
    user-migrate="<名称> <新名称>"
    # 在玩家试图以错误格式为其他玩家修改密码时显示。
    user-pass-change="<名称> <新密码>"
    # 在玩家试图以错误格式为其他玩家启用免密登录时显示。
    user-premium="<名称>"
    # 在玩家试图以错误格式注册其他用户时显示。
    user-register="<名称> <密码>"
    # 在玩家试图以错误格式为其他玩家设置邮箱时显示。
    user-set-email="<名称> <邮箱>"
    # 在玩家试图以错误格式注销时显示。
    user-unregister="<名称>"
    # 在玩家试图以错误格式验证邮箱时显示。
    verify-email="<验证码>"
}
# 在玩家登录时显示的标题。请确保你在配置文本中启用了 use-titles 选项。
title-login="&6&l登录"
# 在玩家注册时显示的标题。请确保你在配置文本中启用了 use-titles 选项。
title-register="&6&l注册"
# 在开始二步验证时显示的消息。
totp-generating="正在生成二步验证码..."
# 在玩家尝试完成二步验证操作但未启用时显示的消息。
totp-not-awaiting="你尚未启用二步验证！请输入命令 /2fa 开启二步验证。"
# 在玩家尝试不填入二步验证码登录时显示的消息。
totp-not-provided="请输入二步验证码！请使用命令 /login <密码> <验证码>，若丢失验证码，请联系管理员。"
# 在玩家需要扫描二步验证二维码时显示。
totp-show-info="请使用登录软件扫描地图上的二维码。例如谷歌登录或 Authy。\n完成后请输入命令 /2faconfirm <验证码> 完成二步验证。\n断开连接以取消操作。"
# 在玩家尝试登录或完成二步验证时使用了错误的验证码显示的消息。
totp-wrong="验证码错误！"
# 在玩家尝试使用旧版本二步验证客户端时显示的消息。
totp-wrong-version="客户端版本需高于 %low% - %high% 才可启用二步验证。之后才可再次使用旧版本登入。"
```