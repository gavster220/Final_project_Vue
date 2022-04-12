import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MonsterListView from '../views/MonsterListView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/monster_list',
    name: 'MonsterListView',
    component: MonsterListView,
    props: true
  },
  {
    path: '/monster_list',
    name: 'MonsterListView',
    component: MonsterListView,
    props: true
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
