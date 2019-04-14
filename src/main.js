import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSeedling} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLine } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSeedling, faFacebook, faLine);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
