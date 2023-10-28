import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CodeGeneration from "@/components/mainFunctions/CodeGeneration.vue";
import CodeComment from "@/components/mainFunctions/CodeComment.vue";
import CodeCorrection from "@/components/mainFunctions/CodeCorrection.vue";
import LoginView from '../views/LoginView.vue';
import RegView from '../views/RegView.vue';
import ForumView from "@/views/ForumView";
import postView from "@/views/postView";
import TempView from "@/views/TempView";
import userMainView from "@/views/userMainView";
import TaskCreateView from "@/views/TaskCreateView";
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
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
  {
    path: '/forum',
    name: 'forum',
    component: ForumView
  },
  {
    path: '/post',
    name: 'post',
    component: postView
  },
  {
    path: '/temp',
    name: 'temp',
    component: TempView
  },
  {
    path: '/user',
    name: 'user',
    component: userMainView
  },
  {
    path: '/taskcreate',
    name: 'taskcreate',
    component: TaskCreateView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
