import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css';
import axios from "axios";

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$axios = axios;
Vue.prototype.$httpurl = ' http://localhost:9090'
Vue.prototype.$websocketurl = 'ws://localhost:9090'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
