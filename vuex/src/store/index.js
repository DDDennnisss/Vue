import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 1000,
    student: [
      { id: 100, name: "mike", age: 10 },
      { id: 101, name: "jack", age: 15 },
      { id: 102, name: "dennis", age: 30 },
      { id: 103, name: "jessica", age: 21 }
    ]
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
    more20stu() {
      return state.student.filter(ele => ele.age > 20);
    },
    moreAgeStu(state) {
      return function (num) {
        return state.student.filter(ele => ele.age > num);
      }
    }
  },
  modules: {

  }
})

export default store;