import { createRouter, createWebHistory } from 'vue-router';

// const Index = () => import('../views/index.vue') 
const Home = () => import('../views/home.vue')

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 定义路由配置
    // {
    //   path: '/',
    //   component: Index
    // },
    {
      path: '/home',
      component: Home
    }
  ]
});

export default router