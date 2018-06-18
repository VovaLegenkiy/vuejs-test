<template>
  <div v-show="history.length">
    <p>Convert History</p>
    <p v-for="item in history">
      {{item.value}} {{item.base_ccy}} to {{item.ccy}} = {{item.result}}
    </p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ConvertHistory',
    computed: {
      ...mapState([
        'history'
      ])
    }
  }
</script>

<style scoped>

</style>
