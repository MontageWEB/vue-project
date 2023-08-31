import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App);
 
// 使用路由实例
app.use(router);
 
// 挂载应用
app.mount('#app');
