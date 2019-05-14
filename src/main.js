import Vue from 'vue'
import App from './App.vue'
import EventBus from './libs/eventBus.js'
import CommandBus from './libs/commandBus'

Vue.prototype.$bus = EventBus
Vue.prototype.$command = CommandBus
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
