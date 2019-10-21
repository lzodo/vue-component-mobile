
// //组件页面
// const MainController = () => import('./home/MainController.vue');    
// const AppController = () => import('./home/AppController.vue');    

// //普通页面
// const AboutController = () => import('./pages/AboutController.vue');    
// const UserInfoController = () => import('./pages/UserInfoController.vue');    

// //案例页面
// const SxbjCssCase = () => import('./casepages/SxbjCssCase.vue');    

//require.context
// directory：说明需要检索的目录
// useSubdirectories：是否检索子目录
// regExp: 匹配文件的正则表达式,一般是文件名
const path = require('path')
const modules = {}

let files = require.context('@/views', true, /\.vue$/);
files.keys().forEach(key => {
    const name = path.basename(key, '.vue') //获取文件名，过滤的字符
    modules[name] = files(key).default || files(key)
})

export default modules
