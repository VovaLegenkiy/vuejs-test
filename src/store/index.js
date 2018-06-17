import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const DEFAULT_VALUE = 0;
const DEFAULT_MULTIPLIER_VALUE = {};
const DEFAULT_RESULT = 0;
const DEFAULT_CURRENCY_DATA = [];
const DEFAULT_HISTORY_DATA = [];
const URL = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
export default new Vuex.Store({
  state: {
    value: DEFAULT_VALUE,
    currencyData: DEFAULT_CURRENCY_DATA,
    currencyMultiplierValue: DEFAULT_MULTIPLIER_VALUE,
    result: DEFAULT_RESULT,
    history: DEFAULT_HISTORY_DATA,
    currencySymbol: {
      'USD': '$',
      'UAH': '₴',
      'RUR': '₽',
      'BTC': 'Ƀ',
      'EUR': '€'
    }
  },
  mutations: {
    setValue(state, newValue) {
      state.value = +newValue;
    },
    resetValue(state) {
      state.value = DEFAULT_VALUE;
    },
    setCurrMultValue(state, newValue) {
      state.currencyMultiplierValue = newValue;
    }

  },
  actions: {
    getData() {
      axios.get(URL)
        .then(response => {
          this.state.currencyData = response.data;
        });
    }
  },
  getters: {
    getResult: function (state) {
      return state.value * state.currencyMultiplierValue.value + state.currencySymbol[state.currencyMultiplierValue.currecny];
    }
  }
});
