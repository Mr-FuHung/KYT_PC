<template>
  <div class="header">
    <img src="@/assets/images/kyt.png" class="logo" alt="康益堂" />
    <div class="nav">
      <span>首页</span>
      <span>关于我们</span>
      <span>产品服务</span>
      <span>加入我们</span>
      <span>联系我们</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageHeader",
  data() {
    return {
      activeIndex: "1",
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 12rem;
  .logo {
    width: 2.15rem;
    height: 0.7rem;
    margin: 0.15rem 0;
  }
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 0.16rem;
      color: #000;
      font-weight: 600;
      margin-left: .7rem;
    }
  }
}
</style>