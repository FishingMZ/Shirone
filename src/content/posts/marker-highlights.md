---
title: Markdown 标记高亮
published: 2026-08-28
description: 在 Shirone Markdown 中使用令牌驱动的标记语法高亮关键短语。
tags: [Demo, Markdown, Typography, Shirone]
category: Guides
lang: en
draft: false
---

标记高亮用于将注意力引向特定短语，而不会把周围段落变成单独的组件。它们在构建期间渲染为原生 `<mark>` 元素，并继承当前活动的 M3E 颜色系统。

## 默认强调

当文章的主色应承载强调时，使用 `==文本==`。这对于 ==读者在继续阅读普通段落时应记住的一个决定== 很有用。

当短语需要更强的层次结构时，标记可以包含 ==嵌套的 **Markdown 强调**==。

## 语义颜色

当含义需要不同的色调角色时，使用后缀。可用的变体有 `primary`、`secondary`、`tertiary`、`error` 和 `tip`。

- ==Primary 将短语与当前主题关联=={.primary}
- ==Secondary 保持辅助性区分低调=={.secondary}
- ==Tertiary 添加独立的编辑信号=={.tertiary}
- ==Error 标识需要纠正的状况=={.error}
- ==Tip 高亮实用指南=={.tip}

## 作者语法

```markdown
==Primary marker==

==Secondary marker=={.secondary}
==Tertiary marker=={.tertiary}
==Error marker=={.error}
==Tip marker=={.tip}
```

诸如 `==literal marker syntax==` 这样的行内代码以及围栏示例保持字面量，因此文档可以解释语法而不会触发它。
