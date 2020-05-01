<template>
</template>

<script>
    export default {
        name: "Authentication",
      methods:{
          signInWithUserNameAndPassword(username,password){
            console.log(username+password);
            return true;
          }
        signOut(){
          console.log('Sign out');
          return true;
        }
      }
    }
</script>

<style scoped>

</style>
