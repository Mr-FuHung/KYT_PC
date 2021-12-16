<template>
  <div class="footer">
    <div class="companyInfo">
      <div class="left">
        <span class="ft24">江苏益康安健有限公司</span>
        <span class="ft16 mtb"
          >地址：北京市海淀区西三环北路甲2号院5号楼6层。</span
        >
        <p>
          <img src="@/assets/images/qq.png" alt="QQ" />
          <img src="@/assets/images/wechat.png" alt="wechat" />
        </p>
      </div>
      <div class="right">
        <span class="ft16">全国服务热线</span>
        <span class="ft24 mtb">400-8989-8982</span>
        <span class="ft16">咨询时间: 9:30-18:30</span>
      </div>
    </div>
    <div class="putOnRecords">
      <span>江苏益康安健有限公司</span>
      <span>版权所有Copyright2001-2019</span>
      <span>© 京ICP备14021542号-1</span>
      <span>京公网安备 11010602006993号</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageFooter",
};
</script>

<style lang="scss">
.footer {
  text-align: center;
  color: #fff;
  .ft16 {
    font-size: 0.16rem;
  }
  .ft24 {
    font-size: 0.24rem;
  }
  .mtb {
    margin: 0.2rem 0;
  }
  .companyInfo {
    background: #f39799;
    display: flex;
    justify-content: center;
    padding: 0.4rem 0 0.6rem 0;
    .left {
      margin-right: 2.5rem;
    }
    .left,
    .right {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
    .left img {
      width: 0.4rem;
      height: 0.4rem;
      margin-right: 0.2rem;
    }
  }
  .putOnRecords {
    background: #e88689;
    display: flex;
    justify-content: center;
    padding: 0.1rem 0;
    line-height: 0.18rem;
    align-items: center;
    span {
      display: inline-block;
      padding: 0 0.15rem;
      border-right: 1px #fff solid;
      &:last-of-type {
        border: none;
      }
    }
  }
}
</style>