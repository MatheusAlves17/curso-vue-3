<template>
  <AppProducts/>
  <button @click="updateUser()">Update</button>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppProducts from './components/Products/AppProducts.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    AppProducts
},
  methods:{
    updateUser(){
      let newUser = {
        first_name: 'Matt',
        last_name: 'Alves',
        email: 'matt@alves.com'
      }
      this.$store.commit('updateUser', newUser)
    },
    
  },
  created(){
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
