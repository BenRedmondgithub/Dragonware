const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('dragonware.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the Dragonware database.');
  }
})

module.exports = db;