const express = require('express');
const cors = require('cors');
require('./database'); // Initialize database connection and tables
// Create const for express app and set port number, use cors and json middleware, define routes for character, dice, and map builder, and start the server on the specified port.
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// This endpoint is for testing the server
app.get('/', (req, res) => {
    res.send('Welcome to the Dragonware API!');
});
// Start the server and listen on the specified port, logging a message to the console when the server is running
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});