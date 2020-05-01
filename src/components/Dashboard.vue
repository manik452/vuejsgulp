<template>
    <div>
      Dashboard Component
      <br>
      {{$store.state}}
      <button class="btn btn-primary btn-sm" @click="signOut">Signout</button>
    </div>
</template>

<script>

    import Authentication from "./Authentication";

    export default {
        name: "Dashboard",
      methods:{
          signOut(){
            this.$store.dispatch('signOut')
            Authentication.methods.signOut()
          }
      }
    }
</script>


