# 耕作机制

## 运作原理

Oraxen 有一个种植作物的系统，能够显示多个植物生长的阶段，下文为示例。

```YAML
rose_plant:
  displayname: "<gradient:#46EEAA:#2CBFC7>玫瑰丛"
  material: COOKED_BEEF
  Pack:
    generate_model: false
    model: custom/plants/rose_stage_1

rose_seed:
  displayname: "<gradient:#46EEAA:#2CBFC7>玫瑰种子"
  material: PAPER
  Mechanics:
    furniture:
      item: rose_plant_stage1
      barrier: false
      farmblock_required: true
      dryout: 10000
      evolution:
        delay: 10000
        probability: 0.5
        light_boost: true
        next_stage: rose_plant_stage1
      drop:
        silktouch: true
        loots:
          - { oraxen_item: rose_seed, probability: 1.0 }
  Pack:
    generate_model: false
    model: custom/plants/rose_stage_1
```

## 第一个生长阶段

```YAML
rose_plant_stage1:
  material: PAPER
  Mechanics:
    furniture:
      barrier: false
      farmblock_required: true
      dryout: 10000
      evolution:
        delay: 10000
        probability: 0.5
        light_boost: true
        next_stage: rose_plant_stage2
      drop:
        silktouch: true
        loots:
          - { oraxen_item: weed_seed, probability: 1.0 }
  Pack:
    generate_model: false
    model: custom/plants/rose_stage_1
```

## 第二个生长阶段

```YAML
rose_plant_stage2:
  material: PAPER
  Mechanics:
    furniture:
      barrier: false
      farmblock_required: true
      dryout: 10000
      evolution:
        delay: 10000
        probability: 0.5
        light_boost: true
        next_stage: rose_plant_stage3
      drop:
        silktouch: true
        loots:
          - { oraxen_item: weed_seed, probability: 1.0 }
  Pack:
    generate_model: false
    model: custom/plants/rose_stage_2
```

## 第三个生长阶段

```YAML
rose_plant_stage2:
  material: PAPER
  Mechanics:
    furniture:
      barrier: false
      farmblock_required: true
      dryout: 10000
      evolution:
        delay: 10000
        probability: 0.5
        light_boost: true
        next_stage: rose_plant_stage3
      drop:
        silktouch: true
        loots:
          - { oraxen_item: weed_seed, probability: 1.0 }
  Pack:
    generate_model: false
    model: custom/plants/rose_stage_2
```

作物能有你设置的三个阶段，每个阶段都必须为你而非插件制作的模型才可正常生效。现在让我们来解释每个机制。

**farmland_required** 它必须被放置在耕地上。

**delay** 生长至下一阶段的延迟

**probability** 当延迟过后生长至下一阶段的概率

**light_boost** 光照时的生长速度增幅

**next_stage** 指定作物的下一阶段，它必须为已存在的 Oraxen 物品。

**farmblock_required** 该设置的详细教程可在[对应的章节](mechanics.furniture-mechanic.farming-mechanic.md)查看。