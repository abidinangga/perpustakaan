import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import formadd from '@/views/formadd.vue'
import home from '@/views/home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/addBook',
      name: 'formadd',
      component: formadd,
      beforeEnter:(to,from,next)=>{
        if(localStorage.token){
          next()
        } else{
          next('/')
        }
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      beforeEnter:(to,from,next)=>{
        if(localStorage.token){
          next()
        } else{
          next('/')
        }
      }
    },
  ]
})

export default router
