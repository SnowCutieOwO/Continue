# 前后缀堆叠

## 这是干什么用的？

“元数据堆叠”功能允许你在玩家聊天中一次显示多个前后缀。

你还是需要先安装一个聊天格式插件。

## 它如何运作？

在聊天插件请求玩家前/后缀时，除了返回权重最高的前缀之外，LuckPerms 还能应用一些规则来将多个前后缀结合在一起。

默认配置如下：
```YAML
meta-formatting:
  prefix:
    format:
      - "highest"
    duplicates: first-only
    start-spacer: ""
    middle-spacer: " "
    end-spacer: ""
  suffix:
    format:
      - "highest"
    duplicates: first-only
    start-spacer: ""
    middle-spacer: " "
    end-spacer: ""
```

所有这些加起来表示在请求前缀或后缀时，返回权重最高的前后缀。

## 我如何添加其他元素？

下列元素是必需的。

|元素|描述|
|---|---|
|`highest`|选中拥有最高权重的值，无论是玩家直接拥有或通过继承拥有。|
|`lowest`|与上述相同，但只取权重最低的值。|
|`highest_own`|选中拥有最高权重的值，但忽略继承所得的值。|
|`lowest_own`|与上述相同，但只取权重最低的值。|
|`highest_inherited`|选中拥有最高权重的值，但只接受继承所得的值。|
|`lowest_inherited`|与上述相同，但只取权重最低的值。|
|`highest_on_track_<路线>`|选中拥有最高权重的值，但只取给定路线中权限组的继承所得值。|
|`lowest_on_track_<路线>`|与上述相同，但只取权重最低的值。|
|`highest_not_on_track_<路线>`|选中拥有最高权重的值，但只取非给定路线中权限组的继承所得值。|
|`lowest_not_on_track_<路线>`|与上述相同，但只取权重最低的值。|
|`highest_from_group_<权限组>`|选中拥有最高权重的值，但只取继承自给定权限组的值。|
|`lowest_from_group_<权限组>`|与上述相同，但只取权重最低的值。|
|`highest_not_from_group_<权限组>`|选中拥有最高权重的值，但不取继承自给定权限组的值。|
|`lowest_not_from_group_<权限组>`|与上述相同，但只取权重最低的值。|

## 重复设置 

|元素|描述|
|---|---|
|`first-only`|仅允许首次重复|
|`last-only`|仅允许末次重复|
|`retain-all`|允许任意重复|
|`none`|不允许任意重复|

## 示例

例如，在某个监狱风云服务器上，有三种类型的组。“gameplay”组，捐赠玩家组和管理员组。

若一个玩家处于所有三个组中，且我想要所有三个前缀都显示，就像：
`[Mine C] [Donor] [Admin] Luck: hi!.`

但是如果某个玩家没有管理员组，那么我想要显示：
`[Mine C] [Donor] Luck: hi.`

在叠加系统中这都是可以实现的。每个堆叠中的“元素”都可以在 format 部分添加。

```YAML
prefix:
  format:
    - "highest_on_track_prison"
    - "highest_on_track_donor"
    - "highest_on_track_staff"
  duplicates: first-only
  start-spacer: ""
  middle-spacer: " "
  end-spacer: ""
```

若玩家没有能够加入元素的值，那么它会被排除。

“start”、“middle”与“end”允许控制元素的分隔方式。例如：

```YAML
prefix:
  format:
    - "highest_on_track_prison"
    - "highest_on_track_donor"
    - "highest_on_track_staff"
  duplicates: first-only
  start-spacer: "★ "
  middle-spacer: " | "
  end-spacer: " "
```
显示结果为：
`★ [Mine C] | [Donor] | [Admin] Luck: hi.`

你可以根据你的聊天插件修改这些值，聊天插件可能也会有相似的功能。