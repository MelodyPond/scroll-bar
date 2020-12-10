import scrollBar from './ScrollBar.vue'
let scroll = {}
scroll.install = function(Vue) {
  Vue.component('scroll-bar',scrollBar)
}
export default scroll