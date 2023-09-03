import { createRouter, createWebHistory } from 'vue-router';

// const Home = () => import('../views/home.vue')

// 创建路由实例
const publicRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/test',
    component: () => import('../views/test.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes
});

export default router