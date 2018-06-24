import Vue from 'vue'
import App from './App.vue'

import Confirm from '@/components/Confirm'

Vue.config.productionTip = false

Vue.use(Confirm)

new Vue({
  render: h => h(App)
}).$mount('#app')
