# Family Tree 家谱/族谱
This projects implements web-accessible family tree, making addition of new members and changing family tree arrangement easy. The implementation is optimized for vertical display of Chinese characters. The implementation takes into account of polygamy, but not consanguineous marriages.

The main advantage of this family tree project over other is the simplified family tree data structure. Traditional family tree programs require users to perform cumbersome operations to add new members and member relationships. This project, in contrast, utilizes the readability and simplicity of markdown syntax, lowering the user's operational and learning cost.

本项目实现了家谱/族谱的网络显示，将家谱/族谱电子化，让增加新成员和对族谱修改变得更加简单。本项目特别为中文竖排进行优化。本项目有将一夫多妻的历史情况考虑在内，但没有考虑近亲结婚的特殊情况。

本项目相较于其他项目的主要优势为：更加简化的家谱/族谱数据结构。传统家谱/族谱项目需要重复一系列操作以添加人员和人员关系，而本项目利用 Markdown 语法的易读性和操作的简便性，使用户的操作成本和学习成本大大降低。

## User Instruction 用户使用指南
Please read [USER_MANUAL.md](USER_MANUAL.md) (untranslated to English for now due to lack of optimization.)

请阅读 [USER_MANUAL.md > 用户端](USER_MANUAL.md) 的内容。总结如下：

- 创建一个 `.md` 文件；在里面储存数据；附上对应的CSS和JS
- 用 VS Code 把 `.md` 转换为 `.html`；优化 HTML 格式
- 完成！

## File Organization 文件内容
- `USER_MANUAL.md`
  - includes instructions for users and programmers (in Chinese)
  - 包含用户指南、数据存储规范、程序员备忘录
- `style.css`
  - stylesheet that implements the tree structure
  - 实现家谱/族谱的树状结构绘制
- `family_tree_md2html.js`
  - translates the data structure implemented in markdown to HTML that is compatible with the CSS implementation
  - 将 markdown 数据结构转换为 CSS 可用的 HTML 结构
- `family_tree.md`
  - sample data structure
  - 数据结构范例
- `family_tree.html`
  - sample output
  - 输出范例
