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
                  <q-card-section
                    class="grey"
                  >
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Send benefit review by Sunday</div>
                        <div>Due date: <span>December 23, 2018</span></div>
                      </div>
                      <div class="col-2">
                        <q-icon size="62px" name="trending_up" />
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-card>
                  <q-card-section
                    :class="$q.dark.isActive ? 'green_dark' : 'bg-green-8'"
                    class="text-white"
                  >
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">Goals</div>
                        <div class="text-h5">140</div>
                      </div>
                      <div class="col-2">
                        <q-icon size="62px" name="far fa-dot-circle" />
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-card>
                  <q-card-section
                    :class="$q.dark.isActive ? 'orange_dark' : 'bg-orange-9'"
                    class="text-white"
                  >
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h6">% Change</div>
                        <div class="text-h5">
                          <q-icon name="arrow_downward" />
                          2%
                        </div>
                      </div>
                      <div class="col-2">
                        <q-icon size="62px" name="compare_arrows" />
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
                Market Share & Growth
                <q-btn
                  flat
                  dense
                  icon="fas fa-download"
                  class="float-right"
                  @click="SaveImage('line')"
                  :color="!$q.dark.isActive ? 'grey-8' : 'white'"
                >
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
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
                Sales vs Quota
                <q-btn
                  flat
                  dense
                  icon="fas fa-download"
                  class="float-right"
                  @click="SaveImage('gauge')"
                  :color="!$q.dark.isActive ? 'grey-8' : 'white'"
                >
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </div>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <IEcharts
                :option="gaugeOptions"
                ref="gauge"
                :resizable="true"
                style="height:220px"
              />
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
function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}
export default {
  data() {
    return {
      gaugeOptions: {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
          {
            type: "gauge",
            name: "Sale",
            detail: { formatter: "{value}%" },
            data: [{ value: 30 }],
            min: 0,
            radius: "100%",
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [0.35, "#293c55"],
                  [0.65, "#61a0a8"],
                  [1, "#c23731"]
                ],
                width: 20
              }
            }
          }
        ]
      }
    };
  },
  computed: {
    barOptions() {
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
        tooltip: {},
        dataset: {
          dimensions: ["time_period", "sale", "goal"],
          source: [
            { time_period: "Jan 2019", sale: 50, goal: 70 },
            { time_period: "Feb 2019", sale: 80, goal: 75 },
            { time_period: "Mar 2019", sale: 86, goal: 80 },
            { time_period: "Apr 2019", sale: 72, goal: 85 }
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
          // name: 'Goal',
          // nameLocation: 'center',
          // nameGap: 30,
          // nameTextStyle:{
          //     fontWeight: 'bold'
          // }
          axisLabel: {
            color: this.$q.dark.isActive ? "white" : "#676767"
          }
        },
        series: [
          { type: "bar", name: "Sales" },
          { type: "bar", name: "Goals" }
        ]
      };
    },
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
          width: 300,
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
