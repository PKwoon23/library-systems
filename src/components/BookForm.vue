<template>
    <div class="add-book-form">
      <input v-model="newBook.title" placeholder="กรุณากรอกชื่อหนังสือ" />
      <button @click="addBook">เพิ่มหนังสือ</button>
    </div>
  
    <table>
      <thead>
        <tr>
          <th>รหัสหนังสือ</th>
          <th>ชื่อหนังสือ</th>
          <th>สถานะ</th>
          <th>การจัดการ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>
            <input v-if="editingBookId === book.id" v-model="editedTitle" />
            <span v-else>{{ book.title }}</span>
          </td>
          <td>{{ book.status }}</td>
          <td>
            <button @click="toggleBookStatus(book)">
              {{ book.status === 'ยืมแล้ว' ? 'คืน' : 'ยืม' }}
            </button>
            <button @click="startEditing(book)">แก้ไข</button>
            <button @click="deleteBook(book.id)">ลบ</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    data() {
      return {
        books: [],
        newBook: { title: '' },
        editingBookId: null,
        editedTitle: '',
      };
    },
    async mounted() {
      await this.fetchBooks();
    },
    methods: {
      async fetchBooks() {
        const response = await fetch('http://localhost:3000/books');
        const data = await response.json();
        this.books = data;
      },
      async addBook() {
        if (!this.newBook.title) return alert('กรุณากรอกชื่อหนังสือ');
        const response = await fetch('http://localhost:3000/books/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.newBook),
        });
        if (response.ok) {
          await this.fetchBooks();
        }
      },
      startEditing(book) {
        this.editingBookId = book.id;
        this.editedTitle = book.title;
      },
      async saveEditedTitle(id) {
        const response = await fetch(`http://localhost:3000/books/update/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: this.editedTitle }),
        });
        if (response.ok) {
          await this.fetchBooks();
          this.editingBookId = null;
        }
      },
      async deleteBook(id) {
        const response = await fetch(`http://localhost:3000/books/delete/${id}`, { method: 'DELETE' });
        if (response.ok) {
          this.books = this.books.filter(book => book.id !== id);
        }
      },
      async toggleBookStatus(book) {
        const newStatus = book.status === 'ยืมแล้ว' ? 'พร้อมให้ยืม' : 'ยืมแล้ว';
        const response = await fetch(`http://localhost:3000/books/update/${book.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: newStatus }),
        });
        if (response.ok) {
          await this.fetchBooks();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* ใส่สไตล์เพิ่มเติม */
  </style>
  