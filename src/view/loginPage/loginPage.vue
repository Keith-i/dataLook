<template>
  <div>
    <div>数字：{{ count }}</div>
    <div>测试：{{ test }}</div>
    <img src="@/assets/logo.png" />
    <img src="@/assets/img/zhonghang.png" />
    <el-button @click="addCount">增加数字</el-button>
  </div>
  <div>123123456</div>
  <contrastcom />
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore, mapState } from 'vuex'
import contrastcom from '../../components/contrastcom.vue'
export default defineComponent({
  components: {
    contrastcom,
  },
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
      console.log(storeStateFns[fnKey].bind({ $store: store }))
      // const fn = storeStateFns[fnKey].bind({ $store: store })
      // console.log(fn)
      // storeState[fnKey] = computed(fn)
      // storeState[fnKey] = computed(storeStateFns[fnKey])
      storeState[fnKey] = computed(storeStateFns[fnKey].bind({ $store: store }))
    })

    return {
      count,
      addCount,
      ...storeState,
    }
  },
})
</script>
