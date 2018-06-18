<template>
  <div>
    <p>Currency pair</p>
    <div class="pairs">
      <pair-input v-for="(curr,index) in currencyData" :curr="curr" :key="index" :index="index"></pair-input>
    </div>
    <router-link to="/result" tag="button">Exchange</router-link>
    <router-link to="/" tag="button">Cancel</router-link>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import PairInput from '../PairInput/PairInput';

  export default {
    name: 'CurrencyPair',
    components: {PairInput},
    computed: {
      ...mapState([
        'currencyData'
      ])
    },
    methods: {
      ...mapActions([
        'getData'
      ])
    },
    /*beforeCreate () {
      this.$store.dispatch('getData');
    }*/
  };
</script>

<style scoped>

</style>
