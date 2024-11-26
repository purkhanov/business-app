import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ChartView.vue'

const routes =  [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/ChartView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
