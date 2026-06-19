# 🌐 網頁建站標準作業規範（SOP）
### 給 Claude / Manus / Replit 的工作規則書

> **使用方式**：每次開始新網站專案，先把這份文件給 AI 讀。AI 必須照著這份 SOP 執行，並且邊做邊更新專案的 `README.md`。

---

## 📌 基本原則

1. **邊做邊記錄**：每完成一個步驟，立刻寫入專案的 `README.md`
2. **不能跳步驟**：所有 Checklist 項目都必須完成，不能因為「感覺不重要」而略過
3. **留下可追查的紀錄**：所有代碼、驗證碼、檔案位置都要寫進 README
4. **客戶資訊優先**：開始前先確認品牌名稱、正式網址、域名商

---

## 🗂️ 專案啟動前必問清單

開始任何新網站前，向客戶確認以下資訊：

| 資訊 | 說明 |
|------|------|
| 品牌名稱（中英文） | 例：VEDA CARE 郝營養 |
| 正式網址 | 例：https://www.vedacare.com.tw |
| 域名商 | 例：GoDaddy、網路中文、Cloudflare |
| 目標市場與語言 | 例：台灣，繁體中文 |
| GitHub 帳號 | 用哪個帳號管理原始碼 |
| 部署平台 | 例：Vercel、Netlify |
| 客戶 Google 帳號 | 用來建立 Google Search Console |
| 客戶聯絡 email | 寫入結構化資料與 README |

---

## ✅ 建站完整 Checklist

### 第一階段：網站建立

- [ ] 用 Manus / Replit 生成初版網站
- [ ] 程式碼上傳到 GitHub Repository（命名規則：`品牌名-v1`）
- [ ] 連接 Vercel（或指定部署平台）自動部署
- [ ] 設定正式自訂網域
- [ ] 確認網站可正常開啟（正式網址 + 備用 Vercel 網址）

### 第二階段：`client/index.html` 必填項目

- [ ] `<html lang="">` 設定正確語言（台灣：`zh-Hant-TW`）
- [ ] `<title>` 品牌名稱 + 核心關鍵字（60 字以內）
- [ ] `<meta name="description">` 簡短說明（150 字以內）
- [ ] `<meta property="og:url">` 改成正式網址（非 Replit/Manus 預設網址）
- [ ] `<meta property="og:title">` 品牌標語
- [ ] `<meta property="og:image">` 正式網域的圖片路徑
- [ ] `<meta name="google-site-verification">` Google 驗證碼（見第三階段）
- [ ] JSON-LD Organization schema（見下方範本）

### 第三階段：Google Search Console 雙重驗證

**驗證一：HTML Meta Tag（代碼層）**
1. 開啟 Google Search Console → 新增資源 → 輸入正式網址
2. 選「HTML 標記」驗證方式，複製 `<meta>` 標籤
3. 貼入 `client/index.html` `<head>` 區塊第 5～6 行
4. Push 到 GitHub，等 Vercel 部署完成
5. 回到 Search Console 點「驗證」→ 確認綠勾
6. **立刻把驗證碼寫入 README**

**驗證二：DNS TXT Record（網域層）**
1. 到 Search Console → 設定 → 擁有權驗證 → DNS 記錄
2. 複製 `google-site-verification=XXXX` 字串
3. 登入域名商後台 → DNS 管理 → 新增 TXT 記錄
   - 主機紀錄：`@`
   - 類型：`TXT`
   - 值：貼上 google-site-verification 字串
4. 等待 DNS 生效（最多 48 小時）
5. 回 Search Console 點驗證
6. **立刻把驗證狀態寫入 README**

### 第四階段：SEO 基礎建設

**robots.txt**（路徑：`client/public/robots.txt`）
```
User-agent: *
Allow: /
Sitemap: https://【正式網址】/sitemap.xml
```

**sitemap.xml**（路徑：`client/public/sitemap.xml`）
- 列出所有頁面（首頁 priority 1.0，其他依重要性遞減）
- 每新增頁面就更新一次

