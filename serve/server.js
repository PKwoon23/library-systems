const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

// ใช้งานเส้นทาง API
app.use(express.json());
app.use('/api', bookRoutes);

// เปิดเซิร์ฟเวอร์ที่พอร์ต 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});