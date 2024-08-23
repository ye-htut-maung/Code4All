require("dotenv").config({ path: "./.env" });
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();
const crypto = require('crypto');

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

function generateReferralCode() {
    return crypto.randomBytes(4).toString('hex').toUpperCase();
}

async function getUniqueReferralCode() {
    let referralCode;
    let isUnique = false;
    while (!isUnique) {
        referralCode = generateReferralCode();
        const result = await pool.query('SELECT * FROM users WHERE referral_code = $1', [referralCode]);
        console.log("in getUniqueReferralCode", result.rows);
        if (result.rows.length === 0) {
            isUnique = true;
        }
    }
    return referralCode;
}

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

        const referralCode = await getUniqueReferralCode();
        console.log('Generated referral code:', referralCode);

         const insertResult = await pool.query(
            'INSERT INTO users (username, referral_code) VALUES ($1, $2) RETURNING *',
            [username, referralCode]
        );
        console.log('Insert result:', insertResult.rows[0]);
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        res.status(201).json(user.rows[0].id);

    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ error: 'Error registering user' });
    }
});

app.get('/api/user-referral-code/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await pool.query('SELECT referral_code FROM users WHERE id = $1', [userId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ referralCode: result.rows[0].referral_code });
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/submit-referral', async (req, res) => {
    try {
        const { userId, referralCode } = req.body;

        // Find the user who owns this referral code
        const referrerResult = await pool.query('SELECT id FROM users WHERE referral_code = $1', [referralCode]);

        if (referrerResult.rows.length === 0) {
            return res.status(400).json({ error: 'Invalid referral code' });
        }

        const referrerId = referrerResult.rows[0].id;

        // Update the current user with the referrer's ID
        await pool.query('UPDATE users SET referred_by = $1 WHERE id = $2', [referrerId, userId]);

        res.json({ message: 'Referral code applied successfully' });
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ error: 'Server error' });
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

        res.status(200).json(user.rows[0].id);

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
