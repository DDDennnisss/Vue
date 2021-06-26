<template>
  <div>
    <h2>我是Home</h2>
    <p>我是Home，哈哈哈哈</p>

    <router-link to="/home/news">News</router-link>
    <router-link to="/home/messages">Messages</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Home',
  activated(){
    
  },
  deactivated(){

  }, 
  beforeRouteLeave(){
    
  }
}
</script>

<style>

</style>