# 阶段（Stage）

\* 配置类型需要 `biome-provider-pipeline-v2` 附属才可使用

## 类型

不同类型的 `Stage` 有着不同的行为，有时还有额外的配置参数可以控制它们。

类型通过配置参数 <badge type="info" text="type" /> 决定。如果两个附属使用了同一种类型名称，你可以在类型前加上 `附属名称:` 区分。

可用的 `Stage` 如下所示：

- - -

### FRACTAL_EXPANDING

增加前一阶段的精确度，同时为其添加额外的 `fuzzy-ness`。

这个方法需要先将原本的[流水线群系](pipelinebiome.md)隔开，然后在空缺的部分填上附近的随机流水线群系。

假设这里有 2x2 的 流水线群系：

<center>
  <table>
  <tbody>
    <tr>
      <td><b>a</b></td>
      <td><b>b</b></td>
    </tr>
    <tr>
      <td><b>c</b></td>
      <td><b>d</b></td>
    </tr>
  </tbody>
  </table>
</center>

应用拓展器以后会让它变为如下的 3x3 网格：

<center>
  <table>
  <tbody>
    <tr>
      <td><b>a</b></td>
      <td><b>a</b> 或 <b>b</b></td>
      <td><b>b</b></td>
    </tr>
    <tr>
      <td><b>a</b> 或 <b>c</b></td>
      <td><b>a</b>、<b>b</b>、<b>c</b> 或 <b>d</b></td>
      <td><b>b</b> 或 <b>d</b></td>
    </tr>
    <tr>
      <td><b>c</b></td>
      <td><b>c</b> 或 <b>d</b></td>
      <td><b>d</b></td>
    </tr>
  </tbody>
  </table>
</center>

<badge type="info" text="sampler" /> [噪声采样器](noisesampler.md) - 用于随机选择使用的流水线群系。

噪声采样器的输出应当是均匀分布在 [-1, 1] 范围内的值。通常情况下只有 `WHITE_NOISE` 可以直接使用它。

#### 示例

``` YAML
stages:
  - type: FRACTAL_EXPAND
    sampler:
      type: WHITE_NOISE
```

### SMOOTH

平滑[流水线群系](pipelinebiome.md)之间的粗糙边缘。

<center>
  <table>
  <tbody>
    <tr>
      <td></td>
      <td><b>a</b></td>
      <td></td>
    </tr>
    <tr>
      <td><b>b</b></td>
      <td><b>x</b></td>
      <td><b>c</b></td>
    </tr>
    <tr>
      <td></td>
      <td><b>d</b></td>
      <td></td>
    </tr>
  </tbody>
  </table>
</center>

* 若 `a=d` 且 `b=c`，`x` 会被随机替换为 `a` 或 `c`。 
* 否则，若只有 `a=d`，则 `x` 会被替换为 `a`。
* 否则，若只有 `b=c`，则 `x` 会被替换为 `b`。
* 其他情况下，`x` 不会被替换。

<badge type="info" text="sampler" /> [噪声采样器](noisesampler.md) - 用于随机选择使用的流水线群系。

噪声采样器的输出应当是均匀分布在 [-1, 1] 范围内的值。通常情况下只有 `WHITE_NOISE` 可以直接使用它。

#### 示例

``` YAML
stages:
  - type: SMOOTH
    sampler:
      type: WHITE_NOISE
```

### REPLACE

将带有指定[标签](tag.md)的[流水线群系](pipelinebiome.md)，[根据](../../config-development/noise/index.md)所用的[噪声采样器](noisesampler.md)替换为[权重列表](weightedlist.md)中的流水线群系。

<badge type="info" text="from" /> [标签](tag.md) - 包含这些标签的群系会被替换。

<badge type="info" text="sampler" /> [噪声采样器](noisesampler.md) - 用于分布群系的采样器。

<badge type="info" text="to" /> [权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)> - 替换带有 `from` 列表中标签的群系的群系名称。

#### 示例

``` YAML
stages:
  # 将平原群系随机替换为森林与平原群系
  - type: REPLACE
    from: PLAINS
    to:
      - FOREST: 1
      - PLAINS: 2
    sampler:
      type: WHITE_NOISE
```

### REPLACE_LIST

