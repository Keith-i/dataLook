<template>
  <div>{{ num }}</div>
  <el-button @click="addNum">111</el-button>
  <el-button type="primary">random</el-button>
  <transition-group class="wraps" tag="div">
    <div v-for="e in list" :key="e.id" class="items">{{ e.number }}</div>
  </transition-group>
  <input v-model="reaData.name" placeholder="name" />
  <input v-model="reaData.age" placeholder="age" />
  {{ name }} {{ age }}
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue'

// num函数递增
let num = ref(0)
let addNum = () => {
  num.value++
}

let list = ref(Array.apply(null, { length: 81 }).map((_, index) => {
  return {
    id: index,
    number: (index % 9) + 1,
  }
}))
console.log(list.value)

// 测试reactive
let reaData = reactive({
    name: 1,
    age: 18
})
let { name, age } = toRefs(reaData)
</script>

<style lang="scss" scoped>
.wraps {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 9);
    .items {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
}
</style>
