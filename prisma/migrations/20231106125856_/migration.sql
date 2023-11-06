/*
  Warnings:

  - You are about to drop the column `correctAnswerId` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Score` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_correctAnswerId_fkey";

-- AlterTable
ALTER TABLE "Score" DROP COLUMN "correctAnswerId",
DROP COLUMN "value",
ADD COLUMN     "lessonId" TEXT,
ADD COLUMN     "lessonScore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "unitId" TEXT;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;
