---
title: "图片画廊网格：语法与完整示例"
published: 2026-07-13
description: "一份关于图片画廊网格语法、参数、裁剪、响应式行为、标题及灯箱导航的完整指南。"
tags: [Markdown, Gallery, Image Grid, Demo]
category: "Examples"
draft: false
---

`:::grid` 是博客的图片画廊容器指令。它将普通的 Markdown 图片排列成响应式网格，保持统一的宽高比，并自动启用灯箱浏览功能。适用于文章插图、截图、作品集或小型相册。

同一画廊中的图片使用相同的卡片比例。默认情况下，居中裁剪会填满每张卡片，使每一行保持整齐；点击图片会在灯箱中打开完整的原始图片。每个画廊都有自己的灯箱分组，不会与文章中的其他图片混在一起。

> 本文既是功能文档，也是可视化测试页面。请在桌面、平板和手机宽度下查看示例，然后点击任意图片以验证灯箱分组。

## 最小语法

直接在 `:::grid` 和闭合的 `:::` 之间编写 Markdown 图片：

````markdown
:::grid
![图片描述](./image-1.webp)

![图片描述](./image-2.webp)
:::
````

每张图片必须独占一个段落，图片之间用空行分隔。画廊中只保留图片；段落、列表和代码块请写在容器外部。

以下是最小语法的结果。在不带参数的情况下，网格默认使用三列、`16/10` 比例和 `cover`。

:::grid
![最小语法结果：第一张图片](./landscape-1.webp)

![最小语法结果：第二张图片](./landscape-2.webp)
:::

## 参数概览

所有参数写在开始指令后的花括号中：`:::grid{参数="值"}`。

| 参数 | 允许的值 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `columns` | 从 `1` 到 `6` 的整数 | `3` | 桌面端每行的列数。无效值将回退为 `3`。 |
| `aspect` | 正比例，如 `16/9`、`3/4` 或 `1/1` | `16/10` | 显示的卡片比例，而非原始图片比例。 |
| `fit` | `cover`、`contain` | `cover` | 图片填充模式。`cover` 裁剪填充；`contain` 完整显示图片，可能留有空白。 |

完整示例：

````markdown
:::grid{columns="3" aspect="16/9" fit="cover"}
![第一张图片](./image-1.webp "可选标题")

![第二张图片](./image-2.webp "可选标题")

![第三张图片](./image-3.webp "可选标题")
:::
````

以下结果是使用上述三列横图语法的效果。比较卡片比例、列数，以及标题优先于替代文本作为说明文字的方式：

:::grid{columns="3" aspect="16/9" fit="cover"}
![参数示例：第一张横图](./landscape-1.webp "横图标题 1")

![参数示例：第二张横图](./landscape-2.webp "横图标题 2")

![参数示例：第三张横图](./landscape-3.webp "横图标题 3")
:::

## 标题与替代文本

图片的替代文本既可用作无障碍替代文字，也可用作默认标题。当图片带有可选标题时，将使用标题作为说明文字：

```markdown
![用于无障碍的文字](./image.webp "显示在图片下方的标题")
```

在同一行中，标题对齐到每张卡片的底部。换行的标题不会使其他标题浮动在不同的高度。比例文本如 `3:4` 和 `16:9` 可以直接写在正文、标题和替代文本中，无需转义。

此示例演示了默认的替代文本标题、显式标题标题，以及较长标题的底部对齐效果：

:::grid{columns="3" aspect="1/1"}
![此图片没有标题，因此其替代文本作为标题](./square-1.webp)

![第二张带有无障碍替代文本的方图](./square-2.webp "此标题显示为说明文字")

![一张 3:4 海报的无障碍描述](./square-3.webp "这是一个较长的标题，用于检查换行时每个标题是否仍保持对齐到卡片底部")
:::

## 布局与裁剪

桌面端布局使用 `columns` 指定的列数。低于 `768px` 时，网格最多使用两列；低于 `480px` 时，切换为一列。卡片容器固定 `aspect` 比例并裁剪圆角，而图片填充卡片时不带主题默认的图片边距。

