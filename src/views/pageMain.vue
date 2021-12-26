<template>
  <div class="main">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "pageMain",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style>
.main {
  /* margin: 0 auto;
  max-width: 12rem; */
}
</style>