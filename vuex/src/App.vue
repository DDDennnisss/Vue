<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <hello-world :counter = "counter" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  data(){
    return {
      message:'我是App组件',
      counter: 0
    }
  },
  components:{
    HelloWorld
  }
}
</script>

<style>

</style>
