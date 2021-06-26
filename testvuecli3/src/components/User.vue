<template>
  <div>
    <h2>User</h2>
    <p>User，哈哈哈哈</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name:'User',
  computed:{
    userId(){
      return this.$route.params.userId
    }
  }
}
</script>

<style>

</style>