<template>
  <div class="card">
    <div class="img">
      <img src="@/assets/images/1111.png" alt="" />
    </div>
    <div class="card_content">
      <sub>成人益生菌可缓解压力，科普新知进来看！</sub>
      <p class="desc">
        作为人体内巨大的储“菌”库，肠道内的各大菌群于身体健康而言，可谓是牵一发而动全身，一旦有害菌数量剧增，有益菌寡不敌众，肠道功能便会紊乱…
      </p>
      <p class="detail">查看详细 +</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
};
</script>

<style lang="scss" scoped>
.card {
  background: #fff;
  width: 3.8rem;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s linear;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.12);
  }
  .img {
    width: 100%;
    height: 2.7rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.08rem;
    }
  }
  .card_content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.19rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 2rem;
    sub {
      display: block;
      font-size: 0.18rem;
      font-weight: 900;
      color: #000000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .desc {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      height: .65rem;
      color: #666666;
      font-size: 0.14rem;
    }
    .detail {
      text-align: center;
      color: #00244b;
      font-size: 0.14rem;
      margin-bottom: 0.1rem;
    }
  }
}
</style>