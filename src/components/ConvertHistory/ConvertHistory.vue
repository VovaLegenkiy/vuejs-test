<template>
  <div v-show="history.length">
    <p>Convert History</p>
    <div class="table-wrapper">
      <table class="history-table">
        <thead>
        <tr class="row">
          <th class="table-head">Value</th>
          <th class="table-head">From</th>
          <th class="table-head">To</th>
          <th class="table-head">Result</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in history" class="row">
          <td class="row-cell">{{item.value}}</td>
          <td class="row-cell">{{item.ccy}}</td>
          <td class="row-cell">{{item.base_ccy}}</td>
          <td class="row-cell">{{item.result}}{{item.currentSymbol}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'ConvertHistory',
    computed: {
      ...mapState([
        'history'
      ])
    }
  };
</script>

<style scoped>
  .table-wrapper {
    max-height: 200px;
    overflow-x: auto;
  }

  .history-table {
    border-collapse: collapse;
  }

  .row-cell,
  .table-head {
    border: 1px solid black;
    padding: 2px 5px;
  }
</style>
