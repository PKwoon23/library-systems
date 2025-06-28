// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import BookList from '../components/BookList.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/books', component: BookList }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;