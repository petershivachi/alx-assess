<template>
  <q-page class="q-pa-xl">
    <q-list
      separator
      bordered
    >

      <q-item
        v-for="(contact, key) in contacts"
        :key="key"
        :contact="contact"
        id="key"
        @click="contact.completed = !contact.selected"
        :class="!contact.selected ? 'bg-grey-light' : 'bg-blue-1'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox 
          color="light-blue"
          v-model="contact.selected" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{ contact.name }}
          </q-item-label>
        </q-item-section>
        <q-item-section>
              <q-item-label
                caption
              >
                {{ contact.email }}
              </q-item-label>
        </q-item-section>
         <q-item-section>
              <q-item-label
                caption
              >
                {{ contact.company }}
              </q-item-label>
        </q-item-section>
         <q-item-section>
              <q-item-label
                caption
              >
                {{ contact.role }}
              </q-item-label>
        </q-item-section>
         <q-item-section>
              <q-item-label
                caption
              >
                {{ contact.forecast }}
              </q-item-label>
        </q-item-section>
         <q-item-section>
              <q-item-label
                caption
              >
                {{ contact.activity }}
              </q-item-label>
        </q-item-section>
        
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('contacts', ['contacts'])
  }
}
</script>

<style>
</style>
