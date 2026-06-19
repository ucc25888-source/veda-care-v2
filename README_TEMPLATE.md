# 【品牌名稱】— 官方網站技術文件

> 最後更新：【YYYY.MM.DD】　｜　網站生效日：【YYYY.MM.DD】
>
> 📌 **給接手的人**：這份文件記錄了整個網站的建置流程、檔案位置、SEO/GEO 設定與注意事項。

---

## 網站基本資訊

| 項目 | 內容 |
|------|------|
| 品牌名稱 | 【品牌中文名 英文名】 |
| 網站標語 | 【品牌標語】 |
| 正式網址 | https://www.【網域】 |
| Vercel 網址 | https://【專案名】.vercel.app |
| 網站生效日 | 【YYYY.MM.DD】 |
| 最後更新 | 【YYYY.MM.DD】 |
| 語言 | 繁體中文（zh-Hant-TW） |
| 目標市場 | 台灣 |
| 客戶聯絡 email | 【客戶 email】 |

---

## 電腦端檔案位置

| 說明 | 路徑 |
|------|------|
| Git 工作目錄（最新版，唯一可推送） | `C:\【路徑】\` |
| 主要 HTML 進入點 | `C:\【路徑】\client\index.html` |
| 爬蟲設定 | `C:\【路徑】\client\public\robots.txt` |
| 網站地圖 | `C:\【路徑】\client\public\sitemap.xml` |
| 前端頁面元件 | `C:\【路徑】\client\src\pages\` |

---

## GitHub 版本控制

| 項目 | 內容 |
|------|------|
| GitHub 帳號 | 【帳號名稱】 |
| Repository 名稱 | 【repo-name】 |
| Repository 網址 | https://github.com/【帳號】/【repo-name】 |
| 主要分支 | main |
| 最新 Commit | 【最新 commit 說明】 |

---

## Vercel 部署資訊

| 項目 | 內容 |
|------|------|
| 平台 | Vercel |
| 專案名稱 | 【專案名】 |
| 連結 GitHub | 是（main branch 推送即自動部署） |
| 正式網址 | https://www.【網域】 |
| 備用網址 | https://【專案名】.vercel.app |
| 部署觸發方式 | 推送到 GitHub main branch → Vercel 自動重新部署（約 1～2 分鐘） |

---

## 網站頁面架構

| 路徑 | 頁面 | 說明 |
|------|------|------|
| `/` | Home | 首頁 |
| `/about` | About | 關於品牌 |
| `/shop` | Shop | 商品列表 |
| `/product/:id` | ProductDetail | 產品詳情 |
| `/policies` | Policies | 隱私政策 / 退換貨 |
| 【新增頁面...】 | | |

---

## 使用工具與服務

### 建站工具
| 工具 | 用途 |
|------|------|
| 【Manus / Replit】 | 網站初版生成 |
| Claude（Cowork 模式） | 程式碼修改、SEO 優化、文件撰寫 |
| GitHub Desktop | Git 版本控制操作介面 |

### 部署與域名
| 服務 | 用途 | 帳號/網址 |
|------|------|------|
| GitHub | 原始碼版本控制 | https://github.com/【帳號】/【repo】 |
| Vercel | 網站部署與 CDN | https://vercel.com/dashboard |
| 【GoDaddy / 網路中文...】 | 域名購買與 DNS 管理 | 【網域】 |

### 技術框架
| 技術 | 說明 |
|------|------|
| React 18 + TypeScript | 前端框架 |
| Vite | 前端建置工具 |
| Tailwind CSS | CSS 樣式框架 |
| 【其他...】 | |

---

## SEO 基礎建設

| 項目 | 說明 |
|------|------|
| Sitemap | https://www.【網域】/sitemap.xml |
| Robots.txt | https://www.【網域】/robots.txt |
| 結構化資料（JSON-LD） | Organization schema |

### Sitemap 收錄頁面

- https://www.【網域】/
- https://www.【網域】/about
- 【新增頁面...】

---

## GEO — AI 搜尋引擎優化

| 項目 | 狀態 | 說明 |
|------|------|------|
| JSON-LD 結構化資料 | 【✅ / ⏳】 | Organization schema |
| robots.txt 開放爬取 | 【✅ / ⏳】 | 所有爬蟲可進入 |
| About 頁品牌故事 | 【✅ / ⏳】 | 完整段落，讓 AI 可引用 |
| 產品頁成分說明 | 【✅ / ⏳】 | 詳細使用情境 |
| FAQ 頁面 | 【✅ / ⏳】 | 問答格式利於 AI 引用 |
| sameAs 社群連結 | 【✅ / ⏳】 | JSON-LD 加入 IG/FB |

---

## 🔐 Google Search Console 驗證紀錄

### 第一手驗證：HTML Meta Tag ✅

- **驗證狀態**：【已啟用 / 待設定】（【YYYY.MM.DD】驗證成功）
- **埋設位置**：`client/index.html` → `<head>` 第 【N】 行
- **驗證碼**：

```html
<meta name="google-site-verification" content="【驗證碼】" />
```

> ⚠️ 此行**嚴禁刪除**，否則 Google Search Console 斷線。

### 第二手驗證：DNS TXT Record ✅

- **驗證狀態**：【已啟用 / 待設定】
- **域名商**：【GoDaddy / 網路中文...】
- **紀錄類型**：`TXT`，主機紀錄：`@`

---

## ✅ 建站完成事項

| 項目 | 狀態 | 日期 |
|------|------|------|
| 網站初版建立 | 【✅ / ⏳】 | 【YYYY.MM.DD】 |
| GitHub + Vercel 部署 | 【✅ / ⏳】 | 【YYYY.MM.DD】 |
| 正式網域上線 | 【✅ / ⏳】 | 【YYYY.MM.DD】 |
| Google Search Console HTML 驗證 | 【✅ / ⏳】 | 【YYYY.MM.DD】 |
| Google Search Console DNS 驗證 | 【✅ / ⏳】 | 【YYYY.MM.DD】 |
| robots.txt | 【✅ / ⏳】 | 【YYYY.MM.DD】 |
| sitemap.xml | 【✅ / ⏳】 | 【YYYY.MM.DD】 |
| JSON-LD 結構化資料 | 【✅ / ⏳】 | 【YYYY.MM.DD】 |
| Sitemap 提交 Google | 【✅ / ⏳】 | 【YYYY.MM.DD】 |
| README 文件建立 | 【✅ / ⏳】 | 【YYYY.MM.DD】 |
| Google 行事曆每月提醒 | 【✅ / ⏳】 | 【YYYY.MM.DD】 |

---

## 📈 每月維護健康檢查清單

每個月執行一次：

- [ ] [Google Search Console](https://search.google.com/search-console) 確認驗證狀態「已驗證」
- [ ] Search Console → Sitemap，確認讀取正常，無錯誤
- [ ] 確認 https://www.【網域】/robots.txt 可正常開啟
- [ ] 確認 https://www.【網域】/sitemap.xml 可正常開啟
- [ ] 確認首頁 `<head>` 仍有 Google Meta Tag（不可被刪除）
- [ ] Vercel 部署狀態正常（https://vercel.com/dashboard）
- [ ] 記錄本月 Search Console 點擊與曝光數

---

## 更新推送流程

```
cd C:\【git路徑】
git add .
git commit -m "說明這次改了什麼"
git push origin main
```

推送後約 1～2 分鐘，開啟 https://www.【網域】 確認更新。

---

## ⚠️ 注意事項

| 事項 | 說明 |
|------|------|
| 禁止刪除 Google Meta Tag | `client/index.html` 驗證碼不能刪 |
| 只在 git 目錄修改 | 舊版備份資料夾修改不會上線 |
| 推送前確認 Repository | GitHub Desktop 左上角確認專案名稱 |
| 新增頁面要更新 sitemap | 讓 Google 知道新頁面存在 |

---

## 版本記錄

| 日期 | Commit | 說明 |
|------|------|------|
| 【YYYY.MM.DD】 | — | 網站正式上線 |
| 【YYYY.MM.DD】 | 【commit message】 | 【說明】 |
