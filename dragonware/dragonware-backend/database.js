const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("dragonware.db", (err) => {
    if (err) {
        console.error("Could not connect to database", err);
    }

    console.log("Connected to SQLite database");
  });

  module.exports = db;