<template>
  <div class="hello">
    <form>
      <input type="text" :value.number="value" placeholder="set your value" @input="setValue($event.target.value)">
      <button @click="resetValue">Reset</button>
    </form>
    <router-link to="/сurrency-pair" class="btn">Convert</router-link>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'InputValue',
    computed: {
      ...mapState({
        value: state => state.value
      })
    },
    methods: {
      ...mapMutations([
        'setValue',
        'resetValue'
      ])
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
