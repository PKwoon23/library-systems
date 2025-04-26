const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgre', // ใส่ชื่อผู้ใช้งานฐานข้อมูลจริง
  password: 'phomporn222', // ใส่รหัสผ่านของฐานข้อมูลจริง
  database: 'library_system', // ชื่อฐานข้อมูล
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('Connection error', err.stack));

module.exports = client;