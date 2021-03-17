<template>
  <div class="q-pa-md">
    <q-layout
      container
      style="height: 800px"
      class="shadow-2 rounded-borders"
      view="hHh lpR fFf"
    >
      <q-header
        bordered
        seperator
        class="bg-white text-grey-8"
      >
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
            class="q-mx-md"
          />
          <div style="max-width: 450px">
            <div>
              <div>
              </div>
              <q-input borderless v-model="search" placeholder="Global Search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
          </div>

          <q-space />

          <div class="q-gutter-sm row items-center no-wrap">
            <q-btn round dense flat color="grey-8" icon="notifications">
              <q-badge color="red" text-color="white" floating>
                2
              </q-badge>
              <q-tooltip>Notifications</q-tooltip>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered

        :mini="!leftDrawerOpen || miniState"
        @click.capture="drawerClick"
        
        :width="256"
        :breakpoint="500"
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit mini-slot cursor-pointer">
          <q-list>
            <q-item
              class="q-py-lg"
              :key="nav.id"
              v-for="nav in navs"
              :to="nav.to"
              clickable
            >
              <q-item-section avatar>
                <q-icon :name="nav.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ nav.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <template v-slot:mini>
          <q-scroll-area class="fit">
            <q-list padding>
              <q-item
                class="q-py-lg"
                :key="nav.id"
                v-for="nav in navs"
                :to="nav.to"
                v-ripple
                clickable
              >
                <q-item-section avatar>
                  <q-icon :name="nav.icon" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </template>

        <div
          class="q-mini-drawer-hide absolute"
          style="top: 15px; right: -17px"
        >
          <q-btn
            dense
            round
            unelevated
            color="accent"
            icon="chevron_left"
            @click="miniState = true"
          />
        </div>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "Layout",
  methods: {
    drawerClick(e) {
      if (this.miniState) {
        this.miniState = false;
        e.stopPropagation();
      }
    }
  },
  data() {
    return {
      leftDrawerOpen: false,
      miniState: true,
      search: "",
      navs: [
        {
          id: 1,
          label: "Dashboard",
          icon: "dashboard",
          to: "/dashboard"
        },
        {
          id: 2,
          label: "Tasks",
          icon: "splitscreen",
          to: "/tasks"
        },
        {
          id: 3,
          label: "Email",
          icon: "mail_outline",
          to: "/email"
        },
        {
          id: 4,
          label: "Contacts",
          icon: "perm_identity",
          to: "/contacts"
        },
        {
          id: 5,
          label: "Chat",
          icon: "chat_bubble_outline",
          to: "/chat"
        },
        {
          id: 6,
          label: "Deals",
          icon: "view_week",
          to: "/deals"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
 .q-drawer {
    .q-router-link--exact-active {
      color: #109cf1 !important;
    }
  }
</style>
