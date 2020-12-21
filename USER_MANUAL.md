# 使用指南与数据规范
## 用户端
### Markdown数据存储（`family_tree.md`）
1. 创建一个新的 `.md` 文件
2. 复制粘贴：
    ```html
    <div class="tree">
    <!--Add data below 在这下面添加数据-->

    </div>

    <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src="family_tree_md2html.js"></script>
    ```
3. 按照 Markdown 数据规范（下一节）在 `<!--Add data below 在这下面添加数据-->` 的下面一行键入家谱/族谱数据
4. 用VS Studio转换为HTML
   1. 安装 `Markdown All in One`
   2. `Ctrl + Shift + P` 后输入 `Markdown All in One: Print current document to HTML` 进行转换
   3. 在同一文件夹里，你得到了你的网页版家谱/族谱
   4. 完成！


## Markdown 数据规范
以下规则按顺序进行。
- 每一户（婚姻、自然人）占据一行
  - 每个人之间空一格
    - 如：`林某一 林某二`
  - 每个人前加性别，不加空格（性别无法考证可以不加）
    - 如：`男林某一 女林某二`
  - 给一户**整体**加斜体
    - 如： `*男林某一 女林某二*`
  - 每个人**单独**加粗
    - 如： `**男林某一** **女林某二**`

  - 整体效果为： `***男林某一** **女林某二***`
- 每一户的子女缩进一层
  - 年轻者写于前面（渲染时居于右侧）
    - 竖版族谱惯例：年长者居右

---

## 程序端
### HTML规范（`family_tree.html`）（选做）
以下规则按顺序进行。
- 用VS Studio将HTML文件格式化
  - `Ctrl + Shift + P` 后输入 `format document` 检索

### HTML结构（`family_tree.html`）
- 为便于阅读和CSS应用，我们使用了自定的标签。
- Markdown 转换为 HTML 后，我们有
  - 每一个人用 `<strong></strong>` 标签嵌套
  - 每一户用 `<em></em>` 标签嵌套
  - 其余按照 `<ul><li></li></ul>` 规则嵌套
- HTML 清理后，我们有
  - 每一个人用 `<individual></individual>` 标签嵌套
  - 每一户用 `<box><couple></couple></box>` 两个标签嵌套
  - 其余按照 `<ul><li></li></ul>` 规则嵌套

### HTML清理（`family_tree_md2html.js`）
- 替换标签
  - 替换 `<strong>男` 为 `<individual class="male">`
  - 替换 `<strong>女` 为 `<individual class="female">`
  - 替换 `<strong>` 为 `<individual>`
  - 替换 `</strong>` 为 `</individual>`
  - 替换 `<em>` 为 `<box><couple>`
  - 替换 `</em>` 为 `</couple></box>`

### CSS注意事项 （`style.css`）
- 若显示有误，可尝试去掉 `ul {display: inline-block;}`，可以解决多数由族谱过小引发的问题
- 连线绘制部分修改自 [Ross Angus 的作品](https://www.cssscript.com/clean-tree-diagram/)：[示范](https://codepen.io/ross-angus/pen/jwxMjL)（2020年12月21日获取）
  - The implementation of drawing the tree diagram is
[borrowed from Ross Angus](https://www.cssscript.com/clean-tree-diagram/), with slight tweak to fit
custom HTML structure. [Demo.](https://codepen.io/ross-angus/pen/jwxMjL) Accessed on 21 Dec 2020
