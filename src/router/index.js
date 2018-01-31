import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from '@/layout/LandingPage'
import Inside from '@/layout/Inside'
import Dashboard from '@/components/Dashboard/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/inside',
      name: 'Inside',
      component: Inside
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
