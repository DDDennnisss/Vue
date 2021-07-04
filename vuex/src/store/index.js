import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 1000
  },
  mutations: {
    increment(state) { //对应上面state对象
      state.counter++;
    },
    decrement(state) { //对应上面state对象
      state.counter--;
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

export default store;