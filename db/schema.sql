PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS flight_plans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  departure TEXT NOT NULL,
  destination TEXT NOT NULL,

  distance_nm REAL NOT NULL CHECK (distance_nm > 0),

  ete_hours REAL NOT NULL CHECK (ete_hours > 0),
  fuel_required REAL NOT NULL CHECK (fuel_required >= 0),

  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
