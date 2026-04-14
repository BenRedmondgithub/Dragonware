const sqlite3 = require("sqlite3").verbose();
// open the database connection
const db = new sqlite3.Database("dragonware.db", (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to the SQLite database.");
    }
});
// create character table add error handling
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
// create dice table add error handling
db.run (
    `CREATE TABLE IF NOT EXISTS dice (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        dice TEXT NOT NULL,
        result TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    (err) => {
        if (err) {
            console.error('Error ensuring dice table exists:', err.message);
        }   else {
            console.log('Dice table is ready.');
        }
    }
);
// create maps table add error handling
db.run (
    `CREATE TABLE IF NOT EXISTS maps (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        data TEXT NOT NULL,
        grid_size INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    (err) => {
        if (err) {
            console.error('Error ensuring maps table exists:', err.message);
        }   else {
            console.log('Maps table is ready.');
        }
    }
);

module.exports = db;