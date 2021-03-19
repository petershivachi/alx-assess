<template>
  <div>
    <apexchart
      width="500"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

export default {
  name: "LinearChat",
  components: {
    apexcharts: VueApexCharts
  },

  data() {
    return {
      options: {
        chart: {
          id: "linear-graph"
        },
        xaxis: {
          categories: ["1 Dec", "8 Dec", "16 Dec", "31 Dec"]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        curve: ['smooth', 'straight', 'stepline'],
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0
      },
      series: [
        {
          name: "series-1",
          data: [50, 160, 60, 150]
        }
      ]
    };
  }
};
</script>

<style></style>
