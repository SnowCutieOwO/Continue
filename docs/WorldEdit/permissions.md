# 权限

默认情况下，没有玩家可以使用 WorldEdit。为了能让你、管理员和玩家使用 WorldEdit，你必须为他们提供正确的权限。有一个方法就是将管理员设置为 OP（除非在配置文本中禁用了），但（通过权限管理插件）为玩家分配本页的对应权限更为灵活。

你可以给予你自己或其他管理员 `worldedit.*` 权限，这使他们可以完全使用 WorldEdit 的功能。

## 命令权限

见“命令”章节来获取这些命令的详细解释。

|命令|权限|
|---|---|
|`/worldedit`||
|`/worldedit cui`||
|`/worldedit help`|`worldedit.help`|
|`/worldedit reload`|`worldedit.reload`|
|`/worldedit report`|`worldedit.report`|
|`/worldedit trace`||
|`/worldedit tz`||
|`/worldedit version`||
|`/undo`|`worldedit.history.undo`、`worldedit.history.undo.self`|
|`/redo`|`worldedit.history.redo`、`worldedit.history.redo.self`|
|`/clearhistory`|`worldedit.history.clear`|
|`//limit`|`worldedit.limit`|
|`//timeout`|`worldedit.timeout`|
|`//fast`|`worldedit.fast`|
|`//perf`|`worldedit.perf`|
|`//update`|`worldedit.update`|
|`//reorder`|`worldedit.reorder`|
|`//drawsel`|`worldedit.drawsel`|
|`//world`|`worldedit.world`|
|`//watchdog`|`worldedit.watchdog`|
|`/gmask`|`worldedit.global-mask`|
|`/toggleplace`||
|`/placement`|`worldedit.placement`|
|`/searchitem`|`worldedit.searchitem`|
|`/unstuck`|`worldedit.navigation.unstuck`|
|`/ascend`|`worldedit.navigation.ascend`|
|`/descend`|`worldedit.navigation.descend`|
|`/ceil`|`worldedit.navigation.ceiling`|
|`/thru`|`worldedit.navigation.thru.command`|
|`/jumpto`|`worldedit.navigation.jumpto.command`|
|`/up`|`worldedit.navigation.up`|
|`//pos`|`worldedit.selection.pos`|
|`//pos1`|`worldedit.selection.pos`|
|`//pos2`|`worldedit.selection.pos`|
|`//hpos1`|`worldedit.selection.hpos`|
|`//hpos2`|`worldedit.selection.hpos`|
|`//chunk`|`worldedit.selection.chunk`|
|`//wand`|`worldedit.wand`|
|`/toggleeditwand`|`worldedit.wand.toggle`|
|`//contract`|`worldedit.selection.contract`|
|`//shift`|`worldedit.selection.shift`|
|`//outset`|`worldedit.selection.outset`|
|`//inset`|`worldedit.selection.inset`|
|`'//trim`|`worldedit.selection.trim`|
|`//size`|`worldedit.selection.size`|
|`//count`|`worldedit.analysis.count`|
|`//distr`|`worldedit.analysis.distr`|
|`//sel`||
|`//expand`|`worldedit.selection.expand`|
|`//expand vert`||
|`//set`|`worldedit.region.set`|
|`//line`|`worldedit.region.line`|
|`//curve`|`worldedit.region.curve`|
|`//replace`|`worldedit.region.replace`|
|`//overlay`|`worldedit.region.overlay`|
|`//center`|`worldedit.region.center`|
|`//naturalize`|`worldedit.region.naturalize`|
|`//walls`|`worldedit.region.walls`|
|`//faces`|`worldedit.region.faces`|
|`//smooth`|`worldedit.region.smooth`|
|`//snowsmooth`|`worldedit.region.snowsmooth`|
|`//move`|`worldedit.region.move`|
|`//stack`|`worldedit.region.stack`|
|`//regen`|`worldedit.regen`|
|`//deform`|`worldedit.region.deform`|
|`//hollow`|`worldedit.region.hollow`|
|`//forest`|`worldedit.region.forest`|
|`//flora`|`worldedit.region.flora`|
|`//hcyl`|`worldedit.generation.cylinder`|
|`//cyl`|`worldedit.generation.cylinder`|
|`//cone`|`worldedit.generation.cone`|
|`//hsphere`|`worldedit.generation.sphere`|
|`//sphere`|`worldedit.generation.sphere`|
|`/forestgen`|`worldedit.generation.forest`|
|`/pumpkins`|`worldedit.generation.pumpkins`|
|`//feature`|`worldedit.generation.feature`|
|`//structure`|`worldedit.generation.structure`|
|`//hpyramid`|`worldedit.generation.pyramid`|
|`//pyramid`|`worldedit.generation.pyramid`|
|`//generate`|`worldedit.generation.shape`|
|`//generatebiome`|`worldedit.generation.shape.biome`|
|`/schematic`|`worldedit.schematic.delete`、`worldedit.schematic.list`、`worldedit.clipboard.load`、`worldedit.schematic.save`、`worldedit.schematic.formats`、`worldedit.schematic.load`、`worldedit.clipboard.save`、`worldedit.clipboard.share`、`worldedit.schematic.share`|
|`/schematic delete`|`worldedit.schematic.delete`|
|`/schematic formats`|`worldedit.schematic.formats`|
|`/schematic list`|`worldedit.schematic.list`|
|`/schematic load`|`worldedit.clipboard.load`、`worldedit.schematic.load`|
|`/schematic save`|`worldedit.clipboard.save`、`worldedit.schematic.save`|
|`//copy`|`worldedit.clipboard.copy`|
|`//cut`|`worldedit.clipboard.cut`|
|`//paste`|`worldedit.clipboard.paste`|
|`//rotate`|`worldedit.clipboard.rotate`|
|`//flip`|`worldedit.clipboard.flip`|
|`/clearclipboard`|`worldedit.clipboard.clear`|
|`/tool`||
|`/tool cycler`|`worldedit.tool.data-cycler`|
|`/tool deltree`|`worldedit.tool.deltree`|
|`/tool farwand`|`worldedit.tool.farwand`|
|`/tool floodfill`|`worldedit.tool.flood-fill`|
|`/tool info`|`worldedit.tool.info`|
|`/tool lrbuild`|`worldedit.tool.lrbuild`|
|`/tool navwand`|`worldedit.setwand`|
|`/tool none`||
|`/tool repl`|`worldedit.tool.replacer`|
|`/tool selwand`|`worldedit.setwand`|
|`/tool stacker`|`worldedit.tool.stack`|
|`/tool tree`|`worldedit.tool.tree`|
|`/none`||
|`/selwand`|`worldedit.setwand`|
|`/navwand`|`worldedit.setwand`|
|`/info`|`worldedit.tool.info`|
|`/tree`|`worldedit.tool.tree`|
|`/repl`|`worldedit.tool.replacer`|
|`/cycler`|`worldedit.tool.data-cycler`|
|`/floodfill`|`worldedit.tool.flood-fill`|
|`/deltree`|`worldedit.tool.deltree`|
|`/farwand`|`worldedit.tool.farwand`|
|`/lrbuild`|`worldedit.tool.lrbuild`|
|`//`|`worldedit.superpickaxe`|
|`/mask`|`worldedit.brush.options.mask`|
|`/material`|`worldedit.brush.options.material`|
|`/range`|`worldedit.brush.options.range`|
|`/size`|`worldedit.brush.options.size`|
|`/tracemask`|`worldedit.brush.options.tracemask`|
|`/superpickaxe`|`worldedit.superpickaxe.area`、`worldedit.superpickaxe.recursive`、`worldedit.superpickaxe`|
|`/superpickaxe area`|`worldedit.superpickaxe.area`|
|`/superpickaxe recursive`|`worldedit.superpickaxe.recursive`|
|`/superpickaxe single`|`worldedit.superpickaxe`|
|`/brush`||
|`/brush apply`|`worldedit.brush.apply`|
|`/brush apply forest`||
|`/brush apply item`|`worldedit.brush.item`|
|`/brush apply set`||
|`/brush biome`|`worldedit.brush.biome`|
|`/brush butcher`|`worldedit.brush.butcher`|
|`/brush clipboard`|`worldedit.brush.clipboard`|
|`/brush cylinder`|`worldedit.brush.cylinder`|
|`/brush deform`|`worldedit.brush.deform`|
|`/brush dilate`|`worldedit.brush.morph`|
|`/brush erode`|`worldedit.brush.morph`|
|`/brush extinguish`|`worldedit.brush.ex`|
|`/brush feature`|`worldedit.brush.feature`|
|`/brush forest`|`worldedit.brush.forest`|
|`/brush gravity`|`worldedit.brush.gravity`|
|`/brush heightmap`|`worldedit.brush.heightmap`|
|`/brush lower`|`worldedit.brush.lower`|
|`/brush morph`|`worldedit.brush.morph`|
|`/brush none`||
|`/brush paint`|`worldedit.brush.paint`|
|`/brush paint forest`||
|`/brush paint item`|`worldedit.brush.item`|
|`/brush paint set`||
|`/brush raise`|`worldedit.brush.raise`|
|`/brush set`|`worldedit.brush.set`|
|`/brush smooth`|`worldedit.brush.smooth`|
|`/brush snow`|`worldedit.brush.snow`|
|`/brush snowsmooth`|`worldedit.brush.snowsmooth`|
|`/brush sphere`|`worldedit.brush.sphere`|
|`/brush splatter`|`worldedit.brush.splatter`|
|`/biomelist`|`worldedit.biome.list`|
|`/biomeinfo`|`worldedit.biome.info`|
|`//setbiome`|`worldedit.biome.set`|
|`/chunkinfo`|`worldedit.chunkinfo`|
|`/listchunks`|`worldedit.listchunks`|
|`/delchunks`|`worldedit.delchunks`|
|`/restore`|`worldedit.snapshots.restore`|
|`/snapshot`|`worldedit.snapshots.restore`、`worldedit.snapshots.list`|
|`/snapshot after`|`worldedit.snapshots.restore`|
|`/snapshot before`|`worldedit.snapshots.restore`|
|`/snapshot list`|`worldedit.snapshots.list`|
|`/snapshot sel`|`worldedit.snapshots.restore`|
|`/snapshot use`|`worldedit.snapshots.restore`|
|`/cs`|`worldedit.scripting.execute`|
|`/.s`|`worldedit.scripting.execute`|
|`//fill`|`worldedit.fill`|
|`//fillr`|`worldedit.fill.recursive`|
|`//drain`|`worldedit.drain`|
|`/fixlava`|`worldedit.fixlava`|
|`/fixwater`|`worldedit.fixwater`|
|`/removeabove`|`worldedit.removeabove`|
|`/removebelow`|`worldedit.removebelow`|
|`/removenear`|`worldedit.removenear`|
|`/replacenear`|`worldedit.replacenear`|
|`/snow`|`worldedit.snow`|
|`/thaw`|`worldedit.thaw`|
|`/green`|`worldedit.green`|
|`/extinguish`|`worldedit.extinguish`|
|`/butcher`|`worldedit.butcher`|
|`/remove`|`worldedit.remove`|
|`//calculate`|`worldedit.calc`|
|`//help`|`worldedit.help`|

