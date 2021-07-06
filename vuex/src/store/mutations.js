import { INCREMENT } from './mutations-types';

export default {
  [INCREMENT](state) { //对应上面state对象
    state.counter++;
  },
  decrement(state) { //对应上面state对象
    state.counter--;
  },
  updateInfo(state) {
    state.student.name = "111111111111111111111";
  }
}