import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const DEFAULT_VALUE = '';
const DEFAULT_MULTIPLIER_VALUE = {ccy: 'USD', base_ccy: 'UAH', sale: 0};
const DEFAULT_RESULT = 0;
const DEFAULT_CURRENCY_DATA = [];
const DEFAULT_HISTORY_DATA = [];
const URL = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
const CURRENCY_SYMBOLS = {'USD': '$', 'UAH': '₴', 'RUR': '₽', 'BTC': 'Ƀ', 'EUR': '€'};
const DEFAULT_SYMBOL = '$';
export default new Vuex.Store({
  state: {
    value: DEFAULT_VALUE,
    currencyData: DEFAULT_CURRENCY_DATA,
    currencyMultiplierValue: DEFAULT_MULTIPLIER_VALUE,
    result: DEFAULT_RESULT,
    history: DEFAULT_HISTORY_DATA,
    currencySymbols: CURRENCY_SYMBOLS,
    currentSymbol: DEFAULT_SYMBOL
  },
  mutations: {
    setValue (state, newValue) {
      state.value = newValue;
    },
    resetValue (state) {
      state.value = DEFAULT_VALUE;
    },
    setSymbol (state) {
      state.symbol = state.currencySymbols[state.currencyMultiplierValue.ccy];
    },
    setResult (state, payload) {
      state.result = payload.sale * state.value;
    },
    addToHistory (state) {
      const {currencyMultiplierValue, value, result} = state;
      const data = {
        base_ccy: currencyMultiplierValue.base_ccy,
        ccy: currencyMultiplierValue.ccy,
        value,
        result
      };
      state.history.push(data);
    },
    setCurrencyMultiplierValue (state, newValue) {
      state.currencyMultiplierValue = newValue;
    },
    addCurrencyToLocalStorage (state) {
      if (window.localStorage) {
        const key = 'currency';
        localStorage.setItem(key, state.currencyMultiplierValue.ccy);
      }
    },
    addHistoryToLocalStorage (state) {
      if (window.localStorage) {
        const {history} = state;
        const key = 'convertHistory';
        localStorage.setItem(key, JSON.stringify(history));
      }
    }
  },
  actions: {
    getData () {
      axios.get(URL)
        .then(response => {
          this.state.currencyData = response.data;
        });
    },
    setCurrMultValue ({commit}, newValue) {
      commit('setCurrencyMultiplierValue', newValue);
      commit('setResult', newValue);
      commit('addCurrencyToLocalStorage');
    },
    addToHistory ({commit}) {
      commit('addToHistory');
      commit('addHistoryToLocalStorage');
    }
  }
});
