import { createApp } from 'vue';
import App from './App.vue';

import router from './router'; 

const app = createApp(App);

app.use(router); // <-- ใช้ router กับแอป
app.mount('#app');
