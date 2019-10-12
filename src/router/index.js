import Vue from 'vue'
import Router from 'vue-router'
import Modeules from '@/views/index';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Modeules.AppController
    },
    {
      path: '/about',
      name: 'about',
      component: Modeules.AboutController
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: Modeules.UserInfoController
    },
    {
      path: '/casepages/sxbk',
      name: 'sxbk',
      component: Modeules.SxbjCssCase
    }
  ]
})
