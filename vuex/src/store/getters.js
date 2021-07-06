export default {
  more20stu(state) {
    return state.student.filter(ele => ele.age > 20);
  },
  moreAgeStu(state) {
    return function (num) {
      return state.student.filter(ele => ele.age > num);
    }
  },
  incrementCount(state, count) {
    state.counter += count
  }

}