与 [REPLACE](#replace) 阶段相同，但需要将一组额外的[流水线群系](pipelinebiome.md)映射至权重列表中的流水线群系。这便于多个使用了同种噪声采样器的连续 `REPLACE` 阶段合并。

<badge type="info" text="default-from" /> [标签](tag.md) - 被替换的群系必须包含的标签。

<badge type="info" text="default-to" /> [权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)> - 替换带有标签群系的流水线群系列表。

<badge type="info" text="sampler" /> [噪声采样器](noisesampler.md) - 用于分布流水线群系的噪声采样器。

<badge type="info" text="to" /> [映射表](map.md)<[流水线群系](pipelinebiome.md)，[权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)>> - 额外的映射表，用于将流水线群系替换为权重列表中的流水线群系。

::: info

替换映射来自于流水线群系，**不是**标签！

:::

#### 示例

``` YAML
stages:
  # 将带有 USE_SPECIAL_BIOME 替换为 SPECIAL 群系
  # 将 FOREST 和 PLAINS 分别替换为 SPECIAL_FOREST 和 SPECIAL_PLAINS。
  - type: REPLACE_LIST
    default-from: USE_SPECIAL_BIOME
    default-to:
      - SELF: 5 # 'SELF' 流水线群系会将目标替换为自身s
      - SPECIAL: 1
    to:
      FOREST:
        - SELF: 5
        - SPECIAL_FOREST: 1
      PLAINS:
        - SELF: 5
        - SPECIAL_PLAINS: 1
    sampler:
      type: WHITE_NOISE
```

### BORDER

将带有指定[标签](tag.md)且贴近指定带标签群系边缘的[流水线群系](pipelinebiome.md)，[根据](../../config-development/noise/index.md)所用的[噪声采样器](noisesampler.md)替换为[权重列表](weightedlist.md)中的流水线群系。

<badge type="info" text="from" /> [标签](tag.md) - 被替换的边缘流水线群系所需包含的标签。

<badge type="info" text="replace" /> [标签](tag.md) - 被替换的流水线群系所需包含的标签。

<badge type="info" text="sampler" /> [噪声采样器](noisesampler.md) - 分布流水线群系所用的噪声采样器。

<badge type="info" text="to" /> [权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)>> - 替换的流水线群系列表。

### BORDER_LIST

与 [BORDER](#border) 阶段相同，但需要将一组额外的[流水线群系](pipelinebiome.md)映射至权重列表中的流水线群系。这便于多个使用了同种噪声采样器的连续 `REPLACE` 阶段合并。

<badge type="info" text="default-replace" /> [标签](tag.md) - 被替换的群系必须包含的标签。

<badge type="info" text="default-to" /> [权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)> - 替换带有标签群系的流水线群系列表。

<badge type="info" text="from" /> [标签](tag.md) - 被替换的边缘流水线群系所需包含的标签。

<badge type="info" text="replace" /> [映射表](map.md)<[流水线群系](pipelinebiome.md)，[权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)>> - 额外的映射表，用于将流水线群系替换为权重列表中的流水线群系。

::: info

替换映射来自于流水线群系，**不是**标签！

:::

<badge type="info" text="sampler" /> [噪声采样器](noisesampler.md) - 用于分布流水线群系的噪声采样器。

#### 示例

``` YAML
stages:
  # 替换带有 LAND 标签，边缘为 OCEAN 与 BEACH 的群系
  # 对 JUNGLE 特殊处理，替换为 JUNGLE_BEACH，MUSHROOM_PLAINS 替换为 MUSHROOM_BEACH。
  - type: BORDER
    default-replace: LAND
    from: OCEAN
    default-to: BEACH # 只包含一个元素的权重列表可以像这样定义
    replace:
      JUNGLE: JUNGLE_BEACH
      MUSHROOM_PLAINS: MUSHROOM_BEACH
    sampler:
      type: CONSTANT # 因为每个映射中只有一个元素，我们可以直接使用 CONSTANT
```

## 用途

只有一个参数用到：

* BiomeProvider 中的 PIPELINE：

  <badge type="" text="pipeline.stages" /> [列表](list.md)<[阶段](stage.md)> - 逐渐应用的阶段列表。