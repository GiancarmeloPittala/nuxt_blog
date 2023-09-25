-- CreateTable
CREATE TABLE "Articoli" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titolo" TEXT,
    "desc" TEXT
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titolo" TEXT,
    "desc" TEXT,
    "articoli_id" TEXT,
    CONSTRAINT "Categorie_articoli_id_fkey" FOREIGN KEY ("articoli_id") REFERENCES "Articoli" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titolo" TEXT,
    "desc" TEXT,
    "articoli_id" TEXT,
    CONSTRAINT "Tags_articoli_id_fkey" FOREIGN KEY ("articoli_id") REFERENCES "Articoli" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
