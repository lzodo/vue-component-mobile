import Vue from 'vue'
import Router from 'vue-router'
import Modeules from '@/views/index';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Modeules.MainController,
      children:[
        {
          path: '/',
          name: 'home',
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
      ],
    },
    {
      path: '/SxbjCssCase',
      name: 'SxbjCssCase',
      component: Modeules.SxbjCssCase
    },
    {
      path:'/CountDownController',
      name:'CountDownController',
      component:Modeules.CountDownController
    },
    {
      path:'/VisCodeEnterController',
      name:'VisCodeEnterController',
      component:Modeules.VisCodeEnterController
    },
  ]
})
