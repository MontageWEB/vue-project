import { createRouter, createWebHistory } from 'vue-router';
 
const Home = () => import('../views/home.vue')

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 定义路由配置
    {
      path: '/',
      component: Home
    }
  ]
});
 
export default router