import { createRouter, createWebHistory } from 'vue-router';

import DashboardPage from '../views/DashboardPage.vue';
import BookList from '../components/BookList.vue';

  const routes = [
    { path: '/', redirect: '/books' }, 
    { path: '/dashboard', name: 'Dashboard', component: DashboardPage },
    { path: '/books', component: BookList }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
