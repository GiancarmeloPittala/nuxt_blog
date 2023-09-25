-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Articoli" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titolo" TEXT,
    "desc" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Articoli" ("desc", "id", "titolo") SELECT "desc", "id", "titolo" FROM "Articoli";
DROP TABLE "Articoli";
ALTER TABLE "new_Articoli" RENAME TO "Articoli";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
