import Vue from 'vue'
import App from './App.vue'
import Example from './Example.vue'
import Nav from './Nav'
import Body from './Body'

Vue.component('app-example', Example)
Vue.component('app-nav', Nav)
Vue.component('app-body', Body)

new Vue({
  el: '#app',
  render: h => h(App)
})
