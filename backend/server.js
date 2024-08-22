require('dotenv').config({ path: '../.env' });
const express = require('express');
const { Pool} = require('pg');
const app = express();

const port = 5000;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.use(express.json());

// endpoints for all 3 categories
app.get('/api/food', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM food');
        res.json(result.rows);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Error fetching data');
    }
});

app.get('/api/housing', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM housing');
        res.json(result.rows);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Error fetching data');
    }
});

app.get('/api/consultation', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM consultation');
        res.json(result.rows);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

  