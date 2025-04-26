import { createApp } from 'vue';  // ใช้ createApp จาก Vue 3.x
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';  // ใช้ createRouter จาก Vue 3.x
import Login from './components/Login.vue';
import BookList from './components/BookList.vue';

// กำหนดเส้นทาง
const routes = [
  { path: '/', component: Login },
  { path: '/books', component: BookList },
];

// สร้าง router สำหรับ Vue 3.x
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// สร้างแอปและติดตั้ง router
const app = createApp(App);
app.use(router);
app.mount('#app');
