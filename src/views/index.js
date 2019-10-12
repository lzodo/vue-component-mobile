
//组件页面
const AppController = () => import('./home/AppController.vue');    

//普通页面
const AboutController = () => import('./pages/AboutController.vue');    
const UserInfoController = () => import('./pages/UserInfoController.vue');    

//案例页面
const SxbjCssCase = () => import('./casepages/sxbk.vue');    



export default {
    AppController,
    AboutController,
    UserInfoController,

    SxbjCssCase,
}
