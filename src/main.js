import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.js'

import './styles/index.scss'
import './styles/icon.css'

const app = createApp(App);

app.use(ElementPlus);

// 使用路由实例
app.use(router);

// 挂载应用
app.mount('#app');
