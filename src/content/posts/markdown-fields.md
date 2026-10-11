---
title: Markdown 字段卡片
description: API 与组件参数文档卡片。
published: 2026-08-30
category: Guides
draft: true
---

当多个相关选项属于同一个 API 或组件时，使用 `field-group`。将字段名放在开头行，然后在描述之前添加元数据标签。

:::: field-group

::: field tex
@type object
@optional

TeX 解析器选项。
:::

::: field output
@type `'svg' | 'chtml'`
@default `'svg'`
@optional

输出格式，SVG 或通用 HTML。
:::

::::

## 基本字段

必需、可选和已弃用状态可以混合在同一个分组中。默认值与类型分开保留，以便于快速浏览。

:::: field-group

::: field title
@type string
@required

组件的可见标题。该值显示在页面标题中，应足够简短以便快速浏览。
:::

::: field disabled
@type boolean
@default `false`
@optional

控件是否以禁用状态启动。
:::

::: field locale
@type `'en' | 'zh-CN' | 'ja-JP'`
@default `'en'`
@optional

用于格式化日期、数字和无障碍标签的区域设置。
:::

::::

## 丰富描述

描述是普通的 Markdown。在元数据行之后，链接、强调、列表和行内代码仍然可用。

:::: field-group

::: field render
@type `(value: unknown) => string`
@required

将值渲染为最终输出。回调应返回一个**安全字符串**，并可使用 `formatValue` 辅助函数。

- 保持渲染的确定性。
- 避免在回调中发起网络请求。
:::

::: field retries
@type number
@default `3`
@optional

在请求被报告为失败之前的最大尝试次数。
:::

::: field legacyMode
@type boolean
@deprecated

为向后兼容而保留。新的集成应改用 `compatibility`。
:::

::::

## 独立字段

当在示例或代码块旁边记录单个选项时，可以不使用分组而直接使用单个字段。

::: field format
@type `'short' | 'long'`
@default `'short'`
@optional

控制结果的格式化方式。
:::

## 创作说明

- `@type` 和 `@default` 值会渲染为代码令牌。
- `@required`、`@optional` 和 `@deprecated` 会添加状态徽章。
- 元数据之后的任何普通 Markdown 都会成为字段描述。
- 未知的 `@tags` 会作为描述文本保持可见，而不会被丢弃。
