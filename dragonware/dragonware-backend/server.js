const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Dragonware API!');
});

app.get("/api/roll-dice", (req, res) => {
  const { dice } = req.query;
    if (!dice) {
        return res.status(400).json({ error: "Missing 'dice' query parameter" });
    }

    const dicePattern = /^(\d*)d(\d+)$/i;
    const match = dice.match(dicePattern);
    if (!match) {
        return res.status(400).json({ error: "Invalid 'dice' format. Use NdM (e.g., 2d6)" });
    }

    const numDice = parseInt(match[1]) || 1; // Default to 1 die if not specified
    const numSides = parseInt(match[2]);

    const results = [];
    for (let i = 0; i < numDice; i++) {
        results.push(Math.floor(Math.random() * numSides) + 1);
    }

    res.json({ results });
});

app.get("/api/characters", (req, res) => {
    const db = require('./database');
    db.all('SELECT * FROM characters', [], (err, rows) => {
        if (err) {
            console.error('Error fetching characters:', err.message);
            return res.status(500).json({ error: 'Failed to fetch characters' });
        }
        res.json(rows);
    });
});

app.post("/api/characters", (req, res) => {
    const db = require('./database');
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
            res.status(201).json({ id: this.lastID, name, class: characterClass, level });
        }
    );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


