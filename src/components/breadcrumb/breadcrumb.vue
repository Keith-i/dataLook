<template>
  <el-breadcrumb separator="/" class="app-breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <span>123</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    let route = useRoute()

    let levelList = ref(null)
    var a = '123'
    console.log(a)
    // let getBreadcrumb = () => {
    //     console.log()
    // }

    onMounted(() => {
      console.log(route, 111)
    })

    return {
      levelList,
    }
  },
})
</script>

<style lang="scss" scoped>
.app-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
</style>
