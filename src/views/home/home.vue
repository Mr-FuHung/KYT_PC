<template>
  <div>
    <!-- 了解我们 -->
    <about-us class="bgw" />
    <!-- 健康小课堂 -->
    <div style="background: #fafafa">
      <classroom />
    </div>
  </div>
</template>

<script>
import aboutUs from "./aboutUs.vue";
import classroom from "./classroom.vue";
export default {
  components: {
    aboutUs,
    classroom,
  },
};
</script>

<style>
.bgw {
  margin: 0 auto;
  max-width: 12rem;
}
</style>