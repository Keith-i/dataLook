<template>
  <div>
    <div>数字{{ count }}</div>
    <el-button @click="addCount">增加</el-button>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    const addCount = () => {
      store.commit('increment')
    }
    return {
      count,
      addCount,
    }
  },
})
</script>
