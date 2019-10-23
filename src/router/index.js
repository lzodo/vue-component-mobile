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
        { path: '/',name: 'home',component: Modeules.AppController },
        { path: '/plugin',name: 'plugin',component: Modeules.PlugInController },
        { path: '/about',name: 'about',component: Modeules.AboutController },
        { path: '/userinfo',name: 'userinfo',component: Modeules.UserInfoController },
      ],
    },
    // home - my component
    { path:'/CountDownController',name:'CountDownController',component:Modeules.CountDownController },
    { path:'/VisCodeEnterController',name:'VisCodeEnterController',component:Modeules.VisCodeEnterController },
    { path:'/DownScrollController',name:'DownScrollController',component:Modeules.DownScrollController },
    { path:'/PanelController',name:'PanelController',component:Modeules.PanelController },
    // home - other component
    { path:'/DateTimeController',name:'DateTimeController',component:Modeules.DateTimeController },
    
    // about
    { path:'/SxbjCssCase',name: 'SxbjCssCase',component: Modeules.SxbjCssCase },

    // plugin
    { path:'/vue-easyrefresh',name: 'VueEasyrefresh',component: Modeules.VueEasyrefresh },
  ]
})
