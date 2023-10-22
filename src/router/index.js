import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '@/components/Home/HomePage.vue'
import CodeGeneration from "@/components/Home/CodeGeneration.vue";
import CodeComment from "@/components/Home/CodeComment.vue";
import CodeCorrection from "@/components/Home/CodeCorrection.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',    // Routing mode, this mode will not display the pound sign # in the address
  routes: [
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
  ]
})

export default router
