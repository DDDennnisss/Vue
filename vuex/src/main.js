import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


//创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://222.111.33.3.3:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: '1'
//   }
// }).then(res => {
//   console.log(res);
// })

// const instance2 = axios.create({
//   baseURL: 'http://333.123.23.3.1:8000',
//   timeout: 3000
// })

import { request } from "./network/request";

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})