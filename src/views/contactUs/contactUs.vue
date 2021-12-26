<template>
  <div class="contactUs">
    <div class="contactUs_head">
      <headline chinese="联系我们" english="Contact us">
        <template #img>
          <img
            src="@/assets/images/3.png"
            style="height: 0.18rem; weight: 0.15rem"
          />
        </template>
      </headline>
    </div>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "contactUs",
  data() {
    return {
      content:
        '<p><span style="font-family: " monospaced="" chinese="" segoe="" pingfang="" hiragino="" sans="" microsoft="" helvetica="" font-size:="" white-space:="">关于我们77777777777777ddd</span></p>',
    };
  },

  created() {
    this.getSetting("lianxi");
  },
  methods: {
    async getSetting(key) {
      let content = await this.$api.getSetting({ key });
      this.content = content.data.content;
    },
  },
};
</script>

<style lang="scss" scoped>
.contactUs {
  margin: 0 auto;
  max-width: 12rem;
  padding-bottom: 1rem;
  .contactUs_head {
    display: flex;
    justify-content: center;
    padding: 0.7rem 0;
    height: 0.6rem;
  }
}
</style>