import type { RouteType } from '~/types/router'

const Layout = () => import('@/layout/IndexView.vue')

export default {
  name: 'home-index',
  path: '/',
  component: Layout,
  redirect: '/home',
  meta: {
    order: 0
  },
  children: [
    {
      name: '仪表盘',
      path: 'home',
      component: () => import('./IndexView.vue'),
      meta: {
        title: '仪表盘',
        icon: 'mdi:monitor-dashboard',
        role: ['admin'],
        requireAuth: true
      }
    }
  ]
} as RouteType
