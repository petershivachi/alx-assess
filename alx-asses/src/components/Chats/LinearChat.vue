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
          id: "linear-graph",
          height: 350,
          stacked: true
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        colors: ["#008FFB"],
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "left"
        },
        tooltip: {
          enabled: false
        },
        xaxis: {
          categories: ["1 Dec", "8 Dec", "16 Dec", "31 Dec"]
        }
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
