import { execSync } from "child_process";
import { existsSync, copyFileSync } from "fs";
import path from "path";

// 檢查 .env 是否存在
if (!existsSync(".env")) {
  copyFileSync(".env.example", ".env");
  console.log(".env created ✔️");
} else {
  console.log(".env already exists ❌");
}

// 產生 Prisma Client
execSync("npx prisma generate", { stdio: "inherit" });

// 執行 migration
execSync("npx prisma migrate dev --name init", { stdio: "inherit" });