import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import formAdd from '@/views/formAdd.vue'
import home from '@/views/home.vue'
import formEdit from '@/views/formEdit.vue'

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
      name: 'formAdd',
      component: formAdd,
      beforeEnter:(to,from,next)=>{
        if(localStorage.token){
          next()
        } else{
          next('/')
        }
      }
    },
    {
      path: '/editBook',
      name: 'formEdit',
      component: formEdit,
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
