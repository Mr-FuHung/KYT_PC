<script>
export default {
  name: "err404",
  data() {
    return {};
  }
};
</script>
<template>
  <div class="ant-row rowStyle" style="margin-left: -8px; margin-right: -8px;">
    <div class="ant-col-14" style="padding-left: 8px; padding-right: 8px;">
      <img width="100%" src="@/assets/images/404.svg" alt="none" />
    </div>
    <div class="ant-col-10" style="padding-left: 8px; padding-right: 8px;">
      <div class="statusStyle">404</div>
      <div class="smallStyle">抱歉，你访问的页面不存在</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ant-row {
  position: relative;
  height: auto;
  margin-right: 0;
  margin-left: 0;
  zoom: 1;
  display: block;
  box-sizing: border-box;
  .ant-col-14 {
    display: block;
    box-sizing: border-box;
    width: 58.33333333%;
    flex: 0 0 auto;
    float: left;
    position: relative;
    min-height: 1px;
  }
  .ant-col-10 {
    display: block;
    box-sizing: border-box;
    width: 41.66666667%;
    flex: 0 0 auto;
    float: left;
    position: relative;
    min-height: 1px;
  }
}
.rowStyle {
  align-items: center;
  display: flex;
  padding: 10%;
}
.statusStyle {
  margin-bottom: 16px;
  color: #434e59;
  font-weight: 600;
  font-size: 30px;
}
.smallStyle {
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
}
@media screen and (min-width: 1024px) {
  .statusStyle {
    font-size: 70px;
  }
  .smallStyle {
    font-size: 20px;
  }
}
</style>