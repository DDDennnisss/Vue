export default {
  updateInfo(context) {
    setTimeout(() => {
      context.commit('updateInfo')
    }, 1000)
  }
}