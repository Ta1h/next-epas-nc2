/*
  Warnings:

  - Made the column `lessonId` on table `Score` required. This step will fail if there are existing NULL values in that column.
  - Made the column `unitId` on table `Score` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_unitId_fkey";

-- DropIndex
DROP INDEX "Score_lessonId_key";

-- AlterTable
ALTER TABLE "Score" ALTER COLUMN "lessonId" SET NOT NULL,
ALTER COLUMN "unitId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
