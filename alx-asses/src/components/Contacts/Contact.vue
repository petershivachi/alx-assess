<template>
   <q-item
        @click="updateContact({id: id, updates :{ selected: !contact.selected }})"
        :class="!contact.selected ? 'bg-grey-light' : 'bg-blue-1'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox 
          color="light-blue"
          :value="contact.selected"
          class="no-pointer-events" />
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
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['contact', 'id'],
  methods: {
    ...mapActions('contacts', ['updateContact'])
  }
  
}
</script>

<style scoped>

</style>