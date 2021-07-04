<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <hello-world :counter = "counter" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  methods:{
    addition(){
      this.$store.commit('increment')
    },
    substraction(){
      this.$store.commit('decrement')
    }
  },
  components:{
    HelloWorld
  }
}
</script>

<style>

</style>
