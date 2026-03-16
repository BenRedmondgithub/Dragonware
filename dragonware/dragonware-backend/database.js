const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('dragonware.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the Dragonware database.');
  }
});

// Create tables if they don't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS characters (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      class TEXT NOT NULL,
      level INTEGER NOT NULL
    )
  `);
});

module.exports = db;