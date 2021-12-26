<template>
  <div
    class="dateView"
    :class="{ active: active }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <p class="dayBox">
      <span class="num">{{ day }}</span>
      <span class="day">日</span>
    </p>
    <span class="month">{{ month }}月</span>
  </div>
</template>

<script>
export default {
  name: "dateView",
  props: {
    date: {
      type: String,
      default: "2021-11-24",
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      month: "",
      day: "",
    };
  },
  watch: {
    date: {
      handler(newval) {
        this.month = newval.substr(-5, 2);
        this.day = newval.substr(-2, 2);
      },
      immediate: true
    },
  },
};
</script>

<style lang="scss" scoped>
.dateView {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  &.active {
    .dayBox {
      background: #00244b;
      color: #fff;
    }
  }
  .dayBox {
    margin-bottom: 0.1rem;
    color: #00244b;
    width: .4rem;
    border-radius: 0.08rem;
    border: 2px #00244b solid;
    background: #fff;
    padding: 0.08rem 0.02rem 0.08rem 0.04rem;
    .num {
      font-size: 0.2rem;
    }
    .day {
      font-size: 0.14rem;
    }
  }
  .month {
    font-size: 0.14rem;
    color: #00244b;
  }
}
</style>