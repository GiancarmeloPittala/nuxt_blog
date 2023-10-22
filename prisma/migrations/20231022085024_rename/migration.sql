/*
  Warnings:

  - You are about to drop the column `contenuto` on the `Commento` table. All the data in the column will be lost.
  - Added the required column `contenuto1` to the `Commento` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Commento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contenuto1" TEXT NOT NULL,
    "articoli_id" TEXT,
    "like" INTEGER NOT NULL DEFAULT 0,
    "dislike" INTEGER NOT NULL DEFAULT 0,
    "reply_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Commento_articoli_id_fkey" FOREIGN KEY ("articoli_id") REFERENCES "Articoli" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Commento_reply_id_fkey" FOREIGN KEY ("reply_id") REFERENCES "Commento" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Commento" ("articoli_id", "created_at", "dislike", "id", "like", "reply_id", "updated_at") SELECT "articoli_id", "created_at", "dislike", "id", "like", "reply_id", "updated_at" FROM "Commento";
DROP TABLE "Commento";
ALTER TABLE "new_Commento" RENAME TO "Commento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
