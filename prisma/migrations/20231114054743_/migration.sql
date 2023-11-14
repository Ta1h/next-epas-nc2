/*
  Warnings:

  - You are about to drop the `CorrectAnswer` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[lessonId]` on the table `Score` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "CorrectAnswer" DROP CONSTRAINT "CorrectAnswer_choiceId_fkey";

-- DropForeignKey
ALTER TABLE "CorrectAnswer" DROP CONSTRAINT "CorrectAnswer_questionId_fkey";

-- DropTable
DROP TABLE "CorrectAnswer";

-- CreateIndex
CREATE UNIQUE INDEX "Score_lessonId_key" ON "Score"("lessonId");
