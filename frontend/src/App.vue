<template>
  <div>
    <router-link class="link" to="/"> Inscreva-se </router-link>
    <router-link class="link" to="/dashboard"> DashBoard </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .link {
    text-decoration:none; 
    color: red;
    margin-right: 2rem;
  }
</style>
