/*
  Warnings:

  - You are about to drop the column `description` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `jobs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "description",
DROP COLUMN "type",
ADD COLUMN     "location" TEXT,
ADD COLUMN     "shift" TEXT;
