import axios from 'axios';

//way 1
// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }

//way 2
// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config.baseConfig).then(res => {
//     config.success(res)
//   }).catch(err => {
//     config.failure(err)
//   })
// }

//way 3
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

//way 4
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  return instance(config)
}