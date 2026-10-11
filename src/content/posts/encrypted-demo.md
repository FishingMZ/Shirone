---
title: 密码保护与文章加密演示
published: 2026-08-20
pinned: true
description: 演示 Shirone 中的客户端认证解密、内存会话持久化以及 M3E 设计令牌。
tags: [Demo, Security, Encryption, Markdown]
category: Examples
lang: en
encrypted: true
password: "shirone-secret"
passwordHint: "Hint: the demo unlock password is shirone-secret"
hideHomeContent: true
---

# 密码保护文章

恭喜！您已成功解锁此加密文章。浏览器使用 **Web Crypto API（AES-256-GCM + PBKDF2）** 在本地解密了这份预编译内容。

---

## 1. 安全架构与核心功能

Shirone 的文章加密系统与受保护的相册共享统一的安全基础，为静态发布提供企业级安全性：

1. **静态 HTML 构建中零明文**  
   在 Astro SSG 构建流程中，文章 Markdown 被编译为 HTML，并在输出页面之前立即使用 AES-256-GCM 加密。发布的静态 HTML 中**不含**受保护正文或大纲的任何**明文**。

2. **带 AAD 作用域绑定的认证加密**  
   - 密钥派生遵循 OWASP 建议，使用 **310,000 次 PBKDF2 迭代**（SHA-256）和密码学随机的 16 字节盐值；
   - 每个加密载荷生成独立的 12 字节随机 IV；
   - **附加认证数据（AAD）** 绑定 `shirone-protected-content:1:post:${slug}`，确保密文无法在不同文章或相册之间重放。

3. **会话持久化与零磁盘密码存储**  
   - 解密内容缓存在临时的浏览器会话存储中，30 分钟后过期；
   - 明文密码永远不会写入磁盘或存储；
   - 解密状态在同一会话中的 Swup 客户端导航和页面重新加载之间无缝保持。

4. **全站防泄露**  
   - **搜索索引**：静态页面不含明文，防止搜索引擎和 Pagefind 索引私密内容；
   - **RSS 订阅**：受保护文章在订阅中输出本地化占位符，防止 RSS 聚合器抓取敏感文本；
   - **卡片摘要与字数**：配置 `hideHomeContent: true` 时，索引和归档卡片上的描述和字数会被遮蔽；
   - **目录（TOC）**：标题层级在解锁前保持隐藏，解密后动态重建并与 M3E 样式同步。

> 💡 **演示说明**：此演示文章的默认解锁密码为 `shirone-secret`。

---

## 2. 交互式丰富内容演示

文章解密后与运行时辅助程序协调，动态挂载语法高亮、代码折叠、交互式 Mermaid 图表、LaTeX 公式和图片灯箱。

### 2.1 代码块与语法高亮

以下代码块用于测试 Expressive Code 语法高亮、复制操作和行装饰：

```typescript
import { decryptProtectedContent, type ProtectedPayload } from "@/utils/password-protection";

/**
 * Client-side post decryption example
 */
async function unlockArticle(payload: ProtectedPayload, password: string): Promise<string> {
    const scope = payload.scope;
    console.log(`[Shirone] Decrypting scope: ${scope}`);
    
    // Execute AES-256-GCM decryption with AAD verification
    const decryptedHtml = await decryptProtectedContent(payload, password, scope);
    console.log("[Shirone] Decryption successful, length:", decryptedHtml.length);
    return decryptedHtml;
}
```

```bash
# Verify build and type checking
npx.cmd astro check
pnpm.cmd type-check
pnpm.cmd test
```

### 2.2 Mermaid 架构图

以下流程图通过 Mermaid 渲染，并在解密后动态绑定：

```mermaid
flowchart TD
    subgraph build["构建管道"]
        A[Markdown 源文件] --> B[Astro 管道]
        B --> C[渲染 HTML]
        C --> D[encryptProtectedContent]
        D --> E[ProtectedPayload]
        E --> F[包含 ProtectedPost 的静态 HTML]
    end

    subgraph runtime["客户端运行时"]
        G[读者访问页面] --> H{有效会话？}
        H -->|是| K[渲染解密后的 HTML]
        H -->|否| I[显示 PasswordGate]
        I --> J[用户提交密码]
        J --> L[Web Crypto AES-GCM 解密]
        L -->|错误| M[显示错误反馈]
        L -->|成功| N[存储会话记录]
        N --> K
        K --> O[触发解密后协调器]
        O --> P[初始化复制、Mermaid、KaTeX 和目录]
    end
```

### 2.3 LaTeX 数学公式

行内公式：欧拉恒等式 $e^{i\pi} + 1 = 0$ 和高斯积分 $\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$。

带水平滚动容器的展示数学公式：

$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right)
$$

$$
\mathcal{L}_{\text{AES-GCM}} = \text{GHASH}_H(A \parallel C \parallel L) \oplus \text{AES}_K(J_0)
$$

### 2.4 提示块

:::note 架构说明
此加密系统遵循原子设计原则和最小补丁约定，同时不影响 SSR 稳定性。
:::

:::tip 主题集成
解锁后，尝试在明暗模式之间切换或更改主色调；解密后的组件会动态适应活动的设计令牌。
:::

:::important 安全范围
静态客户端加密旨在防止未经授权的浏览和自动索引。对于关键商业机密，建议使用服务端认证。
:::

:::warning 密码恢复
静态加密没有集中式服务器数据库。如果忘记密码，加密内容将无法恢复。
:::

### 2.5 GitHub 仓库卡片

::github{repo="withastro/astro"}

---

## 3. 配置参考

| 参数 | 类型 | 是否必需 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- | :--- |
| `encrypted` | `boolean` | 否 | `false` | 显式将文章标记为加密。如果设置了 `password`，则隐式为 `true`。 |
| `password` | `string` | 是 | 无 | 用于在构建时加密、在运行时解锁的明文密码。 |
| `passwordHint` | `string` | 否 | `""` | 显示在密码输入框下方的可选提示。 |
| `hideHomeContent` | `boolean` | 否 | `true` | 在索引卡片、归档和 RSS 订阅中隐藏文章描述和字数指标。 |

---

## 4. 总结

此演示验证了 Shirone 中完整的加密生命周期：静态输出中零明文、稳健的密码学验证、跨导航和页面重新加载的会话持久化，以及动态的运行时重新水合。
