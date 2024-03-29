import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import './permission'

import './styles/icon.css'

const app = createApp(App);

app.use(ElementPlus);

app.use(store);

// 使用路由实例
app.use(router);

// 挂载应用
app.mount('#app');
