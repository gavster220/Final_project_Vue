import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MonsterListView from '../views/MonsterListView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/monster_list',
    name: 'MonsterListView',
    component: MonsterListView
  },
  {
    path: '/monster_list',
    name: 'MonsterListView',
    component: MonsterListView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
