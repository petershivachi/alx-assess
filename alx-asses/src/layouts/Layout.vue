<template>
  <q-layout view="lHh lpR fFf">
    <q-header bordered seperator>
      <q-toolbar color="bg-secondary" seperator>
        <div style="max-width: 450px">
          <div>
            <div>
              <q-badge color="white">Model: "{{ search }}"</q-badge>
            </div>
            <q-input v-model="search"  placeholder="Global Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      seperator
      bordered
      :width="256"
      content-class="#f5f6f8">
      <q-list>
        <q-item-label header>Saas Kit</q-item-label>
        <q-item :key="nav.id" v-for="nav in navs" :to="nav.to" clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  data() {
    return {
      leftDrawerOpen: false,
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
