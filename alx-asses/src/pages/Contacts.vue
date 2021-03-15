<template>
  <q-page class="q-pa-xl">
    <q-list
      separator
      bordered
    >

      <q-item
        v-for="contact in contacts"
        :key="contact.id"
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
export default {
  data() {
    return {
      contacts: [
         { 
           id: 1, 
           name: 'Lindsey Stroud', 
           email: 'lindseystroud@gmail.com', company: 'Hatchback', 
           role: 'Manager', 
           forecast: '50%', 
           activity: '5 Minutes ago',
           selected: false 
          },
        {
          id: 2,
          name: 'Nicci Troiani',
          email: 'nicci.toriani@gmail.com',
          company: 'Slack',
          role: 'Manager',
          forecast: '75 %',
          activity: '14 Minutes ago',
          selected: false
        },
        {
          id: 3,
          name: 'George fields',
          email: 'george.fields@gmail.com',
          company: 'Clockify',
          role: 'CEO',
          forecast: '10 %',
          activity: '6 Hours ago',
          selected: false
        },
        {
          id: 4,
          name: 'Rebecca More',
          email: 'rebecca.moore@gmail.com',
          company: 'Upwork',
          role: 'Manager',
          forecast: '25 %',
          activity: 'Dec 14 , 2018',
          selected: false

        },
        {
          id: 5,
          name: 'Jane Doe',
          email: 'jane.doe@gmail.com',
          company: 'Trello',
          role: 'Engineer',
          forecast: '30 %',
          activity: 'Dec 12, 2018',
          selected: true
        },
        {
          id: 6,
          name: 'Jones Dermot',
          email: 'dermot.johnes@gmail.com',
          company: 'Slack',
          role: 'Developer',
          forecast: '40 %',
          activity: 'Dec 11, 2018',
          selected: false
        },
        {
          id: 7,
          name: 'Martin Merces',
          email: 'martin.merces@gmail.com',
          company: 'Google',
          role: 'Manager',
          forecast: '60 %',
          activity: 'Dec 9, 2018',
          selected: false
        },
        {
          id: 8,
          name: 'Franz Ferdinand',
          email: 'franz.ferdinand@gmail.com',
          company: 'Facebook',
          role: 'Manager',
          forecast: '100 %',
          activity: 'Dec 6, 2018',
          selected: false
        },
        {
          id: 9,
          name: 'John Smith',
          email: 'john.smith@gmail.com',
          company: 'Skype',
          role: 'CEO',
          forecast: '75 %',
          activity: 'Nov 30, 2018',
          selected: false
        },
        {
          id: 10,
          name: 'Judith Williams',
          email: 'judith.wiliams@gmail.com',
          company: 'Google',
          role: 'Designer',
          forecast: '45 %',
          activity: 'Nov 26, 2018',
          selected: false
        }
      ]
    }
  }
}
</script>

<style>
</style>
