# 安装教程

本章节将会指导你安装各种程序。

:::: details fnm

1. 按下 Win+R，输入 cmd，并回车。
2. 输入 `winget install Schniz.fnm`，并回车。

::: info 如果网络连接不佳...

尝试更换连接或使用魔法，直至安装完毕。

:::

3. 按使用的界面选择对应的设置方式。
  * CMD
    1. 打开界面，输入 `reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor" /v AutoRun /t REG_SZ /d @^%USERPROFILE^%\autorun.cmd" "2^>NUL /f`
    2. 在 `%USERPROFILE%` 对应目录下创建 `autorun.cmd` 文件，并填入如下内容：

``` bash title="autorun.cmd"
@echo off
:: for /F will launch a new instance of cmd so we create a guard to prevent an infnite loop
if not defined FNM_AUTORUN_GUARD (
    set "FNM_AUTORUN_GUARD=AutorunGuard"
    FOR /f "tokens=*" %%z IN ('fnm env --use-on-cd') DO CALL %%z
)
```

  * Cmder
    1. 在系统环境变量中加入 `CMDER_ROOT`，值为你安装 Cmder 的位置，且指向 `/bin` 文件夹。
    2. 在 `config/user_profile.cmd` 文件中，加入这些内容：

``` bash title="config/user_profile.cmd"
:: %CMDER_ROOT%\config\user_profile.cmd
call "%CMDER_ROOT%\bin\fnm_init.cmd"
```

3. 在 `bin/` 文件夹中，创建 `fnm_init.cmd` 并添加如下内容：

``` bash title="fnm_init.cmd"
:: %CMDER_ROOT%\bin\fnm_init.cmd
@echo off
FOR /f "tokens=*" %%z IN ('fnm env --use-on-cd') DO CALL %%z
```

  * PowerShell
    1. 打开 PowerShell，输入 `if (-not (Test-Path $profile)) { New-Item $profile -Force }`。
    2. 之后再输入 `Invoke-Item $profile`。
    3. 在新创建的文件中输入如下命令：`fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression`

::: info 如果提示无法打开或创建...

在 PowerShell 中输入这条命令：
`Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`

:::

4. 设置后，在对应界面内输入 `fnm use 版本号`，如果弹出 Node 版本号，则表示安装成功。
5. 再输入 `corepack enable pnpm`，即可在环境中使用 `pnpm` 进行包管理。

::: info 额外操作教学

在项目的目录下，创建一个 `.node-version` 文件，并在其中填入使用的版本，即可在启动项目时让 fnm 自动使用对应的 Node 版本。

:::

::::