<template>
  <el-container class="container">
    <el-header height="auto">
      <page-header />
    </el-header>
    <el-main>
      <page-main />
    </el-main>
    <page-footer />
  </el-container>
</template>

<script>
import pageFooter from "./pageFooter.vue";
import pageHeader from "./pageHeader.vue";
import pageMain from "./pageMain.vue";
export default {
  name: "home",
  components: {
    pageFooter,
    pageHeader,
    pageMain,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" >
.container {
  position: relative;
  height: 100vh;
  .el-main {
    background-color: #eef0f3;
    padding: 0;
  }

  .el-header {
    padding: 0;
    text-align: center;
  }
}
</style>