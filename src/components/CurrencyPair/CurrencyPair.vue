<template>
  <div>
    <p>Currency pair</p>
    <div class="pairs">
      <pair-input v-for="(curr,index) in currencyData" :curr="curr" :key="index" :index="index"></pair-input>
    </div>
    <router-link to="/result" class="btn">Result</router-link>
    <router-link to="/" class="btn">Home</router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import PairInput from '../PairInput/PairInput';

  export default {
    name: 'CurrencyPair',
    components: {PairInput},
    computed: {
      ...mapState([
        'currencyData'
      ])
    },
    created() {
      this.$store.dispatch('getData');
    }
  };
</script>

<style scoped>

</style>
