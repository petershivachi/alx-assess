<template>
  <q-page class="q-pa-lg">
    <header class="flex">
      <div>
        <q-select borderless v-model="model" :options="options" placeholder="Company" label="Company: All" />
      </div>
      <div class="q-mb-xl top-right">
        <q-btn color="primary" label="Add Contact" />
      </div>
    </header>
    <q-list separator bordered>
      <contact
        :key="key"
        :contact="contact"
        :id="key"
        v-for="(contact, key) in contacts"
      ></contact>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("contacts", ["contacts"])
  },
  components: {
    contact: require("components/Contacts/Contact.vue").default
  },
  data () {
    return {
      model: null,
      options: [
        'All', 'Managers', 'CEOs', 'Developers', 'Engineers'
      ],
    }
  }
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
