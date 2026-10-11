---
title: "音频朗读器：日系动漫神秘语音"
published: 2026-08-29
description: 一小段神秘的日系动漫语音片段合集，通过音频朗读器按需播放。
tags: [Example, Audio Reader]
series: media-embeds
seriesOrder: 2
category: Examples
draft: false
---

这些简短的日语语音片段仿佛是从动漫场景的边缘捕捉而来：一声戏谑的呼唤、一句明朗的问候、一声轻笑，以及几句来源不明的台词。它们是情绪样本而非对话文本，因此让声音本身来传达含义吧。

音频朗读器会保持安静，直到你选择聆听。每个扬声器按钮只有在被按下后才会加载并播放其片段。

```markdown
:audio-reader[Clip title]{src="/assets/audio/filename.wav"}
```

## 语音片段

- **Baka**：:audio-reader[バカ]{src="/assets/audio/Baka.wav"}
- **Ciallo**：:audio-reader[Ciallo！！]{src="/assets/audio/Ciallo.wav"}
- **Ehe**：:audio-reader[开玩笑的感觉]{src="/assets/audio/Ehe.wav"}
- **Imoi**：:audio-reader[イモい]{src="/assets/audio/Imoi.wav"}
- **Zako**：:audio-reader[雑魚じゃん、雑魚雑魚]{src="/assets/audio/Zako.wav"}

`src` 必须使用站点根路径或 HTTPS URL，且指令标签不能为空。无效或不完整的指令将保持为普通 Markdown，不会加载音频朗读器资源。
