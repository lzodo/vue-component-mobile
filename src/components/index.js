import {lzoHeader} from './Layout/index'

const iview = {
    lzoHeader,
}
const install = function (Vue) {
  Object.keys(iview).forEach((key) => {
    console.log(iview)
    console.log(iview[key])
    Vue.component(iview[key].name, iview[key])
  })
  /**
    * 全局注定弹框
    */
//   Vue.prototype.$xfdDialog = xfdDialog
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install