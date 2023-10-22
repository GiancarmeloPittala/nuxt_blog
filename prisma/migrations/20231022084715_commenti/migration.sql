-- CreateTable
CREATE TABLE "Commento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contenuto" TEXT NOT NULL,
    "articoli_id" TEXT,
    "like" INTEGER NOT NULL DEFAULT 0,
    "dislike" INTEGER NOT NULL DEFAULT 0,
    "reply_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Commento_articoli_id_fkey" FOREIGN KEY ("articoli_id") REFERENCES "Articoli" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Commento_reply_id_fkey" FOREIGN KEY ("reply_id") REFERENCES "Commento" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categorie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titolo" TEXT,
    "desc" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Categorie" ("desc", "id", "titolo") SELECT "desc", "id", "titolo" FROM "Categorie";
DROP TABLE "Categorie";
ALTER TABLE "new_Categorie" RENAME TO "Categorie";
CREATE TABLE "new_Tags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titolo" TEXT,
    "desc" TEXT,
    "articoli_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Tags_articoli_id_fkey" FOREIGN KEY ("articoli_id") REFERENCES "Articoli" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tags" ("articoli_id", "desc", "id", "titolo") SELECT "articoli_id", "desc", "id", "titolo" FROM "Tags";
DROP TABLE "Tags";
ALTER TABLE "new_Tags" RENAME TO "Tags";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
