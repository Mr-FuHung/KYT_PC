<template>
  <span
    class="myButton"
    v-bind="$attrs"
    v-on="$listeners"
    :class="{ active: active }"
    v-text="text"
  ></span>
</template>

<script>
export default {
  name: "myButton",
  props: {
    text: String,
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.myButton {
  display: inline-block;
  padding: 0.09rem 0.22rem;
  font-size: 0.18rem;
  color: #000000;
  cursor: pointer;
  &.active {
    color: #fff;
    background: #00244b;
    border-radius: 0.04rem;
  }
}
</style>