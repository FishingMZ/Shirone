---
title: Shirone Markdown 增强功能
published: 2026-08-19
pinned: true
description: 探索 Shirone 的自定义 Markdown 扩展、表现力组件和创作语法。
tags: [Demo, Markdown, Extensions, Theme, Shirone]
series: markdown-syntax-guide
seriesOrder: 3
category: Guides
lang: en
draft: false
---

Shirone 提供了一系列主题专属的 Markdown 扩展和自定义语法容器。它们构建在我们原生的统一 AST 处理管道之上，所有扩展在站点构建时都会渲染为无障碍的语义化 HTML，具有**零客户端 JavaScript 水合开销**和**100% M3E 设计令牌对齐**。

## 文件树

文件树将多级项目结构、源代码层级和终端目录输出转换为紧凑、可交互的树形视图，具有自动扩展名图标、差异高亮和可折叠分支。

### 1. 嵌套列表语法（`:::file-tree`）

当直接将文件层级写为 Markdown 嵌套列表时，使用 `:::file-tree` 块指令。

```markdown
:::file-tree{title="Shirone source tree"}
- src
  - components/
    - ++ Navigation.svelte # added component
    - -- Button.astro # removed component
  - content
    - posts/
      - markdown-enhancements.md
  - layouts/
    - PostLayout.astro
  - plugins
    - markdown/
      - rehype-file-tree.mjs
  - styles
    - markdown/
      - trees.css
  - **content.config.ts** # important file
- public/
  - favicon.svg
- package.json
:::
```

:::file-tree{title="Shirone 源代码树"}
- src
  - components/
    - ++ Navigation.svelte # 添加的组件
    - -- Button.astro # 移除的组件
  - content
    - posts/
      - markdown-enhancements.md
  - layouts/
    - PostLayout.astro
  - plugins
    - markdown/
      - rehype-file-tree.mjs
  - styles
    - markdown/
      - trees.css
  - **content.config.ts** # 重要文件
- public/
  - favicon.svg
- package.json
:::

#### 创作规则与标记

- **差异状态**：在项目前加上 `++`（绿色背景和徽章）或 `--`（红色背景和删除线）以高亮更改。
- **注释**：`#` 之后的任何文本都会渲染为静默的、右对齐的行内注释。
- **强调**：将名称包裹在 `**粗体**` 中，以赋予关键文件突出的视觉权重。
- **可折叠文件夹**：从嵌套列表项推断出的目录默认展开。添加尾部斜杠（例如 `components/`）可创建折叠目录，读者可以通过点击或键盘导航展开。

---

### 2. 终端输出语法（```` ```file-tree ````）

当您已有由 `tree` 等命令行工具生成的目录树文本时，直接将其粘贴到 `file-tree` 围栏代码块中。Unicode 分支字符（`├──`、`└──`、`│`）和 ASCII 分支都会自动解析。

````markdown
```file-tree title="Build output" icon="simple"
dist
├── _astro/
│   ├── index.css
│   └── page.js
└── favicon.ico
```
````

```file-tree title="Build output" icon="simple"
dist
├── _astro/
│   ├── index.css
│   └── page.js
└── favicon.ico
```

#### 配置选项

- `title="string"`：为树设置自定义标题和可访问标签。
- `icon="colored" | "simple"`：在多色扩展名图标（`colored`，默认）或极简单色图标（`simple`）之间选择。

---

## 代码树

交互式代码树将左侧的多级文件层级导航窗格与右侧的即时代码面板切换配对。它们为多文件示例、模块或整个目录的走查提供类似 IDE 的阅读体验。

### 1. 容器语法（`:::code-tree`）

在 `:::code-tree` 块指令中组合多个围栏代码块。每个代码块通过 `title="path/to/file"` 指定其路径。

````markdown
:::code-tree{title="Shirone Component Demo" height="380px" entry="src/Button.svelte"}
```svelte title="src/Button.svelte"
<script lang="ts">
  let { label = "Click me" } = $props();
</script>

<button class="m3-btn">{label}</button>
```

```stylus title="src/styles/button.styl"
.m3-btn
  background: var(--primary)
  color: var(--on-primary)
  border-radius: var(--shape-corner-m)
```

```json title="package.json"
{
  "name": "button-demo",
  "version": "1.0.0"
}
```
:::
````

:::code-tree{title="Shirone 组件演示" height="380px" entry="src/Button.svelte"}
```svelte title="src/Button.svelte"
<script lang="ts">
  let { label = "Click me" } = $props();
</script>

<button class="m3-btn">{label}</button>
```

```stylus title="src/styles/button.styl"
.m3-btn
  background: var(--primary)
  color: var(--on-primary)
  border-radius: var(--shape-corner-m)
```

```json title="package.json"
{
  "name": "button-demo",
  "version": "1.0.0"
}
```
:::

#### 配置与标记

- `title="string"`：设置代码树的标题和可访问标签。
- `height="string"`：设置桌面视图的高度（默认 `420px`，例如 `380px`、`26rem`）。
- `entry="filepath"`：指定首次加载时处于活动状态的文件。
- `icon="colored" | "simple"`：在彩色或极简单色文件图标之间切换。
- `:active`：将 `:active` 放在任何围栏代码块上，以将其指定为默认活动标签页。

---

### 2. 本地目录自动导入（`@[code-tree]`）

直接指向工作区中的任何本地目录路径，以在构建时自动扫描并生成交互式代码树，而无需手动复制文件内容。

```markdown
@[code-tree title="Anime Utilities" entry="status.ts"](/src/utils/anime)
```

@[code-tree title="动漫工具" entry="status.ts"](/src/utils/anime)

@[code-tree title="站点配置" entry="siteConfig.ts"](/src/config)
