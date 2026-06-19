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

## SEO 設定（2026.06.19 新增）

| 項目 | 說明 |
|------|------|
| Google Search Console 驗證碼 | `84fa74b5db02c230` |
| 驗證標籤位置 | `client/index.html` 第 6 行 |
| Sitemap | https://www.vedacare.com.tw/sitemap.xml |
| Robots.txt | https://www.vedacare.com.tw/robots.txt |
| 結構化資料（JSON-LD） | Organization schema，描述品牌資訊 |

### Sitemap 收錄頁面
- https://www.vedacare.com.tw/
- https://www.vedacare.com.tw/shop
- https://www.vedacare.com.tw/about
- https://www.vedacare.com.tw/product/product-1
- https://www.vedacare.com.tw/product/product-2
- https://www.vedacare.com.tw/product/product-3
- https://www.vedacare.com.tw/quiz
- https://www.vedacare.com.tw/policies

---

## 更新推送流程

每次修改網站後，依照以下步驟推送：

1. 用 Claude Cowork 修改 `C:\git\` 資料夾內的檔案
2. 開啟 **GitHub Desktop**，確認 Current repository 是 `veda-care-v2`
3. 在左下角填寫 Summary（說明這次改了什麼）
4. 點 **Commit to main**
5. 點 **Push origin**
6. 等待約 1～2 分鐘，Vercel 自動重新部署完成

---

## 版本記錄

| 日期 | 更新內容 |
|------|------|
| 2026.06.02 | 網站正式生效，網址 www.vedacare.com.tw 上線 |
| 2026.06.19 | 新增 Google Search Console 驗證、robots.txt、sitemap.xml、JSON-LD 結構化資料 |
