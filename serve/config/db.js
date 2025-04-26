const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'library_system',
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('Connection error', err.stack));

module.exports = client;