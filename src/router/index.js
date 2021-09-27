import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Presentation from '../views/Presentation.vue'
import Activities from '../views/Activities.vue'
import ActivitieItem from '../views/ActivitieItem.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/presentation',
    name: 'Presentation',
    component: Presentation
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities
  },
  {
    path: '/activities/:item',
    name: 'ActivitieItem',
    component: ActivitieItem
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})

export default router
