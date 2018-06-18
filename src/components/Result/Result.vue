<template>
  <div>
    <p>Result</p>
    <p>{{result}}{{currentSymbol}}</p>
    <router-link to="/" tag="button">Home</router-link>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Result',
    computed: {
      ...mapState([
        'currentSymbol',
        'result'
      ])
    },
    methods: {
      ...mapActions([
        'addToHistory',
      ])
    },
    created () {
      this.addToHistory();
    }
  };
</script>

<style scoped>

</style>
