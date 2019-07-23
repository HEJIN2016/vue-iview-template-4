import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { Button } from 'iview'
import "@babel/polyfill";
import './style/main.less'

Vue.component("Button", Button);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
