<template>
  <div>
    <router-view  class="content"/>
    <van-tabbar v-model="active" active-color="#29a1f7">
      <van-tabbar-item icon="home-o" @click="redirectUrl('main.home')">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" dot @click="redirectUrl('main.community')">社区</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" info="5" @click="redirectUrl('main.shopCart')">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" info="20" @click="redirectUrl('main.myself')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    redirectUrl(name) {
      // console.log(name)
      this.$router.push({ name: name })
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  margin-bottom: 50px;
}
</style>
