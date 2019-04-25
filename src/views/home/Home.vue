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
        <van-tab title="时尚">
          <active :spec="specs[1]" :titleList="content.active.shishang_title" :imageList="content.shishangImglist" :dayList="content.active.days"></active>
        </van-tab>
        <van-tab title="美妆">
          <swipe-pic :images="content.lunbo.meizhuang"></swipe-pic>
          <active :spec="specs[2]" :titleList="content.active.meizhuang_title" :imageList="content.meizhuangImglist" :dayList="content.active.days"></active>
        </van-tab>
        <van-tab title="家电">
          <swipe-pic :images="content.lunbo.jiadian"></swipe-pic>
          <active :spec="specs[3]" :titleList="content.active.jiadian_title" :imageList="content.jiadianImglist" :dayList="content.active.days"></active>
        </van-tab>
        <van-tab title="家居">
          <swipe-pic :images="content.lunbo.jiaju"></swipe-pic>
          <active :spec="specs[4]" :titleList="content.active.jiaju_title" :imageList="content.jiajuImglist" :dayList="content.active.days"></active>
        </van-tab>
        <van-tab title="国际">
          <swipe-pic :images="content.lunbo.guoji"></swipe-pic>
          <active :spec="specs[5]" :titleList="content.active.guoji_title" :imageList="content.guojiImglist" :dayList="content.active.days"></active>
        </van-tab>
        <van-tab title="生活">
          <swipe-pic :images="content.lunbo.shenghuo"></swipe-pic>
          <active :spec="specs[6]" :titleList="content.active.shenghuo_title" :imageList="content.shenghuoImglist" :dayList="content.active.days"></active>
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
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
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
      isLoading: false,
      stompClient: null
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
    this.initWebsocket()
  },
  methods: {
    // 刷新页面
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    },
    initWebsocket() {
      // 建立连接对象
      let socket = new SockJS('http://127.0.0.1:8090/endpointNasus')
      // 获取STOMP子协议的客户端对象
      this.stompClient = Stomp.over(socket)
      this.stompClient.debug = null
      // 定义客户端的认证信息,按需求配置
      let headers = {
        Authorization: ''
      }
      this.stompClient.connect(headers, () => {
        console.log('connected')
        this.stompClient.subscribe('/nasus/getResponse', msg => {
          console.log(msg)
        })
      }, error => {
        console.log('fail' + error)
      })
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
