import "@babel/polyfill";
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { Button } from 'view-design'
import './style/main.less'
import axios from './js/axios'

Vue.component("Button", Button);
Vue.config.productionTip = false;
Vue.prototype.$Axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
