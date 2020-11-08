import Vue from 'vue'
import App from './App.vue'
import storychars from './letterArchive'
import router from './router'

let data = {
  letters: storychars,
  points: 0
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
