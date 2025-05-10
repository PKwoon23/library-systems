const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');

app.use(cors({
  origin: /^(http:\/\/localhost:\d+)$/,
}));

let books = require('./data/books');
         
app.use(express.json()); // อ่าน body ของ POST, PUT

// GET /books - ดูหนังสือทั้งหมด
app.get('/books/get', (req, res) => {
  res.json(books);
});

app.get('/books/get/:id', (req, res) => {
  const bookId = parseInt(req.params.id); // เปลี่ยนเป็น parseInt
  const book = books.find(b => b.id === bookId);

  if (book) {
    res.json(book); // ส่งคืนข้อมูลหนังสือ
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// POST /books - เพิ่มหนังสือใหม่
app.post('/books/create', (req, res) => {
  const { title } = req.body;
  console.log("req.body |", req.body);
  if (!title) {
    return res.status(400).json({ error: 'Title and status are required' });
  }

  // หา id ที่ต่ำที่สุดที่ไม่ถูกใช้
  const existingIds = books.map(book => book.id);
  let newId = 1;
  while (existingIds.includes(newId)) {
    newId++;
  }

  const newBook = {
    id: newId,
    title: title,
    status: "พร้อมให้ยืม",
  };

  books.push(newBook);
  res.status(201).json(newBook);
  console.log('Create book',newBook)
});

// PUT /books/:id - อัปเดตหนังสือ
app.put('/books/update/:id', (req, res) => {
  const bookId = parseInt(req.params.id); // เปลี่ยนเป็น parseInt
  const { title,status } = req.body;
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  console.log('Before Update book','\n',book)
  if (title !== undefined) book.title = title;
  if (status !== undefined) book.status = status;
  res.json(book); 
  console.log('Update book ','\n',book,'\n')
});

// DELETE /books/delete/:id - ลบหนังสือ
app.delete('/books/delete/:id', (req, res) => {
  const bookId = parseInt(req.params.id); // เปลี่ยนเป็น parseInt
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  // ลบหนังสือออกจาก array
  books.splice(bookIndex, 1);
  console.log('Book deleted successfully','Delete book',bookId)

  // ปรับไอดีของหนังสือที่อยู่หลังจากนั้นให้เรียงลำดับใหม่
  books.forEach((book, index) => {
    book.id = index + 1;
  });

  res.status(200).json({ message: 'Book deleted successfully' });

});

// เริ่มรัน server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});