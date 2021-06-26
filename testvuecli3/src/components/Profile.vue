<template>
  <div>
    <h2>Profile page</h2>
    <p>Profile,Hello</p>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {
  name:'User'
}
</script>

<style>

</style>