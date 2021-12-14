<template>
  <el-container class="container">
    <el-header>Header</el-header>
    <el-main>main </el-main>
    <el-footer>
      <foot/>
    </el-footer>
  </el-container>
</template>

<script>
import foot from "./footer.vue";
export default {
  components: {
    foot,
  },
  data() {
    return {
      radio1: "",
    };
  },
};
</script>

<style lang="scss" >
.container {
  position: relative;
  height: 100vh;
  .el-main {
    background-color: #eef0f3;
  }
}

.el-header,
.el-footer {
  text-align: center;
  line-height: 60px;
}
</style>