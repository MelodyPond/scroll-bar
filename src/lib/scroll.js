import ScrollBar from './ScrollBar.vue'
let scroll = {}
scroll.install = function(Vue,options) {
  Vue.component(ScrollBar,ScrollBar)
}
export default scroll