- 选择 `cover`：推荐的默认值。图片从中心裁剪以填充卡片，使画廊看起来更一致。
- 选择 `contain`：完整显示原始图片，不裁剪。当其比例与卡片不同时，主题背景可见；适用于不能裁剪的图片。
- 要在不产生空白的情况下完整保留图片，可将 `aspect` 设置为接近原始图片比例，或将图片单独放在一个网格中。

以下示例将相同的竖图分别放入 `16/9` 卡片中，使用 `cover` 和 `contain`。第一个裁剪图片；第二个完整保留图片并留有背景空间。

````markdown
:::grid{columns="3" aspect="16/9" fit="cover"}
![图片描述](./image-1.webp "可选标题")

![图片描述](./image-2.webp "可选标题")
:::

:::grid{columns="3" aspect="16/9" fit="contain"}
![图片描述](./image-1.webp "可选标题")

![图片描述](./image-2.webp "可选标题")
:::
````

:::grid{columns="3" aspect="16/9" fit="cover"}
![第一张 cover 结果](./default-portrait-1.webp "Cover：居中裁剪")

![第二张 cover 结果](./default-portrait-2.webp "Cover：填充卡片")

![第三张 cover 结果](./default-portrait-3.webp "Cover：更一致的布局")
:::

:::grid{columns="3" aspect="16/9" fit="contain"}
![第一张 contain 结果](./default-portrait-1.webp "Contain：完整保留原始图片")

![第二张 contain 结果](./default-portrait-2.webp "Contain：可能出现空白")

![第三张 contain 结果](./default-portrait-3.webp "Contain：适用于边缘细节")
:::

## 默认配置

不带属性时，默认为三列、`16/10` 比例和 `cover` 裁剪。这三张竖图用于验证默认裁剪和标题。

````markdown
:::grid
![图片描述](./image-1.webp)

![图片描述](./image-2.webp)

![图片描述](./image-3.webp)
:::
````

:::grid
![默认配置：竖图一](./default-portrait-1.webp)

![默认配置：竖图二](./default-portrait-2.webp)

![默认配置：竖图三](./default-portrait-3.webp)
:::

## 三列竖图：3:4

使用 `aspect="3/4"` 时，三张竖图一致地填充比例合适的垂直卡片。如果原始图片比例不同，`cover` 会从中心裁剪其边缘。

````markdown
:::grid{columns="3" aspect="3/4"}
![竖图描述](./portrait-1.webp)

![竖图描述](./portrait-2.webp)

![竖图描述](./portrait-3.webp)
:::
````

:::grid{columns="3" aspect="3/4"}
![3:4 测试图一](./default-portrait-1.webp "竖图 1")

![3:4 测试图二](./default-portrait-2.webp "竖图 2")

![3:4 测试图三](./default-portrait-3.webp "竖图 3")
:::

## 三列横图：16:9

此组展示了三列布局中常见的视频封面比例。当横图接近卡片比例时，裁剪最少。

````markdown
:::grid{columns="3" aspect="16/9"}
![横图描述](./landscape-1.webp)

![横图描述](./landscape-2.webp)

![横图描述](./landscape-3.webp)
:::
````

:::grid{columns="3" aspect="16/9"}
![16:9 测试图一](./feature-landscape-1.webp)

![16:9 测试图二](./feature-landscape-2.webp)

![16:9 测试图三](./feature-landscape-3.webp)
:::

## 两列方图：1:1

当需要更大的预览卡片时，两列效果很好。第三张图移到下一行。最后一行保持其网格轨道宽度，而不是拉伸图片填满整行。

````markdown
:::grid{columns="2" aspect="1/1"}
![方图描述](./square-1.webp)

![方图描述](./square-2.webp)

![方图描述](./square-3.webp)
:::
````

:::grid{columns="2" aspect="1/1"}
![1:1 测试图一](./mixed-square-1.webp)

