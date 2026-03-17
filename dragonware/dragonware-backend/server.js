const express = require('express');
const cors = require('cors');
const db = require('./database');
const characterRoutes = require('./character');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

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

app.use('/api', characterRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});