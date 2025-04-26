// server/server.js

import http from 'http';
import { Pool } from 'pg';

// สร้าง connection กับ PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'library_system',
  password: 'phomporn222', // ใส่รหัสจริงของหนู
  port: 5432,
});

// สร้าง server
const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/books') {
    try {
      const result = await pool.query('SELECT * FROM books');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result.rows));
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// ให้ server รันที่พอร์ต 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});