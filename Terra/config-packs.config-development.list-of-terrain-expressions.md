# 地形表达式列表

下文是一些你可以放进世界生成中的示例地形表达式。

如果你还没有准备好，请先阅读“[从零编写地形](config-packs.config-development.creating-a-pack-from-scratch.creating-terrain-from-scratch.md)”和“[从零编写地形包](config-packs.config-development.creating-a-pack-from-scratch.creating-a-pack-from-scratch.md)”章节。

如下的地形表达式可以在 Terra 内置的默认地形包中找到，也可以在 [Github](https://github.com/PolyhedralDev/TerraOverworldConfig/) 中浏览。

## 平原

``` YAML title="eq_plain.yml"
# 基础的平坦地形。

vars: &variables
  base: 64
  height: 10

terrain:
  sampler:
    type: EXPRESSION
    dimensions: 3
    variables: *variables
    expression: -y + base

  sampler-2d:
    dimensions: 2
    type: EXPRESSION
    variables: *variables
    expression: (simplex(x, z)+1)/2 * height
    samplers:
      simplex:
        dimensions: 2
        type: FBM
        octaves: 4
        sampler:
          type: OPEN_SIMPLEX_2
          frequency: 0.0075
```

## 沙漠

``` YAML title="eq_desert.yml"
# 平坦的低海拔沙漠地形


vars: &variables
  base: 64 # 基础地形 Y 轴
  groundHeight: 5 # 基础噪声的方块高度

  duneHeight: 10 # 沙丘的高度
  duneSpacing: 20 # 数字越大 = 沙丘之间间隔越大
  duneFrequency: 0.7 # 平均沙丘频率
  duneRotationRange: pi/3 # 沙丘单元随机旋转的数量, 0 = 各向异性, pi = 各向同性

terrain:
  sampler:
    dimensions: 3
    type: EXPRESSION
    variables: *variables
    expression: -y + base

  sampler-2d:
    dimensions: 2
    type: EXPRESSION
    variables: *variables
    expression: |
      duneHeight * dunes(x*duneFrequency, z*duneFrequency) * ((duneHeightVariation(x,z)/4)+0.75)
      + groundHeight * (ground(x, z)+1)/2
    samplers:
      duneHeightVariation:
        dimensions: 2
        type: FBM
        octaves: 2
        sampler:
          type: OPEN_SIMPLEX_2
          frequency: 0.02
      dunes: # 沙丘高度表 [0, 1]
        dimensions: 2
        type: DOMAIN_WARP
        amplitude: 5
        warp:
          type: OPEN_SIMPLEX_2
          frequency: 0.04
        sampler:
          type: DOMAIN_WARP
          amplitude: 15
          warp:
            type: OPEN_SIMPLEX_2
            frequency: 0.02
            salt: 1
          sampler: # 绝对正弦波域通过 CELL_VALUE 旋转, 单位边缘通过 DISTANCE_2_DIV 隐藏。 
            type: EXPRESSION
            variables: *variables
            expression: |
              -mask(x, z) * (-|sin((
                 x*sin(rotation(x,z)*duneRotationRange)
                +z*cos(rotation(x,z)*duneRotationRange))/duneSpacing)|+1)
            samplers:
              height: &cell
                dimensions: 2
                type: CELLULAR
                frequency: 0.01
              rotation:
                <<: *cell
                return: CellValue
              mask:
                <<: *cell
                return: Distance2Div

      ground:
        dimensions: 2
        type: FBM
        sampler:
          type: OPEN_SIMPLEX_2
          frequency: 0.005
```

## 山脉

``` YAML title="eq_mountains.yml"
# 基础的尖峭山峰.

vars: &variables
  base: 80
  height: 150

terrain:
  sampler:
    dimensions: 3
    type: EXPRESSION
    variables: *variables
    expression: -y + base
    samplers:
  sampler-2d:
    dimensions: 2
    type: EXPRESSION
    expression: (noise(x, z)+1)/2 * height
    variables: *variables
    samplers:
      noise:
        dimensions: 2
        type: DOMAIN_WARP
        amplitude: 5
        warp:
          type: OPEN_SIMPLEX_2
          frequency: 0.03
        sampler:
          type: FBM
          octaves: 4
          sampler:
            type: LINEAR
            min: -1
            max: 0.2
            sampler:
              type: CELLULAR
              frequency: 0.008
```

## 悬崖

``` YAML title="eq_overhangs.yml"
# 破碎的山丘

vars: &variables
  base: 80
  height: 35
  shatterHeight: 78

terrain:
  sampler:
    dimensions: 3
    type: EXPRESSION
    variables: *variables
    expression: -y + base + (simplex(x, z)+1)/2 * height + |shatter(x/3, y, z/3)*shatterHeight|
    samplers:
      shatter:
        type: CLAMP
        min: -1
        max: 1
        dimensions: 3
        sampler:
          type: FBM
          dimensions: 3
          octaves: 4
          sampler:
            type: OPEN_SIMPLEX_2
            frequency: 0.025
      simplex:
        dimensions: 2
        type: FBM
        octaves: 4
        sampler:
          type: OPEN_SIMPLEX_2
          frequency: 0.0075
```

::: tip

你可以在默认主世界地形包中找到更多的地形采样器，这些文件同样可以在 [Github](https://github.com/PolyhedralDev/TerraOverworldConfig/) 中浏览。

:::