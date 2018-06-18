import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const DEFAULT_VALUE = 0
const DEFAULT_MULTIPLIER_VALUE = {from: 'USD', to: 'UAH', value: 0}
const DEFAULT_RESULT = 0
const DEFAULT_CURRENCY_DATA = []
const DEFAULT_HISTORY_DATA = []
const URL = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
const CURRENCY_SYMBOLS = {'USD': '$', 'UAH': '₴', 'RUR': '₽', 'BTC': 'Ƀ', 'EUR': '€'}
export default new Vuex.Store({
  state: {
    value: DEFAULT_VALUE,
    currencyData: DEFAULT_CURRENCY_DATA,
    currencyMultiplierValue: DEFAULT_MULTIPLIER_VALUE,
    result: DEFAULT_RESULT,
    history: DEFAULT_HISTORY_DATA,
    currencySymbols: CURRENCY_SYMBOLS
  },
  mutations: {
    setValue (state, newValue) {
      state.value = +newValue
    },
    resetValue (state) {
      state.value = DEFAULT_VALUE
    },
    setResult (state, payload) {
      state.result = payload.sale * state.value
    },
    addToHistory (state, newValue) {
      const {currencyMultiplierValue, value, result} = state
      const data = {
        base_ccy: currencyMultiplierValue.from,
        ccy: currencyMultiplierValue.to,
        value,
        result
      }
      state.history.push(data)
    },
    setCurrencyMultiplierValue (state, newValue) {
      state.currencyMultiplierValue = newValue
    }
  },
  actions: {
    getData () {
      axios.get(URL)
        .then(response => {
          this.state.currencyData = response.data
        })
    },
    setCurrMultValue ({commit}, newValue) {
      commit('setCurrencyMultiplierValue', newValue)
      commit('setResult', newValue)
    },
    addToHistory ({commit}) {
      commit('addToHistory')
    }
  },
  getters: {
    getResult: function (state) {
      const {currencySymbols, currencyMultiplierValue} = state
      const multCurrency = currencyMultiplierValue.to
      const symbolValue = currencySymbols[multCurrency]
      return state.result + '' + symbolValue
    }
  }
})
