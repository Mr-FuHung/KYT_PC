<template>
  <div class="aboutUs">
    <div class="aboutUs_header">
      <!-- title -->
      <headline chinese="了解我们" english="Konw us">
        <template #img>
          <img
            src="@/assets/images/1.png"
            style="height: 0.18rem; weight: 0.15rem"
          />
        </template>
      </headline>
      <!-- 新闻/公告/认证 -->
      <div class="btns">
        <div v-for="(item, index) of aboutUsData" :key="item.title">
          <my-button
            :text="item.title"
            :active="index === activeIndex"
            @click="toggle(index)"
          />
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="aboutUs_content">
      <date-view date="2021-11-21" active />
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  data() {
    return {
      activeIndex: 0,
      aboutUsData: [
        {
          title: "新闻",
          showImg: "",
          list: [],
        },
        {
          title: "公告",
          showImg: "",
          list: [],
        },
        {
          title: "认证",
          showImg: "",
          list: [],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    toggle(index) {
      this.activeIndex = index; //切换样式
    },
  },
};
</script>

<style lang="scss" scoped>
.aboutUs_header {
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 0;
  height: 0.6rem;
  .btns {
    display: flex;
    & > div {
      padding: 0 0.2rem;
      border-right: 2px solid #000;
      height: 0.2rem;
      margin-top: 0.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &:last-of-type {
        border: none;
      }
    }
  }
}
</style>