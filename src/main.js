import Vue from 'vue'
import App from './App.vue'
import  scrollBar from './lib/scroll.js'
Vue.config.productionTip = false
Vue.use(scrollBar)
new Vue({
  render: h => h(App),
}).$mount('#app')
