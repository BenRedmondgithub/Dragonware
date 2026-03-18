const express = require('express');
const db = require('./database');

const router = express.Router();

router.post('/maps', (req, res) => {
    const { name, data, grid_size } = req.body;

    if (!name || !data || !grid_size) {
        return res.status(400).json({ error: 'Name, data, and grid_size are required' });
    }

    db.run(
        'INSERT INTO maps (name, data, grid_size) VALUES (?, ?, ?)',
        [name, data, grid_size],
        function (err) {
            if (err) {
                console.error('Error inserting map:', err.message);
                return res.status(500).json({ error: 'Failed to create map entry' });
            }

            return res.status(201).json({ id: this.lastID, name, data, grid_size });
        }
    );
});

router.get('/maps', (req, res) => {
    db.all('SELECT * FROM maps', [], (err, rows) => {
        if (err) {
            console.error('Error fetching maps:', err.message);
            return res.status(500).json({ error: 'Failed to fetch maps' });
        }

        return res.json(rows);
    });
});

router.get('/maps/recent', (req, res) => {
    const limit = req.query.limit || 5; // Default to 5 recent map entries
    
    db.all(
        'SELECT * FROM maps ORDER BY created_at DESC LIMIT ?',
        [limit],
        (err, rows) => {
            if (err) {
                console.error('Error fetching recent maps:', err.message);
                return res.status(500).json({ error: 'Failed to fetch recent maps' });
            }

            return res.json(rows);
        }
    );
});

module.exports = router;