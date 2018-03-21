import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // içerisinde uygulamada kullandığımız değişkenlerden yazarız
    value: 0
  },
  getters,
  mutations,
  actions,
  // modules importing
  modules: {
    counter
  }
});