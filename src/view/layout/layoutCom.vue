<template>
  <div>
    <div class="menubox">
      <Menucom />
    </div>
    <div class="rightbox"></div>
  </div>
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
  width: 260px;
}
</style>
