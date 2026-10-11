---
title: Mermaid 图表画廊
published: 2024-05-02
description: 一个 Mermaid 图表画廊，涵盖流程、交互、数据模型、日程和项目历史。
tags: [Demo, Example, Markdown, Mermaid]
category: Examples
lang: en
draft: false
---

Mermaid 能将 Markdown 中的文本描述转换为图表。以下示例使用 Shirone 的内容工作流，演示技术文章和项目笔记中常用的图表类型。

## 流程图

流程图描述一个过程，包括决策以及返回先前步骤的路径。

```mermaid
flowchart TD
    accTitle: Article publishing workflow
    accDescr: An article moves through writing, validation, preview, and build before publication. Failed validation returns it for revision.
    Draft[Write Markdown] --> Check{Validation passed?}
    Check -->|No| Revise[Revise article]
    Revise --> Check
    Check -->|Yes| Preview[Preview locally]
    Preview --> Build[Build static page]
    Build --> Publish[Publish]
```

## 时序图

时序图按时间顺序呈现参与者之间的协作。此示例跟踪一次从请求到 Mermaid 渲染的 Swup 导航过程。

```mermaid
sequenceDiagram
    accTitle: Diagram rendering after in-site navigation
    accDescr: A reader starts navigation, Swup replaces the article content, and the Mermaid renderer enhances diagrams on the new page.
    actor Reader
    participant Browser
    participant Swup
    participant Content as Article region
    participant Renderer as Mermaid renderer
    Reader->>Browser: Open another article
    Browser->>Swup: Start in-site navigation
    Swup->>Content: Replace page content
    Swup-->>Renderer: Emit content:replace
    Renderer->>Content: Find Mermaid containers
    Renderer-->>Browser: Insert themed SVGs
```

## 实体关系图

实体关系图对结构化数据以及作者、文章、标签和评论之间的连接进行建模。

```mermaid
erDiagram
    accTitle: Blog content relationships
    accDescr: Authors write posts, posts receive comments, and join records connect posts to multiple tags.
    AUTHOR ||--o{ POST : writes
    POST ||--o{ COMMENT : receives
    POST ||--o{ POST_TAG : classified_by
    TAG ||--o{ POST_TAG : groups
    AUTHOR {
        string id PK
        string display_name
    }
    POST {
        string slug PK
        string title
        datetime published_at
        string author_id FK
    }
    COMMENT {
        string id PK
        string post_slug FK
        string body
    }
    TAG {
        string id PK
        string label
    }
    POST_TAG {
        string post_slug FK
        string tag_id FK
    }
```

## 类图

类图传达软件设计中的职责、公共方法和依赖方向。

```mermaid
classDiagram
    accTitle: Markdown rendering modules
    accDescr: The content pipeline uses a Mermaid plugin to create fallback markup, which the client renderer later enhances into an SVG.
    class ContentPipeline {
        +render(markdown)
        +collectMetadata()
    }
    class MermaidPlugin {
        +transform(codeFence)
        +createFallback()
    }
    class DiagramRenderer {
        +initialize()
        +renderAll()
        +refreshTheme()
    }
    class ThemeTokens {
        +primary
        +surface
        +outline
    }
    ContentPipeline --> MermaidPlugin : uses
    DiagramRenderer --> MermaidPlugin : enhances output
    DiagramRenderer --> ThemeTokens : reads
```

## 状态图

状态图展示对象的生命周期以及在状态之间移动它的事件。

```mermaid
stateDiagram-v2
    accTitle: Article lifecycle
    accDescr: An article moves from draft to review and publication. It may return for revision or eventually be archived.
    [*] --> Draft
    Draft --> InReview : submit
    InReview --> Draft : request changes
    InReview --> Published : approve
    Published --> Draft : retract
    Published --> Archived : archive
    Archived --> [*]
```

## XY 图表

XY 图表结合条形和折线，在共享轴上比较数值和趋势。

