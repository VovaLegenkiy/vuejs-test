<template>
  <label>
    <input type="radio" name="pair" :value.number="currencyMultiplierValue" @input="setCurrMultValue(curr)"
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
      ...mapState([
        'currencyMultiplierValue'
      ])
    },
    methods: {
      ...mapActions([
        'setCurrMultValue'
      ]),
    }
  };

</script>
<style scoped>

</style>
