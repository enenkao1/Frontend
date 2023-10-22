import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '@/components/Home/HomePage.vue'
import CodeGeneration from "@/components/Home/CodeGeneration.vue";
import CodeComment from "@/components/Home/CodeComment.vue";
import CodeCorrection from "@/components/Home/CodeCorrection.vue";
import LoginView from '../views/LoginView.vue';
import RegView from '../views/RegView.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/codeGeneration',
    name: 'codeGeneration',
    component: CodeGeneration
  },
  {
    path: '/codeComment',
    name: 'codeComment',
    component: CodeComment
  },
  {
    path: '/codeCorrection',
    name: 'codeCorrection',
    component: CodeCorrection
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/reg',
    name: 'reg',
    component: RegView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
