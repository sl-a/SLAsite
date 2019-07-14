const { Pool, Client } = require('pg');
const config = require('../config.js');
const connectionString = `postgresql://localhost:5432/sla`;

const client = new Client(connectionString);
client.connect();

module.exports = client;