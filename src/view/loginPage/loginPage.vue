<template>
  <div>
    <div>数字11{{ count }}</div>
    <div>测试22{{ test }}</div>
    <el-button @click="addCount">增加数字</el-button>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore, mapState } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    const addCount = () => {
      store.commit('increment')
      store.commit('testFn')
    }

    const storeStateFns = mapState(['count', 'test'])
    const storeState = {}

    Object.keys(storeStateFns).forEach((fnKey) => {
      console.log(storeStateFns[fnKey], 1)
      console.log(storeStateFns[fnKey].bind({$store: store}))
      // const fn = storeStateFns[fnKey].bind({ $store: store })
      // console.log(fn)
      // storeState[fnKey] = computed(fn)
      // storeState[fnKey] = computed(storeStateFns[fnKey])
      storeState[fnKey] = computed(storeStateFns[fnKey].bind({$store: store}))
    })

    return {
      count,
      addCount,
      ...storeState
    }
  },
})
</script>
