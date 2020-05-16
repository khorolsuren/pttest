import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import chart from "../components/chart.vue"



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/chart',
    name: 'chart',
    component: chart
  }
]
})

export default router
