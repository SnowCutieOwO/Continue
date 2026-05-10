# 🔨 示例悬浮字
悬浮字示例

这里是一些示例悬浮字，你可以将它们下载并放入服务器中。

## 将悬浮字安装至服务器

1. 复制示例代码
2. 在 `plugin/DecentHolograms/holograms/` 下创建一个 YAML 文件
3. 将复制的代码粘贴至 YAML 中。
4. 保存改动，并输入命令 `/dh reload`

## 页面

<Links
  :grid="2"
  :items="[
    {
      name: '示例 - 演示',
      desc: '包含多个示例功能的悬浮字配置',
      link: 'example-demo'
    },
    {
      name: '示例 - 实体',
      desc: '包含实体的悬浮字配置',
      link: 'example-entity'
    },
    {
      name: '示例 - 带偏置的配方',
      desc: '展示 Minecraft 合成配方的悬浮字',
      link: 'example-recipe-with-offsets'
    },
    {
      name: '示例 - 树',
      desc: '拼成一棵树的悬浮字配置',
      link: 'example-tree'
    },
    {
      name: '示例 - 动作',
      desc: '包含点击触发动作的悬浮字文件',
      link: 'example-actions'
    }
  ]"
/>