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


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    referral_code VARCHAR(8) UNIQUE,
    referred_by INTEGER,
    CONSTRAINT uppercase_referral_code CHECK (referral_code = UPPER(referral_code)),
    FOREIGN KEY (referred_by) REFERENCES users(id)
);

INSERT INTO food (name, location, contact, hours, note, links, boroughs)
VALUES 
('Bronx Community College Food Pantry', 
 '2155 University Ave, Bronx, NY 10453, Access Resource Center office Loew Hall 125', 
 'dawn.daniels@bcc.cuny.edu', 
 'Mon-Fri 9am-5pm', 
 'utilize the Plentiful App to make appointments for the bi-weekly pantry', 
 'https://www.bcc.cuny.edu/campus-resources/access-resource-center/food-pantry/', 
 'Bronx'),
 
('Lehman College Food Pantry', 
 '250 Bedford Park Blvd W, Bronx, NY 10468, Student Life Building 120', 
 'food.bank@lehman.cuny.edu', 
 'Mon-Fri 9am-5pm', 
 'Serving Lehman students only, Walk-in service food bank with student ID to swipe in building and display to pantry coordinator', 
 'https://www.lehman.edu/student-affairs/basic-needs-center/lehman-food-bank.php', 
 'Bronx');



INSERT INTO housing (name, location, contact, hours, note, links, boroughs)
VALUES 
 ('Providence House', '703 Lexington Avenue, Brooklyn, NY 11221', 
 'info@providencehouse.org', 'Everyday','Must go through intake','https://www.providencehouse.org/','Brooklyn'),
 ('Restfull Nights Shelter', '106-38 150th St, Jamaica, NY 11435', 
 'support@restfullnightscorporation.com', 'Mon-Fri 9am-5pm','Non-profit homeless shelter and social services agency','http://www.restfullnightscorporation.com/','Queens'),
 ('Franklin Avenue Womens Intake Shelter', '1122 Franklin Avenue Bronx, NY 10456', 
 'INFO@CFTHOMELESS.ORG', '24 hours','Intake open 24 hours','https://www.coalitionforthehomeless.org/resources/franklin-avenue-armory-womens-shelter/','Bronx'),
 ('Project Hospitality', '100 Park Avenue, Staten Island, NY 10302', '718.448.1544', 'Everyday','Must go through intake','https://projecthospitality.org/','Staten Island');

INSERT INTO food (name, location, contact, hours, note, links, boroughs)
VALUES 
 ('York College Food Pantry', '94-20 Guy R Brewer Blvd, Jamaica, NY 11451',
 'nacevedo@york.cuny.edu', 'Tues & Wed 9am-6:30pm', 
 'Student can complete a reservation on the York College website', 
 'https://www.york.cuny.edu/student-development/the-food-pantry-is-open--ready-to-serve-you', 'Queens'),
 ('John Jay Food Pantry', '524 W 59th St, New York, NY 10019',
 'jjcfoodpantry@jjay.cuny.edu', 'Mon-Thurs 10am-3:30pm', 
 'Must meet eligibility requirements', 
 'https://www.jjay.cuny.edu/student-life/wellness-center/food-pantry', 'Manhattan');

INSERT INTO food (name, location, contact, hours, note, links, boroughs)
VALUES 
('Lehman College Food Pantry', '250 Bedford Park Blvd W, Bronx, NY 10468, Student Life Building 120', 
 'food.bank@lehman.cuny.edu', 'Mon-Fri 9am-5pm', 
 'Serving Lehman students only, Walk-in service food bank with student ID to swipe in building and display to pantry coordinator', 
 'https://www.lehman.edu/student-affairs/basic-needs-center/lehman-food-bank.php', 'Bronx');

INSERT INTO food (name, location, contact, hours, note, links, boroughs)
VALUES 
('Kingsborough Community College Food Pantry', '2001 Oriental Blvd, Brooklyn, NY 11235, CUNY EDGE, T4-216', 
 'arc.kcc@kbcc.cuny.edu', 'Mon-Fri 8am-5pm', 
 'Walk-in and online', 
 'https://www.kbcc.cuny.edu/studres/cunyedge.html', 'Brooklyn');

INSERT INTO food (name, location, contact, hours, note, links, boroughs)
VALUES 
('College of Staten Island Food Pantry', '2800 Victory Blvd, Staten Island, NY 10314', 
 'studentlife@csi.cuny.edu', 'Wed & Fri 10:30am-1pm', 
 'Make an appointment online', 
 'https://www.csi.cuny.edu/campus-life/student-services/food-pantry', 'Staten Island'),
 ('CUNY School of Law Food Pantry', '2 Ct Square W, Long Island City, NY 11101', 'studentaffairsoffice@law.cuny.edu', '24/7', 'Walk-in self serve with student ID to swipe into building and pantry location', 'https://www.law.cuny.edu/students/health-wellness/', 'Queens');
INSERT INTO consultation (name, location, contact, hours, note, links, boroughs)
VALUES
 ('Bronx Community College Personal Counseling', '2155 University Avenue, Bronx, NY 10453, Loew Hall, Room 430', 
 'Personal.counseling@bcc.cuny.edu', 'Mon-Fri 9am-5pm', 
 'Appointment is necessary to be seen.', 
 'https://www.bcc.cuny.edu/campus-resources/personal-counseling-services/', 
 'Bronx'),
 ('College of Staten Island Counseling Center', '2800 Victory Boulevard, Staten Island, NY 10314, Building 1A, Room 109', 
 'counseling@csi.cuny.edu', 'Mon-Fri 9am-5pm', 
 'Appointment is necessary to be seen.', 
 'https://www.csi.cuny.edu/students/counseling-center', 
 'Staten Island'),
('Queens College Counseling Center', '65-30 Kissena Boulevard, Flushing, NY 11367, Frese Hall', 
 'CounselingServices@qc.cuny.edu', 'Mon-Fri 9am-5pm', 
 'Appointment is necessary to be seen.', 
 'https://www.qc.cuny.edu/cs/','Queens');