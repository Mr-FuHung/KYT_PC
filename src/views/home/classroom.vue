<template>
  <div class="classroom">
    <div class="classroom_header">
      <!-- title -->
      <headline chinese="健康小课堂" english="Health class">
        <template #img>
          <img
            src="@/assets/images/2.png"
            style="height: 0.18rem; weight: 0.15rem"
          />
        </template>
      </headline>
      <span class="more" @click="$router.push({name:'health'})">了解更多 +</span>
    </div>
    <!-- 列表 -->
    <div class="classroom_content">
        <card/>
    </div>
  </div>
</template>

<script>
export default {
  name: "classroom",
  data() {
    return {
      activeIndex: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.classroom {
  margin: 0 auto;
  max-width: 12rem;
  padding-bottom: .6rem;
  .classroom_header {
    display: flex;
    justify-content: space-between;
    padding: 0.7rem 0;
    height: 0.6rem;
    .more {
      font-size: 0.14rem;
      font-weight: 400;
      color: #00244b;
      cursor: pointer;
    }
  }
}
</style>