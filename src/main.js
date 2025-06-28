// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 

const app = createApp(App);

app.use(router); // <-- บอก Vue ให้ใช้ Router
app.mount('#app');