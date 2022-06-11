<template>
  <div class="outbox">
    <div class="menubox">
      <Menucom />
    </div>
    <div class="rightbox">
      <div class="cc">
        <span v-for="i in 100" :key="i">测试</span>
      </div>
      <div>123123</div>
    </div>
  </div>
  <!-- <div>
    <el-container>
      <el-aside width="260px">
        <Menucom />
      </el-aside>
      <el-main>
        <div class="cc">
          <span v-for="i in 100" :key="i">测试</span>
        </div>
        <div>123123</div>
      </el-main>
    </el-container>
  </div> -->
</template>

<script>
import { defineComponent } from 'vue'
import Menucom from './components/menuCom.vue'

export default defineComponent({
  components: {
    Menucom,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.menubox {
  flex-shrink: 0;
  width: 260px;
  overflow: auto;
  box-sizing: border-box;
}
.cc {
  width: 1500px;
  color: $test;
}

.outbox {
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
.rightbox {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
}
</style>
