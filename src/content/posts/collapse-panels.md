---
title: Markdown 折叠面板
published: 2026-08-28
description: 将可选的 Markdown 内容归入紧凑、无障碍的 M3E 折叠面板中。
tags: [Demo, Markdown, Collapse, Shirone]
category: Guides
lang: en
draft: false
---

折叠面板将相关的可选详情归入一个紧凑的分组中。标题和正文保留行内及块级 Markdown，而原生折叠语义使每个面板无需客户端 JavaScript 即可使用。

## 独立面板

默认情况下，各项独立展开。在标题前加上 `:+` 可使该项初始展开，或加上 `:-` 可在分组使用 `expand` 时保持其关闭。

::: collapse
- **软件包要求**

  使用 Node.js 22 或更高版本，并在安装软件包之前启用 Corepack。

- :+ 安装依赖

  从仓库根目录运行工作区软件包命令。

  ```powershell
  pnpm.cmd install
  ```

- 验证命令

  在构建生产输出之前检查内容管道。

  - `pnpm.cmd check:manifest`
  - `npx.cmd astro check`
:::

## 手风琴模式

当只应保持一个答案展开时，添加 `accordion`。浏览器直接对原生折叠组件进行分组，因此打开另一项会关闭前一项，而无需水合。

::: collapse accordion expand
- 这里的 `expand` 有什么作用？

  当没有任何项带有 `:+` 标记时，它会初始展开第一项。

- 标题可以包含 Markdown 吗？

  可以。标题支持行内 **强调** 和 `代码`，而面板正文支持完整的块级 Markdown。

- 在窄屏幕上会发生什么？

  内容内边距会变得紧凑，长文本会换行，嵌入的代码会保留自己的水平滚动区域。
:::

## 作者语法

````markdown
::: collapse accordion
- :+ First title

  First panel content.

- Second title with `code`

  Second panel content.
:::
````

该容器必须恰好包含一个顶级无序列表。每个项都需要一个标题段落、一个空行和正文内容。无效或混合的输入将保持为普通的可读 Markdown 列表。
