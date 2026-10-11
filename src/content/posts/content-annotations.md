---
title: 内容注解
published: 2026-08-27
description: 为 Shirone 文章添加紧凑、无障碍的辅助说明，而不打断阅读流程。
tags: [Demo, Markdown, Annotation, Shirone]
category: Guides
lang: en
draft: false
---

内容注解将辅助上下文保持在句子附近，而不把它直接放入阅读流程中。激活小注释标记即可显示其内容。

## 基本语法

在普通行文中添加 `[+label]` 引用，然后在同一篇文章的其他位置定义匹配的注释。

```markdown
Astro renders most of a page ahead of time and hydrates **interactive islands** [+islands] only when they need to become interactive.

[+islands]:
  An island is an interactive UI component surrounded by static HTML. This keeps the default page lightweight while preserving focused interactivity.
```

Astro 会预先渲染页面的大部分内容，并且仅在**交互式岛屿** [+islands] 需要变得可交互时才对其进行水合。

[+islands]:
  岛屿是被静态 HTML 包围的交互式 UI 组件。这使默认页面保持轻量，同时保留聚焦的交互性。

## 丰富内容

定义可以包含段落、强调、链接、列表和行内代码 [+rich-note]，而周围的句子则正常继续。

[+rich-note]:
  **创作指南**

  - 保持第一句话自包含。
  - 当读者可能需要主要来源时，使用链接。
  - 优先使用简洁的示例，例如 `client:visible`。

  有关完整模型，请参阅 [Astro 岛屿文档](https://docs.astro.build/en/concepts/islands/)。

## 多个定义

复用同一个标签 [+review]，在一个标记背后呈现一串简短的相关注释。

[+review]: 从改变读者下一步行动的决定开始。
[+review]: 将实现证据与背景上下文分开。
[+review]: 移除那些应属于正文而非注解的细节。

未定义的引用（如 `[+missing]`）会保持为普通文本，因此未完成的定义永远不会产生空控件。
