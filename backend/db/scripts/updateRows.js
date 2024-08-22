require('dotenv').config({ path: '../../../.env' });

const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

client.connect();

(async () => {
    try {
        await client.query('ALTER TABLE food ADD COLUMN boroughs VARCHAR(50);');
        await client.query('ALTER TABLE housing ADD COLUMN boroughs VARCHAR(50);');
        await client.query('ALTER TABLE consultation ADD COLUMN boroughs VARCHAR(50);');

        await client.query('UPDATE food SET boroughs = \'Queens\' WHERE id = 1;');
        await client.query('UPDATE food SET boroughs = \'Manhattan\' WHERE id = 2;');

        await client.query('UPDATE housing SET boroughs = \'Manhattan\' WHERE id = 1;');

        await client.query('UPDATE consultation SET boroughs = \'Manhattan\' WHERE id = 1;');
        await client.query('UPDATE consultation SET boroughs = \'Brooklyn\' WHERE id = 2;');

        console.log('Columns added and data updated successfully.');
    } catch (err) {
        console.error('Error executing query', err.stack);
    } finally {
        await client.end();
    }
})();
