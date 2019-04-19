<template>
  <div>
    <van-row type="flex" align="center" justify="center">
      <van-col span="4">
        <a href="#">登录</a>
      </van-col>
      <van-col span="18">
        <van-search placeholder="请输入搜索关键词" v-model="value" />
      </van-col>
      <van-col span="2">
        <van-icon name="qr" />
      </van-col>
    </van-row>
    <van-tabs v-model="active">
      <van-tab title="今日推荐">
        <swipe-pic></swipe-pic>
      </van-tab>
      <van-tab title="时尚">内容 2</van-tab>
      <van-tab title="美妆">内容 3</van-tab>
      <van-tab title="家电">内容 4</van-tab>
      <van-tab title="家居">内容 5</van-tab>
      <van-tab title="国际">内容 6</van-tab>
      <van-tab title="生活">内容 7</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import SwipePic from '../../components/SwipePic'
export default {
  components: {
    SwipePic
  },
  data() {
    return {
      active: 0,
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
// .search a {
//   display: block;
//   width: 60px;
//   height: 35px;
//   line-height: 35px;
//   text-align: center;
// }
// .classfic {
//   display: block;
//   width: 60px;
//   height: 35px;
//   line-height: 35px;
//   margin-left: -40px;
//   font-size: 20px;
// }
</style>
