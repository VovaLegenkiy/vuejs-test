import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const DEFAULT_VALUE = 0;
export default new Vuex.Store({
  state: {
    value: DEFAULT_VALUE,
    currencyData: [],
    convertCurrency: 1,
    result: '',
    history: []
  },
  mutations: {
    setValue(state, newValue) {
      state.value = newValue;
    },
    resetValue(state) {
      state.value = DEFAULT_VALUE
    }
  },
  getters: {
    getResult: function (state) {
      return state.value * state.convertCurrency;
    }
  }
})
