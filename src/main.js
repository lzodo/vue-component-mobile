// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTool from '@/utils/VueTool'
import '@static/style/sass/app.scss'
import '@static/fonts/iconfont.css'

import MyCom from '@/components/index'
Vue.use(MyCom)

import EasyRefresh from 'vue-easyrefresh'
Vue.use(EasyRefresh)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
