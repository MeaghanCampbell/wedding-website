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
      path: '/faq',
      name: 'FAQ',
      component: () => import('../views/FAQ.vue')
    },
    {
      path: '/rsvp',
      name: 'RSVP',
      component: () => import('../views/RSVP.vue')
    },
    {
      path: '/our-story',
      name: 'Our Story',
      component: () => import('../views/OurStory.vue')
    },
    {
      path: '/registry',
      name: 'registry',
      component: () => import('../views/Registry.vue')
    }
  ]
})

export default router
