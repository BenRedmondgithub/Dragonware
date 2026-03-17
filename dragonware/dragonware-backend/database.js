const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("dragonware.db", (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to the SQLite database.");
    }
});

db.run (
    `CREATE TABLE IF NOT EXISTS characters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        class TEXT NOT NULL,
        species TEXT NOT NULL,
        level INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    (err) => {
        if (err) {
            console.error('Error ensuring characters table exists:', err.message);
        }   else {
            console.log('Characters table is ready.');
        }
    }
);

module.exports = db;