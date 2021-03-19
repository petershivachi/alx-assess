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
                          <q-item-label class="q-pa-sm items-center">
                            George Fields
                          </q-item-label>
                        </q-card-section>
                      </div>
                      <div class="col-2 btn-section">
                        <div class="text-center">
                          <p>Call</p>
                        </div>
                        <div class="text-center">
                          <button class="btn btn-secondary">
                            completed
                          </button>
                        </div>
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
                            <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
                          </q-avatar>
                          <q-item-label class="q-pa-sm">
                            Rebecca Moore
                          </q-item-label>
                        </q-card-section>
                      </div>
                      <div class="col-2 btn-section">
                        <div class="text-center">
                          <p>Call</p>
                        </div>
                        <div class="ended">
                          <div>
                            <q-radio keep-color v-model="color" color="teal" />
                            <q-radio
                              keep-color
                              v-model="color"
                              color="orange"
                            />
                          </div>
                          <div>
                            <q-icon name="mode_edit" />
                            <q-icon name="delete" />
                          </div>
                          <button class="btn btn-danger">
                            Ended
                          </button>
                        </div>
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
                            <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
                          </q-avatar>
                          <q-item-label class="q-pa-sm">
                            Lindsey Stroud
                          </q-item-label>
                        </q-card-section>
                      </div>
                      <div class="col-2 btn-section">
                        <div>
                          <p class="text-center">Event</p>
                        </div>
                        <div class="text-center">
                          <button class="btn btn-secondary">
                            completed
                          </button>
                        </div>
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

            <q-card-section> </q-card-section>
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
              <linear></linear>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  components: {
    linear: require("components/Chats/LinearChat.vue").default
  
  },

  data() {
    return {
      color: "cyan",
      date: "2019/02/01",
      progress: 0.75,
      series: [60]
    };
  },

  methods: {
    randomize() {
      this.progress = Math.random();
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background: #333;
  cursor: pointer;
  display: inline-block;
}

.btn-primary {
  background: #109cf1;
  color: #fff;
}

.btn-secondary {
  background: #26a69a;
  color: #fff;
}

.text-center {
  text-align: center;
}

.btn-danger {
  background: #f7685b;
  color: #fff;
}

.btn-section {
  display: grid;
}

.ended {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
