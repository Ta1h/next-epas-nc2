/*
  Warnings:

  - Made the column `lessonPdf` on table `Lesson` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Lesson" ALTER COLUMN "lessonPdf" SET NOT NULL,
ALTER COLUMN "lessonPdf" SET DATA TYPE TEXT;
