<template>
  <div class="banner">
    <el-carousel
      :indicator-position="Banner.length > 1 ? 'inside' : 'none'"
      style="height: 100%"
      :arrow="Banner.length > 1 ? 'hover' : 'never'"
    >
      <el-carousel-item v-for="item in Banner" :key="item.name">
        <el-image :src="item.img" style="width: 100%; height: 100%" fit="fill">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      Banner: [],
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    async getBanner() {
      let res = await this.$api.getBanner({ type: 1 });
      this.Banner = res.data.map((item) => {
        return {
          img: item.ad_img,
          name: item.ad_name,
        };
      });
    },
  },
};
</script>

<style lang='scss'>
.banner {
  margin: 0 auto;
  height: 4.1rem;
  width: 100%;
  .el-carousel__container {
    height: 100%;
  }
  .el-carousel__indicator--horizontal button {
    width: 0.3rem;
    height: 0.3rem;
    // border: 1px solid #000;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.76);
    &.is-active {
      background: rgba(255, 255, 255, 0.267);
    }
  }
}
</style>