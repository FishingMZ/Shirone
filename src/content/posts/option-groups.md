---
title: "Markdown 选项组"
description: "在紧凑、同步的 M3E 选项组中呈现相关的 Markdown 替代方案。"
tags: [Demo, Markdown, Tabs, Shirone]
category: Guides
lang: en
draft: false
---

选项组将等效的说明放在一起，而无需重复周围的解释。每个选项都接受完整的块级 Markdown，而所选值可以与同一页面上的另一个组同步。

## 选择包管理器

使用 `@tab:active` 选择初始选项。`#` 之后的后缀提供一个稳定的值，而不会改变可见标题。

::: tabs#package-manager

@tab npm

使用 npm 安装该包：

```powershell
npm install astro
```

@tab:active **pnpm**#pnpm

使用 pnpm 安装该包：

```powershell
pnpm.cmd add astro
```

@tab Bun#bun

使用 Bun 安装该包：

```powershell
bun add astro
```

:::

## 运行项目

此组共享 `package-manager` id。选择上面的某个选项会更新下面匹配的命令，并记住该选择以便下次访问。

::: tabs#package-manager

@tab npm

```powershell
npm run dev
```

@tab pnpm

```powershell
pnpm.cmd dev
```

@tab Bun#bun

```powershell
bun run dev
```

:::

## 多个备选方案

较长的选项行会保持在一行内，并在窄屏幕上于其自身的导航区域内滚动。

::: tabs

@tab Local workstation

在开发功能时使用本地工具链。

@tab Hosted preview environment

发布临时预览以供审核。

@tab Continuous integration

为每次更改运行确定性验证。

@tab Production deployment

将经过验证的构建产物提升到生产环境。

@tab Offline recovery workflow

当网络不可用时，从本地构建产物恢复。

:::

## 作者语法

````markdown
::: tabs#package-manager

@tab npm

Use npm instructions here.

@tab:active **pnpm**#pnpm

Use pnpm instructions here.

:::
````

每个组至少需要两个 `@tab` 部分，并且每个部分都需要正文内容，正文与其标记之间用空行分隔。无效或不完整的组将保持为普通 Markdown 的可读形式。
