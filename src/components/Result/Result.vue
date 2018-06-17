<template>
  <div>
    <p>Result</p>
    <p>{{getResult()}}</p>
    <router-link to="/" class="btn">Home</router-link>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'Result',
    methods: {
      ...mapGetters([
        'getResult'
      ])
    }
  };
</script>

<style scoped>

</style>
