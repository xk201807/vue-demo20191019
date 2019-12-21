import Vuex from 'vuex';
import Vue from 'vue'
import market from '@/store/market.js';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules:{
    market:market
  }
})

export default store