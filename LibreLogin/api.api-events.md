# API 事件

所有事件都是通过 LibrePremiumPlugin 中获取的 EventProvider 处理的。

## 订阅

订阅方法允许你指定能够从 EventTypes 获取的类。示例：

```Java
var eventTypes = eventProvider.getTypes()

eventProvider.subscribe(eventTypes.passwordChange, event -> {
    var old = event.getOldPassword();
    
    var newPassword = event.getUser().getHashedPassword();
    
    // Do some stuff
});
```

## 提供的事件

所有事件都有详细文档，见[事件包](https://github.com/kyngs/LibrePremium/tree/master/API/src/main/java/xyz/kyngs/librelogin/api/event/events)获取更多信息。