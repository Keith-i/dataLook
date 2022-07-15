<template>
  <el-breadcrumb separator="/" class="app-breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="
            item.redirect === 'noRedirect' || index === levelList.length - 1
          "
          class="no-redirect"
          >{{ item.meta.title }}</span
        >
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    let route = useRoute()
    let router = useRouter()

    let levelList = ref(null)

    // 设置面包屑导航
    let getBreadcrumb = () => {
      let matched = route.matched.filter((item) => item.meta && item.meta.title)
      // const first = matched[0]
      levelList.value = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      )
    }

    // 导航跳转
    let pathCompile = (path) => {
      const { params } = route
      let toPath = params
      console.log(toPath, path)
    }

    // 点击面包屑
    let handleLink = (item) => {
      const { redirect, path } = item
      if (redirect) {
        router.push(redirect)
        return
      }
      pathCompile(path)
    }

    onMounted(() => {
      getBreadcrumb()
    })

    return {
      levelList, // 面包屑数据
      handleLink, // 点击面包屑
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
