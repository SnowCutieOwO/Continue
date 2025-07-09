# 占位符：
| 占位符 | 列子 |描述|
|-----|----|--|
| %myworlds_world_name%    | world_nether   | 确切的世界名 |
| %myworlds_world_alias%    | The Nether   | 使用 /world alias 设置的世界别名 |
| %myworlds_world_environment%    | The End   | 世界环境名，可在Localization.yml中设置 |
| %myworlds_world_type%    | Flat Overworld   | 类似于world_environment，但对于超平坦世界会有额外名字 |
| %myworlds_world_time%    | 16:00 (4:00 PM)   | 世界当前时间 |
| %myworlds_world_difficulty%    | hard   | 世界难度 |
| %myworlds_world_gamemode%    | survival   | 世界游戏模式 |
| %myworlds_world_weather%    | raining   | 世界当前天气。可在Localization.yml中设置 |
| %myworlds_world_weather_duration%    | 2 hours, 7 minutes   | 距天气变更的时间。可在Localization.yml中设置 |
| %myworlds_world_weather_forecast%    | clear   | 天气预报。可在Localization.yml中设置 |

可以在占位符名称后面的`[ ]`字符之间指定要显示信息的世界，而不是使用玩家所在的世界。例如：
**`%myworlds_world_weather[creative_flat]%`**
