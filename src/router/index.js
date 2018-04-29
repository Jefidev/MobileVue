import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Download from '@/components/Download'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/app',
      name: 'Download App',
      component: Download
    }
  ]
})