```mermaid
xychart-beta
    accTitle: Six weeks of content performance
    accDescr: Bars show normalized weekly publishing volume, while the line shows normalized reading completion.
    title "Six weeks of content performance"
    x-axis "Week" [1, 2, 3, 4, 5, 6]
    y-axis "Relative score" 0 --> 100
    bar [36, 52, 44, 68, 76, 84]
    line [48, 55, 62, 61, 73, 81]
```

## 饼图

饼图以紧凑的方式比较各类别对整体的贡献。

```mermaid
pie showData
    accTitle: Article topics by share
    accDescr: Engineering accounts for forty percent, design systems for twenty-five percent, and the remainder is split between guides and essays.
    title Article topics by share
    "Engineering" : 40
    "Design systems" : 25
    "Guides" : 20
    "Essays" : 15
```

## 甘特图

甘特图沿日历时间线排列任务、依赖关系和里程碑。

```mermaid
gantt
    accTitle: Theme release plan
    accDescr: The release plan moves from requirements and interaction design through component development, testing, and release.
    title Theme release plan
    dateFormat YYYY-MM-DD
    axisFormat %m/%d
    section Design
    Confirm requirements :done, brief, 2024-05-06, 2d
    Refine interactions :done, interaction, after brief, 3d
    section Implementation
    Develop components :active, components, after interaction, 6d
    Write examples :examples, after interaction, 4d
    section Validation
    Automated tests :tests, after components, 3d
    Release :milestone, release, after tests, 0d
```

## 思维导图

思维导图将中心主题扩展为相关领域和支持性概念。

```mermaid
mindmap
  root((Shirone))
    Content experience
      Markdown
      Search
      Diagrams
    Interface system
      M3E tokens
      Responsive layout
      Color schemes
    Engineering quality
      Astro Check
      Playwright
      Accessibility
```

## 时间线

时间线总结重要事件或阶段，而不需要精确的日历时长。

```mermaid
timeline
    title Mermaid support evolution
    Pipeline design : Detect Mermaid fences
                    : Preserve source fallback
    Client enhancement : Load the runtime on demand
                       : Apply theme tokens
    Reliability : Support Swup navigation
                : Verify responsive and accessible output
```

## 用户旅程图

用户旅程图结合任务各阶段中的操作、参与者和体验评分。

```mermaid
journey
    accTitle: A reader understanding a technical article
    accDescr: The reader discovers an article, combines prose with diagrams to understand it, and then explores related topics.
    title A reader understanding a technical article
    section Discover
      Browse the article list: 4: Reader
      Choose a topic: 5: Reader
    section Understand
      Read the article: 4: Reader
      Inspect a relationship diagram: 5: Reader
    section Continue
      Open a related article: 4: Reader
      Bookmark the page: 3: Reader
```

## Git 图

Git 图展示在功能分支合并到主线之前，工作是如何推进的。

```mermaid
gitGraph
    accTitle: Mermaid feature branch history
    accDescr: A feature branch adds the renderer and tests before merging into the main branch for release.
    commit id: "base"
    branch mermaid
    checkout mermaid
    commit id: "add-renderer"
    commit id: "add-tests"
    checkout main
    merge mermaid id: "merge-mermaid"
    commit id: "release"
```

## 看板

看板按工作流状态对任务进行分组，使当前进度一目了然。

```mermaid
kanban
  backlog[Backlog]
    docs[Write author documentation]
    examples[Expand example data]
  active[In progress]
    themes[Verify theme adaptation]
  complete[Complete]
    fallback[Source fallback]
    rendering[Client rendering]
```

## 桑基图

桑基图使用连线宽度展示流量或其他数量在节点之间的流动。

```mermaid
sankey-beta
Landing,Reading,720
Discovery,Reading,430
Reading,Explore,360
Reading,Topics,210
Reading,Outbound,140
```

每个示例都使用标准的 `mermaid` 围栏代码块。服务器保留可读的源标记，浏览器将其增强为跟随当前主题的 SVG。当主题更改或 Swup 导航到本文时，图表会重新渲染。
