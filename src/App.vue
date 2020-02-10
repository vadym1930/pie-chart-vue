<template>
  <div id="app">
    <template v-if="id">
      <pie-chart :chartId="id"></pie-chart>
    </template>
  </div>
</template>

<script>
import PieChart from "./components/PieChart/PieChart.vue";

export default {
  name: "app",
  components: {
    PieChart
  },
  data() {
    return {
      id: ""
    };
  },
  mounted() {
    this.id = window.nodeIdForPieChart;
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
