import VueRouter from 'vue-router';
import Vue from 'vue';
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const HomeNews = () => import('../components/HomeNews.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'messages',
        component: HomeMessage
      },
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  },
]

const router = new VueRouter({
  //配置路由和组件中的映射关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 将router对象传入vue实例中

export default router;