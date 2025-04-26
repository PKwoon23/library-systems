const express = require('express');
const router = express.Router();
const db = require('../config/db');

// ดึงข้อมูลหนังสือทั้งหมด
router.get('/books', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM books');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

module.exports = router;