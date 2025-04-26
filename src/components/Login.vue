<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="Login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm', 
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    Login() {
      // ตัวอย่างการตรวจสอบชื่อผู้ใช้งานและรหัสผ่าน
      const validUsername = 'admin'; // กำหนดชื่อผู้ใช้
      const validPassword = 'password123'; // กำหนดรหัสผ่าน

      // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
      if (this.username === validUsername && this.password === validPassword) {
        // ถ้าถูกต้องให้ไปที่หน้า 'books'
        this.$router.push('/books');
      } else {
        // ถ้าผิดให้แสดงข้อความแจ้งเตือน
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      }
    },
  },
};
</script>

<style scoped>
/* คุณสามารถปรับสไตล์ให้เหมาะสมตามต้องการ */
.login-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

form {
  display: flex;
  flex-direction: column;
}

form div {
  margin-bottom: 15px;
}

input {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>