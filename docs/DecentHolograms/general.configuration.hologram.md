# 悬浮字
编辑悬浮字文件

如下为示例悬浮字文件，你可以在 DecentHolograms 的 `holograms` 文件夹下找到。  
在你可以手动编辑文档时，推荐[使用命令](general.commands.md)，这样可以防止配置格式不正确导致的错误。

## 示例

``` YAML [hologram.yml]
location: world:0.500:100.0:0.500
enabled: true
display-range: 64
update-range: 64
update-interval: 20
facing: 0.0
down-origin: false
pages:
- lines:
  - content: "页行"
    height: 0.3
    offsetX: 0.0
    offsetZ: 0.0
  actions:
    RIGHT:
    - MESSAGE:你按下了右键
    SHIFT_RIGHT:
    - MESSAGE:你按下了Shift+右键
    LEFT:
    - MESSAGE:你按下了左键
    SHIFT_LEFT:
    - MESSAGE:你按下了Shift+左键
```

## 选项

### `location`

* **类型**：字符串
* 表示悬浮字所处位置。格式为 `<世界名称>:<x>:<y>:<z>`。

### `enabled`

* **类型**：布尔值（`true`/`false`）
* 表示是否启用悬浮字。

### `display-range`

* **类型**：整数
* 设置悬浮字显示的最大范围。  
  需要注意的是，这个选项可能会被服务器和客户端的实体渲染距离影响。

### `update-range`

* **类型**：整数
* 设置悬浮字保持更新的最大范围。
  离开设定范围后会导致其内的悬浮字停止更新，除非你再次走入它的刷新范围。

### `update-interval`

* **类型**：整数
* 设置悬浮字刷新诸如变量等内容的间隔（单位为刻）。

### `facing`

* **类型**：浮点数
* 设置实体或（小）头颅的位置朝向。
  参数见下表。

|值|方位|
|---|---|
|`0.0`|南|
|`90.0` 或 `-270.0`|西|
|`180.0` 或 `-180.0`|北|
|`270.0` 或 `-90.0`|东|

### `down-origin`

* **类型**：布尔值
* 设置为 true 时，悬浮字的 [`location`](#location) 会由其最低位置而非最高位置决定。  
  除此之外，新插入的悬浮字行会从最下方将悬浮字往上顶起。

### `pages`

* **类型**：列表
* 包含悬浮字的每一页及其内容。每个选项在下文会有解释。

#### `pages[*].lines`

* **类型**：列表
* 包含悬浮字的每一行内容。

##### `pages[*].lines[*].content`

* **类型**：字符串
* 悬浮字的内容。其中的特殊行类型及其格式请见“[格式与颜色](general.formats-colors.md)”章节。

##### `pages[*].lines[*].height`

* **类型**：浮点数
* 设置其他行与该行之间的间距。
  默认行间距会随行类型改变。数据如下：

|行类型|配置键|默认值|
|---|---|---|
|`<文本>`|`defaults.height.text`|`0.3`|
|`#ICON`|`defaults.height.icon`|`0.6`|
|`#HEAD`|`defaults.height.head`|`0.75`|
|`#SMALLHEAD`|`defaults.height.smallhead`|`0.6`|

##### `pages[*].lines[*].offsetX`

* **类型**：浮点数
* 设置行在 X 轴上的偏移量。距离相对悬浮字中心计算，范围为 `-2.5` 至 `2.5`。

##### `pages[*].lines[*].offsetZ`

* **类型**：浮点数
* 设置行在 Z 轴上的偏移量。距离相对悬浮字中心计算，范围为 `-2.5` 至 `2.5`。

#### `pages[*].actions`

* **类型**：配置部分
* 包含单独的[点击类型](general.actions.md#点击类型)，可触发不同的操作。

##### `pages[*].actions.RIGHT`

* **类型**：字符串列表
* 右键点击悬浮字时触发的[动作](general.actions.md)。

##### `pages[*].actions.SHIFT_RIGHT`

* **类型**：字符串列表
* Shift + 右键点击悬浮字时触发的[动作](general.actions.md)。

##### `pages[*].actions.LEFT`

* **类型**：字符串列表
* 左键点击悬浮字时触发的[动作](general.actions.md)。

##### `pages[*].actions.SHIFT_LEFT`

* **类型**：字符串列表
* Shift + 左键点击悬浮字时触发的[动作](general.actions.md)。