# JSON 文件格式详解

若你喜欢在 JSON 格式的文件中配置而不是直接通过菜单界面修改，那么你就可以按下列结构创建 JSON 文件。

|键|描述|值类型|
|---|---|---|
|`name`|定时任务的名称，应当只包含英文或数字及下划线|`string`|
|`commands`|所要执行的命令|`Commands[]`|
|`interval`|每个命令之间执行的间隔|`Interval`|
|`times`|执行定时任务的固定时间点|`Time[]`|
|`random`|决定是否执行该组命令的几率。`1` 表示 `100%`，`0.5` 表示 `50%`，`0` 则表示 `0%`，依此类推|`number`|
|`days`|定时任务所能执行的日期|`MONDAY`、`TUESDAY`、`WEDNESDAY`、`THURSDAY`、`FRIDAY`、`SATURDAY`、`SUNDAY`|
|`executionLimit`|执行命令组的次数上限。设置为 `-1` 可将该设置禁用|`number`|
|`timesExecuted`|命令组已执行的次数。**请勿手动更新该项的值**|`number`|
|`lastExecutedCommandIndex`|最后执行过的命令的序号。这会用于 `INTERVAL` 模式下的相关内容。**请勿手动更新该项的值**|`number`|
|`lastExecuted`|定时任务执行的最后日期。**请勿手动更新该项的值**|`Date`|
|`commandExecutionMode`|命令的执行模式|`Execution Mode`|
|`active`|决定定时任务是否启用|`boolean`|
|`resetExecutionAfterRestart`|决定 `executionLimit` 的值是否要在重启时重置|`boolean`|
|`condition`|条件判断模块的配置部分|`Condition`|
|`event`|事件引擎的配置部分|`Event[]`|

## 命令部分配置

|键|描述|值类型|
|---|---|---|
|`command`|执行的命令，无需在命令中包含 `/`。|`string`|
|`gender`|执行命令时代表的身份|身份|
|`interval`|决定在遍历所有玩家执行命令时的执行间隔|间隔|

## 间隔

|键|描述|值类型|
|---|---|---|
|`days`|天数|`number`|
|`hours`|小时数|`number`|
|`minutes`|分钟数|`number`|
|`seconds`|秒数|`number`|

## 时间点
这些设置的更多信息可以在这里找到。

如你所见，条件对象有一个名为 `conditions` 的递归列表。这是因为条件可以多次组合来做到复杂的判断效果。

|键|描述|值类型|
|---|---|---|
|`conditionType`|条件类型|`SIMPLE`、`NOT`、`AND`、`OR`|
|`simpleCondition`|最简单的条件形式。仅在模式为 `conditionType` 为 `SIMPLE` 或 `NOT` 时有效|`SimpleCondition`|
|`conditions`|条件列表，仅在 `conditionType` 为 `AND` 和 `OR` 时有效|

### 简单条件
|键|描述|值类型|
|---|---|---|
|`conditionGroup`|该条件归属的拓展|`string`|
|`rule`|在选定的 `conditionGroup` 中指定的条件规则|`string`|
|`conditionParamFields`|选定的 `rule` 所要求的额外值|`ConditionParamterField[]`|

### 条件字段内容
|键|描述|值类型|
|---|---|---|
|`name`|字段的名称|`string`|
|`value`|配置字段的指定值|`any`|

## 事件
事件引擎的相关文档可在这里找到

|键|描述|值类型|
|---|---|---|
|`active`|指定事件是否激活|`boolean`|
|`conditionGroup`|该事件所属的拓展|`string`|
|`event`|选定的 `conditionGroup` 中的事件名称|`string`|
|`condition`|该事件配置的执行条件。与普通的执行条件略有区别|`EventCondition`|

### 事件条件

|键|描述|值类型|
|---|---|---|
|`conditionType`|条件类型|`SIMPLE`、`NOT`、`AND`、`OR`|
|`simpleCondition`|最简单的条件形式。仅在模式为 `conditionType` 为 `SIMPLE` 或 `NOT` 时有效|`SimpleCondition`|
|`conditions`|条件列表，仅在 `conditionType` 为 `AND` 和 `OR` 时有效|

### 事件简单条件

|键|描述|值类型|
|---|---|---|
|`fieldName`|字段名称|`string`|
|`value`|指定字段中的给定值|`any`|
|`compare`|与事件的值和传递的 `value` 进行比较的符号|`EQUAL`、`GREATER_THAN`、`LESS_THAN`、`GREATER_OR_EQUAL_THAN`、`LESS_OR_EQUAL_THEN`|

## 示例

```JSON
{
  "name": "alert_job_levelup",
  "commands": [
    {
      "command": "say test",
      "gender": "CONSOLE"
    }
  ],
  "interval": {
    "days": 1,
    "hours": 0,
    "minutes": 0,
    "seconds": 5
  },
  "times": [
    {
      "time1": "14:00:00",
      "time2": "14:00:00",
      "isMinecraftTime": false
    }
  ],
  "random": 1.0,
  "days": [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY"
  ],
  "executionLimit": -1,
  "timesExecuted": 7,
  "lastExecutedCommandIndex": 0,
  "lastExecuted": "Feb 8, 2023, 9:19:51 PM",
  "commandExecutionMode": "INTERVAL",
  "commandExecutionInterval": {
    "days": 0,
    "hours": 0,
    "minutes": 0,
    "seconds": 1
  },
  "active": true,
  "resetExecutionsAfterRestart": false,
  "condition": {
    "conditionType": "SIMPLE",
    "conditions": [],
    "simpleCondition": {
      "conditionGroup": "JOBSREBORN",
      "rule": "HAS_SPECIFIC_JOB",
      "conditionParamFields": [
        {
          "name": "required_job",
          "value": ""
        },
        {
          "name": "LEVEL",
          "value": 0
        }
      ]
    }
  },
  "events": [
    {
      "active": true,
      "conditionGroup": "JOBSREBORN",
      "event": "LEVEL_UP",
      "condition": {
        "conditionType": "SIMPLE",
        "conditions": [],
        "simpleCondition": {
          "fieldName": "LEVEL",
          "value": 12.0,
          "compare": "EQUAL"
        }
      }
    }
  ]
}
```
