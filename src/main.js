import Vue from 'vue'
import App from './App.vue'
import Container from './container'

Vue.config.productionTip = false
let container = new Container();
new Vue({
  render: h => h(App),
  provide: () => ({
    commandBus: container.commandBus,
    blockStore: container.blockStore
  })
}).$mount('#app')
