<template>
  <div id="app">
    <router-view></router-view>
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'application',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
