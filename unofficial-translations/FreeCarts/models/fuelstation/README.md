# 🛢️ FreeCarts 加油站模型指南书

欢迎打开加油站模型文件夹！这个教程会帮助你创建、导入本插件的自定义加油站方块展示实体模型。

---

## 📁 文件夹结构

你可以为模型创建子文件夹，使其更加便于管理：
```
models/fuelstation/
├── README.md (本文件)
├── modern/
│   ├── neon_pump.txt
│   ├── neon_pump.meta
│   └── glass_station.txt
├── vintage/
│   ├── old_pump.txt
│   └── old_pump.meta
├── simple/
│   └── basic_pump.txt
└── my_custom_model.txt
```

**注意：** 子文件夹下的模型在命令中的格式为 `subfoldername/modelname`。

---

## 🎨 创建自定义模型

### 第一步：在 BDEngine 中制作模型

1. 打开 **[BDEngine](https://bdengine.app/)** 网站（免费的方块展示实体编辑器）
2. 制作加油站模型
3. **注意：** 需要在 BDEngine 中将模型设置为居中
4. 从 BDEngine 将模型以 summon 命令的形式导出

### 第二步：保存模型文件

1. 在这个文件夹下新建一个 `.txt` 文件（如 `my_pump.txt`）
2. 将刚才复制的 BDEngine summon 命令粘贴进文件
3. 以 `#` 开头的内容会被视为注释

**示例文件 (`my_pump.txt`):**
```txt
# 自定义加油站
# 模型作者：Mavencraft
# 制作日期：2025-01-15

/summon block_display ~0 ~0 ~0 {block_state:{Name:"minecraft:red_concrete"},transformation:[1f,0f,0f,0f,0f,2f,0f,0f,0f,0f,1f,0f,0f,0f,0f,1f]}
```

### 第三步：创建元数据文件（可选，推荐）

创建与模型同名的 `.meta` 格式文件（如 `my_pump.meta`）：
```txt
# my_pump 模型的元数据文件

name: 我的加油站
hitbox: 2,1,3
```

**元数据选项：**
- `name:` 在游戏中展示的模型样式
- `hitbox:` 点击检测范围，单位为格（格式：`X 轴宽度,Z 轴宽度,高度`）
  - 示例：`2,1,3` = 2 格宽（X 轴），1 格宽（Z 轴），3 格高

---

## 📥 导入模型

### 游戏内命令

1. **导入模型：**
```
   /freecart fuelstation model import <文件名称>
```
   - 示例：`/freecart fuelstation model import my_pump`
   - 如果在子文件夹中：`/freecart fuelstation model import modern/neon_pump`

2. **列出可用模型：**
```
   /freecart fuelstation model list
```

3. **检查当前使用的模型：**
```
   /freecart fuelstation model info
```

4. **获取自定义碰撞箱的加油站物品：**
```
   /freecart fuelstation give <X 轴宽度,Z 轴宽度,高度>
```
   - 示例：`/freecart fuelstation give 3,2,4`
   - 如果为模型在 `.meta` 文件中设置了碰撞箱，那么插件会自动使用它

---

## 💡 提示 & 推荐

### 一个模型 多个实体
你可以在文件中使用多行 summon 命令，用于制作更复杂的模型：
```txt
# 多部件加油站
/summon block_display ~0 ~0 ~0 {block_state:{Name:"minecraft:red_concrete"},...}

/summon text_display ~0 ~2 ~0 {text:'{"text":"GAS"}',transformation:[...]}

/summon armor_stand ~0 ~0 ~0 {NoGravity:1b,Invisible:1b,...}
```

**注意：** 可以在命令之间空一行使其更清晰。

### 碰撞箱教程
- **小油站：** `1,1,2`（1x1 占地，2 格高）
- **中型油站：** `2,2,3`（2x2 占地，3 格高）
- **大型油站：** `3,3,4`（3x3 占地，4 格高）

碰撞箱以你放置的加油站方块为中心。

### 模型朝向
- 默认情况下，模型应当**面朝正 X 轴**
- 放置时玩家无法改变其朝向
- 如果模型显示错误，尝试在 BDEngine 重建或调整旋转角度

### 测试模型
1. 通过命令导入模型：`/freecart fuelstation model import your_model`
2. 获取加油站物品：`/freecart fuelstation give`
3. 在游戏内放置，点击交互，测试加油功能
4. 若有需要，打开或创建 `.meta` 编辑默认碰撞箱

---

## 🔧 问题排除

### 模型生成失败
- 检查 `.txt` 中的 summon 命令是否有效
- 确保命令以 `summon` 或 `/summon` 开头
- 检查实体名称或 NBT 数据中是否存在拼写错误

### 模型生成位置错误
- 确保你的模型在 BDEngine 的编辑器中位于 `0,0,0`
- 检查拉伸数值

### 无法点击加油
- 碰撞箱过小或未对齐
- 可尝试创建或编辑 `.meta`，新增或调整 `hitbox:` 的值
- 尝试拉大碰撞箱（如 `3,3,3`）

### 重启后模型小时
- 加油站与其模型会自动刷新
- 如果模型消失，检查后台是否报错
- 如有需要可尝试重新导入模型

### 子文件夹下的模型不显示
- 确保文件夹结构正确
- 在命令中使用正斜杠，而非反斜杠：例如，用 `modern/pump` 代替 `modern\pump`
- 模型文件必须为 `.txt` 格式

---

## 📦 内置示例模型

插件内置的模型有：
- `twin_pump(towards-x).txt` - 2x1x2 大小，面朝 X 轴的加油站
- `twin_pump(towards-z).txt` - 1x2x2 大小，面朝 Z 轴的加油站
- `gas_pump(towards-x).txt` - 1x1x2 大小，面朝 X 轴的加油站
- `gas_pump(towards-z).txt` - 1x1x2 大小，面朝 Z 轴的加油站

每个模型都有设置了默认碰撞箱的 `.meta` 文件。

---

## 🆘 需要帮忙？

- **插件文档：** 浏览 FreeCarts 的 [维基页面](https://github.com/HiddeNBinary/freecarts-docs/wiki/)
- **技术支持：** 可以进入 Discord 聊天群组获取帮助
- **BDEngine 帮助手册：** 浏览 [bdengine.app](https://bdengine.app/) 获取教程

---

## 📝 提交模型

做了一个巨好看的模型？来和我们分享吧！
1. 导出模型及元数据文件
2. 拍摄截图
3. 提交到我们的 Discord 聊天群组

---

**祝你制作顺利！🎨⛽**