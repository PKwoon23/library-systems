import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../views/LoginPage.vue';
import DashboardPage from '../views/DashboardPage.vue';

// Define routes
const routes = [
  {
    path: '/',
    redirect: '/login' // Redirect root to /login
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage
  }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;
