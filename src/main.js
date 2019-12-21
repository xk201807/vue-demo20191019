import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import router from './router.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/index';
import './mock/home';
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
