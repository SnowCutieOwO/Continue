# API v10

CoreProtect API 允许你记录方块改变、执行查询、回滚、存储等操作。

|API 细节||
|---|---|
|API 版本：|10|
|插件版本：|v22.4+|
|Maven：|[maven.playpro.com](https://maven.playpro.com/)|

## 从 API v9 升级

与前一版本相比有如下改动：

* 新添加了这些方法：

``` Java
logPlacement(String user, BlockState blockState)

logRemoval(String user, BlockState blockState)
```

## 开始

确保你正在使用 CoreProtect 22.4 或更高版本。将其作为外部 jar 文件导入你的 IDE。  
另外，如果你在使用 maven，你还可以通过 https://maven.playpro.com  仓库（net.coreprotect, 22.4）添加。

你需要做的第一件事就是访问 CoreProtect。大致代码如下：

``` Java
import net.coreprotect.CoreProtect;
import net.coreprotect.CoreProtectAPI;

private CoreProtectAPI getCoreProtect() {
        Plugin plugin = getServer().getPluginManager().getPlugin("CoreProtect");

        // 检查 CoreProtect 是否载入
        if (plugin == null || !(plugin instanceof CoreProtect)) {
            return null;
        }

        // 检查 API 是否启用
        CoreProtectAPI CoreProtect = ((CoreProtect) plugin).getAPI();
        if (CoreProtect.isEnabled() == false) {
            return null;
        }

        // 检查载入的 API 版本是否合适
        if (CoreProtect.APIVersion() < 10) {
            return null;
        }

        return CoreProtect;
}
```

之后，你可以通过如下代码访问 API：

``` Java
CoreProtectAPI api = getCoreProtect();
if (api != null){ // 确保我们能够访问 API
  api.testAPI(); // 会在控制台输出 "[CoreProtect] API test successful." 消息
```

现在你就可以使用 CoreProtect API 了！

## API 概览

### 可用方法

``` Java
boolean isEnabled()

void testAPI()

List<String[]> performLookup(int time, List<String> restrict_users, List<String> exclude_users, List<Object> restrict_blocks, List<Object> exclude_blocks, List<Integer> action_list, int radius, Location radius_location)

List<String[]> performRollback(int time, List<String> restrict_users, List<String> exclude_users, List<Object> restrict_blocks, List<Object> exclude_blocks, List<Integer> action_list, int radius, Location radius_location)

List<String[]> performRestore(int time, List<String> restrict_users, List<String> exclude_users, List<Object> restrict_blocks, List<Object> exclude_blocks, List<Integer> action_list, int radius, Location radius_location)

List<String[]> blockLookup(Block block, int time)

List<String[]> sessionLookup(String user, int time)

List<String[]> queueLookup(Block block)

ParseResult parseResult(String[] result)

boolean logChat(Player player, String message)

boolean logCommand(Player player, String command)

boolean logPlacement(String user, BlockState blockState)

boolean logPlacement(String user, Location location, Material type, BlockData blockData)

boolean logRemoval(String user, BlockState blockState)

boolean logRemoval(String user, Location location, Material type, BlockData blockData)

boolean logContainerTransaction(String user, Location location)

boolean logInteraction(String user, Location location)

boolean hasPlaced(String user, Block block, int time, int offset)

boolean hasRemoved(String user, Block block, int time, int offset)

void performPurge(int time)
```

### 可用事件

*如下事件由 CoreProtect 发出。*

#### CoreProtectPreLogEvent

在 CoreProtect 记录器将要记录行为时发出。可被取消。

|属性|描述|可变|
|---|---|---|
|User|记录事件的玩家对象。|是|
|Cancelled|若被取消，则行为不会被记入数据库。|是|

### 方法用法

*详细的方法信息如下。*

#### `isEnabled`

调用该方法会检查服务器是否启用 CoreProtect API，若有则返回 true，否则返回 false。

#### `testAPI`

调用该方法会在服务器控制台中输出“[CoreProtect] API Test Successful.”消息。

#### `performLookup(int time, List<String> restrict_users, List<String> exclude_users, List<Object> restrict_blocks, List<Object> exclude_blocks, List<Integer> action_list, int radius, Location radius_location)`

执行查询操作。

* **time**：指定查询的时间长度。“5”表示返回五秒前的结果。
* **restrict_users**：指定查询的玩家。若指定了范围和位置则可为“null”。
* **exclude_users**：指定查询排除的玩家。可设置为“null”。
* **restrict_blocks**：指定查询的实体类型或材料。可设置为“null”。
* **exclude_blocks**：指定查询排除的实体类型或材料。可设置为“null”。
* **action_list**：指定搜索的行为类型。可设置为“null”。
* **radius**：指定搜索的半径。若使用该参数，则必须指定位置。设置为“0”可禁用。
* **radius_location**：指定搜索的位置。若不指定半径且指定玩家，则可为“null”。

#### `performRollback(int time, List<String> restrict_users, List<String> exclude_users, List<Object> restrict_blocks, List<Object> exclude_blocks, List<Integer> action_list, int radius, Location radius_location)`

执行回滚操作。方法必须异步调用。

* **time**：指定回滚的时间长度。“5”表示返回五秒前的结果。
* **restrict_users**：指定回滚的玩家。若指定了范围和位置则可为“null”。
* **exclude_users**：指定回滚排除的玩家。可设置为“null”。
* **restrict_blocks**：指定回滚的实体类型或材料。可设置为“null”。
* **exclude_blocks**：指定回滚排除的实体类型或材料。可设置为“null”。
* **action_list**：指定回滚的行为类型。可设置为“null”。
* **radius**：指定回滚的半径。若使用该参数，则必须指定位置。设置为“0”可禁用。
* **radius_location**：指定回滚的位置。若不指定半径且指定玩家，则可为“null”。

#### `performRestore(int time, List<String> restrict_users, List<String> exclude_users, List<Object> restrict_blocks, List<Object> exclude_blocks, List<Integer> action_list, int radius, Location radius_location)`

执行存储操作。

* **time**：指定存储的时间长度。“5”表示返回五秒前的结果。
* **restrict_users**：指定存储的玩家。若指定了范围和位置则可为“null”。
* **exclude_users**：指定存储排除的玩家。可设置为“null”。
* **restrict_blocks**：指定存储的实体类型或材料。可设置为“null”。
* **exclude_blocks**：指定存储排除的实体类型或材料。可设置为“null”。
* **action_list**：指定存储的行为类型。可设置为“null”。
* **radius**：指定存储的半径。若使用该参数，则必须指定位置。设置为“0”可禁用。
* **radius_location**：指定存储的位置。若不指定半径且指定玩家，则可为“null”。

#### `blockLookup(Block block, int time)`

对单个方块进行查询。

* **block**：查询的方块。
* **time**：指定查询的时间长度。“5”表示返回五秒前的结果。

#### `queueLookup(Block block)`

搜索尚未存储入数据库的消耗者队列改动。

* **block**：查询的方块。

#### `sessionLookup(String user, int time)`

对单个玩家进行查询。

* **user**：查询的玩家。
* **time**：指定查询的时间长度。“5”表示返回五秒前的结果。

#### `ParseResult parseResult(String[] result)`

判断查询的结果。你可以通过如下方法查询：

* **getX()**：获取方块的 X 轴坐标。
* **getY()**：获取方块的 Y 轴坐标。
* **getZ()**：获取方块的 Z 轴坐标。
* **getType()**：获取方块材料名。
* **getBlockData()**：获取方块的 BlockData。
* **getPlayer()**：以字符串形式返回玩家名称。
* **getTimestamp()**：获取行为发生时间。
* **getActionId()**：获取行为 ID。（0=破坏、1=放置、2=交互）
* **getActionString()**：以字符串形式返回行为（Removal、Placement、Interaction）
* **isRolledBack()**：返回方块是否被回滚。
* **worldName()**：方块所处的世界名称。

#### `logPlacement(String user, BlockState blockState)`

将指定方块记录为被放置。*（对线程安全）*

* **user**：指定记录中放置方块的玩家名称。
* **blockState**：指定记录中方块的 BlockState 数据。

#### `logPlacement(String user, Location location, Material type, BlockData blockData)`

将指定方块记录为被放置。

* **user**：指定记录中放置方块的玩家名称。
* **location**：指定记录中放置方块的位置。
* **type**：指定记录中放置的方块材料。
* **blockState**：指定记录中方块的 BlockState 数据。可设置为“null”。

#### `logRemoval(String user, BlockState blockState)`

将指定方块记录为被破坏。*（对线程安全）*

* **user**：指定记录中破坏方块的玩家名称。
* **blockState**：指定记录中方块的 BlockState 数据。

#### `logRemoval(String user, Location location, Material type, BlockData blockData)`

将指定方块记录为被破坏。

* **user**：指定记录中破坏方块的玩家名称。
* **location**：指定记录中破坏方块的位置。
* **type**：指定记录中破坏的方块材料。
* **blockState**：指定记录中方块的 BlockState 数据。可设置为“null”。

#### `logContainerTransaction(String user, Location location)`

调用方法后立即记录任意方块容器中的改动。

* **user**：指定记录中移动物品记录的玩家名称。
* **location**：指定记录中容器所在的位置。

#### `logInteraction(String user, Location location)`

记录被交互的方块。

* **user**：指定记录中交互的玩家名称。
* **location**：指定记录中方块的位置。

#### `hasPlaced(String user, Block block, int time, int offset)`

查询指定玩家是否在一段时间前放置了指定类型的方块，若有则返回 true。

* **user**：查询的玩家名称。
* **block**：查询的方块名称。
* **time**：查询的时间范围。“5”表示查询最近五秒内的方块放置记录。
* **offset**：时间偏移。“2”表示忽略最近两秒内的记录。（0 = 不限制）。

#### `hasRemoved(String user, Block block, int time, int offset)`

查询指定玩家是否在一段时间前破坏了指定类型的方块，若有则返回 true。

* **user**：查询的玩家名称。
* **block**：查询的方块名称。
* **time**：查询的时间范围。“5”表示查询最近五秒内的方块破坏记录。
* **offset**：时间偏移。“2”表示忽略最近两秒内的记录。（0 = 不限制）。

#### `performPurge(int time)`

对 CoreProtect 数据库执行一次清理。

* **time**：清除早于该时间的数据。“120”表示清理任何早于 120 秒（即两分钟）的数据。

### 示例

* 获取玩家“Notch”最近六十秒的方块数据。

``` Java
CoreProtectAPI CoreProtect = getCoreProtect();
if (CoreProtect != null){ // 确保我们能访问 API
  List<String[]> lookup = CoreProtect.performLookup(60, Arrays.asList("Notch"), null, null, null, null, 0, null);
  if (lookup != null){
    for (String[] result : lookup){
      ParseResult parseResult = CoreProtect.parseResult(result);
      int x = parseResult.getX();
      int y = parseResult.getY();
      int z = parseResult.getZ();
      // ...
    }
  }
}
```

* 获取玩家“Notch”最近六十秒除泥土与草方块外的方块数据。

``` Java
CoreProtectAPI CoreProtect = getCoreProtect();
if (CoreProtect != null){ // 确保我们能访问 API
  List<Object> exclude = Arrays.asList(Material.DIRT, Material.GRASS);
  List<String[]> lookup = CoreProtect.performLookup(60, Arrays.asList("Notch"), null, null, exclude, null, 0, null);
  if (lookup != null){
    for (String[] value : lookup){
      ParseResult result = CoreProtect.parseResult(value);
      int x = result.getX();
      int y = result.getY();
      int z = result.getZ();
      // ...
    }
  }
}
```

* 获取指定位置 5 格半径内最近六十秒的方块数据。

``` Java
CoreProtectAPI CoreProtect = getCoreProtect();
if (CoreProtect != null){ // 确保我们能访问 API
  List<String[]> lookup = CoreProtect.performLookup(60, null, null, null, null, null, 5, location);
  if (lookup != null){
    for (String[] value : lookup){
      ParseResult result = CoreProtect.parseResult(value);
      int x = result.getX();
      int y = result.getY();
      int z = result.getZ();
      // ...
    }
  }
}
```

* 回滚/储存使用的代码结构与上述相似。例如：

``` Java
class BasicThread implements Runnable {
@Override
public void run() {
  try {
    CoreProtectAPI CoreProtect = getCoreProtect();
    if (CoreProtect != null){ // 确保我们能访问 API
      List<String[]> lookup = CoreProtect.performRollback(60, Arrays.asList("Notch"), null, null, null, null, 0, null);
      if (lookup != null){
        for (String[] value : lookup){
          ParseResult result = CoreProtect.parseResult(value);
          int x = result.getX();
          int y = result.getY();
          int z = result.getZ();
          // ...
        }
      }
    }
  }
  catch (Exception e){
    e.printStackTrace(); 
  }
}
}
Runnable runnable = new BasicThread();
Thread thread = new Thread(runnable);
thread.start();
```

* 检查玩家“Notch”在六十秒前是否在指定位置放置了方块。

``` Java
CoreProtectAPI CoreProtect = getCoreProtect();
if (CoreProtect != null){ // 确保我们能访问 API
  boolean hasPlaced = CoreProtect.hasPlaced("Notch", block, 60, 0);

  // 对改变的查询队列
  if (!hasPlaced){
    List<String[]> lookup = CoreProtect.queueLookup(block);
    for (String[] result : lookup){
      ParseResult parseResult = CoreProtect.parseResult(result);
      if (parseResult.getActionId()==1 && parseResult.getPlayer().equals("Notch")){
        hasPlaced = true;
        break;
      }
    }
  }
}
```

* 获取指定方块六十秒内的数据。

``` Java
CoreProtectAPI CoreProtect = getCoreProtect();
if (CoreProtect != null){ // 确保我们能访问 API
  List<String[]> lookup = CoreProtect.blockLookup(block, 60);
  if (lookup != null){
    for (String[] result : lookup){
      ParseResult parseResult = CoreProtect.parseResult(result);
      int x = parseResult.getX();
      int y = parseResult.getY();
      int z = parseResult.getZ();
      // ...
    }
  }
}
```

* 获取玩家“Notch”一天内的会话数据。

``` Java
CoreProtectAPI CoreProtect = getCoreProtect();
if (CoreProtect != null){ // 确保我们能访问 API
  List<String[]> lookup = CoreProtect.sessionLookup("Notch", (24 * 60 * 60));
  if (lookup != null){
    for (String[] result : lookup){
      ParseResult parseResult = CoreProtect.parseResult(result);
      int x = parseResult.getX();
      int y = parseResult.getY();
      int z = parseResult.getZ();
      int action = parseResult.getActionId(); // 0 = 登出, 1 = 登入
      // ...
    }
  }
}
```

* 记录玩家“Notch”在指定位置的方块放置行为。

``` Java
CoreProtectAPI CoreProtect = getCoreProtect();
if (CoreProtect != null){ // 确保我们能访问 API
  boolean success = CoreProtect.logPlacement("Notch", block.getLocation(), block.getType(), block.getData());
}
```

* 记录箱子内的物品移动情况（或其他容器方块）。

``` Java
CoreProtectAPI CoreProtect = getCoreProtect();
if (CoreProtect != null){ // 确保我们能访问 API
  boolean success = CoreProtect.logContainerTransaction("Notch", inventory.getLocation());
  // 立即修改容器的内容 (如 [i]inventory.addItem(itemStack);[/i])
}
```

* 多线程检查玩家“Notch”是否在六十秒内的指定位置放置了方块。另外忽略最近一秒内记录的数据，以排除新方块数据已被记录的情况，取决于你的代码。

``` Java
final Block block = null; //需为实际方块
class BasicThread implements Runnable {
  @Override
  public void run() {
    try {
      CoreProtectAPI CoreProtect = getCoreProtect();
      if (CoreProtect != null){ // 确保我们能访问 API
        boolean hasPlaced = CoreProtect.hasPlaced("Notch", block, 60, 1);
      }
    }
    catch (Exception e){
      e.printStackTrace(); 
    }
  }
}
Runnable runnable = new BasicThread();
Thread thread = new Thread(runnable);
thread.start();
```