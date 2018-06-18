<template>
  <div>
    <p>Result</p>
    <p>{{getResult()}}</p>
    <router-link to="/" tag="button">Home</router-link>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Result',
    methods: {
      ...mapGetters([
        'getResult'
      ]),
      ...mapActions([
        'addToHistory'
      ])
    },
    created () {
      this.addToHistory()
    }
  }
</script>

<style scoped>

</style>
