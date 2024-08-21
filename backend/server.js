const express = require('express');
const { Pool} = require('pg');
const bodyParser = require('body-parser');
const app = express();


const port = 3000;


app.post('/api/resource-details', async (req, res) => {
    try {
      const { resourceId } = req.body;
      
    //   const result = await pool.query('SELECT * FROM resources WHERE id = $1', [resourceId]);
    //   if (result.rows.length > 0) {
    //     res.json(result.rows[0]);
    //   } else {
    //     res.status(404).json({ error: 'Resource not found' });
    //   }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching resource details' });
    }
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });