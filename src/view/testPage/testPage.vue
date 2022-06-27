<template>
    <div>{{ num }}</div>
  <el-button @click="addNum">111</el-button>
</template>

<script setup>
import { ref } from 'vue'

// num函数递增
let num = ref(0)
let addNum = () => {
    num.value++
}

</script>

<style>

</style>