<template>
<div v-show="history.length">
  <p>Convert History</p>
</div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "ConvertHistory",
    computed:{
      ...mapState([
        'history'
      ])
    }
  }
</script>

<style scoped>

</style>
