<template>
  <label>
    <input type="radio" name="pair" :value.number="currencyMultiplierValue"
           @input="setCurrMultValue({currecny:curr.ccy,value:curr.sale})">{{curr.ccy}}
    to
    {{curr.base_ccy}}
  </label>
</template>
<script>
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: 'PairInput',
    props: ['curr', 'index'],
    computed: {
      ...mapState([
        'currencyMultiplierValue'
      ])
    },
    methods: {
      ...mapMutations([
        'setCurrMultValue'
      ])
    }
  };

</script>
<style scoped>

</style>
