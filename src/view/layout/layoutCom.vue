<template>
  <div>
    主体{{ count }}
    <el-button @click="addCount">增加</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 1,
    }
  },
  created() {},
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  methods: {
    addCount() {
      this.$store.commit('increment')
    },
  },
}
</script>

<style lang="scss" scoped></style>
