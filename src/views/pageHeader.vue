<template>
  <div class="header">
    <img src="@/assets/images/kyt.png" class="logo" alt="康益堂" />
    <div class="nav">
      <router-link
        :to="item.path"
        v-for="item of pathList"
        :key="item.path"
        style="position: relative"
      >
        <el-link :underline="false">{{ item.title }}</el-link>
        <span class="line"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageHeader",
  data() {
    return {
      pathList: [
        {
          title: "首页",
          path: "/index",
        },
        {
          title: "关于我们",
          path: "/about",
        },
        {
          title: "产品服务",
          path: "/serve",
        },
        {
          title: "加入我们",
          path: "/join",
        },
        {
          title: "联系我们",
          path: "/contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
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
  .routerActive .line {
    display: block;
  }
  .line {
    position: absolute;
    width: 0.3rem;
    border-bottom: #000 3px solid;
    top: 0.6rem;
    left: 50%;
    transform: translateX(-50%);
    display: none;
  }
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    & > a {
      font-weight: 900;
      margin-left: 0.7rem;
      font-size: 0.16rem;
      a {
        color: #000;
      }
      .el-link--inner {
        font-size: 0.16rem;
      }
    }
  }
}
</style>