import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/auth/login.vue'
import ResetPassword from '../pages/auth/reset.vue'
import Dashboard from '../pages/dashboard/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPassword,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
})

export default router
