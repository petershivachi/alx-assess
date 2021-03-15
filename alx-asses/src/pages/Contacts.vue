<template>
  <q-page class="q-pa-xl">
    <q-list
      separator
      bordered
    >
    <contact
    :key="key"
    :contact="contact"
    id="key" 
    v-for="(contact, key) in contacts"></contact>
    </q-list>
  </q-page>
</template>

<script>
import Contact from 'components/Contacts/Contact.vue';
import { mapGetters } from 'vuex';


export default {
  computed: {
    ...mapGetters('contacts', ['contacts'])
  },
  components: {
    'contact': require('components/Contacts/Contact.vue').default
  }
}
</script>

<style>
</style>
