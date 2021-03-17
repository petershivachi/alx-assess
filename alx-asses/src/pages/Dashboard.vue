<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <q-card flat bordered class="">
          <q-card-section>
            <div class="text-h6">
              8 tasks completed out of 10
            </div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section class="bg-grey-2">
            <div class="col q-col-gutter-sm q-ma-xs q-mr-sm">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-card>
                  <q-card-section class="grey">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Send benefit review by Sunday</div>
                        <div>Due date: <span>December 23, 2018</span></div>
                        <q-card-section class="flex">
                          <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar6.jpg" />
                          </q-avatar>
                          <q-item-label class="text-center">
                            George Fields
                          </q-item-label>
                        </q-card-section>
                      </div>
                      <div class="col-2">
                        <p>Reminder</p>
                        <q-btn
                          class="bottom"
                          color="secondary"
                          label="Secondary"
                        />
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-card>
                  <q-card-section class="grey">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Invite to office meet-up</div>
                        <div>Due date: <span>December 23, 2018</span></div>
                        <q-card-section class="flex">
                          <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar6.jpg" />
                          </q-avatar>
                          <q-item-label class="text-center">
                            George Fields
                          </q-item-label>
                        </q-card-section>
                      </div>
                      <div class="col-2">
                        <p>Call</p>
                        <q-btn
                          class="bottom"
                          color="secondary"
                          label="Secondary"
                        />
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-card>
                  <q-card-section class="grey">
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Office meet-up</div>
                        <div>Due date: <span>December 23, 2018</span></div>
                        <q-card-section class="flex">
                          <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar6.jpg" />
                          </q-avatar>
                          <q-item-label class="text-center">
                            George Fields
                          </q-item-label>
                        </q-card-section>
                      </div>
                      <div class="col-2">
                        <p>Event</p>
                        <q-btn class="bottom" color="secondary"
                          >completed</q-btn
                        >
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col q-col-gutter-sm q-ma-xs q-mr-sm">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <q-card flat bordered class="">
            <q-card-section class="row">
              <div class="text-h6 col-12">
                Deals
              </div>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <IEcharts
                ref="line"
                :option="lineChartOption"
                :resizable="true"
                style="height:220px"
              />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <q-card flat bordered class="">
            <q-card-section class="row">
              <div class="text-h6 col-12">
                Tasks
              </div>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <apexchart type="radialBar" height="300" :options="chartOptions" :series="series" />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Vue from "vue";
import IEcharts from "vue-echarts-v3/src/full.js";
import { exportFile } from "quasar";
Vue.component("IEcharts", IEcharts);
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts);
 
Vue.component('apexchart', VueApexCharts);

export default {
  data() {
    return {
      series: [60],
      chartOptions: {
        chart: {
          toolbar: {
            show: true
          }
        },
        title: {
          text: 'Radial Bar',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '80%',
              background: '#fff',
             
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: 'green',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                formatter: function (val) {
                  return val + '%'
                },
                color: 'green',
                fontSize: '36px',
                show: true,
                // offsetY: 13
              }
            }
          }
        },
        fill: {
          gradient: {
            shade: 'light',
            type: 'horizontal',
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        }
      }
    };
  },
  computed: {
    lineChartOption() {
      return {
        grid: {
          bottom: "20%",
          left: "15%",
          top: "3%"
        },
        legend: {
          bottom: 0,
          textStyle: {
            color: this.$q.dark.isActive ? "white" : "#676767"
          }
        },
        tooltip: {
          // formatter:
          //     function (param) {
          //     console.log(param)
          //     // return param.seriesName + '<br />' + param.name + ': ';
          // }
        },
        dataset: {
          dimensions: ["product_name", "share", "growth"],
          source: [
            { product_name: "Product A", share: 20, growth: 25 },
            { product_name: "Product B", share: 22, growth: 18 },
            { product_name: "Product C", share: 40, growth: 45 }
          ]
        },
        xAxis: {
          type: "category",
          // axisLabel: {
          //     rotate: 45
          // }
          axisLabel: {
            color: this.$q.dark.isActive ? "white" : "#676767"
          }
        },
        yAxis: {
          axisLabel: {
            formatter: function(value, index) {
              return value + " %";
            },
            color: this.$q.dark.isActive ? "white" : "#676767"
          }
        },
        series: [
          { type: "line", name: "Share" },
          { type: "line", name: "Growth" }
        ]
      };
    },
    pieOptions() {
      return {
        tooltip: {
          show: true
        },
        legend: {
          orient: "horizontal",
          bottom: 0,
          width: 30,
          textStyle: {
            color: this.$q.dark.isActive ? "white" : "#676767"
          }
        },
        series: [
          {
            name: "Competitor",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inner",
                formatter: function(param, index) {
                  return param.value + " %";
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            selectedMode: "single",
            data: [
              { value: 40, name: "Product 1", selected: true },
              { value: 20, name: "Competitor 1", selected: false },
              { value: 15, name: "Competitor 2", selected: false },
              { value: 25, name: "Competitor 3", selected: false }
            ]
          }
        ]
      };
    }
  },
  methods: {
    SaveImage(type) {
      const linkSource = this.$refs[type].getDataURL();
      const downloadLink = document.createElement("a");
      document.body.appendChild(downloadLink);
      downloadLink.href = linkSource;
      downloadLink.target = "_self";
      downloadLink.download = type + ".png";
      downloadLink.click();
    },
    exportTable() {
      // naive encoding to csv format
      const content = [this.columns.map(col => wrapCsvValue(col.label))]
        .concat(
          this.data.map(row =>
            this.columns
              .map(col =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");
      const status = exportFile("activity.csv", content, "text/csv");
      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning"
        });
      }
    }
  }
};
</script>

<style scoped></style>
