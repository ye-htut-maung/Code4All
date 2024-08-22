require('dotenv').config({ path: '../.env' });
const express = require('express');
const { Pool} = require('pg');
const cors = require('cors');
const app = express();

const port = 5000;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.use(cors());
app.use(express.json());

// endpoints for all 3 categories

// app.post('/api/resource-details', async (req, res) => {
//   try {
//     const { location, resourceType } = req.body;
//     console.log(location, resourceType);
    
    
//   //   const result = await pool.query('SELECT * FROM resources WHERE id = $1', [resourceId]);
//   //   if (result.rows.length > 0) {
//   //     res.json(result.rows[0]);
//   //   } else {
//   //     res.status(404).json({ error: 'Resource not found' });
//   //   }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred while fetching resource details' });
//   }
// });

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

app.post('/api/resource-details', async (req, res) => {
    const { boroughs, type } = req.body;
    console.log(boroughs);
    console.log(type);

    if (!boroughs || !type) {
        return res.status(400).send('Both boroughs and type are required');
    }

    try {
        let query = '';
        let params = [];

        switch (type.toLowerCase()) {
            case 'food':
                query = 'SELECT * FROM food WHERE boroughs = $1';
                params = [boroughs];
                break;
            case 'housing':
                query = 'SELECT * FROM housing WHERE boroughs = $1';
                params = [boroughs];
                break;
            case 'consultation':
                query = 'SELECT * FROM consultation WHERE boroughs = $1';
                params = [boroughs];
                break;
            default:
                return res.status(400).send('Invalid type');
        }
        
        

        const result = await pool.query(query, params);

        console.log(result.rows);

        res.json(result.rows);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

  