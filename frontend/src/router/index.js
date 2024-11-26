import { createRouter, createWebHistory } from 'vue-router'

const routes =  [
  {
    path: '/',
    name: 'analytics',
    component: () => import('@/views/Analytics.vue'),
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('@/views/ClientsView.vue'),
  },
  {
    path: '/companies',
    name: 'companies',
    component: () => import('@/views/CompanyView .vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
