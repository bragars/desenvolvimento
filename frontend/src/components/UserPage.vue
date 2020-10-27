<template>
  <div class="userPage">
    <h3> Deseja receber notificações diárias das taxas do covid no Brasil ? </h3>
    <form @submit.prevent="addNewUser">
      <label>Email</label>
      <input v-model="newUser" placeholder="email" type="email">
      <button @click.prevent="addNewUser">Inscreva-se</button>
      <button @click.prevent="toDashBoard">Pular</button>
    </form>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { createUserEmail } from '@/services/api.js'
  import router from '@/router/router'
 
  export default {
    setup() {
      const newUser = ref('')
      
      function addNewUser() {
        createUserEmail(newUser.value)
      }
      function toDashBoard() {
        router.push({ path: '/dashboard' })
      }
      return {
        newUser,
        addNewUser,
        toDashBoard
      }
    }
  }
</script>

<style scoped>

  div {
    display: grid;
    grid-template-rows: 20% 20% 50%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    width: 100vw;
    vertical-align: center;
  }
  h3 {
    color: white;
  }

  form {
    display: grid;
    grid-template-rows: 48% 48% 45% 45%;
  }

  input {
    margin-top: 0.19rem;
  }

  label {
    border: 2px solid white;
    background: orangered;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    color: white;
    background: red;
    margin-top: 1rem;
  }
  button:hover {
    color: red;
    background: white;
    transition: 0.3s;
    cursor: pointer;
  }
  
</style>
