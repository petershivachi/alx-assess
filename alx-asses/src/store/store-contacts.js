const state = {
  contacts: {
    'ID1': {
      name: 'Lindsey Stroud', 
      email: 'lindseystroud@gmail.com',     company: 'Hatchback', 
      role: 'Manager', 
      forecast: '50%', 
      activity: '5 Minutes ago',
      selected: false 
    },
    'ID2': {
      name: 'Nicci Troiani',
     email: 'nicci.toriani@gmail.com',
     company: 'Slack',
     role: 'Manager',
     forecast: '75 %',
     activity: '14 Minutes ago',
     selected: false
    },
    'ID3': {
      name: 'George fields',
      email: 'george.fields@gmail.com',
      company: 'Clockify',
      role: 'CEO',
      forecast: '10 %',
      activity: '6 Hours ago',
      selected: false
    },
    'ID4': {
      name: 'Rebecca More',
      email: 'rebecca.moore@gmail.com',
      company: 'Upwork',
      role: 'Manager',
      forecast: '25 %',
      activity: 'Dec 14 , 2018',
      selected: false
    },
    'ID5': {
      name: 'Jane Doe',
      email: 'jane.doe@gmail.com',
      company: 'Trello',
      role: 'Engineer',
      forecast: '30 %',
      activity: 'Dec 12, 2018',
      selected: true
    },
    'ID6': {
      name: 'Jones Dermot',
      email: 'dermot.johnes@gmail.com',
      company: 'Slack',
      role: 'Developer',
      forecast: '40 %',
      activity: 'Dec 11, 2018',
      selected: false
    },
    'ID7': {
      email: 'martin.merces@gmail.com',
      company: 'Google',
      role: 'Manager',
      forecast: '60 %',
      activity: 'Dec 9, 2018',
      selected: false
    },
    'ID8': {
      name: 'Franz Ferdinand',
      email: 'franz.ferdinand@gmail.com',
      company: 'Facebook',
      role: 'Manager',
      forecast: '100 %',
      activity: 'Dec 6, 2018',
      selected: false   
    },
    'ID9': {
     name: 'John Smith',
     email: 'john.smith@gmail.com',
     company: 'Skype',
     role: 'CEO',
     forecast: '75 %',
     activity: 'Nov 30, 2018',
     selected: false
    },
    'ID10': {
      name: 'Judith Williams',
      email: 'judith.wiliams@gmail.com',
      company: 'Google',
      role: 'Designer',
      forecast: '45 %',
      activity: 'Nov 26, 2018',
      selected: false
    },
  }
}

const mutations = {
  updateContact(state, payload){
    console.log('payload (from mutation):', payload);
    Object.assign(state.contacts[payload.id], payload.updates)
  }
}

const actions = {
  updateContact({ commit }, payload){
    commit('updateContact', payload)
  }
}

const getters = {
 contacts: (state) => {
   return state.contacts
 } 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}