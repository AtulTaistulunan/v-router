import Vue from 'vue'
import App from './App.vue'
//導入配置好的路由
import router from "@/router";

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
