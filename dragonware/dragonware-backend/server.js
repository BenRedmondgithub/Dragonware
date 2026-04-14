const express = require('express');
const cors = require('cors');
require('./database'); // Initialize database connection and tables
const characterRoutes = require('./character');
const diceRoutes = require('./dice');
const mapBuilderRoutes = require('./mapBuilder');
// Create const for express app and set port number, use cors and json middleware, define routes for character, dice, and map builder, and start the server on the specified port.
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// This endpoint is for testing the server
app.get('/', (req, res) => {
    res.send('Welcome to the Dragonware API!');
});
// This endpoint allows users to roll dice using the format NdM (e.g., 2d6 for rolling two six-sided dice)
app.get("/api/roll-dice", (req, res) => {
  const { dice } = req.query;
    if (!dice) {
        return res.status(400).json({ error: "Missing 'dice' query parameter" });
    }
// Validate the dice format using a regular expression
    const dicePattern = /^(\d*)d(\d+)$/i;
    const match = dice.match(dicePattern);
    if (!match) {
        return res.status(400).json({ error: "Invalid 'dice' format. Use NdM (e.g., 2d6)" });
    }
// Extract the number of dice and sides from the matched groups
    const numDice = parseInt(match[1]) || 1; // Default to 1 die if not specified
    const numSides = parseInt(match[2]);
// Validate the number of dice and sides
    const results = [];
    for (let i = 0; i < numDice; i++) {
        results.push(Math.floor(Math.random() * numSides) + 1);
    }

    res.json({ results });
});
// Use the defined routes for character, dice, and map builder under the /api path
app.use('/api', characterRoutes);
app.use('/api', diceRoutes);
app.use('/api', mapBuilderRoutes);
// Start the server and listen on the specified port, logging a message to the console when the server is running
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});