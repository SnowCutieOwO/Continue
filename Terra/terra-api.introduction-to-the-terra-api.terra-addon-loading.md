# 载入 Terra 附属

本章节解释了 Terra 中的附属载入机制。本页不直接与开发 Terra 附属相关，你可以选择略过。但是，知晓加载过程对开发有利。

Terra 附属载入过程可以简要分为两个阶段：

## 1. Bootstrap 附属载入

Terra 本身能够载入的附属只有 Bootstrap 附属。Bootstrap 附属载入器是一个最小化的附属载入；它会为 `Terra-Bootstrap-Addon-Entry-Point` 属性检测所有发现的 bootstrap 附属 Jar 的验证文件（位于 `addons/bootstrap` 文件夹），然后尝试载入并实例化 [BootstrapBaseAddon](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/addon/bootstrap/BootstrapBaseAddon.html) - 实现属性中指定的类。

### Bootstrap 附属初始化

在所有 bootstrap 附属载入完毕后，`#initialize` 方法会在各自附属实例上调用。在初始化过程中，bootstrap 附属载入额外的附属，但*不会将它们初始化*。

## 2. 附属初始化

在 bootstrap 附属载入各自的附属之后，新载入的附属必须初始化。

### 依赖整理

首先，检查附属的依赖。如果缺失或指定版本无效，或者发生了循环载入情况，都会导致载入失败。

随后，附属会按载入依赖排列为[有向无环图](https://zh.wikipedia.org/wiki/%E6%9C%89%E5%90%91%E6%97%A0%E7%8E%AF%E5%9B%BE)。这个图标会用于决定附属的载入顺序，确保依赖先于对应附属载入。

#### 初始化

在附属的载入顺序确定之后，附属终于可以开始初始化了。

##### 依赖注入

Terra 的附属系统利用了一种基于注释的简单注入框架，以此减少引用。当附属全部初始化完毕后，[平台](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/Platform.html)实例会注入到任何有效的注释字段中。