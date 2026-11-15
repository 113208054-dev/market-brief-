# 晨間功課：我的市場追蹤手冊

一個個人用的市場追蹤手冊網站。每個追蹤標的一頁，固定回答：這是什麼、為什麼追蹤、每次要看哪些數據、去哪裡看、和誰連動、什麼時候有新數據。

## 這個專案的重點：AGENTS.md

[`AGENTS.md`](AGENTS.md) 是寫給 AI 的工作守則，規定了專案結構、檔案命名、頁面格式、新增標的的步驟與檢查清單。

有了它，之後只要對 AI 說一句：

> 請先閱讀 AGENTS.md，然後新增一個標的：AMD

AI 就會依同一套格式建立新頁面、更新首頁卡片、補上連動連結。

## 目前的標的

| 標的 | 類別 | 頁面 |
|---|---|---|
| 台積電 | 持股 | `targets/tsmc.html` |
| NVIDIA | 重點追蹤 | `targets/nvidia.html` |
| 美股主要指數 | 市場數據 | `targets/us-indices.html` |
| 美債殖利率 | 總經指標 | `targets/us-treasury.html` |
| 台指期夜盤 | 市場數據 | `targets/tx-night.html` |

## 專案結構

```
market-brief/
├── AGENTS.md
├── README.md
├── index.html
├── assets/        （style.css、site.js）
├── templates/     （target-template.html）
└── targets/       （一個標的一個 HTML）
```

純 HTML、CSS 與少量 JavaScript，不需要安裝任何東西，直接用 GitHub Pages 發布。

## 聲明

本站只整理「看什麼、去哪裡看」，不提供投資建議，也不預測漲跌。
