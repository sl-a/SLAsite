const { Pool, Client } = require('pg');
const config = require('../config.js');

const pool = new Pool({
    user: config.postgresUser,
    host: '3.16.25.245',
    database: 'emails',
    password: config.postgresPass,
    port: 3211,
  })
  
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  
  const client = new Client({
    user: 'dbuser',
    host: 'database.server.com',
    database: 'mydb',
    password: 'secretpassword',
    port: 3211,
  })
  client.connect()
  
  client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })