<template>
  <span class="moreBtn" v-bind="$attrs" v-on="$listeners" v-text="text"></span>
</template>

<script>
export default {
  name: "moreBtn",
  props: {
    text: String,
    // active: {
    //   type: Boolean,
    //   default: false,
    // },
  },
};
</script>

<style lang="scss" scoped>
.moreBtn {
  display: inline-block;
  padding: 0.15rem 0.42rem;
  font-size: 0.14rem;
  color: #00244b;
  border-radius: 0.08rem;
  border: 1px solid #00244b;
  cursor: pointer;
  &:hover {
    background: #00244b;
    color: #fff;
  }
}
</style>