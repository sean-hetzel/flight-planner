import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

// Resolve path relative to project root
const dataDir = path.resolve("data");
const dbPath = path.join(dataDir, "flight-planner.db");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

const db = new Database(dbPath);

// Enable foreign keys (SQLite does NOT default to this)
db.pragma("foreign_keys = ON");

// Initialize schema
db.exec(`
  CREATE TABLE IF NOT EXISTS flight_plans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    departure TEXT NOT NULL,
    destination TEXT NOT NULL,
    distance_nm REAL NOT NULL,
    ete_hours REAL NOT NULL,
    fuel_required REAL NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;
