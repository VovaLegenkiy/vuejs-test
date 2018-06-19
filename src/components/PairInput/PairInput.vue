<template>
  <label>
    <input type="radio" name="pair" :value.number="curr"
           @input="setCurrMultValue(curr)"
           :checked="currencyMultiplierValue.ccy===curr.ccy">
    {{curr.ccy}} to {{curr.base_ccy}}
  </label>
</template>
<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'PairInput',
    props: ['curr', 'index'],
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
