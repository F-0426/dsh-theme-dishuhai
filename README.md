# 抵数海 · dsh-theme-dishuhai

> **直抵数海之底 · Into the data deep**
>
> 一个为 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（DSH）Web 界面打造的**终末地风格**主题插件：
> 近黑底色 · 信号黄强调 · 直角工业排版 · **等高线地形纹理** · **「抵数海」启动页**。

![splash](./assets/screenshot-splash.png)

---

## ✨ 特性

### 🎨 主题（Theme）
- **近黑底 + 信号黄**：`#0d0d0c` 打底，`#ffef00` 只做"信号"（按钮、焦点、选中、进度）
- **三色工业条**：顶部 3px 的洋红/黄/青三段标记
- **全直角**：直角化界面，只保留状态点、头像等"本身是圆的"元素
- **完整 token 矩阵**：重映射 DSH 的 `--dsw-*` 语义令牌（含品牌蓝清理）

### 🗺️ 等高线地形层（Contour）
- **canvas 绘制**的装饰性底纹：值噪声 + fBm 高度场 → marching squares 提取 20+ 层等值线
- 极低对比度（信号黄 ~7% alpha），**只在所有内容之下**，不抢主体
- 20fps 节流、resize 适配、随插件卸载自动销毁

### 🚀 「抵数海」启动页（Splash）
- **Logo**：三字错落排版 + DeepSeek/Harness 铭牌
- **黄条进度**：与**真实就绪状态联动**——未就绪时缓慢逼近 88%，就绪后从容补满 100%
- **六阶段状态文字**：`INITIALIZING → LOADING PLUGINS → MOUNTING MEMORY → LINKING FLEET → CALIBRATING VISION → READY`
- **黄块扫屏转场**：满格停顿后，黄块从左向右扫过铺满屏幕，再揭幕进入界面（缓冲节奏）
- **无障碍**：支持 `prefers-reduced-motion`（减少动效）

---

## 📦 安装

> 本插件是 **DSH 第三方社区插件**，非深度求索官方产品。

### 方式一：放入 profile 的 node_modules（推荐）

```bash
# 1. 把本仓库克隆/复制到 DSH profile 的 node_modules 下
#    例如：C:\Users\<你>\.dsh\profiles\web\node_modules\dsh-theme-dishuhai

# 2. 在 profile 的 cordis.patch.yml 中启用（示例）
#    plugins:
#      dsh-theme-dishuhai:
#        client: true
```

### 方式二：作为本地 workspace 包

如果你用 pnpm 管理 profile：

```bash
cd ~/.dsh/profiles/web
pnpm add file:/path/to/dsh-theme-dishuhai
```

安装后**刷新浏览器页面**即可生效（client 插件无需重启 DSH）。

---

## ⚙️ 配置与调试开关

### URL 参数

| 参数 | 作用 |
|---|---|
| `?splash=hold` | **定格启动页**（不自动淡出）——调样式时用 |
| `?splash=off` | 关闭启动页 |
| 无参数 | 正常播放启动页动画 |

### localStorage 开关

| 键 | 值 | 作用 |
|---|---|---|
| `dsh-theme-endfield-contour` | `"1"` | 在**主界面**也开启等高线层（默认关；因 DSH 界面背景不透明，可能被遮住） |

---

## 🛠️ 开发说明

```
lib/
├── index.js      # host 侧（本主题为空壳，所有工作在 client 侧）
└── client.js     # client 侧：CSS 注入 + token 覆盖 + 启动页 + 等高线层
assets/
└── logo.png      # 「抵数海」Logo（内嵌为 base64 于 client.js）
```

**关键实现点**：

1. **token 覆盖而非注册新主题**：`ctx.theme.overrideTokens()` 叠加在内置 `dark` 之上（注册自定义主题 id 会因设置 schema 只持久化 light/dark 而在刷新后丢失）
2. **CSS 就地更新**：`<style data-plugin-css="...">` 只创建一次、每次运行替换 `textContent`，改样式**刷新即生效**
3. **启动页就绪检测**：`#root` 出现子元素 + 最短展示 1.8s → 补满进度 → 扫屏转场 → 揭幕
4. **等高线算法**：值噪声（hash + smoothstep 插值）→ 4 阶 fBm → marching squares（16 种情况 + 线性插值）→ canvas 一次性 `stroke()`

---

## 📄 许可（License）

本项目采用**双许可**：

| 范围 | 许可 |
|---|---|
| **代码** | [MIT](./LICENSE-CODE) |
| **内容**（Logo、文案、设计） | [CC BY-NC 4.0](./LICENSE-CONTENT) |

### ⚠️ 整体禁止商业使用

- Logo 字形来自**汉仪字库**（依《汉仪字库个人非商用许可协议》使用，**本项目不含任何字体文件**）
- 本项目是对《明日方舟：终末地》（鹰角网络）美术风格的**非商业粉丝二创**
- 商用请自行解决字体等相关授权问题

**素材署名详见 [CREDITS.md](./CREDITS.md)** —— 使用或分发本项目时请完整保留。

---

## 🙏 致谢

本项目的完成离不开以下原创者（详见 [CREDITS.md](./CREDITS.md)）：

- **汉仪字库** — Logo 字形所用字体（汉仪菱心体 / 汉仪力量黑简）
- **Nuclear_Creeper** — 在线大字生成工具 <https://ark.ncreeper.top/>
- **ymh0000123** — [dsh-theme-endfield](https://github.com/ymh0000123/dsh-theme-endfield)（MIT），等高线设计与设计语言整理的重要参考
- **鹰角网络** — 《明日方舟：终末地》美术风格致敬对象
- **DeepSeek Harness** — 运行平台

---

*Made with 🐋 by 哈哈鲸 · 抵数海项目*
