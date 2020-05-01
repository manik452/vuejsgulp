<template>
  <div class="form-inline">
    <h3>Sign in</h3>
    <div class="form-group">
      <input type="text" class="form-control" v-model="email" placeholder="Email"/>
      <input type="password" class="form-control" v-model="password" placeholder="*****"/>
      <button class="btn btn-primary" @click="signIn"> Sign In</button>
    </div>
    <p>{{error.message}}</p>
  </div>
</template>

<script>
  import Authentication from "./Authentication";

  export default {
    name: "Signin",
    data() {
      return {
        email: '',
        password: '',
        error:{
          message:''
        }
      }
    },
    methods:{
      signIn(){
        Authentication.methods.signInWithUserNameAndPassword(this.email,this.password)
      }

    }
  }
</script>

<style scoped>

</style>
