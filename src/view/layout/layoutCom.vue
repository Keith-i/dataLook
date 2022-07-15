<template>
  <div class="outbox">
    <!-- 菜单 -->
    <div class="menubox" :class="!collapse ? 'bigmenu' : 'smmenu'">
      <transition name="silder">
        <Menucom :collapse="collapse" />
      </transition>
    </div>
    <div class="rightbox">
      <div>
        <div class="right-top">
          <el-icon class="icon" size="26px" @click="collapseFn">
            <Fold v-if="collapse" />
            <Expand v-else />
          </el-icon>
        </div>
      </div>
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
import { defineComponent, ref } from 'vue'
import Menucom from './components/menuCom.vue'

export default defineComponent({
  components: {
    Menucom,
  },
  setup() {
    // 是否缩小左侧菜单
    let collapse = ref(false)
    let collapseFn = () => {
      collapse.value = !collapse.value
    }

    return {
      collapse,
      collapseFn,
    }
  },
})
</script>

<style lang="scss" scoped>
.menubox {
  flex-shrink: 0;
  overflow: auto;
  box-sizing: border-box;
  transition: width 0.28s;
}
.bigmenu {
  width: 260px;
}
.smmenu {
  width: 64px;
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
.right-top {
  height: 50px;
}
.icon {
  height: 100%;
  padding: 0 15px;
  line-height: 46px;
}
</style>
