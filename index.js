const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port or default to 5000


app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

app.listen(port, () => {
    console.clear();
    console.log(`Server listening on port ${port}`);
});
