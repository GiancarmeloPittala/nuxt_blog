/*
  Warnings:

  - You are about to drop the column `articoli_id` on the `Categorie` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "articolo_catagoria" (
    "articoliId" TEXT NOT NULL,
    "categorieId" TEXT NOT NULL,

    PRIMARY KEY ("articoliId", "categorieId"),
    CONSTRAINT "articolo_catagoria_articoliId_fkey" FOREIGN KEY ("articoliId") REFERENCES "Articoli" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "articolo_catagoria_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categorie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titolo" TEXT,
    "desc" TEXT
);
INSERT INTO "new_Categorie" ("desc", "id", "titolo") SELECT "desc", "id", "titolo" FROM "Categorie";
DROP TABLE "Categorie";
ALTER TABLE "new_Categorie" RENAME TO "Categorie";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
