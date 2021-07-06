<template>
  <div id="app">
    <h2>{{$store.state}}</h2>
    <h2>{{$store.state.a}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="updateInfo">Switch</button>
    <hello-world :counter = "counter" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import {INCREMENT} from './store/mutations-types'

export default {
  name: 'App',
  methods:{
    addition(){
      this.$store.commit(INCREMENT)
    },
    substraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      this.$store.commit('incrementCount',count)
    },
    updateInfo(){
      this.$store.dispatch('updateInfo')
    }
  },
  components:{
    HelloWorld
  }
}
</script>

<style>

</style>
