# 家具机制

如何向游戏内添加非实心方块

## 家具机制

![img](images/image48.png '示例家具')

### 单物品示例配置

```YAML
table:
  displayname: "<gray>Table"
  material: DIAMOND
  Pack:
    generate_model: false
    model: default/table
  Mechanics:
    furniture:
      type: DISPLAY_ENTITY # 有效类型为 ITEM_FRAME, DISPLAY_ENTITY & GLOWING_ITEM_FRAME
      block_sounds:
        place_sound: block.stone.place
        break_sound: block.stone.break
        hit_sound: my.custom.hitsound     # 在 Oraxen/sound.yml 中预先定义的自定义音效
        step_sound: my.custom.stepsound   # 同样需要 Oraxen/pack-folder 拥有对应的声音文件
        fall_sound: my.custom.fallsound
      barrier: true
      drop:
        silktouch: false
        loots:
          - { oraxen_item: table, probability: 1.0 }
```

### 自定义声音

如自定义方块的家具，能拥有自定义声音。

当前版本，你可以设置的音效包括被放置、被破坏、损坏中、（走在其上的）脚步声、（摔在其上的）踩地声。

```YAML
Mechanics:
  furniture:
    block_sounds:
      place_sound: block.stone.place
      break_sound: block.stone.break
      hit_sound: my.custom.hitsound     # 在 Oraxen/sound.yml 中预先定义的自定义音效
      step_sound: my.custom.stepsound   # 同样需要 Oraxen/pack-folder 拥有对应的声音文件
      fall_sound: my.custom.fallsound
```

所有音量与音调值都与 Minecraft 对方块使用的设置相同。

若你想要修改音调或音量，你可以参考下列的格式。

需要注意的是，这两种格式是相互兼容的。

我们推荐使用默认的那个，但你仍然可以选择修改这些选项。

```YAML
Mechanics:
  furniture:
    block_sounds:
      place:
        sound: block.stone.place
        volume: 1.0
        pitch: 0.2
      break_sound: block.stone.break
      hit_sound: my.custom.hitsound     # 在 Oraxen/sound.yml 中预先定义的自定义音效
      step_sound: my.custom.stepsound   # 同样需要 Oraxen/pack-folder 拥有对应的声音文件
      fall_sound: my.custom.fallsound
```

### 可旋转

若要让一个家具能够旋转，你只需将如下内容添加至物品设置中即可。

```YAML
Mechanics:
  furniture:
    rotatable: true
```

### ModelEngine 家具

若要将 ModelEngine 的模型用作家具，只需将下文内容添加至你的物品设置中即可：

```YAML
Mechanics:
  furniture:
    modelengine_id: name_of_your_bbmodel_file
```

### 唱片机

这个选项能让家具放入音乐唱片，还能支持播放自定义唱片。

你可以调整唱片机中的 `volume`（音量）与 `pitch`（音调）。

这里也有一个 `permission` 设置，这可以用来限制特定的玩家才可使用唱片机。

默认情况下权限一栏为空，即表示任何人都可以使用唱片机播放音乐。


```YAML
Mechanics:
  furniture:
    jukebox:
      volume: 1.0
      pitch: 1.0
      permission: "oraxen.jukebox.play"
```

### 屏障

拥有隐形特性的屏障方块可以给家具添加碰撞箱。你可以放置单个屏障，或是一系列位置相对于放置玩家的屏障。

#### 单屏障：

```YAML
Mechanics:
  furniture:
    barrier: true
```

#### 多屏障：

```YAML
Mechanics:
  furniture:
      barriers:
        - origin # 简写为 { x: 0, y: 0, z: 0 }
        - z: 1 # 若未指定，坐标为 0 -> { x: 0, y: 0, z: 1 }
        - z: 2
        - x: 1
        - { x: 1, z: 1 }
        - x: 1
          z: 2
```

## 座位

这个功能仅在上述的屏障功能启用时有效。

目前，即使存在多个屏障，它也会为每个屏障生成一个座位。

```YAML
Mechanics:
  furniture:
    seat: { height: 0.5 }
```

你也可以通过添加一个 `yaw` 设置来按需修改旋转位置。

需要注意的是，这部分一般不推荐你修改。

```YAML
Mechanics:
  furniture:
    seat: { height: -0.5, yaw: 90 }
```

## 限制旋转

你可以通过 `restricted_rotation` 选项限制某个家具的 `roration-facings`。

它可以设置为 `STRICT` 或 `VERY_STRICT`。前者只允许如头颅般旋转 8 个位置，而后者只允许旋转 4 个位置。

```YAML
chair:
  Mechanics:
    furniture:
      restricted_rotation: VERY_STRICT # 若未指定则为 STRICT
```

## 限制放置

你可以在 `limited_placing` 部分设置中决定自定义方块/家具可以被放在哪些方块上。你可以使用诸如 `roof`、`floor` 和 `wall` 的选项来决定能被放在方块的哪一面。默认情况下这些都会被设置为 `true`。

`type` 参数决定了拒绝模式为白名单或黑名单。

若为 `ALLOW`，则只有列表内的方块能够依附它们。

若为 `DENY`，则列表内的方块不能被它们依附。

这里也存在着一个 `radius_limitation` 选项，允许你限制指定半径内家具的数量。

```YAML
chair:
  Mechanics:
    furniture:
      limited_placing:
        radius_limitation:
          radius: 20
          amount: 10
        roof: false
        floor: true
        wall: false
        type: ALLOW
        block_types:
          - GRASS_BLOCK
          - DIRT
        block_tags:
          - base_stone_nether
        oraxen_blocks:
          - chair
          - ruby_ore
```

`block_tags`（方块标签）可填入的内容能在[这里](https://minecraft.fandom.com/wiki/Tag#Block_tags)找到。适用于拒绝/允许一系列有指定标签的方块。

`block_types` 即为材料名称。适用于拒绝/允许指定的方块。

`oraxen_blocks` 为 Oraxen 配置中定义的方块。

允许所有自定义方块与家具填入此处，但家具必须设置 `barrier-hitbox`（屏障碰撞箱）。

## 容器

这是家具与音符盒机制的一个子机制，允许你将自定义方块设置为容器。

例如箱子、衣柜或其他什么的方块。

这里有你能选择的不同类型：*STORAGE*、*PERSONAL*、*ENDERCHEST* 与 *DISPOSAL*。

**STORAGE** 与普通箱子类型，任何玩家都可以打开并存取物品。

**PERSONAL** 类似自定义末影箱，允许你自行决定行数等内容。

**ENDERCHEST** 就是原版的末影箱，但允许你通过指定的自定义方块或家具打开它们。

**DISPOSAL** 即为自定义垃圾桶，你可以向其中丢入物品，关闭界面后它们会被销毁。

::: info 提示
如果你使用的是家具，则它必须拥有屏障碰撞箱！
:::

### 光照

你可以设置家具发光。这个选项对应了光强，且值必须处于 1 至 15 间。

```YAML
Mechanics:
  furniture:
    barrier: true
    light: 5
    drop:
      silktouch: false
      loots:
        - { oraxen_item: table, probability: 1.0 }
```

### BlockLocker

你可以通过这个选项来允许容器被 [BlockLocker](https://www.spigotmc.org/resources/blocklocker.3268/) 的锁保护。

有效的保护类型为 CONTAINER、DOOR、ATTACHABLE。

```YAML
Mechanics:
  furniture:
    blocklocker:
      can_protect: true
      protection_type: CONTAINER
```