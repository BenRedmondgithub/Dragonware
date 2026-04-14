const express = require('express');
const db = require('./database');
// Character routes
const router = express.Router();
// Endpoint to create a new character, expects name, class, species, and level in the request body
router.post('/characters', (req, res) => {
    const { name, class: characterClass, species, level } = req.body;

    if (!name || !characterClass || !species || !level) {
        return res.status(400).json({ error: 'Name, class, species, and level are required' });
    }
// Insert the new character into the database and return the created character with its ID
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
// Endpoint to get all characters from the database
router.get('/characters', (req, res) => {
    db.all('SELECT * FROM characters', [], (err, rows) => {
        if (err) {
            console.error('Error fetching characters:', err.message);
            return res.status(500).json({ error: 'Failed to fetch characters' });
        }

        return res.json(rows);
    });
});
// Endpoint to get a specific character by ID
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
// Endpoint to update a character by ID, expects name, class, species, and level in the request body
module.exports = router;
