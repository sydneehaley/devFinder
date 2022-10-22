/*
  Warnings:

  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `searches` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `timestamps` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verificationtokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "searches" DROP CONSTRAINT "searches_user_id_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "timestamps" DROP CONSTRAINT "timestamps_user_id_fkey";

-- DropTable
DROP TABLE "accounts";

-- DropTable
DROP TABLE "searches";

-- DropTable
DROP TABLE "sessions";

-- DropTable
DROP TABLE "timestamps";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "verificationtokens";

-- CreateTable
CREATE TABLE "jobs" (
    "job_id" TEXT NOT NULL,
    "company" TEXT,
    "link" TEXT,
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "type" TEXT,
    "title" TEXT,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("job_id")
);
