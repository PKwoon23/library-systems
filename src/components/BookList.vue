<template>
  <div class="container">
    <!-- ฟอร์มสำหรับการเพิ่มหนังสือ -->
    <div class="add-book-form">
      <input v-model="newBook.title" placeholder="กรุณากรอกชื่อหนังสือ" class="book-input" />
      <button @click="addBook" class="add-book-button">เพิ่มหนังสือ</button>
    </div>

    <!-- ตารางแสดงข้อมูลหนังสือ -->
    <table class="book-table">
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
            <div v-if="editingBookId === book.id">
              <input v-model="editedTitle" class="edit-title-input" />
            </div>
            <div v-else>
              {{ book.title }}
            </div>
          </td>

          <td>
            <span :class="{'status-green': book.status === 'พร้อมให้ยืม', 'status-red': book.status === 'ยืมแล้ว'}">
              {{ book.status }}
            </span>
          </td>

          <td>
            <!-- ปุ่มยืมคืนจะไม่แสดงในขณะแก้ไข -->
            <button v-if="editingBookId !== book.id" @click="toggleBookStatus(book)" class="action-button" 
                    :class="book.status === 'ยืมแล้ว' ? 'return-button' : 'borrow-button'">
              {{ book.status === 'ยืมแล้ว' ? 'คืนหนังสือ' : 'ยืมหนังสือ' }}
            </button>

            <!-- ปุ่มแก้ไขและลบเมื่อไม่ได้แก้ไข -->
            <template v-if="editingBookId === book.id">
              <button @click="saveEditedTitle(book.id)" class="action-button edit-button">บันทึก</button>
              <button @click="cancelEdit" class="action-button delete-button">ยกเลิก</button>
            </template>
            <template v-else>
              <button @click="startEditing(book)" class="action-button edit-button">แก้ไข</button>
              <button @click="deleteBook(book.id)" class="action-button delete-button">ลบ</button>
            </template>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data() {
    return {
      books: [], // เอาไว้เก็บข้อมูลหนังสือ
      newBook: { title: '' }, // ข้อมูลหนังสือใหม่
      editingBookId: null, // id ของหนังสือที่กำลังแก้ไข
      editedTitle: '', // ชื่อหนังสือที่กำลังแก้ไข
    };
  },
  async mounted() {
    await this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await fetch('http://localhost:3000/books/get');
        if (!response.ok) {
          throw new Error('ไม่สามารถดึงข้อมูลหนังสือได้');
        }
        const data = await response.json();
        this.books = data;
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      }
    },
    async addBook() {
      if (!this.newBook.title) {
        alert('กรุณากรอกชื่อหนังสือ');
        return;
      }
      try {
        const response = await fetch('http://localhost:3000/books/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.newBook),
        });
        if (response.ok) {
          this.newBook.title = '';
          await this.fetchBooks();
        } else {
          console.error('ไม่สามารถเพิ่มหนังสือได้');
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการเพิ่มหนังสือ:', error);
      }
    },
    startEditing(book) {
      this.editingBookId = book.id;
      this.editedTitle = book.title;
    },
    async saveEditedTitle(id) {
      if (!this.editedTitle.trim()) {
        alert('กรุณากรอกชื่อหนังสือ');
        return;
      }
      try {
        const response = await fetch(`http://localhost:3000/books/update/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: this.editedTitle }),
        });
        if (response.ok) {
          this.editingBookId = null;
          this.editedTitle = '';
          await this.fetchBooks();
        } else {
          console.error('ไม่สามารถแก้ไขหนังสือได้');
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการแก้ไขหนังสือ:', error);
      }
    },
    cancelEdit() {
      this.editingBookId = null;
      this.editedTitle = '';
    },
    async deleteBook(id) {
      try {
        const response = await fetch(`http://localhost:3000/books/delete/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          this.books = this.books.filter(book => book.id !== id);
        } else {
          console.error('ไม่สามารถลบหนังสือได้');
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการลบหนังสือ:', error);
      }
    },
    async toggleBookStatus(book) {
      const newStatus = book.status === 'ยืมแล้ว' ? 'พร้อมให้ยืม' : 'ยืมแล้ว';
      try {
        const response = await fetch(`http://localhost:3000/books/update/${book.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: newStatus }),
        });
        if (response.ok) {
          await this.fetchBooks();
        } else {
          console.error('ไม่สามารถเปลี่ยนสถานะหนังสือได้');
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการเปลี่ยนสถานะหนังสือ:', error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.add-book-form {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.book-input, .edit-title-input {
  padding: 10px;
  width: 300px;
  border: 1px solid #333;
}

.add-book-button {
  background-color: rgb(25, 25, 92);
  border-radius: 5px;
  color: white;
  padding: 10px 15px;
}

.book-table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 15px;
  text-align: center;
  border: 1px solid #000000;
}

thead {
  background-color: rgb(25, 25, 92);
  color: white;
}

.status-green {
  color: green;
}

.status-red {
  color: red;
}

.action-button {
  padding: 8px 15px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
}

.borrow-button {
  background-color: rgb(32, 155, 32);
}

.return-button {
  background-color: rgb(255, 69, 0);
}

.edit-button {
  background-color: rgb(247, 178, 49);
}

.delete-button {
  background-color: rgb(172, 26, 26);
}

.action-button:last-child {
  margin-right: 0;
}

@media screen and (max-width: 600px) {
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  th, td {
    padding: 8px;
  }

  .add-book-form {
    margin-bottom: 20px;
  }

  .add-book-button {
    font-size: 14px;
  }

  .action-button {
    font-size: 14px;
    padding: 6px 10px;
  }
}
</style>
