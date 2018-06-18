import Vue from 'vue'
import Router from 'vue-router'
import InputValue from '@/components/InputValue/InputValue'
import CurrencyPair from '@/components/CurrencyPair/CurrencyPair'
import Result from '@/components/Result/Result'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'InputValue',
      component: InputValue
    },
    {
      path: '/сurrency-pair',
      name: 'CurrencyPair',
      component: CurrencyPair
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
