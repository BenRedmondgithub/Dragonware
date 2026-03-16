const express = require('express');
const db = require('../database');

const router = express.Router();

// Ensure table exists before handling character routes.
db.run(
    `CREATE TABLE IF NOT EXISTS characters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        class TEXT NOT NULL,
        level INTEGER NOT NULL
    )`,
    (err) => {
        if (err) {
            console.error('Error ensuring characters table exists:', err.message);
        }
    }
);

router.post('/characters', (req, res) => {
    const { name, class: characterClass, level } = req.body;

    if (!name || !characterClass || !level) {
        return res.status(400).json({ error: 'Name, class, and level are required' });
    }

    db.run(
        'INSERT INTO characters (name, class, level) VALUES (?, ?, ?)',
        [name, characterClass, level],
        function (err) {
            if (err) {
                console.error('Error inserting character:', err.message);
                return res.status(500).json({ error: 'Failed to create character' });
            }

            return res.status(201).json({ id: this.lastID, name, class: characterClass, level });
        }
    );
});

router.get('/characters', (req, res) => {
    db.all('SELECT * FROM characters', [], (err, rows) => {
        if (err) {
            console.error('Error fetching characters:', err.message);
            return res.status(500).json({ error: 'Failed to fetch characters' });
        }

        return res.json(rows);
    });
});

module.exports = router;
