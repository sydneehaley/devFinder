/*
  Warnings:

  - Added the required column `index` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "index" INTEGER NOT NULL;
