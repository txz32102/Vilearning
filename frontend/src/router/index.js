import { createRouter, createWebHistory } from 'vue-router'
import UnityMap from '../views/UnityMap.vue';
import TableView from '../views/TableView.vue';
import DebugView from '@/views/DebugView.vue';
import MainPage from '@/views/MainPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/unity',
      name: 'unity',
      component: UnityMap
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: TableView
    },
    {
      path: '/debug',
      name: 'debug', 
      component: DebugView
    },
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
  ]
})

export default router
