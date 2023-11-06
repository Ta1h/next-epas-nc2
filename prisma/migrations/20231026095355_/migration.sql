/*
  Warnings:

  - You are about to drop the column `questionId` on the `Score` table. All the data in the column will be lost.
  - Added the required column `correctAnswerId` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_questionId_fkey";

-- DropIndex
DROP INDEX "Score_questionId_key";

-- AlterTable
ALTER TABLE "Score" DROP COLUMN "questionId",
ADD COLUMN     "correctAnswerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_correctAnswerId_fkey" FOREIGN KEY ("correctAnswerId") REFERENCES "CorrectAnswer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
