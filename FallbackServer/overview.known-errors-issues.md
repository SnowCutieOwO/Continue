# 💥 已知问题
ViaVersion（包括其附属 ViaRewind、ViaBackwards）安装在群组服上时有可能导致服务器出现问题，也有可能会使得本插件不会正常工作。

一些奇怪的分支核心如 Aegis，也会破坏包括本插件在内的一系列插件的兼容性。

防火墙规则设置不正确会阻止本插件的 ping。

Geyser（包括 FloodGate）可能存在兼容性问题。

诸如 Protocolize 等的发包处理类插件可能会导致群组服核心兼容性变差。

LibreLogin 会将玩家从群组服中踢出，希望你能联系到开发者。

```Log
java.lang.IllegalArgumentException
```
若你见到了诸如此类的报错，请在开服参数中加入 `-Duser.language=en`
（感谢 @LoneDev[^1] 的帮助）

[^1]: ItemsAdder 的开发者。

```Log
Could not load plugin from file plugins/FallBackServer-X.X.X-(Beta).jar
java.util.zip.ZipException: zip file is empty
	at java.util.zip.ZipFile$Source.zerror(ZipFile.java:1598) ~[?:?]
	at java.util.zip.ZipFile$Source.findEND(ZipFile.java:1382) ~[?:?]
	at java.util.zip.ZipFile$Source.initCEN(ZipFile.java:1477) ~[?:?]
	at java.util.zip.ZipFile$Source.<init>(ZipFile.java:1315) ~[?:?]
	at java.util.zip.ZipFile$Source.get(ZipFile.java:1277) ~[?:?]
	at java.util.zip.ZipFile$CleanableResource.<init>(ZipFile.java:709) ~[?:?]
	at java.util.zip.ZipFile.<init>(ZipFile.java:243) ~[?:?]
	at java.util.zip.ZipFile.<init>(ZipFile.java:172) ~[?:?]
	at java.util.jar.JarFile.<init>(JarFile.java:347) ~[?:?]
	at java.util.jar.JarFile.<init>(JarFile.java:318) ~[?:?]
	at java.util.jar.JarFile.<init>(JarFile.java:284) ~[?:?]
```
这类错误一般是插件损坏导致的，大多数时候都是因为下载的插件出了问题，这时你只需要返回 SpigotMC 并再次下载本插件并重新按步骤安装即可。

脚注