## 其他权限

|权限|释义|
|---|---|
|`worldedit.navigation.jumpto.tool`|允许使用导航魔杖（左键），也就是 `/jumpto` 的快捷方式。|
|`worldedit.navigation.thru.tool`|允许使用导航魔杖（右键），也就是 `/thru` 的快捷方式。|
|`worldedit.anyblock`|允许使用配置文本中 `disallowed-blocks` 的方块|
|`worldedit.limit.unrestricted`|允许使用 `//limit` 将上限设置为高于配置文本中设置的值，其他限制也是如此。|
|`worldedit.timeout.unrestricted`|允许通过 `//timeout` 命令将计算超时时间设置为超出配置文本限制的值。|
|`worldedit.inventory.unrestricted`|若在配置文本中启用了 `use-inventory` 选项，则该权限可覆盖之。|
|`worldedit.override.bedrock`|允许使用超级镐子破坏基岩。|
|`worldedit.override.data-cycler`|允许使用数据同步工具在非白名单的方块上进行操作。|
|`worldedit.setnbt`|允许设置方块上的特殊数据（例如告示牌的文本`、`箱子的内容等）。|
|`worldedit.report.pastebin`|允许使用 `/worldedit report` 命令将生成的报告上传至剪贴板网站。|
|`worldedit.scripting.execute.<文件名称>`|允许使用指定名称的快速脚本。|
