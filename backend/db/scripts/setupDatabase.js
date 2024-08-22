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
        await client.query(`
            CREATE TABLE IF NOT EXISTS food (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                location VARCHAR(255),
                contact VARCHAR(255),
                hours VARCHAR(255),
                note TEXT,
                links TEXT
            );
        `);

        await client.query(`
            INSERT INTO food (name, location, contact, hours, note, links) VALUES
            ('Knights Table Pantry', '65-30 Kissena Blvd., Flushing, NY 11367, Student Union, Lower Level 23', 'knightstable@qc.cuny.edu', 'Mon-Fri 9am-5pm', 'Walk-in self serve with student ID to swipe into building and pantry location', 'https://qcknightstable.org/'),
            ('Bennys Pantry and Gardens', '160 Convent Ave, New York, NY 10031, NAC Ground Floor', 'bennysfoodpantry@ccny.cuny.edu', 'Weekly 10am-6pm', 'Walk-in (self serve)', 'https://www.ccny.cuny.edu/bennysfoodpantry');
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS housing (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                location VARCHAR(255),
                contact VARCHAR(255),
                hours VARCHAR(255),
                note TEXT,
                links TEXT
            );
        `);

        await client.query(`
            INSERT INTO housing (name, location, contact, hours, note, links) VALUES
            ('Coalition for the Homeless', '129 Fulton Street, 4th Floor, New York, 10038', 'info@cfthomeless.org', 'Weekly 5:30 - 7pm', 'Operates every night starting at 5:30 PM at St. Barts, 51St. St. between Park and Lex. Vans operate in Uptown and Downtown Manhattan and in the Bronx', 'https://www.coalitionforthehomeless.org/resources/coalition-homeless-grand-central-food-program/');
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS consultation (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                location VARCHAR(255),
                contact VARCHAR(255),
                hours VARCHAR(255),
                note TEXT,
                links TEXT
            );
        `);

        await client.query(`
            INSERT INTO consultation (name, location, contact, hours, note, links) VALUES
            ('Baruch College Health Services', '138 E. 26th Street, 1st Fl. New York, NY 10010', 'StudentHealthCareCenter@baruch.cuny.edu', 'Mon-Fri 8am-6pm', 'Appointment is necessary to be seen.', 'https://studentaffairs.baruch.cuny.edu/health/'),
            ('The Brooklyn College Health Clinic', '2900 Bedford Avenue, 114 Roosevelt Hall, Brooklyn, NY 11210', '718-951-5580', 'Mon-Fri 9am-5pm', 'The Health Clinic typically remains open throughout reading and exam periods and between semesters', 'https://studentaffairs.baruch.cuny.edu/health/');
        `);

        console.log('Tables created and data inserted successfully.');
    } catch (err) {
        console.error('Error executing query', err.stack);
    } finally {
        await client.end();
    }
})();
