# inventory.yml

``` YAML
inventories:
  main_inventory:
    slots: 45
    title: "&4Codex &7» &8所有分类"
    21:
      type: "category: history"
    22:
      type: "category: regions"
    23:
      type: "category: monsters"
    0;8;36;44:
      item:
        id: RED_STAINED_GLASS_PANE
        name: " "
    1;7;9;17;27;35;37;43:
      item:
        id: BLACK_STAINED_GLASS_PANE
        name: " "
    40:
      item:
        id: BARRIER
        name: '&7关闭'
      click_actions:
        - "message: &7已关闭菜单."
        - "close_inventory"
  category_history:
    slots: 45
    title: "&4Codex &7» &8历史记录"
    11:
      type: "discovery: irium_attack_on_kryngel"
    39:
      item:
        id: PLAYER_HEAD
        name: "&7返回"
        skull_data:
          texture: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzdhZWU5YTc1YmYwZGY3ODk3MTgzMDE1Y2NhMGIyYTdkNzU1YzYzMzg4ZmYwMTc1MmQ1ZjQ0MTlmYzY0NSJ9fX0="
      open_inventory: main_inventory
    0;8;36;44:
      item:
        id: BLUE_STAINED_GLASS_PANE
        name: " "
    1;7;9;17;27;35;37;43:
      item:
        id: BLACK_STAINED_GLASS_PANE
        name: " "
  category_regions:
    slots: 45
    title: "&4Codex &7» &8区域"
    11:
      type: "discovery: shadow_swamp"
    12:
      type: "discovery: city_of_kryngel"
    39:
      item:
        id: PLAYER_HEAD
        name: "&7返回"
        skull_data:
          texture: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzdhZWU5YTc1YmYwZGY3ODk3MTgzMDE1Y2NhMGIyYTdkNzU1YzYzMzg4ZmYwMTc1MmQ1ZjQ0MTlmYzY0NSJ9fX0="
      open_inventory: main_inventory
    0;8;36;44:
      item:
        id: BLUE_STAINED_GLASS_PANE
        name: " "
    1;7;9;17;27;35;37;43:
      item:
        id: BLACK_STAINED_GLASS_PANE
        name: " "
  category_monsters:
    slots: 45
    title: "&4Codex &7» &8怪物"
    11:
      type: "discovery: shadow_warrior"
    39:
      item:
        id: PLAYER_HEAD
        name: "&7返回"
        skull_data:
          texture: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzdhZWU5YTc1YmYwZGY3ODk3MTgzMDE1Y2NhMGIyYTdkNzU1YzYzMzg4ZmYwMTc1MmQ1ZjQ0MTlmYzY0NSJ9fX0="
      open_inventory: main_inventory
    0;8;36;44:
      item:
        id: BLUE_STAINED_GLASS_PANE
        name: " "
    1;7;9;17;27;35;37;43:
      item:
        id: BLACK_STAINED_GLASS_PANE
        name: " "
```