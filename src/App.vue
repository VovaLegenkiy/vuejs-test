<template>
  <div id="app">
    <convert-history></convert-history>
    <router-view/>
  </div>
</template>

<script>
  import ConvertHistory from "./components/ConvertHistory/ConvertHistory";

  export default {
    name: 'App',
    components: {ConvertHistory}
  }
</script>

<style>
  .btn{
    text-decoration: none;
    color: black;
    border: 1px solid black;
    padding: 1px 6px;
    margin: 10px;
    display: inline-block;
    background-color: buttonface;
  }
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
