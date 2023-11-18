/*
  Warnings:

  - Changed the type of `lessonPdf` on the `Lesson` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "lessonPdf",
ADD COLUMN     "lessonPdf" BYTEA NOT NULL;
