# 插件设置
多个全局影响插件的选项

## 插件
插件相关设置。在这里你可以决定某些内容的工作方式。

```YAML
Plugin:
  commands:
    repair:
      oraxen_durability_only: false # 若设置为 true 则不会修复原版耐久物品
```

是否只修复使用了 Oraxen 耐久系统的自定义物品？

## 物品配置

### Oraxen 的配置是如何工作的？

首先，Oraxen 有好几个文件夹，其中 3 个就是用来存放配置文件的。

第一是 `Oraxen/glyphs`，它用于设置自定义字体或其他有关内容。

第二是 `Oraxen/items`，用于配置或创建自己的物品 yaml 配置。

最后是 `Oraxen/pack/`，所有的材质和模型都在这里打包成纹理包。

## 材质包

### 生成

```YAML
  generation:
    generate: true
    compression: BEST_COMPRESSION # 见源代码 Deflater.class
    # 保护机制会尽可能让纹理包无法被正常方式打开（Windows 自带的解压、7zip、WinRAR 等）且不提示其完整性。
    # 但要小心，若你启用该选项，正常的解压方式会导致硬盘被占满。
    protection: true
    comment: "The content of this texture pack
     \nbelongs to the owner of the Oraxen
     \nplugin and any complete or partial
     \nuse must comply with the terms and
     \nconditions of Oraxen."
```

这部分配置允许你决定纹理包的**生成（generation）**。**压缩（compression）**默认设置为尽可能小。下面的**备注（comment）**可以视作纹理包的水印，能自由修改。

#### 保护

保护功能可以阻止玩家直接偷窃纹理包。这不会让其代码增加，但鉴于代码的特殊性，在启用后**不应**尝试打开生成的 zip 文件，否则会导致硬盘受损。

![img](images/image30.png '1 艾字节（EB）= 1000000000（1 亿） 吉字节（GB）')

![img](images/image31.png '操作系统会比你先害怕文件大小导致的后果')

### 上传

```YAML
    enabled: true
    type: polymath # transfer.sh 或 polymath
    polymath:
      server: atlas.oraxen.com # 你也可以运行自己的 polymath 实例
```

