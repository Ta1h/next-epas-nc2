/*
  Warnings:

  - You are about to drop the column `correctAnswerId` on the `Score` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[questionId]` on the table `Score` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `questionId` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_correctAnswerId_fkey";

-- AlterTable
ALTER TABLE "Score" DROP COLUMN "correctAnswerId",
ADD COLUMN     "questionId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Score_questionId_key" ON "Score"("questionId");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
