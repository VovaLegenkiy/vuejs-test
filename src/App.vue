<template>
  <div id="app">
    <router-view/>
    <convert-history></convert-history>
  </div>
</template>

<script>
  import ConvertHistory from './components/ConvertHistory/ConvertHistory';

  export default {
    name: 'App',
    components: {ConvertHistory},
    created () {
      this.$store.dispatch('getData');
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
