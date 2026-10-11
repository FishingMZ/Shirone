---
title: Markdown 步骤
published: 2026-08-27
description: 在 Shirone 中以紧凑、无障碍的步骤流程呈现顺序说明。
tags: [Demo, Markdown, Steps, Shirone]
category: Guides
lang: en
draft: false
---

当过程顺序很重要时，使用步骤（Steps）。该组件保持文章阅读流程完整：一条低调的编号导轨提供方向感，而标题、段落、链接、列表和代码则保留其原生 Markdown 角色。

## 有序列表语法

将一个 Markdown 有序列表包裹在 `:::steps` 容器中。每个顶级列表项成为一个步骤。

````markdown
:::steps[Production deployment]
1. **Clone and prepare the workspace**

   Clone the repository and enter the project directory.

   ```powershell
   git clone https://github.com/LyraVoid/Shirone.git
   Set-Location Shirone
   ```

2. **Install dependencies**

   Use the repository's pinned package manager.

   ```powershell
   pnpm.cmd install
   ```

3. **Run project checks**

   Confirm Astro diagnostics and TypeScript checks pass.

   ```powershell
   npx.cmd astro check
   pnpm.cmd type-check
   ```

4. **Build the production site**

   Generate the static site and search index.

   ```powershell
   pnpm.cmd build
   ```
:::
````

:::steps[生产部署]
1. **克隆并准备工作区**

   克隆仓库并进入项目目录。

   ```powershell
   git clone https://github.com/LyraVoid/Shirone.git
   Set-Location Shirone
   ```

2. **安装依赖**

   使用仓库固定的包管理器。

   ```powershell
   pnpm.cmd install
   ```

3. **运行项目检查**

   确认 Astro 诊断和 TypeScript 检查通过。

   ```powershell
   npx.cmd astro check
   pnpm.cmd type-check
   ```

4. **构建生产站点**

   生成静态站点和搜索索引。

   ```powershell
   pnpm.cmd build
   ```
:::

## 选项

- `:::steps[Title]` 或 `title="Title"` 添加可见标签和可访问名称。
- `start=4` 更改第一个显示的步骤编号。
- 该容器必须恰好包含一个有序列表。无效或混合的输入将保持为普通的可读 Markdown，而不会被启发式地解释。
- 渲染在站点构建期间完成，不添加任何客户端 JavaScript 或网络请求。
