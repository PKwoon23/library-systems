import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Books from '../components/Books.vue';  // หน้า Books

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
];

const router = new VueRouter({
  routes
});

export default router;