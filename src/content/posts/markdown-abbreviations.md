---
title: Markdown 缩写
published: 2026-08-28
description: 只需定义一次常见缩写词，即可在普通文章文本中保留其完整含义。
tags: [Demo, Markdown, Typography, Shirone]
category: Guides
lang: en
draft: false
---

缩写使技术写作保持简洁，同时为需要了解完整术语的读者保留其全称。已定义的术语会渲染为原生 `abbr` 元素，其含义可在悬停时查看，也可供辅助技术读取。

## 在上下文中

SSR 优先的输出会在 JavaScript 运行之前保持初始文档可见。在衡量其阅读体验时，LCP 和 CLS 会揭示首个可见内容是否快速且稳定。

缩写也可以出现在普通 Markdown 旁边，例如 **SSR** 指南，但诸如 `SSR` 这样的字面代码以及像 [LCP 文档](https://web.dev/articles/lcp) 这样的链接将保持原样，不受影响。

## 定义术语

将定义放在同一 Markdown 文档的任意位置。它们不会渲染为可见段落，只有该文章中的匹配术语才会获得语义化的缩写处理。

```markdown
*[SSR]: Server-Side Rendering
*[LCP]: Largest Contentful Paint
*[CLS]: Cumulative Layout Shift

SSR makes an HTML response available before client code runs.
```

*[SSR]: Server-Side Rendering
*[LCP]: Largest Contentful Paint
*[CLS]: Cumulative Layout Shift

## 创作边界

术语必须以字母或数字开头，并且可以包含字母、数字、句点、下划线、加号和连字符。每个定义仅适用于当前文章；无效或重复的定义将保持为普通 Markdown，而不会静默替换其他术语。
