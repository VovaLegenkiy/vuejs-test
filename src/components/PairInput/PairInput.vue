<template>
  <label>
    <input type="radio" name="pair" :value.number="currencyMultiplierValue"
           @input="setCurrMultValue(currencyMultiplierValue)"
           :checked="currencyMultiplierValue.ccy===curr.ccy">
    {{curr.ccy}} to {{curr.base_ccy}}
  </label>
</template>
<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'PairInput',
    props: ['curr', 'index'],
    data: function () {
      return {
        checked: false
      };
    },
    computed: {
      ...mapState({
        currencyMultiplierValue: state => state.currencyMultiplierValue
      })
    },
    methods: {
      ...mapActions([
        'setCurrMultValue'
      ]),
    },
    created () {
      if (this.currencyMultiplierValue.ccy === this.curr.ccy) {
        this.setCurrMultValue(this.currencyMultiplierValue);
      }
    }
  };

</script>
<style scoped>

</style>
