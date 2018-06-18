<template>
  <div class="hello">
    <form>
      <input type="text" :value.number="value" placeholder="set your value" @input="setValue($event.target.value)">
      <router-link to="/сurrency-pair" tag="button">Convert</router-link>
      <button @click="resetValue">Reset</button>
    </form>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

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
