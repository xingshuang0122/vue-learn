<template>
  <div v-if="content!=null">
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
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-tab title="今日推荐">
          <swipe-pic :images="content.lunbo.home"></swipe-pic>
          <active :spec="specs[0]" :titleList="content.active.tuijian_title" :imageList="content.imageList" :dayList="content.active.days"></active>
        </van-tab>
        <van-tab title="时尚">内容 2</van-tab>
        <van-tab title="美妆">
          <swipe-pic :images="content.lunbo.meizhuang"></swipe-pic>
        </van-tab>
        <van-tab title="家电">
          <swipe-pic :images="content.lunbo.jiadian"></swipe-pic>
        </van-tab>
        <van-tab title="家居">
          <swipe-pic :images="content.lunbo.jiaju"></swipe-pic>
        </van-tab>
        <van-tab title="国际">
          <swipe-pic :images="content.lunbo.guoji"></swipe-pic>
        </van-tab>
        <van-tab title="生活">
          <swipe-pic :images="content.lunbo.shenghuo"></swipe-pic>
        </van-tab>
      </van-pull-refresh>
    </van-tabs>
    <!-- <p>{{specs[0]}}</p> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SwipePic from '../../components/SwipePic'
import Active from '../../components/Active'
export default {
  components: {
    SwipePic,
    Active
  },
  data() {
    return {
      active: 0,
      value: '',
      // 该页面的所有数据
      content: null,
      // 是否加载中
      isLoading: false
    }
  },
  computed: {
    ...mapState('home', ['specs'])
  },
  beforeCreate() {
    this.$axios.get('./mock/data.json')
      .then(result => {
        console.log(result.data.home)
        this.content = result.data.home
      }).catch(error => {
        console.log(error)
      })
  },
  mounted() {
    console.log(this.specs)
  },
  methods: {
    // 刷新页面
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
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
