<template>
  <p>{{ user.first_name }} {{ user.last_name }}</p>
  <p>{{ fullName }}</p>
  <p>{{ admin.first_name }} {{ admin.last_name }}</p>
  <button @click="mudarNome()">Alterar</button>
</template>

<script>
import { reactive, ref, computed, watch } from 'vue';
export default {
  name: 'App',
  components: {
  },
  setup(){
    let user = reactive({
      first_name: 'Matt',
      last_name: 'Alves'
    })
    let admin = ref({
      first_name: 'Admin',
      last_name: 'Master'

    })
    const mudarNome = () => {
      user.first_name = 'Matheus'
      admin.value.last_name = 'Disabled'
    }

    const fullName = computed(() => `${user.first_name} ${user.last_name}`)
    watch(user, () => console.log('User alterado!'))

    return {
      mudarNome,
      user,
      admin,
      fullName
    }
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
