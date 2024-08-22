require("dotenv").config({ path: "../.env" });
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();

const port = 3000;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.use(cors());
app.use(express.json());



app.post('/api/register', async (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        const userExists = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        await pool.query('INSERT INTO users (username) VALUES ($1)', [username]);

        res.status(201).json({ message: 'User registered successfully' });

    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ error: 'Error registering user' });
    }
});

app.post('/api/login', async (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (user.rows.length === 0) {
            return res.status(400).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'Logged in sucessfully' });

    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ error: 'Error logging in user' });
    }
});



// endpoints for all 3 categorie
app.get('/api/food', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM food");
        res.json(result.rows);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send("Error fetching data");
    }
});

app.get("/api/housing", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM housing");
        res.json(result.rows);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send("Error fetching data");
    }
});

app.get("/api/consultation", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM consultation");
        res.json(result.rows);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send("Error fetching data");
    }
});

app.post("/api/resource-details", async (req, res) => {
    const { boroughs, type } = req.body;
    console.log(boroughs);
    console.log(type);

    if (!boroughs || !type) {
        return res.status(400).send("Both boroughs and type are required");
    }

    try {
        let query = "";
        let params = [];

        switch (type.toLowerCase()) {
            case "food":
                query = "SELECT * FROM food WHERE boroughs = $1";
                params = [boroughs];
                break;
            case "housing":
                query = "SELECT * FROM housing WHERE boroughs = $1";
                params = [boroughs];
                break;
            case "consultation":
                query = "SELECT * FROM consultation WHERE boroughs = $1";
                params = [boroughs];
                break;
            default:
                return res.status(400).send("Invalid type");
        }

        const result = await pool.query(query, params);
        res.json(result.rows);
        console.log(result.rows);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send("Error fetching data");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
