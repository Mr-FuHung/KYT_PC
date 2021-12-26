<template>
  <div class="headline">
    <div class="icon">
      <slot name="img" />
    </div>
    <div class="desc">
      <div class="chinese">
        <h4 v-text="chinese"></h4>
        <span class="bg"></span>
      </div>
      <span class="english" v-text="english"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "headline",
  props: ["chinese", "english"],
};
</script>

<style lang="scss" scoped>
.headline {
  position: relative;
  display: flex;
  .icon {
    width: 0.4rem;
    height: 0.4rem;
    margin-right: 0.14rem;
    background: #daf0b1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.08rem;
  }
  .desc {
    position: relative;
    height: 0.4rem;
    width: 1.2rem;
    h4 {
      font-size: 0.24rem;
      font-weight: 600;
      position: absolute;
      left: 0.05rem;
      bottom: 0.1rem;
      white-space: pre;
      z-index: 9;
    }
    .bg {
      position: absolute;
      bottom: 0.08rem;
      left: 0;
      width: 1.03rem;
      height: 0.17rem;
      background: #daf0b1;
      border-radius: 0.5rem;
    }
    .english {
      position: absolute;
      left: 0;
      bottom: -0.18rem;
      white-space: pre;
      z-index: 9;
      font-weight: 500;
      font-size: 0.18rem;
      color: #ccc;
    }
  }
}
</style>