# ❤️ 收藏夹 - 仅付费版

## 收藏夹菜单配置

与普通菜单相比，收藏夹菜单多出了如下配置：

``` YAML
result-items:
  - '1'

edit-mode-item:
  D:
    normal-display-item:
      material: NAME_TAG
      name: '{lang:edit-mode-enable-name}'
      lore:
        - '{lang:edit-mode-enable-line-1}'
    editing-display-item:
      material: WRITABLE_BOOK
      name: '{lang:edit-mode-disable-name}'
      lore:
        - '{lang:edit-mode-disable-line-1}'

empty-item:
  display-item:
    material: GRAY_STAINED_GLASS_PANE
    name: '{lang:favourite-empty-name}'
    lore:
      - '{lang:favourite-empty-line-1}'
      - '{lang:favourite-empty-line-2}'

result-lore:
  - ' '
  - '{lang:favourite-result-shop}'
  - '{lang:favourite-result-product}'
  - '{lang:favourite-result-click}'
  - '{lang:favourite-result-enter-edit}'

editing-result-lore:
  - ' '
  - '{lang:favourite-result-shop}'
  - '{lang:favourite-result-product}'
  - '{lang:favourite-result-edit-forward}'
  - '{lang:favourite-result-edit-backward}'
  - '{lang:favourite-result-edit-remove}'
```

* `result-items`：决定了输出格所用按钮样式。符合条件的物品会按顺序显示在格子中。必须为单字符，可以在 `layout` 部分决定其显示的位置。
* `edit-mode-item`：显示编辑模式按钮。玩家需要进入编辑模式才可以编辑收藏的物品。每个编辑模式按钮支持的内容如下：
  * `normal-display-item`
  * `editing-display-item`
* `empty-item`：若返回物品格为空，将其替换为此物品。
* `result-lore`：返回物品额外追加的描述。
* `editing-result-lore`：进入编辑模式后返回物品额外追加的描述。

## 设置收藏夹

请在 `config.yml` 中将菜单的 ID 填入 `menu.favoutire-gui.menu` 部分。

``` YAML
menu:
  favourite-gui:
    menu:
      - 'favourite'
      - 'favoutite2' # 可以在这里填写更多的菜单 ID。
```

默认收藏夹菜单是 `menus/favourite.yml`，可自行复制创建更多收藏夹菜单。

相关命令：

``` txt
/shop menu <菜单名称>
```

示例：

``` txt
/shop menu favourite
```