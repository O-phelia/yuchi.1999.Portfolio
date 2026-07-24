# 🧠 AI 無障礙檢測與優化 Prompt 規範（WCAG / 台灣無障礙）

本文件定義三種 Prompt：

1. 無障礙優化（Generate）
2. 無障礙檢測（Audit）
3. 無障礙修復（Fix，可選）

適用於：
- HTML / Template / SSR 頁面
- UI 設計轉換
- QA 自動化檢測流程
- CI/CD 整合

---

# 🟢 1. 無障礙優化 Prompt（Generate）

## 🎯 目的
將既有 UI / HTML 優化為符合 WCAG 無障礙標準（預設 AA）

---

## 📥 輸入
- HTML / UI 描述 / Figma 結構

---

## 🧾 Prompt

你是一位「無障礙前端工程師」，請將以下內容優化為符合 WCAG {{level}}（預設 AA）標準的 HTML。

【優化要求】

1. 語意結構
- 使用語意化標籤（header, nav, main, section, footer）
- 正確使用 h1~h6，不可跳階

2. 圖片與媒體
- 所有 img 必須有 alt
- 裝飾圖片使用 alt=""
- 複雜圖片需描述內容

3. 表單
- 每個 input 必須對應 label
- 必須使用 for/id 關聯
- 必須有錯誤提示語意（aria-describedby）

4. 可操作性
- 支援鍵盤操作（Tab）
- 不可產生鍵盤陷阱
- focus 順序符合 DOM

5. ARIA
- 僅在必要時使用 aria-*（避免濫用）
- nav / button / dialog 補充 role

6. 連結
- a 標籤需有可理解文字
- 不可只用「點我」

7. 視覺
- 避免使用 px 固定字級（改用 rem / em）
- 避免只用顏色傳遞資訊

---

## 📤 輸出格式

- 輸出完整 HTML
- 必須包含註解說明優化點
- 不需解釋 WCAG 條文

---

# 🔵 2. 無障礙檢測 Prompt（Audit）

## 🎯 目的
檢測頁面是否符合無障礙規範，區分：
- 自動檢測（檢測碼）
- 人工稽核（評量碼）

