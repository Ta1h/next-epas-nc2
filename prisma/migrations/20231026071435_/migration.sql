/*
  Warnings:

  - You are about to drop the column `pdf` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `topic` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `unitText` on the `Unit` table. All the data in the column will be lost.
  - Added the required column `lessonNumber` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lessonPdf` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lessonTitle` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitNumber` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitTitle` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "pdf",
DROP COLUMN "title",
DROP COLUMN "topic",
ADD COLUMN     "lessonNumber" TEXT NOT NULL,
ADD COLUMN     "lessonPdf" TEXT NOT NULL,
ADD COLUMN     "lessonTitle" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Unit" DROP COLUMN "unitText",
ADD COLUMN     "unitNumber" TEXT NOT NULL,
ADD COLUMN     "unitTitle" TEXT NOT NULL;
