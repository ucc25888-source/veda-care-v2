# VEDA CARE 郝營養 — 官方網站技術文件

> 最後更新：2026.06.19　｜　網站生效日：2026.06.02
>
> 📌 **給接手的人**：這份文件記錄了整個網站的建置流程、檔案位置、SEO/GEO 設定與注意事項。未來做新品牌網站可直接複製這個框架。

---

## 目錄

1. [網站基本資訊](#網站基本資訊)
2. [電腦端檔案位置](#電腦端檔案位置)
3. [GitHub 版本控制](#github-版本控制)
4. [Vercel 部署資訊](#vercel-部署資訊)
5. [網站頁面架構](#網站頁面架構)
6. [使用工具與服務](#使用工具與服務)
7. [SEO 基礎建設](#seo-基礎建設)
8. [GEO — AI 搜尋引擎優化](#geo--ai-搜尋引擎優化)
9. [數位資產與 Google 驗證紀錄](#-數位資產與-google-搜尋引擎點火紀錄)
10. [2026.06.19 完成事項](#-20260619-完成事項總覽)
11. [每月維護清單](#-每月維護健康檢查清單)
12. [更新推送流程](#更新推送流程)
13. [注意事項（不可犯的錯）](#-注意事項不可犯的錯)
14. [複製到新品牌的框架步驟](#-複製到新品牌的框架步驟)
15. [版本記錄](#版本記錄)

---

## 網站基本資訊

| 項目 | 內容 |
|------|------|
| 品牌名稱 | VEDA CARE 郝營養 |
| 網站標語 | 科研級植萃精粹 · 精準植萃補給 · 重塑生命平衡 |
| 正式網址 | https://www.vedacare.com.tw |
| Vercel 網址 | https://veda-care-v2.vercel.app |
| 網站生效日 | 2026.06.02 |
| 最後更新 | 2026.06.19 |
| 語言 | 繁體中文（zh-Hant-TW） |
| 目標市場 | 台灣 |

---

## 電腦端檔案位置

| 說明 | 路徑 |
|------|------|
| **Git 工作目錄（最新版，唯一可推送）** | `C:\git\` |
| 舊版備份（ZIP 解壓，勿使用） | `C:\VEDA CARE官網\veda-care-v2-main\` |
| 主要 HTML 進入點 | `C:\git\client\index.html` |
| 爬蟲設定 | `C:\git\client\public\robots.txt` |
| 網站地圖 | `C:\git\client\public\sitemap.xml` |
| 前端頁面元件 | `C:\git\client\src\pages\` |
| 共用常數／產品資料 | `C:\git\shared\const.ts` |

> ⚠️ **重要**：`C:\VEDA CARE官網\` 是舊的 ZIP 解壓版本，沒有 git，**任何修改請只在 `C:\git\` 操作**。

---

## GitHub 版本控制

| 項目 | 內容 |
|------|------|
| GitHub 帳號 | ucc25888-source |
| Repository 名稱 | veda-care-v2 |
| Repository 網址 | https://github.com/ucc25888-source/veda-care-v2 |
| 主要分支 | main |
| 最新 Commit | docs: update DNS TXT Record verification status to confirmed |

---

## Vercel 部署資訊

| 項目 | 內容 |
|------|------|
| 平台 | Vercel |
| 專案名稱 | veda-care-v2 |
| 連結 GitHub | 是（main branch 推送即自動部署） |
| 正式網址 | https://www.vedacare.com.tw |
| 備用網址 | https://veda-care-v2.vercel.app |
| 部署觸發方式 | 推送到 GitHub main branch → Vercel 自動重新部署（約 1～2 分鐘） |

---

## 網站頁面架構

| 路徑 | 頁面 | 說明 |
|------|------|------|
| `/` | Home | 首頁，Hero 區塊 + 精選產品 + 品牌理念 |
| `/shop` | Shop | 商品列表頁 |
| `/product/:id` | ProductDetail | 單一產品詳情頁 |
| `/cart` | Cart | 購物車頁面 |
| `/about` | About | 關於 VEDA CARE |
| `/quiz` | WellnessQuiz | 健康測驗 |
| `/stress-test` | StressTest | 壓力測試 |
| `/awareness-check` | AwarenessCheck | 健康意識檢測 |
| `/policies` | Policies | 隱私政策 / 退換貨條款 |

---

## 使用工具與服務

### 建站流程工具
| 工具 | 用途 | 備註 |
|------|------|------|
| Manus | 網站 AI 建置平台，初版生成 | 生成後匯出程式碼 |
| Claude（Cowork 模式） | 程式碼修改、SEO 優化、文件撰寫 | 本文件由此工具協助撰寫 |
| Visual Studio Code | 程式碼編輯器 | 手動細修用 |
| GitHub Desktop | Git 版本控制操作介面 | 推送到 GitHub |

### 部署與託管
| 服務 | 用途 | 網址 |
|------|------|------|
| GitHub | 程式碼版本控制 / 原始碼儲存 | https://github.com/ucc25888-source/veda-care-v2 |
| Vercel | 網站部署與 CDN 託管 | https://vercel.com/dashboard |
| GoDaddy | 域名購買與 DNS 管理 | vedacare.com.tw |

### 技術框架
| 技術 | 說明 |
|------|------|
| React 18 + TypeScript | 前端框架 |
| Vite | 前端建置工具 |
| Tailwind CSS | CSS 樣式框架 |
| shadcn/ui + Radix UI | UI 元件庫 |
| Wouter | 前端路由 |
| tRPC | 前後端 API 型別安全連接 |
| Express.js | 後端伺服器 |
| Drizzle ORM + MySQL | 資料庫 ORM |
| Framer Motion | 動畫效果 |
| Zod | 資料驗證 |

---

## SEO 基礎建設

SEO（Search Engine Optimization）讓 Google 等傳統搜尋引擎能找到並排名本網站。

### 已完成設定（2026.06.19）

| 項目 | 檔案位置 | 說明 |
|------|------|------|
| Google 驗證 Meta Tag | `client/index.html` 第 6 行 | 證明網站擁有權 |
| robots.txt | `client/public/robots.txt` | 告訴爬蟲可以進入哪些頁面 |
| sitemap.xml | `client/public\sitemap.xml` | 列出所有頁面讓 Google 收錄 |
| JSON-LD 結構化資料 | `client/index.html` `<head>` 底部 | 告訴 Google 這是什麼品牌 |

### robots.txt 內容

```
User-agent: *
Allow: /
Sitemap: https://www.vedacare.com.tw/sitemap.xml
```

### sitemap.xml 收錄頁面（8 頁）

- https://www.vedacare.com.tw/
- https://www.vedacare.com.tw/shop
- https://www.vedacare.com.tw/about
- https://www.vedacare.com.tw/product/product-1
- https://www.vedacare.com.tw/product/product-2
- https://www.vedacare.com.tw/product/product-3
- https://www.vedacare.com.tw/quiz
- https://www.vedacare.com.tw/policies

### JSON-LD 結構化資料（Organization Schema）

位置：`client/index.html` `<head>` 區塊底部

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VEDA CARE 郝營養",
  "alternateName": "VEDA CARE",
  "url": "https://www.vedacare.com.tw",
  "logo": "https://www.vedacare.com.tw/brand-hero-2.png",
  "description": "科研級植萃精粹，精準植萃補給，重塑生命平衡。VEDA CARE 郝營養提供放鬆支持、骨骼肌肉健康與日常保健補充品。",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "zh-TW"
  }
}
```

---

## GEO — AI 搜尋引擎優化

GEO（Generative Engine Optimization）是針對 AI 搜尋引擎（ChatGPT Search、Perplexity、Google AI Overview）的優化，讓 AI 推薦答案時能主動提及 VEDA CARE 郝營養。

### AI 搜尋引擎與 GEO 原理

| AI 搜尋平台 | 資料來源 | GEO 策略 |
|------|------|------|
| ChatGPT Search | Bing 索引 + 網頁爬取 | 讓 Bing 收錄網站，內容清楚描述品牌 |
| Perplexity | 自行爬取網頁 | robots.txt 允許爬取，結構化資料清晰 |
| Google AI Overview | Google 索引 | Google Search Console 驗證 + SEO |

### 已完成的 GEO 基礎設定

- ✅ **JSON-LD 結構化資料**：明確告訴 AI 爬蟲「我是 VEDA CARE 郝營養，是一個健康補充品品牌」
- ✅ **robots.txt 開放爬取**：所有 AI 爬蟲皆可進入
- ✅ **Google Search Console 驗證**：Google AI Overview 的基礎
- ✅ **品牌名稱一致性**：頁面 title、description、JSON-LD 統一使用「VEDA CARE 郝營養」

### 未來可加強的 GEO 項目

- [ ] 在 About 頁面加入完整品牌故事段落（讓 AI 有「答案」可引用）
- [ ] 在產品頁加入詳細成分說明與使用情境（增加 AI 引用機率）
- [ ] 建立 FAQ 頁面（AI 最喜歡引用問答格式的內容）
- [ ] 在 JSON-LD 加入 `sameAs` 連結社群媒體帳號

---

## 🔐 數位資產與 Google 搜尋引擎點火紀錄

### 第一手驗證：HTML Meta Tag（代碼層）✅ 已啟用

- **驗證狀態**：已啟用（2026.06.19 驗證成功）
- **埋設位置**：`client/index.html` → `<head>` 區塊第 6 行
- **身分證代碼**：

```html
<meta name="google-site-verification" content="bk9cztCI39etPz2PEl48GSSYMoSrWB_Xo9l-2nm6A8s" />
```

- **注意事項**：未來更新、重構或大幅修改首頁代碼時，**嚴禁刪除或覆蓋**此行，否則 Google Search Console 會斷線。

### 第二手驗證：DNS TXT Record（網域層保險）✅ 已啟用

- **驗證狀態**：已啟用（Google Search Console 顯示「網域名稱供應商 — 已成功驗證」）
- **平台**：GoDaddy（vedacare.com.tw 域名管理商）
- **紀錄類型**：`TXT`
- **主機紀錄**：`@`（根網域）
- **注意事項**：最高權限驗證，即使 Meta Tag 被誤刪，後台仍能保持連線。

---

## ✅ 2026.06.19 完成事項總覽

| 項目 | 狀態 | 說明 |
|------|------|------|
| Google Search Console HTML Meta Tag 驗證 | ✅ 完成 | 代碼埋入 `client/index.html`，Search Console 顯示綠勾 |
| Google Search Console DNS TXT Record 驗證 | ✅ 完成 | GoDaddy 網域層已驗證，為最高權限防線 |
| robots.txt | ✅ 完成 | 允許所有爬蟲，指向 sitemap |
| sitemap.xml | ✅ 完成 | 收錄 8 個頁面，提交給 Google |
| JSON-LD 結構化資料 | ✅ 完成 | Organization schema 描述品牌資訊 |
| README.md 技術文件 | ✅ 完成 | 完整記錄網站架構、工具、驗證細節 |

---

## 📈 每月維護健康檢查清單

每個月執行一次，確保網站與搜尋引擎狀態正常：

- [ ] 開啟 [Google Search Console](https://search.google.com/search-console)，確認驗證狀態仍為「已驗證」
- [ ] Search Console → Sitemap，確認 sitemap 讀取正常，無錯誤
- [ ] 確認 https://www.vedacare.com.tw/robots.txt 可正常開啟
- [ ] 確認 https://www.vedacare.com.tw/sitemap.xml 可正常開啟
- [ ] 確認首頁 `<head>` 仍有 Google Meta Tag（不可被刪除）
- [ ] 查看 Vercel 部署狀態是否正常（https://vercel.com/dashboard）
- [ ] 查看 Search Console「成效」頁面，記錄本月點擊與曝光數

---

## 更新推送流程

修改網站內容後，依照以下步驟推送：

**方法一：命令提示字元（推薦）**

```
cd C:\git
git add .
git commit -m "說明這次改了什麼"
git push origin main
```

**方法二：GitHub Desktop**

1. 開啟 GitHub Desktop，確認左上角 Current Repository 是 `veda-care-v2`
2. 左側會顯示變更的檔案
3. 左下角填寫 Summary（說明改了什麼）
4. 點「Commit to main」
5. 點右上角「Push origin」

推送成功後約 1～2 分鐘，Vercel 自動部署完成，開啟 https://www.vedacare.com.tw 確認。

---

## ⚠️ 注意事項（不可犯的錯）

| 事項 | 說明 |
|------|------|
| 禁止刪除 Google Meta Tag | `client/index.html` 第 6 行的驗證碼絕對不能刪，刪了 Search Console 斷線 |
| 只在 `C:\git\` 修改 | `C:\VEDA CARE官網\` 是舊版，修改了不會上線 |
| 推送前先確認 Repository | GitHub Desktop 左上角必須顯示 `veda-care-v2`，不是其他專案 |
| sitemap 新增頁面要更新 | 網站新增頁面時，記得更新 `client/public/sitemap.xml` |
| index.lock 衝突處理 | 若 git 報錯 index.lock，執行 `del C:\git\.git\index.lock` 再重試 |

---

## 🔁 複製到新品牌的框架步驟

未來建立新品牌網站時，可依照以下步驟複製這套框架：

**第一步：建站**
1. 用 Manus 生成初版網站程式碼
2. 下載 ZIP，上傳到新的 GitHub Repository
3. 連接 Vercel，設定自動部署
4. 設定自訂網域

**第二步：SEO 點火**
1. `client/index.html` `<head>` 加入 Google Search Console 驗證 Meta Tag
2. 建立 `client/public/robots.txt`（允許所有爬蟲，指向 sitemap）
3. 建立 `client/public/sitemap.xml`（列出所有頁面）
4. 在 `client/index.html` `<head>` 底部加入 JSON-LD Organization schema
5. 前往 Google Search Console → 新增資源 → 驗證

**第三步：雙重驗證**
1. HTML Meta Tag 驗證（在 Search Console 點「驗證」）
2. DNS TXT Record 驗證（在域名商 GoDaddy 後台新增 TXT 記錄）

**第四步：GEO 內容優化**
1. About 頁面寫完整品牌故事
2. 產品頁加詳細成分說明
3. 建立 FAQ 頁面
4. JSON-LD 加入社群媒體 `sameAs`

**第五步：建立文件**
1. 複製本 README.md，替換品牌資訊
2. Push 到 GitHub

---

## 版本記錄

| 日期 | Commit | 說明 |
|------|------|------|
| 2026.06.02 | — | 網站正式上線，www.vedacare.com.tw 生效 |
| 2026.06.19 | SEO: add Google verification, sitemap, robots.txt, JSON-LD | SEO 基礎建設完成 |
| 2026.06.19 | docs: update README with Google Search Console verification | README 初版建立 |
| 2026.06.19 | docs: update DNS TXT Record verification status to confirmed | DNS 驗證狀態確認，GEO 章節新增 |
