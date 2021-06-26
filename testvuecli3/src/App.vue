<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/about" >About</router-link>
    <router-link :to="'/user/'+userId" >User</router-link>
    <!-- <button @click="homeClick">home</button>
    <button @click="aboutClick">about</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        userId:'Dennis'
      }
    },
    methods:{
      homeClick(){
        this.$router.push('/home')
      },
      aboutClick(){
        this.$router.replace('/about')
      }
    }
  }
</script>

<style>
  .active{
    color: red;
  }
</style>
