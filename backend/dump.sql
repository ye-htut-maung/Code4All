CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    contact TEXT NOT NULL,
    hours TEXT NOT NULL,
    note TEXT,
    links TEXT,
    boroughs TEXT
);
INSERT INTO food (name, location, contact, hours, note, links, boroughs)
VALUES 
('Knights Table Pantry', '65-30 Kissena Blvd., Flushing, NY 11367, Student Union, Lower Level 23', 
 'knightstable@qc.cuny.edu', 'Mon-Fri 9am-5pm', 
 'Walk-in self serve with student ID to swipe into building and pantry location', 
 'https://qcknightstable.org/', 'Queens'),
 
('Bennys Pantry and Gardens', '160 Convent Ave, New York, NY 10031, NAC Ground Floor', 
 'bennysfoodpantry@ccny.cuny.edu', 'Weekly 10am-6pm', 
 'Walk-in (self serve)', 
 'https://www.ccny.cuny.edu/bennysfoodpantry', 'Manhattan');

 CREATE TABLE housing (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    contact TEXT NOT NULL,
    hours TEXT NOT NULL,
    note TEXT,
    links TEXT,
    boroughs TEXT
);
INSERT INTO housing (name, location, contact, hours, note, links, boroughs)
VALUES 
('Coalition for the Homeless', '129 Fulton Street, 4th Floor, New York, 10038', 
 'info@cfthomeless.org', 'Weekly 5:30 - 7pm', 
 'Operates every night starting at 5:30 PM at St. Barts, 51St. St. between Park and Lex. Vans operate in Uptown and Downtown Manhattan and in the Bronx', 
 'https://www.coalitionforthehomeless.org/resources/coalition-homeless-grand-central-food-program/', 
 'Manhattan');

CREATE TABLE consultation (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    contact TEXT NOT NULL,
    hours TEXT NOT NULL,
    note TEXT,
    links TEXT,
    boroughs TEXT
);
INSERT INTO consultation (name, location, contact, hours, note, links, boroughs)
VALUES 
('Baruch College Health Services', '138 E. 26th Street, 1st Fl. New York, NY 10010', 
 'StudentHealthCareCenter@baruch.cuny.edu', 'Mon-Fri 8am-6pm', 
 'Appointment is necessary to be seen.', 
 'https://studentaffairs.baruch.cuny.edu/health/', 
 'Manhattan'),

('The Brooklyn College Health Clinic', '2900 Bedford Avenue, 114 Roosevelt Hall, Brooklyn, NY 11210', 
 '718-951-5580', 'Mon-Fri 9am-5pm', 
 'The Health Clinic typically remains open throughout reading and exam periods and between semesters', 
 'https://studentaffairs.baruch.cuny.edu/health/', 
 'Brooklyn');