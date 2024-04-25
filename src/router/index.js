import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/travel',
      name: 'Travel',
      component: () => import('../views/Travel.vue')
    },
    {
      path: '/things-to-do',
      name: 'Things to Do',
      component: () => import('../views/Things.vue')
    },
    {
      path: '/details',
      name: 'Details',
      component: () => import('../views/Details.vue')
    },
    {
      path: '/rsvp',
      name: 'RSVP',
      component: () => import('../views/RSVP.vue')
    },
    {
      path: '/photos',
      name: 'Photos',
      component: () => import('../views/Photos.vue')
    },
    {
      path: '/registry',
      name: 'registry',
      component: () => import('../views/Registry.vue')
    }
  ]
})

export default router
