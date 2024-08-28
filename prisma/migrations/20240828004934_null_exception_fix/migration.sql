-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "price" REAL NOT NULL,
    "name" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "image" BLOB,
    "announcedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "vendor_id" INTEGER NOT NULL,
    CONSTRAINT "products_vendor_id_fkey" FOREIGN KEY ("vendor_id") REFERENCES "vendors" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products" ("announcedAt", "description", "id", "image", "name", "price", "stock", "updatedAt", "vendor_id") SELECT "announcedAt", "description", "id", "image", "name", "price", "stock", "updatedAt", "vendor_id" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
