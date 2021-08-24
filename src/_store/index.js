// import Vue from 'vue';
// import Vuex from 'vuex';

import { alert } from './alert.module';
import { authentication } from './authentication.module';

// Vue.use(Vuex);

import { createStore } from 'vuex'

export default createStore({
  state: {
	apiUrl: 'https://localhost:44396/api'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
	alert,
	authentication
  }
})



// export const store = new Vuex.Store({
//     modules: {
//         alert,
//         authentication
//     }
// });
