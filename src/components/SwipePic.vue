<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => {
        return [
          'https://a2.vimage1.com/upload/flow/2018/06/11/129/15287110698394.jpg',
          'https://a3.vimage1.com/upload/flow/2018/06/11/79/15286841592012.jpg'
        ]
      }
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  height: 160px;
}
</style>
