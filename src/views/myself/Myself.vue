<template>
  <div>
    <van-row class="bd-b">
      <h4>我的</h4>
    </van-row>
    <van-row class="item-cell bd-b" @click="onClick">
      <span class="title" @click="onClick">我的信用评分</span>
    </van-row>
    <van-row class="item-cell bd-b">
      <span class="title">物流信息</span>
    </van-row>
    <van-row class="item-cell bd-b">
      <span class="title">联系人管理</span>
    </van-row>
    <van-row class="item-cell bd-b">
      <span class="title">密码设置</span>
    </van-row>
    <van-row class="item-cell bd-b">
      <van-col span="12" class="title">安全模式</van-col>
      <van-col span="12" class="swtich-style">
        <van-switch v-model="checked" size="24px" />
      </van-col>
    </van-row>
    <van-row span="24" class="boxer">
      <!-- 进度条 -->
      <van-circle v-model="currentRate" :rate="testxx" :speed="100" :text="text" size="150px" color="#d34ba8" layer-color="#eee" class="range" />
      <div>今日运势</div>
    </van-row>
    <van-popup v-model="show">
      <div class="popup-style">
        <van-steps :active="active" icon="logistics" title="" description="">
          <van-step>买家下单</van-step>
          <van-step>商家接单</van-step>
          <van-step>买家提货</van-step>
          <van-step></van-step>
          <van-step>交易完成</van-step>
        </van-steps>
        <van-steps direction="vertical" :active="0" active-color="#06bf04">
          <van-step>
            <h3>【常州市】快件已到菜鸟驿站请带好证件来取件</h3>
            <p>2018-06-12 12:40</p>
          </van-step>
          <van-step>
            <h3>【无锡市】已到无锡集散中心正准备发往下一站</h3>
            <p>2016-06-11 10:00</p>
          </van-step>
          <van-step>
            <h3>快件已发货</h3>
            <p>2018-06-10 09:30</p>
          </van-step>
        </van-steps>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      currentRate: 0,
      testxx: 63,
      show: false,
      active: 3
    }
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '分'
    }
  },
  methods: {
    onClick() {
      this.show = true
      console.log('test')
    }
  }
}
</script>

<style lang="scss" scoped>
.myself {
  // height: 60px;
  // line-height: 60px;
  padding-bottom: 20px;
}
.bd-b {
  border-bottom: 1px solid #f7f7f7;
}
.item-cell {
  height: 39px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    line-height: 40px;
    margin: 0px 10px;
    text-align: left;
  }
  .swtich-style {
    text-align: right;
    margin: 0px 10px;
    margin-top: 4px;
  }
}
.boxer {
  margin: 3px 0px;
}
.popup-style{
  width: 100vw;
  height: 60vh;
  padding: 20px;
  // margin: 20px;
}
</style>
