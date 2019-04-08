import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUi from 'mint-ui'

// 引入MintUi
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
