import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
 
// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 定义路由配置
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
});
 
// 创建应用实例
const app = createApp(App);
 
// 使用路由实例
app.use(router);
 
// 挂载应用
app.mount('#app');