Oraxen 集成了 Polymoth（以 Python 编写的高兼容性自定义网页服务器）。你可以在[这里](https://github.com/Th0rgal/Polymath/)下载源码，并自行托管或使用指定实例（atlas）。你也可以使其[接入自己的托管服务](developers.custom-hosting-service.md)。

### 调度

这部分允许你基于玩家的纹理包安装状态执行指定的动作。

你可以发送消息（通过踢出（KICK）、聊天栏、ActionBar 或者标题），并指定延迟和间隔（若你使用的是 ActionBar 或标题，则这里是不同消息之间的间隔）

```YAML
receive:
  enabled: true

  loaded:
    actions:
      message:
        enabled: true
        # KICK / CHAT / ACTION_BAR / TITLE
        type: ACTION_BAR
        # 第一条消息出现的延迟，单位为秒
        delay: 0
        # 若消息类型设置为了 ACTION_BAR 或 TITLE，则你需要设置这个间隔
        period: -1
        # 点击与悬浮提示框元素只能在消息类型为 CHAT 时显示
        messages:
          - "<green><bold>纹理包载入成功!"

      # 如果需要执行命令
      commands:
        console: []
        player: []
        opped_player: []

  accepted:
    actions:
      message:
        enabled: true
        # KICK / CHAT / ACTION_BAR / TITLE
        type: TITLE
        # 第一条消息出现的延迟，单位为秒
        delay: 0
        # 若消息类型设置为了 ACTION_BAR 或 TITLE，则你需要设置这个间隔
        period: 3
        # 点击与悬浮提示框元素只能在消息类型为 CHAT 时显示
        messages:
          - "<green><bold>已接受纹理包!"
          - "感谢配合"
      # 如果需要执行命令
      commands:
        console: []
        player: []
        opped_player: []

  denied:
    actions:
      message:
        enabled: true
        # KICK / CHAT / ACTION_BAR / TITLE
        type: CHAT
        # 第一条消息出现的延迟，单位为秒
        delay: 0
        # 因为这是 CHAT 即聊天栏类型的消息，此设置可填入任何值
        period: -1
        # 点击与悬浮提示框元素只能在消息类型为 CHAT 时显示
        messages:
          - "<red>你拒绝了纹理包下载，但新物品只能在纹理包下显示. 请 </red><click:run_command:/oraxen pack><hover:show_text:\"<green>显示更多信息\"><green><bold>点击这里</bold></hover></click> <red>或输入 <bold>/o pack </bold>了解更多"
      # 如果需要执行命令
      commands:
        console: []
        player: []
        opped_player: []

  failed_download:
    actions:
      message:
        enabled: true
        # KICK / CHAT / ACTION_BAR / TITLE
        type: CHAT
        # 第一条消息出现的延迟，单位为秒
        delay: 0
        # 因为这是 CHAT 即聊天栏类型的消息，此设置可填入任何值
        period: -1
        # 点击与悬浮提示框元素只能在消息类型为 CHAT 时显示
        messages:
          - "<red>下载纹理包时出现问题，但新物品只能在纹理包下显示. 请 </red><click:run_command:/oraxen pack getpack><hover:show_text:\"<red>/!\\ 在游戏内加载纹理包可能导致卡顿\"><red><bold>点击这里</bold></hover></click> <red>来重试，或输入命令 <bold>/o pack</bold> 并从网络下载材质包。"
      # 如果需要执行命令
      commands:
        console: []
        player: []
        opped_player: []
```

## 配置工具

```YAML
  enable_configs_updater: true
  error_item:
    material: PODZOL
    excludeFromInventory: false # 若不需要在背包中显示，请将其设置为 true
    injectID: false
```

## 自定义盔甲

```YAML
CustomArmor:
  disable_leather_repair: true
```

该选项允许你禁用皮革盔甲对自定义装备的修复。

这意味着修复自定义装备的唯一方式就是获取相同样式的另一套盔甲。

## 杂项

### hide_scoreboard_numbers

该选项可隐藏红色的计分板数字。

```YAML
    hide_scoreboard_numbers: true
```

### reset_recpies

```YAML
reset_recipes: true
```

该选项可能导致本插件与其他自定义合成插件冲突。若你注意到其他插件在 Oraxen 重载时出现漏洞，你可以试着禁用这个选项。若你这么做，你需要重启服务器才可刷新 Oraxen 的配方。

## Oraxen 界面

```YAML
oraxen_inventory:
  main_menu_title: "<shift:-18><glyph:menu_items><shift:-193>"
  menu_rows: 6
  menu_layout:
    armors:
      slot: 1
      icon: emerald_chestplate
      title: "<main_menu_title><#362753><glyph:menu_items_overlay:colorable>"
    blocks:
      slot: 2
      icon: orax_ore
      title: "<main_menu_title><#EDCDEB><glyph:menu_items_overlay:colorable>"
    furniture:
      slot: 3
      icon: chair
      title: "<main_menu_title><#F2F2F2><glyph:menu_items_overlay:colorable>"
    flowers:
      slot: 4
      icon: dailily
      title: "<main_menu_title><#bf332c><glyph:menu_items_overlay:colorable>"
    hats:
      slot: 5
      icon: crown
      title: "<main_menu_title><#81B125><glyph:menu_items_overlay:colorable>"
    items:
      slot: 6
      icon: ruby
      title: "<main_menu_title><#DA2E45><glyph:menu_items_overlay:colorable>"
    mystical:
      slot: 7
      icon: legendary_hammer
      title: "<main_menu_title><#9AB2E4><glyph:menu_items_overlay:colorable>"
    plants:
      slot: 8
      icon: weed_leaf
      title: "<main_menu_title><#44C886><glyph:menu_items_overlay:colorable>"
    skins:
      slot: 9
      icon: wood_sword
      title: "<main_menu_title><#C48E40><glyph:menu_items_overlay:colorable>"
    tools:
      slot: 10
      icon: iron_serpe
      title: "<main_menu_title><#FFFFFF><glyph:menu_items_overlay:colorable>"
    weapons:
      slot: 11
      icon: energy_crystal_sword
      title: "<main_menu_title><#2FB6FF><glyph:menu_items_overlay:colorable>"
```

该部分配置允许你配置 Oraxen 界面的内容。你可以在这里使用 Oraxen ID 或 Minecraft 原版材料名称。