import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      test: 11,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    testFn(state) {
      state.test++
    }
  },
})

export default store
