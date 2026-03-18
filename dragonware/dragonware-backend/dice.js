const express = require('express');
const db = require('./database');

const router = express.Router();

router.post('/dice', (req, res) => {
    const { dice, result } = req.body;

    if (!dice || !result) {
        return res.status(400).json({ error: 'Dice and result are required' });
    }

    db.run(
        'INSERT INTO dice (dice, result) VALUES (?, ?)',
        [dice, result],
        function (err) {
            if (err) {
                console.error('Error inserting dice:', err.message);
                return res.status(500).json({ error: 'Failed to create dice entry' });
            }

            return res.status(201).json({ id: this.lastID, dice, result });
        }
    );
});

router.get('/dice', (req, res) => {
    db.all('SELECT * FROM dice', [], (err, rows) => {
        if (err) {
            console.error('Error fetching dice:', err.message);
            return res.status(500).json({ error: 'Failed to fetch dice' });
        }

        return res.json(rows);
    });
});

router.get('/dice/recent', (req, res) => {
    const limit = req.query.limit || 5; // Default to 5 recent dice entries
    
    db.all(
        'SELECT * FROM dice ORDER BY created_at DESC LIMIT ?',
        [limit],
        (err, rows) => {
            if (err) {
                console.error('Error fetching recent dice:', err.message);
                return res.status(500).json({ error: 'Failed to fetch recent dice' });
            }

            return res.json(rows);
        }
    );
});

module.exports = router;