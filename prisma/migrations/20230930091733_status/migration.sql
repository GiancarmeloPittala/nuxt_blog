-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Articoli" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titolo" TEXT,
    "desc" TEXT,
    "stato" TEXT NOT NULL DEFAULT 'attivo',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Articoli" ("created_at", "desc", "id", "stato", "titolo", "updated_at") SELECT "created_at", "desc", "id", "stato", "titolo", "updated_at" FROM "Articoli";
DROP TABLE "Articoli";
ALTER TABLE "new_Articoli" RENAME TO "Articoli";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
