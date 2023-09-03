import { createRouter, createWebHistory } from 'vue-router';

// const Home = () => import('../views/home.vue')

// 创建路由实例
const publicRoutes = [
  {
    path: '/home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes
});

export default router