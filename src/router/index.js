import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../views/LoginPage.vue';
import DashboardPage from '../views/DashboardPage.vue';
import BookList from '../components/BookList.vue';

const routes = [
  { path: '/', redirect: '/login' }, // รีไดเร็กต์ root ไปที่ /login
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/dashboard', name: 'Dashboard', component: DashboardPage },
  { path: '/books', component: BookList }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
