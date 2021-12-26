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
        <div v-for="(item, key) of aboutUsData" :key="item.title">
          <my-button
            :text="item.title"
            :active="key === activeKey"
            @click="toggle(key)"
          />
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="aboutUs_content">
      <ul>
        <li
          v-for="(item, index) of list"
          @mouseenter="item.hover = true"
          @mouseleave="item.hover = false"
          :key="index"
        >
          <date-view :date="item.create_time" :active="item.hover"></date-view>
          <div class="box">
            <sub>{{ item.title }}</sub>
            <span>
              {{ item.describe }}
            </span>
          </div>
        </li>
        <li v-show="list.length > 0">
          <more-btn text="了解更多 +"></more-btn>
        </li>
      </ul>
      <img
        :src="currentImage"
        style="width: 5.4rem; height: 4.5rem; border-radius: 0.08rem"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  data() {
    return {
      activeKey: "_4",
      aboutUsData: {
        _4: {
          title: "新闻",
          showImg: require("@/assets/images/2222.png"),
          list: [
            {
              title: "调节肠道菌群，保持肠道健康",
              describe:
                "肠道益生菌菌群的数量和多样性对其发挥作用有着重要影响。个体肠道菌群的多样性取决于遗传境、疾病、药物、吸烟和饮食等很多因素。",
              hover: false,
              create_time: "2021-12-17",
              image: "http://kyt.com/uploads/202112171601574e9003278.jpg",
            },
            {
              title: "朵拉倍拉 | 让我们了解下乳酸菌的作用与功效",
              describe:
                "肠道益生菌菌群的数量和多样性对其发挥作用有着重要影响。个体肠道菌群的多样性取决于遗传环境、疾病。",
              hover: false,
              create_time: "2021-12-17",
              image: "http://kyt.com/uploads/202112171601574e9003278.jpg",
            },
            {
              title: "调节肠道菌群，保持肠道健康",
              describe:
                "肠道益生菌菌群的数量和多样性对其发挥作用有着重要影响。个体肠道菌群的多样性取决于遗传境、疾病、药物、吸烟和饮食等很多因素。",
              hover: false,
              create_time: "2021-12-17",
              image: "http://kyt.com/uploads/202112171601574e9003278.jpg",
            },
            {
              title: "朵拉倍拉 | 让我们了解下乳酸菌的作用与功效",
              describe:
                "肠道益生菌菌群的数量和多样性对其发挥作用有着重要影响。个体肠道菌群的多样性取决于遗传环境、疾病。",
              hover: false,
              create_time: "2021-12-17",
              image: "http://kyt.com/uploads/202112171601574e9003278.jpg",
            },
          ],
        },
        _6: {
          title: "公告",
          showImg: "",
          list: [
            {
              title: "调节肠道菌群，保持肠道健康",
              describe:
                "肠道益生菌菌群的数量和多样性对其发挥作用有着重要影响。个体肠道菌群的多样性取决于遗传境、疾病、药物、吸烟和饮食等很多因素。",
              hover: false,
              create_time: "2021-12-17",
              image: "http://kyt.com/uploads/202112171601574e9003278.jpg",
            },
          
          ],
        },
        _2: {
          title: "认证",
          showImg: "",
          list: [
            {
              title: "调节肠道菌群，保持肠道健康",
              describe:
                "肠道益生菌菌群的数量和多样性对其发挥作用有着重要影响。个体肠道菌群的多样性取决于遗传境、疾病、药物、吸烟和饮食等很多因素。",
              hover: false,
              create_time: "2021-12-17",
              image: "http://kyt.com/uploads/202112171601574e9003278.jpg",
            },
            {
              title: "朵拉倍拉 | 让我们了解下乳酸菌的作用与功效",
              describe:
                "肠道益生菌菌群的数量和多样性对其发挥作用有着重要影响。个体肠道菌群的多样性取决于遗传环境、疾病。",
              hover: false,
              create_time: "2021-12-17",
              image: "http://kyt.com/uploads/202112171601574e9003278.jpg",
            },
            {
              title: "调节肠道菌群，保持肠道健康",
              describe:
                "肠道益生菌菌群的数量和多样性对其发挥作用有着重要影响。个体肠道菌群的多样性取决于遗传境、疾病、药物、吸烟和饮食等很多因素。",
              hover: false,
              create_time: "2021-12-17",
              image: "http://kyt.com/uploads/202112171601574e9003278.jpg",
            }
          ],
        },
      },
    };
  },
  computed: {
    list() {
      return this.aboutUsData[this.activeKey].list || [];
    },
    currentImage() {
      return this.aboutUsData[this.activeKey].showImg;
    },
  },
  created() {
    this.getIndexHot(3);
  },
  mounted() {},
  methods: {
    toggle(key) {
      this.activeKey = key; //切换样式
    },
    async getIndexHot(type) {
      await this.$api.getIndexHot({ type });
    },
  },
};
</script>

<style lang="scss" scoped>
.aboutUs {
  padding-bottom: 1rem;
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
  .aboutUs_content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    ul {
      margin-right: 0.6rem;
      li {
        display: flex;
        cursor: pointer;
        margin-bottom: 0.3rem;
        .box {
          margin-left: 0.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          box-sizing: border-box;
          padding-bottom: 0.1rem;
          &:hover {
            sub,
            span {
              color: #00244b;
            }
          }
          sub {
            font-size: 0.18rem;
            font-weight: 500;
            color: #222222;
          }
          span {
            // max-width:5.3rem;
            font-size: 0.12rem;
            font-weight: 500;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>