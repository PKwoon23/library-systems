<template>
    <div class="login-page">
      <div class="login-card">
        <h1>Login</h1>
        <p class="subtitle">Please login to your account</p>
        <form @submit.prevent="handleLogin" class="login-form">
          <input
            type="text"
            v-model="username"
            placeholder="Username"
            required
            class="input-field"
          />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            required
            class="input-field"
          />
          <button type="submit" class="submit-button">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        if (this.username === 'admin' && this.password === '123456') {
          this.$router.push('/dashboard');
        } else {
          alert('Invalid credentials');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%);
    padding: 20px;
    font-family: 'Poppins', sans-serif;
  }
  
  .login-card {
    background: #ffffff;
    padding: 40px 30px;
    border-radius: 15px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 10px;
    font-size: 32px;
    color: #333;
  }
  
  .subtitle {
    font-size: 14px;
    color: #777;
    margin-bottom: 30px;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .input-field {
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }
  
  .input-field:focus {
    outline: none;
    border-color: #6c63ff;
  }
  
  .submit-button {
    padding: 12px 15px;
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  .submit-button:hover {
    background-color: #5752d3;
    transform: translateY(-2px);
  }
  
  @media (max-width: 500px) {
    .login-card {
      padding: 30px 20px;
    }
  }
  </style>
  