**JSON-LD 結構化資料**（放在 `client/index.html` `<head>` 底部）
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "【品牌中文名】",
  "alternateName": "【品牌英文名】",
  "url": "【正式網址】",
  "logo": "【正式網址/logo圖片路徑】",
  "description": "【品牌一句話說明，50字以內】",
  "sameAs": ["【Instagram網址】", "【Facebook網址】"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "zh-TW"
  }
}
```

### 第五階段：GEO（AI 搜尋引擎優化）

GEO 讓 ChatGPT Search、Perplexity、Google AI Overview 能主動推薦此品牌。

- [ ] JSON-LD 結構化資料已完成（第四階段）
- [ ] robots.txt 開放所有爬蟲
- [ ] About 頁面包含完整品牌故事段落（讓 AI 有內容可引用）
- [ ] 產品頁包含詳細成分說明與使用情境
- [ ] 品牌名稱在 title / description / JSON-LD 三處一致
- [ ] 建議未來加入 FAQ 頁面（AI 最愛引用問答格式）

### 第六階段：提交 Sitemap

1. 開啟 Google Search Console → Sitemap
2. 輸入：`https://【正式網址】/sitemap.xml`
3. 點「提交」
4. **寫入 README**

### 第七階段：文件化

- [ ] 更新 `README.md`（使用 README_TEMPLATE.md 作為基礎）
- [ ] 所有驗證碼、檔案位置、工具清單都已記錄
- [ ] Commit 並 Push README 到 GitHub

### 第八階段：每月維護提醒

- [ ] 在客戶的 Google 行事曆建立每月重複提醒
  - 標題：`📋 【品牌名】官網每月維護健康檢查`
  - 時間：每月同一天，上午 10:00
  - 提前通知：前一天 email + 前一小時 popup
  - 內容：貼入每月維護清單（見 README 模板）

---

## 📋 每月維護標準清單（貼入行事曆）

```
☐ Google Search Console 確認驗證狀態仍為「已驗證」
☐ Search Console → Sitemap 確認讀取正常
☐ 確認 /robots.txt 可正常開啟
☐ 確認 /sitemap.xml 可正常開啟
☐ 確認首頁 <head> 仍有 Google Meta Tag（不可被刪除）
☐ Vercel 部署狀態正常
☐ 記錄本月 Search Console 點擊與曝光數
```

---

## ⚠️ 永遠不能犯的錯

| 禁止事項 | 原因 |
|------|------|
| 刪除 `<meta name="google-site-verification">` | 刪了 Search Console 斷線 |
| `og:url` / `og:image` 留著 Replit/Manus 預設網址 | 社群分享會顯示錯誤連結 |
| 忘記更新 sitemap 就新增頁面 | Google 不知道新頁面存在 |
| 在舊版資料夾修改（非 git 目錄） | 改了不會上線 |
| Push 前不確認 Repository 名稱 | 可能 commit 到錯誤專案 |
| 程式碼大改後不檢查 Meta Tag 是否還在 | 重構容易誤刪 |

---

## 🔁 新品牌複製框架步驟（5 步）

1. **建站**：Manus/Replit 生成 → GitHub → Vercel → 自訂網域
2. **SEO 點火**：Meta Tag + robots.txt + sitemap.xml + JSON-LD
3. **雙重驗證**：HTML Meta Tag + DNS TXT Record
4. **GEO 內容**：品牌故事 + 產品說明 + FAQ
5. **文件化**：README + GitHub Push + Google 行事曆每月提醒

---

## 📁 標準檔案結構

```
專案根目錄/
├── README.md               ← 專案技術文件（必填）
├── client/
│   ├── index.html          ← Meta Tag、JSON-LD 在這裡
│   └── public/
│       ├── robots.txt      ← 爬蟲設定
│       └── sitemap.xml     ← 頁面地圖
└── ...
```

---

> 本 SOP 由 Claude（Cowork 模式）協助撰寫
> 參考專案：VEDA CARE 郝營養（2026.06.19）
