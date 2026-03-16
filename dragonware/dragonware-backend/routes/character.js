const express = require('express');
const db = require('../database');

const router = express.Router();

router.post('/characters', (req, res) => {
    const { name, class: characterClass, level } = req.body;
    
    // Validate required fields
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
            res.status(201).json({ id: this.lastID, name, class: characterClass, level });
        }
    );
});

router.get('/characters', (req, res) => {
    db.all('SELECT * FROM characters', [], (err, rows) => {
        if (err) {
            console.error('Error fetching characters:', err.message);
            return res.status(500).json({ error: 'Failed to fetch characters' });
        }
        res.json(rows);
    });
});

module.exports = router;       