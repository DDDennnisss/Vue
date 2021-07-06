import Vue from 'vue';
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)
const state = {
  counter: 1000,
  num: 20,
  student: [
    { id: 100, name: "mike", age: 10 },
    { id: 101, name: "jack", age: 15 },
    { id: 102, name: "dennis", age: 30 },
    { id: 103, name: "jessica", age: 21 }
  ]
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA,
  }
})

export default store;