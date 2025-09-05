# 依赖注入

Terra 使用的依赖注入框架基于注释，为附属提供导入 API 对象示例。依赖注入框架通过让附属选择访问对象的方式，减少了重复引用。

## 注入字段

若要注入字段，只需让其保持在非 final、非静态状态，然后使用 [Inject](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/inject/annotations/Inject.html) 注释即可。

### 示例

``` Java
@Inject
private Platform platform;

@Inject
private BaseAddon addon;
```

这段示例代码意思是注入 [Platform](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/Platform.html) 与 [BaseAddon](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/addon/BaseAddon.html) 实例。因为这两个对象都用在[事件处理](terra-api.api-concepts.events.md)中，所以这种情况实际上相当常见。

## 注入类型

Platform 实例会自动注入所有附属中。bootstrap 附属则可能会在载入时注入几个额外类型。有关验证附属注入类型的更多信息，请见“[入口中的依赖注入](terra-api.api-concepts.manifest-addons.md#入口中的依赖注入)”部分。