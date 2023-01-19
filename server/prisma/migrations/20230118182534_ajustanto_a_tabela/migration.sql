/*
  Warnings:

  - You are about to drop the column `date` on the `days` table. All the data in the column will be lost.
  - Added the required column `data` to the `days` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL
);
INSERT INTO "new_days" ("id") SELECT "id" FROM "days";
DROP TABLE "days";
ALTER TABLE "new_days" RENAME TO "days";
CREATE UNIQUE INDEX "days_data_key" ON "days"("data");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
