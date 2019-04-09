import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUi from 'mint-ui'
import MuseUI from 'muse-ui'
// 引入muse-UI
import 'muse-ui/dist/muse-ui.css'
// 引入MintUi
import 'mint-ui/lib/style.css'
Vue.use(MintUi)
Vue.use(MuseUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
