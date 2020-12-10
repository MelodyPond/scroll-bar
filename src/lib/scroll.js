import scrollBar from './ScrollBar.vue'
let scroll = {}
scroll.install = function(Vue,options) {
  Vue.component(scrollBar,scrollBar)
}
export default scroll