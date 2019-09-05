const db = require('./index.js');


db
    .query(
        'CREATE TABLE IF NOT EXISTS emails(\
        id serial PRIMARY KEY,\
        name VARCHAR (50),\
        email VARCHAR (50) UNIQUE)')
    .then(res => console.log('EMAIL TABLE CREATED'))
    .catch(err => console.log('There was an error: ' + err));

db
    .query(
        'CREATE TABLE IF NOT EXISTS candidates(\
            id SERIAL PRIMARY KEY,\
            name VARCHAR (50),\
            electionDate date,\
            adURL VARCHAR (50),\
            blurb VARCHAR (1000))')
    .then(res => {
        console.log('CANDIDATE TABLE CREATED');
        db.end();
    })
    .catch(err => console.log('There was an error: ' + err))