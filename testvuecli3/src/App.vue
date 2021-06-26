<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/about" >About</router-link>
    <router-link :to="'/user/'+userId" >User</router-link>
    <router-link :to="{path:'/profile',query:{name:'Dennis',age:25}}">
    Profile</router-link>
    <!-- <button @click="homeClick">home</button>
    <button @click="aboutClick">about</button> -->
    <button @click="userClick">User</button>
    <button @click="profileClick">Profile</button>
    <keep-alive>
      <router-view />
    </keep-alive>
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
      },
      userClick(){
        this.$router.replace('/user/'+this.userId)
      },
      profileClick(){
        this.$router.push({
          path:'/profile',
          query:{
            name:'tianshi',
            age:20
          }
        })
      }
    }
  }
</script>

<style>
  .active{
    color: red;
  }
</style>
