
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/views/Test.vue')
    },
    {
      path: '/testResult',
      name: 'test result',
      component: () => import('@/views/TestResult.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    }
  ]
})

export default router
