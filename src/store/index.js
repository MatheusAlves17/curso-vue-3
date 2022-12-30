import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jon@snow.com'
    }
  },
  getters: {
  },
  mutations: {
    updateUser(state, data){
      state.user = data
    }
  },
  actions: {
  },
  modules: {
  }
})
