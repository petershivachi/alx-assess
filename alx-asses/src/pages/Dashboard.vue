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
          <q-card-section>
            <q-linear-progress
              :value="progress"
              color="secondary"
              class="q-mt-sm"
            />
          </q-card-section>
          <q-card-section>
            <p class="text-weight-medium">23 December, Sunday</p>
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
              <apexchart
                type="radialBar"
                height="300"
                :options="chartOptions"
                :series="series"
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

Vue.component("IEcharts", IEcharts);
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

export default {
  data() {
    return {
      date: "2019/02/01",
      progress: 0.75,
      series: [60],
      chartOptions: {
        chart: {
          toolbar: {
            show: false
          }
        },
        title: {
          text: "",
          align: "left",
          style: {
            color: ""
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "80%",
              background: "#fff",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "green",
              strokeWidth: "67%",
              margin: 0,
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
                formatter: function(val) {
                  return val + "%";
                },
                color: "green",
                fontSize: "36px",
                show: true,
                offsetY: 13
              }
            }
          }
        },
        stroke: {
          lineCap: "round"
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
        dataset: {
          dimensions: ["date", "deals"],
          source: [
            { date: "1 Dec", deals: 20 },
            { date: "8 Dec", deals: 22 },
            { date: "31 Dec", deals: 40 }
          ]
        },
        stroke: {
          curve: "smooth",
        },
        xAxis: {
          type: "category",
          axisLabel: {
            color: this.$q.dark.isActive ? "white" : "#676767"
          }
        },
        yAxis: {
          axisLabel: {
            formatter: function(value, index) {
              return value;
            },
            color: this.$q.dark.isActive ? "white" : "#676767"
          }
        },
        series: [{ type: "line", name: "Share" }]
      };
    }
  },
  methods: {
    randomize() {
      this.progress = Math.random();
    }
  }
};
</script>

<style scoped></style>
