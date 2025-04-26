<template>
    <div class="book-list">
      <h2>Book List</h2>
      <ul>
        <li v-for="book in books" :key="book.id">
          <p>{{ book.title }}</p>
          <button @click="borrowBook(book.id)">Borrow</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        books: [],
      };
    },
    created() {
      this.fetchBooks();
    },
    methods: {
      fetchBooks() {
        // ดึงข้อมูลหนังสือจาก API
        fetch('http://localhost:3000/api/books')
          .then((response) => response.json())
          .then((data) => {
            this.books = data;
          })
          .catch((error) => console.error('Error fetching books:', error));
      },
      borrowBook(bookId) {
        // ฟังก์ชันยืมหนังสือ
        console.log('Borrow book with ID:', bookId);
      },
    },
  };
  </script>