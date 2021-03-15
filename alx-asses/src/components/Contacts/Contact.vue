<template>
   <q-item
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
</template>

<script>
export default {
  props: ['contact', 'id']
  
}
</script>

<style scoped>

</style>