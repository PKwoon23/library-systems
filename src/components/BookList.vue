<template>
    <div class="book-list">
      <h2>Book List</h2>
      <ul v-if="books.length > 0">
        <li v-for="book in books" :key="book.id">
          {{ book.title }} - {{ book.author }}
        </li>
      </ul>
      <p v-else>ไม่มีข้อมูลหนังสือ</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookList',
    data() {
      return {
        books: [], // สร้าง array ไว้เก็บหนังสือ
      };
    },
    mounted() {
      this.fetchBooks();
    },
    methods: {
      async fetchBooks() {
        try {
          const response = await fetch('http://localhost:3000/books');
          const data = await response.json();
          this.books = data;
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* ใส่สไตล์ตามต้องการ */
  </style>