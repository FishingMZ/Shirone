---
title: "Markdown 文件包含"
published: 2026-08-28
description: "构建时的 Markdown 文件与片段包含。"
tags: [Markdown, Shirone]
category: Guides
draft: false
---

Shirone 可以包含一个本地 Markdown 文件或其安全片段。

<!-- @include: src/content/snippets/include-example.md#public-api -->

也支持完整文件和行范围两种形式：

```markdown
<!-- @include: src/content/snippets/include-example.md -->
<!-- @include: src/content/snippets/include-example.md{1-4} -->
<!-- @include: src/content/snippets/include-example.md{5-} -->
<!-- @include: src/content/snippets/include-example.md{-4} -->
```

围栏代码块内的包含注释保持字面量形式。
