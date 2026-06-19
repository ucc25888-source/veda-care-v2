# VEDA CARE 郝營養 — 官方網站技術文件

> 最後更新：2026.06.19　｜　網站生效日：2026.06.02

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

---

## 電腦端檔案位置

| 說明 | 路徑 |
|------|------|
| Git 工作目錄（最新版，可推送） | `C:\git\` |
| 舊版備份（ZIP 解壓，勿使用） | `C:\VEDA CARE官網\veda-care-v2-main\` |
| 主要 HTML 進入點 | `C:\git\client\index.html` |
| 爬蟲設定 | `C:\git\client\public\robots.txt` |
| 網站地圖 | `C:\git\client\public\sitemap.xml` |
| 前端頁面元件 | `C:\git\client\src\pages\` |
| 共用常數／產品資料 | `C:\git\shared\const.ts` |

---

## GitHub 版本控制

| 項目 | 內容 |
|------|------|
| GitHub 帳號 | ucc25888-source |
| Repository 名稱 | veda-care-v2 |
| Repository 網址 | https://github.com/ucc25888-source/veda-care-v2 |
| 主要分支 | main |
| 最新 Commit | SEO: add Google verification, sitemap, robots.txt, JSON-LD |

---

## Vercel 部署資訊

| 項目 | 內容 |
|------|------|
| 平台 | Vercel |
| 專案名稱 | veda-care-v2 |
| 連結 GitHub | 是（main branch 推送即自動部署） |
| 正式網址 | https://www.vedacare.com.tw |
| 備用網址 | https://veda-care-v2.vercel.app |
| 部署觸發方式 | 推送到 GitHub main branch → Vercel 自動重新部署 |

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

### 開發工具
| 工具 | 用途 |
|------|------|
| Manus | 網站 AI 建置平台（初版生成） |
| Claude（Cowork 模式） | 程式碼修改、SEO 優化、文件撰寫 |
| Visual Studio Code | 程式碼編輯器 |
| GitHub Desktop | Git 版本控制操作介面 |

### 部署與託管
| 服務 | 用途 |
|------|------|
| GitHub | 程式碼版本控制 / 原始碼儲存 |
| Vercel | 網站部署與 CDN 託管 |

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

## 🔐 數位資產與 Google 搜尋引擎點火紀錄

為確保網站能被 Google 及最新 AI 搜尋引擎（ChatGPT Search, Perplexity）精準爬取並推薦，已完成 Google Search Console 雙重防線擁有權驗證。

### 第一手驗證：HTML Meta Tag（代碼層）✅ 已啟用

- **驗證狀態**：已啟用（2026.06.19 驗證成功）
- **埋設位置**：`client/index.html` → `<head>` 區塊第 6 行
- **身分證代碼**：

```html
<meta name="google-site-verification" content="bk9cztCI39etPz2PEl48GSSYMoSrWB_Xo9l-2nm6A8s" />
```

- **注意事項**：未來更新、重構或大幅修改首頁代碼時，**嚴禁刪除或覆蓋**此行 Meta 標籤，否則會導致 Google 搜尋後台斷線。

### 第二手驗證：DNS TXT Record（網域層保險）✅ 已啟用

- **驗證狀態**：已啟用（Google Search Console 顯示「網域名稱供應商 — 已成功驗證」）
- **平台**：GoDaddy（vedacare.com.tw 域名管理商）
- **紀錄類型**：`TXT`
- **主機紀錄**：`@`（根網域）
- **注意事項**：此為最高權限之網域鎖定驗證，即使 `index.html` 的 Meta Tag 意外被刪除，後台仍能保持連線不中斷。

---

## SEO 基礎建設（2026.06.19 新增）

| 項目 | 說明 |
|------|------|
| Sitemap | https://www.vedacare.com.tw/sitemap.xml |
| Robots.txt | https://www.vedacare.com.tw/robots.txt |
| 結構化資料（JSON-LD） | Organization schema，描述品牌資訊 |

### Sitemap 收錄頁面
- https://www.vedacare.com.tw/
- https://www.vedacare.com.tw/shop
- https://www.vedacare.com.tw/about
- https://www.vedacare.com.tw/product/product-1
- https://www.vedacare.com.tw/product/product-2
- https://www.vedaca