![1:1 测试图二](./mixed-square-2.webp)

![1:1 测试图三](./mixed-square-3.webp)
:::

## 四列配合 `contain`

`fit="contain"` 不裁剪原始图片。当图片比例与卡片比例不同时，主题背景可见。这是有意为之，而非布局问题。同时验证四列网格和独立的灯箱分组不会相互干扰。

````markdown
:::grid{columns="4" aspect="16/9" fit="contain"}
![图片描述](./image-1.webp)

![图片描述](./image-2.webp)

![图片描述](./image-3.webp)
:::
````

:::grid{columns="4" aspect="16/9" fit="contain"}
![Contain：竖图一](./default-portrait-1.webp)

![Contain：竖图二](./default-portrait-2.webp)

![Contain：竖图三](./default-portrait-3.webp)
:::

## 单列详情图

单列适用于需要更大阅读尺寸的图片。在桌面、平板和手机上始终保持一列，原始图片仍可在灯箱中查看。

````markdown
:::grid{columns="1" aspect="16/9"}
![图片描述](./detail.webp)
:::
````

:::grid{columns="1" aspect="16/9"}
![单列测试图](./feature-landscape-1.webp)
:::

## 稀疏的五列行

五列验证了较高的列数支持。只有三张图片时，最后一行保持左对齐，而不是拉伸图片。

````markdown
:::grid{columns="5" aspect="1/1"}
![缩略图描述](./thumb-1.webp)

![缩略图描述](./thumb-2.webp)

![缩略图描述](./thumb-3.webp)
:::
````

:::grid{columns="5" aspect="1/1"}
![五列测试图一](./mixed-square-1.webp)

![五列测试图二](./mixed-square-2.webp)

![五列测试图三](./mixed-square-3.webp)
:::

## 六列混合图片

六列是目前的最大值。混合横图和竖图可验证 `cover` 裁剪、窄卡片上的标题以及密集的桌面布局。对于可读的文章内容，两到四列通常更合适。

````markdown
:::grid{columns="6" aspect="1/1"}
![图片描述](./image-1.webp)

![图片描述](./image-2.webp)

![图片描述](./image-3.webp)

![图片描述](./image-4.webp)

![图片描述](./image-5.webp)

![图片描述](./image-6.webp)
:::
````

:::grid{columns="6" aspect="1/1"}
![六列测试图一](./default-portrait-1.webp)

![六列测试图二](./default-portrait-2.webp)

![六列测试图三](./default-portrait-3.webp)

![六列测试图四](./feature-landscape-1.webp)

![六列测试图五](./feature-landscape-2.webp)

![六列测试图六](./feature-landscape-3.webp)
:::

## 四列方图：1:1

四张相同比例方图构成典型的四列布局。桌面端在一行中显示全部四张；平板折叠为两列，手机为一列。

````markdown
:::grid{columns="4" aspect="1/1"}
![方图描述](./square-1.webp)

![方图描述](./square-2.webp)

![方图描述](./square-3.webp)

![方图描述](./square-4.webp)
:::
````

:::grid{columns="4" aspect="1/1"}
![方图一](./square-1.webp)

![方图二](./square-2.webp)

![方图三](./square-3.webp)

![方图四](./square-4.webp)
:::

## 六列横图：16:9

六列横图适用于缩略图预览、作品集和截图索引。即使原始比例略有不同，`cover` 也能一致地填充每张 `16/9` 卡片。

````markdown
:::grid{columns="6" aspect="16/9"}
![横图描述](./landscape-1.webp)

![横图描述](./landscape-2.webp)

![横图描述](./landscape-3.webp)

![横图描述](./landscape-4.webp)

![横图描述](./landscape-5.webp)

![横图描述](./landscape-6.webp)
:::
````

:::grid{columns="6" aspect="16/9"}
![横图一](./landscape-1.webp)

![横图二](./landscape-2.webp)

![横图三](./landscape-3.webp)

![横图四](./landscape-4.webp)

![横图五](./landscape-5.webp)

