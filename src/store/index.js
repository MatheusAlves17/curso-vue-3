import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jon@snow.com'
    },
    products:[
      {
        id: 1,
        nome: 'Caneta',
        preco: '1.80'
      },
      {
        id: 2,
        nome: 'Mochila',
        preco: '80'
      },
      {
        id: 3,
        nome: 'Caderno',
        preco: '10.20'
      },
    ],
    cart:[]
  },
  getters: {
  },
  mutations: {
    updateUser(state, data){
      state.user = data
    },
    addCart(state, data){
      state.cart.push(data)
    },
    removeCart(state, id){
      let idx = state.cart.findIndex(o => o.id === id)
      state.cart.splice(idx,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
