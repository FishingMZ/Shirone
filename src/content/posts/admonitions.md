---
title: Markdown 提示块
published: 2026-08-27
description: 使用 Shirone 的 M3E Markdown 容器呈现笔记、警告和可选详情。
tags: [Demo, Markdown, Admonition, Shirone]
category: Guides
lang: en
draft: false
---

提示块使辅助信息在视觉上保持独立，同时保持文章的阅读流畅性。每种形式都在服务器端渲染，并使用相同的紧凑 M3E 组件。

## 语义变体

::: note 部署上下文
带空格的形式接受纯自定义标题，同时保持与参考语法兼容。
:::

:::info
使用信息块来提供中性的上下文，帮助读者理解周围章节。
:::

:::tip[现有的 **标签** 语法]
原有的方括号标签仍然可用，并且可以包含行内 Markdown 强调。
:::

> [!IMPORTANT]
> GitHub Alert 语法进入相同的渲染器，因此现有文章保持统一的视觉语言。

:::warning
在运行生产构建之前检查环境变量。
:::

:::caution
不要在示例中发布凭证、本地配置或私钥。
:::

## 可选详情

::: details 查看完整命令
该折叠组件使用原生浏览器语义，无需客户端 JavaScript 即可保持键盘可访问性。

```powershell
npx.cmd astro check
pnpm.cmd build
```

- 默认处于关闭状态。
- 长代码可以在其自身的代码块内滚动。
- 在窄屏幕上，容器保持在文章宽度内。
:::

## 作者语法

```markdown
:::note[Existing title syntax]
Content
:::

::: warning Plume-compatible title syntax
Content
:::

> [!TIP]
> GitHub Alert syntax

::: details Optional content
Hidden until the reader opens it.
:::
```
