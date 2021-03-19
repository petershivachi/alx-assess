<template>
  <div id="chart">
    <apexchart
      type="donut"
      width="380"
      :options="chartOptions"
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
  name: "RadialBar",
  components: {
    apexcharts: VueApexCharts
  },

  data() {
    return {
      series: [60, 25, 15],
      chartOptions: {
        chart: {
          height: 400,
          type: "donut"
        },
        labels: ["Active", "Ended", "Completed"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],
        legend: {
          position: "right",
          offsetY: 0,
          height: 220
        },
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            offsetX: 0,
            offsetY: 0,
            customScale: 1,
            dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10
            },
            donut: {
              size: "80%",
              background: "transparent",
              labels: {
                show: false,
                name: {
                  show: true,
                  fontSize: "22px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                  color: undefined,
                  offsetY: -10,
                  formatter: function(val) {
                    return val;
                  }
                },
                value: {
                  show: true,
                  fontSize: "16px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  color: undefined,
                  offsetY: 16,
                  formatter: function(val) {
                    return val;
                  }
                },
                total: {
                  show: false,
                  showAlways: false,
                  label: "Total",
                  fontSize: "22px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                  color: "#373d3f",
                  formatter: function(w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);
                  }
                }
              }
            }
          }
        }
      }
    };
  }
};
</script>

<style></style>