![横图六](./landscape-6.webp)
:::

## 三列竖图：3:4

这组六张竖图展示了人物、海报或手机截图的常见布局。图片形成两行三列，标题对齐到底部。

````markdown
:::grid{columns="3" aspect="3/4"}
![竖图描述](./portrait-1.webp)

![竖图描述](./portrait-2.webp)

![竖图描述](./portrait-3.webp)

![竖图描述](./portrait-4.webp)

![竖图描述](./portrait-5.webp)

![竖图描述](./portrait-6.webp)
:::
````

:::grid{columns="3" aspect="3/4"}
![竖图一](./portrait-1.webp)

![竖图二](./portrait-2.webp)

![竖图三](./portrait-3.webp)

![竖图四](./portrait-4.webp)

![竖图五](./portrait-5.webp)

![竖图六](./portrait-6.webp)
:::

## 边缘关键内容：`cover` 与灯箱

这些图片在边缘附近包含重要的文字或细节。`cover` 使网格保持整洁，但可能裁剪这些边缘；点击图片可在灯箱中查看未裁剪的原始图片。对于边缘敏感图片，请使用清晰的标题，或使用下方的 `contain`。

````markdown
:::grid{columns="3" aspect="16/9" fit="cover"}
![边缘关键内容](./critical-1.webp "打开灯箱查看完整的边缘内容")

![边缘关键内容](./critical-2.webp "打开灯箱查看完整的边缘内容")

![边缘关键内容](./critical-3.webp "打开灯箱查看完整的边缘内容")
:::
````

:::grid{columns="3" aspect="16/9" fit="cover"}
![第一张边缘关键图片](./critical-1.webp "打开灯箱查看完整的边缘内容")

![第二张边缘关键图片](./critical-2.webp "打开灯箱查看完整的边缘内容")

![第三张边缘关键图片](./critical-3.webp "打开灯箱查看完整的边缘内容")
:::

## 极端比例配合 `contain`

对于横幅、长截图和其他极端比例的图片，`contain` 显示完整的原始图片。与 `cover` 不同，它可能会留出主题背景空间，但从不裁剪内容。

````markdown
:::grid{columns="3" aspect="16/9" fit="contain"}
![完整截图描述](./wide-1.webp)

![完整截图描述](./wide-2.webp)

![完整截图描述](./wide-3.webp)
:::
````

:::grid{columns="3" aspect="16/9" fit="contain"}
![极端比例图一](./extreme-1.webp)

![极端比例图二](./extreme-2.webp)

![极端比例图三](./extreme-3.webp)
:::

## 透明图片

透明图片会透出卡片的主题背景。此单列 `contain` 示例便于检查透明区域、原始边缘和灯箱行为。

````markdown
:::grid{columns="1" aspect="16/9" fit="contain"}
![透明图片描述](./transparent.webp)
:::
````

:::grid{columns="1" aspect="16/9" fit="contain"}
![透明背景测试图](./transparent-1.webp)
:::

## 灯箱导航

点击网格中的任意图片即可打开 Fancybox 灯箱。在灯箱中，您可以缩放、旋转、全屏、查看缩略图，并使用方向键导航。导航仅限于当前 `:::grid` 容器内：例如，点击“16:9 测试图一”只会打开该部分中的另外两张横图。

同一文章中普通的 Markdown 图片仍会被单独处理；它们不会被添加到任何画廊网格中。

## 检查清单

1. 每个网格中的图片具有一致的尺寸，标题位于卡片下方。
2. 悬停时图片轻微缩放；点击后可使用键盘缩放、旋转和导航。
3. 点击“16:9 测试图一”时，灯箱仅浏览该部分中的另外两张横图。
4. 低于 768px 时，网格最多使用两列；低于 480px 时，使用一列。
5. “四列配合 `contain`”中的竖图完全可见，留有空白且无裁剪。
6. 五列和六列网格在宽屏上保持指定的列数，然后根据响应式规则折叠为两列或一列。
