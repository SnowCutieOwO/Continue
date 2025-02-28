# 自定义标志与选区处理模块

在 6.2 版本后的 WorldGuard，自定义标志和选区处理模块被加入到插件中。这允许第三方插件将他们自己的标志添加至 WorldGuard 的区域中。

## 注册新标志

请确保你先将 WorldGuard 指定为了依赖。注册的顺序是非常重要的，所以如果你的插件要正常工作，那么就必须让 WorldGuard 先于你的插件加载。

标志必须通过 WorldGuard 的 `FlagRegistry` `register(Flag<?> flag)` 方法注册。其中的参数需要为任意标志对象的实例，无论你将其用于默认种类或是你自己的种类。

注册需要在 WorldGuard **启用**之前完成。因此，非常推荐在你插件**载入**的时候完成注册。在 WorldGuard 启用之后，FlagRegistery 就会被锁定，不能用于新标志的注册。

::: info 示例：注册一个自定义标志]
```Java
// 将标志声明成其他部分代码可以读取的字段（这样就可以用于标志检查）
// 注意: 若你需要使用不同种类的标志, 请确保你修改了这里和下面的 StateFlag 至对应的类型
public static StateFlag MY_CUSTOM_FLAG;

@Override
public void onLoad() {
    // ... 在这里写入自己插件的代码

    FlagRegistry registry = WorldGuard.getInstance().getFlagRegistry();
    try {
        // 注册名为 "my-custom-flag" 的标志, 默认值为 true
        StateFlag flag = new StateFlag("my-custom-flag", true);
        registry.register(flag);
        MY_CUSTOM_FLAG = flag; // 仅在没有错误时设置默认值
    } catch (FlagConflictException e) {
        // 如果其他插件已经注册同名标志.
        // 你可以继续使用这些标志, 但可能会有潜在的冲突 - 请确保检查过标志种类
        Flag<?existing = registry.get("my-custom-flag");
        if (existing instanceof StateFlag) {
            MY_CUSTOM_FLAG = (StateFlag) existing;
        } else {
            // 类型不匹配 - 这是个坏消息! 有其他插件和你注册的标志产生了冲突
            // 希望这不会发生在你的插件里
        }
    }
}
```
:::
在标注注册完毕后，WorldGuard 将会对这些标志一视同仁，从数据库中读取或保存它们，也允许玩家通过 `/rg flag` 命令设置，等等。即使你的插件已经从服务器中被删除，WorldGuard 也会替你保留这些标志在区域中的设置状态，但是这些标志将会保持失效状态，直到你再次启用注册了在这些标志的插件。

## 使用选区处理模块

大体来讲，你的标志将会通过排序值在事件处理器中被使用。但是，一些标志会被设计为进行特殊的任务，例如：

* 周期性对区域内带有指定标志的全部玩家执行方法（例如，治疗（heal）标志）；
* 在区域设置了指定的标志后对进入或离开区域的玩家发送消息（例如：欢迎标语（greeting）标志）

自定义处理器可以在 WorldGuard 启用后的任意时间启用。处理器会被一个工厂方法为每个区域（玩家）在创建时实例化。这里也有一些方法在处理器类中，而你的自定义处理器会覆盖这些。若你在使用一个后者所属行为的处理器。非常推荐先继承 FlagValueChangeHandler 类，这会帮你处理很多很多的区域边界交叉逻辑。

::: info 示例：创建并注册一个自定义处理器
```Java
public class CustomHandler extends FlagValueChangeHandler<State{
    public static final Factory FACTORY = new Factory();
    public static class Factory extends Handler.Factory<CustomHandler{
        @Override
        public CustomHandler create(Session session) {
            // 为指定区域创建一个处理器实例
            // 如果你需要基于某些因素，例如玩家，来传递参数的话
            // 请在这里填入代码
            return new CustomHandler(session);
        }
    }
    // 构建你自己的标志来检测变动
    public CustomHandler(Session session) {
        super(session, MyPlugin.MY_CUSTOM_FLAG);
    }
    // ... 在这里覆写处理器方法
}
```
>
```Java
SessionManager sessionManager = WorldGuard.getInstance().getPlatform().getSessionManager();
 // 第二个字段允许处理器排序 - 详见 JavaDocs
sessionManager.registerHandler(MyCustomHandler.FACTORY, null);
```
:::

::: tip
WorldGuard 内置的处理器可以在 [com.sk89q.worldguard.session.handler](https://github.com/EngineHub/WorldGuard/tree/master/worldguard-core/src/main/java/com/sk89q/worldguard/session/handler) 包中找到。这些应当是你集成自己处理器的好例子。
:::

::: info 注意
不是所有的 WorldGuard 选区用法都是与标志有关的。例如，WorldGuard 也使用选区来管理上帝模式。
:::