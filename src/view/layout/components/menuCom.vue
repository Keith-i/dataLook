<template>
  <div>
    <el-menu default-active="1" class="menubox">
      <el-sub-menu index="1" v-for="i in 2" :key="i">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
})
</script>

<style lang="scss" scoped>
.menubox {
  height: 100vh;
  overflow-y: scroll;
}
</style>
