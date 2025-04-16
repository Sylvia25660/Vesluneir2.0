 # Vesluneir 2.0 - Backend

這是 Vesluneir 攝影師平台的後端專案，使用 Node.js + Express 作為 API 伺服器，並搭配 PostgreSQL 資料庫與 Prisma ORM 操作資料。

## 技術棧
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- dotenv（環境變數）
- CORS（跨來源請求）

## 啟動方式

```bash
# 1. 修改 .env 檔案，加上PostgreSQL密碼
DATABASE_URL="postgresql://postgres:你的密碼@localhost:5432/vesluneir"


# 2. 安裝依賴：
npm install


# 3. 執行伺服器：
npm run dev

```