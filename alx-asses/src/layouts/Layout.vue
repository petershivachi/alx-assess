<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Saas Kit
        </q-item-label>
       <q-item
       to="/dashboard"
    clickable>
    <q-item-section
      avatar >
      <q-icon name="dashboard" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Dashboard </q-item-label>
    </q-item-section>
  </q-item>
    <q-item
       to="/tasks"
    clickable>
    <q-item-section
      avatar >
      <q-icon name="splitscreen" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Tasks </q-item-label>
    </q-item-section>
  </q-item>
    <q-item
       to="/email"
    clickable>
    <q-item-section
      avatar >
      <q-icon name="mail_outline" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Email </q-item-label>
    </q-item-section>
  </q-item>
    <q-item
       to="/contacts"
    clickable>
    <q-item-section
      avatar >
      <q-icon name="perm_identity" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Contacts </q-item-label>
    </q-item-section>
  </q-item>
    <q-item
       to="/chat"
    clickable>
    <q-item-section
      avatar >
      <q-icon name="chat_bubble_outline" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Chart </q-item-label>
    </q-item-section>
  </q-item>
    <q-item
       to="/deals"
    clickable>
    <q-item-section
      avatar >
      <q-icon name="view_week" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Deals </q-item-label>
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
  name: 'MainLayout',
  
  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>
