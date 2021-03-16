<template>
  <q-layout view="lHh lpR fFf">
    <q-header bordered seperator class="bg-white text-grey-8" height-hint="64">
      <q-toolbar color="bg-secondary" seperator>
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
              <q-badge color="white">Model: "{{ search }}"</q-badge>
            </div>
            <q-input v-model="search" placeholder="Global Search">
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
      behavior="desktop"
      @click="leftDrawerOpen = false"
      :width="256"
      content-class="#f5f6f8"
    >
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

    <q-page-container class="GPL__page-container">
      <router-view />

      <q-page-sticky
        v-if="$q.screen.gt.sm"
        behaviour="mobile"
        position="top-left"
        :offset="[18, 18]"
        expand
      >
        <div class="fit q-pt-xl q-px-sm column">
          <q-list>
            <q-item-label header>Saas Kit</q-item-label>
            <q-item :key="nav.id" v-for="nav in navs" :to="nav.to" clickable>
              <q-item-section avatar>
                <q-icon :name="nav.icon" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "Layout",

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

<style lang="sass" scoped>
.GPL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 35%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368
    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px
  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500
  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>
