<template>
  <div class="healthClass">
    <div class="healthClass_head">
      <headline chinese="健康小课堂" english="Health class">
        <template #img>
          <img
            src="@/assets/images/2.png"
            style="height: 0.18rem; weight: 0.15rem"
          />
        </template>
      </headline>
    </div>
    <!-- 列表 -->
    <ul>
      <li>
        <card />
        <card />
        <card />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "healthClass",
};
</script>

<style lang="scss" scoped>
.healthClass {
  padding-bottom: 1rem;
  background: #FAFAFA;
  .healthClass_head {
    display: flex;
    justify-content: center;
    padding: 0.7rem 0;
    height: 0.6rem;
  }
  ul {
    margin: 0 auto;
    max-width: 12rem;
    li {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>