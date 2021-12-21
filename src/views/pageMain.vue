<template>
  <div class="main">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "pageMain",
  created() {
    // this.getBanner();
  },
  methods: {
    async getBanner() {
      await this.$api.getBanner({type:1});
    },
  },
};
</script>

<style>
.main {
  margin: 0 auto;
  max-width: 12rem;
}
</style>