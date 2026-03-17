const express = require('express');
const db = require('./database');

const router = express.Router();

router.post('/characters', (req, res) => {
    const { name, class: characterClass, species, level } = req.body;

    if (!name || !characterClass || !species || !level) {
        return res.status(400).json({ error: 'Name, class, species, and level are required' });
    }

    db.run(
        'INSERT INTO characters (name, class, species, level) VALUES (?, ?, ?, ?)',
        [name, characterClass, species, level],
        function (err) {
            if (err) {
                console.error('Error inserting character:', err.message);
                return res.status(500).json({ error: 'Failed to create character' });
            }

            return res.status(201).json({ id: this.lastID, name, class: characterClass, species, level });
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

router.get('/characters/recent', (req, res) => {
    const limit = req.query.limit || 5; // Default to 5 recent characters
    
    db.all(
        'SELECT * FROM characters ORDER BY created_at DESC LIMIT ?',
        [limit],
        (err, rows) => {
            if (err) {
                console.error('Error fetching recent characters:', err.message);
                return res.status(500).json({ error: 'Failed to fetch recent characters' });
            }

            return res.json(rows);
        }
    );
});

module.exports = router;
