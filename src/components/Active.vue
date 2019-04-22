<template>
  <div>
    <p>{{spec}}</p>
    <!-- 懒加载  瀑布流-->
    <!-- <lazy-component class="lazys" v-waterfall-lower="loadMore" waterfall-disabled="disabled" waterfall-offset="300"> -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(img,index) in imageList" :key="index">
        <img v-lazy="img" alt="" class="img-display">
        <van-col span="16">
          <h4>{{titleList[index]}}</h4>
        </van-col>
        <van-col span="8">
          <span class="remain-time">剩余{{dayList[index]}}天</span>
        </van-col>
      </van-cell>
    </van-list>
    <!-- </lazy-component> -->
  </div>
</template>

<script>
// import { Waterfall } from 'vant'
// import lazyComponent from 'vue-lazyload'
export default {
  props: {
    spec: {
      type: String,
      default: ''
    },
    titleList: {
      type: Array,
      default: () => []
    },
    imageList: {
      type: Array,
      default: () => []
    },
    dayList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      disabled: false,
      loading: false,
      finished: false
    }
  },
  directives: {
    // 瀑布流
    // WaterfallLower: Waterfall('lower')
  },
  created() {
    // console.log(this.imageList)
  },
  methods: {
    // 瀑布流方法
    onLoad() {
      console.log('触发')
      // this.disabled = true
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.imageList.push(this.imageList[i])
          this.titleList.push(this.titleList[i])
          this.dayList.push(this.dayList[i])
        }
        this.loading = false
        if (this.imageList.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.img-display {
  width: 100%;
}
.remain-time {
  display: inline-block;
  height: 63px;
  line-height: 63px;
}
</style>
